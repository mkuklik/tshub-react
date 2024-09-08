import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import {
  path, isNil, map, any,
} from 'ramda';
import {
  Button, Checkbox, Classes, FormGroup, Intent, Callout, InputGroup,
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

class DescriptiveParameters extends React.PureComponent {

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

  handleProcentilesChange = (event) => {
    const { ayid, updateAnalyticsUI, ui: { procentiles } } = this.props;

    updateAnalyticsUI(ayid, {
      procentiles: {
        ...procentiles,
        text: event.target.value,
        error: undefined,
      },
    });
  };

  // handleSumbit = () => {
  //   const {
  //     ayid,
  //     updateAnalyticsParameters,
  //     updateAnalyticsUI,
  //     handleRun, parameters, ui: { procentiles },
  //   } = this.props;

  //   let tmp = procentiles['text'];
  //   tmp = tmp.split(',');
  //   const values = map(Number, tmp);

  //   // to check for errors
  //   if (any(map((x) => {
  //     if (isNil(x)) {
  //       updateAnalyticsUI(ayid, {
  //         procentiles: {
  //           ...procentiles,
  //           text,
  //           error: undefined,
  //         },
  //       });
  //       return false;
  //     }
  //     if (x < 0 || x > 100) {
  //       this.setState({ procentilesError: `'${x}' has to be between 0 and 100` });
  //       return false;
  //     }
  //     return true;
  //   }))(values)) return;

  //   updateAnalyticsParameters({
  //     ayid,
  //     parameters: {
  //       ...parameters,
  //       procentiles: {
  //         values,
  //       },
  //     },
  //   });
  //   handleRun();
  // }

  render() {
    const {
      ayid, handleRun, ui: { procentiles: { text } }, parameters: { dropna, errors },
    } = this.props;
    const error = path(['ui', 'procentiles', 'error'], this.props);

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
          <NumericValueInput
            ayid={ayid}
            name="nbins"
            label="Number of bins"
            helperText="Number of bins in a histogram."
            inline
          />
        </InputContainer>

        <InputContainer>
          <FormGroup
            // helperText="Helper text with details..."
            label="Procentiles"
            labelFor="procentiles"
            inline
          >
            <InputGroup
              id="procentiles"
              value={text}
              onChange={this.handleProcentilesChange}
              intent={!isNil(error) ? 'danger' : 'none'}
            />
          </FormGroup>
        </InputContainer>
        {/* <InputContainer>
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
        </InputContainer> */}
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

DescriptiveParameters.defaultProps = {};

DescriptiveParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  parameters: types.object.isRequired, // TODO
  updateAnalyticsParameters: types.func.isRequired,
  updateAnalyticsUI: types.func.isRequired,
  ui: types.object.isRequired,
};

export default DescriptiveParameters;
