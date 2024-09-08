import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import AnalyticsWindowTabs from '../AnalyticsWindowTabs';
import {
  analyticsSelector, analyticsStatusSelector, analyticsUISelector, analyticsParametersSelector,
} from '../../selectors';
import { AnalyticsType, LMParameterType } from '../../types';
import { runAnalyticsAction, updateAnalyticsUIAction, updateAnalyticsParametersAction } from '../../actions';
import KPSSParameters from './KPSSParameters';
import KPSSResults from './KPSSResults';


class KPSS extends React.Component {
  handleRun = () => {
    const { ayid } = this.props;
    this.props.runAnalytics({ ayid });
  };

  render() {
    const {
      ayid, updateAnalyticsUI, updateAnalyticsParameters, status, obj, parameters, ui,
    } = this.props;

    if (isNil(obj)) {
      return (
        <div>
          {`Can't find the Analytics object, ${ayid}.`}
        </div>
      );
    }

    return (
      <AnalyticsWindowTabs
        ayid={ayid}
        updateAnalyticsUI={updateAnalyticsUI}
        status={status}
        ui={ui}
        header={<h3>KPSS Test (Kwiatkowski-Phillips-Schmidt-Shin test for stationarity)</h3>}
        parameters={(
          <KPSSParameters
            ayid={ayid}
            handleRun={this.handleRun}
            parameters={parameters}
            updateAnalyticsParameters={updateAnalyticsParameters}
          />
        )}
        results={<KPSSResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

KPSS.defaultProps = {
  obj: undefined,
  ui: undefined,
  parameters: undefined,
  status: undefined,
};

KPSS.propTypes = {
  ayid: types.string.isRequired,
  obj: AnalyticsType,
  ui: types.object,
  parameters: LMParameterType, // TODO
  status: types.string,
  updateAnalyticsParameters: types.func.isRequired,
  updateAnalyticsUI: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  obj: analyticsSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
  status: analyticsStatusSelector(ownProps.ayid)(state),
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  runAnalytics: runAnalyticsAction,
  updateAnalyticsUI: updateAnalyticsUIAction,
  updateAnalyticsParameters: updateAnalyticsParametersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(KPSS);
