import * as R from 'ramda';
import {
    put, select, type SelectEffect, type PutEffect
} from 'redux-saga/effects';
import { type IUpdateRangeAction, saveGraphPropsAction, updateGraphAction } from '../actions/graphActions';
import { graphSelector, currentGraphGidSelector } from '../selectors/graph';
import { GraphProcessingStage } from './graph.constants';
import type { IGraphType } from '../types/TGraph';


export default function* updateRange(action: IUpdateRangeAction): Generator<SelectEffect | PutEffect<unknown>, void, unknown> {
    const { gid, rangeStart, rangeEnd } = action.payload;
    const _gid: string | undefined = (gid === undefined) ? yield select(currentGraphGidSelector) : gid;

    if (_gid === undefined) return;
    const graph = (yield select(graphSelector(_gid))) as IGraphType | undefined;

    if (graph === undefined) return undefined;

    yield put(saveGraphPropsAction({ gid: _gid, props: { rangeStart, rangeEnd } }));
    yield put(updateGraphAction({ gid: _gid, wsid: undefined, stage: GraphProcessingStage.TRANSFORM }));
} 