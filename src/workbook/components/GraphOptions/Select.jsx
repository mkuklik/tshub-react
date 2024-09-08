
import React from 'react';
import {
  MenuItem, FormGroup, Button,
} from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';
import types from 'prop-types';
import { isNil, find, path } from 'ramda';

class Select extends React.PureComponent {
  handleChange = (value) => {
    const {
      gid, handlePropsUpdate, section, property,
    } = this.props;

    const props = (isNil(property))
      ? { [section]: value }
      : { [section]: { [property]: value } };

    if (!isNil(gid)) {
      handlePropsUpdate(props);
    }
  }

  render() {
    const {
      gid, label, value, options, disabled,
    } = this.props;
    const text = path([0], find((x) => x[1] === value, options));
    return (
      <FormGroup
      // helperText="Helper text with details..."
        label={label}
        inline
      >
        <BlueSelect
          activeItem={value || 'left'}
          disabled={disabled || isNil(gid)}
          filterable={false}
          items={options}
          onItemSelect={(item) => this.handleChange(item[1])}
          itemRenderer={([val, lab], { handleClick, modifiers }) => {
            // console.log('MenuItem', val, lab);
            return (
              <MenuItem
                key={val}
                // label={lab}
                active={modifiers.active}
                onClick={handleClick}
                text={val}
              />
            );
          }}
        >
          <Button
            disabled={disabled || isNil(gid)}
            text={isNil(value) ? '(No selection)' : text }
          />
        </BlueSelect>
      </FormGroup>
    );
  }
}

Select.defaultProps = {
  gid: undefined,
  value: undefined,
  disabled: undefined,
  property: undefined,
};

Select.propTypes = {
  gid: types.string,
  disabled: types.bool,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string,
  value: types.string,
  options: types.arrayOf(types.arrayOf(types.string)).isRequired,
  handlePropsUpdate: types.func.isRequired,
};

export default Select;
