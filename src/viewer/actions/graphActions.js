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

//
// GRAPH_CREATE
//

export const createGraphAction = ({ gid, freq, title, subtitle, legend }) => ({
  type: GRAPH_CREATE,
  gid,
  freq,
  title,
  subtitle,
  legend,
});

export const createGraph = (freq) => (dispatch) => {
  const gid = ObjectID().toHexString();
  dispatch(createGraphAction({ gid, freq }));
  return gid;
};

//
//  CLONE GRAPH
//
export const cloneGraphAction = ({ gid }) => ({
  type: CLONE_GRAPH,
  gid,
});

//
//  redraw graph
//
export const redrawGraphAction = ({ gid } = {}) => ({
  type: GRAPH_UPDATE,
  payload: { gid, wsid: undefined, stage: undefined },
});


//
// GRAPH_UPDATE
//

export const updateGraphAction = ({ gid, wsid, stage } = {}) => ({
  type: GRAPH_UPDATE,
  gid,
  wsid,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export const updateGraphPropsAction = ({ gid, props, stage } = {}) => ({
  // update properties of series in graph definition in the store
  type: GRAPH_UPDATE_GRAPH_PROPS,
  gid,
  props,
  stage,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export const updateSeriesPropsAction = ({ gid, wsid, props } = {}) => ({
  // update properties of series in graph definition in the store
  type: GRAPH_UPDATE_SERIES_PROPS,
  gid,
  wsid,
  props,
});

//
// GRAPH_UPDATE_SERIES_PROPS
//

export const updateGraphUIPropsAction = ({ gid, props } = {}) => ({
  // update properties of series in graph definition in the store
  type: GRAPH_UPDATE_UI_PROPS,
  gid,
  props,
});

//
// GRAPH_UPDATE_OUTPUT
//

export const updateGraphOutputAction = ({ gid, output } = {}) => ({
  type: GRAPH_UPDATE_OUTPUT,
  payload: { gid, output },
});


//
// GRAPH_UPDATE_STATUS
//

export const updateGraphStatusAction = ({ gid, status } = {}) => ({
  type: GRAPH_UPDATE_STATUS,
  payload: { gid, status },
});

//
// GRAPH_FOCUS
//

export const focusOnGraphAction = (gid) => ({
  type: GRAPH_FOCUS,
  payload: { gid },
});

export const focusOnGraph = (gid) => (dispatch) => {
  dispatch(focusOnGraphAction(gid));
};

export const saveCurrentGraphIdAction = ({ gid } = {}) => ({
  type: GRAPH_SAVE_CURRENT_GID,
  payload: { gid },
});

//
// GRAPH_ADD_SERIES
//

// export const addNewSeriesToGraphAction = ({
//   gid, collId, tsid, realtime, vid, expr, name,
// } = {}) => ({
//   type: GRAPH_ADD_SERIES,
//   payload: {
//     gid,
//     collId,
//     tsid, realtime, vid, expr, name,
//   },
// });

export const addRefSeriesToGraphAction = ({
  gid, name, tsid, collId, realtime,
} = {}) => ({
  type: GRAPH_ADD_REF_SERIES,
  gid,
  name,
  tsid,
  collId,
  realtime,
});

export const addNamedSeriesToGraphAction = ({
  gid, name, tsName, collName, spaceName, realtime,
} = {}) => ({
  type: GRAPH_ADD_NAMED_SERIES,
  gid,
  name,
  tsName,
  collName,
  spaceName,
  realtime,
});

export const addExprSeriesToGraphAction = ({
  gid, name, expr, realtime,
} = {}) => ({
  type: GRAPH_ADD_EXPR_SERIES,
  gid,
  name,
  expr,
  realtime,
});

export const addDataSeriesToGraphAction = ({
  gid, name, freq, fparam, dtype, dparam, units, data, realtime,
} = {}) => ({
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

export const addSeriesToGraphAction = ({
  gid, wsid,
} = {}) => ({
  type: GRAPH_ADD_SERIES,
  payload: {
    gid, wsid,
  },
});

export const addSelectedTimeseriesToGraphAction = ({ gid, timeseriesList }) => ({
  type: GRAPH_ADD_MANY_REF_SERIES,
  gid,
  timeseriesList,
});


//
// GRAPH_CLEAR_N_ADD_SERIES
//

export const addNewSeriesToClearGraphAction = ({
  gid, collId, tsid, realtime, vid, name,
} = {}) => ({
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

export const reorderSeriesAction = ({ gid, wsid, pos } = {}) => ({
  type: GRAPH_REORDER_SERIES,
  gid,
  wsid,
  pos,
});


//
// GRAPH_REMOVE_SERIES
//

export const removeSeriesAction = ({ gid, wsid } = {}) => ({
  type: GRAPH_REMOVE_SERIES,
  gid,
  wsid,
});


//
// GRAPH_APPEND_SERIES
//

export const appendSeriesDefAction = ({ gid, series } = {}) => ({
  type: GRAPH_SAVE_APPEND_SERIES,
  payload: { gid, series },
});

//
// GRAPH_REMOVE_SERIES
//

export const removeSeriesDefAction = ({ gid, wsid } = {}) => ({
  type: GRAPH_SAVE_REMOVE_SERIES,
  payload: { gid, wsid },
});

//
// GRAPH_CLEAR_SERIES
//

export const clearSeriesAction = ({ gid } = {}) => ({
  // trigger saga
  type: GRAPH_CLEAR_SERIES,
  gid,
});

export const clearSeriesDefAction = ({ gid } = {}) => ({
  // clear at the store
  type: GRAPH_SAVE_CLEAR_SERIES,
  payload: { gid },
});

//
// GRAPH_SELECT_SERIES
//

export const selectSeriesAction = ({ gid, wsid, clear } = {}) => ({
  type: GRAPH_SELECT_SERIES,
  gid,
  wsid,
  clear,
});

export const deselectSeriesAction = ({ gid, wsid } = {}) => ({
  type: GRAPH_DESELECT_SERIES,
  gid,
  wsid,
});

//
// GRAPH_UPDATE_TITLE
//

export const updateGraphTitleAction = ({ gid, title, style } = {}) => ({
  type: GRAPH_UPDATE_TITLE,
  payload: { gid, title, style },
});

export const updateGraphTitle = ({ gid, title, style } = {}) => (dispatch) => {
  dispatch(updateGraphTitleAction({ gid, title, style }));
};


//
//  update graph realtime
//
export const updateGraphRealtimeAction = ({ realtime } = {}) => ({
  type: GRAPH_UPDATE_REALTIME,
  realtime,
});

//
//  update graph range
//
export const updateRangeAction = ({ gid, rangeStart, rangeEnd } = {}) => ({
  type: GRAPH_UPDATE_RANGE,
  gid,
  rangeStart,
  rangeEnd,
});

//
//  apply unary function
//
export const applyUnaryFunctionAction = ({ gid, wsid, funcName, args, params, create } = {}) => ({
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
export const applyBinaryFunctionAction = ({
  gid, wsid1, wsid2, funcName,
} = {}) => ({
  type: GRAPH_APPLY_BINARY_FUNC,
  gid,
  wsid1,
  wsid2,
  funcName,
});


//
//  apply binary operator
//
export const applyBinaryOperatorAction = ({
  gid, wsid1, wsid2, operator,
} = {}) => ({
  type: GRAPH_APPLY_BINARY_OPERATOR,
  gid,
  wsid1,
  wsid2,
  operator,
});



//
//  apply unary function
//
export const updateSeriesExprAction = ({
  gid, wsid, expr, name,
} = {}) => ({
  type: GRAPH_UPDATE_SERIES_EXPR,
  gid,
  wsid,
  expr,
  name,
});


//
//  clone series on a graph
//
export const cloneSeriesAction = ({ gid, wsid } = {}) => ({
  type: GRAPH_CLONE_SERIES,
  gid,
  wsid,
});

export const exportGraphAction = ({ gid } = {}) => ({
  type: GRAPH_EXPORT_LOCAL,
  gid,
});


// DELETE GRAPH OBJECT

export const deleteGraphObjectAction = (gid) => ({
  type: GRAPH_DELETE_OBJECT,
  gid,
});


//
// Graph processing steps actions
//

// export const resolveSeriesAction = ({ gid, wsid } = {}) => ({
//   type: GRAPH_RESOLVE_SERIES,
//   gid,
//   wsid,
// });

// export const determineGraphFreqAction = ({ gid } = {}) => ({
//   type: GRAPH_DETERMINE_FREQ,
//   gid,
// });

// export const transformGraphSeriesAction = ({ gid } = {}) => ({
//   type: GRAPH_TRANSFORM_SERIES,
//   gid,
// });

// export const generateGraphAction = ({ gid } = {}) => ({
//   type: GRAPH_GENERATE_GRAPH,
//   gid,
// });

// GRAPH_SAVE_* actions
export const saveNewGraphAction = ({ gid, freq, title, subtitle, legend } = {}) => ({
  type: GRAPH_SAVE_NEW_GRAPH,
  payload: { gid, freq, title, subtitle, legend },
});

export const saveGraphObjectAction = ({ gid, object } = {}) => ({
  type: GRAPH_SAVE_GRAPH_OBJECT,
  payload: { gid, object },
});

export const saveGraphFreqAction = ({ gid, freq } = {}) => ({
  type: GRAPH_SAVE_DETERMINED_FREQ,
  payload: { gid, freq },
});

export const saveTransformedSeriesAction = ({ gid, wsid, data } = {}) => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES,
  payload: { gid, wsid, data },
});

export const saveTransformedSeriesBulkAction = ({ gid, transformedSeries } = {}) => ({
  type: GRAPH_SAVE_TRANSFORMED_SERIES_BULK,
  payload: { gid, transformedSeries },
});


export const saveGeneratedGraphAction = ({ gid, output } = {}) => ({
  type: GRAPH_SAVE_OUTPUT,
  payload: { gid, output },
});


export const saveReorderSeriesAction = ({ gid, wsid, pos } = {}) => ({
  type: GRAPH_SAVE_REORDER_SERIES,
  payload: { gid, wsid, pos },
});

export const saveGraphPropsAction = ({ gid, props } = {}) => ({
  type: GRAPH_SAVE_GRAPH_PROPS,
  payload: { gid, props },
});

export const saveSeriesPropsAction = ({ gid, wsid, props } = {}) => ({
  type: GRAPH_SAVE_SERIES_PROPS,
  payload: { gid, wsid, props },
});

export const saveGraphUIPropsAction = ({ gid, props } = {}) => ({
  type: GRAPH_SAVE_UI_PROPS,
  payload: { gid, props },
});

export const saveGraphExportOptionsAction = ({ gid, opts } = {}) => ({
  type: GRAPH_SAVE_EXPORT_OPTIONS,
  payload: { gid, opts },
});

export const saveReplaceSeriesAction = ({ gid, wsid, to_wsid } = {}) => ({
  type: GRAPH_SAVE_REPLACE_SERIES,
  payload: { gid, wsid, to_wsid },
});


export const saveSelectSeriesAction = ({ gid, wsid, clear } = {}) => ({
  type: GRAPH_SAVE_SELECT_SERIES,
  payload: { gid, wsid, clear },
});

export const saveDeselectSeriesAction = ({ gid, wsid } = {}) => ({
  type: GRAPH_SAVE_DESELECT_SERIES,
  payload: { gid, wsid },
});

export const restoreGraphReducer = (payload) => ({
  type: GRAPH_SAVE_RESTORE_REDUCER,
  payload,
});

export const graphSaveChartRefAction = ({ gid, ref } = {}) => ({
  type: GRAPH_SAVE_CHART_REF,
  payload: { gid, ref },
});

export const saveDeleteGraphObjectAction = ({ gid } = {}) => ({
  type: GRAPH_SAVE_DELETE_OBJECT,
  payload: { gid },
});

// ADD GRAPH ERRORS

export const addGraphErrorsAction = ({ gid, errors } = {}) => ({
  type: GRAPH_ERRORS_ADD,
  payload: { gid, errors },
});

// CLEAR GRAPH ERRORS

export const clearGraphErrorsAction = ({ gid } = {}) => ({
  type: GRAPH_ERRORS_CLEAR,
  payload: { gid },
});
