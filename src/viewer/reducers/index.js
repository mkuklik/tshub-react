import { combineReducers } from 'redux';

import api from './api';
import ui from './uiReducer';
import spaces from './spacesReducer';
import collections from './collectionsReducer';
import annotations from './annotationsReducer';
import timeseries from './timeseriesReducer';
import graphs from './graphsReducer';
import vintages from '../../vintages/reducers/vintagesReducer';
import obs from './obsReducer';
import table from './tableReducer';
import errors from './errorsReducer';
import defaults from './defaultReducer';
import namespace from './namespaceReducer';
import series from './seriesReducer';

export default combineReducers({
  namespace,
  defaults,
  ui,
  api,
  spaces,
  collections,
  annotations,
  timeseries,
  graphs,
  vintages,
  obs,
  table,
  errors,
  series,
});
