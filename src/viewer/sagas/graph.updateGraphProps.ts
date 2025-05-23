import {
  put,
} from 'redux-saga/effects';
import { updateGraphAction, saveGraphPropsAction, type IUpdateGraphPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';
import type { IGraphDefinitionType } from '../types/TGraph';


export default function* updateGraphProps(action: IUpdateGraphPropsAction): Generator<any, void, any> {
  /*
  update graph properties
  */
  const { gid, props, stage } = action.payload;
  if (gid) {
    yield put(saveGraphPropsAction({ gid, props }));
    // todo based on props determine whether to resolve or generate output
    yield put(updateGraphAction({ gid, stage: stage || GraphProcessingStage.RESOLVE })); // what if realtime is changed or graph freq etc ???
  }
} 