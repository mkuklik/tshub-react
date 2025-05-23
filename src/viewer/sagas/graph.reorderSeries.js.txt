import {
  put,
} from 'redux-saga/effects';
import { saveReorderSeriesAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* reorderSeries({ gid, wsid, pos } = {}) {
  /*
  remove series from a graph
  */
  yield put(saveReorderSeriesAction({ gid, wsid, pos }));
  yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
}
