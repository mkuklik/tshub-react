/* eslint-disable no-underscore-dangle */
import { keys } from 'ramda';
import {
  all, put, call, select, takeEvery, takeLatest,
} from 'redux-saga/effects';

import {
  DELETE_COLLECTION,
  FETCH_COLLECTIONS,
  REFETCH_COLLECTIONS,
  FETCH_COLLECTION_DETAILS,
} from '../actions/ActionTypes';

import {
  timeseriesBrowserExpandSpace,
  timeseriesBrowserSetSpaceLoading,
} from '../actions/uiActions';

import {
  saveCollectionsAction,
  saveCollectionDetailsAction,
  setFailedCollectionsAction,
  saveRemoveCollectionAction,
} from '../actions/collectionsActions';

import {
  getTimeseriesBrowserExpandedSpaces,
} from '../selectors/ui';

import {
  getCollections,
} from '../selectors/collections';
import { reportApiError, reportErrorAction } from '../actions/errorActions';

const apiFetchCollections = (spaceId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawCollectionApi.appApiCollectionRawGetList(spaceId, null, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);

const apiFetchCollectionDetails = (collId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawCollectionApi.appApiCollectionRawGet(collId, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);


const apiDeleteCollection = (collId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawCollectionApi.appApiCollectionRawDelete(collId, (error, data) => (
      error ? reject(error) : resolve(data)
    ));
  })
);

export function* fetchCollections({ payload: { spaceId, spaceNode } }) {
  yield put(timeseriesBrowserSetSpaceLoading({ spaceId, isLoading: true }));

  try {
    const collections = yield call(apiFetchCollections, spaceId);
    yield put(saveCollectionsAction({ spaceId, collections }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(reportApiError({ error }));
    yield put(setFailedCollectionsAction({ spaceId, message: error.message }));
    yield put(reportErrorAction({ message: `Error fetching collections, ${error}` }));
    // toast({
    //   title: 'Error fetching collections',
    //   description: error,
    // });
  } finally {
    yield put(timeseriesBrowserExpandSpace(spaceNode));
    yield put(timeseriesBrowserSetSpaceLoading({ spaceId, isLoading: false }));
  }
}

export function* refetchCollections() {
  const collections = yield select(getCollections);
  const expandedSpaces = yield select(getTimeseriesBrowserExpandedSpaces);
  const spacesIDs = keys(collections);

  yield all(spacesIDs.map((spaceId) => (
    call(fetchCollections, { payload: { spaceId, spaceNode: expandedSpaces[spaceId] } })
  )));
}

export function* fetchCollectionDetails({ collId }) {
  try {
    const collectionDetails = yield call(apiFetchCollectionDetails, collId);
    yield put(saveCollectionDetailsAction(collectionDetails));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching collection details, ${error}` }));
  }
}


export function* deleteCollection({ collId }) {
  try {
    yield call(apiDeleteCollection, collId);
    yield put(saveRemoveCollectionAction(collId));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error deleting collection, ${error}` }));
  }
}


export default function* watchCollectionActions() {
  yield takeEvery(FETCH_COLLECTIONS, fetchCollections);
  yield takeLatest(REFETCH_COLLECTIONS, refetchCollections);
  yield takeLatest(FETCH_COLLECTION_DETAILS, fetchCollectionDetails);
  yield takeLatest(DELETE_COLLECTION, deleteCollection);
}
