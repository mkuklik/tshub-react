import * as r from 'ramda';

import {
  // TIMESERIES_BROWSER_SET_SPACES_LOADING,
  // TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
  // TIMESERIES_BROWSER_SELECT_SPACE,
  // TIMESERIES_BROWSER_SELECT_COLLECTION,
  // TIMESERIES_BROWSER_EXPAND_SPACE,
  // TIMESERIES_BROWSER_COLLAPSE_SPACE,
  // TIMESERIES_BROWSER_SET_SPACE_LOADING,
  // TIMESERIES_VIEWER_SELECT_TIMESERIES,
  // TIMESERIES_BROWSER_SET_OVER_NODE_ID,
  // TOGGLE_CREATE_SPACE_OVERLAY,
  // TOGGLE_CREATE_COLLECTION_OVERLAY,
  // TOGGLE_CREATE_TIMESERIES_OVERLAY,
  // TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,

  // FRED_BROWSER_SET_CATEGOTY_LOADING,
  // FRED_BROWSER_SET_TIMESERIES_LOADING,
  FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
  FRED_BROWSER_SAVE_SELECT_CATEGORY,
  FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
  FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
} from '../actions/ActionTypes';
import { UI_SAVE_RESTORE_REDUCER } from '../../workbook/action/ActionTypes';

const fredBrowserInitialState = {
  // loadingSpaces: {},
  // expandedSpaces: {},
  // selectedSpaceId: null,
  // selectedCollectionID: null,
  // overSpaceId: null,
  // selectedTimeseries: [],
  // isCreateSpaceOverlayOpen: false,
  // createCollectioninSpaceId: undefined,
  // isCreateCollectionOverlayOpen: false,
  // createTimeseriesInSpaceId: undefined,
  // createTimeseriesInCollId: undefined,
  // isCreateTimeseriesOverlayOpen: false,
  // isDeleteSpaceCollectionOverlayOpen: false,
  //
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

      // REMOVE CASES BELOW
      // case TIMESERIES_BROWSER_SELECT_SPACE:
      //   return {
      //     ...state,
      //     selectedSpaceId: payload,
      //     selectedCollectionID: null,
      //   };

      // case TIMESERIES_BROWSER_SELECT_COLLECTION:
      //   return {
      //     ...state,
      //     selectedSpaceId: null,
      //     selectedCollectionID: payload,
      //   };

      // case TIMESERIES_BROWSER_EXPAND_SPACE:
      //   return {
      //     ...state,
      //     expandedSpaces: {
      //       ...state.expandedSpaces,
      //       [payload.spaceId]: payload,
      //     },
      //   };

      // case TIMESERIES_BROWSER_COLLAPSE_SPACE:
      //   return {
      //     ...state,
      //     expandedSpaces: r.omit([payload.spaceId], state.expandedSpaces),
      //   };

      // case TIMESERIES_BROWSER_SET_TIMESERIES_LOADING:
      //   return {
      //     ...state,
      //     isTimeseriesListLoading: payload,
      //   };

      // case TIMESERIES_BROWSER_SET_SPACE_LOADING: {
      //   const { spaceId, isLoading } = payload;

      //   return {
      //     ...state,
      //     loadingSpaces: isLoading
      //       ? r.assoc(spaceId, true, state.loadingSpaces)
      //       : r.omit([spaceId], state.loadingSpaces),
      //   };
      // }

    // case TIMESERIES_VIEWER_SELECT_TIMESERIES:
    //   return {
    //     ...state,
    //     selectedTimeseries: payload,
    //   };
    // case UI_SAVE_RESTORE_REDUCER:
    //   return {
    //     ...state,
    //     ...payload.timeseriesBrowser,
    //   };
    // case TOGGLE_CREATE_SPACE_OVERLAY:
    //   return {
    //     ...state,
    //     isCreateSpaceOverlayOpen: !state.isCreateSpaceOverlayOpen,
    //   };
    // case TOGGLE_CREATE_COLLECTION_OVERLAY:
    //   return {
    //     ...state,
    //     createCollectioninSpaceId: (!state.isCreateCollectionOverlayOpen)
    //       ? payload.spaceId : undefined,
    //     isCreateCollectionOverlayOpen: !state.isCreateCollectionOverlayOpen,
    //   };
    // case TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY:
    //   return {
    //     ...state,
    //     isDeleteSpaceCollectionOverlayOpen: !state.isDeleteSpaceCollectionOverlayOpen,
    //   };
    // case TOGGLE_CREATE_TIMESERIES_OVERLAY:
    //   return {
    //     ...state,
    //     createTimeseriesInSpaceId: (!state.isCreateTimeseriesOverlayOpen)
    //       ? payload.spaceId : undefined,
    //     createTimeseriesInCollId: (!state.isCreateTimeseriesOverlayOpen)
    //       ? payload.collId : undefined,
    //     isCreateTimeseriesOverlayOpen: !state.isCreateTimeseriesOverlayOpen,
    //   };
    // case TIMESERIES_BROWSER_SET_OVER_NODE_ID: {
    //   if (!r.isNil(r.prop('spaceId', payload))) {
    //     return {
    //       ...state,
    //       overSpaceId: payload.spaceId,
    //     };
    //   }
    //   if (r.isNil(payload)) {
    //     return {
    //       ...state,
    //       overSpaceId: null,
    //     };
    //   }
    //   return state;
    // }
    default:
      return state;
  }
};

export default fredBrowserReducer;
