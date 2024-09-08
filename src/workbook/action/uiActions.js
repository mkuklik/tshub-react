import {
  SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
  SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
  SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  UI_SAVE_RESTORE_REDUCER,
  SERIESINFO_SAVE_ACTIVE_SERIES,
} from './ActionTypes';


export const openFuncEditorAction = (wsid) => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  payload: {
    wsid,
  },
});

export const saveErrorsFuncEditorAction = (errors) => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  payload: {
    errors,
  },
});

export const closeFuncEditorAction = () => ({
  type: SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
});


export const confirmExprFuncEditorAction = ({ gid, wsid, expr } = {}) => ({
  type: SERIESLIST_FUNC_EDITOR_SAGE_CONFIRM_EXPR,
  gid,
  wsid,
  expr,
});

export const seriesInfoSaveActiveSeriesAction = ({ activeSeries } = {}) => ({
  type: SERIESINFO_SAVE_ACTIVE_SERIES,
  payload: {
    activeSeries,
  },
});

export const restoreUIReducer = ({ ui } = {}) => ({
  type: UI_SAVE_RESTORE_REDUCER,
  payload: {
    ...ui,
  },
});
