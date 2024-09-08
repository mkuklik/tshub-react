import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { isNil } from 'ramda';
import { TimeseriesListType } from '../../types/Timeseries';
import { addSelectedTimeseriesToGraphAction } from '../../actions/graphActions';

import { StyledAddToGraphButton } from './TimeseriesBrowser.Components';


// TODO: create container component
const AddToGraphButtonBase = ({
  currentGraphID,
  selectedTimeseries,
  addSelectedTimeseriesToGraph,
}) => {
  const handleAddToGraph = React.useCallback(() => {
    addSelectedTimeseriesToGraph({ gid: currentGraphID, timeseriesList: selectedTimeseries });
  }, [addSelectedTimeseriesToGraph, selectedTimeseries, currentGraphID]);

  const disabled = (selectedTimeseries.length === 0) || isNil(currentGraphID);
  return (
    <StyledAddToGraphButton
      disabled={disabled}
      onClick={handleAddToGraph}
    >
      Add to Graph
    </StyledAddToGraphButton>
  );
};

AddToGraphButtonBase.propTypes = {
  selectedTimeseries: TimeseriesListType.isRequired,
  addSelectedTimeseriesToGraph: types.func.isRequired,
};

const mapStateToProps = ({ ui, graphs }) => ({
  selectedTimeseries: ui.timeseriesBrowser.selectedTimeseries,
  currentGraphID: graphs.currentGraphId,
});

const mapDispatchToProps = {
  addSelectedTimeseriesToGraph: addSelectedTimeseriesToGraphAction,
};

const ConnectedAddToGraphButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToGraphButtonBase);

// eslint-disable-next-line import/prefer-default-export
export { ConnectedAddToGraphButton as AddToGraphButton };
