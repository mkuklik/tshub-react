
// import { call, put } from 'redux-saga/effects';
// import { saveUploadListAction } from '../../actions/uploadActions';
// import { apiUploadGetList } from './fetchUploadList';
import fetchUploadList from './fetchUploadList';

export default function* refreshList({ collId }) {
  return yield fetchUploadList({ collId });
  // try {
  //   const data = yield call(apiUploadGetList, collId);
  //   yield put(saveUploadListAction(data));
  //   return [data, undefined];
  // } catch (error) {
  //   // eslint-disable-next-line no-console
  //   console.error(error);
  //   return [undefined, error];
  // }
}
