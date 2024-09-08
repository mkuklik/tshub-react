
import React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import {
  AnchorButton, Button, FormGroup, HTMLSelect, NumericInput, Popover,
} from '@blueprintjs/core';
import { StyleType } from '../../../viewer/types/Graph';
import { FontNames } from '../../../fonts/fonts';


class StyleEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
  }

  handleBoldChange = () => {
    const { updateStyle, style } = this.props;
    const fontWeight = (style.fontWeight === 'bold') ? 'normal' : 'bold';
    updateStyle({ ...style, fontWeight });
  }

  handleFontStyleChange = () => {
    const { updateStyle, style } = this.props;
    const fontStyle = (style.fontStyle === 'italic') ? 'normal' : 'italic';
    updateStyle({ ...style, fontStyle });
  }

  handleFontSizeChange = (value) => {
    console.log('handleFontSizeChange value', value);
    const { updateStyle, style } = this.props;
    const fontSize = (Number.isNaN(value)) ? undefined : `${value}px`;
    console.log('handleFontSizeChange fontSize', fontSize);
    updateStyle({ ...style, fontSize });
  }

  handleFontFamilyChange = (event) => {
    const { updateStyle, style } = this.props;
    updateStyle({ ...style, fontFamily: event.target.value });
  }

  handleColorOpen = () => {
    this.setState((prevState) => ({ displayColorPicker: !prevState.displayColorPicker }));
  };

  handleColorClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleColorChange = (color) => {
    const { updateStyle, style } = this.props;
    updateStyle({ ...style, color: color.hex });
  };


  render() {
    const {
      gid, label, value, disabled, style,
    } = this.props;
    const color = path(['color'], style) || '#000000';
    const rawFontSize = path(['fontSize'], style) || '10px';
    const parsedFontSize = parseInt(String(rawFontSize), 10);
    const fontSize = (!isNil(parsedFontSize)) ? parsedFontSize : undefined;
    const fontFamily = path(['fontFamily'], style) || 'Open Sans';

    console.log('color', color, value);

    const styles = reactCSS({
      default: {
        button: {
          padding: '5px',
        },
        color: {
          width: '20px',
          height: '20px',
          borderRadius: '2px',
          background: color,
        },
      },
    });

    return (
      <>
        <FormGroup
        // helperText="Helper text with details..."
          label={label}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ maxWidth: '180px', display: 'grid' }}>
              <HTMLSelect
                disabled={disabled}
                onChange={this.handleFontFamilyChange}
                value={fontFamily}
                options={FontNames}
              />
            </div>
            <div style={{
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '5px',
            }}
            >
              <NumericInput
                style={{ width: '50px' }}
                disabled={disabled}
                min={7}
                max={100}
                value={fontSize}
                onValueChange={this.handleFontSizeChange}
              />
              <Button
                style={{ marginLeft: '2px' }}
                disabled={disabled}
                text="B"
                active={style.fontWeight === 'bold'}
                onClick={this.handleBoldChange}
              />
              <Button
                style={{ marginLeft: '2px' }}
                disabled={disabled}
                text="I"
                active={style.fontStyle === 'italic'}
                onClick={this.handleFontStyleChange}
              />
              <Popover
                disabled={disabled}
                content={(
                  <SketchPicker
                    color={color}
                    onChange={this.handleColorChange}
                  />
            )}
                target={(
                  <AnchorButton
                    style={{ marginLeft: '2px', padding: '5px' }}
                    disabled={disabled}
                  >
                    <div style={styles.color} />
                  </AnchorButton>
            )}
              />
            </div>
          </div>
        </FormGroup>
      </>
    );
  }
}
/*

            color: '#FF00FF',
            fontWeight: 'bold'
            */

StyleEditor.defaultProps = {
  disabled: false,
  style: {},
};

StyleEditor.propTypes = {
  disabled: types.bool,
  style: StyleType,
  updateStyle: types.func.isRequired,
};

export default StyleEditor;
