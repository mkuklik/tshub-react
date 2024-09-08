import {
  FETCH_COLLECTIONS,
  REFETCH_COLLECTIONS,
  SAVE_COLLECTIONS,
  SAVE_COLLECTION,
  DELETE_COLLECTION,
  TIMESERIES_VIEWER_SELECT_COLLECTION,
  TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
  FETCH_COLLECTION_DETAILS,
  SAVE_COLLECTION_DETAILS,
  SAVE_COLLECTION_REMOVE,
} from './ActionTypes';

export const fetchCollectionsAction = (data) => ({
  type: FETCH_COLLECTIONS,
  payload: data,
});

export const refetchCollectionsAction = (data) => ({
  type: REFETCH_COLLECTIONS,
  payload: data,
});

export const deleteCollectionAction = (collId) => ({
  type: DELETE_COLLECTION,
  collId,
});

export const saveCollectionsAction = (data) => ({
  type: SAVE_COLLECTIONS,
  payload: data,
});

export const saveCollectionAction = (spaceId, collection) => ({
  type: SAVE_COLLECTION,
  payload: { spaceId, collection },
});

export const selectCollectionAction = (data) => ({
  type: TIMESERIES_VIEWER_SELECT_COLLECTION,
  payload: data,
});

export const setFailedCollectionsAction = (data) => ({
  type: TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
  payload: data,
});

export const fetchCollectionDetailsAction = (collId) => ({
  type: FETCH_COLLECTION_DETAILS,
  collId,
});

export const saveCollectionDetailsAction = (data) => ({
  type: SAVE_COLLECTION_DETAILS,
  payload: data,
});

export const saveRemoveCollectionAction = (collId) => ({
  type: SAVE_COLLECTION_REMOVE,
  payload: {
    collId,
  },
});
