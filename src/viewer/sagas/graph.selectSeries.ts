import { put } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { type ISelectSeriesAction, saveSelectSeriesAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';


export default function* selectSeries(action: ISelectSeriesAction): Generator<PutEffect<Action>, void, unknown> {
  /*
  select series in a graph
  */
  const { gid, wsid, clear } = action.payload;
  yield put(saveSelectSeriesAction({ gid, wsid, clear }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
} 