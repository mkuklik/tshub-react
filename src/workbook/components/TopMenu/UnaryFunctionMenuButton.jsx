import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import {
  AnchorButton,
  Tooltip,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
  Overlay,
  NumericInput,
  Classes,
  ControlGroup,
} from '@blueprintjs/core';
import { applyUnaryFunctionAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
  currentGraphSelectedSeriesSelector,
} from '../../../viewer/selectors/graph';

const StyledOverlayDiv = styled.div`
// position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

class UnaryFunctionMenuButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customLagsOverlayOpen: false,
      customLag: 1,
    };
  }

  handleUnaryFunc = (funcName, args, params) => () => {
    const { gid, selected, applyUnaryFunction } = this.props;
    const wsid = selected[0];
    applyUnaryFunction({
      gid, wsid, funcName, args, params,
    });
  };

  handleCustomLags = () => this.setState((prev) => ({ customLagsOverlayOpen: !prev.customLagsOverlayOpen }));

  handleCustomLagChange = (value) => this.setState({ customLag: value });

  handleCustomLagsApply = () => {
    const { customLag } = this.state;
    this.handleCustomLags();
    this.handleUnaryFunc('lag', [String(customLag)])();
  }

  render() {
    const { selected } = this.props;
    const { customLag, customLagsOverlayOpen } = this.state;
    const disabled = (selected.length !== 1);
    const menu = (
      <Menu>
        <MenuItem
          text="Annualized % change"
          onClick={this.handleUnaryFunc('apc')}
        />
        <MenuItem text="% Change" onClick={this.handleUnaryFunc('pc')} />
        <MenuItem
          text="Year/Year % Change"
          onClick={this.handleUnaryFunc('yoypc')}
        />
        <MenuDivider />
        <MenuItem text="Period Diff" onClick={this.handleUnaryFunc('diff')} />
        <MenuItem
          text="Year/Year Diff"
          onClick={this.handleUnaryFunc('yoydiff')}
        />
        <MenuDivider />
        <MenuItem
          text="Annualized Log Diff"
          onClick={this.handleUnaryFunc('alogdiff')}
        />
        <MenuItem
          text="Period Log Diff"
          onClick={this.handleUnaryFunc('logdiff')}
        />
        <MenuItem
          text="Year/Year Log Diff"
          onClick={this.handleUnaryFunc('yoylogdiff')}
        />
        <MenuDivider />
        <MenuItem
          text="Apply lag"
        >
          <MenuItem
            text="1 period lag"
            onClick={this.handleUnaryFunc('lag')}
          />
          <MenuItem
            text="2 period lag"
            onClick={this.handleUnaryFunc('lag', ['2'])}
          />
          <MenuItem
            text="3 period lag"
            onClick={this.handleUnaryFunc('lag', ['3'])}
          />
          <MenuItem
            text="4 period lag"
            onClick={this.handleUnaryFunc('lag', ['4'])}
          />
          <MenuItem
            text="Custom lags"
            onClick={this.handleCustomLags}
          />
        </MenuItem>
        <MenuDivider />
        <MenuItem
          text="Index"
          onClick={this.handleUnaryFunc('index')}
        />
      </Menu>
    );
    const classes = classNames(
      Classes.CARD,
      Classes.ELEVATION_4,
    );
    return (
      <>
        <Overlay
          isOpen={customLagsOverlayOpen}
          onClose={this.handleCustomLags}
        >
          <StyledOverlayDiv className={classes}>
            <h3>Apply lag</h3>
            <ControlGroup>
              <NumericInput
                value={customLag}
                onValueChange={this.handleCustomLagChange}
                on
              />
              <Button style={{ marginLeft: '5px' }} text="Apply" onClick={this.handleCustomLagsApply} />
            </ControlGroup>
            <p>Positive values is shifting values forward; negative is shifting backwards.</p>
          </StyledOverlayDiv>
        </Overlay>
        <Popover content={menu} position={Position.BOTTOM} disabled={disabled}>
          <Tooltip
            content="Apply a function to the selected series"
            position={Position.BOTTOM}
            hoverOpenDelay={1000}
          >
            <AnchorButton
              text="f(x)"
              disabled={disabled}
            />
          </Tooltip>
        </Popover>
      </>
    );
  }
}

UnaryFunctionMenuButton.defaultProps = {
  gid: undefined,
  selected: [],
};

UnaryFunctionMenuButton.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UnaryFunctionMenuButton);
