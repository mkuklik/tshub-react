import ObjectID from 'bson-objectid';

// SERIES

export const SERIES_EXPR_CREATE = 'SERIES_EXPR_CREATE';
export const SERIES_REF_CREATE = 'SERIES_REF_CREATE';
export const SERIES_DATA_CREATE = 'SERIES_DATA_CREATE';
export const SERIES_UPDATE = 'SERIES_UPDATE';
export const SERIES_RESOLVE = 'SERIES_RESOLVE';
export const SERIES_DELETE = 'SERIES_DELETE';

export const SERIES_SAVE_SERIES = 'SERIES_SAVE_SERIES';
export const SERIES_SAVE_RESOLVED_SERIES = 'SERIES_SAVE_RESOLVED_SERIES';
export const SERIES_SAVE_DELETE_SERIES = 'SERIES_SAVE_DELETE_SERIES';
export const SERIES_SAVE_UPDATE = 'SERIES_SAVE_UPDATE';
export const SERIES_SAVE_RESTORE_SERIES = 'SERIES_SAVE_RESTORE_SERIES';

export const SERIES_SIGNAL_UPDATED = 'SERIES_SIGNAL_UPDATED';
export const SERIES_SIGNAL_DELETED = 'SERIES_SIGNAL_DELETED';
export const SERIES_SIGNAL_RESOLVED = 'SERIES_SIGNAL_RESOLVED';

const objectIdGenerator = new ObjectID();

//
// Create Series
//

export interface ICreateExprSeriesAction {
  type: typeof SERIES_EXPR_CREATE;
  wsid: string;
  expr: string;
  name: string;
}

export const createExprSeriesAction = (wsid: string, expr: string, name: string): ICreateExprSeriesAction => ({
  type: SERIES_EXPR_CREATE,
  wsid,
  expr,
  name,
});

export const createExprSeries = ({ expr, name }: { expr?: string, name?: string } = {}) => (dispatch: (action: ICreateExprSeriesAction) => void) => {
  const wsid = objectIdGenerator.toHexString();
  dispatch(createExprSeriesAction(wsid, expr || '', name || ''));
  return wsid;
};

export interface ICreateRefSeriesAction {
  type: typeof SERIES_REF_CREATE;
  wsid: string;
  name: string;
  tsid: string;
  collId: string;
  realtime: boolean;
}

export const createRefSeriesAction = (wsid: string, name: string, tsid: string, collId: string, realtime: boolean): ICreateRefSeriesAction => ({
  type: SERIES_REF_CREATE,
  wsid,
  name,
  tsid,
  collId,
  realtime,
});

export const createRefSeries = ({
  name, tsid, collId, realtime,
}: { name?: string, tsid?: string, collId?: string, realtime?: boolean } = {}) => (dispatch: (action: ICreateRefSeriesAction) => void) => {
  const wsid = objectIdGenerator.toHexString();
  dispatch(createRefSeriesAction(wsid, name || '', tsid || '', collId || '', realtime || false));
  return wsid;
};

export interface ICreateDataSeriesAction {
  type: typeof SERIES_DATA_CREATE;
  wsid: string;
  name: string;
  freq: any; // Replace 'any' with the actual type of freq
  fparam: any; // Replace 'any' with the actual type of fparam
  dtype: any; // Replace 'any' with the actual type of dtype
  dparam: any; // Replace 'any' with the actual type of dparam
  units: any; // Replace 'any' with the actual type of units
  data: any; // Replace 'any' with the actual type of data
}

export const createDataSeriesAction = (wsid: string, name: string, freq: any, fparam: any, dtype: any, dparam: any, units: any, data: any): ICreateDataSeriesAction => ({
  type: SERIES_DATA_CREATE,
  wsid,
  name,
  freq,
  fparam,
  dtype,
  dparam,
  units,
  data,
});

export const createDataSeries = ({
  name, freq, fparam, dtype, dparam, units, data,
}: { name?: string, freq?: any, fparam?: any, dtype?: any, dparam?: any, units?: any, data?: any } = {}) => (dispatch: (action: ICreateDataSeriesAction) => void) => {
  const wsid = objectIdGenerator.toHexString();
  dispatch(createDataSeriesAction(wsid, name || '', freq, fparam, dtype, dparam, units, data));
  return wsid;
};

//
//  UPDATE SERIES
//

export interface IUpdateSeriesAction {
  type: typeof SERIES_UPDATE;
  wsid: string;
  series: any; // Replace 'any' with the actual type of series
}

export const updateSeriesAction = ({ wsid, series }: { wsid: string, series: any }): IUpdateSeriesAction => ({
  type: SERIES_UPDATE,
  wsid,
  series,
});

//
//  RESOLVE SERIES
//

export interface IResolveSeriesAction {
  type: typeof SERIES_RESOLVE;
  payload: { wsid: string; realtime: boolean };
}

export const resolveSeriesAction = ({ wsid, realtime }: { wsid?: string, realtime?: boolean } = {}): IResolveSeriesAction => ({
  type: SERIES_RESOLVE,
  payload: { wsid: wsid || '', realtime: realtime || false },
});

//
// SERIES_DELETE
//

export interface IDeleteSeriesAction {
  type: typeof SERIES_DELETE;
  payload: { wsid: string };
}

export const deleteSeriesAction = ({ wsid }: { wsid?: string } = {}): IDeleteSeriesAction => ({
  type: SERIES_DELETE,
  payload: { wsid: wsid || '' },
});

//
// SERIES SAVE NEW SERIES
//

export interface ISaveSeriesAction {
  type: typeof SERIES_SAVE_SERIES;
  payload: { wsid: string; series: any }; // Replace 'any' with the actual type of series
}

export const saveSeriesAction = ({ wsid, series }: { wsid?: string, series?: any } = {}): ISaveSeriesAction => ({
  type: SERIES_SAVE_SERIES,
  payload: { wsid: wsid || '', series: series || {} },
});

//
// SAVE RESOLVED SERIES
//

export interface ISaveResolvedSeriesAction {
  type: typeof SERIES_SAVE_RESOLVED_SERIES;
  payload: { wsid: string; series: any }; // Replace 'any' with the actual type of series
}

export const saveResolvedSeriesAction = ({ wsid, series }: { wsid?: string, series?: any } = {}): ISaveResolvedSeriesAction => ({
  // update properties of series in graph definition in the store
  type: SERIES_SAVE_RESOLVED_SERIES,
  payload: {
    wsid: wsid || '',
    series: series || {},
  },
});

//
// SERIES SAVE
//

export interface ISaveUpdateSeriesAction {
  type: typeof SERIES_SAVE_UPDATE;
  payload: { wsid: string; series: any }; // Replace 'any' with the actual type of series
}

export const saveUpdateSeriesAction = ({ wsid, series }: { wsid?: string, series?: any } = {}): ISaveUpdateSeriesAction => ({
  type: SERIES_SAVE_UPDATE,
  payload: { wsid: wsid || '', series: series || {} },
});

//
// SERIES DELETE
//

export interface ISaveDeleteSeriesAction {
  type: typeof SERIES_SAVE_DELETE_SERIES;
  payload: { wsid: string };
}

export const saveDeleteSeriesAction = ({ wsid }: { wsid?: string } = {}): ISaveDeleteSeriesAction => ({
  type: SERIES_SAVE_DELETE_SERIES,
  payload: { wsid: wsid || '' },
});

export interface IRestoreSeriesStoreAction {
  type: typeof SERIES_SAVE_RESTORE_SERIES;
  payload: any; // Replace 'any' with the actual type of payload
}

export const restoreSeriesStoreAction = (payload: any): IRestoreSeriesStoreAction => ({
  type: SERIES_SAVE_RESTORE_SERIES,
  payload,

});

//      SIGNALS

export interface ISignalSeriesUpdatedAction {
  type: typeof SERIES_SIGNAL_UPDATED;
  payload: { wsid: string };
}

export const signalSeriesUpdatedAction = ({ wsid }: { wsid?: string } = {}): ISignalSeriesUpdatedAction => ({
  type: SERIES_SIGNAL_UPDATED,
  payload: { wsid: wsid || '' },
});

export interface ISignalSeriesDeletedAction {
  type: typeof SERIES_SIGNAL_DELETED;
  payload: { wsid: string };
}

export const signalSeriesDeletedAction = ({ wsid }: { wsid?: string } = {}): ISignalSeriesDeletedAction => ({
  type: SERIES_SIGNAL_DELETED,
  payload: { wsid: wsid || '' },
});

export interface ISignalSeriesResolvedAction {
  type: typeof SERIES_SIGNAL_RESOLVED;
  payload: { wsid: string };
}

export const signalSeriesResolvedAction = ({ wsid }: { wsid?: string } = {}): ISignalSeriesResolvedAction => ({
  type: SERIES_SIGNAL_RESOLVED,
  payload: { wsid: wsid || '' },
});

// //
// // Create Series
// //

// export const createExprSeriesAction = (wsid, expr, name) => ({
//   type: SERIES_EXPR_CREATE,
//   wsid, expr, name
// });

// export const createExprSeries = ({ expr, name } = {}) => (dispatch) => {
//   const wsid = objectIdGenerator.toHexString();
//   dispatch(createExprSeriesAction(wsid, expr, name));
//   return wsid;
// };

// export const createRefSeriesAction = (wsid, name, tsid, collId, realtime) => ({
//   type: SERIES_REF_CREATE,
//   wsid, name, tsid, collId, realtime
// });

// export const createRefSeries = ({ name, tsid, collId, realtime } = {}) => (dispatch) => {
//   const wsid = objectIdGenerator.toHexString();
//   dispatch(createRefSeriesAction(wsid, name, tsid, collId, realtime));
//   return wsid;
// };

// export const createDataSeriesAction = (wsid, name, freq, fparam, dtype, dparam, units, data) => ({
//   type: SERIES_DATA_CREATE,
//   wsid, name, freq, fparam, dtype, dparam, units, data
// });

// export const createDataSeries = ({ name, freq, fparam, dtype, dparam, units, data } = {}) => (dispatch) => {
//   const wsid = objectIdGenerator.toHexString();
//   dispatch(createDataSeriesAction(wsid, name, freq, fparam, dtype, dparam, units, data));
//   return wsid;
// };

// //
// //  UPDATE SERIES
// //

// export const updateSeriesAction = ({ wsid, series }) => ({
//   type: SERIES_UPDATE,
//   wsid, series
// });

// //
// //  RESOLVE SERIES
// //

// export const resolveSeriesAction = ({ wsid, realtime } = {}) => ({
//   type: SERIES_RESOLVE,
//   payload: { wsid, realtime },
// });

// //
// // SERIES_DELETE
// //

// export const deleteSeriesAction = ({ wsid } = {}) => ({
//   type: SERIES_DELETE,
//   payload: { wsid },
// });

// //
// // SERIES SAVE NEW SERIES
// //

// export const saveSeriesAction = ({ wsid, series } = {}) => ({
//   type: SERIES_SAVE_SERIES,
//   payload: { wsid, series },
// });

// //
// // SAVE RESOLVED SERIES
// //

// export const saveResolvedSeriesAction = ({ wsid, series } = {}) => ({
//   // update properties of series in graph definition in the store
//   type: SERIES_SAVE_RESOLVED_SERIES,
//   payload: {
//     wsid,
//     series
//   }
// });

// //
// // SERIES SAVE
// //

// export const saveUpdateSeriesAction = ({ wsid, series } = {}) => ({
//   type: SERIES_SAVE_UPDATE,
//   payload: { wsid, series },
// });

// //
// // SERIES DELETE
// //

// export const saveDeleteSeriesAction = ({ wsid } = {}) => ({
//   type: SERIES_SAVE_DELETE_SERIES,
//   payload: { wsid },
// });

// export const restoreSeriesStoreAction = (payload) => ({
//   type: SERIES_SAVE_RESTORE_SERIES,
//   payload,

// });

// //      SIGNALS

// export const signalSeriesUpdatedAction = ({ wsid } = {}) => ({
//   type: SERIES_SIGNAL_UPDATED,
//   payload: { wsid },
// });
// export const signalSeriesDeletedAction = ({ wsid } = {}) => ({
//   type: SERIES_SIGNAL_DELETED,
//   payload: { wsid },
// });
// export const signalSeriesResolvedAction = ({ wsid } = {}) => ({
//   type: SERIES_SIGNAL_RESOLVED,
//   payload: { wsid },
// });
