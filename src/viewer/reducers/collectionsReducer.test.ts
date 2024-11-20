import {
  SAVE_COLLECTIONS,
  TIMESERIES_VIEWER_SELECT_COLLECTION,
  TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS,
  SAVE_COLLECTION_DETAILS,
  SAVE_COLLECTION,
  SAVE_COLLECTION_REMOVE,
  saveCollectionsAction,
  selectCollectionAction,
  setFailedCollectionsAction,
  saveCollectionDetailsAction,
  saveCollectionAction,
  saveRemoveCollectionAction,
} from '../actions/collectionsActions';

import reducer, { CollectionsAction } from './collectionsReducer';

describe('Collections Reducer', () => {
  const initialState = {
    collections: {},
    collectionsByID: {},
    failedCollections: {},
    collectionDetails: undefined,
    selectedCollection: undefined,
    timeseriesViewerSelectedCollectionID: undefined,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as CollectionsAction)).toEqual(initialState);
  });

  it('should handle SAVE_COLLECTIONS', () => {
    const action = saveCollectionsAction({
      spaceId: 'space123',
      collections: [
        { collId: 'coll1', name: 'Collection 1' },
        { collId: 'coll2', name: 'Collection 2' },
      ],
    });

    const expectedState = {
      ...initialState,
      collections: {
        space123: [
          { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
          { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
        ],
      },
      collectionsByID: {
        coll1: { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
        coll2: { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
      },
      failedCollections: {}, // Should clear any existing failedCollections for this spaceId
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SAVE_COLLECTION', () => {
    const existingState = {
      ...initialState,
      collections: {
        space123: [
          { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
        ],
      },
      collectionsByID: {
        coll1: { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
      },
    };

    const action = saveCollectionAction('space123', { collId: 'coll2', name: 'Collection 2' });

    const expectedState = {
      ...existingState,
      collections: {
        space123: [
          { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
          { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
        ],
      },
      collectionsByID: {
        coll1: { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
        coll2: { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
      },
    };

    expect(reducer(existingState, action)).toEqual(expectedState);
  });

  it('should handle SAVE_COLLECTION_REMOVE', () => {
    const existingState = {
      ...initialState,
      collections: {
        space123: [
          { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
          { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
        ],
      },
      collectionsByID: {
        coll1: { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
        coll2: { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
      },
    };

    const action = saveRemoveCollectionAction('coll1');

    const expectedState = {
      ...existingState,
      collections: {
        space123: [
          { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
        ],
      },
      collectionsByID: {
        coll2: { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
      },
    };

    expect(reducer(existingState, action)).toEqual(expectedState);
  });

  it('should handle SAVE_COLLECTION_DETAILS', () => {
    const action = saveCollectionDetailsAction({
      collId: 'coll1',
      name: 'Updated Collection 1',
      description: 'This is an updated collection',
    });

    const expectedState = {
      ...initialState,
      collectionDetails: {
        collId: 'coll1',
        name: 'Updated Collection 1',
        description: 'This is an updated collection',
      },
      collectionsByID: {
        coll1: {
          collId: 'coll1',
          name: 'Updated Collection 1',
          description: 'This is an updated collection',
        },
      },
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle TIMESERIES_VIEWER_SELECT_COLLECTION', () => {
    const existingState = {
      ...initialState,
      collections: {
        space123: [
          { collId: 'coll1', name: 'Collection 1', spaceId: 'space123' },
          { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
        ],
      },
    };

    const action = selectCollectionAction('coll2');

    const expectedState = {
      ...existingState,
      selectedCollection: { collId: 'coll2', name: 'Collection 2', spaceId: 'space123' },
    };

    expect(reducer(existingState, action)).toEqual(expectedState);
  });

  it('should handle TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS', () => {
    const action = setFailedCollectionsAction({
      spaceId: 'space456',
      message: 'Failed to fetch collections',
    });

    const expectedState = {
      ...initialState,
      failedCollections: {
        space456: 'Failed to fetch collections',
      },
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
