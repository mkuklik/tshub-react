import { combineReducers, Reducer } from "redux";
import { STORE_RESET } from "../../viewer/actions/ActionTypes";
import api, { IApiState } from "../../viewer/reducers/api";
import ui, { IUIState } from "./uiReducer";
import spaces, { ISpacesState } from "../../viewer/reducers/spacesReducer";
import collections, {
  ICollectionsState,
} from "../../viewer/reducers/collectionsReducer";
import annotations, {
  IAnnotationsState,
} from "../../viewer/reducers/annotationsReducer";
import fred, { IFredState } from "../../viewer/reducers/fredReducer";
import timeseriesReducer, {
  ITimeseriesState,
} from "../../viewer/reducers/timeseriesReducer";
import graphs, { IGraphState } from "../../viewer/reducers/graphsReducer";
import series, { ISeriesState } from "../../viewer/reducers/seriesReducer";
import obs, { IObservationsState } from "../../viewer/reducers/obsReducer";
import table, { ITableState } from "../../viewer/reducers/tableReducer";
import errors, { IErrorsState } from "../../viewer/reducers/errorsReducer";
import defaults, { IDefaultsState } from "../../viewer/reducers/defaultReducer";
import namespace, {
  INamespaceState,
} from "../../viewer/reducers/namespaceReducer";
import workbook, { IWorkbookState } from "./workbookReducer";
import analytics, { IAnalyticsState } from "../analytics/reducers";
import uploadReducer, {
  IUploadState,
} from "../../uploader/reducers/uploadReducer";
import vintages, {
  IVintagesState,
} from "../../vintages/reducers/vintagesReducer";

export interface IRootState {
  analytics: IAnalyticsState;
  annotations: IAnnotationsState;
  api: IApiState;
  collections: ICollectionsState;
  defaults: IDefaultsState;
  errors: IErrorsState;
  fred: IFredState;
  graphs: IGraphState;
  namespace: INamespaceState;
  obs: IObservationsState;
  series: ISeriesState;
  spaces: ISpacesState;
  table: ITableState;
  timeseries: ITimeseriesState;
  ui: IUIState;
  upload: any;
  vintages: any;
  workbook: IWorkbookState;
}

const combined = combineReducers<IRootState>({
  analytics,
  annotations,
  api,
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
  timeseries: timeseriesReducer,
  ui,
  upload: uploadReducer,
  vintages,
  workbook,
});

/*
Global store reset. Root reducer which combines all other reducers
is wrapped in order to reset state to undefined, which triggers using initialState
in all reducers reseting the entire store
*/
const resetWrappedReducer: Reducer<IRootState> = (state, action) => {
  if (action.type === STORE_RESET) {
    return combined(undefined, action);
  }
  return combined(state, action);
};

export default resetWrappedReducer;

// import { combineReducers, Reducer } from 'redux';
// import { STORE_RESET } from '../../viewer/actions/ActionTypes';
// import api from '../../viewer/reducers/api';
// import ui from './uiReducer';
// import spaces from '../../viewer/reducers/spacesReducer';
// import collections from '../../viewer/reducers/collectionsReducer';
// import annotations from '../../viewer/reducers/annotationsReducer';
// import fred from '../../viewer/reducers/fredReducer';
// import timeseries from '../../viewer/reducers/timeseriesReducer';
// import graphs from '../../viewer/reducers/graphsReducer';
// import series from '../../viewer/reducers/seriesReducer';
// import obs from '../../viewer/reducers/obsReducer';
// import table from '../../viewer/reducers/tableReducer';
// import errors from '../../viewer/reducers/errorsReducer';
// import defaults from '../../viewer/reducers/defaultReducer';
// import namespace from '../../viewer/reducers/namespaceReducer';
// import workbook from './workbookReducer';
// import analytics from '../analytics/reducers';
// import upload from '../../uploader/reducers/uploadReducer';
// import vintages from '../../vintages/reducers/vintagesReducer';
//
// const combined = combineReducers({
//   analytics,
//   annotations,
//   api,
//   collections,
//   defaults,
//   errors,
//   fred,
//   graphs,
//   namespace,
//   obs,
//   series,
//   spaces,
//   table,
//   timeseries,
//   ui,
//   upload,
//   vintages,
//   workbook,
// });

// // Infer the root state type from the combined reducers
// export type RootState = ReturnType<typeof combined>;

// /*
// Global store reset. Root reducer which combines all other reducers
// is wrapped in order to reset state to undefined, which triggers using initialState
// in all reducers reseting the entire store
// */
// const resetWrappedReducer: Reducer<RootState> = (state, action) => {
//   if (action.type === STORE_RESET) {
//     return combined(undefined, action);
//   }
//   return combined(state, action);
// };

// export default resetWrappedReducer;
