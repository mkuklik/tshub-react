import * as R from 'ramda';
import {
  put, select
} from 'redux-saga/effects';
import { saveGraphObjectAction } from '../actions/graphActions';
import { graphSelector } from '../selectors/graph';

export default function* cloneGraph({ gid } = {}) {

  const graph = yield select(graphSelector(gid));

  if (graph === undefined) return undefined;
  const object = R.clone(graph)
  yield put(saveGraphObjectAction({ gid, object }));
}
