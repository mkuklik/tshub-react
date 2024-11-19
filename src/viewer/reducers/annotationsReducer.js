import * as r from 'ramda';

import {
  SAVE_ANNOTATIONS,
  SAVE_SINGLE_ANNOTATION,
  CREATE_ANNOTATION_SUCCESS,
  DELETE_ANNOTATION_SUCCESS,
  ADD_ANNOTATION_TARGET_SUCCESS,
  UPDATE_ANNOTATION_SUCCESS,
  SET_DELETE_DIALOG_STATUS,
  SAVE_STATUS_OF_UPDATING_ANNOTATION,
  SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET,
} from '../actions/annotationActions';

const initialState = {
  annotations: {},
  indexToTargetsByCollId: {}, // collId => {}
  annotationDeleteRequestStatus: '',
  annotationTargetRequestStatus: '',
  statusOfUpdatingAnnotaion: '',
};

const alter = ((checked, key, items) => r.map(
  r.when(r.propEq('aid', key), r.assoc('targets', checked)),
  items,
));

const updateTextAnnotation = ((checked, key, items) => r.map(
  r.when(r.propEq('aid', key), r.assoc('text', checked)),
  items,
));

const updateSymbolAnnotation = ((checked, key, items) => r.map(
  r.when(r.propEq('aid', key), r.assoc('symbol', checked)),
  items,
));

const annotationsToTargets = (annotationList) => {
  const targets = r.flatten(annotationList.map((annotation) => (
    annotation
      .targets
      .filter((target) => !r.isNil(target.index) && !r.isNil(target.freq))
      .map((target) => ({
        ...target,
        annotation,
      }))
  )));
  const out = r.groupBy(r.prop('index'))(targets);
  return out;
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_ANNOTATIONS:
      return {
        ...state,
        annotations: {
          ...state.annotations,
          [payload.collId]: payload.annotations,
        },
        indexToTargetsByCollId: {
          ...state.indexToTargetsByCollId,
          [payload.collId]: annotationsToTargets(payload.annotations),
        },
      };

    case SAVE_SINGLE_ANNOTATION:
    {
      let collAnnot = r.prop(payload.collId, state.annotations)
        ? state.annotations[payload.collId] : [];

      const i = r.indexOf(collAnnot.map((x) => x.aid));
      if (i < 0) {
        collAnnot = r.concat(collAnnot, [payload]);
      } else {
        collAnnot = r.update(i, payload, collAnnot);
      }

      return {
        ...state,
        annotations: {
          ...state.annotations,
          [payload.collId]: collAnnot,
        },
        indexToTargetsByCollId: {
          ...state.indexToTargetsByCollId,
          [payload.collId]: annotationsToTargets(collAnnot),
        },
      };
    }
    case CREATE_ANNOTATION_SUCCESS:
    {
      const collAnnot = r.prop(payload.collId, state.annotations)
        ? state.annotations[payload.collId] : [];
      return {
        ...state,
        annotations: {
          ...state.annotations,
          [payload.collId]: [...collAnnot, payload],
        },
      };
    }

    case DELETE_ANNOTATION_SUCCESS: {
      const { collId, aid } = payload;

      const annotations = r.assocPath(
        [collId],
        r.reject(r.propEq('aid', aid), state.annotations[collId]),
        state.annotations,
      );

      return {
        ...state,
        annotations,
        annotationDeleteRequestStatus: 'success',
      };
    }

    case SET_DELETE_DIALOG_STATUS:
      return {
        ...state,
        annotationDeleteRequestStatus: payload,
      };

    case ADD_ANNOTATION_TARGET_SUCCESS: {
      const { target, collId, aid } = payload;
      const annotation = state.annotations[collId];
      const index = r.findIndex(r.propEq('aid', aid))(annotation);
      const updatedTargets = [...state.annotations[collId][index].targets, target];
      const updatedAnnotaiton = alter(updatedTargets, aid, annotation);

      return {
        ...state,
        annotations: {
          ...state.annotations,
          [collId]: updatedAnnotaiton,
        },
        indexToTargetsByCollId: {
          ...state.indexToTargetsByCollId,
          [payload.collId]: annotationsToTargets(updatedAnnotaiton),
        },
        annotationTargetRequestStatus: 'success',
      };
    }

    case UPDATE_ANNOTATION_SUCCESS: {
      const { toBeUpdateValue, collId, aid } = payload;
      const annotation = state.annotations[collId];
      const keys = Object.keys(toBeUpdateValue);

      let updatedAnnotation = [];
      if (keys[0] === 'text') updatedAnnotation = updateTextAnnotation(toBeUpdateValue.text, aid, annotation);
      if (keys[0] === 'symbol') updatedAnnotation = updateSymbolAnnotation(toBeUpdateValue.symbol, aid, annotation);

      return {
        ...state,
        annotations: {
          ...state.annotations,
          [collId]: updatedAnnotation,
        },
      };
    }
    case SAVE_STATUS_OF_UPDATING_ANNOTATION:
      return {
        ...state,
        statusOfUpdatingAnnotaion: payload,
      };

    case SAVE_STATUS_OF_DELETE_ANNOTATION_TARGET:
    {
      const { target, collId, aid } = payload;
      const annotation = state.annotations[collId];
      const index = r.findIndex(r.propEq('aid', aid))(annotation);

      const copyTargets = [...state.annotations[collId][index].targets];
      const getIndex = r.findIndex(r.propEq('index', target.index))(copyTargets);
      copyTargets.splice(getIndex, 1);
      const updatedAnnotaiton = alter(copyTargets, aid, annotation);
      return {
        ...state,
        annotations: {
          ...state.annotations,
          [collId]: updatedAnnotaiton,
        },
        indexToTargetsByCollId: {
          ...state.indexToTargetsByCollId,
          [collId]: annotationsToTargets(updatedAnnotaiton),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
