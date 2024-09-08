import React from 'react';
import styled from 'styled-components';
import types from 'prop-types';
import { isNil } from 'ramda';
import { EditableText } from '@blueprintjs/core';
import { SeriesDefinitionType } from '../../../viewer/types/Graph';


class SeriesNameEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: isNil(props.name) ? null : props.name || null,
    };
  }

  handleConfirm = () => {
    const { wsid, updateSeries } = this.props;
    const { name } = this.state;
    updateSeries({ wsid, series: { name } });
  }

  handleChange = (value) => this.setState({ name: value });

  render() {
    const { disabled } = this.props;
    const { name } = this.state;

    return (
      <EditableText
        disabled={disabled}
        placeholder="Edit Series name..."
        onChange={this.handleChange}
        onConfirm={this.handleConfirm}
        value={name}
      />
    );
  }
}

SeriesNameEditor.defaultProps = {
  name: undefined,
};

SeriesNameEditor.propTypes = {
  wsid: types.string.isRequired,
  disabled: types.bool.isRequired,
  name: types.string,
  updateSeries: types.func.isRequired,
};

export default SeriesNameEditor;
