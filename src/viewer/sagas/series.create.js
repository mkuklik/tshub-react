import {
  put, select,
} from 'redux-saga/effects';
import ObjectID from 'bson-objectid';
import { isNil } from 'ramda';
import {
  saveSeriesAction,
} from '../actions/seriesActions';
import { timeseriesSelector } from '../selectors/timeseries';
import { SeriesKind } from './series.constants';


export function* createRefSeries(action) {
  let {
    wsid, name, tsid, collId, realtime,
  } = action;

  let expr;
  if (isNil(realtime)) {
    expr = `$({tsid: '${tsid}', collId: '${collId}'})`;
  } else {
    expr = `$({tsid: '${tsid}', collId: '${collId}', realtime: '${realtime.toISOString()}'})`;
  }

  // get name
  if (isNil(name)) {
    // try to get a name
    const ts = yield select(timeseriesSelector(tsid));
    if (!isNil(ts)) {
      name = ts.name;
    } else {
      name = expr;
    }
  }
  if (isNil(name)) name = expr;
  // const outWsid = yield createExprSeries({
  //   wsid, expr, name, realtime,
  // });
  const _wsid = (wsid === undefined) ? ObjectID().toHexString() : wsid;
  const _name = (name === undefined) ? 'unnamed' : name;
  const series = {
    wsid: _wsid, expr, name: _name, realtime, kind: SeriesKind.expr,
    tsid, collId,
  };
  yield put(saveSeriesAction({ wsid: _wsid, series }));
  return _wsid;
  // return outWsid;
}

export function* createExprSeries({
  wsid, expr, name, realtime,
} = {}) {
  const _wsid = (wsid === undefined) ? ObjectID().toHexString() : wsid;
  const _name = (name === undefined) ? 'unnamed' : name;
  const series = {
    wsid: _wsid, expr, name: _name, realtime, kind: SeriesKind.expr,
  };
  yield put(saveSeriesAction({ wsid: _wsid, series }));
  return _wsid;
}


export function* createDataSeries({
  wsid, name, freq, fparam, dtype, dparam, units, data, realtime,
} = {}) {
  const _wsid = (wsid === undefined) ? ObjectID().toHexString() : wsid;
  const _name = (name === undefined) ? 'unnamed' : name;
  const series = {
    wsid: _wsid, name: _name, freq, fparam, dtype, dparam, units, data, realtime, kind: SeriesKind.data,
  };
  yield put(saveSeriesAction({ wsid: _wsid, series }));
  return _wsid;
}
