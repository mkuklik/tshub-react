import { combineReducers } from 'redux';

import api from './api';
import annotations from './annotationsReducer';
import collections from './collectionsReducer';
import defaults from './defaultReducer';
import errors from './errorsReducer';
import fred from './fredReducer';
import graphs from './graphsReducer';
import namespace from './namespaceReducer';
import obs from './obsReducer';
import series from './seriesReducer';
import ui from './uiReducer';
import spaces from './spacesReducer';
import table from './tableReducer';
import timeseries from './timeseriesReducer';
import vintages from '../../vintages/reducers/vintagesReducer';

// NOT USED IN WORKBOOK
export default combineReducers({
  api,
  annotations,
  collections,
  defaults,
  errors,
  fred,
  graphs,
  namespace,
  obs,
  series,
  spaces,
  table,
  timeseries,
  ui,
  vintages,
});
