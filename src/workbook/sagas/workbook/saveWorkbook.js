import { call, select } from 'redux-saga/effects';
import axios from 'axios';
import { workbookWidSelector } from '../../selectors/workbookSelectors';
import dumpGraphsStore from '../../../viewer/sagas/graph.dumpGraphsStore';
import dumpSeriesStore from '../../../viewer/sagas/series.dumpSeriesStore';
import dumpModel from './dumpModel';
import dumpAnalyticsStore from '../../analytics/sagas/dumpAnalyticsStore';

export function* putWorkbook(wid, payload) {
  try {
    const response = yield call(axios.put, `workbook/${wid}/api/data`, payload);
    return [response, undefined];
  } catch (error) {
    console.error(error);
    // todo
    return [undefined, error];
  }
}

export function* saveWorkbook() {
  const workbook = {};
  // save series
  workbook.series = yield dumpSeriesStore();
  // save graphs
  workbook.graphs = yield dumpGraphsStore();
  // save analytics
  workbook.analytics = yield dumpAnalyticsStore();
  // save ui
  // workbook.ui = yield dumpUIStore();
  // save layout
  workbook.layout = yield dumpModel();
  const wid = yield select(workbookWidSelector);
  yield putWorkbook(wid, workbook);
}
