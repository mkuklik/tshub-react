import {
  select,
} from 'redux-saga/effects';
import {
  analyticsStoreSelector,
} from '../selectors';


export default function* dumpAnalyticsStore() {
  const analytics = yield select(analyticsStoreSelector);

  return analytics;
}
