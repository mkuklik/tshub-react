import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector } from '../selectors';
import { saveResolvedParametersAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';


export default function* resolveLMParameters({ ayid }) {
  const analytics = yield select(analyticsSelector(ayid));
  const params = yield select(analyticsParametersSelector(ayid));

  const resolvedParameters = { ...params };
  resolvedParameters.errors = [];
  // let { realtime: AnalyticsRealtime } = analytics;
  const analyticsRealtime = path(['realtime'], analytics) || moment.utc();
  const { wsid: depWsid, realtime: depRealtime } = params.dependent;
  if (isNil(depWsid)) {
    resolvedParameters.errors.push('Dependent variable is not specified');
  }
  else {
    const resolvedDepVar = yield resolveVar({ wsid: depWsid, realtime: depRealtime || analyticsRealtime });
    if (resolvedDepVar.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolvedDepVar.errors);
    }
    resolvedParameters.dependent = resolvedDepVar;
  }
  resolvedParameters.regressors = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const regressor of params.regressors) {
    const { wsid, realtime } = regressor;
    if (isNil(wsid)) {
      resolvedParameters.errors.push(`Unknown wsid for regressor ${regressor.name}`);
    }
    const resolved = yield resolveVar({ wsid, realtime: realtime || analyticsRealtime });
    if (resolved.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolved.errors);
    }
    resolvedParameters.regressors.push(resolved);
  }
  yield put(saveResolvedParametersAction({ ayid, parameters: resolvedParameters }));

  if (resolvedParameters.errors.length > 0) {
    return [undefined, resolvedParameters.errors];
  }
  return [resolvedParameters, undefined];
}
