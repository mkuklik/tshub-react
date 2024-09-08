/* eslint-disable import/prefer-default-export */
import { delay, put } from 'redux-saga/effects';
import { isNil, includes } from 'ramda';
import fetchUploadList from './fetchUploadList';
import fetchUploadObject from './fetchUploadObject';
import { reportErrorAction } from '../../../viewer/actions/errorActions';
import { fetchTimeseriesListAction } from '../../../viewer/actions/timeseriesActions';


const AUTO_REFRESH_DELAY = 5000;
const AUTO_REFRESH_REPEATS = 120 * (1000 / AUTO_REFRESH_DELAY); // over 120 seconds


export function* autoRefreshList({
  collId, limit, offset, since,
} = {}) {
  let count = 0;
  while (count < AUTO_REFRESH_REPEATS) {
    yield delay(AUTO_REFRESH_DELAY); // ms
    yield fetchUploadList({
      collId, limit, offset, since,
    });
    count += 1;
  }
}


export function* autoRefreshUpload({ uploadId, collId } = {}) {
  let count = 0;
  while (count < AUTO_REFRESH_REPEATS) {
    yield delay(AUTO_REFRESH_DELAY); // ms
    const [data, err] = yield fetchUploadObject({ uploadId });
    if (!isNil(err)) yield put(reportErrorAction(`Failed to fetch upload object ${uploadId}`));
    count += 1;
    if (includes(data.status, ['processed_successful', 'committed']) && !isNil(collId)) {
      // refresh list of time series in TimeseriesBrowser
      yield put(fetchTimeseriesListAction(collId));
    }
    // break if finished
    if (includes(data.status, ['processed_successful', 'processed_failed', 'committed'])) break;
  }
}
