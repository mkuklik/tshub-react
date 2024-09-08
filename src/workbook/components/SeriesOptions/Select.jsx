
import React from 'react';
import {
  MenuItem, FormGroup, Button,
} from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';
import types from 'prop-types';
import { isNil } from 'ramda';

class Select extends React.PureComponent {
  handleChange = (value) => {
    const {
      gid, wsid, updateSeriesProps, section, property,
    } = this.props;

    const props = (isNil(property))
      ? { [section]: value }
      : { [section]: { [property]: value } };

    if (!isNil(gid) && !isNil(wsid)) {
      updateSeriesProps({ gid, wsid, props });
    }
  }

  render() {
    const {
      gid, label, value, options, disabled,
    } = this.props;

    return (
      <FormGroup
      // helperText="Helper text with details..."
        label={label}
        inline
      >
        <BlueSelect
          activeItem={value || 'left'}
          filterable={false}
          items={options}
          onItemSelect={(item) => this.handleChange(item[0])}
          itemRenderer={([val, lab], { handleClick, modifiers }) =>
            // console.log('MenuItem', val, lab);
            (
              <MenuItem
                key={val}
                // label={lab}
                active={modifiers.active}
                onClick={handleClick}
                text={val}
              />
            )}
        >
          <Button
            disabled={disabled || isNil(gid)}
            text={isNil(value) ? '(No selection)' : value}
          />
        </BlueSelect>
      </FormGroup>
    );
  }
}

Select.defaultProps = {
  gid: undefined,
  wsid: undefined,
  value: undefined,
  disabled: undefined,
};

Select.propTypes = {
  gid: types.string,
  wsid: types.string,
  disabled: types.bool,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string.isRequired,
  value: types.string,
  options: types.arrayOf(types.arrayOf(types.string)).isRequired,
  updateSeriesProps: types.func.isRequired,
};

export default Select;
