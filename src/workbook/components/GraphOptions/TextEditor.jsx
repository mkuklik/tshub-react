
import React from 'react';
import { EditableText, FormGroup } from '@blueprintjs/core';
import types from 'prop-types';

class TextEditor extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
      initial: props.value,
    };
  }

  handleChange = (value) => this.setState({ value })

  handleCancel = () => this.setState((prevState) => ({ value: prevState.initial }));

  handleConfirm = (value) => {
    const { disabled, handleUpdate } = this.props;
    if (!disabled) {
      handleUpdate(value);
      this.setState({ value, initial: value });
    }
    // if (!isNil(gid)) {
    //   const props = (!isNil(makeProps)) ? makeProps(value) : { [section]: { [property]: value } };
    //   updateGraphProps({ gid, props });
    //   this.setState({ value, initial: value });
    // }
  }

  render() {
    const { label, disabled } = this.props;
    console.log('TextEditor disabled', disabled);
    return (
      <FormGroup
        // helperText="Helper text with details..."
        label={label}
      >
        <EditableText
          disabled={disabled}
          placeholder={`Edit ${label}...`}
          value={this.state.value}
          onChange={this.handleChange}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </FormGroup>
    );
  }
}

TextEditor.defaultProps = {
  disabled: false,
  value: undefined,
  label: undefined,
};

TextEditor.propTypes = {
  disabled: types.bool,
  value: types.string,
  label: types.string,
  handleUpdate: types.func.isRequired,
};

export default TextEditor;
