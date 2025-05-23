import {
  put,
} from 'redux-saga/effects';
import { updateGraphAction, saveGraphUIPropsAction, type IUpdateGraphUIPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';
import type { IGraphUIType } from '../types/TGraph';


export default function* updateGraphUIProps(action: IUpdateGraphUIPropsAction): Generator<any, void, any> {
  /*
  update graph UI properties
  */
  const { gid, props } = action.payload;
  if (gid) {
    yield put(saveGraphUIPropsAction({ gid, props }));
    // todo based on props determine whether to resolve or generate output
    yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE })); // what if realtime is changed or graph freq etc ???
  }
} 