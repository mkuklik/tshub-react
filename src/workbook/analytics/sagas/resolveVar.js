/* eslint-disable import/prefer-default-export */
import { select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { resolvedSeriesSelector } from '../../../viewer/selectors/series';
import resolveSeries from '../../../viewer/sagas/series.resolve';


export function* resolveVar({ wsid, realtime }) {
  let resolved;
  resolved = yield select(resolvedSeriesSelector(wsid));
  // TODO check for realtime in resolved equal to realtime
  if (isNil(resolved)) {
    resolved = yield resolveSeries({ wsid, realtime });
  }
  return { ...resolved, wsid };
}
