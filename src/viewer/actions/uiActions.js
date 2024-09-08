import {
  TIMESERIES_BROWSER_SET_SPACES_LOADING,
  TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
  TIMESERIES_BROWSER_SELECT_SPACE,
  TIMESERIES_BROWSER_SELECT_COLLECTION,
  TIMESERIES_BROWSER_EXPAND_SPACE,
  TIMESERIES_BROWSER_COLLAPSE_SPACE,
  TIMESERIES_BROWSER_SET_SPACE_LOADING,
  TIMESERIES_VIEWER_SELECT_TIMESERIES,

  ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
  ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
  ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
  ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
  TOGGLE_CREATE_SPACE_OVERLAY,
  TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
  TOGGLE_CREATE_COLLECTION_OVERLAY,
  TOGGLE_CREATE_TIMESERIES_OVERLAY,
  TIMESERIES_BROWSER_SET_OVER_NODE_ID,
  ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_ADD_TARGET,
  ANNOTATIONS_SET_DELETE_TARGET,
  ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
  TIMESERIES_BROWSER_ADD_SERIES,
} from './ActionTypes';

export const timeseriesBrowserSetSpaceListLoading = (data) => ({
  type: TIMESERIES_BROWSER_SET_SPACES_LOADING,
  payload: data,
});

export const timeseriesBrowserSetTimeseriesListLoading = (data) => ({
  type: TIMESERIES_BROWSER_SET_TIMESERIES_LOADING,
  payload: data,
});

export const timeseriesBrowserSelectSpace = (data) => ({
  type: TIMESERIES_BROWSER_SELECT_SPACE,
  payload: data,
});

export const timeseriesBrowserSelectCollection = (data) => ({
  type: TIMESERIES_BROWSER_SELECT_COLLECTION,
  payload: data,
});

export const timeseriesBrowserExpandSpace = (data) => ({
  type: TIMESERIES_BROWSER_EXPAND_SPACE,
  payload: data,
});

export const timeseriesBrowserCollapseSpace = (data) => ({
  type: TIMESERIES_BROWSER_COLLAPSE_SPACE,
  payload: data,
});

export const timeseriesBrowserSetSpaceLoading = (data) => ({
  type: TIMESERIES_BROWSER_SET_SPACE_LOADING,
  payload: data,
});

export const timeseriesBrowserSetOverNodeIDAction = (data) => ({
  type: TIMESERIES_BROWSER_SET_OVER_NODE_ID,
  payload: data,
});

export const annotationsToggleAnnotationsVisible = (data) => ({
  type: ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
  payload: data,
});

export const annotationsToggleAnnotationsEditMode = (data) => ({
  type: ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
  payload: data,
});

export const annotationsSetAnnotationRequestPending = (data) => ({
  type: ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
  payload: data,
});

export const annotationsDeleteAnnotationRequestSetPending = (data) => ({
  type: ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
  payload: data,
});

export const annotationsSetCreateDialogVisibilityAction = (visible) => ({
  type: ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
  payload: visible,
});

export const annotationsSetAddTargetDialogVisibilityAction = (visible) => ({
  type: ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
  payload: visible,
});

export const annotationsSetDeleteDialogVisibilityAction = (visible) => ({
  type: ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
  payload: visible,
});

export const annotationsSetAnnotationListVisibilityAction = (visible) => ({
  type: ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
  payload: visible,
});


export const annotationsSetAddTargetAction = (target) => ({
  type: ANNOTATIONS_SET_ADD_TARGET,
  payload: target,
});

export const annotationsSetDeleteTargetAction = (target) => ({
  type: ANNOTATIONS_SET_DELETE_TARGET,
  payload: target,
});


export const selectTimeseriesAction = (data) => ({
  type: TIMESERIES_VIEWER_SELECT_TIMESERIES,
  payload: data,
});

export const toggleCreateSpaceOverlayAction = () => ({
  type: TOGGLE_CREATE_SPACE_OVERLAY,
});

export const toggleDeleteSpaceCollectionOverlayAction = () => ({
  type: TOGGLE_DELETE_SPACE_COLLECTION_OVERLAY,
});

export const toggleCreateCollectionOverlayAction = (spaceId) => ({
  type: TOGGLE_CREATE_COLLECTION_OVERLAY,
  payload: { spaceId },
});

export const toggleCreateTimeseriesOverlayAction = (spaceId, collId) => ({
  type: TOGGLE_CREATE_TIMESERIES_OVERLAY,
  payload: { spaceId, collId },
});

export const timeseriesBrowserAddSeriesAction = (timeseries, collection) => ({
  type: TIMESERIES_BROWSER_ADD_SERIES,
  timeseries,
  collection,
});
