import { put } from 'redux-saga/effects';
import { clearSeriesDefAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

interface ClearSeriesParams {
  gid: string;
}

export default function* clearSeries(
  { gid }: ClearSeriesParams,
  doUpdate = true
): Generator {
  /*
  remove series from a graph
  */
  yield put(clearSeriesDefAction({ gid }));
  
  if (doUpdate) {
    yield put(updateGraphAction({ gid, wsid: '', stage: GraphProcessingStage.GENERATE }));
  }
} 