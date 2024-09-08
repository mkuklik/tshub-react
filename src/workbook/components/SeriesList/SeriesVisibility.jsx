import * as React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import types from 'prop-types';

class SeriesVisibility extends React.PureComponent {
  handleShow = () => this.props.updateSeriesProps({
    gid: this.props.gid,
    wsid: this.props.wsid,
    props: { visible: true },
  });

  handleHide = () => this.props.updateSeriesProps({
    gid: this.props.gid,
    wsid: this.props.wsid,
    props: { visible: false },
  });

  render() {
    const { visible } = this.props;
    return (
      <>
        {visible && (
          <Button onClick={this.handleHide} minimal>
            <Icon icon="eye-on" />
          </Button>
        )}
        {!visible && (
          <Button onClick={this.handleShow} minimal>
            <Icon icon="eye-off" />
          </Button>
        )}
      </>
    );
  }
}

SeriesVisibility.defaultProps = {};

SeriesVisibility.propTypes = {
  updateSeriesProps: types.func.isRequired,
  visible: types.bool.isRequired,
  wsid: types.string.isRequired,
  gid: types.string.isRequired,
};

export default SeriesVisibility;
