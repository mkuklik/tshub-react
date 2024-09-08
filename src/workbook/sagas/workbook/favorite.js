
import {
  call, put, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { isNil, path } from 'ramda';
import {
  saveIsFavoriteAction,
} from '../../action/workbookActions';
import { reportErrorAction } from '../../../viewer/actions/errorActions';
import { workbookWidSelector, workbookIsFavoriteSelector } from '../../selectors/workbookSelectors';


function* getFavorite(wid) {
  try {
    const response = yield call(axios.get, `/workbook/${wid}/api/follow`);
    return [response, undefined];
  } catch (error) {
    console.error(error.toJSON());
    // todo
    return [undefined, error];
  }
}


function* putFavorite(wid, isfollowed) {
  const payload = {
    state: (isfollowed) ? 'follow' : 'unfollow',
  };

  try {
    const response = yield call(axios.post, `workbook/${wid}/api/follow`, payload);
    return [response, undefined];
  } catch (error) {
    return [undefined, error];
  }
}

export function* fetchFavorite() {
  const wid = yield select(workbookWidSelector);
  const [payload, error] = yield getFavorite(wid);
  if (!isNil(error)) {
    // report errors
    yield put(reportErrorAction({ message: `Failed to fetch workbook favorite status, ${error}`}));
    return;
  }
  yield put(saveIsFavoriteAction(path(['data', 'isFavorite'], payload) || false));
}


export function* updateFavorite({ isFavorite } = {}) {
  const wid = yield select(workbookWidSelector);
  const [payload, error] = yield call(putFavorite, wid, isFavorite);
  if (!isNil(error)) {
    // report errors
    yield put(reportErrorAction({ message: `failed to update favorite: ${error}` }));
    const original = yield select(workbookIsFavoriteSelector);
    yield put(saveIsFavoriteAction(original));
    return;
  }
  yield put(saveIsFavoriteAction(isFavorite));
}
