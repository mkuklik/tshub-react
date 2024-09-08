import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector } from '../selectors';
import { saveResolvedParametersAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';


export default function* resolveVARParameters({ ayid }) {
  const analytics = yield select(analyticsSelector(ayid));
  const params = yield select(analyticsParametersSelector(ayid));

  const resolvedParameters = { ...params };
  resolvedParameters.errors = [];
  const analyticsRealtime = path(['realtime'], analytics) || moment.utc();

  resolvedParameters.endogenous = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const variable of params.endogenous) {
    const { wsid, realtime } = variable;
    if (isNil(wsid)) {
      resolvedParameters.errors.push(`Unknown wsid for endogenous variable ${variable.name}`);
    }
    const resolved = yield resolveVar({ wsid, realtime: realtime || analyticsRealtime });
    if (resolved.status === SeriesStatus.ERROR) {
      resolvedParameters.errors = resolvedParameters.errors.concat(resolved.errors);
    }
    resolvedParameters.endogenous.push(resolved);
  }
  yield put(saveResolvedParametersAction({ ayid, parameters: resolvedParameters }));

  if (resolvedParameters.errors.length > 0) {
    return [undefined, resolvedParameters.errors];
  }
  return [resolvedParameters, undefined];
}
