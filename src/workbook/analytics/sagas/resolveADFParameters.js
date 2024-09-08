/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector } from '../selectors';
import { saveResolvedParametersAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';


export default function* resolveADFParameters({ ayid }) {
  if (isNil(ayid)) {
    return [undefined, 'invalid analytics id'];
  }
  const analytics = yield select(analyticsSelector(ayid));
  const params = yield select(analyticsParametersSelector(ayid));

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
  yield put(saveResolvedParametersAction({ ayid, parameters: resolvedParameters }));

  if (resolvedParameters.errors.length > 0) {
    return [undefined, resolvedParameters.errors];
  }
  return [resolvedParameters, undefined];
}
