/* eslint-disable no-underscore-dangle */
import * as r from 'ramda';
import {
  put, call, takeEvery, takeLatest, select,
} from 'redux-saga/effects';

import {
  FETCH_ANNOTATIONS,
  CREATE_ANNOTATION,
  DELETE_ANNOTATION,
  ADD_ANNOTATION_TARGET,
  UPDATE_ANNOTATION_TEXT,
  DELETE_ANNOTATION_TARGET_ACTION,

  saveAnnotationsAction,
  createAnnotationSuccessAction,
  deleteAnnotationSuccessAction,
  addAnnotationTargetSuccessAction,
  updateAnnotationSuccess,
  saveStatusOfUpdatingAnnotationAction,
  saveStatusOfDeleteAnnotationTarget,
  saveAnnotationErrorsAction,
} from '../actions/annotationActions';

import {
  annotationsSetAnnotationRequestPending,
  annotationsDeleteAnnotationRequestSetPending,
  annotationsSetCreateDialogVisibilityAction,
  annotationsSetAddTargetDialogVisibilityAction,
  annotationsSetDeleteDialogVisibilityAction,
} from '../actions/uiActions';
import { uiAnnotationsToAddTargetSelector, uiAnnotationsToDeleteTargetSelector } from '../selectors/annotations';
import { reportErrorAction } from '../actions/errorActions';

const apiFetchAnnotations = (collId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawGetList(
      collId,
      null,
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const apiCreateAnnotation = (collId, annotation) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawCreate(
      collId,
      annotation,
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const apiDeleteAnnotation = (collId, aid) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawDelete(
      collId,
      aid,
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const apiDeleteAnnotationTarget = (collId, aid, target) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawRemoveTarget(
      collId,
      aid,
      {
        index: target.index,
        tsid: target.tsid,
        freq: target.freq,
      },
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const updateAnnotationApi = (toBeUpdateValue, collId, aid) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawUpdate(
      collId,
      aid,
      toBeUpdateValue,
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const apiAddAnnotationTarget = (target, collId, aid) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawAnnotationApi.appApiAnnotationRawAddTarget(
      collId,
      aid,
      {
        index: target.index,
        tsid: target.tsid,
        freq: target.freq,
      },
      (error, data) => (error ? reject(error) : resolve(data)),
    );
  })
);

const normalizeAnnotationTarget = (annotationTarget) => ({
  freq: annotationTarget.freq,
  tsid: annotationTarget.tsid,
  ...r.pick(['index'], annotationTarget),
});

const normalizeAnnotation = (annotation) => ({
  aid: annotation.aid,
  collId: annotation.coll_id,
  targets: annotation.targets.map(normalizeAnnotationTarget),
  ...r.pick(['text', 'format', 'symbol'], annotation),
});

export function* fetchAnnotations({ payload: collId }) {
  try {
    const annotations = yield call(apiFetchAnnotations, collId);
    const normalizedAnnotations = annotations.map(normalizeAnnotation);

    yield put(saveAnnotationsAction({
      collId,
      annotations: normalizedAnnotations,
    }));
  } catch (error) {
    yield put(reportErrorAction({ message: `Error fetching annotations, ${error}` }));
  }
}

export function* createAnnotation({ payload }) {
  const { collId, text, symbol } = payload;

  const annotation = {
    text,
    symbol: r.isEmpty(symbol) ? undefined : symbol,
  };

  yield put(annotationsSetAnnotationRequestPending(true));

  try {
    const response = yield call(apiCreateAnnotation, collId, annotation);
    const createdAnnotation = normalizeAnnotation(response);
    yield put(createAnnotationSuccessAction(createdAnnotation));
    yield put(annotationsSetCreateDialogVisibilityAction(false));
  } catch (error) {
    let out;
    switch (r.path(['status'], error)) {
      case 400:
        out = [(!r.isNil(r.path(['response', 'body', 'detail'], error))) ? r.path(['response', 'body', 'detail'], error) : `${error}`];
        break;
      case 403:
        out = [{ message: 'You have no permission to create an annotation in this collection' }];
        break;
      case 409:
        out = ['Annotation already exists'];
        break;
      default:
        out = [`${error}`];
    }
    yield put(saveAnnotationErrorsAction(out));

    // yield put(reportErrorAction({ message: `Error creating annotations, ${error}` }));
  } finally {
    yield put(annotationsSetAnnotationRequestPending(false));
  }
}

export function* deleteAnnotation({ payload }) {
  const { collId, aid } = payload;

  yield put(annotationsDeleteAnnotationRequestSetPending(true));

  try {
    yield call(apiDeleteAnnotation, collId, aid);
    yield put(deleteAnnotationSuccessAction({ collId, aid }));
  } catch (error) {
    yield put(reportErrorAction({ message: `Error deleting annotations, ${error}` }));
  } finally {
    yield put(annotationsDeleteAnnotationRequestSetPending(false));
  }
}

export function* addAnnotationTarget({ payload }) {
  const { aid, collId } = payload;

  const target = yield select(uiAnnotationsToAddTargetSelector);

  yield put(annotationsSetAnnotationRequestPending(true));

  try {
    yield call(apiAddAnnotationTarget, target, collId, aid);
    yield put(addAnnotationTargetSuccessAction({ target, aid, collId }));
    yield put(annotationsSetAddTargetDialogVisibilityAction(false));
  } catch (error) {
    let out;
    switch (r.path(['status'], error)) {
      case 400:
        out = [(!r.isNil(r.path(['response', 'body', 'detail'], error))) ? r.path(['response', 'body', 'detail'], error) : `${error}`];
        break;
      case 403:
        out = [{ message: 'You have no permission to add the annotation to this target' }];
        break;
      case 409:
        out = ['Annotation already added to this target'];
        break;
      default:
        out = [`${error}`];
    }
    yield put(saveAnnotationErrorsAction(out));
  } finally {
    yield put(annotationsSetAnnotationRequestPending(false));
  }
}

export function* updateAnnotation({ payload }) {
  const { toBeUpdateValue, aid, collId } = payload;
  try {
    yield call(updateAnnotationApi, toBeUpdateValue, collId, aid);

    yield put(updateAnnotationSuccess(payload));
    yield put(saveStatusOfUpdatingAnnotationAction('success'));
  } catch (error) {
    yield put(saveStatusOfUpdatingAnnotationAction('error'));
    yield put(reportErrorAction({ message: `Error updating annotations, ${error}` }));
  }
}

export function* deleteAnnotationTarget({ payload }) {
  const { aid, collId } = payload;
  const target = yield select(uiAnnotationsToDeleteTargetSelector);

  yield put(annotationsSetAnnotationRequestPending(true));

  try {
    const annotation = yield call(apiDeleteAnnotationTarget, collId, aid, target);
    yield put(saveStatusOfDeleteAnnotationTarget({
      target, aid, collId,
    }));
    yield put(annotationsSetDeleteDialogVisibilityAction(false));
  } catch (error) {
    let out;
    switch (r.path(['status'], error)) {
      case 400:
        out = [(!r.isNil(r.path(['response', 'body', 'detail'], error))) ? r.path(['response', 'body', 'detail'], error) : `${error}`];
        break;
      case 403:
        out = [{ message: 'You have no permission to delete the annotation to this target' }];
        break;
      case 404:
        out = ['Annotation not found at this target'];
        break;
      default:
        out = [`${error}`];
    }
    yield put(saveAnnotationErrorsAction(out));
  } finally {
    yield put(annotationsSetAnnotationRequestPending(false));
  }
}

export default function* watchAnnotationsActions() {
  yield takeEvery(FETCH_ANNOTATIONS, fetchAnnotations);
  yield takeLatest(CREATE_ANNOTATION, createAnnotation);
  yield takeEvery(DELETE_ANNOTATION, deleteAnnotation);
  yield takeEvery(ADD_ANNOTATION_TARGET, addAnnotationTarget);
  yield takeEvery(UPDATE_ANNOTATION_TEXT, updateAnnotation);
  yield takeEvery(DELETE_ANNOTATION_TARGET_ACTION, deleteAnnotationTarget);
}
