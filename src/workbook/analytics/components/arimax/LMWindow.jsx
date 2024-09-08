import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import '@blueprintjs/core/lib/css/blueprint.css';
import { analyticsSelector, analyticsStatusSelector, analyticsUISelector } from '../../selectors';
import LMParameters from './LMParameters';
import { AnalyticsType } from '../../types';
import LMResults from './LMResults';
import AnalyticsWindowTabs from '../AnalyticsWindowTabs';
import { updateAnalyticsUIAction } from '../../actions';
import { PanelContainer } from '../containers';


// eslint-disable-next-line react/prefer-stateless-function
class LMWindow extends React.Component {
  render() {
    const {
      ayid, status, obj, updateAnalyticsUI, ui,
    } = this.props;
    if (ayid === undefined) return null;
    if (isNil(obj)) {
      return (
        <PanelContainer>
          <span>
            {`Can't find the Analytics object, ${ayid}.`}
          </span>

          .
        </PanelContainer>
      );
    }
    return (
      <AnalyticsWindowTabs
        ayid={ayid}
        updateAnalyticsUI={updateAnalyticsUI}
        status={status}
        ui={ui}
        header={<h3>Least Square Regression</h3>}
        parameters={<LMParameters ayid={ayid} />}
        results={<LMResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

LMWindow.defaultProps = {
  status: undefined,
  obj: undefined,
  ui: undefined,
};

LMWindow.propTypes = {
  ayid: types.string.isRequired,
  updateAnalyticsUI: types.func.isRequired,
  status: types.string,
  obj: AnalyticsType,
  ui: types.object,
};

const mapStateToProps = (state, ownProps) => ({
  obj: analyticsSelector(ownProps.ayid)(state),
  status: analyticsStatusSelector(ownProps.ayid)(state),
  ui: analyticsUISelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateAnalyticsUI: updateAnalyticsUIAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LMWindow);
