import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import { analyticsKindSelector } from '../selectors';
import { AnalyticsKind } from '../definitions/AnalyticsKind';
import LMWindow from './lm/LMWindow';
import HP from './filters/HP';
import X12 from './filters/X12';
import ADF from './tests/ADF';
import KPSS from './tests/KPSS';
import PP from './tests/PP';
import Autocorrelation from './tests/Autocorrelation';
import CF from './filters/CF';
import VARWindow from './var/VARWindow';
import Coint from './tests/Coint';
import BK from './filters/BK';
import Descriptive from './tests/Descriptive';


class AnalyticsWindow extends React.PureComponent {
  render() {
    const { ayid, kind } = this.props;
    if (isNil(ayid)) {
      return (
        <div>
          {' '}
          Can&lsquo;t find the Analytics object,
          {ayid}
          .
        </div>
      );
    }

    switch (kind) {
      case AnalyticsKind.LM:
        return (<LMWindow ayid={ayid} />);
      case AnalyticsKind.VAR:
        return (<VARWindow ayid={ayid} />);
  
      // tests
      case AnalyticsKind.Descriptive:
        return (<Descriptive ayid={ayid} />);
      case AnalyticsKind.Autocorrelation:
        return (<Autocorrelation ayid={ayid} />);
      case AnalyticsKind.ADF:
        return (<ADF ayid={ayid} />);
      case AnalyticsKind.KPSS:
        return (<KPSS ayid={ayid} />);
      case AnalyticsKind.PP:
        return (<PP ayid={ayid} />);
      case AnalyticsKind.Coint:
        return (<Coint ayid={ayid} />);
    
      // filters
      case AnalyticsKind.HPFilter:
        return (<HP ayid={ayid} />);
      case AnalyticsKind.BKFilter:
        return (<BK ayid={ayid} />);
  
      case AnalyticsKind.CFFilter:
        return (<CF ayid={ayid} />);
      case AnalyticsKind.X12:
        return (<X12 ayid={ayid} />);
      default:
        return (
          <div>
            {`Unknown type of Analytics object, ${ayid}.`}
          </div>
        );
    }
  }
}

AnalyticsWindow.defaultProps = {};

AnalyticsWindow.propTypes = {
  ayid: types.string.isRequired,
  kind: types.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  kind: analyticsKindSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsWindow);
