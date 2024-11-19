import {
  propEq, find, pipe, values, flatten, omit, map, mergeAll, filter, path, has, isNil,
} from 'ramda';

import {
  SAVE_COLLECTIONS,
  TIMESERIES_VIEWER_SELECT_COLLECTION,
  TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
  SAVE_COLLECTION_DETAILS,
  SAVE_COLLECTION,
  SAVE_COLLECTION_REMOVE,
} from '../actions/collectionsActions';

const initialState = {
  collections: {}, // spaceId -> [ Collection Objects ]
  collectionsByID: {}, // collId -> Collection object
  failedCollections: {},
  collectionDetails: null,
  selectedCollection: null,
  timeseriesViewerSelectedCollectionID: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_COLLECTIONS:
      return {
        ...state,
        collections: {
          ...state.collections,
          [payload.spaceId]: map((c) => ({ ...c, spaceId: payload.spaceId }), payload.collections),
        },
        collectionsByID: {
          ...state.collectionsByID,
          ...mergeAll(map((x) => ({
            [x.collId]: { ...x, spaceId: payload.spaceId },
          }), payload.collections)),

        },
        failedCollections: omit([payload.spaceId], state.failedCollections),
      };
    case SAVE_COLLECTION:
      return {
        ...state,
        collections: {
          ...state.collections,
          [payload.spaceId]: [
            ...filter((c) => c.collId !== payload.collection.collId, state.collections[payload.spaceId]),
            { ...payload.collection, spaceId: payload.spaceId },
          ],
        },
        collectionsByID: {
          ...state.collectionsByID,
          [payload.collection.collId]: { ...payload.collection, spaceId: payload.spaceId },
        },
      };
    case SAVE_COLLECTION_REMOVE: {
      const spaceId = path([payload.collId, 'spaceId'], state.collectionsByID);
      const collections = (!has(isNil(spaceId) ? '' : spaceId, state.collections))
        ? state.collections
        : {
          ...state.collections,
          [spaceId]: [
            ...filter(
              (c) => c.collId !== payload.collId,
              state.collections[spaceId],
            ),
          ],
        };
      return {
        ...state,
        collections,
        collectionsByID: omit([payload.collId], state.collectionsByID),
      };
    }
    case SAVE_COLLECTION_DETAILS:
      return {
        ...state,
        collectionDetails: payload,
        collectionsByID: {
          ...state.collectionsByID,
          [payload.collId]: { ...payload },
          // spaceId will be missing!!! Upload is using this space ID to display space name
        },
      };

    case TIMESERIES_VIEWER_SELECT_COLLECTION:
      /* eslint-disable no-case-declarations */
      const allCollections = pipe(values, flatten)(state.collections);
      const selectedCollectionID = payload;
      /* eslint-enable no-case-declarations */

      return {
        ...state,
        selectedCollection: find(propEq('collId', selectedCollectionID))(allCollections),
      };

    case TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS:
      return {
        ...state,
        failedCollections: {
          ...state.failedCollections,
          [payload.spaceId]: payload.message,
        },
      };

    default:
      return state;
  }
};

export default reducer;
