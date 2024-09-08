import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Label } from '@blueprintjs/core';
import { seriesSelector } from '../../../../viewer/selectors/series';
import {
  importParametersFromGraphAction,
  runAnalyticsAction,
} from '../../actions';


class WsidDisplay extends React.PureComponent {
  render() {
    const { series, wsid } = this.props;
    if (isNil(series)) {
      return (
        <Label>
          {`Error: Can't find series, ${wsid}`}
        </Label>
      );
    }
    return (
      <Label>
        {series.name || 'Unnamed'}
        {/* (
        {wsid}
        ) */}
      </Label>
    );
  }
}
WsidDisplay.defaultProps = {};

WsidDisplay.propTypes = {
  wsid: types.string.isRequired,
  series: types.object,
};

const mapStateToProps = (state, ownProps) => ({
  series: seriesSelector(ownProps.wsid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    importParametersFromGraph: importParametersFromGraphAction,
    runAnalytics: runAnalyticsAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(WsidDisplay);
