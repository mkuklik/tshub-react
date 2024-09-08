import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  AnchorButton,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
  Tooltip,
} from '@blueprintjs/core';
import { applyUnaryFunctionAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
  currentGraphSelectedSeriesSelector,
} from '../../../viewer/selectors/graph';

class TrendMenu extends React.PureComponent {
  handleTrend = () => {
    const { gid, selected, applyUnaryFunction } = this.props;
    const wsid = selected[0];
    applyUnaryFunction({
      gid, wsid, funcName: 'trend', create: true,
    });
  };

  handleDetrend = () => {
    const { gid, selected, applyUnaryFunction } = this.props;
    const wsid = selected[0];
    applyUnaryFunction({ gid, wsid, funcName: 'detrend' });
  };

  render() {
    const { selected } = this.props;
    const disabled = (selected.length !== 1);
    const menu = (
      <Menu>
        <MenuItem text="Add Trend" onClick={this.handleTrend} />
        <MenuItem text="Detrend" onClick={this.handleDetrend} />
      </Menu>
    );
    return (
      <Popover content={menu} position={Position.BOTTOM} disabled={disabled}>
        <Tooltip
          content="Trend-related functions"
          position={Position.BOTTOM}
          hoverOpenDelay={1000}
        >
          <AnchorButton
            text="T"
            disabled={disabled}
          />
        </Tooltip>
      </Popover>
    );
  }
}

TrendMenu.defaultProps = {
  gid: undefined,
  selected: [],
};

TrendMenu.propTypes = {
  applyUnaryFunction: types.func.isRequired,
  gid: types.string,
  selected: types.arrayOf(types.string),
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  selected: currentGraphSelectedSeriesSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    applyUnaryFunction: applyUnaryFunctionAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TrendMenu);
