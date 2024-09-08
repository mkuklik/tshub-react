import {
  put,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { updateGraphAction, saveSeriesPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* updateSeriesProps({ gid, wsid, props } = {}, doUpdate) {
  /*
  remove series from a graph
  */
  if (isNil(doUpdate)) doUpdate = true;

  yield put(saveSeriesPropsAction({ gid, wsid, props }));
  if (doUpdate) {
    yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
  }
}
