// Collections
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const REFETCH_COLLECTIONS = 'REFETCH_COLLECTIONS';
export const SAVE_COLLECTIONS = 'SAVE_COLLECTIONS';
export const SAVE_COLLECTION = 'SAVE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const FETCH_COLLECTION_DETAILS = 'FETCH_COLLECTION_DETAILS';
export const SAVE_COLLECTION_DETAILS = 'SAVE_COLLECTION_DETAILS';
export const SAVE_COLLECTION_REMOVE = 'SAVE_COLLECTION_REMOVE';
export const TIMESERIES_VIEWER_SELECT_COLLECTION = 'TIMESERIES_VIEWER_SELECT_COLLECTION';
export const TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS = 'TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS';


export interface FetchCollectionsAction {
  type: typeof FETCH_COLLECTIONS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const fetchCollectionsAction = (data: any): FetchCollectionsAction => ({
  type: FETCH_COLLECTIONS,
  payload: data,
});

export interface RefetchCollectionsAction {
  type: typeof REFETCH_COLLECTIONS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const refetchCollectionsAction = (data: any): RefetchCollectionsAction => ({
  type: REFETCH_COLLECTIONS,
  payload: data,
});

export interface DeleteCollectionAction {
  type: typeof DELETE_COLLECTION;
  collId: string;
}

export const deleteCollectionAction = (collId: string): DeleteCollectionAction => ({
  type: DELETE_COLLECTION,
  collId,
});

export interface SaveCollectionsAction {
  type: typeof SAVE_COLLECTIONS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const saveCollectionsAction = (data: any): SaveCollectionsAction => ({
  type: SAVE_COLLECTIONS,
  payload: data,
});

export interface SaveCollectionAction {
  type: typeof SAVE_COLLECTION;
  payload: { spaceId: string; collection: any }; // Replace 'any' with the actual type of your collection object
}

export const saveCollectionAction = (spaceId: string, collection: any): SaveCollectionAction => ({ // Replace 'any' with the actual type of your collection object
  type: SAVE_COLLECTION,
  payload: { spaceId, collection },
});

export interface SelectCollectionAction {
  type: typeof TIMESERIES_VIEWER_SELECT_COLLECTION;
  payload: any; // Replace 'any' with the actual type of your data
}

export const selectCollectionAction = (data: any): SelectCollectionAction => ({
  type: TIMESERIES_VIEWER_SELECT_COLLECTION,
  payload: data,
});

export interface SetFailedCollectionsAction {
  type: typeof TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const setFailedCollectionsAction = (data: any): SetFailedCollectionsAction => ({
  type: TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
  payload: data,
});

export interface FetchCollectionDetailsAction {
  type: typeof FETCH_COLLECTION_DETAILS;
  collId: string;
}

export const fetchCollectionDetailsAction = (collId: string): FetchCollectionDetailsAction => ({
  type: FETCH_COLLECTION_DETAILS,
  collId,
});

export interface SaveCollectionDetailsAction {
  type: typeof SAVE_COLLECTION_DETAILS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const saveCollectionDetailsAction = (data: any): SaveCollectionDetailsAction => ({
  type: SAVE_COLLECTION_DETAILS,
  payload: data,
});

export interface SaveRemoveCollectionAction {
  type: typeof SAVE_COLLECTION_REMOVE;
  payload: { collId: string };
}

export const saveRemoveCollectionAction = (collId: string): SaveRemoveCollectionAction => ({
  type: SAVE_COLLECTION_REMOVE,
  payload: {
    collId,
  },
});

// import {
//   FETCH_COLLECTIONS,
//   REFETCH_COLLECTIONS,
//   SAVE_COLLECTIONS,
//   SAVE_COLLECTION,
//   DELETE_COLLECTION,
//   TIMESERIES_VIEWER_SELECT_COLLECTION,
//   TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
//   FETCH_COLLECTION_DETAILS,
//   SAVE_COLLECTION_DETAILS,
//   SAVE_COLLECTION_REMOVE,
// } from './ActionTypes';

// export const fetchCollectionsAction = (data) => ({
//   type: FETCH_COLLECTIONS,
//   payload: data,
// });

// export const refetchCollectionsAction = (data) => ({
//   type: REFETCH_COLLECTIONS,
//   payload: data,
// });

// export const deleteCollectionAction = (collId) => ({
//   type: DELETE_COLLECTION,
//   collId,
// });

// export const saveCollectionsAction = (data) => ({
//   type: SAVE_COLLECTIONS,
//   payload: data,
// });

// export const saveCollectionAction = (spaceId, collection) => ({
//   type: SAVE_COLLECTION,
//   payload: { spaceId, collection },
// });

// export const selectCollectionAction = (data) => ({
//   type: TIMESERIES_VIEWER_SELECT_COLLECTION,
//   payload: data,
// });

// export const setFailedCollectionsAction = (data) => ({
//   type: TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
//   payload: data,
// });

// export const fetchCollectionDetailsAction = (collId) => ({
//   type: FETCH_COLLECTION_DETAILS,
//   collId,
// });

// export const saveCollectionDetailsAction = (data) => ({
//   type: SAVE_COLLECTION_DETAILS,
//   payload: data,
// });

// export const saveRemoveCollectionAction = (collId) => ({
//   type: SAVE_COLLECTION_REMOVE,
//   payload: {
//     collId,
//   },
// });
