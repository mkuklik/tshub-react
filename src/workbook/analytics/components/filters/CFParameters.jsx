import * as React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import { Button, Checkbox } from '@blueprintjs/core';
import InputSeries from '../common/InputSeries';
import NumericValueInput from '../common/NumericValueInput';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { Spaced } from '../lm/containers';
import { PanelContainer } from '../containers';


class CFParameters extends React.PureComponent {
  handleDriftChange = (e) => {
    const { ayid, parameters, updateAnalyticsParameters } = this.props;
    updateAnalyticsParameters({
      ayid,
      parameters: {
        ...parameters,
        drift: e.target.checked,
      },
    });
  };

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
    const { ayid, handleRun, parameters: { errors, dropna, drift } } = this.props;
    return (
      <PanelContainer>
        { !isNil(errors)
          && (
          <Spaced>
            <AnalyticsErrors errors={errors} />
          </Spaced>
          )}

        <InputSeries ayid={ayid} label="Variable" paramName="variable" />

        <NumericValueInput
          ayid={ayid}
          name="low"
          label="Low bound period"
          helperText="Minimum period of oscillation of desired component."
          inline
          min={2}
        />

        <NumericValueInput
          ayid={ayid}
          name="high"
          label="Upper bound period"
          helperText="maximum period of oscillation of desired component."
          inline
          min={2}
        />

        <Spaced>
          <Checkbox
            label="Drift"
            checked={drift}
            onChange={this.handleDriftChange}
          />
        </Spaced>

        <Spaced>
          <Checkbox
            label="Drop missing values"
            checked={dropna}
            onChange={this.handleMissingChange}
          />
        </Spaced>

        <Button text="Run" intent="primary" onClick={handleRun} />

      </PanelContainer>
    );
  }
}


CFParameters.defaultProps = {
  parameters: undefined,
};

CFParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  parameters: types.object,
  updateAnalyticsParameters: types.func.isRequired,
};

export default CFParameters;
