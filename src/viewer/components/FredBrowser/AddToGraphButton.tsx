import * as React from 'react';
import { connect } from 'react-redux';

import { isNil } from 'ramda';
import { ITimeseriesList } from '../../types/TTimeseries';
import { addSelectedTimeseriesToGraphAction } from '../../actions/graphActions';

import { StyledAddToGraphButton } from './FredBrowser.Components';

interface AddToGraphButtonBaseProps {
  currentGraphID: string | null;
  selectedTimeseries: ITimeseriesList;
  addSelectedTimeseriesToGraph: (payload: { gid: string; timeseriesList: ITimeseriesList }) => void;
}

// TODO: create container component
const AddToGraphButtonBase: React.FC<AddToGraphButtonBaseProps> = ({
  currentGraphID,
  selectedTimeseries,
  addSelectedTimeseriesToGraph,
}) => {
  const handleAddToGraph = React.useCallback(() => {
    addSelectedTimeseriesToGraph({ gid: currentGraphID!, timeseriesList: selectedTimeseries });
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

// AddToGraphButtonBase.propTypes = {
//   selectedTimeseries: TimeseriesListType.isRequired,
//   addSelectedTimeseriesToGraph: types.func.isRequired,
//   currentGraphID: types.string,
// };

interface StateProps {
  selectedTimeseries: ITimeseriesList;
  currentGraphID: string | null;
}

interface DispatchProps {
  addSelectedTimeseriesToGraph: typeof addSelectedTimeseriesToGraphAction;
}

const mapStateToProps = ({ ui, graphs }: any): StateProps => ({
  selectedTimeseries: ui.timeseriesBrowser.selectedTimeseries,
  currentGraphID: graphs.currentGraphId,
});

const mapDispatchToProps: DispatchProps = {
  addSelectedTimeseriesToGraph: addSelectedTimeseriesToGraphAction,
};

const ConnectedAddToGraphButton = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(AddToGraphButtonBase);

export { ConnectedAddToGraphButton as AddToGraphButton };
