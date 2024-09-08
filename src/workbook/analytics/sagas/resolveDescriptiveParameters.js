/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import {
  isNil, path, map, any,
} from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector, analyticsUISelector } from '../selectors';
import { saveResolvedParametersAction, updateAnalyticsUIAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';


export default function* resolveDescriptivearameters({ ayid }) {
  if (isNil(ayid)) {
    return [undefined, 'invalid analytics id'];
  }
  const params = yield select(analyticsParametersSelector(ayid));
  const analytics = yield select(analyticsSelector(ayid));

  const resolvedParameters = { ...params };
  resolvedParameters.errors = [];
  // let { realtime: AnalyticsRealtime } = analytics;
  const analyticsRealtime = path(['realtime'], analytics) || moment.utc();
  const { wsid: depWsid, realtime: depRealtime } = params.variable;
  if (isNil(depWsid)) {
    resolvedParameters.errors.push('Variable is not specified');
  } else {
    const resolvedVar = yield resolveVar({
      wsid: depWsid,
      realtime: depRealtime || analyticsRealtime,
    });
    resolvedParameters.variable = resolvedVar;
    if (resolvedVar.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolvedVar.errors);
    }
  }

  // procentiles
  const ui = yield select(analyticsUISelector(ayid));

  let tmp = path(['procentiles', 'text'], ui);
  tmp = tmp.split(',');
  const values = map(Number, tmp);

  // to check for errors
  let hasError = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const x of values) {
    if (isNaN(x)) {
      resolvedParameters.errors = resolvedParameters.errors.concat(
        `Failed to parse '${x}`,
      );
      yield updateAnalyticsUIAction(ayid, {
        procentiles: {
          ...ui.procentiles,
          error: true,
        },
      });
      hasError = true;
    }
    if (x < 0 || x > 100) {
      resolvedParameters.errors = resolvedParameters.errors.concat(
        `procentile must be between 0 and 100`,
      );
      yield updateAnalyticsUIAction(ayid, {
        procentiles: {
          ...ui.procentiles,
          error: true,
        },
      });
      hasError = true;
    }
  }

  if (!hasError) {
    resolvedParameters.procentiles = { values };
  }

  yield put(saveResolvedParametersAction({ ayid, parameters: resolvedParameters }));

  if (resolvedParameters.errors.length > 0) {
    return [undefined, resolvedParameters.errors];
  }
  return [resolvedParameters, undefined];
}
