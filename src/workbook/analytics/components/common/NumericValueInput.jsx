import React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import { FormGroup, NumericInput } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { analyticsParametersSelector } from '../../selectors';
import { LMParameterType } from '../../types';
import { updateAnalyticsParametersAction, updateAnalyticsUIAction } from '../../actions';

class NumericValueInput extends React.PureComponent {
  handleChange = (value) => {
    const {
      ayid, disabled, name, updateAnalyticsParameters, isInteger, parameters, refresh,
    } = this.props;

    let update = {
      [name]: {
        value,
      },
    };

    if (isInteger && !Number.isInteger(value)) {
      update = {
        [name]: {
          value: parameters[name].value,
          refresh: refresh + 1,
        },
      };
    }

    if (!disabled && !isNil(parameters)) {
      updateAnalyticsParameters({
        ayid,
        parameters: {
          ...parameters,
          ...update,
        },
      });
    }
  }

  render() {
    const {
      label, value, disabled, inline, refresh,
      className, min, max, isInteger, helperText,
    } = this.props;
    let { minorStepSize } = this.props;

    if (isInteger && isNil(minorStepSize)) {
      minorStepSize = 1;
    }
    return (
      <FormGroup
        helperText={helperText}
        className={className}
        label={label}
        inline={inline}
      >
        <NumericInput
          key={refresh}
          fill={false}
          disabled={disabled}
          onValueChange={this.handleChange}
          value={value}
          minorStepSize={minorStepSize}
          min={min}
          max={max}
        />

      </FormGroup>
    );
  }
}

NumericValueInput.defaultProps = {
  className: '',
  disabled: false,
  inline: true,
  value: undefined,
  min: undefined,
  max: undefined,
  isInteger: false,
  minorStepSize: null,
  parameters: undefined,
  refresh: 0,
  helperText: undefined,
};

NumericValueInput.propTypes = {
  className: types.string,
  name: types.string.isRequired,
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  updateAnalyticsParameters: types.func.isRequired,
  disabled: types.bool,
  inline: types.bool,
  label: types.string.isRequired,
  value: types.number,
  min: types.number,
  max: types.number,
  isInteger: types.bool,
  minorStepSize: types.number,
  refresh: types.number,
  helperText: types.string,
};


const mapStateToProps = (state, ownProps) => {
  const parameters = analyticsParametersSelector(ownProps.ayid)(state);
  return ({
    parameters,
    value: path([ownProps.name, 'value'], parameters),
    refresh: path([ownProps.name, 'refresh'], parameters),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateAnalyticsParameters: updateAnalyticsParametersAction,
  updateAnalyticsUI: updateAnalyticsUIAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NumericValueInput);
