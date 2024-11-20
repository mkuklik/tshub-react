import * as r from 'ramda';

import {
  FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
  FRED_BROWSER_SAVE_SELECT_CATEGORY,
  FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
  FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
} from '../actions/uiActions';

import { UI_SAVE_RESTORE_REDUCER } from '../../workbook/action/uiActions';

const fredBrowserInitialState = {
  isCategoryListLoading: false,
  isTimeseriesListLoading: false,
  isFredBrowserConfigOverlayOpen: false,
  selectedCategoryId: undefined,
  expandedCategories: {},
};

const fredBrowserReducer = (state = fredBrowserInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FRED_BROWSER_TOGGLE_CONFIG_OVERLAY:
      return {
        ...state,
        isFredBrowserConfigOverlayOpen: !state.isFredBrowserConfigOverlayOpen,
      };

    case FRED_BROWSER_SAVE_EXPANDED_CATEGORY:
      return {
        ...state,
        expandedCategories: {
          ...state.expandedCategories,
          [payload.categoryId]: undefined,
        },
      };

    case FRED_BROWSER_SAVE_COLLAPSED_CATEGORY:
      return {
        ...state,
        expandedCategories: r.omit([payload.categoryId], state.expandedCategories),
      };

    case FRED_BROWSER_SAVE_SELECT_CATEGORY: {
      const { categoryId } = payload;
      return {
        ...state,
        selectedCategoryId: (categoryId === state.selectedCategoryId) ? undefined : categoryId,
      };
    }
    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...payload.fredBrowser,
      };
    default:
      return state;
  }
};

export default fredBrowserReducer;
