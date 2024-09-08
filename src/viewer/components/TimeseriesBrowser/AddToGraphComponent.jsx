import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { TimeseriesListType } from '../../types/Timeseries';
import { addSelectedTimeseriesToGraphAction } from '../../actions/graphActions';

import { AddToGraphButton } from './TimeseriesBrowser.Components';


// TODO: create container component
const AddToGraphComponent = ({
  currentGraphId,
  selectedTimeseries,
  addSelectedTimeseriesToGraph,
}) => {
  const handleAddToGraph = React.useCallback(() => {
    addSelectedTimeseriesToGraph({ gid: currentGraphId, timeseriesList: selectedTimeseries });
  }, [addSelectedTimeseriesToGraph, selectedTimeseries, currentGraphId]);

  return (
    <AddToGraphButton
      disabled={selectedTimeseries.length === 0}
      onClick={handleAddToGraph}
    >
      Add to Graph
    </AddToGraphButton>
  );
};

AddToGraphComponent.propTypes = {
  selectedTimeseries: TimeseriesListType.isRequired,
  addSelectedTimeseriesToGraph: types.func.isRequired,
};

const mapStateToProps = ({ ui, graphs }) => ({
  selectedTimeseries: ui.timeseriesBrowser.selectedTimeseries,
  currentGraphId: graphs.currentGraphId,
});

const mapDispatchToProps = {
  addSelectedTimeseriesToGraph: addSelectedTimeseriesToGraphAction,
};

const ConnectedTimeseriesBrowser = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToGraphComponent);

// eslint-disable-next-line import/prefer-default-export
export { ConnectedTimeseriesBrowser as TimeseriesBrowser };
