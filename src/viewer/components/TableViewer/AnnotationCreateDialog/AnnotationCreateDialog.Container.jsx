/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as r from 'ramda';
import types from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { createAnnotationAction, setRequestStatusAction } from '../../../actions/annotationActions';

import { AnnotationCreateDialog } from './AnnotationCreateDialog';
import { annotationsSetCreateDialogVisibilityAction } from '../../../actions/uiActions';
import { CollectionListType } from '../../../types/Collections';
import { tableCollectionsSelector } from '../../../selectors/table';
import { uiAnnnotationRequestPendingSelector, uiAnnotationsIsAnnotationCreateDialogVisibleSelector, uiAnnnotationErrorsSelector } from '../../../selectors/annotations';

const AnnotationCreateDialogContainerBase = ({
  // requestStatus,
  isRequestPending,
  isAnnotationCreateDialogVisible,
  createAnnotation,
  annotationErrors,
  annotationsSetCreateDialogVisibility,
  // setRequestStatus,
  collections,
}) => {
  // React.useEffect(() => {
  //   if (requestStatus === 'success') {
  //     return () => {
  //       annotationsSetCreateDialogVisibility(false);
  //       setRequestStatus();
  //     };
  //   }
  // }, [requestStatus]); // onClose

  const handleCreateAnnotation = React.useCallback((collId, annotation) => {
    createAnnotation({
      ...annotation,
      collId,
    });
  }, [createAnnotation]);

  return (
    <AnnotationCreateDialog
      visible={isAnnotationCreateDialogVisible}
      isRequestPending={isRequestPending}
      onCreate={handleCreateAnnotation}
      onClose={() => annotationsSetCreateDialogVisibility(false)}
      annotationErrors={annotationErrors}
      collections={collections}
      key={collections}
    />
  );
};

AnnotationCreateDialogContainerBase.propTypes = {
  // collId: types.string.isRequired,
  // requestStatus: types.string,
  isRequestPending: types.bool,
  isAnnotationCreateDialogVisible: types.bool.isRequired,
  createAnnotation: types.func.isRequired,
  annotationErrors: types.arrayOf(types.string),
  // onClose: types.func.isRequired,
  // setRequestStatus: types.func.isRequired,
  annotationsSetCreateDialogVisibility: types.func.isRequired,
  collections: CollectionListType,
};

AnnotationCreateDialogContainerBase.defaultProps = {
  // requestStatus: '',
  isRequestPending: false,
  collections: [],
  annotationErrors: [],
};

const mapStateToProps = (state) => ({
  annotationErrors: uiAnnnotationErrorsSelector(state),
  isRequestPending: uiAnnnotationRequestPendingSelector(state),
  isAnnotationCreateDialogVisible: uiAnnotationsIsAnnotationCreateDialogVisibleSelector(state),
  collections: tableCollectionsSelector(state),
});


const mapDispatchToProps = (dispatch) => bindActionCreators({
  createAnnotation: createAnnotationAction,
  annotationsSetCreateDialogVisibility: annotationsSetCreateDialogVisibilityAction,
}, dispatch);

const AnnotationCreateDialogContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(AnnotationCreateDialogContainerBase);

export { AnnotationCreateDialogContainer as AnnotationCreateDialog };
