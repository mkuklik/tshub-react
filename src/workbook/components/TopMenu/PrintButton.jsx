import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil, is } from 'ramda';
import { AnchorButton, Tooltip, Position } from '@blueprintjs/core';
import { currentGraphChartRefSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';

class PrintButton extends React.PureComponent {
  handlePrint = () => {
    const { chartRef } = this.props;
    if (!isNil(chartRef) && is(Function, chartRef.print)) {
      chartRef.print();
    }
  }

  render() {
    const { gid } = this.props;
    return (
      <Tooltip
        content="Print graph"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="print"
          onClick={this.handlePrint}
          disabled={isNil(gid)}
        />
      </Tooltip>
    );
  }
}

PrintButton.defaultProps = {
  gid: undefined,
  chartRef: undefined,
};

PrintButton.propTypes = {
  gid: types.string,
  chartRef: types.object,
};

const mapStateToProps = (state, ownProps) => ({
  gid: currentGraphGidSelector(state),
  chartRef: currentGraphChartRefSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrintButton);
