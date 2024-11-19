// import {
//   FETCH_ANNOTATIONS,
//   SAVE_ANNOTATIONS,
//   CREATE_ANNOTATION,
//   CREATE_ANNOTATION_SUCCESS,
//   DELETE_ANNOTATION,
//   DELETE_ANNOTATION_SUCCESS,
//   ADD_ANNOTATION_TARGET,
//   ADD_ANNOTATION_TARGET_SUCCESS,
//   UPDATE_ANNOTATION_TEXT,
//   UPDATE_ANNOTATION_SUCCESS,
//   SET_DELETE_DIALOG_STATUS,
//   SAVE_STATUS_OF_UPDATING_ANNOTATION,
//   DELETE_ANNOTATION_TARGET_ACTION,
//   SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
//   SAVE_ANNOTATION_ERRORS,
//   SAVE_SINGLE_ANNOTATION,
// } from './ActionTypes';

// Annotations
export const FETCH_ANNOTATIONS = 'FETCH_ANNOTATIONS';
export const SAVE_ANNOTATIONS = 'SAVE_ANNOTATIONS';
export const SAVE_SINGLE_ANNOTATION = 'SAVE_SINGLE_ANNOTATION';
export const CREATE_ANNOTATION = 'CREATE_ANNOTATION';
export const CREATE_ANNOTATION_SUCCESS = 'CREATE_ANNOTATION_SUCCESS';
export const DELETE_ANNOTATION = 'DELETE_ANNOTATION';
export const DELETE_ANNOTATION_SUCCESS = 'DELETE_ANNOTATION_SUCCESS';
export const SET_DELETE_DIALOG_STATUS = 'SET_DELETE_DIALOG_STATUS';
export const DELETE_ANNOTATION_TARGET_ACTION = 'DELETE_ANNOTATION_TARGET_ACTION';
export const SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET = 'SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET';
export const ADD_ANNOTATION_TARGET = 'ADD_ANNOTATION_TARGET';
export const ADD_ANNOTATION_TARGET_SUCCESS = 'ADD_ANNOTATION_TARGET_SUCCESS';
export const UPDATE_ANNOTATION_TEXT = 'UPDATE_ANNOTATION_TEXT';
export const UPDATE_ANNOTATION_SUCCESS = 'UPDATE_ANNOTATION_SUCCESS';
export const SAVE_STATUS_OF_UPDATING_ANNOTATION = 'SAVE_STATUS_OF_UPDATING_ANNOTATION';
export const SAVE_ANNOTATION_ERRORS = 'SAVE_ANNOTATION_ERRORS';

export interface FetchAnnotationsAction {
  type: typeof FETCH_ANNOTATIONS;
  payload: string; // Assuming collId is a string
}

export const fetchAnnotationsAction = (collId: string): FetchAnnotationsAction => ({
  type: FETCH_ANNOTATIONS,
  payload: collId,
});

export interface SaveAnnotationsAction {
  type: typeof SAVE_ANNOTATIONS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const saveAnnotationsAction = (data: any): SaveAnnotationsAction => ({
  type: SAVE_ANNOTATIONS,
  payload: data,
});

export interface SaveSingleAnnotationAction {
  type: typeof SAVE_SINGLE_ANNOTATION;
  payload: any; // Replace 'any' with the actual type of your annotation object
}

export const saveSingleAnnotationAction = (annotation: any): SaveSingleAnnotationAction => ({
  type: SAVE_SINGLE_ANNOTATION,
  payload: annotation,
});

export interface CreateAnnotationAction {
  type: typeof CREATE_ANNOTATION;
  payload: any; // Replace 'any' with the actual type of your data
}

export const createAnnotationAction = (data: any): CreateAnnotationAction => ({
  type: CREATE_ANNOTATION,
  payload: data,
});

export interface SaveAnnotationErrorsAction {
  type: typeof SAVE_ANNOTATION_ERRORS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const saveAnnotationErrorsAction = (data: any): SaveAnnotationErrorsAction => ({
  type: SAVE_ANNOTATION_ERRORS,
  payload: data,
});

export interface CreateAnnotationSuccessAction {
  type: typeof CREATE_ANNOTATION_SUCCESS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const createAnnotationSuccessAction = (data: any): CreateAnnotationSuccessAction => ({
  type: CREATE_ANNOTATION_SUCCESS,
  payload: data,
});

export interface DeleteAnnotationAction {
  type: typeof DELETE_ANNOTATION;
  payload: any; // Replace 'any' with the actual type of your data
}

export const deleteAnnotationAction = (data: any): DeleteAnnotationAction => ({
  type: DELETE_ANNOTATION,
  payload: data,
});

export interface DeleteAnnotationSuccessAction {
  type: typeof DELETE_ANNOTATION_SUCCESS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const deleteAnnotationSuccessAction = (data: any): DeleteAnnotationSuccessAction => ({
  type: DELETE_ANNOTATION_SUCCESS,
  payload: data,
});

export interface SetDeleteDialogStatusAction {
  type: typeof SET_DELETE_DIALOG_STATUS;
  payload: string;
}

export const setDeleteDialogStatusAction = (): SetDeleteDialogStatusAction => ({
  type: SET_DELETE_DIALOG_STATUS,
  payload: 'false',
});

export interface DeleteAnnotationTargetAction {
  type: typeof DELETE_ANNOTATION_TARGET_ACTION;
  payload: any; // Replace 'any' with the actual type of your data
}

export const deleteAnnotationTargetAction = (data: any): DeleteAnnotationTargetAction => ({
  type: DELETE_ANNOTATION_TARGET_ACTION,
  payload: data,
});

export interface SaveStatusOfDeleteAnnotationTargetAction {
  type: typeof SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET;
  payload: { target: any; aid: string; collId: string }; // Replace 'any' with the actual type of your target
}

export const saveStatusOfDeleteAnnotationTarget = ({ target, aid, collId }: { target: any; aid: string; collId: string }): SaveStatusOfDeleteAnnotationTargetAction => ({
  type: SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
  payload: { target, aid, collId },
});

export interface AddAnnotationTargetAction {
  type: typeof ADD_ANNOTATION_TARGET;
  payload: any; // Replace 'any' with the actual type of your data
}

export const addAnnotationTargetAction = (data: any): AddAnnotationTargetAction => ({
  type: ADD_ANNOTATION_TARGET,
  payload: data,
});

export interface AddAnnotationTargetSuccessAction {
  type: typeof ADD_ANNOTATION_TARGET_SUCCESS;
  payload: { target: any; aid: string; collId: string }; // Replace 'any' with the actual type of your target
}

export const addAnnotationTargetSuccessAction = ({ target, aid, collId } : { target: any; aid: string; collId: string }): AddAnnotationTargetSuccessAction => ({
  type: ADD_ANNOTATION_TARGET_SUCCESS,
  payload: { target, aid, collId },
});

export interface UpdateAnnotationTextAction {
  type: typeof UPDATE_ANNOTATION_TEXT;
  payload: any; // Replace 'any' with the actual type of your data
}

export const updateAnnotationTextAction = (data: any): UpdateAnnotationTextAction => ({
  type: UPDATE_ANNOTATION_TEXT,
  payload: data,
});

export interface UpdateAnnotationSuccessAction {
  type: typeof UPDATE_ANNOTATION_SUCCESS;
  payload: any; // Replace 'any' with the actual type of your data
}

export const updateAnnotationSuccess = (data: any): UpdateAnnotationSuccessAction => ({
  type: UPDATE_ANNOTATION_SUCCESS,
  payload: data,
});

export interface SaveStatusOfUpdatingAnnotationAction {
  type: typeof SAVE_STATUS_OF_UPDATING_ANNOTATION;
  payload: any; // Replace 'any' with the actual type of your data
}

export const saveStatusOfUpdatingAnnotationAction = (data: any): SaveStatusOfUpdatingAnnotationAction => ({
  type: SAVE_STATUS_OF_UPDATING_ANNOTATION,
  payload: data,
});

// export const createAnnotationSuccessAction = (data) => ({
//   type: CREATE_ANNOTATION_SUCCESS,
//   payload: data,
// });

// export const deleteAnnotationAction = (data) => ({
//   type: DELETE_ANNOTATION,
//   payload: data,
// });

// export const deleteAnnotationSuccessAction = (data) => ({
//   type: DELETE_ANNOTATION_SUCCESS,
//   payload: data,
// });

// export const setDeleteDialogStatusAction = () => ({
//   type: SET_DELETE_DIALOG_STATUS,
//   payload: 'false',
// });

// export const deleteAnnotationTargetAction = (data) => ({
//   type: DELETE_ANNOTATION_TARGET_ACTION,
//   payload: data,
// });

// export const saveStatusOfDeleteAnnotationTarget = ({ target, aid, collId }) => ({
//   type: SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
//   payload: { target, aid, collId },
// });

// export const addAnnotationTargetAction = (data) => ({
//   type: ADD_ANNOTATION_TARGET,
//   payload: data,
// });

// export const addAnnotationTargetSuccessAction = ({ target, aid, collId }) => ({
//   type: ADD_ANNOTATION_TARGET_SUCCESS,
//   payload: { target, aid, collId },
// });

// export const updateAnnotationTextAction = (data) => ({
//   type: UPDATE_ANNOTATION_TEXT,
//   payload: data,
// });

// export const updateAnnotationSuccess = (data) => ({
//   type: UPDATE_ANNOTATION_SUCCESS,
//   payload: data,
// });

// export const saveStatusOfUpdatingAnnotationAction = (data) => ({
//   type: SAVE_STATUS_OF_UPDATING_ANNOTATION,
//   payload: data,
// });
