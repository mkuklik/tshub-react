import {
  put, select,
} from 'redux-saga/effects';
import { reject, isNil } from 'ramda';
import { GraphProcessingStage } from './graph.constants';
import { defaultSeriesDefinition } from './graph.defaults';
import {
  appendSeriesDefAction,
  updateGraphAction,
  saveSelectSeriesAction,
} from '../actions/graphActions';

import { graphSelector, currentGraphGidSelector } from '../selectors/graph';
import { addErrorAction } from '../actions/errorActions';
import { createRefSeries, createExprSeries, createDataSeries } from './series.create';

const defaultColors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];


export function* addRefSeries(action, doUpdate) {
  const {
    gid, name, tsid, collId, realtime,
  } = action;
  const wsid = yield createRefSeries({
    name, tsid, collId, realtime,
  });
  yield addSeries({ gid, wsid }, doUpdate);
}


export function* addNamedSeries(action, doUpdate) {
  let {
    gid, name, tsName, collName, spaceName, realtime,
  } = action;

  const expr = `$${tsName}.${collName}.${spaceName}`;
  if (isNil(name)) name = expr;
  const wsid = yield createExprSeries({ expr, name, realtime });
  yield addSeries({ gid, wsid }, doUpdate);
}


export function* addExprSeries(action, doUpdate) {
  let {
    gid, name, expr, realtime,
  } = action;

  if (isNil(name)) name = expr;
  const wsid = yield createExprSeries({ expr, name, realtime });
  yield addSeries({ gid, wsid }, doUpdate);
}


export function* addDataSeries(action, doUpdate) {
  let {
    gid, name, freq, fparam, dtype, dparam, units, data, realtime,
  } = action;

  if (isNil(name)) name = 'unnamed';
  const wsid = yield createDataSeries({
    name, freq, fparam, dtype, dparam, units, data, realtime,
  });
  yield addSeries({ gid, wsid }, doUpdate);
}


export function* addSeries(action, doUpdate) {
  const { wsid } = action;
  let { gid } = action;
  if (isNil(doUpdate)) doUpdate = true;
  // get up graph

  if (gid === undefined) {
    gid = yield select(currentGraphGidSelector);
    if (gid === undefined) {
      // TODO handle error or create a new graph
      return;
    }
  }

  const graph = yield select(graphSelector(gid));

  // const old = yield select(graphSelector(gid));
  if (graph === undefined) {
    // error graph doesn't exists
    // TODO dispatch error
    yield put(addErrorAction({
      message: "failed to add series; graph is not specified or default graph doesn't exists.",
    }));
    return;
  }

  // pick default color
  // colors already used by other series on this graph
  const alreadyUsedColors = graph.definition.series.map((x) => x.color);
  const availableColors = defaultColors.filter((x) => !alreadyUsedColors.includes(x));
  // if there is no available colors use the default
  const color = availableColors[0] || '#7cb5ec';

  const series = {
    ...defaultSeriesDefinition(),
    ...reject(isNil,
      {
        wsid,
        color,
      }),
  };

  // save series to graph.definition
  yield put(appendSeriesDefAction({ gid, series }));
  yield put(saveSelectSeriesAction({ gid, wsid, clear: true }));
  if (doUpdate) {
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
  }
}

export default addSeries;
