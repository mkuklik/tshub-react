import React from 'react';
import styled from 'styled-components';
import types from 'prop-types';
import {
  Dialog, Classes, Button, Intent,
} from '@blueprintjs/core';
import { path } from 'ramda';

const Footer = styled.div.attrs({
  className: Classes.DIALOG_FOOTER,
})`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled(Button)`
  && {
    min-width: 100px;
  }
`;

const SpaceBrowserConfirmDelete = ({
  handleClose,
  handleConfirm,
  selectedNode,
  visible,
}) => {
  const label = path(['label'], selectedNode);
  const nodeType = path(['type'], selectedNode);
  
  return (
    <Dialog
      icon="warning-sign"
      onClose={handleClose}
      title={(nodeType === 'space') ? 'Delete Space' : 'Delete Collection'}
      autoFocus
      canEscapeKeyClose
      canOutsideClickClose
      enforceFocus
      usePortal
      isOpen={visible}
    >
      <div className={Classes.DIALOG_BODY}>
        <p>
          {(nodeType === 'space')
            ? 'Are you sure you want to delete the following space?'
            : 'Are you sure you want to delete the following collection?'}
        </p>
        <p>
          {label}
        </p>

      </div>
      <Footer>
        <ActionButton
          intent="danger"
          onClick={handleConfirm}
        >
          Delete
        </ActionButton>

        <ActionButton onClick={handleClose}>
          Cancel
        </ActionButton>
      </Footer>
    </Dialog>
  );
};

SpaceBrowserConfirmDelete.defaultProps = {
  selectedNode: undefined,
  visible: false,
};

SpaceBrowserConfirmDelete.propTypes = {
  visible: types.bool,
  handleClose: types.func.isRequired,
  handleConfirm: types.func.isRequired,
  // selectedNode: types.object
};

export default SpaceBrowserConfirmDelete;
