import { combineReducers } from 'redux';
import { STORE_RESET } from '../../viewer/actions/ActionTypes';
import api from '../../viewer/reducers/api';
import ui from './uiReducer';
import spaces from '../../viewer/reducers/spacesReducer';
import collections from '../../viewer/reducers/collectionsReducer';
import annotations from '../../viewer/reducers/annotationsReducer';
import fred from '../../viewer/reducers/fredReducer';
import timeseries from '../../viewer/reducers/timeseriesReducer';
import graphs from '../../viewer/reducers/graphsReducer';
import series from '../../viewer/reducers/seriesReducer';
// import vintages from '../../viewer/reducers/vintagesReducer';
import obs from '../../viewer/reducers/obsReducer';
import table from '../../viewer/reducers/tableReducer';
import errors from '../../viewer/reducers/errorsReducer';
import defaults from '../../viewer/reducers/defaultReducer';
import namespace from '../../viewer/reducers/namespaceReducer';
import workbook from './workbookReducer';
import analytics from '../analytics/reducers';
import upload from '../../uploader/reducers/uploadReducer';
import vintages from '../../vintages/reducers/vintagesReducer';

const combined = combineReducers({
  namespace,
  defaults,
  ui,
  api,
  spaces,
  fred,
  collections,
  annotations,
  timeseries,
  graphs,
  series,
  vintages,
  obs,
  table,
  errors,
  workbook,
  analytics,
  upload,
});

/*
Global store reset. Root reducer which combines all other reducers
is wrapped in order to reset state to undefined, which triggers using initialState
in all reducers reseting the entire store
*/
const resetWrappedReducer = (state, action) => {
  if (action.type === STORE_RESET) {
    return combined(undefined, action);
  }
  return combined(state, action);
};

export default resetWrappedReducer;
