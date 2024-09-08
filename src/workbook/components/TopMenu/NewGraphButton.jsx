import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  AnchorButton, Tooltip, Position,
} from '@blueprintjs/core';
import { workbookAddNewGraphTabAction } from '../../action/workbookActions';

class NewGraphButton extends React.PureComponent {
  render() {
    const { workbookAddNewGraphTab } = this.props;
    return (
      <Tooltip
        content="New graph"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="chart"
          onClick={() => workbookAddNewGraphTab()}
        />
      </Tooltip>
    );
  }
}

NewGraphButton.defaultProps = {};

NewGraphButton.propTypes = {
  workbookAddNewGraphTab: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  workbookAddNewGraphTab: workbookAddNewGraphTabAction,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(NewGraphButton);
