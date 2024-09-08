/* eslint-disable no-underscore-dangle */
import { put, call } from 'redux-saga/effects';
import { saveObservationsAction } from '../actions/timeseriesActions';
import { reportErrorAction } from '../actions/errorActions';

function appApiRawTimeseriesDataGet(collId, tsids, opts) {
  return new Promise((resolve, reject) => {
    window._chronosdb.rawTimeSeriesDataApi.appApiRawTimeseriesDataGet(collId, tsids, opts,
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

export default function* fetchObservations({ collId, tsids, realtime } = {}) {
  const opts = (realtime !== undefined) ? { realtime: realtime.toISOString() } : {};

  try {
    const data = yield call(appApiRawTimeseriesDataGet, collId, tsids, opts);
    yield put(saveObservationsAction(data));
    return [data, undefined];
  } catch (error) {
    yield put(reportErrorAction({ message: `'FetchObservations Error', ${error}` }));
    return [undefined, `fetching observation failed collId:${collId}, tsids:${tsids}, realtime:${realtime}`];
  }
}
