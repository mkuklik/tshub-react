/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import { compose, isNil, map } from 'ramda';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import {
  Button, Popover, Position, Tooltip, AnchorButton,
} from '@blueprintjs/core';
import styled from 'styled-components';

import {
  TimeseriesListType,
  TimeseriesDetailsType,
} from '../../../types/Timeseries';

import { Header } from '../Common/Header';
import { Loadable } from '../Common/Loadable';
import { ContentContainer as ContentContainerBase } from '../FredBrowser.Components';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { TimeseriesDetails } from './TimeseriesDetails/TimeseriesDetails';
import { ColumnDefinitions, FrameworkComponents } from './TimeseriesTable.Settings';
import { InformationContent } from './TimeseriesTable.Components';

const ContentContainer = styled(ContentContainerBase)`
  height: 100%;  //74%;
  background-color: transparent;

  .ag-root {
    border: 0;
  }
`;

const TimeseriesTableBase = ({
  timeseries,
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

  const handleGridReady = React.useCallback((params) => {
    // const containerWidth = container.current.offsetWidth;
    // params.api.sizeColumnsToFit(containerWidth);
    // params.api.autoSizeColumns(['title'])
  });

  const handleShowInformation = React.useCallback(() => {
    onShowInformation(selectedRows[0]);
  }, [selectedRows, onShowInformation]);

  return (
    <div
      className={className}
      style={{ height: '100%', display: 'grid', gridTemplateRows: '[header] 30px [main-table] auto' }}
    >
      <Header>
        <Header.Title>
          Timeseries

          {/* {collection && (
            // eslint-disable-next-line react/jsx-one-expression-per-line
            <span> - {collection.name}</span>
          )} */}
        </Header.Title>
        <Header.ActionButtons>
          {onShowInformation && (
            <Popover position={Position.BOTTOM}>
              <AnchorButton
                minimal
                icon="info-sign"
                disabled={selectedRows.length !== 1}
                onClick={handleShowInformation}
              />

              {/* <InformationContent>
                {timeseriesDetails && (
                  <TimeseriesDetails information={timeseriesDetails} />
                )}
              </InformationContent> */}
            </Popover>
          )}

          {onRefetchTimeseriesList && (
            <Button
              minimal
              icon="refresh"
              // disabled={isNil(collection)}
              onClick={onRefetchTimeseriesList}
            />
          )}
        </Header.ActionButtons>
      </Header>
      <ContentContainer
        ref={container}
        className="ag-theme-balham"
      >
        <AgGridReact
          rowData={timeseries}
          columnDefs={ColumnDefinitions}
          modules={AllCommunityModules}
          frameworkComponents={FrameworkComponents}
          suppressDragLeaveHidesColumns
          context={{
            // space,
            // collection,
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
  isLoading: types.bool,
  timeseries: TimeseriesListType,
  onAddTimeseries: types.func.isRequired,
  onSelectTimeseries: types.func.isRequired,
  toggleCreateTimeseriesOverlay: types.func.isRequired,
  deleteTimeseries: types.func.isRequired,
  onRefetchTimeseriesList: types.func.isRequired,
  onShowInformation: types.func.isRequired,
  openUpload: types.func.isRequired,
  className: types.string,
};

TimeseriesTableBase.defaultProps = {
  className: '',
};

const TimeseriesTable = compose(
  Loadable,
)(TimeseriesTableBase);

// eslint-disable-next-line import/prefer-default-export
export { TimeseriesTable };
