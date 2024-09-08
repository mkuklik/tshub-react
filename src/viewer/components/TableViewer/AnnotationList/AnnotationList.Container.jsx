/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import types from 'prop-types';
import * as r from 'ramda';
import { connect } from 'react-redux';

import {
  deleteAnnotationAction,
  setDeleteDialogStatusAction,
  updateAnnotationTextAction,
  saveStatusOfUpdatingAnnotationAction,
} from '../../../actions/annotationActions';

import { AnnotationListContent } from './AnnotationListContent';
import { AnnotationListType, AnnotationAllType } from '../../../types/Annotations';
import { annotationsAllSelector } from '../../../selectors/annotations';
import { CollectionListType } from '../../../types/Collections';
import { tableCollectionsSelector } from '../../../selectors/table';
import { collectionSummarySelector } from '../../../selectors/collections';

const AnnotationListContainerBase = ({
  className,
  collections,
  annotationList,
  annotationAll,
  isAnnotationsEditModeEnabled,
  annotationDeleteRequestStatus,
  isAnnotationDeleteRequestPending,
  deleteAnnotation,
  setDeleteDialogStatus,
  updateAnnotationText,
  statusOfUpdatingAnnotaion,
  saveStatusOfUpdatingAnnotation,
}) => {
  const handleDeleteAnnotation = React.useCallback((annotation) => {
    deleteAnnotation({
      collId: annotation.collId,
      aid: annotation.aid,
    });
  }, [deleteAnnotation]);

  const handleSaveStatusOfUpdatingAnnotation = () => {
    saveStatusOfUpdatingAnnotation('success');
  };

  return (
    <AnnotationListContent
      className={className}
      annotationList={annotationList}
      collections={collections}
      annotationAll={annotationAll}
      isEditModeEnabled={isAnnotationsEditModeEnabled}
      isDeleteRequestPending={isAnnotationDeleteRequestPending}
      annotationDeleteRequestStatus={annotationDeleteRequestStatus}
      onDeleteAnnotation={handleDeleteAnnotation}
      setDeleteDialogStatus={setDeleteDialogStatus}
      updateAnnotationText={(data) => updateAnnotationText(data)}
      saveStatusOfUpdatingAnnotation={handleSaveStatusOfUpdatingAnnotation}
      statusOfUpdatingAnnotaion={statusOfUpdatingAnnotaion}
    />
  );
};

AnnotationListContainerBase.propTypes = {
  className: types.string,
  collections: CollectionListType,
  annotationList: AnnotationListType,
  annotationAll: AnnotationAllType,
  isAnnotationsEditModeEnabled: types.bool,
  annotationDeleteRequestStatus: types.string.isRequired,
  isAnnotationDeleteRequestPending: types.bool,
  deleteAnnotation: types.func.isRequired,
  setDeleteDialogStatus: types.func.isRequired,
  updateAnnotationText: types.func.isRequired,
  saveStatusOfUpdatingAnnotation: types.func.isRequired,
  statusOfUpdatingAnnotaion: types.string.isRequired,
};

AnnotationListContainerBase.defaultProps = {
  className: undefined,
  collections: [],
  annotationList: [],
  annotationAll: {},
  isAnnotationsEditModeEnabled: false,
  isAnnotationDeleteRequestPending: false,
};

const mapStateToProps = (state) => {
  const { ui, annotations } = state;

  const {
    isAnnotationsEditModeEnabled,
    isAnnotationDeleteRequestPending,
  } = ui.annotations;

  const { annotationDeleteRequestStatus, statusOfUpdatingAnnotaion } = annotations;

  const annotationList = r.flatten(Object.values(state.annotations.annotations));

  const tableCollections = tableCollectionsSelector(state);
  const collections = r.map(
    (x) => {
      const tmp = collectionSummarySelector(x.collId)(state);
      return (r.isNil(tmp)) ? x : tmp;
    },
    tableCollections,
  );

  return {
    collections,
    annotationList,
    annotationAll: annotationsAllSelector(state),
    isAnnotationsEditModeEnabled,
    annotationDeleteRequestStatus,
    isAnnotationDeleteRequestPending,
    statusOfUpdatingAnnotaion,
  };
};

const AnnotationListContainer = r.compose(
  connect(
    mapStateToProps,
    {
      deleteAnnotation: deleteAnnotationAction,
      setDeleteDialogStatus: setDeleteDialogStatusAction,
      updateAnnotationText: updateAnnotationTextAction,
      saveStatusOfUpdatingAnnotation: saveStatusOfUpdatingAnnotationAction,
    },
  ),
)(AnnotationListContainerBase);

export { AnnotationListContainer as AnnotationList };
