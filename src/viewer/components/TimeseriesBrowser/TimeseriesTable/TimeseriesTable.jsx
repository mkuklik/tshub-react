/* eslint-disable react/require-default-props */
import * as React from "react";
import types from "prop-types";
import { compose, isNil, map } from "ramda";
import { AgGridReact } from "@ag-grid-community/react";
import {
  Button,
  Popover,
  Position,
  Tooltip,
  AnchorButton,
} from "@blueprintjs/core";
import styled from "styled-components";

import { CollectionType } from "../../../types/Collections";
import { SpaceType } from "../../../types/Spaces";

import {
  TimeseriesListType,
  TimeseriesDetailsType,
} from "../../../types/Timeseries";

import { Header } from "../Common/Header";
import { Loadable } from "../Common/Loadable";
import { ContentContainer as ContentContainerBase } from "../TimeseriesBrowser.Components";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

import { TimeseriesDetails } from "./TimeseriesDetails/TimeseriesDetails";
import {
  ColumnDefinitions,
  FrameworkComponents,
} from "./TimeseriesTable.Settings";
import { InformationContent } from "./TimeseriesTable.Components";
import TimeseriesConfirmDelete from "./TimeseriesConfirmDelete";

const ContentContainer = styled(ContentContainerBase)`
  height: 100%; //74%;
  background-color: transparent;

  .ag-root {
    border: 0;
  }
`;

const TimeseriesTableBase = ({
  space,
  collection,
  timeseries,
  timeseriesDetails,
  onAddTimeseries,
  onSelectTimeseries,
  onRefetchTimeseriesList,
  toggleCreateTimeseriesOverlay,
  deleteTimeseries,
  onShowInformation,
  openUpload,
  className,
}) => {
  const container = React.useRef(null);

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [deleteTimeseriesVisibility, setDeleteTimeseriesVisibility] =
    React.useState(false);
  const handleDeleteTimeseriesDialogClose = () =>
    setDeleteTimeseriesVisibility(false);

  const handleGridReady = React.useCallback((params) => {
    // const containerWidth = container.current.offsetWidth;
    // params.api.sizeColumnsToFit(containerWidth);
    // params.api.autoSizeColumns(['title'])
  });

  const handleShowInformation = React.useCallback(() => {
    onShowInformation(selectedRows[0]);
  }, [selectedRows, onShowInformation]);

  const handleCreateTimeseries = React.useCallback(() => {
    toggleCreateTimeseriesOverlay(collection.spaceId, collection.collId);
  }, [collection, toggleCreateTimeseriesOverlay]);

  const handleCollectionUploadClick = React.useCallback(() => {
    openUpload();
  }, [openUpload]);

  const handleDeleteTimeseriesDialogConfirm = React.useCallback(() => {
    deleteTimeseries(
      collection.collId,
      map((ts) => ts.tsid, selectedRows)
    );
    handleDeleteTimeseriesDialogClose();
  }, [
    collection,
    selectedRows,
    deleteTimeseries,
    handleDeleteTimeseriesDialogClose,
  ]);

  return (
    <div
      className={className}
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: "[header] 30px [main-table] auto",
      }}
    >
      <Header>
        <Header.Title>
          Timeseries
          {collection && (
            // eslint-disable-next-line react/jsx-one-expression-per-line
            <span> - {collection.name}</span>
          )}
        </Header.Title>

        <Header.ActionButtons>
          <Tooltip content="Create a new timeseries">
            <AnchorButton
              minimal
              icon="plus"
              disabled={isNil(collection)}
              onClick={handleCreateTimeseries}
            />
          </Tooltip>
          <Tooltip content="Upload timeseries">
            <AnchorButton
              minimal
              icon="upload"
              disabled={isNil(collection)}
              onClick={handleCollectionUploadClick}
            />
          </Tooltip>
          <Tooltip content="Delete selected timeseries">
            <AnchorButton
              minimal
              icon="trash"
              disabled={selectedRows.length === 0}
              onClick={() => setDeleteTimeseriesVisibility(true)}
            />
          </Tooltip>
          <TimeseriesConfirmDelete
            selectedTimeseries={selectedRows}
            handleConfirm={handleDeleteTimeseriesDialogConfirm}
            handleClose={handleDeleteTimeseriesDialogClose}
            visible={deleteTimeseriesVisibility}
          />

          {onShowInformation && (
            <Popover
              content={
                <InformationContent>
                  {timeseriesDetails && (
                    <TimeseriesDetails information={timeseriesDetails} />
                  )}
                </InformationContent>
              }
              position={Position.BOTTOM}
            >
              <AnchorButton
                minimal
                icon="info-sign"
                disabled={selectedRows.length !== 1}
                onClick={handleShowInformation}
              />
            </Popover>
          )}

          {onRefetchTimeseriesList && (
            <Button
              minimal
              icon="refresh"
              disabled={isNil(collection)}
              onClick={onRefetchTimeseriesList}
            />
          )}
        </Header.ActionButtons>
      </Header>
      <ContentContainer ref={container} className="ag-theme-balham">
        <AgGridReact
          rowData={timeseries}
          columnDefs={ColumnDefinitions}
          frameworkComponents={FrameworkComponents}
          suppressDragLeaveHidesColumns
          context={{
            space,
            collection,
            onAddTimeseries,
          }}
          rowSelection="multiple"
          rowDragManaged
          onGridReady={handleGridReady}
          gridOptions={{
            onSelectionChanged: ({ api }) => {
              const changedSelectedRows = api.getSelectedRows();
              onSelectTimeseries(changedSelectedRows);
              setSelectedRows(changedSelectedRows);
            },
          }}
        />
      </ContentContainer>
    </div>
  );
};

TimeseriesTableBase.propTypes = {
  space: SpaceType,
  collection: CollectionType,
  timeseries: TimeseriesListType,
  timeseriesDetails: TimeseriesDetailsType,
  onAddTimeseries: types.func.isRequired,
  onSelectTimeseries: types.func.isRequired,
  toggleCreateTimeseriesOverlay: types.func.isRequired,
  deleteTimeseries: types.func.isRequired,
  onRefetchTimeseriesList: types.func.isRequired,
  onShowInformation: types.func.isRequired,
  openUpload: types.func.isRequired,
  className: types.string,
};

const TimeseriesTable = compose(Loadable)(TimeseriesTableBase);

// eslint-disable-next-line import/prefer-default-export
export { TimeseriesTable };
