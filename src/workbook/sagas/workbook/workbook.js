import { takeEvery } from 'redux-saga/effects';
import {
  WORKBOOK_ON_MODEL_CHANGE,
  WORKBOOK_ON_ACTION,
  WORKBOOK_ADD_NEW_GRAPH_TAB,
  WORKBOOK_CLOSE_GRAPH_TAB,
  WORKBOOK_CLOSE_ANALYTICS_TAB,
  WORKBOOK_SWITCH_GRAPH_LAYOUTS,
  WORKBOOK_ADD_ANALYTICS_TAB,
  WORKBOOK_CREATE_ANALYTICS_TAB,
  WORKBOOK_UPDATE_METADATA,
  WORKBOOK_GET_WORKBOOK,
  WORKBOOK_PUT_WORKBOOK,
  WORKBOOK_UPDATE_FAVORITE,
  WORKBOOK_CREATE_ANALYTICS_FROM_SERIES,
  WORKBOOK_OPEN_TIMESERIES_BROWSER,
  WORKBOOK_OPEN_UPLOAD,
  WORKBOOK_OPEN_ANALYTICS_BORDER_TAB,
} from '../../action/workbookActions';

import addNewGraphTab from './addNewGraphTab';
import { switchGraphLayout } from './switchGraphLayout';
import closeAnalyticsTab from './closeAnalyticsTab';
import closeGraphTab from './closeGraphTab';
import onModelChange from './onModelChange';
import addAnalyticsTab from './addAnalyticsTab';
import createAnalyticsTab from './createAnalyticsTab';
import onAction from './onAction';
import { updateMetadata } from './metadata';
import { saveWorkbook } from './saveWorkbook';
import { loadWorkbook } from './loadWorkbook';
import { updateFavorite } from './favorite';
import { createAnalyticsFromSeries } from './createAnalyticsFromSeries';
import openTimeseriesBrowser from './openTimeseriesBrowser';
import openUpload from './openUpload';
import openAnalyticsBorderTab from './openAnalyticsBorderTab';


export default function* watchWorkbookActions() {
  yield takeEvery(WORKBOOK_ON_MODEL_CHANGE, onModelChange);
  yield takeEvery(WORKBOOK_ON_ACTION, onAction);
  yield takeEvery(WORKBOOK_ADD_NEW_GRAPH_TAB, addNewGraphTab);
  yield takeEvery(WORKBOOK_CLOSE_GRAPH_TAB, closeGraphTab);
  yield takeEvery(WORKBOOK_CLOSE_ANALYTICS_TAB, closeAnalyticsTab);
  yield takeEvery(WORKBOOK_SWITCH_GRAPH_LAYOUTS, switchGraphLayout);
  yield takeEvery(WORKBOOK_ADD_ANALYTICS_TAB, addAnalyticsTab);
  yield takeEvery(WORKBOOK_CREATE_ANALYTICS_TAB, createAnalyticsTab);
  yield takeEvery(WORKBOOK_UPDATE_METADATA, updateMetadata);
  yield takeEvery(WORKBOOK_UPDATE_FAVORITE, updateFavorite);
  yield takeEvery(WORKBOOK_GET_WORKBOOK, loadWorkbook);
  yield takeEvery(WORKBOOK_PUT_WORKBOOK, saveWorkbook);
  yield takeEvery(WORKBOOK_CREATE_ANALYTICS_FROM_SERIES, createAnalyticsFromSeries);
  yield takeEvery(WORKBOOK_OPEN_TIMESERIES_BROWSER, openTimeseriesBrowser);
  yield takeEvery(WORKBOOK_OPEN_UPLOAD, openUpload);
  yield takeEvery(WORKBOOK_OPEN_ANALYTICS_BORDER_TAB, openAnalyticsBorderTab);
}
