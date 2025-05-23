import { put } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { type IReorderSeriesAction, saveReorderSeriesAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';


export default function* reorderSeries(action: IReorderSeriesAction): Generator<PutEffect<Action>, void, unknown> {
  /*
  reorder series in a graph
  */
  const { gid, wsid, pos } = action.payload;
  yield put(saveReorderSeriesAction({ gid, wsid, pos: pos || 0 }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
} 