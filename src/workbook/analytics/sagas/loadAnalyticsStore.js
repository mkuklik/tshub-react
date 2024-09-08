import {
  put,
} from 'redux-saga/effects';
import { restoreAnalyticsStoreAction } from '../actions';


export default function* loadAnalyticsStore({ analytics } = {}) {
  // to do process
  const final = analytics;

  yield put(restoreAnalyticsStoreAction(final));
}
