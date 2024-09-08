/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as r from 'ramda';
import types from 'prop-types';
import { connect } from 'react-redux';

import {
  TargetTypes,
  AnnotationAllType,
} from '../../../types/Annotations';

import {
  deleteAnnotationTargetAction,
} from '../../../actions/annotationActions';

import { AnnotationDeleteTargetDialog } from './AnnotationDeleteTargetDialog';
import { annotationsSetDeleteDialogVisibilityAction } from '../../../actions/uiActions';
import {
  uiAnnotationsToDeleteTargetSelector,
  annotationsByCollIdSelector,
  annotationsAllSelector,
  uiAnnnotationRequestPendingSelector,
} from '../../../selectors/annotations';
import { tableCollectionsSelector } from '../../../selectors/table';
import { CollectionListType } from '../../../types/Collections';

const AnnotationDeleteTargetDialogContainerBase = ({
  target,
  annotationsAll,
  collId,
  collections,
  deleteAnnotationTarget,
  isRequestPending,
  isAnnotationDeleteDialogVisible,
  annotationsSetDeleteDialogVisibility,
}) => {
  const handleConfirm = React.useCallback((targetCollId, aid) => {
    deleteAnnotationTarget({
      collId: targetCollId,
      aid,
    });
  }, [collId, deleteAnnotationTarget]);

  return (
    <AnnotationDeleteTargetDialog
      collId={collId}
      target={target}
      collections={collections}
      annotationsAll={annotationsAll}
      onConfirm={handleConfirm}
      isRequestPending={isRequestPending}
      visible={isAnnotationDeleteDialogVisible}
      onCancel={() => annotationsSetDeleteDialogVisibility(false)}
    />
    // )
  );
};

AnnotationDeleteTargetDialogContainerBase.propTypes = {
  target: TargetTypes,
  annotationsAll: AnnotationAllType,
  collId: types.string,
  collections: CollectionListType,
  isRequestPending: types.bool,
  deleteAnnotationTarget: types.func.isRequired,
  isAnnotationDeleteDialogVisible: types.bool.isRequired,
  annotationsSetDeleteDialogVisibility: types.func.isRequired,
};

AnnotationDeleteTargetDialogContainerBase.defaultProps = {
  target: {},
  collId: undefined,
  annotationsAll: {},
  isRequestPending: false,
  collections: [],
};

const mapStateToProps = (state) => {
  const target = uiAnnotationsToDeleteTargetSelector(state);
  return {
    target,
    collId: r.path(['collId'], target),
    annotations: (r.isNil(target)) ? [] : annotationsByCollIdSelector(target.collId)(state),
    annotationsAll: annotationsAllSelector(state),
    collections: tableCollectionsSelector(state),
    isRequestPending: uiAnnnotationRequestPendingSelector(state),
    isAnnotationDeleteDialogVisible: r.path(['ui', 'annotations', 'isAnnotationDeleteDialogVisible'], state),
  };
};

const AnnotationDeleteTargetDialogContainer = r.compose(
  connect(
    mapStateToProps,
    {
      deleteAnnotationTarget: deleteAnnotationTargetAction,
      annotationsSetDeleteDialogVisibility: annotationsSetDeleteDialogVisibilityAction,
    },
  ),
)(AnnotationDeleteTargetDialogContainerBase);

export { AnnotationDeleteTargetDialogContainer as AnnotationDeleteTargetDialog };
