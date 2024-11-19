import ObjectID from 'bson-objectid';
import {
  GRAPH_CREATE,
  CLONE_GRAPH,
  GRAPH_UPDATE,
  GRAPH_FOCUS,
  GRAPH_ADD_EXPR_SERIES,
  GRAPH_ADD_NAMED_SERIES,
  GRAPH_ADD_REF_SERIES,
  GRAPH_ADD_DATA_SERIES,
  GRAPH_ADD_SERIES,
  GRAPH_ADD_MANY_REF_SERIES,
  GRAPH_REORDER_SERIES,
  GRAPH_REMOVE_SERIES,
  GRAPH_SELECT_SERIES,
  GRAPH_DESELECT_SERIES,
  GRAPH_UPDATE_GRAPH_PROPS,
  GRAPH_UPDATE_SERIES_PROPS,
  GRAPH_UPDATE_UI_PROPS,
  GRAPH_UPDATE_OUTPUT,
  GRAPH_UPDATE_STATUS,
  GRAPH_CLEAR_SERIES,
  GRAPH_CLEAR_N_ADD_SERIES,
  GRAPH_UPDATE_TITLE,
  GRAPH_UPDATE_REALTIME,
  GRAPH_UPDATE_RANGE,
  GRAPH_APPLY_UNARY_FUNC,

  GRAPH_ERRORS_ADD,
  GRAPH_ERRORS_CLEAR,

  GRAPH_SAVE_NEW_GRAPH,
  GRAPH_SAVE_CURRENT_GID,
  GRAPH_SAVE_DETERMINED_FREQ,
  GRAPH_SAVE_TRANSFORMED_SERIES,
  GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
  GRAPH_SAVE_OUTPUT,
  GRAPH_SAVE_APPEND_SERIES,
  GRAPH_SAVE_REMOVE_SERIES,
  GRAPH_SAVE_CLEAR_SERIES,
  GRAPH_SAVE_REORDER_SERIES,
  GRAPH_SAVE_GRAPH_PROPS,
  GRAPH_SAVE_SERIES_PROPS,
  GRAPH_SAVE_REPLACE_SERIES,
  GRAPH_SAVE_GRAPH_OBJECT,
  GRAPH_SAVE_SELECT_SERIES,
  GRAPH_SAVE_DESELECT_SERIES,
  GRAPH_CLONE_SERIES,
  GRAPH_APPLY_BINARY_FUNC,
  GRAPH_SAVE_UI_PROPS,
  GRAPH_DELETE_OBJECT,
  GRAPH_UPDATE_SERIES_EXPR,
  GRAPH_SAVE_RESTORE_REDUCER,
  GRAPH_SAVE_CHART_REF,
  GRAPH_SAVE_DELETE_OBJECT,
  GRAPH_SAVE_EXPORT_OPTIONS,
  GRAPH_EXPORT_LOCAL,
  GRAPH_APPLY_BINARY_OPERATOR,
} from './ActionTypes';

const objectIdGenerator = new ObjectID();

//
// GRAPH_CREATE
//

export interface GraphCreateAction {
  type: typeof GRAPH_CREATE;
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}

export const createGraphAction = ({
  gid, freq, title, subtitle, legend,
}: { gid: string,
  freq: string,
  title?: string,
  subtitle?: string,
  legend?: string,
}): GraphCreateAction => ({
  type: GRAPH_CREATE,
  gid,
  freq,
  title,
  subtitle,
  legend,
});

export const createGraph = (freq: string) => (dispatch: (action: GraphCreateAction) => void) => {
  const gid = objectIdGenerator.toHexString();
  dispatch(createGraphAction({ gid, freq }));
  return gid;
};

//
//  CLONE GRAPH
//

export interface CloneGraphAction {
  type: typeof CLONE_GRAPH;
  gid: string;
}

export const cloneGraphAction = ({ gid }: { gid: string }): CloneGraphAction => ({
  type: CLONE_GRAPH,
  gid,
});

//
//  redraw graph
//

export interface RedrawGraphAction {
  type: typeof GRAPH_UPDATE;
  payload: { gid: string | undefined; wsid: undefined; stage: undefined };
}

export const redrawGraphAction = ({ gid }: { gid?: string } = {}): RedrawGraphAction => ({
  type: GRAPH_UPDATE,
  payload: { gid, wsid: undefined, stage: undefined },
});

//
// GRAPH_UPDATE
//

export interface UpdateGraphAction {
  type: typeof GRAPH_UPDATE;
  gid?: string;
  wsid?: string;
  stage?: string;
}

export const updateGraphAction = ({ gid, wsid, stage }: { gid?: string, wsid?: string, stage?: string } = {}): UpdateGraphAction => ({
  type: GRAPH_UPDATE,
  gid,
  wsid,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface UpdateGraphPropsAction {
  type: typeof GRAPH_UPDATE_GRAPH_PROPS;
  gid?: string;
  props?: any; // Replace 'any' with the actual type of props
  stage?: string;
}

export const updateGraphPropsAction = ({ gid, props, stage }: { gid?: string, props?: any, stage?: string } = {}): UpdateGraphPropsAction => ({
  type: GRAPH_UPDATE_GRAPH_PROPS,
  gid,
  props,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface UpdateSeriesPropsAction {
  type: typeof GRAPH_UPDATE_SERIES_PROPS;
  gid?: string;
  wsid?: string;
  props?: any; // Replace 'any' with the actual type of props
}

export const updateSeriesPropsAction = ({ gid, wsid, props }: { gid?: string, wsid?: string, props?: any } = {}): UpdateSeriesPropsAction => ({
  type: GRAPH_UPDATE_SERIES_PROPS,
  gid,
  wsid,
  props,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface UpdateGraphUIPropsAction {
  type: typeof GRAPH_UPDATE_UI_PROPS;
  gid?: string;
  props?: any; // Replace 'any' with the actual type of props
}

export const updateGraphUIPropsAction = ({ gid, props }: { gid?: string, props?: any } = {}): UpdateGraphUIPropsAction => ({
  type: GRAPH_UPDATE_UI_PROPS,
  gid,
  props,
});

//
// GRAPH_UPDATE_OUTPUT
//

export interface UpdateGraphOutputAction {
  type: typeof GRAPH_UPDATE_OUTPUT;
  payload: { gid: string | undefined; output: any }; // Replace 'any' with the actual type of output
}

export const updateGraphOutputAction = ({ gid, output }: { gid?: string, output: any }): UpdateGraphOutputAction => ({
  type: GRAPH_UPDATE_OUTPUT,
  payload: { gid, output },
});

//
// GRAPH_UPDATE_STATUS
//

export interface UpdateGraphStatusAction {
  type: typeof GRAPH_UPDATE_STATUS;
  payload: { gid: string | undefined; status: any }; // Replace 'any' with the actual type of status
}

export const updateGraphStatusAction = ({ gid, status }: { gid?: string, status: any }): UpdateGraphStatusAction => ({
  type: GRAPH_UPDATE_STATUS,
  payload: { gid, status },
});

//
// GRAPH_FOCUS
//

export interface FocusOnGraphAction {
  type: typeof GRAPH_FOCUS;
  payload: { gid: string };
}

export const focusOnGraphAction = (gid: string): FocusOnGraphAction => ({
  type: GRAPH_FOCUS,
  payload: { gid },
});

export const focusOnGraph = (gid: string) => (dispatch: (action: FocusOnGraphAction) => void) => {
  dispatch(focusOnGraphAction(gid));
};

//
// GRAPH_SAVE_CURRENT_GID
//

export interface SaveCurrentGraphIdAction {
  type: typeof GRAPH_SAVE_CURRENT_GID;
  payload: { gid: string | undefined };
}

export const saveCurrentGraphIdAction = ({ gid }: { gid?: string } = {}): SaveCurrentGraphIdAction => ({
  type: GRAPH_SAVE_CURRENT_GID,
  payload: { gid },
});

//
// GRAPH_ADD_REF_SERIES
//

export interface AddRefSeriesToGraphAction {
  type: typeof GRAPH_ADD_REF_SERIES;
  gid?: string;
  name?: string;
  tsid?: string;
  collId?: string;
  realtime?: boolean;
}

export const addRefSeriesToGraphAction = ({
  gid, name, tsid, collId, realtime,
}: {
  gid?: string, name?: string, tsid?: string, collId?: string, realtime?: boolean
} = {}): AddRefSeriesToGraphAction => ({
  type: GRAPH_ADD_REF_SERIES,
  gid,
  name,
  tsid,
  collId,
  realtime,
});

//
// GRAPH_ADD_NAMED_SERIES
//

export interface AddNamedSeriesToGraphAction {
  type: typeof GRAPH_ADD_NAMED_SERIES;
  gid?: string;
  name?: string;
  tsName?: string;
  collName?: string;
  spaceName?: string;
  realtime?: boolean;
}

export const addNamedSeriesToGraphAction = ({
  gid, name, tsName, collName, spaceName, realtime,
}: {
  gid?: string, name?: string, tsName?: string, collName?: string,
  spaceName?: string, realtime?: boolean
} = {}): AddNamedSeriesToGraphAction => ({
  type: GRAPH_ADD_NAMED_SERIES,
  gid,
  name,
  tsName,
  collName,
  spaceName,
  realtime,
});

//
// GRAPH_ADD_EXPR_SERIES
//

export interface AddExprSeriesToGraphAction {
  type: typeof GRAPH_ADD_EXPR_SERIES;
  gid?: string;
  name?: string;
  expr?: string;
  realtime?: boolean;
}

export const addExprSeriesToGraphAction = ({
  gid, name, expr, realtime,
}: { gid?: string, name?: string, expr?: string, realtime?: boolean } = {}): AddExprSeriesToGraphAction => ({
  type: GRAPH_ADD_EXPR_SERIES,
  gid,
  name,
  expr,
  realtime,
});

//
// GRAPH_ADD_DATA_SERIES
//

export interface AddDataSeriesToGraphAction {
  type: typeof GRAPH_ADD_DATA_SERIES;
  gid?: string;
  name?: string;
  freq?: string;
  fparam?: any; // Replace 'any' with the actual type of fparam
  dtype?: string;
  dparam?: any; // Replace 'any' with the actual type of dparam
  units?: string;
  data?: any; // Replace 'any' with the actual type of data
  realtime?: boolean;
}

export const addDataSeriesToGraphAction = ({
  gid, name, freq, fparam, dtype, dparam, units, data, realtime,
}: {
  gid?: string, name?: string, freq?: string, fparam?: any, dtype?: string,
  dparam?: any, units?: string, data?: any, realtime?: boolean
} = {}): AddDataSeriesToGraphAction => ({
  type: GRAPH_ADD_DATA_SERIES,
  gid,
  name,
  freq,
  fparam,
  dtype,
  dparam,
  units,
  data,
  realtime,
});

//
// GRAPH_ADD_SERIES
//

export interface AddSeriesToGraphAction {
  type: typeof GRAPH_ADD_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined };
}

export const addSeriesToGraphAction = ({
  gid, wsid,
}: { gid?: string, wsid?: string } = {}): AddSeriesToGraphAction => ({
  type: GRAPH_ADD_SERIES,
  payload: {
    gid, wsid,
  },
});

//
// GRAPH_ADD_MANY_REF_SERIES
//

export interface AddSelectedTimeseriesToGraphAction {
  type: typeof GRAPH_ADD_MANY_REF_SERIES;
  gid: string;
  timeseriesList: any[]; // Replace 'any' with the actual type of timeseriesList
}

export const addSelectedTimeseriesToGraphAction = ({ gid, timeseriesList }: { gid: string, timeseriesList: any[] }): AddSelectedTimeseriesToGraphAction => ({
  type: GRAPH_ADD_MANY_REF_SERIES,
  gid,
  timeseriesList,
});

//
// GRAPH_CLEAR_N_ADD_SERIES
//

export interface AddNewSeriesToClearGraphAction {
  type: typeof GRAPH_CLEAR_N_ADD_SERIES;
  gid?: string;
  collId?: string;
  tsid?: string;
  realtime?: boolean;
  vid?: string;
  name?: string;
}

export const addNewSeriesToClearGraphAction = ({
  gid, collId, tsid, realtime, vid, name,
}: {
  gid?: string, collId?: string, tsid?: string, realtime?: boolean, vid?: string, name?: string
} = {}): AddNewSeriesToClearGraphAction => ({
  type: GRAPH_CLEAR_N_ADD_SERIES,
  gid,
  collId,
  tsid,
  realtime,
  vid,
  name,
});

//
// GRAPH_REORDER_SERIES
//

export interface ReorderSeriesAction {
  type: typeof GRAPH_REORDER_SERIES;
  gid?: string;
  wsid?: string;
  pos?: number;
}

export const reorderSeriesAction = ({ gid, wsid, pos }: { gid?: string, wsid?: string, pos?: number } = {}): ReorderSeriesAction => ({
  type: GRAPH_REORDER_SERIES,
  gid,
  wsid,
  pos,
});

//
// GRAPH_REMOVE_SERIES
//

export interface RemoveSeriesAction {
  type: typeof GRAPH_REMOVE_SERIES;
  gid?: string;
  wsid?: string;
}

export const removeSeriesAction = ({ gid, wsid }: { gid?: string, wsid?: string } = {}): RemoveSeriesAction => ({
  type: GRAPH_REMOVE_SERIES,
  gid,
  wsid,
});

//
// GRAPH_APPEND_SERIES
//

export interface AppendSeriesDefAction {
  type: typeof GRAPH_SAVE_APPEND_SERIES;
  payload: { gid: string | undefined; series: any }; // Replace 'any' with the actual type of series
}

export const appendSeriesDefAction = ({ gid, series }: { gid?: string, series: any }): AppendSeriesDefAction => ({
  type: GRAPH_SAVE_APPEND_SERIES,
  payload: { gid, series },
});

//
// GRAPH_REMOVE_SERIES
//

export interface RemoveSeriesDefAction {
  type: typeof GRAPH_SAVE_REMOVE_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined };
}

export const removeSeriesDefAction = ({ gid, wsid }: { gid?: string, wsid?: string } = {}): RemoveSeriesDefAction => ({
  type: GRAPH_SAVE_REMOVE_SERIES,
  payload: { gid, wsid },
});

//
// GRAPH_CLEAR_SERIES
//

export interface ClearSeriesAction {
  type: typeof GRAPH_CLEAR_SERIES;
  gid?: string;
}

export const clearSeriesAction = ({ gid }: { gid?: string } = {}): ClearSeriesAction => ({
  // trigger saga
  type: GRAPH_CLEAR_SERIES,
  gid,
});

//
// GRAPH_SAVE_CLEAR_SERIES
//

export interface ClearSeriesDefAction {
  type: typeof GRAPH_SAVE_CLEAR_SERIES;
  payload: { gid: string | undefined };
}

export const clearSeriesDefAction = ({ gid }: { gid?: string } = {}): ClearSeriesDefAction => ({
  // clear at the store
  type: GRAPH_SAVE_CLEAR_SERIES,
  payload: { gid },
});

//
// GRAPH_SELECT_SERIES
//

export interface SelectSeriesAction {
  type: typeof GRAPH_SELECT_SERIES;
  gid?: string;
  wsid?: string;
  clear?: boolean;
}

export const selectSeriesAction = ({ gid, wsid, clear }: { gid?: string, wsid?: string, clear?: boolean } = {}): SelectSeriesAction => ({
  type: GRAPH_SELECT_SERIES,
  gid,
  wsid,
  clear,
});

//
// GRAPH_DESELECT_SERIES
//

export interface DeselectSeriesAction {
  type: typeof GRAPH_DESELECT_SERIES;
  gid?: string;
  wsid?: string;
}

export const deselectSeriesAction = ({ gid, wsid }: { gid?: string, wsid?: string } = {}): DeselectSeriesAction => ({
  type: GRAPH_DESELECT_SERIES,
  gid,
  wsid,
});

//
// GRAPH_UPDATE_TITLE
//

export interface UpdateGraphTitleAction {
  type: typeof GRAPH_UPDATE_TITLE;
  payload: { gid: string | undefined; title: string | undefined; style: any }; // Replace 'any' with the actual type of style
}
export const updateGraphTitleAction = ({ gid, title, style }: { gid?: string, title?: string, style?: any } = {}): UpdateGraphTitleAction => ({
  type: GRAPH_UPDATE_TITLE,
  payload: { gid, title, style },
});

export const updateGraphTitle = ({ gid, title, style }: { gid: string, title?: string, style?: any }) => (dispatch: (action: UpdateGraphTitleAction) => void) => {
  dispatch(updateGraphTitleAction({ gid, title, style }));
};

//
//  update graph realtime
//

export interface UpdateGraphRealtimeAction {
  type: typeof GRAPH_UPDATE_REALTIME;
  realtime?: boolean;
}

export const updateGraphRealtimeAction = ({ realtime }:{ realtime?: boolean } = {}): UpdateGraphRealtimeAction => ({
  type: GRAPH_UPDATE_REALTIME,
  realtime,
});

//
//  update graph range
//

export interface UpdateRangeAction {
  type: typeof GRAPH_UPDATE_RANGE;
  gid?: string;
  rangeStart?: number;
  rangeEnd?: number;
}

export const updateRangeAction = ({ gid, rangeStart, rangeEnd }: { gid?: string, rangeStart?: number, rangeEnd?: number } = {}): UpdateRangeAction => ({
  type: GRAPH_UPDATE_RANGE,
  gid,
  rangeStart,
  rangeEnd,
});

//
//  apply unary function
//

export interface ApplyUnaryFunctionAction {
  type: typeof GRAPH_APPLY_UNARY_FUNC;
  gid?: string;
  wsid?: string;
  funcName?: string;
  args?: any; // Replace 'any' with the actual type of args
  params?: any; // Replace 'any' with the actual type of params
  create?: boolean;
}

export const applyUnaryFunctionAction = ({
  gid, wsid, funcName, args, params, create,
}: {
  gid?: string, wsid?: string, funcName?: string, args?: any, params?: any, create?: boolean
} = {}): ApplyUnaryFunctionAction => ({
  type: GRAPH_APPLY_UNARY_FUNC,
  gid,
  wsid,
  funcName,
  args,
  params,
  create,
});

//
//  apply binary function
//

export interface ApplyBinaryFunctionAction {
  type: typeof GRAPH_APPLY_BINARY_FUNC;
  gid?: string;
  wsid1?: string;
  wsid2?: string;
  funcName?: string;
}

export const applyBinaryFunctionAction = ({
  gid, wsid1, wsid2, funcName,
}: { gid?: string, wsid1?: string, wsid2?: string, funcName?: string } = {}): ApplyBinaryFunctionAction => ({
  type: GRAPH_APPLY_BINARY_FUNC,
  gid,
  wsid1,
  wsid2,
  funcName,
});

//
//  apply binary operator
//

export interface ApplyBinaryOperatorAction {
  type: typeof GRAPH_APPLY_BINARY_OPERATOR;
  gid?: string;
  wsid1?: string;
  wsid2?: string;
  operator?: string;
}

export const applyBinaryOperatorAction = ({
  gid, wsid1, wsid2, operator,
}: { gid?: string, wsid1?: string, wsid2?: string, operator?: string } = {}): ApplyBinaryOperatorAction => ({
  type: GRAPH_APPLY_BINARY_OPERATOR,
  gid,
  wsid1,
  wsid2,
  operator,
});

//
//  apply unary function
//

export interface UpdateSeriesExprAction {
  type: typeof GRAPH_UPDATE_SERIES_EXPR;
  gid?: string;
  wsid?: string;
  expr?: string;
  name?: string;
}

export const updateSeriesExprAction = ({
  gid, wsid, expr, name,
}: { gid?: string, wsid?: string, expr?: string, name?: string } = {}): UpdateSeriesExprAction => ({
  type: GRAPH_UPDATE_SERIES_EXPR,
  gid,
  wsid,
  expr,
  name,
});

//
//  clone series on a graph
//

export interface CloneSeriesAction {
  type: typeof GRAPH_CLONE_SERIES;
  gid?: string;
  wsid?: string;
}

export const cloneSeriesAction = ({ gid, wsid }: { gid?: string, wsid?: string } = {}): CloneSeriesAction => ({
  type: GRAPH_CLONE_SERIES,
  gid,
  wsid,
});

//
// GRAPH_EXPORT_LOCAL
//

export interface ExportGraphAction {
  type: typeof GRAPH_EXPORT_LOCAL;
  gid?: string;
}

export const exportGraphAction = ({ gid }: { gid?: string } = {}): ExportGraphAction => ({
  type: GRAPH_EXPORT_LOCAL,
  gid,
});

// DELETE GRAPH OBJECT

export interface DeleteGraphObjectAction {
  type: typeof GRAPH_DELETE_OBJECT;
  gid: string;
}

export const deleteGraphObjectAction = (gid: string): DeleteGraphObjectAction => ({
  type: GRAPH_DELETE_OBJECT,
  gid,
});

//
// Graph processing steps actions
//

// GRAPH_SAVE_* actions

export interface SaveNewGraphAction {
  type: typeof GRAPH_SAVE_NEW_GRAPH;
  payload: {
    gid: string | undefined;
    freq: string | undefined;
    title: string | undefined;
    subtitle: string | undefined;
    legend: string | undefined
  };
}

export const saveNewGraphAction = ({
  gid, freq, title, subtitle, legend,
}: { gid?: string, freq?: string, title?: string, subtitle?: string, legend?: string } = {}): SaveNewGraphAction => ({
  type: GRAPH_SAVE_NEW_GRAPH,
  payload: {
    gid, freq, title, subtitle, legend,
  },
});

//
// GRAPH_SAVE_GRAPH_OBJECT
//

export interface SaveGraphObjectAction {
  type: typeof GRAPH_SAVE_GRAPH_OBJECT;
  payload: { gid: string | undefined; object: any }; // Replace 'any' with the actual type of object
}

export const saveGraphObjectAction = ({ gid, object }: { gid?: string, object?: any } = {}): SaveGraphObjectAction => ({
  type: GRAPH_SAVE_GRAPH_OBJECT,
  payload: { gid, object },
});

//
// GRAPH_SAVE_DETERMINED_FREQ
//

export interface SaveGraphFreqAction {
  type: typeof GRAPH_SAVE_DETERMINED_FREQ;
  payload: { gid: string | undefined; freq: string | undefined };
}

export const saveGraphFreqAction = ({ gid, freq } : { gid?: string, freq?: string | undefined } = {}): SaveGraphFreqAction => ({
  type: GRAPH_SAVE_DETERMINED_FREQ,
  payload: { gid, freq },
});

//
// GRAPH_SAVE_TRANSFORMED_SERIES
//

export interface SaveTransformedSeriesAction {
  type: typeof GRAPH_SAVE_TRANSFORMED_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined; data: any }; // Replace 'any' with the actual type of data
}

export const saveTransformedSeriesAction = ({ gid, wsid, data }: { gid?: string, wsid?: string, data?: any } = {}): SaveTransformedSeriesAction => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES,
  payload: { gid, wsid, data },
});

//
// GRAPH_SAVE_TRANSFORMED_SERIES_BULK
//

export interface SaveTransformedSeriesBulkAction {
  type: typeof GRAPH_SAVE_TRANSFORMED_SERIES_BULK;
  payload: { gid: string | undefined; transformedSeries: any }; // Replace 'any' with the actual type of transformedSeries
}

export const saveTransformedSeriesBulkAction = ({ gid, transformedSeries }: { gid?: string, transformedSeries?: any } = {}): SaveTransformedSeriesBulkAction => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
  payload: { gid, transformedSeries },
});

//
// GRAPH_SAVE_OUTPUT
//

export interface SaveGeneratedGraphAction {
  type: typeof GRAPH_SAVE_OUTPUT;
  payload: { gid: string | undefined; output: any }; // Replace 'any' with the actual type of output
}

export const saveGeneratedGraphAction = ({ gid, output }: { gid?: string, output?: any } = {}): SaveGeneratedGraphAction => ({
  type: GRAPH_SAVE_OUTPUT,
  payload: { gid, output },
});

//
// GRAPH_SAVE_REORDER_SERIES
//

export interface SaveReorderSeriesAction {
  type: typeof GRAPH_SAVE_REORDER_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined; pos: number | undefined };
}

export const saveReorderSeriesAction = ({ gid, wsid, pos }: { gid?: string, wsid?: string, pos?: number } = {}): SaveReorderSeriesAction => ({
  type: GRAPH_SAVE_REORDER_SERIES,
  payload: { gid, wsid, pos },
});

//
// GRAPH_SAVE_GRAPH_PROPS
//

export interface SaveGraphPropsAction {
  type: typeof GRAPH_SAVE_GRAPH_PROPS;
  payload: { gid: string | undefined; props: any }; // Replace 'any' with the actual type of props
}

export const saveGraphPropsAction = ({ gid, props } : { gid?: string, props?: any } = {}): SaveGraphPropsAction => ({
  type: GRAPH_SAVE_GRAPH_PROPS,
  payload: { gid, props },
});

//
// GRAPH_SAVE_SERIES_PROPS
//

export interface SaveSeriesPropsAction {
  type: typeof GRAPH_SAVE_SERIES_PROPS;
  payload: { gid: string | undefined; wsid: string | undefined; props: any }; // Replace 'any' with the actual type of props
}

export const saveSeriesPropsAction = ({ gid, wsid, props } : { gid?: string, wsid?: string, props?: any } = {}): SaveSeriesPropsAction => ({
  type: GRAPH_SAVE_SERIES_PROPS,
  payload: { gid, wsid, props },
});

//
// GRAPH_SAVE_UI_PROPS
//

export interface SaveGraphUIPropsAction {
  type: typeof GRAPH_SAVE_UI_PROPS;
  payload: { gid: string | undefined; props: any }; // Replace 'any' with the actual type of props
}

export const saveGraphUIPropsAction = ({ gid, props }: { gid?: string, props?: any } = {}): SaveGraphUIPropsAction => ({
  type: GRAPH_SAVE_UI_PROPS,
  payload: { gid, props },
});

//
// GRAPH_SAVE_EXPORT_OPTIONS
//

export interface SaveGraphExportOptionsAction {
  type: typeof GRAPH_SAVE_EXPORT_OPTIONS;
  payload: { gid: string | undefined; opts: any }; // Replace 'any' with the actual type of opts
}

export const saveGraphExportOptionsAction = ({ gid, opts }: { gid?: string, opts?: any } = {}): SaveGraphExportOptionsAction => ({
  type: GRAPH_SAVE_EXPORT_OPTIONS,
  payload: { gid, opts },
});

//
// GRAPH_SAVE_REPLACE_SERIES
//

export interface SaveReplaceSeriesAction {
  type: typeof GRAPH_SAVE_REPLACE_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined; to_wsid: string | undefined };
}

export const saveReplaceSeriesAction = ({ gid, wsid, to_wsid }: { gid?: string, wsid?: string, to_wsid?: string } = {}): SaveReplaceSeriesAction => ({
  type: GRAPH_SAVE_REPLACE_SERIES,
  payload: { gid, wsid, to_wsid },
});

//
// GRAPH_SAVE_SELECT_SERIES
//

export interface SaveSelectSeriesAction {
  type: typeof GRAPH_SAVE_SELECT_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined; clear: boolean | undefined };
}

export const saveSelectSeriesAction = ({ gid, wsid, clear }: { gid?: string, wsid?: string, clear?: boolean } = {}): SaveSelectSeriesAction => ({
  type: GRAPH_SAVE_SELECT_SERIES,
  payload: { gid, wsid, clear },
});

//
// GRAPH_SAVE_DESELECT_SERIES
//

export interface SaveDeselectSeriesAction {
  type: typeof GRAPH_SAVE_DESELECT_SERIES;
  payload: { gid: string | undefined; wsid: string | undefined };
}

export const saveDeselectSeriesAction = ({ gid, wsid }: { gid?: string, wsid?: string } = {}): SaveDeselectSeriesAction => ({
  type: GRAPH_SAVE_DESELECT_SERIES,
  payload: { gid, wsid },
});

//
// GRAPH_SAVE_RESTORE_REDUCER
//

export interface RestoreGraphReducer {
  type: typeof GRAPH_SAVE_RESTORE_REDUCER;
  payload: any; // Replace 'any' with the actual type of payload
}

export const restoreGraphReducer = (payload: any): RestoreGraphReducer => ({
  type: GRAPH_SAVE_RESTORE_REDUCER,
  payload,
});

//
// GRAPH_SAVE_CHART_REF
//

export interface GraphSaveChartRefAction {
  type: typeof GRAPH_SAVE_CHART_REF;
  payload: { gid: string | undefined; ref: any }; // Replace 'any' with the actual type of ref
}

export const graphSaveChartRefAction = ({ gid, ref }: {gid?: string, ref?: any } = {}): GraphSaveChartRefAction => ({
  type: GRAPH_SAVE_CHART_REF,
  payload: { gid, ref },
});

//
// GRAPH_SAVE_DELETE_OBJECT
//

export interface SaveDeleteGraphObjectAction {
  type: typeof GRAPH_SAVE_DELETE_OBJECT;
  payload: { gid: string | undefined };
}

export const saveDeleteGraphObjectAction = ({ gid }: { gid?: string } = {}): SaveDeleteGraphObjectAction => ({
  type: GRAPH_SAVE_DELETE_OBJECT,
  payload: { gid },
});

// ADD GRAPH ERRORS

export interface AddGraphErrorsAction {
  type: typeof GRAPH_ERRORS_ADD;
  payload: { gid: string | undefined; errors: any }; // Replace 'any' with the actual type of errors
}

export const addGraphErrorsAction = ({ gid, errors }: { gid?: string, errors?: any } = {}): AddGraphErrorsAction => ({
  type: GRAPH_ERRORS_ADD,
  payload: { gid, errors },
});

// CLEAR GRAPH ERRORS

export interface ClearGraphErrorsAction {
  type: typeof GRAPH_ERRORS_CLEAR;
  payload: { gid: string | undefined };
}

export const clearGraphErrorsAction = ({ gid }: { gid?: string } = {}): ClearGraphErrorsAction => ({
  type: GRAPH_ERRORS_CLEAR,
  payload: { gid },
});

// //
// // GRAPH_CREATE
// //

// export const createGraphAction = ({ gid, freq, title, subtitle, legend }) => ({
//   type: GRAPH_CREATE,
//   gid,
//   freq,
//   title,
//   subtitle,
//   legend,
// });

// export const createGraph = (freq) => (dispatch) => {
//   const gid = ObjectID().toHexString();
//   dispatch(createGraphAction({ gid, freq }));
//   return gid;
// };

// //
// //  CLONE GRAPH
// //
// export const cloneGraphAction = ({ gid }) => ({
//   type: CLONE_GRAPH,
//   gid,
// });

// //
// //  redraw graph
// //
// export const redrawGraphAction = ({ gid }: { gid?: string } = {}) => ({
//   type: GRAPH_UPDATE,
//   payload: { gid, wsid: undefined, stage: undefined },
// });

// //
// // GRAPH_UPDATE
// //

// export const updateGraphAction = ({ gid, wsid, stage } = {}) => ({
//   type: GRAPH_UPDATE,
//   gid,
//   wsid,
//   stage,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateGraphPropsAction = ({ gid, props, stage } = {}) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_GRAPH_PROPS,
//   gid,
//   props,
//   stage,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateSeriesPropsAction = ({ gid, wsid, props } = {}) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_SERIES_PROPS,
//   gid,
//   wsid,
//   props,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateGraphUIPropsAction = ({ gid, props } = {}) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_UI_PROPS,
//   gid,
//   props,
// });

// //
// // GRAPH_UPDATE_OUTPUT
// //

// export const updateGraphOutputAction = ({ gid, output } = {}) => ({
//   type: GRAPH_UPDATE_OUTPUT,
//   payload: { gid, output },
// });

// //
// // GRAPH_UPDATE_STATUS
// //

// export const updateGraphStatusAction = ({ gid, status } = {}) => ({
//   type: GRAPH_UPDATE_STATUS,
//   payload: { gid, status },
// });

// //
// // GRAPH_FOCUS
// //

// export const focusOnGraphAction = (gid) => ({
//   type: GRAPH_FOCUS,
//   payload: { gid },
// });

// export const focusOnGraph = (gid) => (dispatch) => {
//   dispatch(focusOnGraphAction(gid));
// };

// export const saveCurrentGraphIdAction = ({ gid }: { gid?: string } = {}) => ({
//   type: GRAPH_SAVE_CURRENT_GID,
//   payload: { gid },
// });

// //
// // GRAPH_ADD_SERIES
// //

// // export const addNewSeriesToGraphAction = ({
// //   gid, collId, tsid, realtime, vid, expr, name,
// // } = {}) => ({
// //   type: GRAPH_ADD_SERIES,
// //   payload: {
// //     gid,
// //     collId,
// //     tsid, realtime, vid, expr, name,
// //   },
// // });

// export const addRefSeriesToGraphAction = ({
//   gid, name, tsid, collId, realtime,
// } = {}) => ({
//   type: GRAPH_ADD_REF_SERIES,
//   gid,
//   name,
//   tsid,
//   collId,
//   realtime,
// });

// export const addNamedSeriesToGraphAction = ({
//   gid, name, tsName, collName, spaceName, realtime,
// } = {}) => ({
//   type: GRAPH_ADD_NAMED_SERIES,
//   gid,
//   name,
//   tsName,
//   collName,
//   spaceName,
//   realtime,
// });

// export const addExprSeriesToGraphAction = ({
//   gid, name, expr, realtime,
// } = {}) => ({
//   type: GRAPH_ADD_EXPR_SERIES,
//   gid,
//   name,
//   expr,
//   realtime,
// });

// export const addDataSeriesToGraphAction = ({
//   gid, name, freq, fparam, dtype, dparam, units, data, realtime,
// } = {}) => ({
//   type: GRAPH_ADD_DATA_SERIES,
//   gid,
//   name,
//   freq,
//   fparam,
//   dtype,
//   dparam,
//   units,
//   data,
//   realtime,
// });

// export const addSeriesToGraphAction = ({
//   gid, wsid,
// } = {}) => ({
//   type: GRAPH_ADD_SERIES,
//   payload: {
//     gid, wsid,
//   },
// });

// export const addSelectedTimeseriesToGraphAction = ({ gid, timeseriesList }) => ({
//   type: GRAPH_ADD_MANY_REF_SERIES,
//   gid,
//   timeseriesList,
// });

// //
// // GRAPH_CLEAR_N_ADD_SERIES
// //

// export const addNewSeriesToClearGraphAction = ({
//   gid, collId, tsid, realtime, vid, name,
// } = {}) => ({
//   type: GRAPH_CLEAR_N_ADD_SERIES,
//   gid,
//   collId,
//   tsid,
//   realtime,
//   vid,
//   name,
// });

// //
// // GRAPH_REORDER_SERIES
// //

// export const reorderSeriesAction = ({ gid, wsid, pos } = {}) => ({
//   type: GRAPH_REORDER_SERIES,
//   gid,
//   wsid,
//   pos,
// });

// //
// // GRAPH_REMOVE_SERIES
// //

// export const removeSeriesAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_REMOVE_SERIES,
//   gid,
//   wsid,
// });

// //
// // GRAPH_APPEND_SERIES
// //

// export const appendSeriesDefAction = ({ gid, series } = {}) => ({
//   type: GRAPH_SAVE_APPEND_SERIES,
//   payload: { gid, series },
// });

// //
// // GRAPH_REMOVE_SERIES
// //

// export const removeSeriesDefAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_SAVE_REMOVE_SERIES,
//   payload: { gid, wsid },
// });

// //
// // GRAPH_CLEAR_SERIES
// //

// export const clearSeriesAction = ({ gid }: { gid?: string } = {}) => ({
//   // trigger saga
//   type: GRAPH_CLEAR_SERIES,
//   gid,
// });

// export const clearSeriesDefAction = ({ gid }: { gid?: string } = {}) => ({
//   // clear at the store
//   type: GRAPH_SAVE_CLEAR_SERIES,
//   payload: { gid },
// });

// //
// // GRAPH_SELECT_SERIES
// //

// export const selectSeriesAction = ({ gid, wsid, clear } = {}) => ({
//   type: GRAPH_SELECT_SERIES,
//   gid,
//   wsid,
//   clear,
// });

// export const deselectSeriesAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_DESELECT_SERIES,
//   gid,
//   wsid,
// });

// //
// // GRAPH_UPDATE_TITLE
// //

// export const updateGraphTitleAction = ({ gid, title, style } = {}) => ({
//   type: GRAPH_UPDATE_TITLE,
//   payload: { gid, title, style },
// });

// export const updateGraphTitle = ({ gid, title, style } = {}) => (dispatch) => {
//   dispatch(updateGraphTitleAction({ gid, title, style }));
// };

// //
// //  update graph realtime
// //
// export const updateGraphRealtimeAction = ({ realtime } = {}) => ({
//   type: GRAPH_UPDATE_REALTIME,
//   realtime,
// });

// //
// //  update graph range
// //
// export const updateRangeAction = ({ gid, rangeStart, rangeEnd } = {}) => ({
//   type: GRAPH_UPDATE_RANGE,
//   gid,
//   rangeStart,
//   rangeEnd,
// });

// //
// //  apply unary function
// //
// export const applyUnaryFunctionAction = ({ gid, wsid, funcName, args, params, create } = {}) => ({
//   type: GRAPH_APPLY_UNARY_FUNC,
//   gid,
//   wsid,
//   funcName,
//   args,
//   params,
//   create,
// });

// //
// //  apply binary function
// //
// export const applyBinaryFunctionAction = ({
//   gid, wsid1, wsid2, funcName,
// } = {}) => ({
//   type: GRAPH_APPLY_BINARY_FUNC,
//   gid,
//   wsid1,
//   wsid2,
//   funcName,
// });

// //
// //  apply binary operator
// //
// export const applyBinaryOperatorAction = ({
//   gid, wsid1, wsid2, operator,
// } = {}) => ({
//   type: GRAPH_APPLY_BINARY_OPERATOR,
//   gid,
//   wsid1,
//   wsid2,
//   operator,
// });

// //
// //  apply unary function
// //
// export const updateSeriesExprAction = ({
//   gid, wsid, expr, name,
// } = {}) => ({
//   type: GRAPH_UPDATE_SERIES_EXPR,
//   gid,
//   wsid,
//   expr,
//   name,
// });

// //
// //  clone series on a graph
// //
// export const cloneSeriesAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_CLONE_SERIES,
//   gid,
//   wsid,
// });

// export const exportGraphAction = ({ gid }: { gid?: string } = {}) => ({
//   type: GRAPH_EXPORT_LOCAL,
//   gid,
// });

// // DELETE GRAPH OBJECT

// export const deleteGraphObjectAction = (gid) => ({
//   type: GRAPH_DELETE_OBJECT,
//   gid,
// });

// //
// // Graph processing steps actions
// //

// // export const resolveSeriesAction = ({ gid, wsid } = {}) => ({
// //   type: GRAPH_RESOLVE_SERIES,
// //   gid,
// //   wsid,
// // });

// // export const determineGraphFreqAction = ({ gid }: { gid?: string } = {}) => ({
// //   type: GRAPH_DETERMINE_FREQ,
// //   gid,
// // });

// // export const transformGraphSeriesAction = ({ gid }: { gid?: string } = {}) => ({
// //   type: GRAPH_TRANSFORM_SERIES,
// //   gid,
// // });

// // export const generateGraphAction = ({ gid }: { gid?: string } = {}) => ({
// //   type: GRAPH_GENERATE_GRAPH,
// //   gid,
// // });

// // GRAPH_SAVE_* actions
// export const saveNewGraphAction = ({ gid, freq, title, subtitle, legend } = {}) => ({
//   type: GRAPH_SAVE_NEW_GRAPH,
//   payload: { gid, freq, title, subtitle, legend },
// });

// export const saveGraphObjectAction = ({ gid, object } = {}) => ({
//   type: GRAPH_SAVE_GRAPH_OBJECT,
//   payload: { gid, object },
// });

// export const saveGraphFreqAction = ({ gid, freq } = {}) => ({
//   type: GRAPH_SAVE_DETERMINED_FREQ,
//   payload: { gid, freq },
// });

// export const saveTransformedSeriesAction = ({ gid, wsid, data } = {}) => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES,
//   payload: { gid, wsid, data },
// });

// export const saveTransformedSeriesBulkAction = ({ gid, transformedSeries } = {}) => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
//   payload: { gid, transformedSeries },
// });

// export const saveGeneratedGraphAction = ({ gid, output } = {}) => ({
//   type: GRAPH_SAVE_OUTPUT,
//   payload: { gid, output },
// });

// export const saveReorderSeriesAction = ({ gid, wsid, pos } = {}) => ({
//   type: GRAPH_SAVE_REORDER_SERIES,
//   payload: { gid, wsid, pos },
// });

// export const saveGraphPropsAction = ({ gid, props } = {}) => ({
//   type: GRAPH_SAVE_GRAPH_PROPS,
//   payload: { gid, props },
// });

// export const saveSeriesPropsAction = ({ gid, wsid, props } = {}) => ({
//   type: GRAPH_SAVE_SERIES_PROPS,
//   payload: { gid, wsid, props },
// });

// export const saveGraphUIPropsAction = ({ gid, props } = {}) => ({
//   type: GRAPH_SAVE_UI_PROPS,
//   payload: { gid, props },
// });

// export const saveGraphExportOptionsAction = ({ gid, opts } = {}) => ({
//   type: GRAPH_SAVE_EXPORT_OPTIONS,
//   payload: { gid, opts },
// });

// export const saveReplaceSeriesAction = ({ gid, wsid, to_wsid } = {}) => ({
//   type: GRAPH_SAVE_REPLACE_SERIES,
//   payload: { gid, wsid, to_wsid },
// });

// export const saveSelectSeriesAction = ({ gid, wsid, clear } = {}) => ({
//   type: GRAPH_SAVE_SELECT_SERIES,
//   payload: { gid, wsid, clear },
// });

// export const saveDeselectSeriesAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_SAVE_DESELECT_SERIES,
//   payload: { gid, wsid },
// });

// export const restoreGraphReducer = (payload) => ({
//   type: GRAPH_SAVE_RESTORE_REDUCER,
//   payload,
// });

// export const graphSaveChartRefAction = ({ gid, ref } = {}) => ({
//   type: GRAPH_SAVE_CHART_REF,
//   payload: { gid, ref },
// });

// export const saveDeleteGraphObjectAction = ({ gid }: { gid?: string } = {}) => ({
//   type: GRAPH_SAVE_DELETE_OBJECT,
//   payload: { gid },
// });

// // ADD GRAPH ERRORS

// export const addGraphErrorsAction = ({ gid, errors } = {}) => ({
//   type: GRAPH_ERRORS_ADD,
//   payload: { gid, errors },
// });

// // CLEAR GRAPH ERRORS

// export const clearGraphErrorsAction = ({ gid }: { gid?: string } = {}) => ({
//   type: GRAPH_ERRORS_CLEAR,
//   payload: { gid },
// });
