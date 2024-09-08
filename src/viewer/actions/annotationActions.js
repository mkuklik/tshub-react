import {
  FETCH_ANNOTATIONS,
  SAVE_ANNOTATIONS,
  CREATE_ANNOTATION,
  CREATE_ANNOTATION_SUCCESS,
  DELETE_ANNOTATION,
  DELETE_ANNOTATION_SUCCESS,
  ADD_ANNOTATION_TARGET,
  ADD_ANNOTATION_TARGET_SUCCESS,
  UPDATE_ANNOTATION_TEXT,
  UPDATE_ANNOTATION_SUCCESS,
  SET_DELETE_DIALOG_STATUS,
  SAVE_STATUS_OF_UPDATING_ANNOTATION,
  DELETE_ANNOTATION_TARGET_ACTION,
  SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
  SAVE_ANNOTATION_ERRORS,
  SAVE_SINGLE_ANNOTATION,
} from './ActionTypes';

export const fetchAnnotationsAction = (collId) => ({
  type: FETCH_ANNOTATIONS,
  payload: collId,
});

export const saveAnnotationsAction = (data) => ({
  type: SAVE_ANNOTATIONS,
  payload: data,
});

export const saveSingleAnnotationAction = (annotation) => ({
  type: SAVE_SINGLE_ANNOTATION,
  payload: annotation,
});

export const createAnnotationAction = (data) => ({
  type: CREATE_ANNOTATION,
  payload: data,
});

export const saveAnnotationErrorsAction = (data) => ({
  type: SAVE_ANNOTATION_ERRORS,
  payload: data,
});

export const createAnnotationSuccessAction = (data) => ({
  type: CREATE_ANNOTATION_SUCCESS,
  payload: data,
});

export const deleteAnnotationAction = (data) => ({
  type: DELETE_ANNOTATION,
  payload: data,
});

export const deleteAnnotationSuccessAction = (data) => ({
  type: DELETE_ANNOTATION_SUCCESS,
  payload: data,
});

export const setDeleteDialogStatusAction = () => ({
  type: SET_DELETE_DIALOG_STATUS,
  payload: 'false',
});

export const deleteAnnotationTargetAction = (data) => ({
  type: DELETE_ANNOTATION_TARGET_ACTION,
  payload: data,
});

export const saveStatusOfDeleteAnnotationTarget = ({ target, aid, collId }) => ({
  type: SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
  payload: { target, aid, collId },
});

export const addAnnotationTargetAction = (data) => ({
  type: ADD_ANNOTATION_TARGET,
  payload: data,
});

export const addAnnotationTargetSuccessAction = ({ target, aid, collId }) => ({
  type: ADD_ANNOTATION_TARGET_SUCCESS,
  payload: { target, aid, collId },
});

export const updateAnnotationTextAction = (data) => ({
  type: UPDATE_ANNOTATION_TEXT,
  payload: data,
});

export const updateAnnotationSuccess = (data) => ({
  type: UPDATE_ANNOTATION_SUCCESS,
  payload: data,
});

export const saveStatusOfUpdatingAnnotationAction = (data) => ({
  type: SAVE_STATUS_OF_UPDATING_ANNOTATION,
  payload: data,
});
