import * as React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import {
  Button, Checkbox,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import InputSeries from '../common/InputSeries';
import NumericValueInput from '../common/NumericValueInput';
import AnalyticsErrors from '../common/AnalyticsErrors';
import { Spaced } from '../lm/containers';
import { PanelContainer } from '../containers';


class HPParameters extends React.PureComponent {
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
    const { ayid, handleRun, parameters: { errors, dropna } } = this.props;
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
        <NumericValueInput
          ayid={ayid}
          name="lambda"
          label="Lambda"
          helperText="Hodrick-Prescott smoothing parameter."
          inline
        />

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


HPParameters.defaultProps = {
  parameters: undefined,
};

HPParameters.propTypes = {
  ayid: types.string.isRequired,
  handleRun: types.func.isRequired,
  parameters: types.object,
  updateAnalyticsParameters: types.func.isRequired,
};

export default HPParameters;
