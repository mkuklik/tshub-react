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

// Define interfaces for the different action types
export interface ISaveModelAction {
  type: typeof WORKBOOK_SAVE_MODEL;
  payload: { model: any }; // Replace 'any' with the actual model type
}

export interface ISaveAnalyticsModelAction {
  type: typeof WORKBOOK_SAVE_ANALYTICS_MODEL;
  payload: { model: any }; // Replace 'any' with the actual model type
}

export interface ISaveTimeseriesBrowserModelAction {
  type: typeof WORKBOOK_SAVE_TSB_MODEL;
  payload: { model: any }; // Replace 'any' with the actual model type
}

export interface ICloseAnalyticsTabAction {
  type: typeof WORKBOOK_CLOSE_ANALYTICS_TAB;
  nodeId: string;
}

export interface ICloseGraphTabAction {
  type: typeof WORKBOOK_CLOSE_GRAPH_TAB;
  nodeId: string;
}

export interface ISaveWorkbookAction {
  type: typeof WORKBOOK_PUT_WORKBOOK;
}

export interface ILoadWorkbookAction {
  type: typeof WORKBOOK_GET_WORKBOOK;
}

export interface IOnModelChangeAction {
  type: typeof WORKBOOK_ON_MODEL_CHANGE;
  layout: any; // Replace 'any' with the actual layout type
  model: any; // Replace 'any' with the actual model type
}

export interface IOnActionAction {
  type: typeof WORKBOOK_ON_ACTION;
  layout: any; // Replace 'any' with the actual layout type
  action: any; // Replace 'any' with the actual action type
}

export interface ICreateAnalyticsTabAction {
  type: typeof WORKBOOK_CREATE_ANALYTICS_TAB;
  kind: string;
  ayid: string;
}

export interface IAddAnalyticsTabAction {
  type: typeof WORKBOOK_ADD_ANALYTICS_TAB;
  ayid: string;
}

export interface ISwitchGraphLayoutsAction {
  type: typeof WORKBOOK_SWITCH_GRAPH_LAYOUTS;
  layoutIndex: number;
}

export interface ISaveActiveGraphLayoutAction {
  type: typeof WORKBOOK_SAVE_ACTIVE_LAYOUT;
  payload: { layoutIndex: number };
}

export interface ISaveActiveGraphTabsetAction {
  type: typeof WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET;
  payload: { activeGraphTabset: string }; // Or the correct type for activeGraphTabset
}

export interface IWorkbookAddNewGraphTabAction {
  type: typeof WORKBOOK_ADD_NEW_GRAPH_TAB;
  tabsetId: string;
  gid: string;
}

export interface IUpdateMetadataAction {
  type: typeof WORKBOOK_UPDATE_METADATA;
  title: string;
  description: string;
}

export interface IUpdateFavoriteAction {
  type: typeof WORKBOOK_UPDATE_FAVORITE;
  isFavorite: boolean;
}

export interface ISaveWidAction {
  type: typeof WORKBOOK_SAVE_WID;
  payload: { wid: string };
}

export interface ISaveMetadataAction {
  type: typeof WORKBOOK_SAVE_METADATA;
  payload: { title: string; description: string };
}

export interface ISaveIsFavoriteAction {
  type: typeof WORKBOOK_SAVE_FAVORITE;
  payload: { isFavorite: boolean };
}

export interface ISaveWorkbookUIPropsAction {
  type: typeof WORKBOOK_SAVE_WORKBOOK_UI_PROPS;
  payload: any; // Replace 'any' with the actual UI props type
}

export interface ICreateAnalyticsFromSeriesAction {
  type: typeof WORKBOOK_CREATE_ANALYTICS_FROM_SERIES;
  kind: string;
  wsid: string;
}

export interface IOpenAnalyticsBorderTabAction {
  type: typeof WORKBOOK_OPEN_ANALYTICS_BORDER_TAB;
}

export interface IOpenTimeSeriesBrowserAction {
  type: typeof WORKBOOK_OPEN_TIMESERIES_BROWSER;
}

export interface IOpenUploadAction {
  type: typeof WORKBOOK_OPEN_UPLOAD;
}

export interface IToggleTourOpenAction {
  type: typeof UI_SAVE_TOUR_IS_TOUR_OPEN;
  payload: { isTourOpen: boolean };
}

// Action creators with type annotations
export const saveModelAction = (model: any): ISaveModelAction => ({
  type: WORKBOOK_SAVE_MODEL,
  payload: { model },
});

export const saveAnalyticsModelAction = (model: any): ISaveAnalyticsModelAction => ({
  type: WORKBOOK_SAVE_ANALYTICS_MODEL,
  payload: { model },
});

export const saveTimeseriesBrowserModelAction = (model: any): ISaveTimeseriesBrowserModelAction => ({
  type: WORKBOOK_SAVE_TSB_MODEL,
  payload: { model },
});

export const closeAnalyticsTabAction = (nodeId: string): ICloseAnalyticsTabAction => ({
  type: WORKBOOK_CLOSE_ANALYTICS_TAB,
  nodeId,
});

export const closeGraphTabAction = (nodeId: string): ICloseGraphTabAction => ({
  type: WORKBOOK_CLOSE_GRAPH_TAB,
  nodeId,
});

export const saveWorkbookAction = (): ISaveWorkbookAction => ({
  type: WORKBOOK_PUT_WORKBOOK,
});

export const loadWorkbookAction = (): ILoadWorkbookAction => ({
  type: WORKBOOK_GET_WORKBOOK,
});

export const onModelChangeAction = (
  layout: any, // Replace 'any' with the actual layout type
  model: any, // Replace 'any' with the actual model type
): IOnModelChangeAction => ({
  type: WORKBOOK_ON_MODEL_CHANGE,
  layout,
  model,
});

export const onActionAction = (
  layout: any, // Replace 'any' with the actual layout type
  action: any, // Replace 'any' with the actual action type
): IOnActionAction => ({
  type: WORKBOOK_ON_ACTION,
  layout,
  action,
});

export const createAnalyticsTabAction = ({
  kind = '',
  ayid = '',
}: {
  kind?: string;
  ayid?: string
} = {}): ICreateAnalyticsTabAction => ({
  type: WORKBOOK_CREATE_ANALYTICS_TAB,
  kind,
  ayid,
});

export const addAnalyticsTabAction = (ayid: string): IAddAnalyticsTabAction => ({
  type: WORKBOOK_ADD_ANALYTICS_TAB,
  ayid,
});

export const switchGraphLayoutsAction = (layoutIndex: number): ISwitchGraphLayoutsAction => ({
  type: WORKBOOK_SWITCH_GRAPH_LAYOUTS,
  layoutIndex,
});

export const saveActiveGraphLayoutAction = (layoutIndex: number): ISaveActiveGraphLayoutAction => ({
  type: WORKBOOK_SAVE_ACTIVE_LAYOUT,
  payload: { layoutIndex },
});

export const saveActiveGraphTabsetAction = (
  activeGraphTabset: string, // Or the correct type for activeGraphTabset
): ISaveActiveGraphTabsetAction => ({
  type: WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
  payload: { activeGraphTabset },
});

export const workbookAddNewGraphTabAction = (
  tabsetId: string,
  gid: string,
): IWorkbookAddNewGraphTabAction => ({
  type: WORKBOOK_ADD_NEW_GRAPH_TAB,
  tabsetId,
  gid,
});

// Action creators with type annotations and default values

export const updateMetadataAction = (title?: string,
  description?: string): IUpdateMetadataAction => ({
  type: WORKBOOK_UPDATE_METADATA,
  title: title || '',
  description: description || '',
});

export const updateFavoriteAction = ({
  isFavorite,
}: {
  isFavorite: boolean;
}): IUpdateFavoriteAction => ({
  type: WORKBOOK_UPDATE_FAVORITE,
  isFavorite,
});

export const saveWidAction = (wid: string): ISaveWidAction => ({
  type: WORKBOOK_SAVE_WID,
  payload: { wid },
});

export const saveMetadataAction = ({
  title = '',
  description = '',
}: {
  title?: string;
  description?: string;
} = {}): ISaveMetadataAction => ({
  type: WORKBOOK_SAVE_METADATA,
  payload: { title, description },
});

export const saveIsFavoriteAction = (isFavorite: boolean): ISaveIsFavoriteAction => ({
  type: WORKBOOK_SAVE_FAVORITE,
  payload: { isFavorite },
});

export const saveWorkbookUIPropsAction = (props: any): ISaveWorkbookUIPropsAction => ({
  type: WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
  payload: props,
});

export const createAnalyticsFromSeriesAction = ({
  kind = '',
  wsid = '',
}: {
  kind?: string;
  wsid?: string;
} = {}): ICreateAnalyticsFromSeriesAction => ({
  type: WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
  kind,
  wsid,
});

export const openAnalyticsBorderTabAction = (): IOpenAnalyticsBorderTabAction => ({
  type: WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
});

export const openTimeSeriesBrowserAction = (): IOpenTimeSeriesBrowserAction => ({
  type: WORKBOOK_OPEN_TIMESERIES_BROWSER,
});

export const openUploadAction = (): IOpenUploadAction => ({
  type: WORKBOOK_OPEN_UPLOAD,
});

export const toggleTourOpenAction = ({
  isTourOpen,
}: {
  isTourOpen: boolean;
}): IToggleTourOpenAction => ({
  type: UI_SAVE_TOUR_IS_TOUR_OPEN,
  payload: { isTourOpen },
});

// import {
//   WORKBOOK_SAVE_MODEL,
//   WORKBOOK_SAVE_ANALYTICS_MODEL,
//   WORKBOOK_SAVE_TSB_MODEL,
//   WORKBOOK_ON_MODEL_CHANGE,
//   WORKBOOK_ON_ACTION,
//   WORKBOOK_CLOSE_GRAPH_TAB,
//   WORKBOOK_CLOSE_ANALYTICS_TAB,
//   WORKBOOK_SWITCH_GRAPH_LAYOUTS,
//   WORKBOOK_SAVE_ACTIVE_LAYOUT,
//   WORKBOOK_ADD_NEW_GRAPH_TAB,
//   WORKBOOK_CREATE_ANALYTICS_TAB,
//   WORKBOOK_ADD_ANALYTICS_TAB,
//   WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
//   WORKBOOK_UPDATE_METADATA,
//   WORKBOOK_SAVE_METADATA,
//   WORKBOOK_SAVE_FAVORITE,
//   WORKBOOK_SAVE_WID,
//   // UPDATE_ANALYTICS_MODEL,
//   WORKBOOK_UPDATE_FAVORITE,
//   WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
//   WORKBOOK_PUT_WORKBOOK,
//   WORKBOOK_GET_WORKBOOK,
//   WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
//   WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
//   WORKBOOK_OPEN_TIMESERIES_BROWSER,
//   WORKBOOK_OPEN_UPLOAD,
//   UI_SAVE_TOUR_IS_TOUR_OPEN,
// } from './ActionTypes';

// // SAVE STORE
// export const saveModelAction = (model) => ({
//   type: WORKBOOK_SAVE_MODEL,
//   payload: {
//     model,
//   },
// });

// export const saveAnalyticsModelAction = (model) => ({
//   type: WORKBOOK_SAVE_ANALYTICS_MODEL,
//   payload: {
//     model,
//   },
// });

// export const saveTimeseriesBrowserModelAction = (model) => ({
//   type: WORKBOOK_SAVE_TSB_MODEL,
//   payload: {
//     model,
//   },
// });

// // CALL SAGAS
// export const closeAnalyticsTabAction = (nodeId) => ({
//   type: WORKBOOK_CLOSE_ANALYTICS_TAB,
//   nodeId,
// });

// export const closeGraphTabAction = (nodeId) => ({
//   type: WORKBOOK_CLOSE_GRAPH_TAB,
//   nodeId,
// });

// export const saveWorkbookAction = () => ({
//   type: WORKBOOK_PUT_WORKBOOK,
// });

// export const loadWorkbookAction = () => ({
//   type: WORKBOOK_GET_WORKBOOK,
// });

// export const onModelChangeAction = (layout, model) => ({
//   type: WORKBOOK_ON_MODEL_CHANGE,
//   layout,
//   model,
// });

// export const onActionAction = (layout, action) => ({
//   type: WORKBOOK_ON_ACTION,
//   layout,
//   action,
// });

// // ANALYTICS

// export const createAnalyticsTabAction = ({ kind, ayid } = {}) => ({
//   type: WORKBOOK_CREATE_ANALYTICS_TAB,
//   kind,
//   ayid,
// });

// export const addAnalyticsTabAction = (ayid) => ({
//   type: WORKBOOK_ADD_ANALYTICS_TAB,
//   ayid,
// });

// // GRAPH LAYOUT

// export const switchGraphLayoutsAction = (layoutIndex) => ({
//   type: WORKBOOK_SWITCH_GRAPH_LAYOUTS,
//   layoutIndex,
// });

// export const saveActiveGraphLayoutAction = (layoutIndex) => ({
//   type: WORKBOOK_SAVE_ACTIVE_LAYOUT,
//   payload: {
//     layoutIndex,
//   },
// });

// export const saveActiveGraphTabsetAction = (activeGraphTabset) => ({
//   type: WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
//   payload: {
//     activeGraphTabset,
//   },
// });

// export const workbookAddNewGraphTabAction = (tabsetId, gid) => ({
//   type: WORKBOOK_ADD_NEW_GRAPH_TAB,
//   tabsetId,
//   gid,
// });

// export const updateMetadataAction = ({ title, description } = {}) => ({
//   type: WORKBOOK_UPDATE_METADATA,
//   title,
//   description,
// });

// export const updateFavoriteAction = ({ isFavorite } = {}) => ({
//   type: WORKBOOK_UPDATE_FAVORITE,
//   isFavorite,
// });

// export const saveWidAction = (wid) => ({
//   type: WORKBOOK_SAVE_WID,
//   payload: { wid },
// });

// export const saveMetadataAction = ({ title, description } = {}) => ({
//   type: WORKBOOK_SAVE_METADATA,
//   payload: { title, description },
// });

// export const saveIsFavoriteAction = (isFavorite) => ({
//   type: WORKBOOK_SAVE_FAVORITE,
//   payload: { isFavorite },
// });

// export const saveWorkbookUIPropsAction = (props) => ({
//   type: WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
//   payload: props,
// });

// //
// // Start Analytocs
// //
// export const createAnalyticsFromSeriesAction = ({ kind, wsid } = {}) => ({
//   type: WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
//   kind,
//   wsid,
// });

// export const openAnalyticsBorderTabAction = () => ({
//   type: WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
// });

// export const openTimeSeriesBrowserAction = () => ({
//   type: WORKBOOK_OPEN_TIMESERIES_BROWSER,
// });

// export const openUploadAction = () => ({
//   type: WORKBOOK_OPEN_UPLOAD,
// });

// // Tour
// export const toggleTourOpenAction = ({ isTourOpen } = {}) => ({
//   type: UI_SAVE_TOUR_IS_TOUR_OPEN,
//   payload: {
//     isTourOpen,
//   },
// });

// // export const updateAnalyticsModelAction = (updatedModel) => ({
// //   type: UPDATE_ANALYTICS_MODEL,
// //   payload: {
// //     analyticsModel: updatedModel,
// //   },
// // });
