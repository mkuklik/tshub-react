import ObjectID from 'bson-objectid';
import {
  SERIES_EXPR_CREATE,
  SERIES_REF_CREATE,
  SERIES_DATA_CREATE,
  SERIES_UPDATE,
  SERIES_RESOLVE,
  SERIES_DELETE,
  SERIES_SAVE_SERIES,
  SERIES_SAVE_RESOLVED_SERIES,
  SERIES_SAVE_DELETE_SERIES,
  SERIES_SAVE_RESTORE_SERIES,
  SERIES_SAVE_UPDATE,
  SERIES_SIGNAL_DELETED,
  SERIES_SIGNAL_UPDATED,
  SERIES_SIGNAL_RESOLVED,
} from './ActionTypes';

//
// Create Series
//

export const createExprSeriesAction = (wsid, expr, name) => ({
  type: SERIES_EXPR_CREATE,
  wsid, expr, name
});

export const createExprSeries = ({ expr, name } = {}) => (dispatch) => {
  const wsid = ObjectID().toHexString();
  dispatch(createExprSeriesAction(wsid, expr, name));
  return wsid;
};

export const createRefSeriesAction = (wsid, name, tsid, collId, realtime) => ({
  type: SERIES_REF_CREATE,
  wsid, name, tsid, collId, realtime
});

export const createRefSeries = ({ name, tsid, collId, realtime } = {}) => (dispatch) => {
  const wsid = ObjectID().toHexString();
  dispatch(createRefSeriesAction(wsid, name, tsid, collId, realtime));
  return wsid;
};

export const createDataSeriesAction = (wsid, name, freq, fparam, dtype, dparam, units, data) => ({
  type: SERIES_DATA_CREATE,
  wsid, name, freq, fparam, dtype, dparam, units, data
});

export const createDataSeries = ({ name, freq, fparam, dtype, dparam, units, data } = {}) => (dispatch) => {
  const wsid = ObjectID().toHexString();
  dispatch(createDataSeriesAction(wsid, name, freq, fparam, dtype, dparam, units, data));
  return wsid;
};

//
//  UPDATE SERIES
//

export const updateSeriesAction = ({ wsid, series }) => ({
  type: SERIES_UPDATE,
  wsid, series
});

//
//  RESOLVE SERIES
// 

export const resolveSeriesAction = ({ wsid, realtime } = {}) => ({
  type: SERIES_RESOLVE,
  payload: { wsid, realtime },
});

//
// SERIES_DELETE
//

export const deleteSeriesAction = ({ wsid } = {}) => ({
  type: SERIES_DELETE,
  payload: { wsid },
});


//
// SERIES SAVE NEW SERIES
//

export const saveSeriesAction = ({ wsid, series } = {}) => ({
  type: SERIES_SAVE_SERIES,
  payload: { wsid, series },
});

//
// SAVE RESOLVED SERIES
//

export const saveResolvedSeriesAction = ({ wsid, series } = {}) => ({
  // update properties of series in graph definition in the store
  type: SERIES_SAVE_RESOLVED_SERIES,
  payload: {
    wsid,
    series
  }
});

//
// SERIES SAVE
//

export const saveUpdateSeriesAction = ({ wsid, series } = {}) => ({
  type: SERIES_SAVE_UPDATE,
  payload: { wsid, series },
});


//
// SERIES DELETE
//

export const saveDeleteSeriesAction = ({ wsid } = {}) => ({
  type: SERIES_SAVE_DELETE_SERIES,
  payload: { wsid },
});

export const restoreSeriesStoreAction = (payload) => ({
  type: SERIES_SAVE_RESTORE_SERIES,
  payload,

});

//      SIGNALS

export const signalSeriesUpdatedAction = ({ wsid } = {}) => ({
  type: SERIES_SIGNAL_UPDATED,
  payload: { wsid },
});
export const signalSeriesDeletedAction = ({ wsid } = {}) => ({
  type: SERIES_SIGNAL_DELETED,
  payload: { wsid },
});
export const signalSeriesResolvedAction = ({ wsid } = {}) => ({
  type: SERIES_SIGNAL_RESOLVED,
  payload: { wsid },
});

