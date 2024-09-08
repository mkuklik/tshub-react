import {
  select,
} from 'redux-saga/effects';
import { seriesSelector } from "../selectors/series";
import { SeriesKind } from './series.constants';
import { createExprSeries, createDataSeries } from './series.create';
import addSeries from './graph.addSeries';


function* cloneSeries(action) {
  const { gid, wsid } = action;
  const series = yield select(seriesSelector(wsid));

  let wsid2;
  if (series.kind === SeriesKind.expr) {
    wsid2 = yield createExprSeries({ expr: series.expr, name: `${series.name} copy`, realtime: series.realtime })
  } else if (series.kind === SeriesKind.data) {
    wsid2 = yield createDataSeries({ ...series, name: `${series.name} copy`, wsid: undefined })
  }
  yield addSeries({ gid, wsid: wsid2 })
}

export default cloneSeries
