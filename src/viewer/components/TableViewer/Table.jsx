/* eslint-disable react/forbid-prop-types */
import React from 'react';
import types from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import 'moment-timezone';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { isNil } from 'ramda';
import { IndexToTargetsByCollIdType } from '../../types/Annotations';

import IndexRenderer from './Renderers/IndexRenderer';
import ValueRenderer from './Renderers/ValueRenderer';
import TimeSeriesRenderer from './Renderers/TimeSeriesRendered';
import { CollectionListType } from '../../types/Collections';

const Table = ({
  size,
  disableAnnotations,
  freq,
  rowData,
  dateFormat,
  columnDefs,
  collections,
  indexToTargetsByCollId,
  isAnnotationsVisible,
  annotationsSetAddTargetDialogVisibility,
  annotationsSetDeleteDialogVisibility,
  annotationsSetAddTarget,
  annotationsSetDeleteTarget,
  tries,
  updateTable,
}) => {

  React.useEffect(() => {
    console.log(`check freq ${freq}, and tries ${tries}`);
    if (tries === 0 && isNil(freq)) {
      console.log('trigger tabel update');
      updateTable();
    }
  }, [tries, freq, updateTable]);

  const handleGridyReady = React.useCallback(({ api }) => {
    api.sizeColumnsToFit();
  }, []);

  const handleFirstDataRendered = React.useCallback(({ api }) => {
    if (!isNil(api)) api.autoSizeColumns(['index']);
  }, []);

  const handleAddAnnotationRequest = React.useCallback((targetToSet) => {
    annotationsSetAddTarget(targetToSet);
    annotationsSetAddTargetDialogVisibility(true);
  }, [annotationsSetAddTarget, annotationsSetAddTargetDialogVisibility]);

  const handleDeleteAnnotationRequest = React.useCallback((targetToDelete) => {
    annotationsSetDeleteTarget(targetToDelete);
    annotationsSetDeleteDialogVisibility(true);
  }, [annotationsSetDeleteTarget, annotationsSetDeleteDialogVisibility]);


  const context = {
    collections,
    freq,
    dateFormat,
    disableAnnotations,
    indexToTargetsByCollId,
    isAnnotationsVisible,
    columnDefinitions: columnDefs,
    onAddAnnotationRequest: handleAddAnnotationRequest,
    onDeleteAnnotationRequest: handleDeleteAnnotationRequest,
  };

  const frameworkComponents = {
    indexRenderer: IndexRenderer,
    valueRenderer: ValueRenderer,
    timeSeriesRenderer: TimeSeriesRenderer,
  };

  const grid = React.createRef();
  React.useEffect(() => {
    if (grid) {
      grid.current.api.redrawRows();
      grid.current.api.refreshHeader();
    }
  }, [isAnnotationsVisible, indexToTargetsByCollId]);

  // React.useEffect(() => {
  //   if (requestTargetDialogStatus === 'success') {
  //     annotationsSetAddTargetDialogVisibility(false);
  //     setTargetDialogStatus();
  //   }
  // }, [requestTargetDialogStatus, annotationsSetAddTargetDialogVisibility]);

  // console.log('tableViewer size', size); // style={{ height: '30px' }}

  return (
    <div style={{ height: size.height - 30, width: size.width }} className="ag-theme-balham">
      <AgGridReact
        ref={grid}
        modules={AllCommunityModules}
        columnDefs={columnDefs}
        rowData={rowData}
        context={context}
        rowHeight={40}
        frameworkComponents={frameworkComponents}
        onGridReady={handleGridyReady}
        firstDataRendered={handleFirstDataRendered}
        // suppressColumnVirtualisation
        suppressMovable
      />
    </div>
  );
};

Table.propTypes = {
  rowData: types.array,
  columnDefs: types.array,
  disableAnnotations: types.bool,
  collections: CollectionListType,
  freq: types.string,
  dateFormat: types.string.isRequired,
  indexToTargetsByCollId: IndexToTargetsByCollIdType.isRequired,
  isAnnotationsVisible: types.bool,
  annotationsSetAddTargetDialogVisibility: types.func.isRequired,
  annotationsSetDeleteDialogVisibility: types.func.isRequired,
  annotationsSetAddTarget: types.func.isRequired,
  annotationsSetDeleteTarget: types.func.isRequired,
  size: types.shape({
    height: types.number,
    width: types.number,
  }).isRequired,
};

Table.defaultProps = {
  collections: [],
  disableAnnotations: false,
  freq: undefined,
  rowData: [],
  columnDefs: [],
  isAnnotationsVisible: false,
};

export default Table;
