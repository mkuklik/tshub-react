import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  Tooltip,
  Menu,
  MenuItem,
  Popover,
  Position,
  AnchorButton,
} from '@blueprintjs/core';
import {
  switchGraphLayoutsAction,
} from '../../action/workbookActions';
import { graphLayouts } from '../../layouts/GraphLayouts';
import { activeLayoutSelector } from '../../selectors/workbookSelectors';
import {
  FORTH_LAYOUT,
  FIRST_LAYOUT,
  SECOND_LAYOUT,
  THIRD_LAYOUT,
} from '../../layouts/definitions';

const LayoutNames = {
  [FIRST_LAYOUT]: '1x1',
  [SECOND_LAYOUT]: '2x1',
  [THIRD_LAYOUT]: '1x2',
  [FORTH_LAYOUT]: '2x2',
};

class LayoutMenuButton extends React.PureComponent {
  render() {
    const { switchGraphLayouts, activeLayout } = this.props;
    const menu = (
      <Menu>
        {graphLayouts.map((graphLayout, index) => (
          <MenuItem
            active={index === activeLayout}
            text={LayoutNames[graphLayout.id]}
            onClick={() => switchGraphLayouts(index)}
            key={index}
          />
        ))}
      </Menu>
    );
    return (
      <Popover content={menu} position={Position.BOTTOM}>
        <Tooltip
          content="Change layout of graph workspace"
          position={Position.BOTTOM}
          hoverOpenDelay={1000}
        >
          <AnchorButton icon="layout-grid" />
        </Tooltip>

      </Popover>
    );
  }
}

LayoutMenuButton.defaultProps = {};

LayoutMenuButton.propTypes = {
  switchGraphLayouts: types.func.isRequired,
  activeLayout: types.number.isRequired,
};

const mapStateToProps = (state) => ({
  activeLayout: activeLayoutSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  switchGraphLayouts: switchGraphLayoutsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenuButton);
