import { put, select } from 'redux-saga/effects';
import type { PutEffect, SelectEffect } from 'redux-saga/effects';
import { isNil, filter, path } from 'ramda';
import {
  removeSeriesDefAction,
  updateGraphAction,
  deselectSeriesAction,
  selectSeriesAction,
  type IRemoveSeriesAction,
} from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';
import { currentGraphSelectedSeriesSelector, currentGraphSeriesDefSelector } from '../selectors/graph';
import type { Action } from 'redux';
import type { ISeries } from '../types/TSeries';

export default function* removeSeries(action: IRemoveSeriesAction): Generator<PutEffect<Action> | SelectEffect, void, unknown> {
  /*
  remove series from a graph
  */
  const { gid, wsid } = action.payload;
  const selected = yield select(currentGraphSelectedSeriesSelector);
  let anotherSeries = yield select(currentGraphSeriesDefSelector);
  if (!isNil(anotherSeries)) {
    anotherSeries = filter((x: ISeries) => x.wsid !== wsid, anotherSeries as ISeries[]);
    anotherSeries = path([0, 'wsid'], anotherSeries);
  }

  if (Array.isArray(selected) && selected.includes(wsid)) {
    if (!isNil(anotherSeries)) {
      yield put(selectSeriesAction({ gid, wsid, clear: true }));
    } else {
      yield put(deselectSeriesAction({ gid, wsid }));
    }
  }
  yield put(removeSeriesDefAction({ gid, wsid }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
} 