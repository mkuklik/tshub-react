import { takeEvery } from 'redux-saga/effects';
import {
  TIMESERIES_BROWSER_ADD_SERIES,
} from '../actions/ActionTypes';

import addTimeseries from './ui.timeseriesBrowserAddTimeseries';


export default function* watchUIActions() {
  yield takeEvery(TIMESERIES_BROWSER_ADD_SERIES, addTimeseries);
}
