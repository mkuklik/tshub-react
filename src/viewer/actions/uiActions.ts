// import {
//   TIMESERIES_BROWSER_SET_SPACES_LOADING,
//   TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
//   TIMESERIES_BROWSER_SELECT_SPACE,
//   TIMESERIES_BROWSER_SELECT_COLLECTION,
//   TIMESERIES_BROWSER_EXPAND_SPACE,
//   TIMESERIES_BROWSER_COLLAPSE_SPACE,
//   TIMESERIES_BROWSER_SET_SPACE_LOADING,
//   TIMESERIES_VIEWER_SELECT_TIMESERIES,
//   ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
//   ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
//   ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
//   ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
//   TOGGLE_CREATE_SPACE_OVERLAY,
//   TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
//   TOGGLE_CREATE_COLLECTION_OVERLAY,
//   TOGGLE_CREATE_TIMESERIES_OVERLAY,
//   TIMESERIES_BROWSER_SET_OVER_NODE_ID,
//   ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_ADD_TARGET,
//   ANNOTATIONS_SET_DELETE_TARGET,
//   ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
//   TIMESERIES_BROWSER_ADD_SERIES,
//   FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
//   FRED_BROWSER_SELECT_CATEGORY,
//   FRED_BROWSER_EXPAND_CATEGORY,
//   FRED_BROWSER_COLLAPSE_CATEGORY,
//   FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
//   FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
//   FRED_BROWSER_SAVE_SELECT_CATEGORY,
//   FRED_BROWSER_SET_CATEGORY_LOADING,
//   FRED_BROWSER_SET_SERIES_LOADING,
// } from './ActionTypes';

// UI
export const TIMESERIES_BROWSER_SET_SPACES_LOADING =
  "TIMESERIES_BROWSER_SET_SPACES_LOADING";
export const TIMESERIES_BROWSER_SET_TIMESERIES_LOADING =
  "TIMESERIES_BROWSER_SET_TIMESERIES_LOADING";
export const TIMESERIES_BROWSER_SELECT_SPACE =
  "TIMESERIES_BROWSER_SELECT_SPACE";
export const TIMESERIES_BROWSER_SELECT_COLLECTION =
  "TIMESERIES_BROWSER_SELECT_COLLECTION";
export const TIMESERIES_BROWSER_EXPAND_SPACE =
  "TIMESERIES_BROWSER_EXPAND_SPACE";
export const TIMESERIES_BROWSER_COLLAPSE_SPACE =
  "TIMESERIES_BROWSER_COLLAPSE_SPACE";
export const TIMESERIES_BROWSER_SET_SPACE_LOADING =
  "TIMESERIES_BROWSER_SET_SPACE_LOADING";
export const TIMESERIES_VIEWER_SELECT_TIMESERIES =
  "TIMESERIES_VIEWER_SELECT_TIMESERIES";
export const TIMESERIES_VIEWER_SELECT_COLLECTION =
  "TIMESERIES_VIEWER_SELECT_COLLECTION";
export const TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS =
  "TIMESERIES_VIEWER_SET_FAILED_COLLECTIONS";
export const TIMESERIES_BROWSER_SET_OVER_NODE_ID =
  "TIMESERIES_BROWSER_SET_OVER_NODE_ID";
export const TIMESERIES_BROWSER_ADD_SERIES = "TIMESERIES_BROWSER_ADD_SERIES";
export const TOGGLE_CREATE_SPACE_OVERLAY = "TOGGLE_CREATE_SPACE_OVERLAY";
export const TOGGLE_CREATE_COLLECTION_OVERLAY =
  "TOGGLE_CREATE_COLLECTION_OVERLAY";
export const TOGGLE_CREATE_TIMESERIES_OVERLAY =
  "TOGGLE_CREATE_TIMESERIES_OVERLAY";
export const TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY =
  "TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY";
export const ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE =
  "ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE";
export const ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE =
  "ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE";
export const ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING =
  "ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING";
export const ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING =
  "ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING";
export const ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY =
  "ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY";
export const ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY =
  "ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY";
export const ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY =
  "ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY";
export const ANNOTATIONS_SET_ADD_TARGET = "ANNOTATIONS_SET_ADD_TARGET";
export const ANNOTATIONS_SET_DELETE_TARGET = "ANNOTATIONS_SET_DELETE_TARGET";
export const ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY =
  "ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY";
export const FRED_BROWSER_SET_CATEGOTY_LOADING =
  "FRED_BROWSER_SET_CATEGOTY_LOADING";
export const FRED_BROWSER_TOGGLE_CONFIG_OVERLAY =
  "FRED_BROWSER_TOGGLE_CONFIG_OVERLAY";
export const FRED_BROWSER_SELECT_CATEGORY = "FRED_BROWSER_SELECT_CATEGORY";
export const FRED_BROWSER_SET_CATEGORY_LOADING =
  "FRED_BROWSER_SET_CATEGORY_LOADING";
export const FRED_BROWSER_SET_SERIES_LOADING =
  "FRED_BROWSER_SET_SERIES_LOADING";
// ui triggered sagas
export const FRED_BROWSER_EXPAND_CATEGORY = "FRED_BROWSER_EXPAND_CATEGORY";
export const FRED_BROWSER_COLLAPSE_CATEGORY = "FRED_BROWSER_COLLAPSE_CATEGORY";
export const FRED_BROWSER_ADD_SERIES = "FRED_BROWSER_ADD_SERIES";
// listen to by reducer
export const FRED_BROWSER_SAVE_EXPANDED_CATEGORY =
  "FRED_BROWSER_SAVE_EXPANDED_CATEGORY";
export const FRED_BROWSER_SAVE_COLLAPSED_CATEGORY =
  "FRED_BROWSER_SAVE_COLLAPSED_CATEGORY";
export const FRED_BROWSER_SAVE_SELECT_CATEGORY =
  "FRED_BROWSER_SAVE_SELECT_CATEGORY";

export interface ITimeseriesBrowserSetSpaceListLoadingAction {
  type: typeof TIMESERIES_BROWSER_SET_SPACES_LOADING;
  payload: boolean;
}

export const timeseriesBrowserSetSpaceListLoading = (
  data: boolean
): ITimeseriesBrowserSetSpaceListLoadingAction => ({
  type: TIMESERIES_BROWSER_SET_SPACES_LOADING,
  payload: data,
});

export interface ITimeseriesBrowserSetTimeseriesListLoadingAction {
  type: typeof TIMESERIES_BROWSER_SET_TIMESERIES_LOADING;
  payload: boolean;
}

export const timeseriesBrowserSetTimeseriesListLoading = (
  data: boolean
): ITimeseriesBrowserSetTimeseriesListLoadingAction => ({
  type: TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
  payload: data,
});

export interface ITimeseriesBrowserSelectSpaceAction {
  type: typeof TIMESERIES_BROWSER_SELECT_SPACE;
  payload: string;
}

export const timeseriesBrowserSelectSpace = (
  data: string
): ITimeseriesBrowserSelectSpaceAction => ({
  type: TIMESERIES_BROWSER_SELECT_SPACE,
  payload: data,
});

export interface ITimeseriesBrowserSelectCollectionAction {
  type: typeof TIMESERIES_BROWSER_SELECT_COLLECTION;
  payload: string;
}

export const timeseriesBrowserSelectCollection = (
  data: string
): ITimeseriesBrowserSelectCollectionAction => ({
  type: TIMESERIES_BROWSER_SELECT_COLLECTION,
  payload: data,
});

export interface ITimeseriesBrowserExpandSpaceAction {
  type: typeof TIMESERIES_BROWSER_EXPAND_SPACE;
  payload: string;
}

export const timeseriesBrowserExpandSpace = (
  data: string
): ITimeseriesBrowserExpandSpaceAction => ({
  type: TIMESERIES_BROWSER_EXPAND_SPACE,
  payload: data,
});

export interface ITimeseriesBrowserCollapseSpaceAction {
  type: typeof TIMESERIES_BROWSER_COLLAPSE_SPACE;
  payload: string;
}

export const timeseriesBrowserCollapseSpace = (
  data: string
): ITimeseriesBrowserCollapseSpaceAction => ({
  type: TIMESERIES_BROWSER_COLLAPSE_SPACE,
  payload: data,
});

export interface ITimeseriesBrowserSetSpaceLoadingAction {
  type: typeof TIMESERIES_BROWSER_SET_SPACE_LOADING;
  payload: { spaceId: string; loading: boolean };
}

export const timeseriesBrowserSetSpaceLoading = (data: {
  spaceId: string;
  loading: boolean;
}): ITimeseriesBrowserSetSpaceLoadingAction => ({
  type: TIMESERIES_BROWSER_SET_SPACE_LOADING,
  payload: data,
});

export interface ITimeseriesBrowserSetOverNodeIDAction {
  type: typeof TIMESERIES_BROWSER_SET_OVER_NODE_ID;
  payload: string | null;
}

export const timeseriesBrowserSetOverNodeIDAction = (
  data: string | null
): ITimeseriesBrowserSetOverNodeIDAction => ({
  type: TIMESERIES_BROWSER_SET_OVER_NODE_ID,
  payload: data,
});

export interface IAnnotationsToggleAnnotationsVisibleAction {
  type: typeof ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE;
  payload: boolean;
}

export const annotationsToggleAnnotationsVisible = (
  data: boolean
): IAnnotationsToggleAnnotationsVisibleAction => ({
  type: ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
  payload: data,
});

export interface IAnnotationsToggleAnnotationsEditModeAction {
  type: typeof ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE;
  payload: boolean;
}

export const annotationsToggleAnnotationsEditMode = (
  data: boolean
): IAnnotationsToggleAnnotationsEditModeAction => ({
  type: ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
  payload: data,
});

export interface IAnnotationsSetAnnotationRequestPendingAction {
  type: typeof ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING;
  payload: boolean;
}

export const annotationsSetAnnotationRequestPending = (
  data: boolean
): IAnnotationsSetAnnotationRequestPendingAction => ({
  type: ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
  payload: data,
});

export interface IAnnotationsDeleteAnnotationRequestSetPendingAction {
  type: typeof ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING;
  payload: boolean;
}

export const annotationsDeleteAnnotationRequestSetPending = (
  data: boolean
): IAnnotationsDeleteAnnotationRequestSetPendingAction => ({
  type: ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
  payload: data,
});

export interface IAnnotationsSetCreateDialogVisibilityAction {
  type: typeof ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY;
  payload: boolean;
}

export const annotationsSetCreateDialogVisibilityAction = (
  visible: boolean
): IAnnotationsSetCreateDialogVisibilityAction => ({
  type: ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
  payload: visible,
});

export interface IAnnotationsSetAddTargetDialogVisibilityAction {
  type: typeof ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY;
  payload: boolean;
}

export const annotationsSetAddTargetDialogVisibilityAction = (
  visible: boolean
): IAnnotationsSetAddTargetDialogVisibilityAction => ({
  type: ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
  payload: visible,
});

export interface IAnnotationsSetDeleteDialogVisibilityAction {
  type: typeof ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY;
  payload: boolean;
}

export const annotationsSetDeleteDialogVisibilityAction = (
  visible: boolean
): IAnnotationsSetDeleteDialogVisibilityAction => ({
  type: ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
  payload: visible,
});

export interface IAnnotationsSetAnnotationListVisibilityAction {
  type: typeof ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY;
  payload: boolean;
}

export const annotationsSetAnnotationListVisibilityAction = (
  visible: boolean
): IAnnotationsSetAnnotationListVisibilityAction => ({
  type: ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
  payload: visible,
});

export interface IAnnotationsSetAddTargetAction {
  type: typeof ANNOTATIONS_SET_ADD_TARGET;
  payload: string;
}

export const annotationsSetAddTargetAction = (
  target: string
): IAnnotationsSetAddTargetAction => ({
  type: ANNOTATIONS_SET_ADD_TARGET,
  payload: target,
});

export interface IAnnotationsSetDeleteTargetAction {
  type: typeof ANNOTATIONS_SET_DELETE_TARGET;
  payload: string;
}

export const annotationsSetDeleteTargetAction = (
  target: string
): IAnnotationsSetDeleteTargetAction => ({
  type: ANNOTATIONS_SET_DELETE_TARGET,
  payload: target,
});

export interface ISelectTimeseriesAction {
  type: typeof TIMESERIES_VIEWER_SELECT_TIMESERIES;
  payload: string;
}

export const selectTimeseriesAction = (
  data: string
): ISelectTimeseriesAction => ({
  type: TIMESERIES_VIEWER_SELECT_TIMESERIES,
  payload: data,
});

export interface IToggleCreateSpaceOverlayAction {
  type: typeof TOGGLE_CREATE_SPACE_OVERLAY;
}

export const toggleCreateSpaceOverlayAction =
  (): IToggleCreateSpaceOverlayAction => ({
    type: TOGGLE_CREATE_SPACE_OVERLAY,
  });

export interface IToggleDeleteSpaceCollectionOverlayAction {
  type: typeof TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY;
}

export const toggleDeleteSpaceCollectionOverlayAction =
  (): IToggleDeleteSpaceCollectionOverlayAction => ({
    type: TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
  });

export interface IToggleCreateCollectionOverlayAction {
  type: typeof TOGGLE_CREATE_COLLECTION_OVERLAY;
  payload: { spaceId: string };
}

export const toggleCreateCollectionOverlayAction = (
  spaceId: string
): IToggleCreateCollectionOverlayAction => ({
  type: TOGGLE_CREATE_COLLECTION_OVERLAY,
  payload: { spaceId },
});

export interface IToggleCreateTimeseriesOverlayAction {
  type: typeof TOGGLE_CREATE_TIMESERIES_OVERLAY;
  payload: { spaceId: string; collId: string };
}

export const toggleCreateTimeseriesOverlayAction = (
  spaceId: string,
  collId: string
): IToggleCreateTimeseriesOverlayAction => ({
  type: TOGGLE_CREATE_TIMESERIES_OVERLAY,
  payload: { spaceId, collId },
});

export interface ITimeseriesBrowserAddSeriesAction {
  type: typeof TIMESERIES_BROWSER_ADD_SERIES;
  timeseries: any; // Replace 'any' with the actual type of timeseries
  collection: any; // Replace 'any' with the actual type of collection
}

export const timeseriesBrowserAddSeriesAction = (
  timeseries: any,
  collection: any
): ITimeseriesBrowserAddSeriesAction => ({
  // Replace 'any' with the actual types
  type: TIMESERIES_BROWSER_ADD_SERIES,
  timeseries,
  collection,
});

// FRED Browser

export interface IFredBrowserToggleConfigOverlayAction {
  type: typeof FRED_BROWSER_TOGGLE_CONFIG_OVERLAY;
}

export const fredBrowserToggleConfigOverlayAction =
  (): IFredBrowserToggleConfigOverlayAction => ({
    type: FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
  });

export interface IFredBrowserSelectCategoryAction {
  type: typeof FRED_BROWSER_SELECT_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserSelectCategoryAction = (
  categoryId: string
): IFredBrowserSelectCategoryAction => ({
  type: FRED_BROWSER_SELECT_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserSetCategoryLoadingAction {
  type: typeof FRED_BROWSER_SET_CATEGORY_LOADING;
  payload: {
    categoryId: number;
    loading: boolean;
  };
}

export const fredBrowserSetCategoryLoadingAction = (
  categoryId: number,
  loading: boolean
): IFredBrowserSetCategoryLoadingAction => ({
  type: FRED_BROWSER_SET_CATEGORY_LOADING,
  payload: { categoryId, loading },
});

export interface IFredBrowserExpandCategoryAction {
  type: typeof FRED_BROWSER_EXPAND_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserExpandCategoryAction = (
  categoryId: string
): IFredBrowserExpandCategoryAction => ({
  type: FRED_BROWSER_EXPAND_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserCollapseCategoryAction {
  type: typeof FRED_BROWSER_COLLAPSE_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserCollapseCategoryAction = (
  categoryId: string
): IFredBrowserCollapseCategoryAction => ({
  type: FRED_BROWSER_COLLAPSE_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserSaveExpandedCategoryAction {
  type: typeof FRED_BROWSER_SAVE_EXPANDED_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserSaveExpandedCategoryAction = (
  categoryId: string
): IFredBrowserSaveExpandedCategoryAction => ({
  type: FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserSaveCollapsedCategoryAction {
  type: typeof FRED_BROWSER_SAVE_COLLAPSED_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserSaveCollapsedCategoryAction = (
  categoryId: string
): IFredBrowserSaveCollapsedCategoryAction => ({
  type: FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserSaveSelectedCategoryAction {
  type: typeof FRED_BROWSER_SAVE_SELECT_CATEGORY;
  payload: { categoryId: string };
}

export const fredBrowserSaveSelectedCategoryAction = (
  categoryId: string
): IFredBrowserSaveSelectedCategoryAction => ({
  type: FRED_BROWSER_SAVE_SELECT_CATEGORY,
  payload: { categoryId },
});

export interface IFredBrowserSetSeriesLoadingAction {
  type: typeof FRED_BROWSER_SET_SERIES_LOADING;
  payload: { categoryId: string };
}

export const fredBrowserSetSeriesLoadingAction = (
  categoryId: string
): IFredBrowserSetSeriesLoadingAction => ({
  type: FRED_BROWSER_SET_SERIES_LOADING,
  payload: { categoryId },
});

export interface IFredBrowserAddSeriesAction {
  type: typeof FRED_BROWSER_ADD_SERIES;
  payload: { seriesId: string };
}

export const fredBrowserAddSeriesAction = (
  seriesId: string
): IFredBrowserAddSeriesAction => ({
  type: FRED_BROWSER_ADD_SERIES,
  payload: { seriesId },
});

// import {
//   TIMESERIES_BROWSER_SET_SPACES_LOADING,
//   TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
//   TIMESERIES_BROWSER_SELECT_SPACE,
//   TIMESERIES_BROWSER_SELECT_COLLECTION,
//   TIMESERIES_BROWSER_EXPAND_SPACE,
//   TIMESERIES_BROWSER_COLLAPSE_SPACE,
//   TIMESERIES_BROWSER_SET_SPACE_LOADING,
//   TIMESERIES_VIEWER_SELECT_TIMESERIES,

//   ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
//   ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
//   ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
//   ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
//   TOGGLE_CREATE_SPACE_OVERLAY,
//   TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
//   TOGGLE_CREATE_COLLECTION_OVERLAY,
//   TOGGLE_CREATE_TIMESERIES_OVERLAY,
//   TIMESERIES_BROWSER_SET_OVER_NODE_ID,
//   ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
//   ANNOTATIONS_SET_ADD_TARGET,
//   ANNOTATIONS_SET_DELETE_TARGET,
//   ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
//   TIMESERIES_BROWSER_ADD_SERIES,
//   FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
//   FRED_BROWSER_SELECT_CATEGORY,
//   FRED_BROWSER_EXPAND_CATEGORY,
//   FRED_BROWSER_COLLAPSE_CATEGORY,
//   FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
//   FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
//   FRED_BROWSER_SAVE_SELECT_CATEGORY,
//   FRED_BROWSER_SET_CATEGORY_LOADING,
//   FRED_BROWSER_SET_TIMESERIES_LOADING,
//   FRED_BROWSER_SET_SERIES_LOADING,
// } from './ActionTypes';

// export const timeseriesBrowserSetSpaceListLoading = (data) => ({
//   type: TIMESERIES_BROWSER_SET_SPACES_LOADING,
//   payload: data,
// });

// export const timeseriesBrowserSetTimeseriesListLoading = (data) => ({
//   type: TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
//   payload: data,
// });

// export const timeseriesBrowserSelectSpace = (data) => ({
//   type: TIMESERIES_BROWSER_SELECT_SPACE,
//   payload: data,
// });

// export const timeseriesBrowserSelectCollection = (data) => ({
//   type: TIMESERIES_BROWSER_SELECT_COLLECTION,
//   payload: data,
// });

// export const timeseriesBrowserExpandSpace = (data) => ({
//   type: TIMESERIES_BROWSER_EXPAND_SPACE,
//   payload: data,
// });

// export const timeseriesBrowserCollapseSpace = (data) => ({
//   type: TIMESERIES_BROWSER_COLLAPSE_SPACE,
//   payload: data,
// });

// export const timeseriesBrowserSetSpaceLoading = (data) => ({
//   type: TIMESERIES_BROWSER_SET_SPACE_LOADING,
//   payload: data,
// });

// export const timeseriesBrowserSetOverNodeIDAction = (data) => ({
//   type: TIMESERIES_BROWSER_SET_OVER_NODE_ID,
//   payload: data,
// });

// export const annotationsToggleAnnotationsVisible = (data) => ({
//   type: ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
//   payload: data,
// });

// export const annotationsToggleAnnotationsEditMode = (data) => ({
//   type: ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
//   payload: data,
// });

// export const annotationsSetAnnotationRequestPending = (data) => ({
//   type: ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
//   payload: data,
// });

// export const annotationsDeleteAnnotationRequestSetPending = (data) => ({
//   type: ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
//   payload: data,
// });

// export const annotationsSetCreateDialogVisibilityAction = (visible) => ({
//   type: ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
//   payload: visible,
// });

// export const annotationsSetAddTargetDialogVisibilityAction = (visible) => ({
//   type: ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
//   payload: visible,
// });

// export const annotationsSetDeleteDialogVisibilityAction = (visible) => ({
//   type: ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
//   payload: visible,
// });

// export const annotationsSetAnnotationListVisibilityAction = (visible) => ({
//   type: ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
//   payload: visible,
// });

// export const annotationsSetAddTargetAction = (target) => ({
//   type: ANNOTATIONS_SET_ADD_TARGET,
//   payload: target,
// });

// export const annotationsSetDeleteTargetAction = (target) => ({
//   type: ANNOTATIONS_SET_DELETE_TARGET,
//   payload: target,
// });

// export const selectTimeseriesAction = (data) => ({
//   type: TIMESERIES_VIEWER_SELECT_TIMESERIES,
//   payload: data,
// });

// export const toggleCreateSpaceOverlayAction = () => ({
//   type: TOGGLE_CREATE_SPACE_OVERLAY,
// });

// export const toggleDeleteSpaceCollectionOverlayAction = () => ({
//   type: TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
// });

// export const toggleCreateCollectionOverlayAction = (spaceId) => ({
//   type: TOGGLE_CREATE_COLLECTION_OVERLAY,
//   payload: { spaceId },
// });

// export const toggleCreateTimeseriesOverlayAction = (spaceId, collId) => ({
//   type: TOGGLE_CREATE_TIMESERIES_OVERLAY,
//   payload: { spaceId, collId },
// });

// export const timeseriesBrowserAddSeriesAction = (timeseries, collection) => ({
//   type: TIMESERIES_BROWSER_ADD_SERIES,
//   timeseries,
//   collection,
// });

// // FRED Browser

// export const fredBrowserToggleConfigOverlayAction = () => ({
//   type: FRED_BROWSER_TOGGLE_CONFIG_OVERLAY,
// });

// export const fredBrowserSelectCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_SELECT_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserSetCategoryLoadingAction = (categoryId) => ({
//   type: FRED_BROWSER_SET_CATEGORY_LOADING,
//   payload: categoryId,
// });

// export const fredBrowserExpandCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_EXPAND_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserCollapseCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_COLLAPSE_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserSaveExpandedCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_SAVE_EXPANDED_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserSaveCollapsedCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_SAVE_COLLAPSED_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserSaveSelectedCategoryAction = (categoryId) => ({
//   type: FRED_BROWSER_SAVE_SELECT_CATEGORY,
//   payload: { categoryId },
// });

// export const fredBrowserSerCategoryLoadingAction = (categoryId) => ({
//   type: FRED_BROWSER_SET_CATEGORY_LOADING,
//   payload: { categoryId },
// });

// export const fredBrowserSetSeriesLoadingAction = (categoryId) => ({
//   type: FRED_BROWSER_SET_SERIES_LOADING,
//   payload: { categoryId },
// });
