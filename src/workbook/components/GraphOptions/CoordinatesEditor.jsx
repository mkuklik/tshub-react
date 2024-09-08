
import React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import { Button, FormGroup, NumericInput } from '@blueprintjs/core';

class CoordinatesEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      initX: props.x,
      y: props.y,
      initY: props.y,
    };
  }

  handleXChange = (valueAsNumber, valueAsString) => this.setState({ x: valueAsNumber });

  handleYChange = (valueAsNumber, valueAsString) => this.setState({ y: valueAsNumber });

  handleKeyPress = () => {
    
  }

  handleConfirm = (value) => {
    const {
      gid, updateGraphProps, section, property, makeProps,
    } = this.props;
    if (!isNil(gid)) {
      const props = (!isNil(makeProps)) ? makeProps(value) : { [section]: { [property]: value } };
      updateGraphProps({ gid, props });
    }
  }

  handleColorChange = (color) => {
    // this.setState({ color: color.hex });
    const {
      gid, updateGraphProps, makeProps, section, property, value,
    } = this.props;
    if (!isNil(gid)) {
      const props = (!isNil(makeProps)) ? makeProps({ ...value, color: color.hex }) : {
        [section]: {
          [property]: {
            ...value,
            color: color.hex,
          },
        },
      };
      updateGraphProps({
        gid,
        props,
      });
    }
  };


  render() {
    const {
      gid, label, value, disabled,
    } = this.props;
    return (
      <>
        <FormGroup
        // helperText="Helper text with details..."
          label={label}
        >
          <NumericInput
            disabled={disabled}
            onValueChange={this.handleXChange}
            value={this.state.x}
            onKeyPress={this.handleKeyPress}
          />
          <NumericInput
            disabled={disabled}
            onValueChange={this.handleYChange}
            value={this.state.y}
            onKeyPress={this.handleKeyPress}
          />

        </FormGroup>
      </>
    );
  }
}

CoordinatesEditor.defaultProps = {
  gid: undefined,
  disabled: false,
  x: undefined,
  y: undefined,
  property: 'style',
  makeProps: undefined,
};

CoordinatesEditor.propTypes = {
  gid: types.string,
  disabled: types.bool,
  x: types.number,
  y: types.number,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string,
  updateGraphProps: types.func.isRequired,
  makeProps: types.func,
};

export default CoordinatesEditor;
