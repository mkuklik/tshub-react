import {
  put,
} from 'redux-saga/effects';
import { saveDeselectSeriesAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* deselectSeries({ gid, wsid } = {}) {
  /*
  remove series from a graph
  */
  yield put(saveDeselectSeriesAction({ gid, wsid }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
}
