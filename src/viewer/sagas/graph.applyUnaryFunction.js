import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { seriesSelector } from '../selectors/series';
import { updateSeriesAction } from '../actions/seriesActions';
import { GraphProcessingStage } from './graph.constants';
import { SeriesKind } from './series.constants';
import { createExprSeries } from './series.create';
import { addSeries } from './graph.addSeries';
import { updateGraphAction, saveReplaceSeriesAction } from '../actions/graphActions';

function* applyUnaryFunction(action) {
  const { gid, funcName, args, params } = action;
  let { wsid, create } = action;
  if (isNil(create)) {
    create = false;
  }

  const series = yield select(seriesSelector(wsid));

  if (isNil(series)) return;

  const name = `${funcName}(${series.name})`;

  if (series.kind === SeriesKind.data) {
    // create a new expr series and refer to original series using $({wsid: "...."})
    let expr;
    if (!isNil(params)) {
      expr = `${funcName}($({wsid: '${series.wsid}'}), ${JSON.stringify(params)})`;
    } else if (!isNil(args) && args.length > 0) {
      expr = `${funcName}($({wsid: '${series.wsid}'}), ${args.join(', ')})`;
    } else {
      expr = `${funcName}($({wsid: '${series.wsid}'}))`;
    }
    wsid = yield createExprSeries({ expr, name, realtime: series.realtime });
    if (create) {
      yield addSeries({ gid, wsid }, false);
    } else {
      yield put(saveReplaceSeriesAction({ gid, wsid: series.wsid, to_wsid: wsid }));
    }
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
  } else if (series.kind === SeriesKind.expr) {
    let expr;
    if (!isNil(params)) {
      expr = `${funcName}(${series.expr}, ${JSON.stringify(params)})`;
    } else if (!isNil(args) && args.length > 0) {
      expr = `${funcName}(${series.expr}, ${args.join(', ')})`;
    } else {
      expr = `${funcName}(${series.expr})`;
    }

    if (create) {
      wsid = yield createExprSeries({ expr, name, realtime: series.realtime });
      yield addSeries({ gid, wsid }, false);
    } else {
      const newSeries = {
        ...series,
        name,
        expr, //: `${funcName}(${series.expr})`,
        // reset collId and tsid and it is not direct time series from database
        collId: undefined,
        tsid: undefined,
      };
      yield put(updateSeriesAction({ wsid, series: newSeries }));
    }
    yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.RESOLVE }));
  } else {
    // todo error
  }
}

export default applyUnaryFunction;
