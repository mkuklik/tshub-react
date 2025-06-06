import ObjectID from "bson-objectid";
import type { ISeriesDefinitionType } from "../types/TGraph";
import { createAction } from "@reduxjs/toolkit";
import { GraphStatus } from "../sagas/graph.constants";
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
// Create Graph
export interface ICreateGraphPayload {
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}

export const createGraphAction = createAction<ICreateGraphPayload>(GRAPH_CREATE);
export type ICreateGraphAction = ReturnType<typeof createGraphAction>;
export type IGraphCreateAction = ICreateGraphAction;

export const createGraph =
  (freq: string) => (dispatch: (action: ICreateGraphAction) => void) => {
    const gid = objectIdGenerator.toHexString();
    dispatch(createGraphAction({ gid, freq }));
    return gid;

  };

// Clone Graph
export interface ICloneGraphPayload {
  gid: string;
}

export const cloneGraphAction = createAction<ICloneGraphPayload>(CLONE_GRAPH);
export type ICloneGraphAction = ReturnType<typeof cloneGraphAction>;

// Redraw Graph
// export const redrawGraphAction = ({
//   gid,
// }: {
//   gid: string;
// }): IRedrawGraphAction => ({
//   type: GRAPH_UPDATE,
//   payload: { gid, wsid: undefined, stage: undefined },
// });

export interface IRedrawGraphPayload { gid: string; wsid: string | undefined; stage: string | undefined };

export const redrawGraphAction = createAction<IRedrawGraphPayload>(GRAPH_UPDATE);
export type IRedrawGraphAction = ReturnType<typeof redrawGraphAction>;

// Update Graph

// export interface IUpdateGraphAction {
//   type: typeof GRAPH_UPDATE;
//   gid: string;
//   wsid: string;
//   stage?: string;
// }

// export const updateGraphAction = ({
//   gid,
//   wsid,
//   stage,
// }: {
//   gid: string;
//   wsid: string;
//   stage?: string;
// }): IUpdateGraphAction => ({
//   type: GRAPH_UPDATE,
//   gid,
//   wsid,
//   stage,
// });

interface IUpdateGraphPayload {
  gid: string;
  wsid?: string;
  stage?: string;
}

export const updateGraphAction = createAction<IUpdateGraphPayload>(GRAPH_UPDATE);
export type IUpdateGraphAction = ReturnType<typeof updateGraphAction>;

//
// GRAPH_UPDATE_SERIES_PROPS
//

// Update Graph Props
export interface IUpdateGraphPropsPayload {
  gid: string;
  props?: any; // Replace 'any' with the actual type of props
  stage?: string;
}

export const updateGraphPropsAction = createAction<IUpdateGraphPropsPayload>(GRAPH_UPDATE_GRAPH_PROPS);
export type IUpdateGraphPropsAction = ReturnType<typeof updateGraphPropsAction>;

// export interface IUpdateSeriesPropsAction {
//   type: typeof GRAPH_UPDATE_SERIES_PROPS;
//   gid: string;
//   wsid: string;
//   props?: any; // Replace 'any' with the actual type of props
// }

// export const updateSeriesPropsAction = ({
//   gid,
//   wsid,
//   props,
// }: {
//   gid: string;
//   wsid: string;
//   props?: any;
// }): IUpdateSeriesPropsAction => ({
//   type: GRAPH_UPDATE_SERIES_PROPS,
//   gid,
//   wsid,
//   props,
// });

export interface IUpdateSeriesPropsPayload {
  gid: string;
  wsid: string;
  props?: any; // Replace 'any' with the actual type of props
}

export const updateSeriesPropsAction = createAction<IUpdateSeriesPropsPayload>(GRAPH_UPDATE_SERIES_PROPS);
export type IUpdateSeriesPropsAction = ReturnType<typeof updateSeriesPropsAction>;

//
// GRAPH_UPDATE_SERIES_PROPS
//

// export interface IUpdateGraphUIPropsAction {
//   type: typeof GRAPH_UPDATE_UI_PROPS;
//   gid: string;
//   props?: any; // Replace 'any' with the actual type of props
// }

// export const updateGraphUIPropsAction = ({
//   gid,
//   props,
// }: {
//   gid: string;
//   props?: any;
// }): IUpdateGraphUIPropsAction => ({
//   type: GRAPH_UPDATE_UI_PROPS,
//   gid,
//   props,
// });

interface IUpdateGraphUIPropsPayload {
  gid: string;
  props?: any;
}

export const updateGraphUIPropsAction = createAction<IUpdateGraphUIPropsPayload>(GRAPH_UPDATE_UI_PROPS);
export type IUpdateGraphUIPropsAction = ReturnType<typeof updateGraphUIPropsAction>;

//
// GRAPH_UPDATE_OUTPUT
//

// export interface IUpdateGraphOutputAction {
//   type: typeof GRAPH_UPDATE_OUTPUT;
//   payload: { gid: string; output: any }; // Replace 'any' with the actual type of output
// }

// export const updateGraphOutputAction = ({
//   gid,
//   output,
// }: {
//   gid: string;
//   output: any;
// }): IUpdateGraphOutputAction => ({
//   type: GRAPH_UPDATE_OUTPUT,
//   payload: { gid, output },
// });

interface IUpdateGraphOutputPayload {
  gid: string;
  output: any;
}

export const updateGraphOutputAction = createAction<IUpdateGraphOutputPayload>(GRAPH_UPDATE_OUTPUT);
export type IUpdateGraphOutputAction = ReturnType<typeof updateGraphOutputAction>;


//
// GRAPH_UPDATE_STATUS
//

// export interface IUpdateGraphStatusAction {
//   type: typeof GRAPH_UPDATE_STATUS;
//   payload: { gid: string; status: any }; // Replace 'any' with the actual type of status
// }

// export const updateGraphStatusAction = ({
//   gid,
//   status,
// }: {
//   gid: string;
//   status: any;
// }): IUpdateGraphStatusAction => ({
//   type: GRAPH_UPDATE_STATUS,
//   payload: { gid, status },
// });

interface IUpdateGraphStatusPayload {
  gid: string;
  status: GraphStatus; // Replace 'any' with the actual type of status
}

export const updateGraphStatusAction = createAction<IUpdateGraphStatusPayload>(GRAPH_UPDATE_STATUS);
export type IUpdateGraphStatusAction = ReturnType<typeof updateGraphStatusAction>;

//
// GRAPH_FOCUS
//

// export interface IFocusOnGraphAction {
//   type: typeof GRAPH_FOCUS;
//   payload: { gid: string };
// }

// export const focusOnGraphAction = (gid: string): IFocusOnGraphAction => ({
//   type: GRAPH_FOCUS,
//   payload: { gid },
// });

interface IFocusOnGraphPayload {
  gid: string;
}

export const focusOnGraphAction = createAction<IFocusOnGraphPayload>(GRAPH_FOCUS);
export type IFocusOnGraphAction = ReturnType<typeof focusOnGraphAction>;

export const focusOnGraph =
  (gid: string) => (dispatch: (action: IFocusOnGraphAction) => void) => {
    dispatch(focusOnGraphAction({ gid }));
  };

//
// GRAPH_SAVE_CURRENT_GID
//

// export interface ISaveCurrentGraphIdAction {
//   type: typeof GRAPH_SAVE_CURRENT_GID;
//   payload: { gid: string };
// }

// export const saveCurrentGraphIdAction = ({
//   gid,
// }: {
//   gid: string;
// }): ISaveCurrentGraphIdAction => ({
//   type: GRAPH_SAVE_CURRENT_GID,
//   payload: { gid },
// });

interface ISaveCurrentGraphIdPayload {
  gid: string;
}

export const saveCurrentGraphIdAction = createAction<ISaveCurrentGraphIdPayload>(GRAPH_SAVE_CURRENT_GID);
export type ISaveCurrentGraphIdAction = ReturnType<typeof saveCurrentGraphIdAction>;

//
// GRAPH_ADD_REF_SERIES
//

// export interface IAddRefSeriesToGraphAction {
//   type: typeof GRAPH_ADD_REF_SERIES;
//   gid: string;
//   name?: string;
//   tsid?: string;
//   collId?: string;
//   realtime?: boolean;
// }

// export const addRefSeriesToGraphAction = ({
//   gid,
//   name,
//   tsid,
//   collId,
//   realtime,
// }: {
//   gid: string;
//   name?: string;
//   tsid?: string;
//   collId?: string;
//   realtime?: boolean;
// }): IAddRefSeriesToGraphAction => ({
//   type: GRAPH_ADD_REF_SERIES,
//   gid,
//   name,
//   tsid,
//   collId,
//   realtime,
// });

interface IAddRefSeriesToGraphPayload {
  gid: string;
  name?: string;
  tsid?: string;
  collId?: string;
  realtime?: boolean;
}

export const addRefSeriesToGraphAction = createAction<IAddRefSeriesToGraphPayload>(GRAPH_ADD_REF_SERIES);
export type IAddRefSeriesToGraphAction = ReturnType<typeof addRefSeriesToGraphAction>;

//
// GRAPH_ADD_NAMED_SERIES
//

// export interface IAddNamedSeriesToGraphAction {
//   type: typeof GRAPH_ADD_NAMED_SERIES;
//   gid: string;
//   name?: string;
//   tsName?: string;
//   collName?: string;
//   spaceName?: string;
//   realtime?: boolean;
// }

// export const addNamedSeriesToGraphAction = ({
//   gid,
//   name,
//   tsName,
//   collName,
//   spaceName,
//   realtime,
// }: {
//   gid: string;
//   name?: string;
//   tsName?: string;
//   collName?: string;
//   spaceName?: string;
//   realtime?: boolean;
// }): IAddNamedSeriesToGraphAction => ({
//   type: GRAPH_ADD_NAMED_SERIES,
//   gid,
//   name,
//   tsName,
//   collName,
//   spaceName,
//   realtime,
// });

interface IAddNamedSeriesToGraphPayload {
  gid: string;
  name?: string;
  tsName?: string;
  collName?: string;
  spaceName?: string;
  realtime?: boolean;
}

export const addNamedSeriesToGraphAction = createAction<IAddNamedSeriesToGraphPayload>(GRAPH_ADD_NAMED_SERIES);
export type IAddNamedSeriesToGraphAction = ReturnType<typeof addNamedSeriesToGraphAction>;

//
// GRAPH_ADD_EXPR_SERIES
//

// export interface IAddExprSeriesToGraphAction {
//   type: typeof GRAPH_ADD_EXPR_SERIES;
//   gid: string;
//   name?: string;
//   expr?: string;
//   realtime?: boolean;
// }

// export const addExprSeriesToGraphAction = ({
//   gid,
//   name,
//   expr,
//   realtime,
// }: {
//   gid: string;
//   name?: string;
//   expr?: string;
//   realtime?: boolean;
// }): IAddExprSeriesToGraphAction => ({
//   type: GRAPH_ADD_EXPR_SERIES,
//   gid,
//   name,
//   expr,
//   realtime,
// });

interface IAddExprSeriesToGraphPayload {
  gid: string;
  name?: string;
  expr?: string;
  realtime?: boolean;
}

export const addExprSeriesToGraphAction = createAction<IAddExprSeriesToGraphPayload>(GRAPH_ADD_EXPR_SERIES);
export type IAddExprSeriesToGraphAction = ReturnType<typeof addExprSeriesToGraphAction>;

//
// GRAPH_ADD_DATA_SERIES
//

// export interface IAddDataSeriesToGraphAction {
//   type: typeof GRAPH_ADD_DATA_SERIES;
//   gid: string;
//   name?: string;
//   freq?: string;
//   fparam?: any; // Replace 'any' with the actual type of fparam
//   dtype?: string;
//   dparam?: any; // Replace 'any' with the actual type of dparam
//   units?: string;
//   data?: any; // Replace 'any' with the actual type of data
//   realtime?: boolean;
// }

// export const addDataSeriesToGraphAction = ({
//   gid,
//   name,
//   freq,
//   fparam,
//   dtype,
//   dparam,
//   units,
//   data,
//   realtime,
// }: {
//   gid: string;
//   name?: string;
//   freq?: string;
//   fparam?: any;
//   dtype?: string;
//   dparam?: any;
//   units?: string;
//   data?: any;
//   realtime?: boolean;
// }): IAddDataSeriesToGraphAction => ({
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

interface IAddDataSeriesToGraphPayload {
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

export const addDataSeriesToGraphAction = createAction<IAddDataSeriesToGraphPayload>(GRAPH_ADD_DATA_SERIES);
export type IAddDataSeriesToGraphAction = ReturnType<typeof addDataSeriesToGraphAction>;

//
// GRAPH_ADD_SERIES
//

// export interface IAddSeriesToGraphAction {
//   type: typeof GRAPH_ADD_SERIES;
//   payload: { gid: string; wsid: string };
// }

// export const addSeriesToGraphAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): IAddSeriesToGraphAction => ({
//   type: GRAPH_ADD_SERIES,
//   payload: {
//     gid,
//     wsid,
//   },
// });

interface IAddSeriesToGraphPayload {
  gid: string;
  wsid: string;
}

export const addSeriesToGraphAction = createAction<IAddSeriesToGraphPayload>(GRAPH_ADD_SERIES);
export type IAddSeriesToGraphAction = ReturnType<typeof addSeriesToGraphAction>;
//
// GRAPH_ADD_MANY_REF_SERIES
//

// export interface IAddSelectedTimeseriesToGraphAction {
//   type: typeof GRAPH_ADD_MANY_REF_SERIES;
//   gid: string;
//   timeseriesList: any[]; // Replace 'any' with the actual type of timeseriesList
// }

// export const addSelectedTimeseriesToGraphAction = ({
//   gid,
//   timeseriesList,
// }: {
//   gid: string;
//   timeseriesList: any[];
// }): IAddSelectedTimeseriesToGraphAction => ({
//   type: GRAPH_ADD_MANY_REF_SERIES,
//   gid,
//   timeseriesList,
// });


interface IAddSelectedTimeseriesToGraphPayload {
  gid: string;
  timeseriesList: any[];
}

export const addSelectedTimeseriesToGraphAction = createAction<IAddSelectedTimeseriesToGraphPayload>(GRAPH_ADD_MANY_REF_SERIES);
export type IAddSelectedTimeseriesToGraphAction = ReturnType<typeof addSelectedTimeseriesToGraphAction>;

//
// GRAPH_CLEAR_N_ADD_SERIES
//

// export interface IAddNewSeriesToClearGraphAction {
//   type: typeof GRAPH_CLEAR_N_ADD_SERIES;
//   gid: string;
//   collId?: string;
//   tsid?: string;
//   realtime?: boolean;
//   vid?: string;
//   name?: string;
// }

// export const addNewSeriesToClearGraphAction = ({
//   gid,
//   collId,
//   tsid,
//   realtime,
//   vid,
//   name,
// }: {
//   gid: string;
//   collId?: string;
//   tsid?: string;
//   realtime?: boolean;
//   vid?: string;
//   name?: string;
// }): IAddNewSeriesToClearGraphAction => ({
//   type: GRAPH_CLEAR_N_ADD_SERIES,
//   gid,
//   collId,
//   tsid,
//   realtime,
//   vid,
//   name,
// });

interface IAddNewSeriesToClearGraphPayload {
  gid: string;
  collId?: string;
  tsid?: string;
  realtime?: boolean;
  vid?: string;
  name?: string;
}

export const addNewSeriesToClearGraphAction = createAction<IAddNewSeriesToClearGraphPayload>(GRAPH_CLEAR_N_ADD_SERIES);
export type IAddNewSeriesToClearGraphAction = ReturnType<typeof addNewSeriesToClearGraphAction>;

//
// GRAPH_REORDER_SERIES
//

// export interface IReorderSeriesAction {
//   type: typeof GRAPH_REORDER_SERIES;
//   gid: string;
//   wsid: string;
//   pos?: number;
// }

// export const reorderSeriesAction = ({
//   gid,
//   wsid,
//   pos,
// }: {
//   gid: string;
//   wsid: string;
//   pos?: number;
// }): IReorderSeriesAction => ({
//   type: GRAPH_REORDER_SERIES,
//   gid,
//   wsid,
//   pos,
// });

interface IReorderSeriesPayload {
  gid: string;
  wsid: string;
  pos?: number;
}

export const reorderSeriesAction = createAction<IReorderSeriesPayload>(GRAPH_REORDER_SERIES);
export type IReorderSeriesAction = ReturnType<typeof reorderSeriesAction>;

//
// GRAPH_REMOVE_SERIES
//

// export interface IRemoveSeriesAction {
//   type: typeof GRAPH_REMOVE_SERIES;
//   gid: string;
//   wsid: string;
// }

// export const removeSeriesAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): IRemoveSeriesAction => ({
//   type: GRAPH_REMOVE_SERIES,
//   gid,
//   wsid,
// });

interface IRemoveSeriesPayload {
  gid: string;
  wsid: string;
}

export const removeSeriesAction = createAction<IRemoveSeriesPayload>(GRAPH_REMOVE_SERIES);
export type IRemoveSeriesAction = ReturnType<typeof removeSeriesAction>;

//
// GRAPH_APPEND_SERIES
//

// export interface IAppendSeriesDefAction {
//   type: typeof GRAPH_SAVE_APPEND_SERIES;
//   payload: { gid: string; series: any }; // Replace 'any' with the actual type of series
// }

// export const appendSeriesDefAction = ({
//   gid,
//   series,
// }: {
//   gid: string;
//   series: any;
// }): IAppendSeriesDefAction => ({
//   type: GRAPH_SAVE_APPEND_SERIES,
//   payload: { gid, series },
// });

interface IAppendSeriesDefPayload {
  gid: string;
  series: any;
}

export const appendSeriesDefAction = createAction<IAppendSeriesDefPayload>(GRAPH_SAVE_APPEND_SERIES);
export type IAppendSeriesDefAction = ReturnType<typeof appendSeriesDefAction>;

//
// GRAPH_REMOVE_SERIES
//

// export interface IRemoveSeriesDefAction {
//   type: typeof GRAPH_SAVE_REMOVE_SERIES;
//   payload: { gid: string; wsid: string };
// }

// export const removeSeriesDefAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): IRemoveSeriesDefAction => ({
//   type: GRAPH_SAVE_REMOVE_SERIES,
//   payload: { gid, wsid },
// });

interface IRemoveSeriesDefPayload {
  gid: string;
  wsid: string;
}

export const removeSeriesDefAction = createAction<IRemoveSeriesDefPayload>(GRAPH_SAVE_REMOVE_SERIES);
export type IRemoveSeriesDefAction = ReturnType<typeof removeSeriesDefAction>;

//
// GRAPH_CLEAR_SERIES
//

// export interface IClearSeriesAction {
//   type: typeof GRAPH_CLEAR_SERIES;
//   gid: string;
// }

// export const clearSeriesAction = ({
//   gid,
// }: {
//   gid: string;
// }): IClearSeriesAction => ({
//   // trigger saga
//   type: GRAPH_CLEAR_SERIES,
//   gid,
// });

interface IClearSeriesPayload {
  gid: string;
}

export const clearSeriesAction = createAction<IClearSeriesPayload>(GRAPH_CLEAR_SERIES);
export type IClearSeriesAction = ReturnType<typeof clearSeriesAction>;

//
// GRAPH_SAVE_CLEAR_SERIES
//

// export interface IClearSeriesDefAction {
//   type: typeof GRAPH_SAVE_CLEAR_SERIES;
//   payload: { gid: string };
// }

// export const clearSeriesDefAction = ({
//   gid,
// }: {
//   gid: string;
// }): IClearSeriesDefAction => ({
//   // clear at the store
//   type: GRAPH_SAVE_CLEAR_SERIES,
//   payload: { gid },
// });

interface IClearSeriesDefPayload {
  gid: string;
}

export const clearSeriesDefAction = createAction<IClearSeriesDefPayload>(GRAPH_SAVE_CLEAR_SERIES);
export type IClearSeriesDefAction = ReturnType<typeof clearSeriesDefAction>;

//
// GRAPH_SELECT_SERIES
//

// export interface ISelectSeriesAction {
//   type: typeof GRAPH_SELECT_SERIES;
//   gid: string;
//   wsid: string;
//   clear?: boolean;
// }

// export const selectSeriesAction = ({
//   gid,
//   wsid,
//   clear,
// }: {
//   gid: string;
//   wsid: string;
//   clear?: boolean;
// }): ISelectSeriesAction => ({
//   type: GRAPH_SELECT_SERIES,
//   gid,
//   wsid,
//   clear,
// });

interface ISelectSeriesPayload {
  gid: string;
  wsid: string;
  clear?: boolean;
}

export const selectSeriesAction = createAction<ISelectSeriesPayload>(GRAPH_SELECT_SERIES);
export type ISelectSeriesAction = ReturnType<typeof selectSeriesAction>;

//
// GRAPH_DESELECT_SERIES
//

// export interface IDeselectSeriesAction {
//   type: typeof GRAPH_DESELECT_SERIES;
//   gid: string;
//   wsid: string;
// }

// export const deselectSeriesAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): IDeselectSeriesAction => ({
//   type: GRAPH_DESELECT_SERIES,
//   gid,
//   wsid,
// });

interface IDeselectSeriesPayload {
  gid: string;
  wsid: string;
}

export const deselectSeriesAction = createAction<IDeselectSeriesPayload>(GRAPH_DESELECT_SERIES);
export type IDeselectSeriesAction = ReturnType<typeof deselectSeriesAction>;

//
// GRAPH_UPDATE_TITLE
//

// export interface IUpdateGraphTitleAction {
//   type: typeof GRAPH_UPDATE_TITLE;
//   payload: { gid: string; title: string; style: any }; // Replace 'any' with the actual type of style
// }
// export const updateGraphTitleAction = ({
//   gid,
//   title,
//   style,
// }: {
//   gid: string;
//   title: string;
//   style?: any;
// }): IUpdateGraphTitleAction => ({
//   type: GRAPH_UPDATE_TITLE,
//   payload: { gid, title, style },
// });

// export const updateGraphTitle =
//   ({ gid, title, style }: { gid: string; title: string; style?: any }) =>
//     (dispatch: (action: IUpdateGraphTitleAction) => void) => {
//       dispatch(updateGraphTitleAction({ gid, title, style }));
//     };

interface IUpdateGraphTitlePayload {
  gid: string;
  title: string;
  style?: any;
}

export const updateGraphTitleAction = createAction<IUpdateGraphTitlePayload>(GRAPH_UPDATE_TITLE);
export type IUpdateGraphTitleAction = ReturnType<typeof updateGraphTitleAction>;

//
//  update graph realtime
//

// export interface IUpdateGraphRealtimeAction {
//   type: typeof GRAPH_UPDATE_REALTIME;
//   realtime?: boolean;
// }

// export const updateGraphRealtimeAction = ({
//   realtime,
// }: {
//   realtime?: boolean;
// }): IUpdateGraphRealtimeAction => ({
//   type: GRAPH_UPDATE_REALTIME,
//   realtime,
// });

interface IUpdateGraphRealtimePayload {
  realtime?: boolean;
}

export const updateGraphRealtimeAction = createAction<IUpdateGraphRealtimePayload>(GRAPH_UPDATE_REALTIME);
export type IUpdateGraphRealtimeAction = ReturnType<typeof updateGraphRealtimeAction>;

//
//  update graph range
//

// export interface IUpdateRangeAction {
//   type: typeof GRAPH_UPDATE_RANGE;
//   gid: string;
//   rangeStart?: number;
//   rangeEnd?: number;
// }

// export const updateRangeAction = ({
//   gid,
//   rangeStart,
//   rangeEnd,
// }: {
//   gid: string;
//   rangeStart?: number;
//   rangeEnd?: number;
// }): IUpdateRangeAction => ({
//   type: GRAPH_UPDATE_RANGE,
//   gid,
//   rangeStart,
//   rangeEnd,
// });

interface IUpdateRangePayload {
  gid: string;
  rangeStart?: number;
  rangeEnd?: number;
}

export const updateRangeAction = createAction<IUpdateRangePayload>(GRAPH_UPDATE_RANGE);
export type IUpdateRangeAction = ReturnType<typeof updateRangeAction>;

//
//  apply unary function
//

// export interface IApplyUnaryFunctionAction {
//   type: typeof GRAPH_APPLY_UNARY_FUNC;
//   gid: string;
//   wsid: string;
//   funcName?: string;
//   args?: any; // Replace 'any' with the actual type of args
//   params?: any; // Replace 'any' with the actual type of params
//   create?: boolean;
// }

// export const applyUnaryFunctionAction = ({
//   gid,
//   wsid,
//   funcName,
//   args,
//   params,
//   create,
// }: {
//   gid: string;
//   wsid: string;
//   funcName?: string;
//   args?: any;
//   params?: any;
//   create?: boolean;
// }): IApplyUnaryFunctionAction => ({
//   type: GRAPH_APPLY_UNARY_FUNC,
//   gid,
//   wsid,
//   funcName,
//   args,
//   params,
//   create,
// });

interface IApplyUnaryFunctionPayload {
  gid: string;
  wsid: string;
  funcName?: string;
  args?: any;
  params?: any;
  create?: boolean;
}

export const applyUnaryFunctionAction = createAction<IApplyUnaryFunctionPayload>(GRAPH_APPLY_UNARY_FUNC);
export type IApplyUnaryFunctionAction = ReturnType<typeof applyUnaryFunctionAction>;

//
//  apply binary function
//

// export interface IApplyBinaryFunctionAction {
//   type: typeof GRAPH_APPLY_BINARY_FUNC;
//   gid: string;
//   wsid1?: string;
//   wsid2?: string;
//   funcName?: string;
// }

// export const applyBinaryFunctionAction = ({
//   gid,
//   wsid1,
//   wsid2,
//   funcName,
// }: {
//   gid: string;
//   wsid1?: string;
//   wsid2?: string;
//   funcName?: string;
// }): IApplyBinaryFunctionAction => ({
//   type: GRAPH_APPLY_BINARY_FUNC,
//   gid,
//   wsid1,
//   wsid2,
//   funcName,
// });

interface IApplyBinaryFunctionPayload {
  gid: string;
  wsid1?: string;
  wsid2?: string;
  funcName?: string;
}

export const applyBinaryFunctionAction = createAction<IApplyBinaryFunctionPayload>(GRAPH_APPLY_BINARY_FUNC);
export type IApplyBinaryFunctionAction = ReturnType<typeof applyBinaryFunctionAction>;

//
//  apply binary operator
//

// export interface IApplyBinaryOperatorAction {
//   type: typeof GRAPH_APPLY_BINARY_OPERATOR;
//   gid: string;
//   wsid1?: string;
//   wsid2?: string;
//   operator?: string;
// }

// export const applyBinaryOperatorAction = ({
//   gid,
//   wsid1,
//   wsid2,
//   operator,
// }: {
//   gid: string;
//   wsid1?: string;
//   wsid2?: string;
//   operator?: string;
// }): IApplyBinaryOperatorAction => ({
//   type: GRAPH_APPLY_BINARY_OPERATOR,
//   gid,
//   wsid1,
//   wsid2,
//   operator,
// });

interface IApplyBinaryOperatorPayload {
  gid: string;
  wsid1?: string;
  wsid2?: string;
  operator?: string;
}

export const applyBinaryOperatorAction = createAction<IApplyBinaryOperatorPayload>(GRAPH_APPLY_BINARY_OPERATOR);
export type IApplyBinaryOperatorAction = ReturnType<typeof applyBinaryOperatorAction>;

//
//  apply unary function
//

// export interface IUpdateSeriesExprAction {
//   type: typeof GRAPH_UPDATE_SERIES_EXPR;
//   gid: string;
//   wsid: string;
//   expr?: string;
//   name?: string;
// }

// export const updateSeriesExprAction = ({
//   gid,
//   wsid,
//   expr,
//   name,
// }: {
//   gid: string;
//   wsid: string;
//   expr?: string;
//   name?: string;
// }): IUpdateSeriesExprAction => ({
//   type: GRAPH_UPDATE_SERIES_EXPR,
//   gid,
//   wsid,
//   expr,
//   name,
// });

interface IUpdateSeriesExprPayload {
  gid: string;
  wsid: string;
  expr?: string;
  name?: string;
}

export const updateSeriesExprAction = createAction<IUpdateSeriesExprPayload>(GRAPH_UPDATE_SERIES_EXPR);
export type IUpdateSeriesExprAction = ReturnType<typeof updateSeriesExprAction>;

//
//  clone series on a graph
//

// export interface ICloneSeriesAction {
//   type: typeof GRAPH_CLONE_SERIES;
//   gid: string;
//   wsid: string;
// }

// export const cloneSeriesAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): ICloneSeriesAction => ({
//   type: GRAPH_CLONE_SERIES,
//   gid,
//   wsid,
// });

interface ICloneSeriesPayload {
  gid: string;
  wsid: string;
}

export const cloneSeriesAction = createAction<ICloneSeriesPayload>(GRAPH_CLONE_SERIES);
export type ICloneSeriesAction = ReturnType<typeof cloneSeriesAction>;

//
// GRAPH_EXPORT_LOCAL
//

// export interface IExportGraphAction {
//   type: typeof GRAPH_EXPORT_LOCAL;
//   gid: string;
// }

// export const exportGraphAction = ({
//   gid,
// }: {
//   gid: string;
// }): IExportGraphAction => ({
//   type: GRAPH_EXPORT_LOCAL,
//   gid,
// });

interface IExportGraphPayload {
  gid: string;
}

export const exportGraphAction = createAction<IExportGraphPayload>(GRAPH_EXPORT_LOCAL);
export type IExportGraphAction = ReturnType<typeof exportGraphAction>;

// DELETE GRAPH OBJECT

// export interface IDeleteGraphObjectAction {
//   type: typeof GRAPH_DELETE_OBJECT;
//   gid: string;
// }

// export const deleteGraphObjectAction = (
//   gid: string
// ): IDeleteGraphObjectAction => ({
//   type: GRAPH_DELETE_OBJECT,
//   gid,
// });

interface IDeleteGraphObjectPayload {
  gid: string;
}

export const deleteGraphObjectAction = createAction<IDeleteGraphObjectPayload>(GRAPH_DELETE_OBJECT);
export type IDeleteGraphObjectAction = ReturnType<typeof deleteGraphObjectAction>;

//
// Graph processing steps actions
//

// GRAPH_SAVE_* actions

// export interface ISaveNewGraphAction {
//   type: typeof GRAPH_SAVE_NEW_GRAPH;
//   payload: {
//     gid: string;
//     freq: string;
//     title: string | undefined;
//     subtitle: string | undefined;
//     legend: string | undefined;
//   };
// }
// 
// export const saveNewGraphAction = ({
//   gid,
//   freq,
//   title,
//   subtitle,
//   legend,
// }: {
//   gid: string;
//   freq: string;
//   title?: string;
//   subtitle?: string;
//   legend?: string;
// }): ISaveNewGraphAction => ({
//   type: GRAPH_SAVE_NEW_GRAPH,
//   payload: {
//     gid,
//     freq,
//     title,
//     subtitle,
//     legend,
//   },
// });

interface ISaveNewGraphPayload {
  gid: string;
  freq: string;
  title?: string;
  subtitle?: string;
  legend?: string;
}


export const saveNewGraphAction = createAction<ISaveNewGraphPayload>(GRAPH_SAVE_NEW_GRAPH);
export type ISaveNewGraphAction = ReturnType<typeof saveNewGraphAction>;

//
// GRAPH_SAVE_GRAPH_OBJECT
//

// export interface ISaveGraphObjectAction {
//   type: typeof GRAPH_SAVE_GRAPH_OBJECT;
//   payload: { gid: string; object: any }; // Replace 'any' with the actual type of object
// }

// export const saveGraphObjectAction = ({
//   gid,
//   object,
// }: {
//   gid: string;
//   object?: any;
// }): ISaveGraphObjectAction => ({
//   type: GRAPH_SAVE_GRAPH_OBJECT,
//   payload: { gid, object },
// });

interface ISaveGraphObjectPayload {
  gid: string;
  object?: any;
}

export const saveGraphObjectAction = createAction<ISaveGraphObjectPayload>(GRAPH_SAVE_GRAPH_OBJECT);
export type ISaveGraphObjectAction = ReturnType<typeof saveGraphObjectAction>;

//
// GRAPH_SAVE_SERIES_DEF
//

// export interface ISaveSeriesDefAction {
//   type: typeof GRAPH_SAVE_SERIES_DEF;
//   payload: { gid: string; wsid: string; series: ISeriesDefinitionType };
// }

// export const saveSeriesDefAction = ({
//   gid,
//   wsid,
//   series,
// }: {
//   gid: string;
//   wsid: string;
//   series: ISeriesDefinitionType;
// }): ISaveSeriesDefAction => ({
//   type: GRAPH_SAVE_SERIES_DEF,
//   payload: { gid, wsid, series },
// });

interface ISaveSeriesDefPayload {
  gid: string;
  wsid: string;
  series: ISeriesDefinitionType;
}

export const saveSeriesDefAction = createAction<ISaveSeriesDefPayload>(GRAPH_SAVE_SERIES_DEF);
export type ISaveSeriesDefAction = ReturnType<typeof saveSeriesDefAction>;

//
// GRAPH_SAVE_DETERMINED_FREQ
//

// export interface ISaveGraphFreqAction {
//   type: typeof GRAPH_SAVE_DETERMINED_FREQ;
//   payload: { gid: string; freq: string };
// }

// export const saveGraphFreqAction = ({
//   gid,
//   freq,
// }: {
//   gid: string;
//   freq: string;
// }): ISaveGraphFreqAction => ({
//   type: GRAPH_SAVE_DETERMINED_FREQ,
//   payload: { gid, freq },
// });

interface ISaveGraphFreqPayload {
  gid: string;
  freq: string;
}

export const saveGraphFreqAction = createAction<ISaveGraphFreqPayload>(GRAPH_SAVE_DETERMINED_FREQ);
export type ISaveGraphFreqAction = ReturnType<typeof saveGraphFreqAction>;

//
// GRAPH_SAVE_TRANSFORMED_SERIES
//

// export interface ISaveTransformedSeriesAction {
//   type: typeof GRAPH_SAVE_TRANSFORMED_SERIES;
//   payload: { gid: string; wsid: string; data: any }; // Replace 'any' with the actual type of data
// }

// export const saveTransformedSeriesAction = ({
//   gid,
//   wsid,
//   data,
// }: {
//   gid: string;
//   wsid: string;
//   data?: any;
// }): ISaveTransformedSeriesAction => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES,
//   payload: { gid, wsid, data },
// });

interface ISaveTransformedSeriesPayload {
  gid: string;
  wsid: string;
  data?: any;
}

export const saveTransformedSeriesAction = createAction<ISaveTransformedSeriesPayload>(GRAPH_SAVE_TRANSFORMED_SERIES);
export type ISaveTransformedSeriesAction = ReturnType<typeof saveTransformedSeriesAction>;

//
// GRAPH_SAVE_TRANSFORMED_SERIES_BULK
//

// export interface ISaveTransformedSeriesBulkAction {
//   type: typeof GRAPH_SAVE_TRANSFORMED_SERIES_BULK;
//   payload: { gid: string; transformedSeries: any }; // Replace 'any' with the actual type of transformedSeries
// }

// export const saveTransformedSeriesBulkAction = ({
//   gid,
//   transformedSeries,
// }: {
//   gid: string;
//   transformedSeries?: any;
// }): ISaveTransformedSeriesBulkAction => ({
//   type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
//   payload: { gid, transformedSeries },
// });

interface ISaveTransformedSeriesBulkPayload {
  gid: string;
  transformedSeries?: any;
}

export const saveTransformedSeriesBulkAction = createAction<ISaveTransformedSeriesBulkPayload>(GRAPH_SAVE_TRANSFORMED_SERIES_BULK);
export type ISaveTransformedSeriesBulkAction = ReturnType<typeof saveTransformedSeriesBulkAction>;

//
// GRAPH_SAVE_OUTPUT
//

// export interface ISaveGeneratedGraphAction {
//   type: typeof GRAPH_SAVE_OUTPUT;
//   payload: { gid: string; output: any }; // Replace 'any' with the actual type of output
// }

// export const saveGeneratedGraphAction = ({
//   gid,
//   output,
// }: {
//   gid: string;
//   output?: any;
// }): ISaveGeneratedGraphAction => ({
//   type: GRAPH_SAVE_OUTPUT,
//   payload: { gid, output },
// });

interface ISaveGeneratedGraphPayload {
  gid: string;
  output?: any;
}

export const saveGeneratedGraphAction = createAction<ISaveGeneratedGraphPayload>(GRAPH_SAVE_OUTPUT);
export type ISaveGeneratedGraphAction = ReturnType<typeof saveGeneratedGraphAction>;

//
// GRAPH_SAVE_REORDER_SERIES
//

// export interface ISaveReorderSeriesAction {
//   type: typeof GRAPH_SAVE_REORDER_SERIES;
//   payload: {
//     gid: string;
//     wsid: string;
//     pos: number;
//   };
// }

// export const saveReorderSeriesAction = ({
//   gid,
//   wsid,
//   pos,
// }: {
//   gid: string;
//   wsid: string;
//   pos: number;
// }): ISaveReorderSeriesAction => ({
//   type: GRAPH_SAVE_REORDER_SERIES,
//   payload: { gid, wsid, pos },
// });

interface ISaveReorderSeriesPayload {
  gid: string;
  wsid: string;
  pos: number;
}

export const saveReorderSeriesAction = createAction<ISaveReorderSeriesPayload>(GRAPH_SAVE_REORDER_SERIES);
export type ISaveReorderSeriesAction = ReturnType<typeof saveReorderSeriesAction>;

//
// GRAPH_SAVE_GRAPH_PROPS
//

// export interface ISaveGraphPropsAction {
//   type: typeof GRAPH_SAVE_GRAPH_PROPS;
//   payload: { gid: string; props: any }; // Replace 'any' with the actual type of props
// }

// export const saveGraphPropsAction = ({
//   gid,
//   props,
// }: {
//   gid: string;
//   props?: any;
// }): ISaveGraphPropsAction => ({
//   type: GRAPH_SAVE_GRAPH_PROPS,
//   payload: { gid, props },
// });

interface ISaveGraphPropsPayload {
  gid: string;
  props?: any;
}

export const saveGraphPropsAction = createAction<ISaveGraphPropsPayload>(GRAPH_SAVE_GRAPH_PROPS);
export type ISaveGraphPropsAction = ReturnType<typeof saveGraphPropsAction>;

//
// GRAPH_SAVE_SERIES_PROPS
//

// export interface ISaveSeriesPropsAction {
//   type: typeof GRAPH_SAVE_SERIES_PROPS;
//   payload: { gid: string; wsid: string; props: any }; // Replace 'any' with the actual type of props
// }

// export const saveSeriesPropsAction = ({
//   gid,
//   wsid,
//   props,
// }: {
//   gid: string;
//   wsid: string;
//   props?: any;
// }): ISaveSeriesPropsAction => ({
//   type: GRAPH_SAVE_SERIES_PROPS,
//   payload: { gid, wsid, props },
// });

interface ISaveSeriesPropsPayload {
  gid: string;
  wsid: string;
  props?: any;
}

export const saveSeriesPropsAction = createAction<ISaveSeriesPropsPayload>(GRAPH_SAVE_SERIES_PROPS);
export type ISaveSeriesPropsAction = ReturnType<typeof saveSeriesPropsAction>;
//
// GRAPH_SAVE_UI_PROPS
//

// export interface ISaveGraphUIPropsAction {
//   type: typeof GRAPH_SAVE_UI_PROPS;
//   payload: { gid: string; props: any }; // Replace 'any' with the actual type of props
// }

// export const saveGraphUIPropsAction = ({
//   gid,
//   props,
// }: {
//   gid: string;
//   props?: any;
// }): ISaveGraphUIPropsAction => ({
//   type: GRAPH_SAVE_UI_PROPS,
//   payload: { gid, props },
// });

interface ISaveGraphUIPropsPayload {
  gid: string;
  props?: any;
}

export const saveGraphUIPropsAction = createAction<ISaveGraphUIPropsPayload>(GRAPH_SAVE_UI_PROPS);
export type ISaveGraphUIPropsAction = ReturnType<typeof saveGraphUIPropsAction>;

//
// GRAPH_SAVE_EXPORT_OPTIONS
//

// export interface ISaveGraphExportOptionsAction {
//   type: typeof GRAPH_SAVE_EXPORT_OPTIONS;
//   payload: { gid: string; opts: any }; // Replace 'any' with the actual type of opts
// }

// export const saveGraphExportOptionsAction = ({
//   gid,
//   opts,
// }: {
//   gid: string;
//   opts?: any;
// }): ISaveGraphExportOptionsAction => ({
//   type: GRAPH_SAVE_EXPORT_OPTIONS,
//   payload: { gid, opts },
// });

interface ISaveGraphExportOptionsPayload {
  gid: string;
  opts?: any;
}

export const saveGraphExportOptionsAction = createAction<ISaveGraphExportOptionsPayload>(GRAPH_SAVE_EXPORT_OPTIONS);
export type ISaveGraphExportOptionsAction = ReturnType<typeof saveGraphExportOptionsAction>;
//
// GRAPH_SAVE_REPLACE_SERIES
//

// export interface ISaveReplaceSeriesAction {
//   type: typeof GRAPH_SAVE_REPLACE_SERIES;
//   payload: {
//     gid: string;
//     wsid: string;
//     to_wsid: string;
//   };
// }

// export const saveReplaceSeriesAction = ({
//   gid,
//   wsid,
//   to_wsid,
// }: {
//   gid: string;
//   wsid: string;
//   to_wsid: string;
// }): ISaveReplaceSeriesAction => ({
//   type: GRAPH_SAVE_REPLACE_SERIES,
//   payload: { gid, wsid, to_wsid },
// });

interface ISaveReplaceSeriesPayload {
  gid: string;
  wsid: string;
  to_wsid: string;
}

export const saveReplaceSeriesAction = createAction<ISaveReplaceSeriesPayload>(GRAPH_SAVE_REPLACE_SERIES);
export type ISaveReplaceSeriesAction = ReturnType<typeof saveReplaceSeriesAction>;

//
// GRAPH_SAVE_SELECT_SERIES
//

// export interface ISaveSelectSeriesAction {
//   type: typeof GRAPH_SAVE_SELECT_SERIES;
//   payload: {
//     gid: string;
//     wsid: string;
//     clear: boolean | undefined;
//   };
// }

// export const saveSelectSeriesAction = ({
//   gid,
//   wsid,
//   clear,
// }: {
//   gid: string;
//   wsid: string;
//   clear?: boolean;
// }): ISaveSelectSeriesAction => ({
//   type: GRAPH_SAVE_SELECT_SERIES,
//   payload: { gid, wsid, clear },
// });

interface ISaveSelectSeriesPayload {
  gid: string;
  wsid: string;
  clear?: boolean;
}

export const saveSelectSeriesAction = createAction<ISaveSelectSeriesPayload>(GRAPH_SAVE_SELECT_SERIES);
export type ISaveSelectSeriesAction = ReturnType<typeof saveSelectSeriesAction>;

//
// GRAPH_SAVE_DESELECT_SERIES
//

// export interface ISaveDeselectSeriesAction {
//   type: typeof GRAPH_SAVE_DESELECT_SERIES;
//   payload: { gid: string; wsid: string };
// }

// export const saveDeselectSeriesAction = ({
//   gid,
//   wsid,
// }: {
//   gid: string;
//   wsid: string;
// }): ISaveDeselectSeriesAction => ({
//   type: GRAPH_SAVE_DESELECT_SERIES,
//   payload: { gid, wsid },
// });

interface ISaveDeselectSeriesPayload {
  gid: string;
  wsid: string;
}

export const saveDeselectSeriesAction = createAction<ISaveDeselectSeriesPayload>(GRAPH_SAVE_DESELECT_SERIES);
export type ISaveDeselectSeriesAction = ReturnType<typeof saveDeselectSeriesAction>;
//
// GRAPH_SAVE_RESTORE_REDUCER
//

// export interface IRestoreGraphReducer {
//   type: typeof GRAPH_SAVE_RESTORE_REDUCER;
//   payload: any; // Replace 'any' with the actual type of payload
// }

// export const restoreGraphReducer = (payload: any): IRestoreGraphReducer => ({
//   type: GRAPH_SAVE_RESTORE_REDUCER,
//   payload,
// });

type IRestoreGraphReducerPayload = any;

export const restoreGraphReducer = createAction<IRestoreGraphReducerPayload>(GRAPH_SAVE_RESTORE_REDUCER);
export type IRestoreGraphReducerAction = ReturnType<typeof restoreGraphReducer>;

//
// GRAPH_SAVE_CHART_REF
//

// export interface IGraphSaveChartRefAction {
//   type: typeof GRAPH_SAVE_CHART_REF;
//   payload: { gid: string; ref: any }; // Replace 'any' with the actual type of ref
// }

// export const graphSaveChartRefAction = ({
//   gid,
//   ref,
// }: {
//   gid: string;
//   ref?: any;
// }): IGraphSaveChartRefAction => ({
//   type: GRAPH_SAVE_CHART_REF,
//   payload: { gid, ref },
// });

interface IGraphSaveChartRefPayload {
  gid: string;
  ref: any;
}

export const graphSaveChartRefAction = createAction<IGraphSaveChartRefPayload>(GRAPH_SAVE_CHART_REF);
export type IGraphSaveChartRefAction = ReturnType<typeof graphSaveChartRefAction>;

//
// GRAPH_SAVE_DELETE_OBJECT
//

// export interface ISaveDeleteGraphObjectAction {
//   type: typeof GRAPH_SAVE_DELETE_OBJECT;
//   payload: { gid: string };
// }

// export const saveDeleteGraphObjectAction = ({
//   gid,
// }: {
//   gid: string;
// }): ISaveDeleteGraphObjectAction => ({
//   type: GRAPH_SAVE_DELETE_OBJECT,
//   payload: { gid },
// });

interface ISaveDeleteGraphObjectPayload {
  gid: string;
}

export const saveDeleteGraphObjectAction = createAction<ISaveDeleteGraphObjectPayload>(GRAPH_SAVE_DELETE_OBJECT);
export type ISaveDeleteGraphObjectAction = ReturnType<typeof saveDeleteGraphObjectAction>;

// ADD GRAPH ERRORS

// export interface IAddGraphErrorsAction {
//   type: typeof GRAPH_ERRORS_ADD;
//   payload: { gid: string; errors: any }; // Replace 'any' with the actual type of errors
// }

// export const addGraphErrorsAction = ({
//   gid,
//   errors,
// }: {
//   gid: string;
//   errors?: any;
// }): IAddGraphErrorsAction => ({
//   type: GRAPH_ERRORS_ADD,
//   payload: { gid, errors },
// });

interface IAddGraphErrorsPayload {
  gid: string;
  errors: any;
}

export const addGraphErrorsAction = createAction<IAddGraphErrorsPayload>(GRAPH_ERRORS_ADD);
export type IAddGraphErrorsAction = ReturnType<typeof addGraphErrorsAction>;

// CLEAR GRAPH ERRORS

// export interface IClearGraphErrorsAction {
//   type: typeof GRAPH_ERRORS_CLEAR;
//   payload: { gid: string };
// }

// export const clearGraphErrorsAction = ({
//   gid,
// }: {
//   gid: string;
// }): IClearGraphErrorsAction => ({
//   type: GRAPH_ERRORS_CLEAR,
//   payload: { gid },
// });

interface IClearGraphErrorsPayload {
  gid: string;
}

export const clearGraphErrorsAction = createAction<IClearGraphErrorsPayload>(GRAPH_ERRORS_CLEAR);
export type IClearGraphErrorsAction = ReturnType<typeof clearGraphErrorsAction>;

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

