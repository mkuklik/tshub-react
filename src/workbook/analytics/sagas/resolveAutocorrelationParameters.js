/* eslint-disable import/prefer-default-export */
import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import moment from 'moment';
import { analyticsSelector, analyticsParametersSelector } from '../selectors';
import { saveResolvedParametersAction } from '../actions';
import { resolveVar } from './resolveVar';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';
import { createExprSeries } from '../../../viewer/sagas/series.create';
import { seriesSelector } from '../../../viewer/selectors/series';


export default function* resolveAutocorrelationParameters({ ayid }) {
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
    // Transform
    let resolvedWsid = depWsid; // level
    const transformation = params.transformation.value || 'level';
    if (transformation === 'diff1') {
      const tmp = yield select(seriesSelector(depWsid));
      const expr = `diff(${tmp.expr})`;
      const name = `diff(${tmp.name})`;
      resolvedWsid = yield createExprSeries({ expr, name });
    } else if (transformation === 'diff2') {
      const tmp = yield select(seriesSelector(depWsid));
      const expr = `diff(diff(${tmp.expr}))`;
      const name = `diff(diff(${tmp.name}))`;
      resolvedWsid = yield createExprSeries({ expr, name });
    }
    // resolve
    const resolvedVar = yield resolveVar({
      wsid: resolvedWsid,
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
