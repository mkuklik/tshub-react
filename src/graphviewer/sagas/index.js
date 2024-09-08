import {
  fork,
  all,
} from 'redux-saga/effects';
import watchUploadActions from './upload/upload';


export default function* root() {
  yield all([
    fork(watchUploadActions),
  ]);
}
