import { takeEvery, takeLeading } from 'redux-saga/effects';
import {
  ANALYTICS_LM_DEPENDENT,
  ANALYTICS_LM_REGRESSOR,
  ANALYTICS_FILTER_GRAPH,
  ANALYTICS_LM_GRAPHS,
  ANALYTICS_ADD_VARIABLE_TO_LIST,
} from '../actions/actionTypes';

import {
  ANALYTICS_CREATE,
  ANALYTICS_RUN,
  ANALYTICS_ADD_VARIABLE,
  ANALYTICS_UPDATE_PARAMETERS,
} from '../actions/index';


import createAnalytics from './createAnalytics';
import runAnalytics from './runAnalytics';
import { addDependentVariable, addRegressor, addVariable } from './models/lm';
import { lmGraphs } from './models/lm.results';
import {
  analyticsHPGraph,
} from './models/filters';
import updateAnalyticsParameters from './updateAnalyticsParameters';
import addVarToList from './addVarToList';

export default function* watchAnalyticsActions() {
  yield takeLeading(ANALYTICS_CREATE, createAnalytics);
  yield takeLeading(ANALYTICS_RUN, runAnalytics);
  yield takeEvery(ANALYTICS_ADD_VARIABLE, addVariable);
  yield takeEvery(ANALYTICS_UPDATE_PARAMETERS, updateAnalyticsParameters);

  // LM Model
  yield takeEvery(ANALYTICS_LM_DEPENDENT, addDependentVariable);
  yield takeEvery(ANALYTICS_LM_REGRESSOR, addRegressor);
  yield takeEvery(ANALYTICS_LM_GRAPHS, lmGraphs);
  yield takeEvery(ANALYTICS_ADD_VARIABLE_TO_LIST, addVarToList);
  // Filters
  yield takeEvery(ANALYTICS_FILTER_GRAPH, analyticsHPGraph);
}
