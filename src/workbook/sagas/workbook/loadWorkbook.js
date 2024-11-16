import { call, select } from 'redux-saga/effects';
import axios from 'axios';
import { isNil } from 'ramda';
import setDefaultLayout from './setDefaultLayout';
import { workbookWidSelector } from '../../selectors/workbookSelectors';
import loadGraphStore from '../../../viewer/sagas/graph.loadGraphReducer';
import loadSeriesStore from '../../../viewer/sagas/series.loadSeriesStore';
import loadModel from './loadModel';
import loadAnalyticsStore from '../../analytics/sagas/loadAnalyticsStore';

export function* fetchWorkbook(wid) {
  try {
    const response = yield call(axios.get, `/workbook/${wid}/api/data`);
    console.log('fetchWorkbook', response);
    return [response.data, undefined];
  } catch (error) {
    console.error('fetchWorkbook', error);
    // todo
    return [undefined, error];
  }
}

export function* loadWorkbook() {
  const wid = yield select(workbookWidSelector);
  // const [response, err] = yield fetchWorkbook(wid);
  let response = null;

  if (isNil(response)) {
    yield setDefaultLayout();
  } else {
  // load series
    yield loadSeriesStore({ series: response.workbook.series });
    // load graphs
    yield loadGraphStore({ graphs: response.workbook.graphs });
    // load analytics
    yield loadAnalyticsStore({ analytics: response.workbook.analytics });
    // load ui
    // yield loadUIStore({ ui: response.workbook.ui });
    // layout at the end
    if (!isNil(response.workbook.layout)) {
      yield loadModel({ model: response.workbook.layout });
    } else {
      yield setDefaultLayout();
    }
  }
}
