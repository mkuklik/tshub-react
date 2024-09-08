/* eslint-disable react/forbid-prop-types */
import React from 'react';
import * as r from 'ramda';
import types from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { dateFormat as dateFormatMapping } from '../../utilities/format';
import { IndexToTargetsByCollIdType } from '../../types/Annotations';

import {
  getAnnotationList,
  annotationsIndexToTargetsByCollId,
  uiAnnotationIsAnnotationListVisibleSelector,
  uiAnnotationsisAnnotationsVisibleSelector,
  uiAnnotationIsAnnotationsEditModeEnabledSelector,
  annotationsAllSelector,
} from '../../selectors/annotations';

import { fetchAnnotationsAction } from '../../actions/annotationActions';
import {
  annotationsToggleAnnotationsVisible,
  annotationsToggleAnnotationsEditMode,
  annotationsSetAddTargetDialogVisibilityAction,
  annotationsSetDeleteDialogVisibilityAction,
  annotationsSetCreateDialogVisibilityAction,
  annotationsSetDeleteTargetAction,
  annotationsSetAddTargetAction,
  annotationsSetAnnotationListVisibilityAction,
} from '../../actions/uiActions';

import Table from './Table';
import { CollectionListType } from '../../types/Collections';
import TableToolbar from './TableToolbar';
import { tableCollectionsSelector } from '../../selectors/table';
import { SizeType } from '../../types/common';
import {
  updateTableAction,
  tableDownloadAction,
} from '../../actions/tableActions';


const Container = styled.div`
  // display: grid;
  height: 100%;
  width: 100%;
`;

const TableContainerBase = ({
  className,
  size,
  isWorkbook,
  rowData,
  columnDefs,
  collections,
  freq,
  dateFormat,
  indexToTargetsByCollId,
  isAnnotationsVisible,
  isAnnotationsEditModeEnabled,
  toggleAnnotationsVisible,
  toggleAnnotationsEditMode,
  annotationsSetCreateDialogVisibility,
  annotationsSetAddTargetDialogVisibility,
  annotationsSetDeleteDialogVisibility,
  annotationsSetAddTarget,
  annotationsSetDeleteTarget,
  annotationsSetAnnotationListVisibility,
  isAnnotationListVisible,
  tries,
  updateTable,
  tableDownload,
}) => {

  return (
    <Container className={className}>
      <TableToolbar
        isWorkbook={isWorkbook}
        collections={collections}
        isAnnotationsVisible={isAnnotationsVisible}
        isAnnotationsEditModeEnabled={isAnnotationsEditModeEnabled}
        toggleAnnotationsVisible={toggleAnnotationsVisible}
        toggleAnnotationsEditMode={toggleAnnotationsEditMode}
        isAnnotationListVisible={isAnnotationListVisible}
        annotationsSetCreateDialogVisibility={annotationsSetCreateDialogVisibility}
        annotationsSetAnnotationListVisibility={annotationsSetAnnotationListVisibility}
        tableDownload={tableDownload}
      />
      <Table
        size={size}
        freq={freq}
        dateFormat={dateFormat}
        rowData={rowData}
        collections={collections}
        columnDefs={columnDefs}
        indexToTargetsByCollId={indexToTargetsByCollId}
        isAnnotationsVisible={isAnnotationsVisible}
        annotationsSetAddTargetDialogVisibility={annotationsSetAddTargetDialogVisibility}
        annotationsSetDeleteDialogVisibility={annotationsSetDeleteDialogVisibility}
        annotationsSetAddTarget={annotationsSetAddTarget}
        annotationsSetDeleteTarget={annotationsSetDeleteTarget}
        tries={tries}
        updateTable={updateTable}
      />
    </Container>
  );
};

TableContainerBase.propTypes = {
  isWorkbook: types.bool,
  size: SizeType,
  rowData: types.array,
  columnDefs: types.array,
  collections: CollectionListType,
  freq: types.string,
  dateFormat: types.string,
  indexToTargetsByCollId: IndexToTargetsByCollIdType.isRequired,
  isAnnotationsVisible: types.bool,
  isAnnotationsEditModeEnabled: types.bool,
  toggleAnnotationsVisible: types.func.isRequired,
  toggleAnnotationsEditMode: types.func.isRequired,
  annotationsSetCreateDialogVisibility: types.func.isRequired,
  annotationsSetAddTargetDialogVisibility: types.func.isRequired,
  annotationsSetDeleteDialogVisibility: types.func.isRequired,
  annotationsSetAddTarget: types.func.isRequired,
  annotationsSetDeleteTarget: types.func.isRequired,
  annotationsSetAnnotationListVisibility: types.func.isRequired,
  tableDownload: types.func.isRequired,
};

TableContainerBase.defaultProps = {
  isWorkbook: false,
  size: { height: undefined, width: undefined },
  rowData: [],
  columnDefs: [],
  collections: [],
  freq: undefined,
  dateFormat: '',
  isAnnotationsVisible: false,
  isAnnotationsEditModeEnabled: false,
};

const mapStateToProps = (state) => {
  const { table } = state;

  const {
    rowData, columnDefs, freq, tries,
  } = table;
  const dateFormat = dateFormatMapping(freq);
  const annotationList = getAnnotationList(state);

  return {
    rowData,
    columnDefs,
    collections: tableCollectionsSelector(state),
    freq,
    tries,
    dateFormat,
    annotationList,
    annotations: annotationsAllSelector(state),
    indexToTargetsByCollId: annotationsIndexToTargetsByCollId(state),
    isAnnotationsVisible: uiAnnotationsisAnnotationsVisibleSelector(state),
    isAnnotationsEditModeEnabled: uiAnnotationIsAnnotationsEditModeEnabledSelector(state),
    isAnnotationListVisible: uiAnnotationIsAnnotationListVisibleSelector(state),
  };
};

const TableContainer = r.compose(
  connect(
    mapStateToProps,
    {
      fetchAnnotations: fetchAnnotationsAction,
      toggleAnnotationsVisible: annotationsToggleAnnotationsVisible,
      toggleAnnotationsEditMode: annotationsToggleAnnotationsEditMode,
      annotationsSetCreateDialogVisibility: annotationsSetCreateDialogVisibilityAction,
      annotationsSetAddTargetDialogVisibility: annotationsSetAddTargetDialogVisibilityAction,
      annotationsSetDeleteDialogVisibility: annotationsSetDeleteDialogVisibilityAction,
      annotationsSetAddTarget: annotationsSetAddTargetAction,
      annotationsSetDeleteTarget: annotationsSetDeleteTargetAction,
      annotationsSetAnnotationListVisibility: annotationsSetAnnotationListVisibilityAction,
      updateTable: updateTableAction,
      tableDownload: tableDownloadAction,
    },
  ),
)(TableContainerBase);

export default TableContainer;
