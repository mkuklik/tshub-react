import React from 'react';
import { Button, Popover } from '@blueprintjs/core';
import { SeriesKind } from '../../../viewer/sagas/series.constants';
import ColorIndicator from './ColorIndicator';

export default class IndicatorCellRenderer extends React.PureComponent {
  render() {
    const { openFuncEditor, allSeriesDef } = this.props.context;
    const { data } = this.props;
    const series = allSeriesDef[data.wsid];
    return (
      <>
        <Button
          minimal
          small
          icon="function"
          disabled={series.kind === SeriesKind.data}
          onClick={() => openFuncEditor(data.wsid)}
        />
        <ColorIndicator color={this.props.data.color} />
        { data.errors && data.errors.length > 0
          && (
          <Popover
            content={<div>{data.errors.map((txt) => <span>{txt.message || null}</span>)}</div>}
          >
            <Button icon="error" minimal intent="danger" />
          </Popover>
          )}
      </>
    );
  }
}
