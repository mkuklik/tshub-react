import {
  takeEvery,
} from 'redux-saga/effects';
import {
  UPLOAD_CREATE,
  UPLOAD_FETCH_LIST,
  UPLOAD_FETCH_OBJECT,
  UPLOAD_REFRESH_LIST,
  UPLOAD_AUTO_REFRESH_LIST,
  UPLOAD_AUTO_REFRESH_OBJECT,
} from '../../actions/uploadActions';
import fetchUploadList from './fetchUploadList';
import fetchUploadObject from './fetchUploadObject';
import createUpload from './createUpload';
import refreshList from './refreshList';
import { autoRefreshList, autoRefreshUpload } from './autoRefresh';


export default function* watchUploadActions() {
  yield takeEvery(UPLOAD_CREATE, createUpload);
  yield takeEvery(UPLOAD_FETCH_LIST, fetchUploadList);
  yield takeEvery(UPLOAD_FETCH_OBJECT, fetchUploadObject);
  yield takeEvery(UPLOAD_REFRESH_LIST, refreshList);
  yield takeEvery(UPLOAD_AUTO_REFRESH_LIST, autoRefreshList);
  yield takeEvery(UPLOAD_AUTO_REFRESH_OBJECT, autoRefreshUpload);
}
