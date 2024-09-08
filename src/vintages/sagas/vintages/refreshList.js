
import { call, put } from 'redux-saga/effects';
import { saveVintagesListAction } from '../../actions/vintagesActions';
import { apiVintagesGetList } from './fetchVintageList';

export default function* refreshList({ collId, tsid }) {
  try {
    const data = yield call(apiVintagesGetList, collId, tsid);
    yield put(saveVintagesListAction(data));
    return [data, undefined];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [undefined, error];
  }
}
