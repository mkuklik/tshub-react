import {
  put,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { restoreUIReducer } from '../../action/uiActions';


export default function* loadUIStore({ ui } = {}) {
  // to do process
  const final = ui;
  if (!isNil(ui)) {
    yield put(restoreUIReducer(final));
  }
}
