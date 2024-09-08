import React from 'react';
import types from 'prop-types';
import {
  isNil, path, values,
} from 'ramda';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styled from 'styled-components';
// import { updateSeriesPropsAction } from '../../../viewer/actions/graphActions';
// import { currentGraphDefSelector } from '../../../viewer/selectors/graph';
import Select from '../GraphOptions/Select';
import {
  ToHigherFrequencyMethod,
  ToLowerFrequencyMethod,
  MissingValueMethod,
  PartialPeriodsMethod,
} from '../../../viewer/sagas/graph.constants';
import { SeriesDefinitionType } from '../../../viewer/types/Graph';

const Container = styled.div`
  padding: 10px;
`;

const toLowerFrequencyMethodOptions = [['default', undefined], ...values(ToLowerFrequencyMethod).map((x) => [x, x])];
const toHigherFrequencyMethodOptions = [['default', undefined], ...values(ToHigherFrequencyMethod).map((x) => [x, x])];
const missingValueMethodOptions = [['default', undefined], ...values(MissingValueMethod).map((x) => [x, x])];
const partialPeriodsMethodOptions = [['default', undefined], ...values(PartialPeriodsMethod).map((x) => [x, x])];


class SeriesMethods extends React.PureComponent { 

  render() {
    const {
      gid,
      wsid,
      series,
      updateSeriesProps,
    } = this.props;

    const disabled = isNil(gid);

    const missingValueMethod = path(['missingValueMethod'], series);
    const partialPeriodsMethod = path(['partialPeriodsMethod'], series);
    const toLowerFrequencyMethod = path(['toLowerFrequencyMethod'], series);
    const toHigherFrequencyMethod = path(['toHigherFrequencyMethod'], series);

    return (
      <Container>
        <Select
          gid={gid}
          wsid={wsid}
          disabled={disabled}
          label="To Lower Frequency"
          section="toLowerFrequencyMethod"
          value={toLowerFrequencyMethod}
          options={toLowerFrequencyMethodOptions}
          handlePropsUpdate={updateSeriesProps}
        />
        <Select
          gid={gid}
          wsid={wsid}
          disabled={disabled}
          label="To Higher Frequency"
          section="toHigherFrequencyMethod"
          value={toHigherFrequencyMethod}
          options={toHigherFrequencyMethodOptions}
          handlePropsUpdate={updateSeriesProps}
        />
        <Select
          gid={gid}
          wsid={wsid}
          disabled={true} //{disabled}
          label="Missing Value"
          section="missingValueMethod"
          value={missingValueMethod}
          options={missingValueMethodOptions}
          handlePropsUpdate={updateSeriesProps}
        />
        <Select
          gid={gid}
          wsid={wsid}
          disabled={true} //{disabled}
          label="Partial Periods"
          section="partialPeriodsMethod"
          value={partialPeriodsMethod}
          options={partialPeriodsMethodOptions}
          handlePropsUpdate={updateSeriesProps}
        />
      </Container>
    );
  }
}


SeriesMethods.defaultProps = {
  gid: undefined,
  wsid: undefined,
  series: {},
};

SeriesMethods.propTypes = {
  gid: types.string,
  wsid: types.string,
  updateSeriesProps: types.func.isRequired,
  series: SeriesDefinitionType,
};


// const mapStateToProps = (state, ownProps) => {
//   const graph = currentGraphDefSelector(state);
//   return ({
//     // missingValueMethod: path(['missingValueMethod'], graph),
//     // partialPeriodsMethod: path(['partialPeriodsMethod'], graph),
//     // toLowerFrequencyMethod: path(['toLowerFrequencyMethod'], graph),
//     // toHigherFrequencyMethod: path(['toHigherFrequencyMethod'], graph),
//   });
// };

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   updateSeriesProps: updateSeriesPropsAction,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(SeriesMethods);
export default SeriesMethods;
