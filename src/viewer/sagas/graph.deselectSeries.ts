import { put } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { saveDeselectSeriesAction, updateGraphAction } from '../actions/graphActions';
import type { IDeselectSeriesAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* deselectSeries(
  action: IDeselectSeriesAction = {} as IDeselectSeriesAction
): Generator<PutEffect<Action>, void, unknown> {
  /*
  remove series from a graph
  */
  const { gid, wsid } = action.payload;
  yield put(saveDeselectSeriesAction({ gid, wsid }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
} 