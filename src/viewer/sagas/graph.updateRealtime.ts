import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import moment from 'moment';
import { saveGraphPropsAction, updateGraphAction, type IUpdateGraphRealtimeAction } from '../actions/graphActions';
import { graphSelector, currentGraphGidSelector } from '../selectors/graph';
import type { IGraphType } from '../types/TGraph';


export default function* updateRealtime(action: IUpdateGraphRealtimeAction): Generator<any, void, any> {
  const { gid, realtime } = action.payload;
  const _gid: string | undefined = (isNil(gid)) ? yield select(currentGraphGidSelector) : gid;

  if (_gid === undefined) return undefined;

  const graph: IGraphType | undefined = yield select(graphSelector(_gid));

  if (isNil(graph)) return undefined;

  const _realtime: Date = (isNil(realtime)) ? moment.utc().toDate() : realtime;

  yield put(saveGraphPropsAction({ gid: _gid, props: { realtime: _realtime } }));
  yield put(updateGraphAction({ gid: _gid, wsid: undefined, stage: undefined }));
} 