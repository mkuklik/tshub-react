import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { seriesSelector } from '../selectors/series';
import { updateSeriesAction } from '../actions/seriesActions';
import { GraphProcessingStage } from './graph.constants';
import { SeriesKind } from './series.constants';
import { type IUpdateSeriesExprAction, updateGraphAction } from '../actions/graphActions';
import type { ISeries } from '../types/TSeries';


function* updateSeriesExpr(action: IUpdateSeriesExprAction): Generator<any, [undefined, string] | [undefined, undefined], any> {
  const { gid, wsid, expr, name } = action.payload;
  if (isNil(gid) || isNil(wsid) || isNil(expr)) {
    // todo error handling
    return [undefined, 'invalid inputs'];
  }
  const series: ISeries | undefined = yield select(seriesSelector(wsid));

  if (isNil(series)) return [undefined, 'series not found'];

  const updates = { expr };
  if (!isNil(name)) {
    updates.name = name;
  }

  if (series.kind === SeriesKind.data) {
    // todo error handling
    return [undefined, 'invalid series kind'];
  }
  
  if (series.kind === SeriesKind.expr) {
    const newSeries = {
      ...series,
      ...updates,
    };
    yield put(updateSeriesAction({ wsid, series: newSeries }));
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
    return [undefined, undefined];
  }
  
  return [undefined, 'invalid series kind'];
}

export default updateSeriesExpr; 