import {
  select,
} from 'redux-saga/effects';
import moment from 'moment';
import * as R from 'ramda';

import { SeriesStatus } from './series.constants';
import { defaultsSelector } from '../selectors/graph';
import resolveReference from './series.resolveReference';
import fetchReference from './graph.fetchReference';
import Evaluator from '../../expressions/Evaluator';
import { TS } from '../../expressions/timeseries';

/*
  resolve expr series
*/

function* resolveExpr({ expr, realtime } = {}) {
  let resolvedSeries = {
    expr,
    tsid: undefined,
    collId: undefined,
    realtime: undefined,
    data: [],
    freq: undefined,
    fparams: undefined,
    dtype: undefined,
    dparams: undefined,
    units: undefined,
    errors: [],
    status: SeriesStatus.RESOLVING,
  };

  const evaluator = new Evaluator(expr);

  if (evaluator.hasErrors()) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, ...evaluator.errors];
    return resolvedSeries;
  }

  let refs = evaluator.getRefs();

  // DEFAULTS
  // fill in missing values like collId, collName or spaceId, spaceName
  // e.g. user can $abc and since default collection is xyz in space hgf,
  // system will expand it to $abc.xyz.hgf
  const defaultsStore = yield select(defaultsSelector);
  // eslint-disable-next-line no-restricted-syntax
  for (const refId in refs) {
    if (R.has(refId, refs)) {
      const ref = refs[refId];
      if (ref.collId === undefined && ref.collName === undefined) {
        refs[refId].collId = defaultsStore.collId;
        refs[refId].collName = defaultsStore.collName;
      }
      if (ref.spaceId === undefined && ref.spaceName === undefined) {
        refs[refId].spaceId = defaultsStore.spaceId;
        refs[refId].spaceName = defaultsStore.spaceName;
      }
    }
  }

  // resolve references
  // look up tsid and collId for all references using namespace
  const { refs: rrRefs, errors: rrErrors } = yield resolveReference(refs);
  refs = rrRefs;

  // check for errors
  if (!R.isEmpty(rrErrors)) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, ...rrErrors];
    return resolvedSeries;
  }

  // TODO check if any reference is $({wsid: "2321"}), and produce error ( this si to prevent circular expressions )

  // update tsid, collId for series which are single variable only, e.g.  =$abc or =$dfads.dsafds.sdaf(start="2000-01-01")
  if (evaluator.isSingleReference()) {
    resolvedSeries.tsid = R.path(['_ref0', 'tsid'], refs);
    resolvedSeries.collId = R.path(['_ref0', 'collId'], refs);
  }

  if (realtime === undefined) realtime = moment.utc();
  // fetch observations
  const refsData = yield fetchReference({ refs, realtime });
  // collect errors
  const fetchedErrors = R.filter((x) => !R.isNil(x), R.flatten(Object.values(refsData).map((x) => x.error)));
  if (!R.isEmpty(fetchedErrors)) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, ...fetchedErrors];
    return resolvedSeries;
  }

  // convert data to TS
  const data = R.map((x) => new TS(x.data, x.freq, x.fparams, x.dtype, x.dparams), refsData);

  // evaluate
  const [ts, evalErrors] = evaluator.evaluate(data);

  if (evaluator.hasErrors()) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, ...evaluator.errors];
    return resolvedSeries;
  }

  if (R.isNil(ts)) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, 'Expression is undefined'];
    return resolvedSeries;
  }

  if (!(ts instanceof TS)) {
    resolvedSeries.status = SeriesStatus.ERROR;
    resolvedSeries.errors = [...resolvedSeries.errors, 'Expression didn\'t evaluate to a timeseries'];
    return resolvedSeries;
  }

  // RETURN EVALUATED VALUE
  resolvedSeries = {
    ...resolvedSeries,
    realtime,
    data: ts.data.map((x) => [+x[0], x[1]]),
    freq: ts.freq,
    fparams: ts.fparams,
    dtype: ts.dtype,
    dparams: ts.dparams,
    units: ts.units,
    status: SeriesStatus.SUCCESS,
    errors: [],
  };
  return resolvedSeries;
}

export default resolveExpr;
