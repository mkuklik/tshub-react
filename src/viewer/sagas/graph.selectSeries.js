import {
  put,
} from 'redux-saga/effects';
import { saveSelectSeriesAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* selectSeries({ gid, wsid, clear } = {}) {
  /*
  remove series from a graph
  */
  yield put(saveSelectSeriesAction({ gid, wsid, clear }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
}
