import {
  put, select,
} from 'redux-saga/effects';
import { isNil, filter, path } from 'ramda';
import {
  removeSeriesDefAction,
  updateGraphAction,
  deselectSeriesAction,
  selectSeriesAction,
} from '../actions/graphActions';
import { GraphProcessingStage } from './graph.constants';
import { currentGraphSelectedSeriesSelector, currentGraphSeriesDefSelector } from '../selectors/graph';

export default function* removeSeries({ gid, wsid } = {}) {
  /*
  remove series from a graph
  */
  const selected = yield select(currentGraphSelectedSeriesSelector);
  let anotherSeries = yield select(currentGraphSeriesDefSelector);
  if (!isNil(anotherSeries)) {
    anotherSeries = filter((x) => x.wsid !== wsid, anotherSeries);
    anotherSeries = path([0, 'wsid'], anotherSeries);
  }

  if (selected instanceof Array && selected.includes(wsid)) {
    if (!isNil(anotherSeries)) {
      yield put(selectSeriesAction({ gid, wsid, clear: true }));
    } else {
      yield put(deselectSeriesAction({ gid, wsid }));
    }
  }
  yield put(removeSeriesDefAction({ gid, wsid }));
  yield put(updateGraphAction({ gid, wsid, stage: GraphProcessingStage.GENERATE }));
}
