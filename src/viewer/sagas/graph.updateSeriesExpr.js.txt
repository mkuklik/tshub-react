import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { seriesSelector } from '../selectors/series';
import { updateSeriesAction } from '../actions/seriesActions';
import { GraphProcessingStage } from './graph.constants';
import { SeriesKind } from './series.constants';
import { updateGraphAction } from '../actions/graphActions';

function* updateSeriesExpr(action) {
  const {
    gid, wsid, expr, name,
  } = action;

  if (isNil(gid) || isNil(wsid) || isNil(expr)) {
    // todo error handing
    return [undefined, 'invalid inputs'];
  }
  const series = yield select(seriesSelector(wsid));

  if (isNil(series)) return;

  const updates = { expr };
  if (!isNil(name)) {
    updates.name = name;
  }

  if (series.kind === SeriesKind.data) {
    // todo error handing
    return [undefined, 'invalid series kind'];

  // eslint-disable-next-line no-else-return
  } else if (series.kind === SeriesKind.expr) {
    const newSeries = {
      ...series,
      ...updates,
    };
    yield put(updateSeriesAction({ wsid, series: newSeries }));
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
    return [undefined, undefined];
  } else {
    return [undefined, 'invalid series kind'];
  }
}

export default updateSeriesExpr;
