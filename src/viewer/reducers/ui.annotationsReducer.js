import {
  ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE,
  ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE,
  ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING,
  ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING,
  ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY,
  ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY,
  ANNOTATIONS_SET_ADD_TARGET,
  ANNOTATIONS_SET_DELETE_TARGET,
} from '../actions/uiActions';

import {
  SAVE_ANNOTATION_ERRORS,
} from '../actions/annotationActions';

const annotationsInitialState = {
  isAnnotationsVisible: true,
  isAnnotationsEditModeEnabled: false,
  isAnnotationRequestPending: false,
  isAnnotationDeleteRequestPending: false,
  isAnnotationCreateDialogVisible: false,
  isAnnotationAddTargetDialogVisible: false,
  isAnnotationDeleteDialogVisible: false,
  isAnnotationListVisible: false,
  toAddTarget: undefined,
  toDeleteTarget: undefined,
  uiAnnnotationErrors: [],
};

const annotationsReducer = (state = annotationsInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ANNOTATIONS_TOGGLE_ANNOTATIONS_VISIBLE:
      return {
        ...state,
        isAnnotationsVisible: !state.isAnnotationsVisible,
      };

    case ANNOTATIONS_TOGGLE_ANNOTATIONS_EDIT_MODE:
      return {
        ...state,
        isAnnotationsEditModeEnabled: !state.isAnnotationsEditModeEnabled,
      };

    case ANNOTATIONS_SET_ANNOTATION_REQUEST_PENDING:
      return {
        ...state,
        isAnnotationRequestPending: payload,
      };

    case ANNOTATIONS_ANNOTATION_DELETE_REQUEST_SET_PENDING:
      return {
        ...state,
        isAnnotationDeleteRequestPending: payload,
      };
    case ANNOTATIONS_SET_CREATE_DIALOG_VISIBILITY:
      return {
        ...state,
        isAnnotationCreateDialogVisible: payload,
        uiAnnnotationErrors: (!payload) ? [] : state.uiAnnnotationErrors, // reset error on closing
      };
    case ANNOTATIONS_SET_ADD_TARGET_DIALOG_VISIBILITY:
      if (payload) {
        return {
          ...state,
          isAnnotationAddTargetDialogVisible: payload,
        };
      }
      return {
        ...state,
        isAnnotationAddTargetDialogVisible: payload,
        uiAnnnotationErrors: [],
        toAddTarget: undefined,
      };
    case ANNOTATIONS_SET_DELETE_DIALOG_VISIBILITY:
      return {
        ...state,
        isAnnotationDeleteDialogVisible: payload,
        uiAnnnotationErrors: (!payload) ? [] : state.uiAnnnotationErrors, // reset error on closing
        toDeleteTarget: (!payload) ? undefined : state.toDeleteTarget,
      };
    case ANNOTATIONS_SET_ANNOTATION_LIST_VISIBILITY:
      return {
        ...state,
        isAnnotationListVisible: payload,
      };
    case SAVE_ANNOTATION_ERRORS:
      return {
        ...state,
        annnotationErrors: payload,
      };
    case ANNOTATIONS_SET_ADD_TARGET:
      return {
        ...state,
        toAddTarget: payload,
      };
    case ANNOTATIONS_SET_DELETE_TARGET:
      return {
        ...state,
        toDeleteTarget: payload,
      };
    default:
      return state;
  }
};

export default annotationsReducer;
