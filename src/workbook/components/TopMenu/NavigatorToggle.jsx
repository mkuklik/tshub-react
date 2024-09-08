import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { path, isNil } from 'ramda';
import {
  AnchorButton, Tooltip, Position,
} from '@blueprintjs/core';
import { updateGraphUIPropsAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphUI,
  currentGraphGidSelector,
} from '../../../viewer/selectors/graph';
import { GraphUIType } from '../../../viewer/types/Graph';

class NavigatorToggle extends React.Component {
  handleChange = () => {
    const { gid, ui, updateGraphUIProps } = this.props;
    updateGraphUIProps({ gid, props: { navigator: !ui.navigator } });
  };

  render() {
    const { gid } = this.props;
    const navigator = path(['ui', 'navigator'], this.props);
    return (
      <Tooltip
        content="New graph"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="swap-horizontal"
          disabled={isNil(gid)}
          active={navigator}
          onClick={this.handleChange}
        />
      </Tooltip>
    );
  }
}

NavigatorToggle.defaultProps = {
  gid: undefined,
  ui: undefined,
};

NavigatorToggle.propTypes = {
  gid: types.string,
  ui: GraphUIType,
  updateGraphUIProps: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  ui: currentGraphUI(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    updateGraphUIProps: updateGraphUIPropsAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorToggle);
