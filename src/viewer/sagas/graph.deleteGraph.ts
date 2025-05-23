import { isNil } from 'ramda';
import {
  put, select,
} from 'redux-saga/effects';
import type { PutEffect, SelectEffect } from 'redux-saga/effects';
import { saveDeleteGraphObjectAction, saveCurrentGraphIdAction, type IDeleteGraphObjectAction } from '../actions/graphActions';
import { currentGraphGidSelector } from '../selectors/graph';
import { reportErrorAction } from '../actions/errorActions';


export default function* deleteGraph(action: IDeleteGraphObjectAction): Generator<PutEffect<any> | SelectEffect, void, unknown> {
  const { gid } = action.payload;
  if (isNil(gid)) {
    yield put(reportErrorAction('deleteGraph: gid is not specified'));
  }
  const curr = yield select(currentGraphGidSelector);
  if (curr === gid) {
    yield put(saveCurrentGraphIdAction({ gid: undefined }));
  }
  yield put(saveDeleteGraphObjectAction({ gid }));
}
