import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import AnalyticsWindowTabs from '../AnalyticsWindowTabs';
import { analyticsSelector, analyticsStatusSelector, analyticsUISelector } from '../../selectors';
import { AnalyticsType } from '../../types';
import CFParameters from './CFParameters';
import CFResults from './CFResults';
import { runAnalyticsAction, updateAnalyticsUIAction, updateAnalyticsParametersAction } from '../../actions';


class CF extends React.Component {
  handleRun = () => {
    const { ayid } = this.props;
    this.props.runAnalytics({ ayid });
  };

  render() {
    const {
      ayid, updateAnalyticsUI, updateAnalyticsParameters, status, obj, ui,
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
        header={<h3>Christiano-Fitzgerald (CF) Filter</h3>}
        parameters={(
          <CFParameters
            ayid={ayid}
            handleRun={this.handleRun}
            updateAnalyticsParameters={updateAnalyticsParameters}
            parameters={obj.parameters}
          />
        )}
        results={<CFResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

CF.defaultProps = {
  obj: undefined,
  ui: undefined,
};

CF.propTypes = {
  ayid: types.string.isRequired,
  obj: AnalyticsType,
  ui: types.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(CF);
