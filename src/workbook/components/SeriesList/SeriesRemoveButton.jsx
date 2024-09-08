import * as React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import types from 'prop-types';

class SeriesRemoveButton extends React.PureComponent {
  handleRemove = () => {
    const { gid, wsid, removeSeries } = this.props;
    removeSeries({ gid, wsid });
  };

  render() {
    return (
      <Button onClick={this.handleRemove} minimal>
        <Icon icon="small-cross" />
      </Button>
    );
  }
}

SeriesRemoveButton.defaultProps = {};

SeriesRemoveButton.propTypes = {
  gid: types.string.isRequired,
  wsid: types.string.isRequired,
  removeSeries: types.func.isRequired,
};

export default SeriesRemoveButton;
