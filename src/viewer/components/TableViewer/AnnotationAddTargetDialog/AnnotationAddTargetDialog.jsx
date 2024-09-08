import React from 'react';
import types from 'prop-types';
import {
  Dialog, HTMLSelect, Classes, Intent, FormGroup,
} from '@blueprintjs/core';

import {
  isNil, map, isEmpty, any, filter,
} from 'ramda';
import { TargetTypes, AnnotationAllType } from '../../../types/Annotations';

import { Footer, ActionButton } from './AnnotationAddTargetDialog.Components';
import { truncate } from '../../common/truncate';
import RenderErrors from '../../TimeseriesBrowser/SpaceBrowser/RenderErrors';
import { CollectionListType } from '../../../types/Collections';

const AnnotationAddTargetDialog = ({
  target,
  collId,
  visible,
  annotationsAll,
  collections,
  onCancel,
  onConfirm,
  isRequestPending,
  annotationErrors,
}) => {
  const [selectedAnnotationID, setSelectedAnnotationID] = React.useState('');

  const [selectedCollId, setCollId] = React.useState('');

  const handleAnnotationChange = React.useCallback((event) => {
    setSelectedAnnotationID(event.target.value);
  }, [setSelectedAnnotationID]);

  const handleConfirm = React.useCallback(() => {
    onConfirm(isEmpty(selectedCollId) ? collId : selectedCollId, selectedAnnotationID);
    setSelectedAnnotationID(null);
  }, [selectedAnnotationID, onConfirm]);

  const handleSelectCollId = (event) => setCollId(event.target.value);

  let selectedAnnotations = [];
  if (!isNil(target)) {
    const selectedAnnotations1 = (isNil(collId))
      ? annotationsAll[selectedCollId]
      : annotationsAll[collId] || [];

    // remove annotation that already has that target
    selectedAnnotations = (isNil(selectedAnnotations1))
      ? selectedAnnotations1
      : filter(
        (a) => !any((x) => (x.index === target.index
        && x.freq === target.freq
        && x.tsid === target.tsid
        ), a.targets), selectedAnnotations1,
      );
  }

  return (
    <Dialog
      isOpen={visible}
      title="Add annotation"
      onClose={onCancel}
    >

      <div className={Classes.DIALOG_BODY}>
        {isNil(collId) && (
        <FormGroup label="Select Collection">
          <HTMLSelect fill value={selectedCollId} onChange={handleSelectCollId}>
            <option key="null" value="">{' '}</option>
            { !isEmpty(collections) && (
              map((col) => (
                <option key={col.collId} value={col.collId}>
                  {col.name}
                </option>
              ), collections)
            )}
          </HTMLSelect>
        </FormGroup>
        )}


        <FormGroup label="Select annotation">
          <HTMLSelect
            fill
            disabled={isNil(collId) && isEmpty(selectedCollId)}
            value={selectedAnnotationID}
            onChange={handleAnnotationChange}
          >
            <option key="null" value="">{' '}</option>
            {!isNil(selectedAnnotations) && map((annotation) => (
              <option key={annotation.aid} value={annotation.aid}>
                {`(${annotation.symbol}) ${truncate(20, annotation.text)}`}
              </option>
            ), selectedAnnotations)}
          </HTMLSelect>
        </FormGroup>


        { !isEmpty(annotationErrors)
        && (
        <div style={{ marginTop: '20px' }}>
          <RenderErrors errors={annotationErrors} />
        </div>
        )}


      </div>

      <Footer>
        <ActionButton
          disabled={isNil(selectedAnnotationID)}
          intent={Intent.PRIMARY}
          onClick={handleConfirm}
          loading={isRequestPending}
        >
          Confirm
        </ActionButton>

        <ActionButton onClick={onCancel}>
          Cancel
        </ActionButton>
      </Footer>
    </Dialog>
  );
};

AnnotationAddTargetDialog.propTypes = {
  target: TargetTypes,
  collId: types.string,
  visible: types.bool,
  collections: CollectionListType.isRequired,
  annotationsAll: AnnotationAllType,
  onCancel: types.func.isRequired,
  onConfirm: types.func.isRequired,
  isRequestPending: types.bool,
  annotationErrors: types.arrayOf(types.string),
};

AnnotationAddTargetDialog.defaultProps = {
  target: undefined,
  collId: undefined,
  visible: false,
  annotationsAll: {},
  isRequestPending: false,
  annotationErrors: [],
};

export { AnnotationAddTargetDialog };
