/* eslint-disable no-underscore-dangle */
import { toast } from 'react-semantic-toasts';
import { TimeSeriesUpdate } from '../../client';

import {
  FETCH_TIMESERIES,
  FETCH_TIMESERIES_LIST,
  FETCH_TIMESERIES_DETAILS,
  TIMESERIES_DELETE_SERIES,
  SAVE_TIMESERIES_LIST,
  SAVE_TIMESERIES_DETAILS,
  SAVE_TIMESERIES,
  SAVE_OBSERVATIONS,
  SAVE_TIMESERIES_DELETE,
} from './ActionTypes';

export const fetchTimeseriesAction = (collId, tsid) => ({
  type: FETCH_TIMESERIES,
  payload: { collId, tsid },
});

export const fetchTimeseriesListAction = (collId) => ({
  type: FETCH_TIMESERIES_LIST,
  payload: collId,
});

export const fetchTimeseriesDetailsAction = ({ collId, tsid } = {}) => ({
  type: FETCH_TIMESERIES_DETAILS,
  payload: { collId, tsid },
});

export const deleteTimeseriesAction = (collId, tsids) => ({
  type: TIMESERIES_DELETE_SERIES,
  collId,
  tsids,
});

//
// STORE ACTIONS
//

export const saveTimeSeriesAction = (data) => ({
  type: SAVE_TIMESERIES,
  payload: data,
});

export const saveTimeseriesListAction = (data) => ({
  type: SAVE_TIMESERIES_LIST,
  payload: data,
});

export const saveTimeseriesDetailsAction = (data) => ({
  type: SAVE_TIMESERIES_DETAILS,
  payload: data,
});

export const saveTimeseriesDeleteAction = (collId, tsids) => ({
  type: SAVE_TIMESERIES_DELETE,
  payload: {
    collId, tsids,
  },
});

export const saveObservationsAction = (data) => ({
  type: SAVE_OBSERVATIONS,
  payload: data,
});


//
// legacy
//

export const updateTimeSeriesDetails = ({
  collId, tsid, name, title, description,
} = {}) => (dispatch) => {
  const timeSeriesUpdate = TimeSeriesUpdate.constructFromObject({ name, title, description });

  window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawPut(collId, tsid, timeSeriesUpdate,
    (err, data) => {
      if (err !== null) {
        // eslint-disable-next-line no-console
        console.error('appApiTimeseriesRawPut', err);
        toast({ title: 'Error updating time series details', type: 'error' });
      } else {
        toast({ title: 'Time series details were successfully updated', type: 'success' });
        dispatch(saveTimeSeriesAction(data));
      }
    });
};
