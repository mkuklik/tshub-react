import React from 'react';
import { RadioGroup, Radio } from '@blueprintjs/core';
import types from 'prop-types';
import { isNil } from 'ramda';

const YAxisSelector = (props) => {
  const {
    gid, wsid, yAxis, updateSeriesProps,
  } = props;
  const handleYAxisChange = (event) => {
    updateSeriesProps({ gid, wsid, props: { yAxis: Number(event.target.value) } });
  };
  return (
    <RadioGroup
      disabled={isNil(wsid)}
      inline
      label="Y Axis"
      name="YAxisGroup"
      onChange={handleYAxisChange}
      selectedValue={yAxis}
    >
      <Radio label="Left" value={0} />
      <Radio label="Right" value={1} />
    </RadioGroup>
  );
};

YAxisSelector.defaultProps = {
  gid: undefined,
  wsid: undefined,
  yAxis: undefined,
};

YAxisSelector.propTypes = {
  gid: types.string,
  wsid: types.string,
  yAxis: types.number,
  updateSeriesProps: types.func.isRequired,
};

export default YAxisSelector;
