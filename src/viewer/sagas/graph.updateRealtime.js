import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import moment from 'moment';
import { saveGraphPropsAction, updateGraphAction } from '../actions/graphActions';
import { graphSelector, currentGraphGidSelector } from '../selectors/graph';


export default function* updateRealtime(action) {
  let { gid, realtime } = action;

  gid = (isNil(gid)) ? yield select(currentGraphGidSelector) : gid;

  const graph = yield select(graphSelector(gid));

  if (isNil(graph)) return undefined;

  if (isNil(realtime)) realtime = moment.utc().toDate();

  yield put(saveGraphPropsAction({ gid, props: { realtime } }));
  yield put(updateGraphAction({ gid, wsid: undefined, stage: undefined }));
}
