import { takeEvery } from 'redux-saga/effects';
import {
  TABLE_UPDATE,
  TABLE_DOWNLOAD,
} from '../actions/ActionTypes';

import updateTable from './table.updateTable';
import downloadTable from './table.downloadTable';

export default function* watchTableActions() {
  yield takeEvery(TABLE_UPDATE, updateTable);
  yield takeEvery(TABLE_DOWNLOAD, downloadTable);
}
