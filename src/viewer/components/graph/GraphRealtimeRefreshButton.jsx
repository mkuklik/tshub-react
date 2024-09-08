import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Tooltip, AnchorButton, Position } from '@blueprintjs/core';
import { updateGraphRealtimeAction } from '../../actions/graphActions';
import { currentGraphSeriesDefSelector } from '../../selectors/graph';
import { SeriesDefinitionType } from '../../types/Graph';

class GraphRealtimeRefreshButton extends React.Component {
  refresh = () => {
    this.props.updateGraphRealtime({
      realtime: undefined,
    }); // : Date | null
  };

  render() {
    const { graphSeries } = this.props;
    return (
      <Tooltip
        content="Update graph with the most recent data"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          disabled={graphSeries.length === 0}
          icon="refresh"
          onClick={this.refresh}
        />
      </Tooltip>
    );
  }
}

GraphRealtimeRefreshButton.defaultProps = {};

GraphRealtimeRefreshButton.propTypes = {
  updateGraphRealtime: PropTypes.func.isRequired,
  graphSeries: PropTypes.arrayOf(SeriesDefinitionType).isRequired,
};

const mapStateToProps = (state) => ({
  graphSeries: currentGraphSeriesDefSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphRealtime: updateGraphRealtimeAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphRealtimeRefreshButton);
