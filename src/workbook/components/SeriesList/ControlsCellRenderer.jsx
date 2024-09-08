import React from 'react';
// import { Icon, Button } from '@blueprintjs/core';
import SeriesVisibility from './SeriesVisibility';
import SeriesRemoveButton from './SeriesRemoveButton';

export default class ControlsCellRenderer extends React.PureComponent {
  render() {
    const { removeSeries, updateSeriesProps, gid } = this.props.context;
    const { data } = this.props;

    return (
      <span>
        <SeriesVisibility
          gid={gid}
          wsid={data.wsid}
          visible={data.visible}
          updateSeriesProps={updateSeriesProps}
        />
        <SeriesRemoveButton
          gid={gid}
          wsid={data.wsid}
          removeSeries={removeSeries}
        />
        {/* <Button onClick={handleRemove(data.wsid)} minimal>
          <Icon icon="small-cross" />
        </Button> */}
      </span>
    );
  }
}
