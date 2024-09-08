import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import {
  analyticsSelector,
  analyticsStatusSelector,
  analyticsUISelector,
} from '../../selectors';
import { AnalyticsType } from '../../types';
import VARParameters from './VARParameters';
import VARResults from './VARResults';
import AnalyticsWindowTabs from '../AnalyticsWindowTabs';
import { updateAnalyticsUIAction } from '../../actions';
import { PanelContainer } from '../containers';


// eslint-disable-next-line react/prefer-stateless-function
class VARWindow extends React.Component {
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
        </PanelContainer>
      );
    }
    return (
      <AnalyticsWindowTabs
        ayid={ayid}
        updateAnalyticsUI={updateAnalyticsUI}
        status={status}
        ui={ui}
        header={<h3>VAR</h3>}
        parameters={<VARParameters ayid={ayid}  />}
        results={<VARResults ayid={ayid} obj={obj} />}
      />
    );
  }
}

VARWindow.defaultProps = {
  status: undefined,
  obj: undefined,
  ui: undefined,
};

VARWindow.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(VARWindow);
