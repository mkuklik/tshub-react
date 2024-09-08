import {
  select, put,
} from 'redux-saga/effects';

import { seriesSelector } from '../selectors/series';
import { SeriesKind } from './series.constants';
import resolveExpr from './series.resolveExpr';
import { saveResolvedSeriesAction } from '../actions/seriesActions';
/*
  resolve series
*/

function* resolve({ wsid, realtime } = {}) {
  const series = yield select(seriesSelector(wsid));

  if (series.kind === SeriesKind.data) {
    return series;
  } if (series.kind === SeriesKind.expr) {
    const resolvedSeries = yield resolveExpr({ expr: series.expr, realtime });
    yield put(saveResolvedSeriesAction({ wsid, series: { ...resolvedSeries, wsid } }));
    return resolvedSeries;
  }
}

export default resolve;
