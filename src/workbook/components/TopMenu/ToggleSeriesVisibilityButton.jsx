import * as React from 'react';
import {
  AnchorButton,
  Tooltip,
  Position,
} from '@blueprintjs/core';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil, filter, path } from 'ramda';
import { updateSeriesPropsAction } from '../../../viewer/actions/graphActions';
import { currentGraphSelector, currentGraphGidSelector, currentGraphSeriesDefSelector } from '../../../viewer/selectors/graph';

class ToggleSeriesVisibilityButton extends React.PureComponent {
  handleShow = () => {
    const { gid, wsid, updateSeriesProps } = this.props;
    updateSeriesProps({
      gid,
      wsid,
      props: { visible: true },
    });
  }

  handleHide = () => {
    const { gid, wsid, updateSeriesProps } = this.props;
    updateSeriesProps({
      gid,
      wsid,
      props: { visible: false },
    });
  }

  render() {
    const { visible, disabled } = this.props;
    return (
      <Tooltip
        content="Show/hide selected series"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          disabled={disabled}
          onClick={visible ? this.handleHide : this.handleShow}
          icon={visible ? 'eye-on' : 'eye-off'}
        />
      </Tooltip>
    );
  }
}

ToggleSeriesVisibilityButton.defaultProps = {
  gid: undefined,
  wsid: undefined,
  visible: undefined,
};

ToggleSeriesVisibilityButton.propTypes = {
  gid: types.string,
  wsid: types.string,
  visible: types.bool,
  disabled: types.bool.isRequired,
  updateSeriesProps: types.func.isRequired,
};

const mapStateToProps = (state) => {
  const graph = currentGraphSelector(state);
  const seriesDef = currentGraphSeriesDefSelector(state);
  const selected = isNil(graph) ? [] : graph.ui.selected;
  const wsid = (selected.length === 1) ? selected[0] : undefined;
  const visible = path([0, 'visible'], filter((x) => x.wsid === wsid, seriesDef));
  const disabled = selected.length !== 1;
  return {
    gid: currentGraphGidSelector(state),
    disabled,
    visible,
    wsid,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSeriesProps: updateSeriesPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSeriesVisibilityButton);
