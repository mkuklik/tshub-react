import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  isNil, find, propEq, path,
} from 'ramda';
import {
  AnchorButton,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
  Tooltip,
} from '@blueprintjs/core';
import { applyBinaryFunctionAction, applyBinaryOperatorAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
  currentGraphSelectedSeriesSelector,
  currentGraphSeriesDefSelector,
} from '../../../viewer/selectors/graph';
import { SeriesDefinitionType } from '../../../viewer/types/Graph';
import ColorIndicator from '../SeriesList/ColorIndicator';
import { seriesDefListSelector } from '../../../viewer/selectors/series';

class BinaryFunctionMenuButton extends React.PureComponent {
  handleBinaryFunc = (funcName, wsid1, wsid2, reversed) => () => {
    const {
      gid, applyBinaryFunction,
    } = this.props;
    const isReversed = reversed || false;
    if (isReversed) {
      applyBinaryFunction({
        gid,
        wsid1: wsid2,
        wsid2: wsid1,
        funcName,
      });
    } else {
      applyBinaryFunction({
        gid,
        wsid1,
        wsid2,
        funcName,
      });
    }
  };

  handleBinaryOperator = (operator, wsid1, wsid2, reversed) => () => {
    const {
      gid, applyBinaryOperator,
    } = this.props;
    const isReversed = reversed || false;
    if (isReversed) {
      applyBinaryOperator({
        gid,
        wsid1: wsid2,
        wsid2: wsid1,
        operator,
      });
    } else {
      applyBinaryOperator({
        gid,
        wsid1,
        wsid2,
        operator,
      });
    }
  };

  subMenuRender = (funcName, operator, reversed) => {
    const { selected, graphSeries, allSeries } = this.props;
    const wsid1 = (selected.length === 1) ? selected[0] : undefined;
    return graphSeries.filter((x) => x.wsid !== wsid1).map((x) => {
      const wsid2 = x.wsid;
      const color = path(['color'], find((y) => y.wsid === wsid2, graphSeries));
      const name = isNil(allSeries) ? null : allSeries[wsid2].name || null;
      return (
        <MenuItem
          key={wsid2}
          text={(
            <div>
              <ColorIndicator color={color} />
              {' '}
              <span>{name}</span>
            </div>
          )}
          onClick={(!isNil(operator)) ? this.handleBinaryOperator(operator, wsid1, x.wsid, reversed) : this.handleBinaryFunc(funcName, wsid1, x.wsid, reversed)}
        />
      );
    });
  }

  render() {
    const { selected, graphSeries } = this.props;
    const disabled = ((graphSeries.length < 2) || (selected.length !== 1));
    const menu = (
      <Menu>
        <MenuItem key="x/y" text="x/y">
          {this.subMenuRender('div', undefined, false)}
        </MenuItem>
        <MenuItem key="y/x" text="y/x">
          {this.subMenuRender('div', undefined, true)}
        </MenuItem>
        <MenuItem key="x*y" text="x*y">
          {this.subMenuRender(undefined, '*', false)}
        </MenuItem>
        <MenuItem key="x-y" text="x - y">
          {this.subMenuRender(undefined, '-', false)}
        </MenuItem>
        <MenuItem key="y-x" text="y - x">
          {this.subMenuRender(undefined, '-', true)}
        </MenuItem>
        <MenuItem key="x+y" text="x + y">
          {this.subMenuRender(undefined, '+', false)}
        </MenuItem>

      </Menu>
    );
    return (
      <Popover content={menu} position={Position.BOTTOM} disabled={disabled}>
        <Tooltip
          content="Apply a function to the selected and one other series"
          position={Position.BOTTOM}
          hoverOpenDelay={1000}
        >
          <AnchorButton
            text="f(x,y)"
            disabled={disabled}
          />
        </Tooltip>
      </Popover>
    );
  }
}

BinaryFunctionMenuButton.defaultProps = {
  gid: undefined,
  selected: [],
  graphSeries: [],
};

BinaryFunctionMenuButton.propTypes = {
  gid: types.string,
  selected: types.arrayOf(types.string),
  graphSeries: types.arrayOf(SeriesDefinitionType),
  applyBinaryFunction: types.func.isRequired,
  applyBinaryOperator: types.func.isRequired,
  allSeries: types.object.isRequired,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  selected: currentGraphSelectedSeriesSelector(state),
  graphSeries: currentGraphSeriesDefSelector(state),
  allSeries: seriesDefListSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  applyBinaryFunction: applyBinaryFunctionAction,
  applyBinaryOperator: applyBinaryOperatorAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BinaryFunctionMenuButton);
