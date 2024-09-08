import * as React from 'react';
import { Tooltip, AnchorButton, Position } from '@blueprintjs/core';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import { removeSeriesAction } from '../../../viewer/actions/graphActions';
import { currentGraphSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';

class RemoveSeriesButton extends React.PureComponent {
  handleRemove = () => {
    const { gid, wsid, removeSeries } = this.props;
    removeSeries({ gid, wsid });
  };

  render() {
    const { disabled } = this.props;
    return (
      <Tooltip
        content="Remove series from a graph"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="small-cross"
          disabled={disabled}
          onClick={this.handleRemove}
        />
      </Tooltip>
    );
  }
}

RemoveSeriesButton.defaultProps = {
  gid: undefined,
  wsid: undefined,
};

RemoveSeriesButton.propTypes = {
  gid: types.string,
  wsid: types.string,
  disabled: types.bool.isRequired,
  removeSeries: types.func.isRequired,
};

const mapStateToProps = (state) => {
  const graph = currentGraphSelector(state);
  const selected = isNil(graph) ? [] : graph.ui.selected;
  const wsid = (selected.length === 1) ? selected[0] : undefined;
  const disabled = (selected.length !== 1);
  return {
    gid: currentGraphGidSelector(state),
    disabled,
    wsid,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeSeries: removeSeriesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RemoveSeriesButton);
