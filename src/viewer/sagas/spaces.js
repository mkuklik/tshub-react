/* eslint-disable no-underscore-dangle */
import {
  put, call, takeEvery, takeLatest,
} from 'redux-saga/effects';

import { DELETE_SPACE, FETCH_SPACES, FETCH_SPACE_DETAILS } from '../actions/spacesActions';

import {
  saveSpacesAction,
  saveSpaceDetailsAction,
  saveSpaceRemoveAction,
} from '../actions/spacesActions';
import { timeseriesBrowserSetSpaceListLoading } from '../actions/uiActions';
import { reportErrorAction } from '../actions/errorActions';

const apiFetchSpaces = () => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawSpaceApi.appApiSpaceRawGetList(null, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);

const apiFetchSpaceDetails = (spaceId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawSpaceApi.appApiSpaceRawGet(spaceId, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);

const apiDeleteSpace = (spaceId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawSpaceApi.appApiSpaceRawDelete(spaceId, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);

export function* fetchSpaces() {
  yield put(timeseriesBrowserSetSpaceListLoading(true));

  try {
    const spaces = yield call(apiFetchSpaces);
    yield put(saveSpacesAction(spaces));
    yield put(timeseriesBrowserSetSpaceListLoading(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(reportErrorAction({ message: `Error fetching spaces, ${error}` }));
    yield put(timeseriesBrowserSetSpaceListLoading(false));
  }
}

export function* fetchSpaceDetail({ payload: spaceNode }) {
  const { spaceId } = spaceNode;

  try {
    const spaceDetails = yield call(apiFetchSpaceDetails, spaceId);
    yield put(saveSpaceDetailsAction(spaceDetails));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(reportErrorAction({ message: `Error fetching space details, ${error}` }));
  }
}


export function* deleteSpace({ spaceId }) {
  try {
    yield call(apiDeleteSpace, spaceId);
    yield put(saveSpaceRemoveAction(spaceId));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(reportErrorAction({ message: `Error fetching space details, ${error}` }));
  }
}
export default function* watchSpaceActions() {
  yield takeEvery(FETCH_SPACES, fetchSpaces);
  yield takeEvery(DELETE_SPACE, deleteSpace);
  yield takeLatest(FETCH_SPACE_DETAILS, fetchSpaceDetail);
}
