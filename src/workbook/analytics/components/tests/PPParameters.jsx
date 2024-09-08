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
import { Spaced } from '../lm/containers';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { PanelContainer } from '../containers';


const InputContainer = styled.div`
  margin-top: 30px;
`;

export const regressionOptions = {
  nc: 'no constant.',
  c: 'constant only.',
  ct: 'constant and trend.',
};

export const StatisticsOptions = {
  tau: 't-statistics',
  rho: 'a test based on nobs times the re-centered regression coefficient.',
};

export const autolagOptions = {
  auto: 'auto: lags is calculated using int(12 * (n / 100)**(1 / 4)).',
  nlags: "nlags: the 'nlags' lags are used.",
};

class PPParameters extends React.PureComponent {
  handleMissingChange = (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    if (!isNil(parameteres)) {
      updateAnalyticsParameters({
        ayid,
        parameters: {
          ...parameters,
          dropna: e.target.checked,
        },
      });
    }
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
            disabled={path(['autolag', 'value'], parameters) !== 'nlags'}
            ayid={ayid}
            name="nlags"
            label="Number of lags"
            helperText="If not specified, select lag determination method"
            inline
          />
        </InputContainer>
        <InputContainer>
          <RadioInput
            ayid={ayid}
            label="Statistics"
            name="type"
            inline={false}
            options={StatisticsOptions}
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


PPParameters.defaultProps = {
  parameters: undefined,
};

PPParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  parameters: types.object,
  updateAnalyticsParameters: types.func.isRequired,
};

export default PPParameters;
