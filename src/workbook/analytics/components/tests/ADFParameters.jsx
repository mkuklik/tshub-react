import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { path, isNil } from 'ramda';
import {
  Button, Checkbox,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import InputSeries from '../common/InputSeries';
import NumericValueInput from '../common/NumericValueInput';
import RadioInput from '../common/RadioInput';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { Spaced } from '../lm/containers';


const PanelContainer = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  margin-top: 30px;
`;

export const regressionOptions = {
  c: 'constant only.',
  ct: 'constant and trend.',
  ctt: 'constant, and linear and quadratic trend.',
  nc: 'no constant, no trend.',
};

export const autolagOptions = {
  AIC: 'the number of lags is chosen to minimize the Akaike information criterion',
  BIC: 'the number of lags is chosen to minimize the Bayesian information criterion',
  't-stat': 'Starts with maxlag and drops a lag until the t-statistic on the last lag length is significant using a 5%-sized test.',
  maxlag: "the 'maxlag' lags are used.",
};

class ADFParameters extends React.PureComponent {
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

  render() {
    const {
      ayid, handleRun, parameters, parameters: { dropna, errors },
    } = this.props;

    return (
      <PanelContainer>
        { !isNil(errors)
          && (
          <Spaced>
            <AnalyticsErrors errors={errors} />
          </Spaced>
          )}

        <InputSeries ayid={ayid} label="Variable" paramName="variable" />
        {/* lambda */}

        <InputContainer>
          <RadioInput
            ayid={ayid}
            label="Type"
            name="regression"
            inline={false}
            options={regressionOptions}
          />
        </InputContainer>
        <InputContainer>
          <RadioInput
            ayid={ayid}
            label="Method for lag determination."
            name="autolag"
            inline={false}
            options={autolagOptions}
          />
        </InputContainer>
        <InputContainer>
          <NumericValueInput
            disabled={path(['autolag', 'value'], parameters) !== 'maxlag'}
            ayid={ayid}
            name="maxlag"
            label="Max lags"
            helperText="Maximum lag which is included in test, default 12*(nobs/100)^{1/4}."
            inline
          />
        </InputContainer>
        <InputContainer>
          <Checkbox
            label="Drop missing values"
            checked={dropna}
            onChange={this.handleMissingChange}
          />
        </InputContainer>
        <InputContainer>
          <Button text="Run" intent="primary" onClick={handleRun} />
        </InputContainer>

      </PanelContainer>
    );
  }
}


ADFParameters.defaultProps = {};

ADFParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  parameters: types.object, // TODO
  updateAnalyticsParameters: types.func.isRequired,
};

export default ADFParameters;
