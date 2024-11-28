/* eslint-disable react/require-default-props */
import * as React from "react";
import types from "prop-types";
import { connect } from "react-redux";
import { path, compose, find, isNil } from "ramda";

import {
  fetchTimeseriesListAction,
  fetchTimeseriesDetailsAction,
  deleteTimeseriesAction,
} from "../../../actions/timeseriesActions";
import {
  selectTimeseriesAction,
  toggleCreateTimeseriesOverlayAction,
  timeseriesBrowserAddSeriesAction,
} from "../../../actions/uiActions";
import { fredSeriesByCategorySelector } from "../../../selectors/fred";
import {
  TimeseriesListMapType,
  TimeseriesDetailsType,
} from "../../../types/Timeseries";

import { TimeseriesTable } from "./TimeseriesTable";
// import TimeseriesTable2 from "./TimeseriesTable2";

const TimeseriesTableContainerBase = (
  {
    timeseries,
    // timeseriesDetails,
    isTimeseriesListLoading,
    addTimeseries,
    selectTimeseries,
    fetchTimeseriesList,
    fetchTimeseriesDetails,
    toggleCreateTimeseriesOverlay,
    deleteTimeseries,
    openUpload,
    ...props
  } = {
    isTimeseriesListLoading: false,
  }
) => {
  const handleRefetchTimeseriesList = React.useCallback(() => {
    // fetchTimeseriesList(selectedCollection.collId);
  }, [fetchTimeseriesList]);

  const handleSelectTimeseries = React.useCallback(
    (timeseriesList) => {
      selectTimeseries(timeseriesList);
    },
    [selectTimeseries]
  );

  const handleShowInformation = React.useCallback(
    ({ tsid }) => {
      fetchTimeseriesDetails({
        tsid,
      });
    },
    [fetchTimeseriesDetails]
  );

  return (
    <TimeseriesTable
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isLoading={isTimeseriesListLoading}
      timeseries={timeseries}
      // timeseriesDetails={timeseriesDetails}
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

const mapStateToProps = (state) => {
  return {
    timeseries: fredSeriesByCategorySelector(
      state.ui.fredBrowser.selectedCategoryId
    )(state),
    // timeseriesDetails: timeseries.timeseriesDetails,
    // selectedCollection: collections.selectedCollection,
    // selectedSpace: (
    //   isNil(collections.selectedCollection))
    //   ? null : find((x) => x.id === collections.selectedCollection.spaceId, spaces.spaces),
    // isTimeseriesListLoading: ui.timeseriesBrowser.isTimeseriesListLoading,
  };
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
  connect(mapStateToProps, mapDispatchToProps)
)(TimeseriesTableContainerBase);

// eslint-disable-next-line import/prefer-default-export
export { TimeseriesTableContainer as TimeseriesTable };
