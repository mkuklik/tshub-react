import React from 'react';
import {
  MenuItem, AnchorButton, Tooltip,
} from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';
import types from 'prop-types';
import { isNil } from 'ramda';

const options = [0, 1];
const optionName = {
  0: 'Left',
  1: 'Right',
};

class YAxisDropdownSelector extends React.PureComponent {
  handleYAxisChange = (value) => {
    const { gid, wsid, updateSeriesProps } = this.props;
    updateSeriesProps({ gid, wsid, props: { yAxis: value } });
  };

  render() {
    const { wsid, yAxis } = this.props;
    const isDisabled = isNil(wsid);
    return (
      <BlueSelect
        activeItem={yAxis}
        disabled={isDisabled}
        filterable={false}
        items={options}
        onItemSelect={(item) => this.handleYAxisChange(item)}
        itemRenderer={(value, { handleClick, modifiers }) => (
          <MenuItem
            key={value}
            active={modifiers.active}
            onClick={handleClick}
            text={optionName[value]}
          />
        )}
      >
        {/* <Tooltip
          content="Select Y-Axis"
        > */}
        <AnchorButton
          style={{ width: '90px' }}
          disabled={isDisabled}
          icon="arrows-horizontal"
          text={(isDisabled) ? 'Y-Axis' : optionName[yAxis]}
        />
        {/* </Tooltip> */}
      </BlueSelect>

    );
  }
}

YAxisDropdownSelector.defaultProps = {
  gid: undefined,
  wsid: undefined,
  yAxis: undefined,
};

YAxisDropdownSelector.propTypes = {
  gid: types.string,
  wsid: types.string,
  yAxis: types.number,
  updateSeriesProps: types.func.isRequired,
};

export default YAxisDropdownSelector;
