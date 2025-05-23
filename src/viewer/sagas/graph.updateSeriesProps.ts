import {
    put,
} from 'redux-saga/effects';
import { updateGraphAction, saveSeriesPropsAction, type IUpdateSeriesPropsAction } from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';

export default function* updateSeriesProps(action: IUpdateSeriesPropsAction, doUpdate: boolean = true) {
    /*
    update series properties
    */
    const { gid, wsid, props } = action.payload;
    yield put(saveSeriesPropsAction({ gid, wsid, props }));
    if (doUpdate) {
        yield put(updateGraphAction({ gid, stage: GraphProcessingStage.GENERATE }));
    }
} 