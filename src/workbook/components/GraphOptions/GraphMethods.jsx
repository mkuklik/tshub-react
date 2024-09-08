import React from 'react';
import types from 'prop-types';
import {
  isNil, path, values,
} from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateGraphPropsAction } from '../../../viewer/actions/graphActions';
import { currentGraphDefSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';
import Select from './Select';
import {
  GraphFrequencyMethod,
  ToHigherFrequencyMethod,
  ToLowerFrequencyMethod,
  MissingValueMethod,
  GraphProcessingStage,
  PartialPeriodsMethod,
  SeriesMergeMethod,
} from '../../../viewer/sagas/graph.constants';

const Container = styled.div`
  padding: 10px;
`;

const graphFrequencyMethodOptions = values(GraphFrequencyMethod).map((x) => [x, x]);
const toLowerFrequencyMethodOptions = values(ToLowerFrequencyMethod).map((x) => [x, x]);
const toHigherFrequencyMethodOptions = values(ToHigherFrequencyMethod).map((x) => [x, x]);
const missingValueMethodOptions = values(MissingValueMethod).map((x) => [x, x]);
const partialPeriodsMethodOptions = values(PartialPeriodsMethod).map((x) => [x, x]);
const seriesMergeMethodOptions = values(SeriesMergeMethod).map((x) => [x, x]);
class GraphMethods extends React.PureComponent {
  handlePropsUpdate = (stage) => (props) => {
    const { gid, updateGraphProps } = this.props;
    updateGraphProps({ gid, props, stage: stage || GraphProcessingStage.TRANSFORM });
  }

  render() {
    const {
      gid,
      graphFrequencyMethod,
      missingValueMethod,
      partialPeriodsMethod,
      seriesMergeMethod,
      toLowerFrequencyMethod,
      toHigherFrequencyMethod,
    } = this.props;
    
    const disabled = isNil(gid);
    return (
      <Container>
        <Select
          gid={gid}
          disabled={disabled}
          label="Graph Frequency"
          section="graphFrequencyMethod"
          value={graphFrequencyMethod}
          options={graphFrequencyMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.DETERMINE)}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="To Lower Frequency"
          section="toLowerFrequencyMethod"
          value={toLowerFrequencyMethod}
          options={toLowerFrequencyMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.TRANSFORM)}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="To Higher Frequency"
          section="toHigherFrequencyMethod"
          value={toHigherFrequencyMethod}
          options={toHigherFrequencyMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.TRANSFORM)}
        />
        <Select
          gid={gid}
          disabled={true} //{disabled}
          label="Missing Value"
          section="missingValueMethod"
          value={missingValueMethod}
          options={missingValueMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.TRANSFORM)}
        />
        <Select
          gid={gid}
          disabled={true} //{disabled}
          label="Partial Periods"
          section="partialPeriodsMethod"
          value={partialPeriodsMethod}
          options={partialPeriodsMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.TRANSFORM)}
        />
        <Select
          gid={gid}
          disabled={true} //{disabled}
          label="Series Merge"
          section="seriesMergeMethod"
          value={seriesMergeMethod}
          options={seriesMergeMethodOptions}
          handlePropsUpdate={this.handlePropsUpdate(GraphProcessingStage.TRANSFORM)}
        />
      </Container>
    );
  }
}


GraphMethods.defaultProps = {
  gid: undefined,
  graphFrequencyMethod: undefined,
  missingValueMethod: undefined,
  partialPeriodsMethod: undefined,
  seriesMergeMethod: undefined,
  toLowerFrequencyMethod: undefined,
  toHigherFrequencyMethod: undefined,
};

GraphMethods.propTypes = {
  gid: types.string,
  updateGraphProps: types.func.isRequired,
  graphFrequencyMethod: types.string,
  missingValueMethod: types.string,
  partialPeriodsMethod: types.string,
  seriesMergeMethod: types.string,
  toLowerFrequencyMethod: types.string,
  toHigherFrequencyMethod: types.string,
};


const mapStateToProps = (state, ownProps) => {
  const graph = currentGraphDefSelector(state);
  return ({
    gid: currentGraphGidSelector(state),
    graphFrequencyMethod: path(['graphFrequencyMethod'], graph),
    missingValueMethod: path(['missingValueMethod'], graph),
    partialPeriodsMethod: path(['partialPeriodsMethod'], graph),
    seriesMergeMethod: path(['seriesMergeMethod'], graph),
    toLowerFrequencyMethod: path(['toLowerFrequencyMethod'], graph),
    toHigherFrequencyMethod: path(['toHigherFrequencyMethod'], graph),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphProps: updateGraphPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphMethods);
