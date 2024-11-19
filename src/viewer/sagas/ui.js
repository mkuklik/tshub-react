import { all, takeEvery, fork } from 'redux-saga/effects';
import {
  TIMESERIES_BROWSER_ADD_SERIES,
} from '../actions/uiActions';

import addTimeseries from './ui.timeseriesBrowserAddTimeseries';
import watchUIFredActions from './ui.fred';

export default function* watchUIActions() {
  yield all([
    takeEvery(TIMESERIES_BROWSER_ADD_SERIES, addTimeseries),
    fork(watchUIFredActions),
  ]);
}
