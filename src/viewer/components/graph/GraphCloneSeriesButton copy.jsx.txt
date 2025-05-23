import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil } from 'ramda';
import { Tooltip, AnchorButton, Position } from '@blueprintjs/core';
import { cloneSeriesAction } from '../../actions/graphActions';
import { currentGraphSelectedSeriesSelector } from '../../selectors/graph';

class GraphCloneSeriesButton extends React.Component {
  clone = () => {
    const { gid, selected, cloneSeries } = this.props;
    if (selected.length === 1) {
      cloneSeries({ gid, wsid: selected[0] });
    }
  };

  render() {
    const { gid, selected } = this.props;
    const isDisabled = isNil(gid) || (selected.length !== 1);

    return (
      <Tooltip
        content="Clone series"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          disabled={isDisabled}
          icon="duplicate"
          onClick={this.clone}
        />
      </Tooltip>
    );
  }
}

GraphCloneSeriesButton.defaultProps = {
  gid: undefined,
  selected: [],
};

GraphCloneSeriesButton.propTypes = {
  gid: types.string,
  cloneSeries: types.func.isRequired,
  selected: types.arrayOf(types.string),
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  selected: currentGraphSelectedSeriesSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  cloneSeries: cloneSeriesAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphCloneSeriesButton);
