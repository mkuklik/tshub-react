import {
  WORKBOOK_SAVE_MODEL,
  WORKBOOK_SAVE_ANALYTICS_MODEL,
  WORKBOOK_SAVE_TSB_MODEL,
  WORKBOOK_ON_MODEL_CHANGE,
  WORKBOOK_ON_ACTION,
  WORKBOOK_CLOSE_GRAPH_TAB,
  WORKBOOK_CLOSE_ANALYTICS_TAB,
  WORKBOOK_SWITCH_GRAPH_LAYOUTS,
  WORKBOOK_SAVE_ACTIVE_LAYOUT,
  WORKBOOK_ADD_NEW_GRAPH_TAB,
  WORKBOOK_CREATE_ANALYTICS_TAB,
  WORKBOOK_ADD_ANALYTICS_TAB,
  WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
  WORKBOOK_UPDATE_METADATA,
  WORKBOOK_SAVE_METADATA,
  WORKBOOK_SAVE_FAVORITE,
  WORKBOOK_SAVE_WID,
  // UPDATE_ANALYTICS_MODEL,
  WORKBOOK_UPDATE_FAVORITE,
  WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
  WORKBOOK_PUT_WORKBOOK,
  WORKBOOK_GET_WORKBOOK,
  WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
  WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
  WORKBOOK_OPEN_TIMESERIES_BROWSER,
  WORKBOOK_OPEN_UPLOAD,
  UI_SAVE_TOUR_IS_TOUR_OPEN,
} from './ActionTypes';

// SAVE STORE
export const saveModelAction = (model) => ({
  type: WORKBOOK_SAVE_MODEL,
  payload: {
    model,
  },
});

export const saveAnalyticsModelAction = (model) => ({
  type: WORKBOOK_SAVE_ANALYTICS_MODEL,
  payload: {
    model,
  },
});

export const saveTimeseriesBrowserModelAction = (model) => ({
  type: WORKBOOK_SAVE_TSB_MODEL,
  payload: {
    model,
  },
});


// CALL SAGAS
export const closeAnalyticsTabAction = (nodeId) => ({
  type: WORKBOOK_CLOSE_ANALYTICS_TAB,
  nodeId,
});

export const closeGraphTabAction = (nodeId) => ({
  type: WORKBOOK_CLOSE_GRAPH_TAB,
  nodeId,
});

export const saveWorkbookAction = () => ({
  type: WORKBOOK_PUT_WORKBOOK,
});


export const loadWorkbookAction = () => ({
  type: WORKBOOK_GET_WORKBOOK,
});

export const onModelChangeAction = (layout, model) => ({
  type: WORKBOOK_ON_MODEL_CHANGE,
  layout,
  model,
});

export const onActionAction = (layout, action) => ({
  type: WORKBOOK_ON_ACTION,
  layout,
  action,
});

// ANALYTICS

export const createAnalyticsTabAction = ({ kind, ayid } = {}) => ({
  type: WORKBOOK_CREATE_ANALYTICS_TAB,
  kind,
  ayid,
});

export const addAnalyticsTabAction = (ayid) => ({
  type: WORKBOOK_ADD_ANALYTICS_TAB,
  ayid,
});


// GRAPH LAYOUT

export const switchGraphLayoutsAction = (layoutIndex) => ({
  type: WORKBOOK_SWITCH_GRAPH_LAYOUTS,
  layoutIndex,
});


export const saveActiveGraphLayoutAction = (layoutIndex) => ({
  type: WORKBOOK_SAVE_ACTIVE_LAYOUT,
  payload: {
    layoutIndex,
  },
});

export const saveActiveGraphTabsetAction = (activeGraphTabset) => ({
  type: WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
  payload: {
    activeGraphTabset,
  },
});


export const workbookAddNewGraphTabAction = (tabsetId, gid) => ({
  type: WORKBOOK_ADD_NEW_GRAPH_TAB,
  tabsetId,
  gid,
});


export const updateMetadataAction = ({ title, description } = {}) => ({
  type: WORKBOOK_UPDATE_METADATA,
  title,
  description,
});

export const updateFavoriteAction = ({ isFavorite } = {}) => ({
  type: WORKBOOK_UPDATE_FAVORITE,
  isFavorite,
});


export const saveWidAction = (wid) => ({
  type: WORKBOOK_SAVE_WID,
  payload: { wid },
});

export const saveMetadataAction = ({ title, description } = {}) => ({
  type: WORKBOOK_SAVE_METADATA,
  payload: { title, description },
});

export const saveIsFavoriteAction = (isFavorite) => ({
  type: WORKBOOK_SAVE_FAVORITE,
  payload: { isFavorite },
});

export const saveWorkbookUIPropsAction = (props) => ({
  type: WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
  payload: props,
});


//
// Start Analytocs
//
export const createAnalyticsFromSeriesAction = ({ kind, wsid } = {}) => ({
  type: WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
  kind,
  wsid,
});

export const openAnalyticsBorderTabAction = () => ({
  type: WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
});

export const openTimeSeriesBrowserAction = () => ({
  type: WORKBOOK_OPEN_TIMESERIES_BROWSER,
});

export const openUploadAction = () => ({
  type: WORKBOOK_OPEN_UPLOAD,
});

// Tour
export const toggleTourOpenAction = ({ isTourOpen } = {}) => ({
  type: UI_SAVE_TOUR_IS_TOUR_OPEN,
  payload: {
    isTourOpen,
  },
});

// export const updateAnalyticsModelAction = (updatedModel) => ({
//   type: UPDATE_ANALYTICS_MODEL,
//   payload: {
//     analyticsModel: updatedModel,
//   },
// });
