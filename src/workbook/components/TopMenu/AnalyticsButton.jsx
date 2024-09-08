import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import classNames from 'classnames';
import {
  AnchorButton,
  Tooltip,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
  Classes,
} from '@blueprintjs/core';
import {
  currentGraphSelectedSeriesSelector,
} from '../../../viewer/selectors/graph';
import { AnalyticsKind } from '../../analytics/definitions/AnalyticsKind';
import {
  createAnalyticsFromSeriesAction,
  openAnalyticsBorderTabAction,
} from '../../action/workbookActions';


class AnalyticsButton extends React.PureComponent {
  handleAnalytics = (kind) => () => {
    const { selected, createAnalyticsFromSeries, openAnalyticsBorderTab } = this.props;
    const wsid = selected[0];
    createAnalyticsFromSeries({ kind, wsid });
    openAnalyticsBorderTab();
  };

  render() {
    const { selected } = this.props;
    const disabled = (selected.length !== 1);
    const menu = (
      <Menu>
        <MenuDivider />
        <MenuItem
          text="Linear Model"
          onClick={this.handleAnalytics(AnalyticsKind.LM)}
        />
        <MenuDivider />
        <MenuItem
          text="Autocorrelations"
          onClick={this.handleAnalytics(AnalyticsKind.Autocorrelation)}
        />
        <MenuItem
          text="ADF Test"
          onClick={this.handleAnalytics(AnalyticsKind.ADF)}
        />
        <MenuItem
          text="KPSS Test"
          onClick={this.handleAnalytics(AnalyticsKind.KPSS)}
        />
        <MenuItem
          text="PP Test"
          onClick={this.handleAnalytics(AnalyticsKind.PP)}
        />
        <MenuDivider />
        <MenuItem
          text="HP Filter"
          onClick={this.handleAnalytics(AnalyticsKind.HPFilter)}
        />
        <MenuItem
          text="CF Filter"
          onClick={this.handleAnalytics(AnalyticsKind.CFFilter)}
        />
      </Menu>
    );
    const classes = classNames(
      Classes.CARD,
      Classes.ELEVATION_4,
    );
    return (
      <Popover content={menu} position={Position.BOTTOM} disabled={disabled}>
        <Tooltip
          content="Create analytics for the selected series"
          position={Position.BOTTOM}
          hoverOpenDelay={1000}
        >
          <AnchorButton
            text="A"
            disabled={disabled}
          />
        </Tooltip>
      </Popover>
    );
  }
}

AnalyticsButton.defaultProps = {
  selected: [],
};

AnalyticsButton.propTypes = {
  createAnalyticsFromSeries: types.func.isRequired,
  openAnalyticsBorderTab: types.func.isRequired,
  selected: types.arrayOf(types.string),
};

const mapStateToProps = (state) => ({
  selected: currentGraphSelectedSeriesSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createAnalyticsFromSeries: createAnalyticsFromSeriesAction,
  openAnalyticsBorderTab: openAnalyticsBorderTabAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsButton);
