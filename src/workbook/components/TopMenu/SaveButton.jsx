import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  AnchorButton, Tooltip, Position,
} from '@blueprintjs/core';
import {
  saveWorkbookAction,
} from '../../action/workbookActions';

class SaveButton extends React.PureComponent {
  render() {
    return (
      <Tooltip
        content="Save workbook"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="floppy-disk"
          onClick={this.props.saveWorkbook}
        />
      </Tooltip>
    );
  }
}

SaveButton.defaultProps = {};

SaveButton.propTypes = {
  saveWorkbook: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  saveWorkbook: saveWorkbookAction,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(SaveButton);
