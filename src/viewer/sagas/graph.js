import { takeEvery } from 'redux-saga/effects';
import takeLeadingForFunc from './utils';
import {
  GRAPH_ADD_SERIES,
  GRAPH_ADD_EXPR_SERIES,
  GRAPH_ADD_NAMED_SERIES,
  GRAPH_ADD_REF_SERIES,
  GRAPH_ADD_DATA_SERIES,
  GRAPH_ADD_MANY_REF_SERIES,
  GRAPH_CLEAR_N_ADD_SERIES,
  GRAPH_REMOVE_SERIES,
  GRAPH_REORDER_SERIES,
  GRAPH_CLEAR_SERIES,
  GRAPH_UPDATE,
  GRAPH_CREATE,
  GRAPH_UPDATE_GRAPH_PROPS,
  GRAPH_UPDATE_SERIES_PROPS,
  GRAPH_UPDATE_UI_PROPS,
  CLONE_GRAPH,
  GRAPH_UPDATE_REALTIME,
  GRAPH_UPDATE_RANGE,
  GRAPH_APPLY_UNARY_FUNC,
  GRAPH_APPLY_BINARY_FUNC,
  GRAPH_APPLY_BINARY_OPERATOR,
  GRAPH_UPDATE_SERIES_EXPR,
  GRAPH_CLONE_SERIES,
  GRAPH_SELECT_SERIES,
  GRAPH_DESELECT_SERIES,
  GRAPH_EXPORT_LOCAL,
  GRAPH_FOCUS,
  GRAPH_DELETE_OBJECT,
} from '../actions/graphActions';

import createGraph from './graph.createGraph';
import addManyRefSeries from './graph.addManyRefSeries';
import {
  addSeries,
  addExprSeries,
  addNamedSeries,
  addDataSeries,
  addRefSeries
} from './graph.addSeries';
import clearAddSeries from './graph.clearAddSeries';
import removeSeries from './graph.removeSeries';
import clearSeries from './graph.clearSeries';
import update from './graph.update';
import reorderSeries from './graph.reorderSeries';
import updateSeriesProps from './graph.updateSeriesProps';
import cloneGraph from './graph.cloneGraph';
import updateRealtime from './graph.updateRealtime';
import updateGraphProps from './graph.updateGraphProps';
import applyUnaryFunction from './graph.applyUnaryFunction';
import applyBinaryFunction from './graph.applyBinaryFunction';
import cloneSeries from './graph.cloneSeries';
import updateRange from './graph.updateRange';
import updateGraphUIProps from './graph.updateGraphUIProps';
import selectSeries from './graph.selectSeries';
import deselectSeries from './graph.deselectSeries';
import updateSeriesExpr from './graph.updateSeriesExpr';
import exportGraph from './graph.export';
import applyBinaryOperator from './graph.applyBinaryOperator';
import focus from './graph.focus';
import deleteGraph from './graph.deleteGraph';

export default function* watchGraphActions() {
  yield takeEvery(GRAPH_CREATE, createGraph);
  yield takeEvery(GRAPH_FOCUS, focus);
  yield takeEvery(CLONE_GRAPH, cloneGraph);
  yield takeEvery(GRAPH_ADD_SERIES, addSeries);
  yield takeEvery(GRAPH_ADD_EXPR_SERIES, addExprSeries);
  yield takeEvery(GRAPH_ADD_NAMED_SERIES, addNamedSeries);
  yield takeEvery(GRAPH_ADD_REF_SERIES, addRefSeries);
  yield takeEvery(GRAPH_ADD_DATA_SERIES, addDataSeries);
  yield takeEvery(GRAPH_ADD_MANY_REF_SERIES, addManyRefSeries);
  yield takeEvery(GRAPH_CLEAR_N_ADD_SERIES, clearAddSeries);
  yield takeEvery(GRAPH_REMOVE_SERIES, removeSeries);
  yield takeEvery(GRAPH_CLEAR_SERIES, clearSeries);
  yield takeEvery(GRAPH_REORDER_SERIES, reorderSeries);
  yield takeEvery(GRAPH_UPDATE_GRAPH_PROPS, updateGraphProps);
  yield takeEvery(GRAPH_UPDATE_SERIES_PROPS, updateSeriesProps);
  yield takeEvery(GRAPH_UPDATE_REALTIME, updateRealtime);
  yield takeEvery(GRAPH_UPDATE_RANGE, updateRange);
  yield takeEvery(GRAPH_APPLY_UNARY_FUNC, applyUnaryFunction);
  yield takeEvery(GRAPH_APPLY_BINARY_FUNC, applyBinaryFunction);
  yield takeEvery(GRAPH_APPLY_BINARY_OPERATOR, applyBinaryOperator);
  yield takeEvery(GRAPH_UPDATE_SERIES_EXPR, updateSeriesExpr);
  yield takeEvery(GRAPH_CLONE_SERIES, cloneSeries);
  yield takeEvery(GRAPH_UPDATE_UI_PROPS, updateGraphUIProps);
  yield takeEvery(GRAPH_SELECT_SERIES, selectSeries);
  yield takeEvery(GRAPH_DESELECT_SERIES, deselectSeries);
  yield takeEvery(GRAPH_EXPORT_LOCAL, exportGraph);
  yield takeEvery(GRAPH_DELETE_OBJECT, deleteGraph);
  // main processing pipeline takes leading action for each gid (graph)
  yield takeLeadingForFunc((action) => action.gid)(GRAPH_UPDATE, update);
}
