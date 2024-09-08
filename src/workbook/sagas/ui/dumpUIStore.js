import {
  select,
} from 'redux-saga/effects';
import {
  uiStoreSelector,
} from '../../selectors/uiSelectors';


export default function* dumpUIStore() {
  const ui = yield select(uiStoreSelector);
  return {
    ...ui,
  };
}
