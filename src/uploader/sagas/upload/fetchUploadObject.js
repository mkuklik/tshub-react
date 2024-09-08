import { call, put } from 'redux-saga/effects';
import { omit } from 'ramda';
import { saveUploadObjectAction } from '../../actions/uploadActions';


// appApiUploadGet
const apiUploadGet = (uploadId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawUploadApi.appApiUploadGet(
      uploadId,
      (error, data) => (error ? reject(error) : resolve({ uploadId: data.upload_id, ...omit(['upload_id'], data) })),
    );
  })
);


export default function* fetchUploadObject({ uploadId }) {
  try {
    const data = yield call(apiUploadGet, uploadId);
    yield put(saveUploadObjectAction(data));
    return [data, undefined];
  } catch (error) {
    return [undefined, error];
  }
}
