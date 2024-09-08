import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import AnalyticsWindowTabs from '../AnalyticsWindowTabs';
import {
  analyticsSelector,
  analyticsStatusSelector,
  analyticsUISelector,
} from '../../selectors';
import { AnalyticsType } from '../../types';
import HPParameters from './HPParameters';
import HPResults from './HPResults';
import {
  runAnalyticsAction,
  updateAnalyticsUIAction,
  updateAnalyticsParametersAction,
} from '../../actions';


class HP extends React.Component {
  handleRun = () => {
    const { ayid, runAnalytics } = this.props;
    runAnalytics({ ayid });
  };

  render() {
    const {
      ayid,
      updateAnalyticsUI,
      updateAnalyticsParameters,
      status,
      obj,
      ui,
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
        header={<h3>HP Filter</h3>}
        parameters={(
          <HPParameters
            ayid={ayid}
            handleRun={this.handleRun}
            updateAnalyticsParameters={updateAnalyticsParameters}
            parameters={obj.parameters}
          />
        )}
        results={<HPResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

HP.defaultProps = {
  status: null,
};

HP.propTypes = {
  ayid: types.string.isRequired,
  obj: AnalyticsType,
  ui: types.object,
  updateAnalyticsUI: types.func.isRequired,
  updateAnalyticsParameters: types.func.isRequired,
  runAnalytics: types.func.isRequired,
  status: types.string,
};

const mapStateToProps = (state, ownProps) => ({
  obj: analyticsSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
  status: analyticsStatusSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  runAnalytics: runAnalyticsAction,
  updateAnalyticsUI: updateAnalyticsUIAction,
  updateAnalyticsParameters: updateAnalyticsParametersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HP);
