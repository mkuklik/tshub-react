import React from 'react';
import styled from 'styled-components';
import { isNil } from 'ramda';
import { Icon, EditableText } from '@blueprintjs/core';

const NameCellRendererContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class NameCellRenderer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { allSeriesDef } = props.context;
    const series = allSeriesDef[props.data.wsid];
    this.state = {
      name: isNil(series) ? null : series.name || null,
    };
  }

  handleConfirm = () => {
    const { wsid } = this.props.data;
    const { updateSeries } = this.props.context;
    const { name } = this.state;
    updateSeries({ wsid, series: { name } });
  }

  handleChange = (value) => this.setState({ name: value });

  render() {
    const { name } = this.state;

    const edit = true;
    if (edit) {
      return (
        <NameCellRendererContainer>
          <EditableText
            placeholder="Edit Series name..."
            onChange={this.handleChange}
            onConfirm={this.handleConfirm}
            value={name}
          />
        </NameCellRendererContainer>
      );
    }

    return (
      <NameCellRendererContainer>
        <Icon icon="function" />
        <span>{name}</span>
      </NameCellRendererContainer>
    );
  }
}
