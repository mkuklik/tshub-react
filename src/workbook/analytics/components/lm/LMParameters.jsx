import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'ramda';
import {
  Button, Checkbox, Divider,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import { analyticsParametersSelector } from '../../selectors';
import {
  updateAnalyticsParametersAction,
  importParametersFromGraphAction,
  runAnalyticsAction,
} from '../../actions';
import { LMParameterType } from '../../types';
import { Spaced } from './containers';
import LMParametersDependent from './LMParametersDependent';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { PanelContainer } from '../containers';
import CheckboxInput from '../common/CheckboxInput';
import InputSeriesList from '../common/InputSeriesList';
import InputSeries from '../common/InputSeries';

/*
How to input equation:
1. equation, parse, split, evaluate, and
2.
- pick Y
- pick regressors X's
- include contant

*/
// TODO:
// 1. make parameter adjustment in state and only move it to the store when user click save or run
// this is because we want user to be able to edit parameters after analytics was run. In such case we don't want to overwrite
// parameters with results corresponding to old parameters.
// 2. when user edits paramteres and click save, new parameteres are saved to store and results/diagnostics are cleared

// when editing parameters, expr or wsid is stored in parameters objects.
// When user run Analytics, only then parameters are converted to wsid and evaluated, combined and send over the backend
//


class LMParameters extends React.Component {
  handleMissingChange = (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;

    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        dropna: e.target.checked,
      },
    });
  };

  handleRun = () => {
    const { ayid, runAnalytics } = this.props;
    runAnalytics({ ayid });
  };

  render() {
    const {
      ayid,
      parameters: {
        dependent, regressors, addconst, errors,
      },
    } = this.props;

    const disabled = isNil(dependent.wsid) || ((regressors || []).length === 0 && !addconst);

    return (
      <PanelContainer>
        { !isNil(errors)
          && (
          <Spaced>
            <AnalyticsErrors errors={errors} />
          </Spaced>
          )}

        <InputSeries ayid={ayid} paramName="dependent" header="Dependent Variable" />

        <InputSeriesList ayid={ayid} paramName="regressors" header="Regressors" />

        <CheckboxInput ayid={ayid} name="addconst" displayName="Include constant" />

        <Divider />

        <CheckboxInput ayid={ayid} name="dropna" displayName="Drop missing values" />

        <Spaced>
          <Button
            intent="primary"
            disabled={disabled}
            onClick={this.handleRun}
          >
            Estimate
          </Button>
        </Spaced>

      </PanelContainer>
    );
  }
}

LMParameters.defaultProps = {
  parameters: {},
};

LMParameters.propTypes = {
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  updateAnalyticsParameters: types.func.isRequired,
  runAnalytics: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  parameters: analyticsParametersSelector(ownProps.ayid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateAnalyticsParameters: updateAnalyticsParametersAction,
    importParametersFromGraph: importParametersFromGraphAction,
    runAnalytics: runAnalyticsAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LMParameters);
