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
import AutocorrelationParameters from './AutocorrelationParameters';
import AutocorrelationResults from './AutocorrelationResults';
import { runAnalyticsAction, updateAnalyticsUIAction, updateAnalyticsParametersAction } from '../../actions';


class Autocorrelation extends React.Component {
  handleRun = () => {
    const { ayid, runAnalytics } = this.props;
    runAnalytics({ ayid });
  };

  render() {
    const {
      ayid, updateAnalyticsUI, updateAnalyticsParameters, status, obj, ui, parameters,
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
        header={<h3>Autocorrelations</h3>}
        parameters={(
          <AutocorrelationParameters
            ayid={ayid}
            handleRun={this.handleRun}
            parameters={parameters}
            updateAnalyticsParameters={updateAnalyticsParameters}
          />
        )}
        results={<AutocorrelationResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

Autocorrelation.defaultProps = {
  obj: undefined,
  ui: undefined,
  parameters: undefined,
};

Autocorrelation.propTypes = {
  ayid: types.string.isRequired,
  obj: AnalyticsType,
  ui: types.object,
  parameters: LMParameterType, // TODO
  status: types.string,
  updateAnalyticsParameters: types.func.isRequired,
  updateAnalyticsUI: types.func.isRequired,
  runAnalytics: types.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Autocorrelation);
