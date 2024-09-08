import React from 'react';
import types from 'prop-types';
import { isNil, path, mapObjIndexed } from 'ramda';
import { Radio, RadioGroup } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { analyticsParametersSelector } from '../../selectors';
import { LMParameterType } from '../../types';
import { updateAnalyticsParametersAction, updateAnalyticsUIAction } from '../../actions';

class RadioInput extends React.PureComponent {
  handleChange = (event) => {
    const {
      ayid, disabled, name, options,
    } = this.props;

    if (!disabled) {
      this.props.updateAnalyticsParameters({
        ayid,
        parameters: {
          ...this.props.parameters,
          [name]: {
            value: event.target.value,
            // options,
          },
        },
      });
    }
  }

  render() {
    const {
      label, value, disabled, inline, options,
      className, min, max, helperText,
    } = this.props;
    const renderedOptions = (isNil(options))
      ? null
      : Object.values(mapObjIndexed((v, k) => <Radio key={k} label={v} value={k} />, options));
    return (
      <RadioGroup
        label={label}
        helperText={helperText}
        className={className}
        disabled={disabled}
        onChange={this.handleChange}
        selectedValue={value}
        inline={inline}
      >
        {renderedOptions}
      </RadioGroup>
    );
  }
}

RadioInput.defaultProps = {
  disabled: false,
  inline: true,
  value: undefined,
  helperText: undefined,
  options: undefined,
};

RadioInput.propTypes = {
  name: types.string.isRequired,
  ayid: types.string.isRequired,
  parameters: LMParameterType,
  updateAnalyticsParameters: types.func.isRequired,
  disabled: types.bool,
  inline: types.bool,
  label: types.string.isRequired,
  value: types.string,
  options: types.object,
  helperText: types.string,
};


const mapStateToProps = (state, ownProps) => {
  const parameters = analyticsParametersSelector(ownProps.ayid)(state);
  return ({
    parameters,
    value: path([ownProps.name, 'value'], parameters),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateAnalyticsParameters: updateAnalyticsParametersAction,
  updateAnalyticsUI: updateAnalyticsUIAction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RadioInput);
