import { takeEvery } from 'redux-saga/effects';
import {
  SERIES_EXPR_CREATE,
  SERIES_REF_CREATE,
  SERIES_DATA_CREATE,
  SERIES_UPDATE,
  SERIES_RESOLVE,
  SERIES_DELETE,
} from '../actions/seriesActions';

import { createExprSeries, createDataSeries, createRefSeries } from './series.create';
// import update from './series.update';
import resolve from './series.resolve';
import updateSeries from './series.update';
import deleteSeries from './series.delete';


export default function* watchGraphActions() {
  yield takeEvery(SERIES_EXPR_CREATE, createExprSeries);
  yield takeEvery(SERIES_REF_CREATE, createRefSeries);
  yield takeEvery(SERIES_DATA_CREATE, createDataSeries);
  yield takeEvery(SERIES_UPDATE, updateSeries);
  yield takeEvery(SERIES_DELETE, deleteSeries);
  yield takeEvery(SERIES_RESOLVE, resolve);
}
