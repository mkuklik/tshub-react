import {
  put,
} from 'redux-saga/effects';
import { updateGraphAction, saveGraphUIPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* updateGraphUIProps({ gid, props } = {}) {
  /*
  remove series from a graph
  */
  yield put(saveGraphUIPropsAction({ gid, props }));
  // todo based on props determine whether to resove or generate output
  yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE })); // what if realtime is changed or graph freq etc ???
}
