import { put } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { exportGraphAction } from '../actions/graphActions';
import type { IExportGraphAction } from '../actions/graphActions';

export default function* exportGraph(
  action: IExportGraphAction = {} as IExportGraphAction
): Generator<PutEffect<Action>, void, unknown> {
  const { gid } = action.payload;
  yield put(exportGraphAction({ gid }));
} 