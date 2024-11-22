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

  FetchCollectionsAction,
  RefetchCollectionsAction,
  DeleteCollectionAction,
  SaveCollectionsAction,
  SaveCollectionAction,
  SelectCollectionAction,
  SetFailedCollectionsAction,
  FetchCollectionDetailsAction,
  SaveCollectionDetailsAction,
  SaveRemoveCollectionAction,
} from '../actions/collectionsActions';

export interface Collection {
  collId: string;
  spaceId: string;
  // ... other properties of a Collection
}

export interface ICollectionsState {
  collections: { [spaceId: string]: Collection[] };
  collectionsByID: { [collId: string]: Collection };
  failedCollections: { [spaceId: string]: string };
  collectionDetails: Collection | undefined;
  selectedCollection: Collection | undefined;
  timeseriesViewerSelectedCollectionID: string | undefined;
}

const initialState: ICollectionsState = {
  collections: {}, // spaceId -> [ Collection Objects ]
  collectionsByID: {}, // collId -> Collection object
  failedCollections: {},
  collectionDetails: undefined,
  selectedCollection: undefined,
  timeseriesViewerSelectedCollectionID: undefined,
};

export type CollectionsAction =
  | FetchCollectionsAction
  | RefetchCollectionsAction
  | DeleteCollectionAction
  | SaveCollectionsAction
  | SaveCollectionAction
  | SelectCollectionAction
  | SetFailedCollectionsAction
  | FetchCollectionDetailsAction
  | SaveCollectionDetailsAction
  | SaveRemoveCollectionAction;

const reducer = (state: ICollectionsState = initialState, action: CollectionsAction): ICollectionsState => {
  switch (action.type) {
    case SAVE_COLLECTIONS:
      return {
        ...state,
        collections: {
          ...state.collections,
          [action.payload.spaceId]: map((c: Collection) => ({ ...c, spaceId: action.payload.spaceId }), action.payload.collections),
        },
        collectionsByID: {
          ...state.collectionsByID,
          ...mergeAll(map((x: Collection) => ({
            [x.collId]: { ...x, spaceId: action.payload.spaceId },
          }), action.payload.collections)),

        },
        failedCollections: omit([action.payload.spaceId], state.failedCollections),
      };
    case SAVE_COLLECTION:
      return {
        ...state,
        collections: {
          ...state.collections,
          [action.payload.spaceId]: [
            ...filter((c: Collection) => c.collId !== action.payload.collection.collId, state.collections[action.payload.spaceId]),
            { ...action.payload.collection, spaceId: action.payload.spaceId },
          ],
        },
        collectionsByID: {
          ...state.collectionsByID,
          [action.payload.collection.collId]: { ...action.payload.collection, spaceId: action.payload.spaceId },
        },
      };
    case SAVE_COLLECTION_REMOVE: {
      const spaceId : string = path([action.payload.collId, 'spaceId'], state.collectionsByID) || '';
      const collections = (!has(isNil(spaceId) ? '' : spaceId, state.collections))
        ? state.collections
        : {
          ...state.collections,
          [spaceId]: [
            ...filter(
              (c: Collection) => c.collId !== action.payload.collId,
              state.collections[spaceId as string],
            ),
          ],
        };
      return {
        ...state,
        collections,
        collectionsByID: omit([action.payload.collId], state.collectionsByID),
      };
    }
    case SAVE_COLLECTION_DETAILS:
      return {
        ...state,
        collectionDetails: action.payload,
        collectionsByID: {
          ...state.collectionsByID,
          [action.payload.collId]: { ...action.payload },
          // spaceId will be missing!!! Upload is using this space ID to display space name
        },
      };

    case TIMESERIES_VIEWER_SELECT_COLLECTION:
      /* eslint-disable no-case-declarations */
      const allCollections = pipe(values, flatten)(state.collections);
      const selectedCollectionID = action.payload;
      /* eslint-enable no-case-declarations */

      return {
        ...state,
        selectedCollection: find(propEq('collId', selectedCollectionID))(allCollections) as Collection | undefined,
      };

    case TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS:
      return {
        ...state,
        failedCollections: {
          ...state.failedCollections,
          [action.payload.spaceId]: action.payload.message,
        },
      };

    default:
      return state;
  }
};

export default reducer;

// import {
//   propEq, find, pipe, values, flatten, omit, map, mergeAll, filter, path, has, isNil,
// } from 'ramda';

// import {
//   SAVE_COLLECTIONS,
//   TIMESERIES_VIEWER_SELECT_COLLECTION,
//   TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
//   SAVE_COLLECTION_DETAILS,
//   SAVE_COLLECTION,
//   SAVE_COLLECTION_REMOVE,
// } from '../actions/collectionsActions';

// const initialState = {
//   collections: {}, // spaceId -> [ Collection Objects ]
//   collectionsByID: {}, // collId -> Collection object
//   failedCollections: {},
//   collectionDetails: null,
//   selectedCollection: null,
//   timeseriesViewerSelectedCollectionID: null,
// };

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SAVE_COLLECTIONS:
//       return {
//         ...state,
//         collections: {
//           ...state.collections,
//           [action.payload.spaceId]: map((c) => ({ ...c, spaceId: action.payload.spaceId }), action.payload.collections),
//         },
//         collectionsByID: {
//           ...state.collectionsByID,
//           ...mergeAll(map((x) => ({
//             [x.collId]: { ...x, spaceId: action.payload.spaceId },
//           }), action.payload.collections)),

//         },
//         failedCollections: omit([action.payload.spaceId], state.failedCollections),
//       };
//     case SAVE_COLLECTION:
//       return {
//         ...state,
//         collections: {
//           ...state.collections,
//           [action.payload.spaceId]: [
//             ...filter((c) => c.collId !== action.payload.collection.collId, state.collections[action.payload.spaceId]),
//             { ...action.payload.collection, spaceId: action.payload.spaceId },
//           ],
//         },
//         collectionsByID: {
//           ...state.collectionsByID,
//           [action.payload.collection.collId]: { ...action.payload.collection, spaceId: action.payload.spaceId },
//         },
//       };
//     case SAVE_COLLECTION_REMOVE: {
//       const spaceId = path([action.payload.collId, 'spaceId'], state.collectionsByID);
//       const collections = (!has(isNil(spaceId) ? '' : spaceId, state.collections))
//         ? state.collections
//         : {
//           ...state.collections,
//           [spaceId]: [
//             ...filter(
//               (c) => c.collId !== action.payload.collId,
//               state.collections[spaceId],
//             ),
//           ],
//         };
//       return {
//         ...state,
//         collections,
//         collectionsByID: omit([action.payload.collId], state.collectionsByID),
//       };
//     }
//     case SAVE_COLLECTION_DETAILS:
//       return {
//         ...state,
//         collectionDetails: payload,
//         collectionsByID: {
//           ...state.collectionsByID,
//           [action.payload.collId]: { ...payload },
//           // spaceId will be missing!!! Upload is using this space ID to display space name
//         },
//       };

//     case TIMESERIES_VIEWER_SELECT_COLLECTION:
//       /* eslint-disable no-case-declarations */
//       const allCollections = pipe(values, flatten)(state.collections);
//       const selectedCollectionID = payload;
//       /* eslint-enable no-case-declarations */

//       return {
//         ...state,
//         selectedCollection: find(propEq('collId', selectedCollectionID))(allCollections),
//       };

//     case TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS:
//       return {
//         ...state,
//         failedCollections: {
//           ...state.failedCollections,
//           [action.payload.spaceId]: action.payload.message,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
