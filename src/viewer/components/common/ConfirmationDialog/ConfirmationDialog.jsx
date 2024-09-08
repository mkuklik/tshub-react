import React from 'react';
import types from 'prop-types';
import { Dialog, Classes, Intent } from '@blueprintjs/core';

import {
  Footer,
  ActionButton,
} from './ConfirmationDialog.Components';

const ConfirmationDialog = ({
  visible,
  title,
  children,
  isLoading,
  onCancel,
  onConfirm,
}) => (
  <Dialog isOpen={visible} title={title} onClose={onCancel}>
    <div className={Classes.DIALOG_BODY}>
      {children}
    </div>

    <Footer>
      <ActionButton
        intent={Intent.DANGER}
        loading={isLoading}
        onClick={onConfirm}
      >
        Yes
      </ActionButton>

      <ActionButton onClick={onCancel}>
        No
      </ActionButton>
    </Footer>
  </Dialog>
);

ConfirmationDialog.propTypes = {
  visible: types.bool,
  title: types.string.isRequired,
  children: types.node.isRequired,
  isLoading: types.bool,
  onCancel: types.func.isRequired,
  onConfirm: types.func.isRequired,
};

ConfirmationDialog.defaultProps = {
  visible: false,
  isLoading: false,
};

export { ConfirmationDialog };
