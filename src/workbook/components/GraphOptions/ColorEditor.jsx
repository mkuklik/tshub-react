
import React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { FormGroup } from '@blueprintjs/core';

class ColorEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
  }

  handleColorOpen = () => {
    this.setState((prevState) => ({ displayColorPicker: !prevState.displayColorPicker }));
  };

  handleColorClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleColorChange = (color) => {
    // this.setState({ color: color.hex });
    const {
      disabled, handlePropsUpdate, makeProps, section, property,
    } = this.props;
    if (!disabled) {
      let props;
      if (!isNil(makeProps)) {
        props = makeProps(color.hex);
      } else {
        props = (isNil(property))
          ? { [section]: color.hex }
          : { [section]: { [property]: color.hex } };
      }
      handlePropsUpdate(props);
    }
  };


  render() {
    const {
      label, value, disabled,
    } = this.props;
    const color = value;
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          // borderRadius: '2px',
          background: color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <>
        <FormGroup
        // helperText="Helper text with details..."
          label={label}
        >
          <div
            style={styles.swatch}
            onClick={(disabled) ? undefined : this.handleColorOpen}
            aria-disabled={disabled}
          >
            <div
              style={styles.color}
            />
          </div>
          { this.state.displayColorPicker ? (
            <div style={styles.popover}>
              <div
                style={styles.cover}
                onClick={this.handleColorClose}
              />
              <SketchPicker
                color={color}
                onChange={this.handleColorChange}
              />
            </div>
          ) : null }
        </FormGroup>
      </>
    );
  }
}

ColorEditor.defaultProps = {
  disabled: false,
  value: undefined,
  property: undefined,
  makeProps: undefined,
};

ColorEditor.propTypes = {
  disabled: types.bool,
  label: types.string.isRequired,
  section: types.string.isRequired,
  property: types.string,
  value: types.string,
  handlePropsUpdate: types.func.isRequired,
  makeProps: types.func,
};

export default ColorEditor;
