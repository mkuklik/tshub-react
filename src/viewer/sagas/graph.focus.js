import {
  put, fork,
} from 'redux-saga/effects';
import { saveCurrentGraphIdAction } from '../actions/graphActions';
import updateTable from './table.updateTable';

export default function* focus({ payload: { gid } } = {}) {

  yield put(saveCurrentGraphIdAction({ gid }));
  yield fork(updateTable);
}
