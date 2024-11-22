import ObjectID from "bson-objectid";

// Graph
export const GRAPH_CREATE = "GRAPH_CREATE";
export const CLONE_GRAPH = "CLONE_GRAPH";
export const GRAPH_UPDATE = "GRAPH_UPDATE"; // main process
export const GRAPH_FOCUS = "GRAPH_FOCUS";
export const GRAPH_ADD_SERIES = "GRAPH_ADD_SERIES";
export const GRAPH_ADD_EXPR_SERIES = "GRAPH_ADD_EXPR_SERIES";
export const GRAPH_ADD_NAMED_SERIES = "GRAPH_ADD_NAMED_SERIES";
export const GRAPH_ADD_REF_SERIES = "GRAPH_ADD_REF_SERIES";
export const GRAPH_ADD_DATA_SERIES = "GRAPH_ADD_DATA_SERIES";
export const GRAPH_ADD_MANY_REF_SERIES = "GRAPH_ADD_MANY_REF_SERIES";
export const GRAPH_CLEAR_N_ADD_SERIES = "GRAPH_CLEAR_N_ADD_SERIES";
// export const GRAPH_APPEND_SERIES = 'GRAPH_APPEND_SERIES';
export const GRAPH_REMOVE_SERIES = "GRAPH_REMOVE_SERIES";
export const GRAPH_CLEAR_SERIES = "GRAPH_CLEAR_SERIES";
export const GRAPH_UPDATE_SERIES_PROPS = "GRAPH_UPDATE_SERIES_PROPS";
export const GRAPH_UPDATE_GRAPH_PROPS = "GRAPH_UPDATE_GRAPH_PROPS";
export const GRAPH_UPDATE_UI_PROPS = "GRAPH_UPDATE_UI_PROPS";
export const GRAPH_REORDER_SERIES = "GRAPH_REORDER_SERIES";
export const GRAPH_SELECT_SERIES = "GRAPH_SELECT_SERIES";
export const GRAPH_DESELECT_SERIES = "GRAPH_DESELECT_SERIES";
export const GRAPH_DELETE_OBJECT = "GRAPH_DELETE_OBJECT";

export const GRAPH_UPDATE_TITLE = "GRAPH_UPDATE_TITLE";
export const GRAPH_UPDATE_REALTIME = "GRAPH_UPDATE_REALTIME";
export const GRAPH_UPDATE_RANGE = "GRAPH_UPDATE_RANGE";
export const GRAPH_APPLY_UNARY_FUNC = "GRAPH_APPLY_UNARY_FUNC";
export const GRAPH_APPLY_BINARY_FUNC = "GRAPH_APPLY_BINARY_FUNC";
export const GRAPH_APPLY_BINARY_OPERATOR = "GRAPH_APPLY_BINARY_OPERATOR";
export const GRAPH_UPDATE_SERIES_EXPR = "GRAPH_UPDATE_SERIES_EXPR";
export const GRAPH_CLONE_SERIES = "GRAPH_CLONE_SERIES";
export const GRAPH_GRAPH_RESOLVE_ALL_SERIES = "GRAPH_GRAPH_RESOLVE_ALL_SERIES";
export const GRAPH_EXPORT_LOCAL = "GRAPH_EXPORT_LOCAL";

/*
  GRAPH_UPDATE_* actions are used to trigger sagas at different stage of graph processing
*/
// user GRAPH_UPDATE with a stage and wsid
export const GRAPH_UPDATE_OUTPUT = "GRAPH_UPDATE_OUTPUT";
export const GRAPH_UPDATE_STATUS = "GRAPH_UPDATE_STATUS";

/*
  GRAPH_ERRORS_* actions takes care of any errors during graph evaluation
*/
export const GRAPH_ERRORS_ADD = "GRAPH_ERRORS_ADD";
export const GRAPH_ERRORS_CLEAR = "GRAPH_ERRORS_CLEAR";

/*
  GRAPH_SAVE_* actions are used to interact with the store
*/
export const GRAPH_SAVE_NEW_GRAPH = "GRAPH_SAVE_NEW_GRAPH";
export const GRAPH_SAVE_CURRENT_GID = "GRAPH_SAVE_CURRENT_GID";
export const GRAPH_SAVE_GRAPH_OBJECT = "GRAPH_SAVE_GRAPH_OBJECT";
export const GRAPH_SAVE_SERIES_DEF = "GRAPH_SAVE_SERIES_DEF";
export const GRAPH_SAVE_DETERMINED_FREQ = "GRAPH_SAVE_DETERMINED_FREQ";
export const GRAPH_SAVE_TRANSFORMED_SERIES = "GRAPH_SAVE_TRANSFORMED_SERIES";
export const GRAPH_SAVE_TRANSFORMED_SERIES_BULK =
  "GRAPH_SAVE_TRANSFORMED_SERIES_BULK";
export const GRAPH_SAVE_OUTPUT = "GRAPH_SAVE_OUTPUT";
export const GRAPH_SAVE_APPEND_SERIES = "GRAPH_SAVE_APPEND_SERIES";
export const GRAPH_SAVE_REMOVE_SERIES = "GRAPH_SAVE_REMOVE_SERIES";
export const GRAPH_SAVE_CLEAR_SERIES = "GRAPH_SAVE_CLEAR_SERIES";
export const GRAPH_SAVE_REORDER_SERIES = "GRAPH_SAVE_REORDER_SERIES";
export const GRAPH_SAVE_GRAPH_PROPS = "GRAPH_SAVE_GRAPH_PROPS";
export const GRAPH_SAVE_SERIES_PROPS = "GRAPH_SAVE_SERIES_PROPS";
export const GRAPH_SAVE_UI_PROPS = "GRAPH_SAVE_UI_PROPS";
export const GRAPH_SAVE_EXPORT_OPTIONS = "GRAPH_SAVE_EXPORT_OPTIONS";
export const GRAPH_SAVE_REPLACE_SERIES = "GRAPH_SAVE_REPLACE_SERIES";
export const GRAPH_SAVE_SELECT_SERIES = "GRAPH_SAVE_SELECT_SERIES";
export const GRAPH_SAVE_DESELECT_SERIES = "GRAPH_SAVE_DESELECT_SERIES";
export const GRAPH_SAVE_RESTORE_REDUCER = "GRAPH_SAVE_RESTORE_REDUCER";
export const GRAPH_SAVE_CHART_REF = "GRAPH_SAVE_CHART_REF";
export const GRAPH_SAVE_DELETE_OBJECT = "GRAPH_SAVE_DELETE_OBJECT";

const objectIdGenerator = new ObjectID();

//
// GRAPH_CREATE
//

export interface IGraphCreateAction {
  type: typeof GRAPH_CREATE;
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}

export const createGraphAction = ({
  gid,
  freq,
  title,
  subtitle,
  legend,
}: {
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}): IGraphCreateAction => ({
  type: GRAPH_CREATE,
  gid,
  freq,
  title,
  subtitle,
  legend,
});

export const createGraph =
  (freq: string) => (dispatch: (action: IGraphCreateAction) => void) => {
    const gid = objectIdGenerator.toHexString();
    dispatch(createGraphAction({ gid, freq }));
    return gid;
  };

//
//  CLONE GRAPH
//

export interface ICloneGraphAction {
  type: typeof CLONE_GRAPH;
  gid: string;
}

export const cloneGraphAction = ({
  gid,
}: {
  gid: string;
}): ICloneGraphAction => ({
  type: CLONE_GRAPH,
  gid,
});

//
//  redraw graph
//

export interface IRedrawGraphAction {
  type: typeof GRAPH_UPDATE;
  payload: { gid: string; wsid: string | undefined; stage: string | undefined };
}

export const redrawGraphAction = ({
  gid,
}: {
  gid: string;
}): IRedrawGraphAction => ({
  type: GRAPH_UPDATE,
  payload: { gid, wsid: undefined, stage: undefined },
});

//
// GRAPH_UPDATE
//

export interface IUpdateGraphAction {
  type: typeof GRAPH_UPDATE;
  gid: string;
  wsid: string;
  stage?: string;
}

export const updateGraphAction = ({
  gid,
  wsid,
  stage,
}: {
  gid: string;
  wsid: string;
  stage?: string;
}): IUpdateGraphAction => ({
  type: GRAPH_UPDATE,
  gid,
  wsid,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface IUpdateGraphPropsAction {
  type: typeof GRAPH_UPDATE_GRAPH_PROPS;
  gid: string;
  props?: any; // Replace 'any' with the actual type of props
  stage?: string;
}

export const updateGraphPropsAction = ({
  gid,
  props,
  stage,
}: {
  gid: string;
  props?: any;
  stage?: string;
}): IUpdateGraphPropsAction => ({
  type: GRAPH_UPDATE_GRAPH_PROPS,
  gid,
  props,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface IUpdateSeriesPropsAction {
  type: typeof GRAPH_UPDATE_SERIES_PROPS;
  gid: string;
  wsid: string;
  props?: any; // Replace 'any' with the actual type of props
}

export const updateSeriesPropsAction = ({
  gid,
  wsid,
  props,
}: {
  gid: string;
  wsid: string;
  props?: any;
}): IUpdateSeriesPropsAction => ({
  type: GRAPH_UPDATE_SERIES_PROPS,
  gid,
  wsid,
  props,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export interface IUpdateGraphUIPropsAction {
  type: typeof GRAPH_UPDATE_UI_PROPS;
  gid: string;
  props?: any; // Replace 'any' with the actual type of props
}

export const updateGraphUIPropsAction = ({
  gid,
  props,
}: {
  gid: string;
  props?: any;
}): IUpdateGraphUIPropsAction => ({
  type: GRAPH_UPDATE_UI_PROPS,
  gid,
  props,
});

//
// GRAPH_UPDATE_OUTPUT
//

export interface IUpdateGraphOutputAction {
  type: typeof GRAPH_UPDATE_OUTPUT;
  payload: { gid: string; output: any }; // Replace 'any' with the actual type of output
}

export const updateGraphOutputAction = ({
  gid,
  output,
}: {
  gid: string;
  output: any;
}): IUpdateGraphOutputAction => ({
  type: GRAPH_UPDATE_OUTPUT,
  payload: { gid, output },
});

//
// GRAPH_UPDATE_STATUS
//

export interface IUpdateGraphStatusAction {
  type: typeof GRAPH_UPDATE_STATUS;
  payload: { gid: string; status: any }; // Replace 'any' with the actual type of status
}

export const updateGraphStatusAction = ({
  gid,
  status,
}: {
  gid: string;
  status: any;
}): IUpdateGraphStatusAction => ({
  type: GRAPH_UPDATE_STATUS,
  payload: { gid, status },
});

//
// GRAPH_FOCUS
//

export interface IFocusOnGraphAction {
  type: typeof GRAPH_FOCUS;
  payload: { gid: string };
}

export const focusOnGraphAction = (gid: string): IFocusOnGraphAction => ({
  type: GRAPH_FOCUS,
  payload: { gid },
});

export const focusOnGraph =
  (gid: string) => (dispatch: (action: IFocusOnGraphAction) => void) => {
    dispatch(focusOnGraphAction(gid));
  };

//
// GRAPH_SAVE_CURRENT_GID
//

export interface ISaveCurrentGraphIdAction {
  type: typeof GRAPH_SAVE_CURRENT_GID;
  payload: { gid: string };
}

export const saveCurrentGraphIdAction = ({
  gid,
}: {
  gid: string;
}): ISaveCurrentGraphIdAction => ({
  type: GRAPH_SAVE_CURRENT_GID,
  payload: { gid },
});

//
// GRAPH_ADD_REF_SERIES
//

export interface IAddRefSeriesToGraphAction {
  type: typeof GRAPH_ADD_REF_SERIES;
  gid: string;
  name?: string;
  tsid?: string;
  collId?: string;
  realtime?: boolean;
}

export const addRefSeriesToGraphAction = ({
  gid,
  name,
  tsid,
  collId,
  realtime,
}: {
  gid: string;
  name?: string;
  tsid?: string;
  collId?: string;
  realtime?: boolean;
}): IAddRefSeriesToGraphAction => ({
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

export interface IAddNamedSeriesToGraphAction {
  type: typeof GRAPH_ADD_NAMED_SERIES;
  gid: string;
  name?: string;
  tsName?: string;
  collName?: string;
  spaceName?: string;
  realtime?: boolean;
}

export const addNamedSeriesToGraphAction = ({
  gid,
  name,
  tsName,
  collName,
  spaceName,
  realtime,
}: {
  gid: string;
  name?: string;
  tsName?: string;
  collName?: string;
  spaceName?: string;
  realtime?: boolean;
}): IAddNamedSeriesToGraphAction => ({
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

export interface IAddExprSeriesToGraphAction {
  type: typeof GRAPH_ADD_EXPR_SERIES;
  gid: string;
  name?: string;
  expr?: string;
  realtime?: boolean;
}

export const addExprSeriesToGraphAction = ({
  gid,
  name,
  expr,
  realtime,
}: {
  gid: string;
  name?: string;
  expr?: string;
  realtime?: boolean;
}): IAddExprSeriesToGraphAction => ({
  type: GRAPH_ADD_EXPR_SERIES,
  gid,
  name,
  expr,
  realtime,
});

//
// GRAPH_ADD_DATA_SERIES
//

export interface IAddDataSeriesToGraphAction {
  type: typeof GRAPH_ADD_DATA_SERIES;
  gid: string;
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
  gid,
  name,
  freq,
  fparam,
  dtype,
  dparam,
  units,
  data,
  realtime,
}: {
  gid: string;
  name?: string;
  freq?: string;
  fparam?: any;
  dtype?: string;
  dparam?: any;
  units?: string;
  data?: any;
  realtime?: boolean;
}): IAddDataSeriesToGraphAction => ({
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

export interface IAddSeriesToGraphAction {
  type: typeof GRAPH_ADD_SERIES;
  payload: { gid: string; wsid: string };
}

export const addSeriesToGraphAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): IAddSeriesToGraphAction => ({
  type: GRAPH_ADD_SERIES,
  payload: {
    gid,
    wsid,
  },
});

//
// GRAPH_ADD_MANY_REF_SERIES
//

export interface IAddSelectedTimeseriesToGraphAction {
  type: typeof GRAPH_ADD_MANY_REF_SERIES;
  gid: string;
  timeseriesList: any[]; // Replace 'any' with the actual type of timeseriesList
}

export const addSelectedTimeseriesToGraphAction = ({
  gid,
  timeseriesList,
}: {
  gid: string;
  timeseriesList: any[];
}): IAddSelectedTimeseriesToGraphAction => ({
  type: GRAPH_ADD_MANY_REF_SERIES,
  gid,
  timeseriesList,
});

//
// GRAPH_CLEAR_N_ADD_SERIES
//

export interface IAddNewSeriesToClearGraphAction {
  type: typeof GRAPH_CLEAR_N_ADD_SERIES;
  gid: string;
  collId?: string;
  tsid?: string;
  realtime?: boolean;
  vid?: string;
  name?: string;
}

export const addNewSeriesToClearGraphAction = ({
  gid,
  collId,
  tsid,
  realtime,
  vid,
  name,
}: {
  gid: string;
  collId?: string;
  tsid?: string;
  realtime?: boolean;
  vid?: string;
  name?: string;
}): IAddNewSeriesToClearGraphAction => ({
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

export interface IReorderSeriesAction {
  type: typeof GRAPH_REORDER_SERIES;
  gid: string;
  wsid: string;
  pos?: number;
}

export const reorderSeriesAction = ({
  gid,
  wsid,
  pos,
}: {
  gid: string;
  wsid: string;
  pos?: number;
}): IReorderSeriesAction => ({
  type: GRAPH_REORDER_SERIES,
  gid,
  wsid,
  pos,
});
//
// GRAPH_REMOVE_SERIES
//

export interface IRemoveSeriesAction {
  type: typeof GRAPH_REMOVE_SERIES;
  gid: string;
  wsid: string;
}

export const removeSeriesAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): IRemoveSeriesAction => ({
  type: GRAPH_REMOVE_SERIES,
  gid,
  wsid,
});

//
// GRAPH_APPEND_SERIES
//

export interface IAppendSeriesDefAction {
  type: typeof GRAPH_SAVE_APPEND_SERIES;
  payload: { gid: string; series: any }; // Replace 'any' with the actual type of series
}

export const appendSeriesDefAction = ({
  gid,
  series,
}: {
  gid: string;
  series: any;
}): IAppendSeriesDefAction => ({
  type: GRAPH_SAVE_APPEND_SERIES,
  payload: { gid, series },
});

//
// GRAPH_REMOVE_SERIES
//

export interface IRemoveSeriesDefAction {
  type: typeof GRAPH_SAVE_REMOVE_SERIES;
  payload: { gid: string; wsid: string };
}

export const removeSeriesDefAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): IRemoveSeriesDefAction => ({
  type: GRAPH_SAVE_REMOVE_SERIES,
  payload: { gid, wsid },
});

//
// GRAPH_CLEAR_SERIES
//

export interface IClearSeriesAction {
  type: typeof GRAPH_CLEAR_SERIES;
  gid: string;
}

export const clearSeriesAction = ({
  gid,
}: {
  gid: string;
}): IClearSeriesAction => ({
  // trigger saga
  type: GRAPH_CLEAR_SERIES,
  gid,
});

//
// GRAPH_SAVE_CLEAR_SERIES
//

export interface IClearSeriesDefAction {
  type: typeof GRAPH_SAVE_CLEAR_SERIES;
  payload: { gid: string };
}

export const clearSeriesDefAction = ({
  gid,
}: {
  gid: string;
}): IClearSeriesDefAction => ({
  // clear at the store
  type: GRAPH_SAVE_CLEAR_SERIES,
  payload: { gid },
});

//
// GRAPH_SELECT_SERIES
//

export interface ISelectSeriesAction {
  type: typeof GRAPH_SELECT_SERIES;
  gid: string;
  wsid: string;
  clear?: boolean;
}

export const selectSeriesAction = ({
  gid,
  wsid,
  clear,
}: {
  gid: string;
  wsid: string;
  clear?: boolean;
}): ISelectSeriesAction => ({
  type: GRAPH_SELECT_SERIES,
  gid,
  wsid,
  clear,
});

//
// GRAPH_DESELECT_SERIES
//

export interface IDeselectSeriesAction {
  type: typeof GRAPH_DESELECT_SERIES;
  gid: string;
  wsid: string;
}

export const deselectSeriesAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): IDeselectSeriesAction => ({
  type: GRAPH_DESELECT_SERIES,
  gid,
  wsid,
});

//
// GRAPH_UPDATE_TITLE
//

export interface IUpdateGraphTitleAction {
  type: typeof GRAPH_UPDATE_TITLE;
  payload: { gid: string; title: string; style: any }; // Replace 'any' with the actual type of style
}
export const updateGraphTitleAction = ({
  gid,
  title,
  style,
}: {
  gid: string;
  title: string;
  style?: any;
}): IUpdateGraphTitleAction => ({
  type: GRAPH_UPDATE_TITLE,
  payload: { gid, title, style },
});

export const updateGraphTitle =
  ({ gid, title, style }: { gid: string; title: string; style?: any }) =>
  (dispatch: (action: IUpdateGraphTitleAction) => void) => {
    dispatch(updateGraphTitleAction({ gid, title, style }));
  };

//
//  update graph realtime
//

export interface IUpdateGraphRealtimeAction {
  type: typeof GRAPH_UPDATE_REALTIME;
  realtime?: boolean;
}

export const updateGraphRealtimeAction = ({
  realtime,
}: {
  realtime?: boolean;
}): IUpdateGraphRealtimeAction => ({
  type: GRAPH_UPDATE_REALTIME,
  realtime,
});

//
//  update graph range
//

export interface IUpdateRangeAction {
  type: typeof GRAPH_UPDATE_RANGE;
  gid: string;
  rangeStart?: number;
  rangeEnd?: number;
}

export const updateRangeAction = ({
  gid,
  rangeStart,
  rangeEnd,
}: {
  gid: string;
  rangeStart?: number;
  rangeEnd?: number;
}): IUpdateRangeAction => ({
  type: GRAPH_UPDATE_RANGE,
  gid,
  rangeStart,
  rangeEnd,
});

//
//  apply unary function
//

export interface IApplyUnaryFunctionAction {
  type: typeof GRAPH_APPLY_UNARY_FUNC;
  gid: string;
  wsid: string;
  funcName?: string;
  args?: any; // Replace 'any' with the actual type of args
  params?: any; // Replace 'any' with the actual type of params
  create?: boolean;
}

export const applyUnaryFunctionAction = ({
  gid,
  wsid,
  funcName,
  args,
  params,
  create,
}: {
  gid: string;
  wsid: string;
  funcName?: string;
  args?: any;
  params?: any;
  create?: boolean;
}): IApplyUnaryFunctionAction => ({
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

export interface IApplyBinaryFunctionAction {
  type: typeof GRAPH_APPLY_BINARY_FUNC;
  gid: string;
  wsid1?: string;
  wsid2?: string;
  funcName?: string;
}

export const applyBinaryFunctionAction = ({
  gid,
  wsid1,
  wsid2,
  funcName,
}: {
  gid: string;
  wsid1?: string;
  wsid2?: string;
  funcName?: string;
}): IApplyBinaryFunctionAction => ({
  type: GRAPH_APPLY_BINARY_FUNC,
  gid,
  wsid1,
  wsid2,
  funcName,
});

//
//  apply binary operator
//

export interface IApplyBinaryOperatorAction {
  type: typeof GRAPH_APPLY_BINARY_OPERATOR;
  gid: string;
  wsid1?: string;
  wsid2?: string;
  operator?: string;
}

export const applyBinaryOperatorAction = ({
  gid,
  wsid1,
  wsid2,
  operator,
}: {
  gid: string;
  wsid1?: string;
  wsid2?: string;
  operator?: string;
}): IApplyBinaryOperatorAction => ({
  type: GRAPH_APPLY_BINARY_OPERATOR,
  gid,
  wsid1,
  wsid2,
  operator,
});

//
//  apply unary function
//

export interface IUpdateSeriesExprAction {
  type: typeof GRAPH_UPDATE_SERIES_EXPR;
  gid: string;
  wsid: string;
  expr?: string;
  name?: string;
}

export const updateSeriesExprAction = ({
  gid,
  wsid,
  expr,
  name,
}: {
  gid: string;
  wsid: string;
  expr?: string;
  name?: string;
}): IUpdateSeriesExprAction => ({
  type: GRAPH_UPDATE_SERIES_EXPR,
  gid,
  wsid,
  expr,
  name,
});

//
//  clone series on a graph
//

export interface ICloneSeriesAction {
  type: typeof GRAPH_CLONE_SERIES;
  gid: string;
  wsid: string;
}

export const cloneSeriesAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): ICloneSeriesAction => ({
  type: GRAPH_CLONE_SERIES,
  gid,
  wsid,
});

//
// GRAPH_EXPORT_LOCAL
//

export interface IExportGraphAction {
  type: typeof GRAPH_EXPORT_LOCAL;
  gid: string;
}

export const exportGraphAction = ({
  gid,
}: {
  gid: string;
}): IExportGraphAction => ({
  type: GRAPH_EXPORT_LOCAL,
  gid,
});

// DELETE GRAPH OBJECT

export interface IDeleteGraphObjectAction {
  type: typeof GRAPH_DELETE_OBJECT;
  gid: string;
}

export const deleteGraphObjectAction = (
  gid: string
): IDeleteGraphObjectAction => ({
  type: GRAPH_DELETE_OBJECT,
  gid,
});

//
// Graph processing steps actions
//

// GRAPH_SAVE_* actions

export interface ISaveNewGraphAction {
  type: typeof GRAPH_SAVE_NEW_GRAPH;
  payload: {
    gid: string;
    freq: string;
    title: string | undefined;
    subtitle: string | undefined;
    legend: string | undefined;
  };
}

export const saveNewGraphAction = ({
  gid,
  freq,
  title,
  subtitle,
  legend,
}: {
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}): ISaveNewGraphAction => ({
  type: GRAPH_SAVE_NEW_GRAPH,
  payload: {
    gid,
    freq,
    title,
    subtitle,
    legend,
  },
});

//
// GRAPH_SAVE_GRAPH_OBJECT
//

export interface ISaveGraphObjectAction {
  type: typeof GRAPH_SAVE_GRAPH_OBJECT;
  payload: { gid: string; object: any }; // Replace 'any' with the actual type of object
}

export const saveGraphObjectAction = ({
  gid,
  object,
}: {
  gid: string;
  object?: any;
}): ISaveGraphObjectAction => ({
  type: GRAPH_SAVE_GRAPH_OBJECT,
  payload: { gid, object },
});

//
// GRAPH_SAVE_DETERMINED_FREQ
//

export interface ISaveGraphFreqAction {
  type: typeof GRAPH_SAVE_DETERMINED_FREQ;
  payload: { gid: string; freq: string };
}

export const saveGraphFreqAction = ({
  gid,
  freq,
}: {
  gid: string;
  freq: string;
}): ISaveGraphFreqAction => ({
  type: GRAPH_SAVE_DETERMINED_FREQ,
  payload: { gid, freq },
});

//
// GRAPH_SAVE_TRANSFORMED_SERIES
//

export interface ISaveTransformedSeriesAction {
  type: typeof GRAPH_SAVE_TRANSFORMED_SERIES;
  payload: { gid: string; wsid: string; data: any }; // Replace 'any' with the actual type of data
}

export const saveTransformedSeriesAction = ({
  gid,
  wsid,
  data,
}: {
  gid: string;
  wsid: string;
  data?: any;
}): ISaveTransformedSeriesAction => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES,
  payload: { gid, wsid, data },
});

//
// GRAPH_SAVE_TRANSFORMED_SERIES_BULK
//

export interface ISaveTransformedSeriesBulkAction {
  type: typeof GRAPH_SAVE_TRANSFORMED_SERIES_BULK;
  payload: { gid: string; transformedSeries: any }; // Replace 'any' with the actual type of transformedSeries
}

export const saveTransformedSeriesBulkAction = ({
  gid,
  transformedSeries,
}: {
  gid: string;
  transformedSeries?: any;
}): ISaveTransformedSeriesBulkAction => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
  payload: { gid, transformedSeries },
});

//
// GRAPH_SAVE_OUTPUT
//

export interface ISaveGeneratedGraphAction {
  type: typeof GRAPH_SAVE_OUTPUT;
  payload: { gid: string; output: any }; // Replace 'any' with the actual type of output
}

export const saveGeneratedGraphAction = ({
  gid,
  output,
}: {
  gid: string;
  output?: any;
}): ISaveGeneratedGraphAction => ({
  type: GRAPH_SAVE_OUTPUT,
  payload: { gid, output },
});

//
// GRAPH_SAVE_REORDER_SERIES
//

export interface ISaveReorderSeriesAction {
  type: typeof GRAPH_SAVE_REORDER_SERIES;
  payload: {
    gid: string;
    wsid: string;
    pos: number;
  };
}

export const saveReorderSeriesAction = ({
  gid,
  wsid,
  pos,
}: {
  gid: string;
  wsid: string;
  pos: number;
}): ISaveReorderSeriesAction => ({
  type: GRAPH_SAVE_REORDER_SERIES,
  payload: { gid, wsid, pos },
});

//
// GRAPH_SAVE_GRAPH_PROPS
//

export interface ISaveGraphPropsAction {
  type: typeof GRAPH_SAVE_GRAPH_PROPS;
  payload: { gid: string; props: any }; // Replace 'any' with the actual type of props
}

export const saveGraphPropsAction = ({
  gid,
  props,
}: {
  gid: string;
  props?: any;
}): ISaveGraphPropsAction => ({
  type: GRAPH_SAVE_GRAPH_PROPS,
  payload: { gid, props },
});

//
// GRAPH_SAVE_SERIES_PROPS
//

export interface ISaveSeriesPropsAction {
  type: typeof GRAPH_SAVE_SERIES_PROPS;
  payload: { gid: string; wsid: string; props: any }; // Replace 'any' with the actual type of props
}

export const saveSeriesPropsAction = ({
  gid,
  wsid,
  props,
}: {
  gid: string;
  wsid: string;
  props?: any;
}): ISaveSeriesPropsAction => ({
  type: GRAPH_SAVE_SERIES_PROPS,
  payload: { gid, wsid, props },
});

//
// GRAPH_SAVE_UI_PROPS
//

export interface ISaveGraphUIPropsAction {
  type: typeof GRAPH_SAVE_UI_PROPS;
  payload: { gid: string; props: any }; // Replace 'any' with the actual type of props
}

export const saveGraphUIPropsAction = ({
  gid,
  props,
}: {
  gid: string;
  props?: any;
}): ISaveGraphUIPropsAction => ({
  type: GRAPH_SAVE_UI_PROPS,
  payload: { gid, props },
});

//
// GRAPH_SAVE_EXPORT_OPTIONS
//

export interface ISaveGraphExportOptionsAction {
  type: typeof GRAPH_SAVE_EXPORT_OPTIONS;
  payload: { gid: string; opts: any }; // Replace 'any' with the actual type of opts
}

export const saveGraphExportOptionsAction = ({
  gid,
  opts,
}: {
  gid: string;
  opts?: any;
}): ISaveGraphExportOptionsAction => ({
  type: GRAPH_SAVE_EXPORT_OPTIONS,
  payload: { gid, opts },
});

//
// GRAPH_SAVE_REPLACE_SERIES
//

export interface ISaveReplaceSeriesAction {
  type: typeof GRAPH_SAVE_REPLACE_SERIES;
  payload: {
    gid: string;
    wsid: string;
    to_wsid: string;
  };
}

export const saveReplaceSeriesAction = ({
  gid,
  wsid,
  to_wsid,
}: {
  gid: string;
  wsid: string;
  to_wsid: string;
}): ISaveReplaceSeriesAction => ({
  type: GRAPH_SAVE_REPLACE_SERIES,
  payload: { gid, wsid, to_wsid },
});

//
// GRAPH_SAVE_SELECT_SERIES
//

export interface ISaveSelectSeriesAction {
  type: typeof GRAPH_SAVE_SELECT_SERIES;
  payload: {
    gid: string;
    wsid: string;
    clear: boolean | undefined;
  };
}

export const saveSelectSeriesAction = ({
  gid,
  wsid,
  clear,
}: {
  gid: string;
  wsid: string;
  clear?: boolean;
}): ISaveSelectSeriesAction => ({
  type: GRAPH_SAVE_SELECT_SERIES,
  payload: { gid, wsid, clear },
});

//
// GRAPH_SAVE_DESELECT_SERIES
//

export interface ISaveDeselectSeriesAction {
  type: typeof GRAPH_SAVE_DESELECT_SERIES;
  payload: { gid: string; wsid: string };
}

export const saveDeselectSeriesAction = ({
  gid,
  wsid,
}: {
  gid: string;
  wsid: string;
}): ISaveDeselectSeriesAction => ({
  type: GRAPH_SAVE_DESELECT_SERIES,
  payload: { gid, wsid },
});

//
// GRAPH_SAVE_RESTORE_REDUCER
//

export interface IRestoreGraphReducer {
  type: typeof GRAPH_SAVE_RESTORE_REDUCER;
  payload: any; // Replace 'any' with the actual type of payload
}

export const restoreGraphReducer = (payload: any): IRestoreGraphReducer => ({
  type: GRAPH_SAVE_RESTORE_REDUCER,
  payload,
});

//
// GRAPH_SAVE_CHART_REF
//

export interface IGraphSaveChartRefAction {
  type: typeof GRAPH_SAVE_CHART_REF;
  payload: { gid: string; ref: any }; // Replace 'any' with the actual type of ref
}

export const graphSaveChartRefAction = ({
  gid,
  ref,
}: {
  gid: string;
  ref?: any;
}): IGraphSaveChartRefAction => ({
  type: GRAPH_SAVE_CHART_REF,
  payload: { gid, ref },
});

//
// GRAPH_SAVE_DELETE_OBJECT
//

export interface ISaveDeleteGraphObjectAction {
  type: typeof GRAPH_SAVE_DELETE_OBJECT;
  payload: { gid: string };
}

export const saveDeleteGraphObjectAction = ({
  gid,
}: {
  gid: string;
}): ISaveDeleteGraphObjectAction => ({
  type: GRAPH_SAVE_DELETE_OBJECT,
  payload: { gid },
});

// ADD GRAPH ERRORS

export interface IAddGraphErrorsAction {
  type: typeof GRAPH_ERRORS_ADD;
  payload: { gid: string; errors: any }; // Replace 'any' with the actual type of errors
}

export const addGraphErrorsAction = ({
  gid,
  errors,
}: {
  gid: string;
  errors?: any;
}): IAddGraphErrorsAction => ({
  type: GRAPH_ERRORS_ADD,
  payload: { gid, errors },
});

// CLEAR GRAPH ERRORS

export interface IClearGraphErrorsAction {
  type: typeof GRAPH_ERRORS_CLEAR;
  payload: { gid: string };
}

export const clearGraphErrorsAction = ({
  gid,
}: {
  gid: string;
}): IClearGraphErrorsAction => ({
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
// export const redrawGraphAction = ({ gid }: { gid?: string }) => ({
//   type: GRAPH_UPDATE,
//   payload: { gid, wsid: undefined, stage: undefined },
// });

// //
// // GRAPH_UPDATE
// //

// export const updateGraphAction = ({ gid, wsid, stage }) => ({
//   type: GRAPH_UPDATE,
//   gid,
//   wsid,
//   stage,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateGraphPropsAction = ({ gid, props, stage }) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_GRAPH_PROPS,
//   gid,
//   props,
//   stage,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateSeriesPropsAction = ({ gid, wsid, props }) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_SERIES_PROPS,
//   gid,
//   wsid,
//   props,
// });

// //
// // GRAPH_UPDATE_SERIES_PROPS
// //

// export const updateGraphUIPropsAction = ({ gid, props }) => ({
//   // update properties of series in graph definition in the store
//   type: GRAPH_UPDATE_UI_PROPS,
//   gid,
//   props,
// });

// //
// // GRAPH_UPDATE_OUTPUT
// //

// export const updateGraphOutputAction = ({ gid, output }) => ({
//   type: GRAPH_UPDATE_OUTPUT,
//   payload: { gid, output },
// });

// //
// // GRAPH_UPDATE_STATUS
// //

// export const updateGraphStatusAction = ({ gid, status }) => ({
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

// export const saveCurrentGraphIdAction = ({ gid }: { gid?: string }) => ({
//   type: GRAPH_SAVE_CURRENT_GID,
//   payload: { gid },
// });

// //
// // GRAPH_ADD_SERIES
// //

// // export const addNewSeriesToGraphAction = ({
// //   gid, collId, tsid, realtime, vid, expr, name,
// // }) => ({
// //   type: GRAPH_ADD_SERIES,
// //   payload: {
// //     gid,
// //     collId,
// //     tsid, realtime, vid, expr, name,
// //   },
// // });

// export const addRefSeriesToGraphAction = ({
//   gid, name, tsid, collId, realtime,
// }) => ({
//   type: GRAPH_ADD_REF_SERIES,
//   gid,
//   name,
//   tsid,
//   collId,
//   realtime,
// });

// export const addNamedSeriesToGraphAction = ({
//   gid, name, tsName, collName, spaceName, realtime,
// }) => ({
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
// }) => ({
//   type: GRAPH_ADD_EXPR_SERIES,
//   gid,
//   name,
//   expr,
//   realtime,
// });

// export const addDataSeriesToGraphAction = ({
//   gid, name, freq, fparam, dtype, dparam, units, data, realtime,
// }) => ({
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
// }) => ({
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
// }) => ({
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

// export const reorderSeriesAction = ({ gid, wsid, pos }) => ({
//   type: GRAPH_REORDER_SERIES,
//   gid,
//   wsid,
//   pos,
// });

// //
// // GRAPH_REMOVE_SERIES
// //

// export const removeSeriesAction = ({ gid, wsid }) => ({
//   type: GRAPH_REMOVE_SERIES,
//   gid,
//   wsid,
// });

// //
// // GRAPH_APPEND_SERIES
// //

// export const appendSeriesDefAction = ({ gid, series }) => ({
//   type: GRAPH_SAVE_APPEND_SERIES,
//   payload: { gid, series },
// });

// //
// // GRAPH_REMOVE_SERIES
// //

// export const removeSeriesDefAction = ({ gid, wsid }) => ({
//   type: GRAPH_SAVE_REMOVE_SERIES,
//   payload: { gid, wsid },
// });

// //
// // GRAPH_CLEAR_SERIES
// //

// export const clearSeriesAction = ({ gid }: { gid?: string }) => ({
//   // trigger saga
//   type: GRAPH_CLEAR_SERIES,
//   gid,
// });

// export const clearSeriesDefAction = ({ gid }: { gid?: string }) => ({
//   // clear at the store
//   type: GRAPH_SAVE_CLEAR_SERIES,
//   payload: { gid },
// });

// //
// // GRAPH_SELECT_SERIES
// //

// export const selectSeriesAction = ({ gid, wsid, clear }) => ({
//   type: GRAPH_SELECT_SERIES,
//   gid,
//   wsid,
//   clear,
// });

// export const deselectSeriesAction = ({ gid, wsid }) => ({
//   type: GRAPH_DESELECT_SERIES,
//   gid,
//   wsid,
// });

// //
// // GRAPH_UPDATE_TITLE
// //

// export const updateGraphTitleAction = ({ gid, title, style }) => ({
//   type: GRAPH_UPDATE_TITLE,
//   payload: { gid, title, style },
// });

// export const updateGraphTitle = ({ gid, title, style }) => (dispatch) => {
//   dispatch(updateGraphTitleAction({ gid, title, style }));
// };

// //
// //  update graph realtime
// //
// export const updateGraphRealtimeAction = ({ realtime }) => ({
//   type: GRAPH_UPDATE_REALTIME,
//   realtime,
// });

// //
// //  update graph range
// //
// export const updateRangeAction = ({ gid, rangeStart, rangeEnd }) => ({
//   type: GRAPH_UPDATE_RANGE,
//   gid,
//   rangeStart,
//   rangeEnd,
// });

// //
// //  apply unary function
// //
// export const applyUnaryFunctionAction = ({ gid, wsid, funcName, args, params, create }) => ({
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
// }) => ({
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
// }) => ({
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
// }) => ({
//   type: GRAPH_UPDATE_SERIES_EXPR,
//   gid,
//   wsid,
//   expr,
//   name,
// });

// //
// //  clone series on a graph
// //
// export const cloneSeriesAction = ({ gid, wsid }) => ({
//   type: GRAPH_CLONE_SERIES,
//   gid,
//   wsid,
// });

// export const exportGraphAction = ({ gid }: { gid?: string }) => ({
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

// // export const resolveSeriesAction = ({ gid, wsid }) => ({
// //   type: GRAPH_RESOLVE_SERIES,
// //   gid,
// //   wsid,
// // });

// // export const determineGraphFreqAction = ({ gid }: { gid?: string }) => ({
// //   type: GRAPH_DETERMINE_FREQ,
// //   gid,
// // });

// // export const transformGraphSeriesAction = ({ gid }: { gid?: string }) => ({
// //   type: GRAPH_TRANSFORM_SERIES,
// //   gid,
// // });

// // export const generateGraphAction = ({ gid }: { gid?: string }) => ({
// //   type: GRAPH_GENERATE_GRAPH,
// //   gid,
// // });

// // GRAPH_SAVE_* actions
// export const saveNewGraphAction = ({ gid, freq, title, subtitle, legend }) => ({
//   type: GRAPH_SAVE_NEW_GRAPH,
//   payload: { gid, freq, title, subtitle, legend },
// });

// export const saveGraphObjectAction = ({ gid, object }) => ({
//   type: GRAPH_SAVE_GRAPH_OBJECT,
//   payload: { gid, object },
// });

// export const saveGraphFreqAction = ({ gid, freq }) => ({
//   type: GRAPH_SAVE_DETERMINED_FREQ,
//   payload: { gid, freq },
// });

// export const saveTransformedSeriesAction = ({ gid, wsid, data }) => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES,
//   payload: { gid, wsid, data },
// });

// export const saveTransformedSeriesBulkAction = ({ gid, transformedSeries }) => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
//   payload: { gid, transformedSeries },
// });

// export const saveGeneratedGraphAction = ({ gid, output }) => ({
//   type: GRAPH_SAVE_OUTPUT,
//   payload: { gid, output },
// });

// export const saveReorderSeriesAction = ({ gid, wsid, pos }) => ({
//   type: GRAPH_SAVE_REORDER_SERIES,
//   payload: { gid, wsid, pos },
// });

// export const saveGraphPropsAction = ({ gid, props }) => ({
//   type: GRAPH_SAVE_GRAPH_PROPS,
//   payload: { gid, props },
// });

// export const saveSeriesPropsAction = ({ gid, wsid, props }) => ({
//   type: GRAPH_SAVE_SERIES_PROPS,
//   payload: { gid, wsid, props },
// });

// export const saveGraphUIPropsAction = ({ gid, props }) => ({
//   type: GRAPH_SAVE_UI_PROPS,
//   payload: { gid, props },
// });

// export const saveGraphExportOptionsAction = ({ gid, opts }) => ({
//   type: GRAPH_SAVE_EXPORT_OPTIONS,
//   payload: { gid, opts },
// });

// export const saveReplaceSeriesAction = ({ gid, wsid, to_wsid }) => ({
//   type: GRAPH_SAVE_REPLACE_SERIES,
//   payload: { gid, wsid, to_wsid },
// });

// export const saveSelectSeriesAction = ({ gid, wsid, clear }) => ({
//   type: GRAPH_SAVE_SELECT_SERIES,
//   payload: { gid, wsid, clear },
// });

// export const saveDeselectSeriesAction = ({ gid, wsid }) => ({
//   type: GRAPH_SAVE_DESELECT_SERIES,
//   payload: { gid, wsid },
// });

// export const restoreGraphReducer = (payload) => ({
//   type: GRAPH_SAVE_RESTORE_REDUCER,
//   payload,
// });

// export const graphSaveChartRefAction = ({ gid, ref }) => ({
//   type: GRAPH_SAVE_CHART_REF,
//   payload: { gid, ref },
// });

// export const saveDeleteGraphObjectAction = ({ gid }: { gid?: string }) => ({
//   type: GRAPH_SAVE_DELETE_OBJECT,
//   payload: { gid },
// });

// // ADD GRAPH ERRORS

// export const addGraphErrorsAction = ({ gid, errors }) => ({
//   type: GRAPH_ERRORS_ADD,
//   payload: { gid, errors },
// });

// // CLEAR GRAPH ERRORS

// export const clearGraphErrorsAction = ({ gid }: { gid?: string }) => ({
//   type: GRAPH_ERRORS_CLEAR,
//   payload: { gid },
// });
