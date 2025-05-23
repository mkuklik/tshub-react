import {
  put,
} from 'redux-saga/effects';
import { updateGraphAction, saveGraphPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* updateGraphProps({ gid, props, stage } = {}) {
  /*
  remove series from a graph
  */
  yield put(saveGraphPropsAction({ gid, props }));
  // todo based on props determine whether to resove or generate output
  yield put(updateGraphAction({ gid, stage: stage || GraphProcessingStage.RESOLVE })); // what if realtime is changed or graph freq etc ???
}
