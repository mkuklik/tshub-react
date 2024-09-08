import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import { applyBinaryFunctionAction } from '../../actions/graphActions';
import { currentGraphSeriesDefSelector } from '../../selectors/graph';
import { SeriesDefinitionType } from '../../types/Graph';

class GraphApplyBinaryFunctionsButton extends React.Component {
  applyFunction = () => {
    const { gid, graphSeries, applyBinaryFunction } = this.props;
    if (graphSeries.length > 1) {
      applyBinaryFunction({
        gid,
        wsid1: graphSeries[0].wsid,
        wsid2: graphSeries[1].wsid,
        funcName: 'div',
      });
    }
  };

  render() {
    const { graphSeries } = this.props;
    return (
      <Button
        disabled={graphSeries.length < 2}
        minimal
        icon="series-configuration"
        onClick={this.applyFunction}
      >
        div(_1, _2)
      </Button>
    );
  }
}

GraphApplyBinaryFunctionsButton.defaultProps = {};

GraphApplyBinaryFunctionsButton.propTypes = {
  applyBinaryFunction: PropTypes.func.isRequired,
  graphSeries: PropTypes.arrayOf(SeriesDefinitionType).isRequired,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graphSeries: currentGraphSeriesDefSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  applyBinaryFunction: applyBinaryFunctionAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphApplyBinaryFunctionsButton);
