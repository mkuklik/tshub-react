import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { path, isNil } from 'ramda';
import {
  AnchorButton, Tooltip, Position,
} from '@blueprintjs/core';
import { updateGraphPropsAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
  currentGraphDefSelector,
} from '../../../viewer/selectors/graph';
import { GraphProcessingStage } from '../../../viewer/sagas/graph.constants';


class LegendToggle extends React.Component {
  handleChange = () => {
    const {
      gid, updateGraphProps, enabled,
    } = this.props;
    if (!isNil(gid)) {
      updateGraphProps({
        gid,
        props: { legend: { enabled: !enabled } },
        stage: GraphProcessingStage.GENERATE,
      });
    }
  }

  render() {
    const { gid, enabled } = this.props;
    return (
      <Tooltip
        content="Show/hide legend"
        position={Position.BOTTOM}
        hoverOpenDelay={1000}
      >
        <AnchorButton
          icon="properties"
          disabled={isNil(gid)}
          active={enabled}
          onClick={this.handleChange}
        />
      </Tooltip>
    );
  }
}

LegendToggle.defaultProps = {
  gid: undefined,
  enabled: false,
};

LegendToggle.propTypes = {
  gid: types.string,
  updateGraphProps: types.func.isRequired,
  enabled: types.bool,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  enabled: path(['legend', 'enabled'], currentGraphDefSelector(state)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphProps: updateGraphPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LegendToggle);
