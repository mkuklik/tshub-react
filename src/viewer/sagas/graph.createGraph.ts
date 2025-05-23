import { put, takeEvery } from "redux-saga/effects";
import type { PutEffect, ForkEffect } from "redux-saga/effects";
import type { Action } from "redux";
import ObjectID from "bson-objectid";
import { saveNewGraphAction, updateGraphAction, GRAPH_CREATE } from "../actions/graphActions";
import type { ICreateGraphAction, IGraphCreateAction } from "../actions/graphActions";
import { GraphProcessingStage } from "./graph.constants";

function* createGraph(
  action: ICreateGraphAction = {} as ICreateGraphAction,
  doUpdate = true
): Generator<PutEffect<Action>, string, unknown> {
  console.log("createGraph", action);
  const { freq, title, subtitle, legend } = action.payload || {};
  const gid = action.payload?.gid || ObjectID().toHexString();
  yield put(saveNewGraphAction({ gid, freq, title, subtitle, legend }));
  if (doUpdate) {
    yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
  }
  return gid;
}

export default createGraph;

export function* watchcreateGraphAction(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(GRAPH_CREATE, createGraph);
} 