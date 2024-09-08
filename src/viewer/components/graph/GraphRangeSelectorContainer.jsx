import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil } from 'ramda';
import { updateRangeAction } from '../../actions/graphActions';
import {
  currentGraphDefSelector,
  currentGraphSeriesDeterminedFreqSelector,
} from '../../selectors/graph';
import { GraphDefinitionType } from '../../types/Graph';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import GraphRangeSelector from './GraphRangeSelector';

class GraphRangeSelectorContainer extends React.PureComponent {
  handleUpdateRange = (action) => {
    const { updateRange, afterClick } = this.props;
    updateRange(action);
    if (!isNil(afterClick)) afterClick();
  }

  render() {
    const {
      gid, graphDef, graphFreq,
    } = this.props;
    const isDisabled = isNil(gid);
    return (
      <GraphRangeSelector
        key={gid}
        gid={gid}
        disabled={isDisabled}
        updateRange={this.handleUpdateRange}
        rangeStart={graphDef.rangeStart}
        rangeEnd={graphDef.rangeEnd}
        freq={graphFreq}
      />
    );
  }
}

GraphRangeSelectorContainer.defaultProps = {
  gid: undefined,
  afterClick: undefined,
  graphFreq: undefined,
};

GraphRangeSelectorContainer.propTypes = {
  gid: types.string,
  updateRange: types.func.isRequired,
  graphDef: GraphDefinitionType.isRequired,
  graphFreq: types.string,
  afterClick: types.func,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graphDef: currentGraphDefSelector(state),
  graphFreq: currentGraphSeriesDeterminedFreqSelector(state),
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators(
  {
    updateRange: updateRangeAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphRangeSelectorContainer);
