import React from 'react';
import types from 'prop-types';
import {
  Dialog, HTMLSelect, Classes, FormGroup,
} from '@blueprintjs/core';

import {
  isNil, isEmpty, map, has,
} from 'ramda';

import { Footer, ActionButton } from './AnnotationDeleteTargetDialog.Components';
import RenderErrors from '../../TimeseriesBrowser/SpaceBrowser/RenderErrors';
import { truncate } from '../../common/truncate';
import { TargetTypes, AnnotationListType, AnnotationAllType } from '../../../types/Annotations';
import { CollectionListType } from '../../../types/Collections';

const AnnotationDeleteTargetDialog = ({
  collId,
  target,
  visible,
  collections,
  annotationsAll,
  onCancel,
  onConfirm,
  isRequestPending,
  annotationErrors,
}) => {
  const [selectedAnnotationID, setSelectedAnnotationID] = React.useState(null);
  const [selectedCollId, setCollId] = React.useState('');

  const handleChange = React.useCallback((event) => {
    setSelectedAnnotationID(event.target.value);
  }, [setSelectedAnnotationID]);

  const handleConfirm = React.useCallback(() => {
    onConfirm(isEmpty(selectedCollId) ? collId : selectedCollId, selectedAnnotationID);
    setSelectedAnnotationID(null);
  }, [selectedAnnotationID, onConfirm]);

  const handleSelectCollId = (event) => setCollId(event.target.value);

  const selectedAnnotations = (isNil(collId))
    ? annotationsAll[selectedCollId]
    : annotationsAll[collId] || [];

  const toBeDeletedAnnotation = [];
  if (!isNil(selectedAnnotations)) {
    // tsid, index, freq
    if ((has('tsid', target) && has('index', target) && has('freq', target))) {
      selectedAnnotations.forEach((firstMapAnnotation) => {
        firstMapAnnotation.targets.forEach((secondMapTarget) => {
          if (!isNil(secondMapTarget.tsid)
            && secondMapTarget.index === target.index
          ) toBeDeletedAnnotation.push(firstMapAnnotation);
        });
      });
    } else
    // index, freq
    if ((!has('tsid', target) && has('index', target) && has('freq', target))) {
      selectedAnnotations.forEach((firstMapAnnotation) => {
        firstMapAnnotation.targets.forEach((secondMapTarget) => {
          if (isNil(secondMapTarget.tsid)
            && secondMapTarget.index === target.index
          ) toBeDeletedAnnotation.push(firstMapAnnotation);
        });
      });
    } else
    if ((has('tsid', target) && !has('index', target) && !has('freq', target))) {
      // only tsid 
      selectedAnnotations.forEach((firstMapAnnotation) => {
        firstMapAnnotation.targets.forEach((secondMapTarget) => {
          if (secondMapTarget.tsid === target.tsid
            && isNil(secondMapTarget.index)
          ) toBeDeletedAnnotation.push(firstMapAnnotation);
        });
      });
    }
  }

  return (
    <Dialog
      isOpen={visible}
      title="Delete annotation"
      onCancel={onCancel}
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

        <FormGroup label="Select Annotation">
          <HTMLSelect
            fill
            disabled={isNil(selectedCollId) || isEmpty(selectedCollId)}
            value={selectedAnnotationID}
            onChange={handleChange}
          >
            <option key="null" value="">{' '}</option>
            {!isEmpty(toBeDeletedAnnotation) && map((annotation) => (
              <option key={annotation.aid} value={annotation.aid}>
                {`(${annotation.symbol}) ${truncate(20, annotation.text)}`}
              </option>
            ), toBeDeletedAnnotation)}
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
          intent="danger"
          onClick={handleConfirm}
          loading={isRequestPending}
        >
          Delete
        </ActionButton>

        <ActionButton onClick={onCancel}>
          Cancel
        </ActionButton>
      </Footer>
    </Dialog>
  );
};

AnnotationDeleteTargetDialog.propTypes = {
  target: TargetTypes.isRequired,
  collId: types.string,
  visible: types.bool,
  collections: CollectionListType.isRequired,
  annotationsAll: AnnotationAllType.isRequired,
  onCancel: types.func.isRequired,
  onConfirm: types.func.isRequired,
  isRequestPending: types.bool,
  annotationErrors: types.arrayOf(types.string),
};

AnnotationDeleteTargetDialog.defaultProps = {
  collId: undefined,
  visible: false,
  isRequestPending: false,
  annotationErrors: [],
};

export { AnnotationDeleteTargetDialog };
