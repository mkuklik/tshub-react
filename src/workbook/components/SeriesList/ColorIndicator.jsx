import React from 'react';
import types from 'prop-types';

const ColorIndicator = (props) => (
  <div
    className={props.className}
    style={{
      display: 'inline-block',
      background: props.color,
      height: '15px',
      width: '15px',
      verticalAlign: 'sub',
      marginRight: '5px',
    }}
  />
);

ColorIndicator.propTypes = {
  color: types.string.isRequired,
};

export default ColorIndicator;
