import {
  put,
} from 'redux-saga/effects';
import {
  saveDeleteSeriesAction,
  signalSeriesDeletedAction,
} from '../actions/seriesActions';

function* deleteSeries({ wsid, series } = {}) {
  yield put(saveDeleteSeriesAction({ wsid }));
  yield put(signalSeriesDeletedAction({ wsid }));
}

export default deleteSeries;
