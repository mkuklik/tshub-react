import {
  put,
} from 'redux-saga/effects';
import ObjectID from 'bson-objectid';
import { isNil } from 'ramda';
import {
  saveNewGraphAction, updateGraphAction,
} from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

function* createGraph(action = {}, doUpdate) {
  const { freq, title, subtitle, legend } = action;
  let { gid } = action;
  if (isNil(gid)) {
    gid = ObjectID().toHexString();
  }
  yield put(saveNewGraphAction({ gid, freq, title, subtitle, legend }));
  if (isNil(doUpdate)) doUpdate = true;
  if (doUpdate) {
    yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
  }
  return gid;
}

export default createGraph;
