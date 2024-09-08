import * as R from 'ramda';
import {
  put, select
} from 'redux-saga/effects';
import { saveGraphPropsAction, updateGraphAction } from '../actions/graphActions';
import { graphSelector, currentGraphGidSelector } from '../selectors/graph';
import { GraphProcessingStage } from './graph.constants';

export default function* updateRange({ gid, rangeStart, rangeEnd } = {}) {

  let _gid = (gid === undefined) ? yield select(currentGraphGidSelector) : gid

  const graph = yield select(graphSelector(_gid));

  if (graph === undefined) return undefined;

  yield put(saveGraphPropsAction({ gid: _gid, props: { rangeStart, rangeEnd } }));
  yield put(updateGraphAction({ gid: _gid, wsid: undefined, stage: GraphProcessingStage.TRANSFORM }));
}
