import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { seriesSelector } from '../selectors/series';
import { updateSeriesAction } from '../actions/seriesActions';
import { GraphProcessingStage } from './graph.constants';
import { SeriesKind } from './series.constants';
import { createExprSeries } from './series.create';
import { updateGraphAction, saveReplaceSeriesAction } from '../actions/graphActions';
import updateSeriesProps from './graph.updateSeriesProps';
import { reportErrorAction } from '../actions/errorActions';


function* applyBinaryOperator(action) {
  const {
    gid, wsid1, wsid2, operator,
  } = action;

  const series1 = yield select(seriesSelector(wsid1));
  if (isNil(series1)) {
    return;
  }
  const series2 = yield select(seriesSelector(wsid2));
  if (isNil(series2)) {
    return;
  }

  const name = `(${series1.name}) ${operator} (${series2.name})`;
  let exprSeries2;
  if (series2.kind === SeriesKind.data) {
    exprSeries2 = `$({wsid: '${series2.wsid}'})`;
  } else if (series2.kind === SeriesKind.expr) {
    exprSeries2 = series2.expr;
  } else {
    yield put(reportErrorAction({ message: `Unknown series type, ${series2.kind}` }));
    return;
  }

  if (series1.kind === SeriesKind.data) {
    // create a new series
    const expr = `$({wsid: '${series1.wsid}'}) ${operator} (${exprSeries2})`;
    const wsid = yield createExprSeries({ expr, name, realtime: series1.realtime });
    yield put(saveReplaceSeriesAction({ gid, wsid: wsid1, to_wsid: wsid }));
    yield updateSeriesProps({ gid, wsid: wsid1, props: { name } }, false); // update series name in a graph
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
  } else if (series1.kind === SeriesKind.expr) {
    const newSeries = {
      ...series1,
      expr: `(${series1.expr}) ${operator} (${exprSeries2})`,
      name,
      // reset collId and tsid and it is not direct time series from database
      collId: undefined,
      tsid: undefined,
    };
    yield put(updateSeriesAction({ wsid: wsid1, series: newSeries }));
    yield updateSeriesProps({ gid, wsid: wsid1, props: { name } }, false); // update series name in a graph
    yield put(updateGraphAction({ gid, wsid: wsid1, stage: GraphProcessingStage.RESOLVE }));
  } else {
    yield put(reportErrorAction({ message: `Unknown series type, ${series2.kind}` }));
    return;
  }
}

export default applyBinaryOperator;
