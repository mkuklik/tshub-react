import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

import { map, path, isNil, prop } from 'ramda';
import {
  AnnotationAllType,
} from '../../../types/Annotations';

import { ConfirmationDialog } from '../../common';
import { Annotation as AnnotationBase } from './Annotation';
import { CollectionListType } from '../../../types/Collections';

const Container = styled.div``;

const Annotation = styled(AnnotationBase)`
  margin-bottom: 10px;
`;

const AnnotationListContent = ({
  className,
  collections,
  annotationAll,
  isEditModeEnabled,
  isDeleteRequestPending,
  annotationDeleteRequestStatus,
  onDeleteAnnotation,
  setDeleteDialogStatus,
  updateAnnotationText,
  statusOfUpdatingAnnotaion,
  saveStatusOfUpdatingAnnotation,
}) => {
  const [
    deleteConfirmationDialogVisible,
    setDeleteConfirmationDialogVisible,
  ] = React.useState(false);

  const [
    annotationToDelete,
    setAnnotationToDelete,
  ] = React.useState(null);

  const handleDeleteAnnotation = React.useCallback(() => {
    onDeleteAnnotation(annotationToDelete);
  }, [annotationToDelete, onDeleteAnnotation]);

  React.useEffect(() => {
    if (annotationDeleteRequestStatus === 'success') {
      setDeleteConfirmationDialogVisible(false);
      setDeleteDialogStatus();
    }
  }, [annotationDeleteRequestStatus, setDeleteConfirmationDialogVisible]);

  const handleDelete = (data) => {
    setAnnotationToDelete(data);
    setDeleteConfirmationDialogVisible(true);
  };

  const handleOnCancel = () => {
    setDeleteConfirmationDialogVisible(false);
  };

  const renderAnnotations = (annotations) => map((annotation) => (
    <Annotation
      key={annotation.aid}
      annotation={annotation}
      isEditModeEnabled={isEditModeEnabled}
      onDelete={handleDelete}
      updateAnnotationText={(data) => updateAnnotationText(data)}
      statusOfUpdatingAnnotaion={statusOfUpdatingAnnotaion}
      saveStatusOfUpdatingAnnotation={() => saveStatusOfUpdatingAnnotation()}
    />
  ), annotations);

  const renderByCollection = map(({ collId, name: collName }) => {
    const annotations = path([collId], annotationAll);
    if (isNil(annotations) || prop('length', annotations) === 0) return null;
    return (
      <div key={collId}>
        <h3>
          {`In collection '${collName}'`}
        </h3>
        { renderAnnotations(annotations) }
      </div>
    );
  }, collections);

  return (
    <Container className={className}>
      { renderByCollection }
      <ConfirmationDialog
        title="Delete annotation"
        visible={deleteConfirmationDialogVisible}
        isLoading={isDeleteRequestPending}
        onConfirm={handleDeleteAnnotation}
        onCancel={handleOnCancel}
      >
        Are you sure you want to delete annotation?
      </ConfirmationDialog>
    </Container>
  );
};

AnnotationListContent.propTypes = {
  className: types.string,
  collections: CollectionListType,
  annotationAll: AnnotationAllType.isRequired,
  isEditModeEnabled: types.bool,
  isDeleteRequestPending: types.bool,
  annotationDeleteRequestStatus: types.string.isRequired,
  onDeleteAnnotation: types.func.isRequired,
  setDeleteDialogStatus: types.func.isRequired,
  updateAnnotationText: types.func.isRequired,
  statusOfUpdatingAnnotaion: types.string.isRequired,
  saveStatusOfUpdatingAnnotation: types.func.isRequired,
};

AnnotationListContent.defaultProps = {
  className: undefined,
  collections: [],
  isEditModeEnabled: false,
  isDeleteRequestPending: false,
};

export { AnnotationListContent };
