import {
  isNil, filter, has, contains,
} from 'ramda';
import {
  SAVE_TIMESERIES,
  SAVE_TIMESERIES_LIST,
  SAVE_TIMESERIES_DETAILS,
  SAVE_TIMESERIES_DELETE,
} from '../actions/timeseriesActions';

const initialState = {
  timeseriesListByColl: {}, // collId -> Array to timeseries object
  timeseries: {},
  timeseriesDetails: null,
};

const timeseries = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_TIMESERIES: {
      const collList = (isNil(state.timeseriesListByColl[payload.collId]))
        ? [payload]
        : [...state.timeseriesListByColl[payload.collId], payload];
      return {
        ...state,
        timeseries: {
          ...state.timeseries,
          [payload.tsid]: payload,
        },
        timeseriesListByColl: {
          ...state.timeseriesListByColl,
          [payload.collId]: collList,
        },
      };
    }
    case SAVE_TIMESERIES_LIST:
      return {
        ...state,
        timeseriesListByColl: {
          ...state.timeseriesListByColl,
          [payload.collId]: payload.timeseriesList,
        },
      };

    case SAVE_TIMESERIES_DETAILS:
      return {
        ...state,
        timeseriesDetails: payload,
      };
    case SAVE_TIMESERIES_DELETE:
    {
      const { collId, tsids } = payload;
      let out = {
        ...state,
        timeseries: {
          ...filter((x) => x.tsid in tsids, state.timeseries),
        },
      };
      if (has(collId, state.timeseriesListByColl)) {
        out = {
          ...out,
          timeseriesListByColl: {
            ...state.timeseriesListByColl,
            [collId]: filter((x) => !contains(x.tsid, tsids), state.timeseriesListByColl[collId]),
          },
        };
      }
      return out;
    }
    default:
      return state;
  }
};

export default timeseries;
