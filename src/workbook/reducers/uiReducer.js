import { combineReducers } from 'redux';
import annotationsReducer from '../../viewer/reducers/ui.annotationsReducer';
import timeseriesBrowserReducer from '../../viewer/reducers/ui.timeseriesBrowserReducer';
import seriesListReducer from './ui.seriesListReducer';
import seriesInfoReducer from './ui.seriesInfoReducer';
import workbookUIReducer from './ui.workbookUIReducer';


const reducer = combineReducers({
  annotations: annotationsReducer,
  timeseriesBrowser: timeseriesBrowserReducer,
  seriesList: seriesListReducer,
  seriesInfo: seriesInfoReducer,
  workbook: workbookUIReducer,
});

export default reducer;
