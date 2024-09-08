import { isNil } from 'ramda';
import {
  put, select,
} from 'redux-saga/effects';
import { saveDeleteGraphObjectAction, saveCurrentGraphIdAction } from '../actions/graphActions';
import { currentGraphGidSelector } from '../selectors/graph';
import { reportErrorAction } from '../actions/errorActions';

export default function* deleteGraph({ gid } = {}) {
  if (isNil(gid)) {
    yield put(reportErrorAction('deleteGraph: gid is not specified'));
  }
  const curr = yield select(currentGraphGidSelector);
  if (curr === gid) {
    yield put(saveCurrentGraphIdAction({ gid: undefined }));
  }
  yield put(saveDeleteGraphObjectAction({ gid }));
}
