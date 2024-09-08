import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import { applyUnaryFunctionAction } from '../../actions/graphActions';
import { currentGraphSeriesDefSelector } from '../../selectors/graph';
import { SeriesDefinitionType } from '../../types/Graph';

class GraphApplyFunctionsButton extends React.Component {
  applyFunction = () => {
    const { gid, graphSeries, applyUnaryFunction } = this.props;
    if (graphSeries.length > 0) {
      applyUnaryFunction({ gid, wsid: graphSeries[0].wsid, funcName: 'ln' });
    }
  };

  render() {
    const { graphSeries } = this.props;
    return (
      <Button
        disabled={graphSeries.length === 0}
        minimal
        icon="series-configuration"
        onClick={this.applyFunction}
      >
        ln (first)
      </Button>
    );
  }
}

GraphApplyFunctionsButton.defaultProps = {};

GraphApplyFunctionsButton.propTypes = {
  applyUnaryFunction: PropTypes.func.isRequired,
  graphSeries: PropTypes.arrayOf(SeriesDefinitionType).isRequired,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graphSeries: currentGraphSeriesDefSelector(state),
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  applyUnaryFunction: applyUnaryFunctionAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphApplyFunctionsButton);
