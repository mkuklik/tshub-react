/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector } from '../selectors';
import { saveResolvedParametersAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';


export default function* resolveCointParameters({ ayid }) {
  if (isNil(ayid)) {
    return [undefined, 'invalid analytics id'];
  }
  const analytics = yield select(analyticsSelector(ayid));
  const params = yield select(analyticsParametersSelector(ayid));

  const resolvedParameters = { ...params };
  resolvedParameters.errors = [];
  // let { realtime: AnalyticsRealtime } = analytics;
  const analyticsRealtime = path(['realtime'], analytics) || moment.utc();
  // x
  const { wsid: depWsid, realtime: depRealtime } = params.x;
  if (isNil(depWsid)) {
    resolvedParameters.errors.push('x is not specified');
  } else {
    const resolvedVar = yield resolveVar({
      wsid: depWsid,
      realtime: depRealtime || analyticsRealtime,
    });
    resolvedParameters.x = resolvedVar;
    if (resolvedVar.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolvedVar.errors);
    }
  }
  // y
  const { wsid: yDepWsid, realtime: yDepRealtime } = params.x;
  if (isNil(depWsid)) {
    resolvedParameters.errors.push('y is not specified');
  } else {
    const resolvedVar = yield resolveVar({
      wsid: yDepWsid,
      realtime: yDepRealtime || analyticsRealtime,
    });
    resolvedParameters.y = resolvedVar;
    if (resolvedVar.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolvedVar.errors);
    }
  }
  yield put(saveResolvedParametersAction({ ayid, parameters: resolvedParameters }));

  if (resolvedParameters.errors.length > 0) {
    return [undefined, resolvedParameters.errors];
  }
  return [resolvedParameters, undefined];
}
