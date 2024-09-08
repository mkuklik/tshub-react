import React from 'react';
import types from 'prop-types';
import {
  Dialog, FormGroup, InputGroup, Classes, HTMLSelect, Intent,
} from '@blueprintjs/core';
import styled from 'styled-components';

import { isEmpty, isNil, map, prop, path } from 'ramda';
import {
  CreateButton,
  AnnotationTextInput,
  ActionButton,
} from './AnnotationCreateDialog.Components';
import { CollectionListType } from '../../../types/Collections';
import RenderErrors from '../../TimeseriesBrowser/SpaceBrowser/RenderErrors';

const Footer = styled.div`
display: flex;
justify-content: space-between;
`;

const AnnotationCreateDialog = ({
  visible,
  isRequestPending,
  onClose,
  onCreate,
  collections,
  annotationErrors,
}) => {
  const [text, setText] = React.useState('');
  const [collId, setCollection] = React.useState((prop('length', collections) > 0)
    ? path([0, 'collId'], collections)
    : undefined);
  const [symbol, setSymbol] = React.useState('');
  const [validateText, setValidateText] = React.useState(true);

  const handleCreateButtonClick = React.useCallback(() => {
    onCreate(collId, { text, symbol });
    setText('');
    setSymbol('');
  }, [collId, text, symbol, onCreate]);

  const handleTextValidation = () => {
    if (text === '') return setValidateText(false);
    handleCreateButtonClick();
  };

  const handlClosePopup = () => {
    setValidateText(true);
    onClose();
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setValidateText(true);
  };

  const handleSelect = (event) => {
    setCollection(event.target.value);
  };

  return (
    <Dialog
      isOpen={visible}
      icon="highlight"
      title="Create annotation"
      onClose={handlClosePopup}
    >
      <div className={Classes.DIALOG_BODY}>
        <FormGroup
          label="In collection"
          helperText="Collection in which annotation will be created in."
        >
          <HTMLSelect fill value={collId} onChange={handleSelect}>
            {map((col) => (
              <option key={col.collId} value={col.collId}>
                {col.name || col.collId}
              </option>
            ), collections)}
          </HTMLSelect>
        </FormGroup>

        <FormGroup label="Annotation text*" labelInfo="(required)">
          <AnnotationTextInput
            intent={(!validateText) ? Intent.DANGER : Intent.NONE}
            value={text}
            onChange={handleTextChange}
          />
        </FormGroup>

        <FormGroup label="Annotation symbol (optional)">
          <InputGroup
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
          />
        </FormGroup>

        { !isEmpty(annotationErrors)
        && (
        <div style={{ marginTop: '20px' }}>
          <RenderErrors errors={annotationErrors} />
        </div>
        )}

      </div>

      <Footer className={Classes.DIALOG_FOOTER}>
        <CreateButton
          loading={isRequestPending}
          onClick={handleTextValidation}
        >
          Create
        </CreateButton>
        <ActionButton onClick={handlClosePopup}> Cancel</ActionButton>
      </Footer>
    </Dialog>
  );
};

AnnotationCreateDialog.propTypes = {
  visible: types.bool,
  isRequestPending: types.bool,
  onClose: types.func.isRequired,
  onCreate: types.func.isRequired,
  collections: CollectionListType.isRequired,
  annotationErrors: types.arrayOf(types.string),
};

AnnotationCreateDialog.defaultProps = {
  visible: false,
  isRequestPending: false,
  annotationErrors: [],
};

export { AnnotationCreateDialog };
