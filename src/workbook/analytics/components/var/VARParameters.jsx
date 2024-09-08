import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil, path } from 'ramda';
import {
  Button, Divider, FormGroup,
} from '@blueprintjs/core';
import { analyticsParametersSelector } from '../../selectors';
import {
  updateAnalyticsParametersAction,
  importParametersFromGraphAction,
  runAnalyticsAction,
} from '../../actions';
import { LMParameterType } from '../../types';
import { Spaced } from './containers';
import InputSeriesList from '../common/InputSeriesList';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { PanelContainer } from '../containers';
import CheckboxInput from '../common/CheckboxInput';
import RadioInput from '../common/RadioInput';
import NumericValueInput from '../common/NumericValueInput';

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


class VARParameters extends React.Component {
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
      parameters,
      parameters: {
        endogenous, errors,
      },
    } = this.props;
    const disabled = ((endogenous || []).length === 0);
    return (
      <PanelContainer>
        { !isNil(errors)
          && (
          <Spaced>
            <AnalyticsErrors errors={errors} />
          </Spaced>
          )}

        <InputSeriesList
          ayid={ayid}
          paramName="endogenous"
          header="Endogenous"
        />

        <Divider />
        <Spaced>
          <FormGroup
            helperText="The trend to include in the model"
            // className={className}
            label="Trend"
          >
            <RadioInput
              ayid={ayid}
              name="trend"
              inline={false}
              options={{
                nc: 'nc: no contsnt/no trend.',
                c: 'c: constant only.',
                ct: 'ct: constant and time trend.',
                ctt: 'ctt: constant, linear, and quadratic time trend.',
              }}
            />
          </FormGroup>
        </Spaced>
        <Spaced>
          <FormGroup
            helperText="Model selection criterion."
            // className={className}
            label="Information Criterion"
            // inline={inline}
          >
            <RadioInput
              ayid={ayid}
              name="ic"
              inline={false}
              options={{
                aic: 'AIC: Akaike Information Criterion.',
                fpe: 'FPE: Final prediction error.',
                hqic: 'HQIC: Hannan-Quinn Information Criterion.',
                bic: 'BIC: Bayesian Information Criterion.',
                default: 'Default: Number of lags defaults to 12 * (nobs/100.)**(1./4).',
              }}
            />
          </FormGroup>
        </Spaced>

        <Spaced>
          <NumericValueInput
            ayid={ayid}
            name="maxlags"
            label="Maxlags"
            min={0}
            helperText="Maximum number of lags to check for order selection."
          />
        </Spaced>

        <Divider />

        <CheckboxInput ayid={ayid} name="dropna" displayName="Drop missing values" />
        {/* <Spaced>
          <Checkbox
            label="Drop missing values"
            checked={dropna}
            onChange={this.handleMissingChange}
          />
        </Spaced> */}

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

VARParameters.defaultProps = {
  parameters: {},
};

VARParameters.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(VARParameters);
