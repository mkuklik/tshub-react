/* eslint-disable no-restricted-syntax */
import {
  put,
  select,
  fork,
} from 'redux-saga/effects';
import moment from 'moment';
import * as R from 'ramda';
import {
  updateGraphStatusAction,
  addGraphErrorsAction,
  clearGraphErrorsAction,
} from '../actions/graphActions';
// import { updateTableAction } from '../actions/tableActions';
import {
  GraphStatus,
  GraphProcessingStage,
} from './graph.constants';
import { SeriesStatus } from './series.constants';
// import resolveSeries from './graph.resolveSeries';
import resolve from './series.resolve';
import generateGraph from './graph.generateGraph';
import determineGraphFreq from './graph.determineGraphFreq';
import transformSeries from './graph.transformSeries';
import { graphSelector } from '../selectors/graph';
import { resolvedSeriesSelector } from '../selectors/series';
import updateTable from './table.updateTable';
import { resolveSeriesAction } from '../actions/seriesActions';
import type { IGraphType } from '../types/TGraph';
import type { IGraphState } from '../reducers/graphsReducer.ts.old';
import type { IGraphUpdateAction } from '../actions/graphActions';


function* update(action: IGraphUpdateAction): Generator<GraphUpdateEffect, void, IGraphState> {
  console.log("graph.update", action);
  const { gid, wsid } = action.payload;
  let { stage } = action.payload;
  let status = GraphStatus.UPDATING;

  yield put(updateGraphStatusAction({ gid, status }));
  yield put(clearGraphErrorsAction({ gid }));

  const graph: IGraphType | undefined = yield select(graphSelector(gid));

  if (!graph || !graph.definition) {
    // TODO error ???
    return;
  }

  if (stage === GraphProcessingStage.RESOLVE || stage === undefined) {
    // loop over series and be smart, which one to update
    // skip series that were already evaluated
    const toResolve = (wsid === undefined)
      ? graph.definition.series
      : R.filter((x: { wsid: string }) => x.wsid === wsid, graph.definition.series);

    // realtime
    let realtime = graph.definition.realtime;
    if (realtime === undefined) realtime = moment.utc();

    // resolve series
    for (const s of toResolve) {
      yield* resolve(resolveSeriesAction({ wsid: s.wsid, realtime }));
    }
    // reset stage in order to process remaining stages
    stage = undefined;
  }

  // if (status !== GraphStatus.ERROR
    // && (stage === GraphProcessingStage.DETERMINE || stage === undefined)) {
  if (stage === GraphProcessingStage.DETERMINE || stage === undefined) {
    yield* determineGraphFreq(gid);
    // TODO handle errors
    // yield put(saveGraphFreqAction({ gid, freq }));
    stage = undefined;
  }

  //
  // TRANSFORMATION
  // converts all series to determined frequency
  //

  // if (status !== GraphStatus.ERROR
  //   && (stage === GraphProcessingStage.TRANSFORM || stage === undefined)) {
  if (stage === GraphProcessingStage.TRANSFORM || stage === undefined) {
    yield* transformSeries(gid);
    stage = undefined;
    // update table
  }

  // update table
  if (status !== GraphStatus.ERROR || stage === GraphProcessingStage.GENERATE || stage === undefined) {
    // yield put(updateTableAction);
    yield fork(updateTable);
  }
  // TODO propagate error to tableAction !!! error should be displayed in the header

  //
  // GENERATE OUTPUT
  // generate Highcharts option object, which is directly pickedup by the component
  //

  if (stage === GraphProcessingStage.GENERATE || stage === undefined) {
    yield* generateGraph({ gid });
    stage = undefined;
  }

  // check for errors in resolved series
  for (const series of graph.definition.series) {
    const rs: IResolvedSeries | undefined = yield select(resolvedSeriesSelector(series.wsid));

    if (R.isNil(rs)) continue;

    if (rs.status === SeriesStatus.ERROR) {
      const errors: IGraphError[] = rs.errors.map((x) => ({
        wsid: rs.wsid,
        message: x,
        stage: GraphProcessingStage.RESOLVE,
      }));
      yield put(addGraphErrorsAction({
        gid,
        errors,
      }));
      status = GraphStatus.ERROR;
    }
  }

  // todo check for errors in transformations

  status = GraphStatus.READY;

  console.log("graph.update end updateGraphStatusAction", gid, status);
  yield put(updateGraphStatusAction({ gid, status }));
}

export default update;
