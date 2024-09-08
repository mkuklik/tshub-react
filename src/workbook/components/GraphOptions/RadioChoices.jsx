
import React from 'react';
import { RadioGroup, Radio } from '@blueprintjs/core';
import types from 'prop-types';
import { isNil, map } from 'ramda';

class RadioChoices extends React.PureComponent {
  handleChange = (value) => {
    const {
      gid, updateGraphProps, section, property,
    } = this.props;
    if (!isNil(gid)) {
      updateGraphProps({ gid, props: { [section]: { [property]: value } } });
    }
  }

  render() {
    const {
      gid, label, value, options,
    } = this.props;

    return (
      <RadioGroup
        label={label}
        onChange={this.handleChange}
        selectedValue={value}
        disabled={isNil(gid)}
      >
        {map(([val, key]) => <Radio label={val} value={key} />, options)}
        {/* <Radio label="top" value="top" />
        <Radio label="middle" value="middle" />
        <Radio label="bottom" value="bottom" /> */}
      </RadioGroup>
    );
  }
}

RadioChoices.defaultProps = {
  gid: undefined,
  value: undefined,
};

RadioChoices.propTypes = {
  gid: types.string,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string.isRequired,
  value: types.string,
  options: types.arrayOf(types.arrayOf(types.string)).isRequired,
  updateGraphProps: types.func.isRequired,
};

export default RadioChoices;
