
import * as React from 'react';
import types from 'prop-types';
import { isNil } from 'ramda';
import { format as mathFormat } from 'mathjs';

class NumericDisplay extends React.PureComponent {
  render() {
    const { precision, upperExp, zeroThreshold } = this.props;
    const { value } = this.props;
    if (isNil(value)) return null;
    if (Math.abs(value) < zeroThreshold) {
      return (<span>0.0</span>);
    }

    return (
      <span>{mathFormat(value, { notation: 'auto', precision, upperExp })}</span>
    );
  }
}
NumericDisplay.defaultProps = {
  value: undefined,
  precision: 4,
  upperExp: 4,
  zeroThreshold: 1e-6,
};

NumericDisplay.propTypes = {
  value: types.number,
  precision: types.number,
  upperExp: types.number,
  zeroThreshold: types.number,
};

export default NumericDisplay;
