import { put } from "redux-saga/effects";
import {
  saveDeleteSeriesAction,
  signalSeriesDeletedAction,
  IDeleteSeriesAction,
} from "../actions/seriesActions";

function* deleteSeries({ wsid }: IDeleteSeriesAction) {
  yield put(saveDeleteSeriesAction({ wsid }));
  yield put(signalSeriesDeletedAction({ wsid }));
}

export default deleteSeries;

// import {
//   put,
// } from 'redux-saga/effects';
// import {
//   saveDeleteSeriesAction,
//   signalSeriesDeletedAction,
// } from '../actions/seriesActions';

// function* deleteSeries({ wsid, series } = {}) {
//   yield put(saveDeleteSeriesAction({ wsid }));
//   yield put(signalSeriesDeletedAction({ wsid }));
// }

// export default deleteSeries;
