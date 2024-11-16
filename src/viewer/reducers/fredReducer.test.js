import { describe, it, expect } from '@jest/globals';
import fred, { initialState } from './fredReducer';
import {
  SAVE_FRED_CATEGORY,
  SAVE_FRED_TIMESERIES_LIST,
} from '../actions/ActionTypes';

describe('Fred reducer', () => {
  it('should return the initial state', () => {
    expect(fred(undefined, {})).toEqual(initialState);
  });

  it('should handle SAVE_FRED_CATEGORY', () => {
    const action = {
      type: SAVE_FRED_CATEGORY,
      payload: {
        categoryId: 123,
        children: [
          { id: 456, name: 'Child Category 1' },
          { id: 789, name: 'Child Category 2' },
        ],
      },
    };
    const expectedState = {
      ...initialState,
      categories: {
        ...initialState.categories,
        123: { name: null, children: [456, 789], fetched: true },
        456: {
          name: 'Child Category 1', parentId: 123, children: null, fetched: false,
        },
        789: {
          name: 'Child Category 2', parentId: 123, children: null, fetched: false,
        },
      },
    };
    expect(fred(initialState, action)).toEqual(expectedState);
  });

  it('should handle SAVE_FRED_TIMESERIES_LIST', () => {
    const action = {
      type: SAVE_FRED_TIMESERIES_LIST,
      payload: {
        categoryId: 123,
        timeseriesList: [
          { id: 'FRED/GDP', title: 'Gross Domestic Product' },
          { id: 'FRED/UNRATE', title: 'Unemployment Rate' },
        ],
      },
    };
    const expectedState = {
      ...initialState,
      timeseriesList: {
        ...initialState.timeseriesList,
        123: action.payload.timeseriesList,
      },
    };
    expect(fred(initialState, action)).toEqual(expectedState);
  });
});
