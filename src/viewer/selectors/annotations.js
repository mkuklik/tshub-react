import * as r from 'ramda';
import moment from 'moment';
import { createSelector } from 'reselect';

import { dateFormat } from '../utilities/format';

import { apiCollIdSelector } from './ui';
import { currentGraphSeriesDeterminedFreqSelector } from './graph';

const getAnnotations = (state) => {
  const freq = currentGraphSeriesDeterminedFreqSelector(state);
  const collId = apiCollIdSelector(state);

  const { annotations } = state;

  const annotationList = annotations.annotations[collId] || [];

  const filteredAnnotationList = annotationList.map((annotation) => ({
    ...annotation,
    targets: annotation.targets,
  }));

  const filterEmptyAnnotations = r.filter(
    r.compose(r.not, r.isEmpty, r.prop('targets')),
  );

  const frequencyDateFormat = dateFormat(freq);

  return r.pipe(
    filterEmptyAnnotations,
    r.map((annotation) => ({
      ...annotation,
      targets: annotation.targets.map((target) => ({
        ...target,
        date: moment(target.index).format(frequencyDateFormat),
      })),
    })),
  )(filteredAnnotationList);
};

const getAnnotationList = createSelector(getAnnotations, (annotationList) => (
  annotationList
));

const getTargetsMapDate = createSelector(getAnnotationList, (annotationList) => {
  const targets = r.flatten(annotationList.map((annotation) => (
    annotation
      .targets
      .filter((target) => !r.isNil(target.index) && !r.isNil(target.freq))
      .map((target) => ({
        ...target,
        annotation,
      }))
  )));

  return r.groupBy(r.prop('date'))(targets);
});

const annotationsAllSelector = (state) => r.path(['annotations', 'annotations'], state);
const annotationsByCollIdSelector = (collId) => (state) => r.path(['annotations', 'annotations', collId], state);
const annotationsIndexToTargetsByCollId = (state) => r.path(['annotations', 'indexToTargetsByCollId'], state);
const uiAnnotationsisAnnotationsVisibleSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationsVisible'], state);
const uiAnnotationsToAddTargetSelector = (state) => r.path(['ui', 'annotations', 'toAddTarget'], state);
const uiAnnotationsToDeleteTargetSelector = (state) => r.path(['ui', 'annotations', 'toDeleteTarget'], state);
const uiAnnotationsAddTargetDialogVisibleSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationAddTargetDialogVisible'], state);
const uiAnnnotationErrorsSelector = (state) => r.path(['ui', 'annotations', 'uiAnnnotationErrors'], state);
const uiAnnnotationRequestPendingSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationRequestPending'], state);
const uiAnnotationsIsAnnotationCreateDialogVisibleSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationCreateDialogVisible'], state);
const uiAnnotationIsAnnotationListVisibleSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationListVisible'], state);
const uiAnnotationIsAnnotationsEditModeEnabledSelector = (state) => r.path(['ui', 'annotations', 'isAnnotationsEditModeEnabled'], state);

export {
  getAnnotationList,
  getTargetsMapDate,
  annotationsByCollIdSelector,
  annotationsAllSelector,
  annotationsIndexToTargetsByCollId,
  uiAnnotationsisAnnotationsVisibleSelector,
  uiAnnotationsToAddTargetSelector,
  uiAnnotationsToDeleteTargetSelector,
  uiAnnotationsAddTargetDialogVisibleSelector,
  uiAnnnotationErrorsSelector,
  uiAnnnotationRequestPendingSelector,
  uiAnnotationsIsAnnotationCreateDialogVisibleSelector,
  uiAnnotationIsAnnotationListVisibleSelector,
  uiAnnotationIsAnnotationsEditModeEnabledSelector,
};
