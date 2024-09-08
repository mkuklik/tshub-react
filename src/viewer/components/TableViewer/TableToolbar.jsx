/* eslint-disable react/forbid-prop-types */
import React from 'react';
import types from 'prop-types';
import { Button, Tooltip, AnchorButton } from '@blueprintjs/core';

import { Toolbar } from '../common';

import { CollectionListType } from '../../types/Collections';

const TableToolbar = ({
  isWorkbook,
  collections,
  isAnnotationsVisible,
  isAnnotationsEditModeEnabled,
  toggleAnnotationsVisible,
  toggleAnnotationsEditMode,
  isAnnotationListVisible,
  annotationsSetCreateDialogVisibility,
  annotationsSetAnnotationListVisibility,
  tableDownload,
}) => (
  <Toolbar style={{ height: '30px' }}>
    <Toolbar.Group>
      <Tooltip content="Toggle annotations">
        <AnchorButton
          icon="highlight"
          active={isAnnotationsVisible}
          onClick={toggleAnnotationsVisible}
        />
      </Tooltip>
      { !isWorkbook && (
      <Tooltip content="Toggle edit mode">
        <AnchorButton
          icon="edit"
          active={isAnnotationsEditModeEnabled}
          onClick={toggleAnnotationsEditMode}
        />
      </Tooltip>
      )}
      <Tooltip content="Create Annotation">
        <AnchorButton
          disabled={collections.length === 0}
          icon="add"
          onClick={() => annotationsSetCreateDialogVisibility(true)}
        />
      </Tooltip>
      { isWorkbook && (
        <>
          <Tooltip content="Annotation List">
            <AnchorButton
              icon="properties"
              active={isAnnotationListVisible}
              onClick={() => annotationsSetAnnotationListVisibility(true)}
            />
          </Tooltip>

          <Tooltip content="Download series">
            <AnchorButton
              icon="download"
              active={isAnnotationListVisible}
              onClick={() => tableDownload()}
            />
          </Tooltip>
        </>
      )}
    </Toolbar.Group>
  </Toolbar>
);

TableToolbar.propTypes = {
  isWorkbook: types.bool,
  collections: CollectionListType,
  isAnnotationsVisible: types.bool,
  isAnnotationsEditModeEnabled: types.bool,
  isAnnotationListVisible: types.bool,
  toggleAnnotationsVisible: types.func.isRequired,
  toggleAnnotationsEditMode: types.func.isRequired,
  annotationsSetCreateDialogVisibility: types.func.isRequired,
  annotationsSetAnnotationListVisibility: types.func.isRequired,
  tableDownload: types.func.isRequired,
};

TableToolbar.defaultProps = {
  isWorkbook: false,
  collections: [],
  isAnnotationsVisible: false,
  isAnnotationsEditModeEnabled: false,
  isAnnotationListVisible: false,
};

export default TableToolbar;
