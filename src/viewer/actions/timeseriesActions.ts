/* eslint-disable no-underscore-dangle */
import { toast } from "react-semantic-toasts";
import { TimeSeriesUpdate } from "../../client";
import { ITimeseries } from "../types/TTimeseries";

// Timeseries
export const FETCH_TIMESERIES = "FETCH_TIMESERIES";
export const UPDATE_TIMESERIES = "UPDATE_TIMESERIES";
export const FETCH_TIMESERIES_LIST = "FETCH_TIMESERIES_LIST";
export const FETCH_TIMESERIES_DETAILS = "FETCH_TIMESERIES_DETAILS";
export const TIMESERIES_DELETE_SERIES = "TIMESERIES_DELETE_SERIES";

export const SAVE_TIMESERIES_DETAILS = "SAVE_TIMESERIES_DETAILS";
export const SAVE_TIMESERIES_LIST = "SAVE_TIMESERIES_LIST";
export const SAVE_TIMESERIES = "SAVE_TIMESERIES";
export const SAVE_TIMESERIES_DELETE = "SAVE_TIMESERIES_DELETE";

export const SAVE_OBSERVATIONS = "FETCH_OBSERVATIONS";

// import '../../global';
// this should be imported from golbal.d.ts
declare global {
  interface Window {
    _chronosdb: { wid: string; rawTimeSeriesApi: any };
  }
}

export interface IFetchTimeseriesAction {
  type: typeof FETCH_TIMESERIES;
  payload: { collId: string; tsid: string };
}

export const fetchTimeseriesAction = (
  collId: string,
  tsid: string
): IFetchTimeseriesAction => ({
  type: FETCH_TIMESERIES,
  payload: { collId, tsid },
});

export interface IFetchTimeseriesListAction {
  type: typeof FETCH_TIMESERIES_LIST;
  payload: string;
}

export const fetchTimeseriesListAction = (
  collId: string
): IFetchTimeseriesListAction => ({
  type: FETCH_TIMESERIES_LIST,
  payload: collId,
});

export interface IFetchTimeseriesDetailsAction {
  type: typeof FETCH_TIMESERIES_DETAILS;
  payload: { collId?: string; tsid?: string };
}

export const fetchTimeseriesDetailsAction = ({
  collId,
  tsid,
}: { collId?: string; tsid?: string } = {}): IFetchTimeseriesDetailsAction => ({
  type: FETCH_TIMESERIES_DETAILS,
  payload: { collId, tsid },
});

export interface IDeleteTimeseriesAction {
  type: typeof TIMESERIES_DELETE_SERIES;
  collId: string;
  tsids: string[];
}

export const deleteTimeseriesAction = (
  collId: string,
  tsids: string[]
): IDeleteTimeseriesAction => ({
  type: TIMESERIES_DELETE_SERIES,
  collId,
  tsids,
});

//
// STORE ACTIONS
//

export interface ISaveTimeSeriesAction {
  type: typeof SAVE_TIMESERIES;
  payload: ITimeseries;
}

export const saveTimeSeriesAction = (data: any): ISaveTimeSeriesAction => ({
  type: SAVE_TIMESERIES,
  payload: data,
});

export interface ISaveTimeseriesListAction {
  type: typeof SAVE_TIMESERIES_LIST;
  payload: any;
}

export const saveTimeseriesListAction = (
  data: any
): ISaveTimeseriesListAction => ({
  type: SAVE_TIMESERIES_LIST,
  payload: data,
});

export interface ISaveTimeseriesDetailsAction {
  type: typeof SAVE_TIMESERIES_DETAILS;
  payload: any;
}

export const saveTimeseriesDetailsAction = (
  data: any
): ISaveTimeseriesDetailsAction => ({
  type: SAVE_TIMESERIES_DETAILS,
  payload: data,
});

export interface ISaveTimeseriesDeleteAction {
  type: typeof SAVE_TIMESERIES_DELETE;
  payload: { collId: string; tsids: string[] };
}

export const saveTimeseriesDeleteAction = (
  collId: string,
  tsids: string[]
): ISaveTimeseriesDeleteAction => ({
  type: SAVE_TIMESERIES_DELETE,
  payload: {
    collId,
    tsids,
  },
});

export interface ISaveObservationsAction {
  type: typeof SAVE_OBSERVATIONS;
  payload: {
    tsid: string;
    data: any;
  };
}

export const saveObservationsAction = (data: any): ISaveObservationsAction => ({
  type: SAVE_OBSERVATIONS,
  payload: data,
});

//
// legacy
//

export interface IUpdateTimeSeriesDetailsAction {
  type: string; // You might want to define a specific type for this action
  payload?: any;
}

export const updateTimeSeriesDetails =
  ({
    collId,
    tsid,
    name,
    title,
    description,
  }: {
    collId: string;
    tsid: string;
    name?: string;
    title?: string;
    description?: string;
  }) =>
  (dispatch: (action: IUpdateTimeSeriesDetailsAction) => void) => {
    const timeSeriesUpdate = TimeSeriesUpdate.constructFromObject(
      { name, title, description },
      undefined
    );

    window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawPut(
      collId,
      tsid,
      timeSeriesUpdate,
      (err: any, data: any) => {
        if (err !== null) {
          // eslint-disable-next-line no-console
          console.error("appApiTimeseriesRawPut", err);
          toast({ title: "Error updating time series details", type: "error" });
        } else {
          toast({
            title: "Time series details were successfully updated",
            type: "success",
          });
          dispatch(saveTimeSeriesAction(data));
        }
      }
    );
  };

// /* eslint-disable no-underscore-dangle */
// import { toast } from 'react-semantic-toasts';
// import { TimeSeriesUpdate } from '../../client';

// import {
//   FETCH_TIMESERIES,
//   FETCH_TIMESERIES_LIST,
//   FETCH_TIMESERIES_DETAILS,
//   TIMESERIES_DELETE_SERIES,
//   SAVE_TIMESERIES_LIST,
//   SAVE_TIMESERIES_DETAILS,
//   SAVE_TIMESERIES,
//   SAVE_OBSERVATIONS,
//   SAVE_TIMESERIES_DELETE,
// } from './ActionTypes';

// export const fetchTimeseriesAction = (collId, tsid) => ({
//   type: FETCH_TIMESERIES,
//   payload: { collId, tsid },
// });

// export const fetchTimeseriesListAction = (collId) => ({
//   type: FETCH_TIMESERIES_LIST,
//   payload: collId,
// });

// export const fetchTimeseriesDetailsAction = ({ collId, tsid } = {}) => ({
//   type: FETCH_TIMESERIES_DETAILS,
//   payload: { collId, tsid },
// });

// export const deleteTimeseriesAction = (collId, tsids) => ({
//   type: TIMESERIES_DELETE_SERIES,
//   collId,
//   tsids,
// });

// //
// // STORE ACTIONS
// //

// export const saveTimeSeriesAction = (data) => ({
//   type: SAVE_TIMESERIES,
//   payload: data,
// });

// export const saveTimeseriesListAction = (data) => ({
//   type: SAVE_TIMESERIES_LIST,
//   payload: data,
// });

// export const saveTimeseriesDetailsAction = (data) => ({
//   type: SAVE_TIMESERIES_DETAILS,
//   payload: data,
// });

// export const saveTimeseriesDeleteAction = (collId, tsids) => ({
//   type: SAVE_TIMESERIES_DELETE,
//   payload: {
//     collId, tsids,
//   },
// });

// export const saveObservationsAction = (data) => ({
//   type: SAVE_OBSERVATIONS,
//   payload: data,
// });

// //
// // legacy
// //

// export const updateTimeSeriesDetails = ({
//   collId, tsid, name, title, description,
// } = {}) => (dispatch) => {
//   const timeSeriesUpdate = TimeSeriesUpdate.constructFromObject({ name, title, description });

//   window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawPut(collId, tsid, timeSeriesUpdate,
//     (err, data) => {
//       if (err !== null) {
//         // eslint-disable-next-line no-console
//         console.error('appApiTimeseriesRawPut', err);
//         toast({ title: 'Error updating time series details', type: 'error' });
//       } else {
//         toast({ title: 'Time series details were successfully updated', type: 'success' });
//         dispatch(saveTimeSeriesAction(data));
//       }
//     });
// };
