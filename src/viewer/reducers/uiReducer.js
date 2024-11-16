import { combineReducers } from 'redux';
import annotationsReducer from './ui.annotationsReducer';
import timeseriesBrowserReducer from './ui.timeseriesBrowserReducer';

// NOT USED IN WORKBOOK

const reducer = combineReducers({
  annotations: annotationsReducer,
  timeseriesBrowser: timeseriesBrowserReducer,
});

export default reducer;
