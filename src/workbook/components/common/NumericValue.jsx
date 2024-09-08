
import React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import { FormGroup, NumericInput, Classes } from '@blueprintjs/core';

class NumericValue extends React.PureComponent {
  handleChange = (value) => {
    const {
      disabled, handlePropsUpdate, section, property,
    } = this.props;

    const props = (isNil(property))
      ? { [section]: value }
      : { [section]: { [property]: value } };

    if (!disabled) {
      handlePropsUpdate(props);
    }
  }

  render() {
    const {
      label, value, disabled, inline,
      className, min, max,
    } = this.props;

    return (
      <FormGroup
        // helperText="Helper text with details..."
        className={className}
        label={label}
        inline={inline}
      >
        <NumericInput
          fill={false}
          disabled={disabled}
          onValueChange={this.handleChange}
          value={value}
          min={min}
          max={max}
        />

      </FormGroup>
    );
  }
}

NumericValue.defaultProps = {
  disabled: false,
  inline: true,
  value: undefined,
  property: undefined,
  min: undefined,
  max: undefined,
};

NumericValue.propTypes = {
  disabled: types.bool,
  inline: types.bool,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string,
  value: types.string,
  min: types.number,
  max: types.number,
};

export default NumericValue;
