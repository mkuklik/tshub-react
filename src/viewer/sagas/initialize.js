import {
  put, call, takeEvery,
} from 'redux-saga/effects';
import { setApiParametersAction } from '../actions';
import { fetchTimeseriesAction } from '../actions/timeseriesActions';
import { addRefSeriesToGraphAction, focusOnGraphAction } from '../actions/graphActions';
import createGraph from './graph.createGraph';
import { setDefaultAction } from '../actions/defaultsActions';
import { INITIALIZE } from '../actions/ActionTypes';
import { fetchCollectionDetailsAction } from '../actions/collectionsActions';

function* initialize({
  jwt, spaceId, collId, tsid, collName, spaceName, tsName, chronos_address,
}) {
  yield put(setApiParametersAction({
    spaceId, collId, tsid, jwt, chronos_address,
  }));
  // axios.defaults.baseURL = 'https://www.tshub.io';
  // axios.defaults.headers.common.Authorization = jwt;

  // fetch collection
  yield put(setDefaultAction({
    spaceId,
    collId,
    tsid,
    spaceName,
    collName,
  }));

  // yield put(fetchCollectionDetailsAction(collId));

  // fetch timeseries details to display in overview
  // yield put(fetchTimeseriesAction(collId, tsid));

  const gid = yield call(createGraph);

  yield put(focusOnGraphAction(gid));

  yield put(addRefSeriesToGraphAction({
    gid,
    tsid,
    collId,
    name: tsName,
  }));
}

export default function* watchInitializeActions() {
  yield takeEvery(INITIALIZE, initialize);
}
