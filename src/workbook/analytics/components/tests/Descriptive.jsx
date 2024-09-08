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
import DescriptiveParameters from './DescriptiveParameters';
import DescriptiveResults from './DescriptiveResults';
import { runAnalyticsAction, updateAnalyticsUIAction, updateAnalyticsParametersAction } from '../../actions';


class Descriptive extends React.Component {
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
        header={<h3>Descriptive Statistics</h3>}
        parameters={(
          <DescriptiveParameters
            ayid={ayid}
            ui={ui}
            handleRun={this.handleRun}
            parameters={parameters}
            updateAnalyticsParameters={updateAnalyticsParameters}
            updateAnalyticsUI={updateAnalyticsUI}
          />
        )}
        results={<DescriptiveResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

Descriptive.defaultProps = {
  obj: undefined,
  ui: undefined,
  parameters: undefined,
};

Descriptive.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Descriptive);
