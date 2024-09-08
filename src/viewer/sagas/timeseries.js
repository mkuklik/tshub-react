/* eslint-disable no-underscore-dangle */
// import { toast } from 'react-semantic-toasts';
import {
  put, call, takeEvery, takeLatest,
} from 'redux-saga/effects';

import {
  FETCH_TIMESERIES,
  FETCH_TIMESERIES_LIST,
  FETCH_TIMESERIES_DETAILS,
  TIMESERIES_DELETE_SERIES,
} from '../actions/ActionTypes';

import { timeseriesBrowserSetTimeseriesListLoading } from '../actions/uiActions';

import {
  saveTimeSeriesAction,
  saveTimeseriesListAction,
  saveTimeseriesDetailsAction,
  saveTimeseriesDeleteAction,
} from '../actions/timeseriesActions';
import { reportApiError, reportErrorAction } from '../actions/errorActions';
import { isNil } from 'ramda';
import { AppToaster } from '../components/errors/AppToaster';

export function rawApiTimeseriesRawGet(collId, tsid) {
  return new Promise((resolve, reject) => {
    window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(collId, tsid,
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

const rawApiFetchTimeseriesList = (collId) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGetList(
      collId, null,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

const rawApiFetchTimeseriesDetails = (collId, tsid) => (
  new Promise((resolve, reject) => {
    window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(
      collId,
      tsid,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

const apiFetchTimeseriesDetails = (spaceName, collName, name) => (
  new Promise((resolve, reject) => {
    window._chronosdb.timeSeriesApi.appApiTimeseriesGet(
      spaceName, collName, name,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

export function* fetchTimeseries(action) {
  const { collId, tsid } = action.payload;
  try {
    const data = yield call(rawApiTimeseriesRawGet, collId, tsid);
    yield put(saveTimeSeriesAction(data));
    return data;
  } catch (error) {
    yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

    // toast({ title: 'Error fetching timeseries details', description: String(error) });
    return undefined;
  }
}

export function* fetchTimeseriesList({ payload: collId }) {
  yield put(timeseriesBrowserSetTimeseriesListLoading(true));

  try {
    const timeseriesList = yield call(rawApiFetchTimeseriesList, collId);
    yield put(saveTimeseriesListAction({ collId, timeseriesList }));
    yield put(timeseriesBrowserSetTimeseriesListLoading(false));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching space list, ${error}` }));

    // toast({
    //   title: 'Error fetching timeseries list',
    //   description: error,
    // });

    yield put(timeseriesBrowserSetTimeseriesListLoading(false));
  }
}

export function* fetchTimeseriesDetails({ payload }) {
  const { collId, tsid } = payload;

  try {
    const timeseriesDetails = yield call(rawApiFetchTimeseriesDetails, collId, tsid);
    yield put(saveTimeseriesDetailsAction(timeseriesDetails));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

    // toast({
    //   title: 'Error fetching timeseries details',
    //   description: String(error),
    // });
  }
}


export function* fetchTimeseriesDetailsByName({ collName, spaceName, tsName }) {
  try {
    const timeseriesDetails = yield call(apiFetchTimeseriesDetails, spaceName, collName, tsName);
    yield put(saveTimeseriesDetailsAction(timeseriesDetails));
    return [timeseriesDetails, undefined];
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

    return [undefined, 'Error fetching timeseries details'];
  }
}


export function rawApiTimeseriesRawDelete(collId, tsid) {
  return new Promise((resolve, reject) => {
    window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawDelete(collId, tsid,
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

function* deleteOneTimeseries({ collId, tsid }) {
  try {
    const data = yield call(rawApiTimeseriesRawDelete, collId, tsid);
    // TODO remove time series from the store
    return [data, undefined];
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
    return [undefined, `failed to delete timeseries ${collId}/${tsid}`];
  }
}
export function* deleteTimeseries({ collId, tsids }) {
  if (Array.isArray(tsids)) {
    const deleted = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const tsid of tsids) {
      const [data, error] = yield deleteOneTimeseries({ collId, tsid });
      if (isNil(error)) deleted.push(tsid);
    }
    if (deleted.length > 0) {
      yield put(saveTimeseriesDeleteAction(collId, deleted));
      // TODO make success report actions
      AppToaster.show({
        message: `Successfully deleted ${deleted.length} series`,
        intent: 'success',
        timeout: 5000,
      });
    }
  }
}


export default function* watchTimeSeriesActions() {
  yield takeEvery(FETCH_TIMESERIES, fetchTimeseries);
  yield takeEvery(FETCH_TIMESERIES_LIST, fetchTimeseriesList);
  yield takeLatest(FETCH_TIMESERIES_DETAILS, fetchTimeseriesDetails);
  yield takeEvery(TIMESERIES_DELETE_SERIES, deleteTimeseries);
}
