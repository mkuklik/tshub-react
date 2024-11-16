import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil, find, path } from 'ramda';
import styled from 'styled-components';

import { ResizeSensor } from '@blueprintjs/core';

import SeriesListTable from './SeriesListTable';
import SeriesEditor from './SeriesEditor';
import {
  isFuncEditorOpenSelector,
  selectedSeriesSelector,
  funcEditorErrorsSelector,
} from '../../selectors/uiSelectors';
import {
  currentGraphSelector,
  currentGraphSeriesDefSelector,
  currentGraphGidSelector,
} from '../../../viewer/selectors/graph';
import { closeFuncEditorAction, confirmExprFuncEditorAction } from '../../action/uiActions';
import { seriesDefListSelector } from '../../../viewer/selectors/series';
import { SeriesType } from '../../../viewer/types/Series';
import { SeriesDefinitionType } from '../../../viewer/types/Graph';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

const StyledSeriesListTable = styled(SeriesListTable)`
  grid-area: 1 / 1;
  z-index: 1;
`;

const StyledSeriesEditor = styled(SeriesEditor)`
  grid-area: 1/1;
  z-index: ${(props) => ((props.isFuncEditorOpen) ? 3 : 0)};
`;

class SeriesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
    };
  }

  handleResize = (entries) => {
    if (!isNil(entries) && entries.length > 0) {
      this.setState({ height: entries[0].contentRect.height });
    }
  }

  render() {
    const {
      isFuncEditorOpen, closeFuncEditor, confirmExprFuncEditor,
      gid, wsid, allSeriesDef, graphSeries, funcEditorErrors,
    } = this.props;
    const color = path(['color'], find((x) => x.wsid === wsid, graphSeries));
    const series = allSeriesDef[wsid];
    const name = isNil(series) ? null : series.name || null;
    const expr = isNil(series) ? null : series.expr || null;

    return (
      <ResizeSensor onResize={this.handleResize}>
        <Container>
          <StyledSeriesListTable />
          <StyledSeriesEditor
            key={expr} // required for reinitiation of state in when expr is changed
            expr={expr}
            gid={gid}
            wsid={wsid}
            name={name}
            color={color}
            errors={funcEditorErrors}
            closeFuncEditor={closeFuncEditor}
            confirmExprFuncEditor={confirmExprFuncEditor}
            // style={{ gridArea: '1/1', zIndex: (isFuncEditorOpen) ? 3 : 0 }}
            isFuncEditorOpen={isFuncEditorOpen}
            height={this.state.height}
          />
        </Container>
      </ResizeSensor>
    );
  }
}

SeriesList.defaultProps = {
  gid: undefined,
  wsid: undefined,
  funcEditorErrors: [],
};

SeriesList.propTypes = {
  isFuncEditorOpen: types.bool.isRequired,
  closeFuncEditor: types.func.isRequired,
  confirmExprFuncEditor: types.func.isRequired,
  gid: types.string,
  wsid: types.string,
  graphSeries: types.arrayOf(SeriesDefinitionType).isRequired,
  funcEditorErrors: types.arrayOf(types.string),
  allSeriesDef: types.objectOf(SeriesType).isRequired,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  graph: currentGraphSelector(state),
  graphSeries: currentGraphSeriesDefSelector(state),
  wsid: selectedSeriesSelector(state),
  isFuncEditorOpen: isFuncEditorOpenSelector(state),
  funcEditorErrors: funcEditorErrorsSelector(state),
  allSeriesDef: seriesDefListSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeFuncEditor: closeFuncEditorAction,
  confirmExprFuncEditor: confirmExprFuncEditorAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SeriesList);
