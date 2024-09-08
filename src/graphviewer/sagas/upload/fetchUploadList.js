import { call, put } from 'redux-saga/effects';
import { omit, map } from 'ramda';
import { saveUploadListAction, saveHasPermissionAction, saveUploadFetchPendingAction } from '../../actions/uploadActions';

export const apiUploadGetList = (collId, offset, limit, since) => {
  const opts = {
    collId,
    offset,
    limit,
    since,
  };
  return (
    new Promise((resolve, reject) => {
      window._chronosdb.rawUploadApi.appApiUploadGetList(
        opts,
        (error, data) => (error ? reject(error) : resolve({
          ...omit(['result'], data),
          result: map((x) => ({ uploadId: x.upload_id, ...omit(['upload_id'], x) }), data.result),
        })),
      );
    })
  );
};


export default function* fetchUploadList({
  collId, limit, offset, since,
}) {
  try {
    yield put(saveUploadFetchPendingAction({ fetchPending: true }));
    const data = yield call(apiUploadGetList, collId, limit, offset, since);

    yield put(saveUploadListAction(data));
    yield put(saveUploadFetchPendingAction({ fetchPending: false }));
    return [data, undefined];
  } catch (error) {
    if (error.status === 403) {
      yield put(saveHasPermissionAction(false));
    }
    yield put(saveUploadFetchPendingAction({ fetchPending: false }));
    return [undefined, error];
  }
}
