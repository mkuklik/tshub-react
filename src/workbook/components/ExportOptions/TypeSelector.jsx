import React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import { FormGroup, Button, MenuItem } from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';

const options = ['png', 'jpeg', 'pdf', 'svg'];

class TypeSelector extends React.PureComponent {

  render() {
    const { gid, disabled, value, handleChange } = this.props;
    return (
      <FormGroup
        label="File Type"
        // inline
      >
        <BlueSelect
          activeItem={value}
          disabled={disabled}
          filterable={false}
          items={options}
          onItemSelect={(item) => handleChange(item)}
          itemRenderer={(val, { handleClick, modifiers }) => {
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
            disabled={disabled}
            text={isNil(value) ? '(No selection)' : value}
          />
        </BlueSelect>
      </FormGroup>
    );
  }
}


TypeSelector.defaultProps = {
  gid: undefined,
  value: undefined,
};

TypeSelector.propTypes = {
  gid: types.string,
  value: types.string,
  handleChange: types.func.isRequired,
};

export default TypeSelector;
