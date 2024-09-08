import {
  put,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { clearSeriesDefAction, updateGraphAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* clearSeries({ gid } = {}, doUpdate) {
  /*
  remove series from a graph
  */
  if (isNil(doUpdate)) doUpdate=true;
  
  yield put(clearSeriesDefAction({ gid }));
  
  if (doUpdate) {
    yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
  }
}
