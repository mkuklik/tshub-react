import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { isNil } from 'ramda';
import {
  Button, Checkbox,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import InputSeries from '../common/InputSeries';
import NumericValueInput from '../common/NumericValueInput';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { Spaced } from '../lm/containers';
import RadioInput from '../common/RadioInput';


const PanelContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

const InputContainer = styled.div`
  margin-top: 30px;
`;


export const transOptions = {
  level: 'level',
  diff1: '1st difference',
  diff2: '2nd difference',
};

class AutocorrelationParameters extends React.PureComponent {
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
      ayid, handleRun, parameters: { dropna, errors },
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
            label="Correlation of variable"
            name="transformation"
            inline={false}
            options={transOptions}
          />
        </InputContainer>
        <InputContainer>
          <NumericValueInput
            // disabled={}
            ayid={ayid}
            name="nlags"
            label="Lags"
            helperText="Number of lags to be considered"
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


AutocorrelationParameters.defaultProps = {};

AutocorrelationParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  updateAnalyticsParameters: types.func.isRequired,
};

export default AutocorrelationParameters;
