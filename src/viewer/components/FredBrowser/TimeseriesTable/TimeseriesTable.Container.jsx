/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import {
  path, compose, find, isNil,
} from 'ramda';

import {
  fetchTimeseriesListAction,
  fetchTimeseriesDetailsAction,
  deleteTimeseriesAction,
} from '../../../actions/timeseriesActions';
import {
  selectTimeseriesAction,
  toggleCreateTimeseriesOverlayAction,
  timeseriesBrowserAddSeriesAction,
} from '../../../actions/uiActions';

import { CollectionType } from '../../../types/Collections';
import { SpaceType } from '../../../types/Spaces';
import { TimeseriesListMapType, TimeseriesDetailsType } from '../../../types/Timeseries';

import { TimeseriesTable } from './TimeseriesTable';

const TimeseriesTableContainerBase = ({
  timeseries,
  timeseriesDetails,
  selectedSpace,
  selectedCollection,
  isTimeseriesListLoading,
  addTimeseries,
  selectTimeseries,
  fetchTimeseriesList,
  fetchTimeseriesDetails,
  toggleCreateTimeseriesOverlay,
  deleteTimeseries,
  openUpload,
  ...props
}) => {
  const selectedCollectionID = path(['collId'], selectedCollection);
  const selectedCollectionTimeseries = timeseries[selectedCollectionID] || [];

  const handleRefetchTimeseriesList = React.useCallback(() => {
    fetchTimeseriesList(selectedCollection.collId);
  }, [selectedCollection, fetchTimeseriesList]);

  const handleSelectTimeseries = React.useCallback((timeseriesList) => {
    selectTimeseries(timeseriesList);
  }, [selectTimeseries]);

  const handleShowInformation = React.useCallback(({ tsid }) => {
    fetchTimeseriesDetails({
      collId: selectedCollectionID,
      tsid,
    });
  }, [selectedCollectionID, fetchTimeseriesDetails]);

  return (
    <TimeseriesTable
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isLoading={isTimeseriesListLoading}
      space={selectedSpace}
      collection={selectedCollection}
      timeseries={selectedCollectionTimeseries}
      timeseriesDetails={timeseriesDetails}
      onAddTimeseries={addTimeseries}
      onSelectTimeseries={handleSelectTimeseries}
      onRefetchTimeseriesList={handleRefetchTimeseriesList}
      onShowInformation={handleShowInformation}
      openUpload={openUpload}
      toggleCreateTimeseriesOverlay={toggleCreateTimeseriesOverlay}
      deleteTimeseries={deleteTimeseries}
    />
  );
};

TimeseriesTableContainerBase.propTypes = {
  timeseries: TimeseriesListMapType,
  timeseriesDetails: TimeseriesDetailsType,
  selectedCollection: CollectionType,
  selectedSpace: SpaceType,
  isTimeseriesListLoading: types.bool,
  currentGraphID: types.string,
  selectTimeseries: types.func.isRequired,
  fetchTimeseriesList: types.func.isRequired,
  fetchTimeseriesDetails: types.func.isRequired,
  toggleCreateTimeseriesOverlay: types.func.isRequired,
  deleteTimeseries: types.func.isRequired,
  openUpload: types.func.isRequired,
  addTimeseries: types.func.isRequired,
};

TimeseriesTableContainerBase.defaultProps = {
  isTimeseriesListLoading: false,
};

const mapStateToProps = ({ ui, timeseries, collections, spaces }) => {
  return ({
    timeseries: timeseries.timeseriesListByColl,
    timeseriesDetails: timeseries.timeseriesDetails,
    selectedCollection: collections.selectedCollection,
    selectedSpace: (
      isNil(collections.selectedCollection))
      ? null : find((x) => x.id === collections.selectedCollection.spaceId, spaces.spaces),
    isTimeseriesListLoading: ui.timeseriesBrowser.isTimeseriesListLoading,
  });
};

const mapDispatchToProps = {
  selectTimeseries: selectTimeseriesAction,
  fetchTimeseriesList: fetchTimeseriesListAction,
  fetchTimeseriesDetails: fetchTimeseriesDetailsAction,
  toggleCreateTimeseriesOverlay: toggleCreateTimeseriesOverlayAction,
  deleteTimeseries: deleteTimeseriesAction,
  addTimeseries: timeseriesBrowserAddSeriesAction,
};

const TimeseriesTableContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TimeseriesTableContainerBase);

// eslint-disable-next-line import/prefer-default-export
export { TimeseriesTableContainer as TimeseriesTable };
