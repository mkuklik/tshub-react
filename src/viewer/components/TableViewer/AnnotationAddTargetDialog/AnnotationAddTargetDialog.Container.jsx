/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as r from 'ramda';
import types from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {
  AnnotationListType,
  TargetTypes,
  AnnotationAllType,
} from '../../../types/Annotations';

import {
  addAnnotationTargetAction,
} from '../../../actions/annotationActions';

import { AnnotationAddTargetDialog } from './AnnotationAddTargetDialog';
import { annotationsSetAddTargetDialogVisibilityAction } from '../../../actions/uiActions';
import {
  annotationsAllSelector,
  annotationsByCollIdSelector,
  uiAnnotationsToAddTargetSelector,
  uiAnnotationsAddTargetDialogVisibleSelector,
  uiAnnnotationErrorsSelector,
  uiAnnnotationRequestPendingSelector,
} from '../../../selectors/annotations';
import { tableCollectionsSelector } from '../../../selectors/table';
import { CollectionType } from '../../../types/Collections';


const AnnotationAddTargetDialogContainerBase = ({
  target,
  annotations,
  annotationsAll,
  collections,
  collId,
  isRequestPending,
  isAnnotationAddTargetDialogVisible,
  annotationsSetAddTargetDialogVisibility,
  addAnnotationTarget,
  annotationErrors,
}) => {
  const handleConfirm = React.useCallback((targetCollId, aid) => {
    addAnnotationTarget({
      collId: targetCollId,
      aid,
    });
  }, [addAnnotationTarget]);

  return (
    <AnnotationAddTargetDialog
      target={target}
      collId={collId}
      annotations={annotations}
      annotationsAll={annotationsAll}
      collections={collections}
      onConfirm={handleConfirm}
      isRequestPending={isRequestPending}
      visible={isAnnotationAddTargetDialogVisible}
      onCancel={() => annotationsSetAddTargetDialogVisibility(false)}
      annotationErrors={annotationErrors}
    />
  );
};

AnnotationAddTargetDialogContainerBase.propTypes = {
  target: TargetTypes,
  collId: types.string,
  annotations: AnnotationListType,
  annotationsAll: AnnotationAllType.isRequired,
  collections: types.arrayOf(CollectionType),
  addAnnotationTarget: types.func.isRequired,
  annotationsSetAddTargetDialogVisibility: types.func.isRequired,
  isRequestPending: types.bool,
  isAnnotationAddTargetDialogVisible: types.bool.isRequired,
  annotationErrors: types.arrayOf(types.string),
};

AnnotationAddTargetDialogContainerBase.defaultProps = {
  target: undefined,
  collId: undefined,
  annotations: [],
  collections: [],
  isRequestPending: false,
  annotationErrors: [],
};

const mapStateToProps = (state) => {
  const target = uiAnnotationsToAddTargetSelector(state);

  return {
    target,
    collId: r.path(['collId'], target),
    annotations: (r.isNil(target)) ? [] : annotationsByCollIdSelector(target.collId)(state),
    annotationsAll: annotationsAllSelector(state),
    collections: tableCollectionsSelector(state),
    isRequestPending: uiAnnnotationRequestPendingSelector(state),
    isAnnotationAddTargetDialogVisible: uiAnnotationsAddTargetDialogVisibleSelector(state),
    annotationErrors: uiAnnnotationErrorsSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addAnnotationTarget: addAnnotationTargetAction,
  annotationsSetAddTargetDialogVisibility: annotationsSetAddTargetDialogVisibilityAction,
}, dispatch);

const AnnotationAddTargetDialogContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(AnnotationAddTargetDialogContainerBase);

export { AnnotationAddTargetDialogContainer as AnnotationAddTargetDialog };
