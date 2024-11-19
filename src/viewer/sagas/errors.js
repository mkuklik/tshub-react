import { takeEvery } from 'redux-saga/effects';
import { REPORT_API_ERROR, REPORT_ERROR } from '../actions/errorActions';
import apiErrorHandler from './errors.apiErrorHandler';
import genericErrorHandler from './errors.genericErrorHandler';

export default function* watchErrorActions() {
  yield takeEvery(REPORT_ERROR, genericErrorHandler);
  yield takeEvery(REPORT_API_ERROR, apiErrorHandler);
}
