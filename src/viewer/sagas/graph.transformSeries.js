import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import moment from 'moment';
import Moment from 'react-moment';
import {
  saveTransformedSeriesBulkAction, addGraphErrorsAction,
} from '../actions/graphActions';
import {
  graphSelector,
  graphFreqSelector,
} from '../selectors/graph';
import { resolvedSeriesSelector } from '../selectors/series';
import { TS } from '../../expressions/timeseries';
import { freqOrder } from '../../expressions/freqOrder';
import {
  toHigherFrequency,
  toLowerFrequency,
  mergeSeries,
} from '../../expressions/timeseries-graph-functions';
import { GraphProcessingStage } from './graph.constants';
import { defaultResolvedSeries } from './graph.defaults';

const defaults = {
  toHigherFrequencyMethod: 'auto',
  toLowerFrequencyMethod: 'auto',
  missingValueMethod: 'auto',
  partialPeriodsMethod: 'auto',
};

function transformFreq(ts, toFreq, toHigherMethod, toLowerMethod) {
  let out;
  if (toFreq === ts.freq) {
    return ts;
  } if (freqOrder[toFreq] > freqOrder[ts.freq]) {
    out = toHigherFrequency(ts, toFreq, toHigherMethod);
  } else {
    out = toLowerFrequency(ts, toFreq, toLowerMethod);
  }
  return out;
}


export default function* transformSeries(gid, wsid) {
  /*
  transform resolved series to graph frequency and others like chosen currency
  and merge
  */

  let transformedSeries = {};

  // 1. transform frequencies
  const graph = yield select(graphSelector(gid));
  const determinedFreq = yield select(graphFreqSelector(gid));

  const graphDef = graph.definition;
  if (graphDef === undefined) return;
  // todo handle this situation

  if (determinedFreq === undefined) {
    // handle errors
    for (const seriesDef of graphDef.series) {
      transformedSeries[seriesDef.wsid] = defaultResolvedSeries(seriesDef.wsid);
    }
    yield put(saveTransformedSeriesBulkAction({ gid, transformedSeries }));
    return transformedSeries;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const seriesDef of graphDef.series) {
    // take resolved series
    const rs = yield select(resolvedSeriesSelector(seriesDef.wsid));
    if (isNil(rs)) {
      yield put(addGraphErrorsAction({
        gid,
        errors: [{
          wsid: seriesDef.wsid,
          message: `resolved series (${seriesDef.wsid}) not found`,
          stage: GraphProcessingStage.TRANSFORM,
        }],
      }));
      transformedSeries[seriesDef.wsid] = new TS([], undefined, undefined, undefined, undefined, undefined, undefined);
      continue;
    }
    // convert to TS object
    const ts = new TS(rs.data.map((x) => [moment.utc(x[0]), x[1]]),
      rs.freq, rs.fparams, rs.dtype, rs.dparams, rs.units, rs.options);

    // 1. partial values treatment
    // TODO

    // 2. convert to graph frequency
    const toLowerFrequencyMethod = seriesDef.toLowerFrequencyMethod
      || graphDef.toLowerFrequencyMethod
      || defaults.toLowerFrequencyMethod;
    const toHigherFrequencyMethod = seriesDef.ToHigherFrequencyMethod
      || graphDef.toHigherFrequencyMethod
      || defaults.toHigherFrequencyMethod;

    try {
      transformedSeries[seriesDef.wsid] = transformFreq(
        ts,
        graph.determinedFreq,
        toHigherFrequencyMethod,
        toLowerFrequencyMethod,
      );
    } catch (error) {
      // TODO TODO TODO !!!
      // transformedSeries[seriesDef.wsid] = undefined; // TEMP
      throw error;
    }
    // determine whether series was modified from its original frequency, if so reset collId/tsid,
    // otherwise use collId/tsid from seriesDef. Note that collId/tsid in transformed series is
    // used by the table. We need to do it becuase series that changed its frequency can't have
    // target asign to it as graph frequency is different than original freq of that series.
    if (graph.determinedFreq === rs.freq) {
      transformedSeries[seriesDef.wsid].collId = rs.collId;
      transformedSeries[seriesDef.wsid].tsid = rs.tsid;
    } else {
      transformedSeries[seriesDef.wsid].collId = undefined;
      transformedSeries[seriesDef.wsid].tsid = undefined;
    }

    // 3. missing values
    //   deal with missing values as per series
    const missingValueMethod = seriesDef.missingValueMethod || graphDef.missingValueMethod;
    // TODO
  }
  // 4. merge
  const mergeMethod = graphDef.mergeMethod
    || defaults.mergeMethod || 'any';

  // 5. range
  let { rangeStart, rangeEnd } = graphDef;
  if (!isNil(rangeStart)) rangeStart = moment.utc(rangeStart);
  if (!isNil(rangeEnd)) rangeEnd = moment.utc(rangeEnd);
  // make sure rangeStart, rangeEnd

  // try {
  const mergedSeries = mergeSeries(transformedSeries, mergeMethod, rangeStart, rangeEnd);
  // } catch (error) {
  // todo
  // }

  // 5. convert back to timestamp
  // eslint-disable-next-line no-restricted-syntax
  for (const seriesDef of graphDef.series) {
    transformedSeries[seriesDef.wsid] = {
      // ...transformedSeries[seriesDef.wsid],
      freq: mergedSeries[seriesDef.wsid].freq,
      fparams: mergedSeries[seriesDef.wsid].fparams,
      dtype: mergedSeries[seriesDef.wsid].dtype,
      dparams: mergedSeries[seriesDef.wsid].dparams,
      units: mergedSeries[seriesDef.wsid].units,
      data: mergedSeries[seriesDef.wsid].data.map((x) => [x[0].valueOf(), x[1]]),
      // required for annotation and table module
      collId: transformedSeries[seriesDef.wsid].collId,
      tsid: transformedSeries[seriesDef.wsid].tsid,
    };
  }


  yield put(saveTransformedSeriesBulkAction({ gid, transformedSeries }));
  return transformedSeries;
}
