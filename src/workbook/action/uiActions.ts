import {
  SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
  SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
  SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  UI_SAVE_RESTORE_REDUCER,
  SERIESINFO_SAVE_ACTIVE_SERIES,
} from './ActionTypes';

export interface IOpenFuncEditorAction {
  type: typeof SERIESLIST_FUNC_EDITOR_SAVE_OPEN;
  payload: { wsid: string };
}

export const openFuncEditorAction = (wsid: string): IOpenFuncEditorAction => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  payload: { wsid },
});

export interface ISaveErrorsFuncEditorAction {
  type: typeof SERIESLIST_FUNC_EDITOR_SAVE_ERRORS;
  payload: { errors: any[] }; // Replace 'any' with the actual error type
}

export const saveErrorsFuncEditorAction = (errors: any[]): ISaveErrorsFuncEditorAction => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  payload: { errors },
});

export interface ICloseFuncEditorAction {
  type: typeof SERIESLIST_FUNC_EDITOR_SAVE_CLOSE;
}

export const closeFuncEditorAction = (): ICloseFuncEditorAction => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
});

export interface IConfirmExprFuncEditorAction {
  type: typeof SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR;
  gid: string;
  wsid: string;
  expr: string;
}

export const confirmExprFuncEditorAction = ({
  gid,
  wsid,
  expr,
}: {
  gid: string;
  wsid: string;
  expr: string;
} = {
  gid: '',
  wsid: '',
  expr: '',
}): IConfirmExprFuncEditorAction => ({
  type: SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
  gid,
  wsid,
  expr,
});

export interface ISeriesInfoSaveActiveSeriesAction {
  type: typeof SERIESINFO_SAVE_ACTIVE_SERIES;
  payload: { activeSeries: string }; // Or the correct type for activeSeries
}

export const seriesInfoSaveActiveSeriesAction = ({
  activeSeries,
}: {
  activeSeries: string
} = {
  activeSeries: '',
}): ISeriesInfoSaveActiveSeriesAction => ({
  type: SERIESINFO_SAVE_ACTIVE_SERIES,
  payload: { activeSeries },
});

export interface IRestoreUIReducerAction {
  type: typeof UI_SAVE_RESTORE_REDUCER;
  payload: any; // Replace 'any' with the actual UI state type
}

export const restoreUIReducer = (data: any): IRestoreUIReducerAction => ({
  type: UI_SAVE_RESTORE_REDUCER,
  payload: { ...(data.ui) },
});

// import {
//   SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
//   SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
//   SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
//   SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
//   UI_SAVE_RESTORE_REDUCER,
//   SERIESINFO_SAVE_ACTIVE_SERIES,
// } from './ActionTypes';

// export const openFuncEditorAction = (wsid) => ({
//   type: SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
//   payload: {
//     wsid,
//   },
// });

// export const saveErrorsFuncEditorAction = (errors) => ({
//   type: SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
//   payload: {
//     errors,
//   },
// });

// export const closeFuncEditorAction = () => ({
//   type: SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
// });

// export const confirmExprFuncEditorAction = ({ gid, wsid, expr } = {}) => ({
//   type: SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
//   gid,
//   wsid,
//   expr,
// });

// export const seriesInfoSaveActiveSeriesAction = ({ activeSeries } = {}) => ({
//   type: SERIESINFO_SAVE_ACTIVE_SERIES,
//   payload: {
//     activeSeries,
//   },
// });

// export const restoreUIReducer = ({ ui } = {}) => ({
//   type: UI_SAVE_RESTORE_REDUCER,
//   payload: {
//     ...ui,
//   },
// });
