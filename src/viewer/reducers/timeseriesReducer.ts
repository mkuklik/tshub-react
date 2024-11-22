import { isNil, filter, has, contains } from "ramda";
import {
  ISaveTimeSeriesAction,
  ISaveTimeseriesListAction,
  ISaveTimeseriesDetailsAction,
  ISaveTimeseriesDeleteAction,
  ISaveObservationsAction,
  IUpdateTimeSeriesDetailsAction,
  SAVE_TIMESERIES,
  SAVE_TIMESERIES_LIST,
  SAVE_TIMESERIES_DETAILS,
  SAVE_TIMESERIES_DELETE,
} from "../actions/timeseriesActions";
import { ITimeseries } from "../types/TTimeseries";

export interface ITimeseriesState {
  timeseriesListByColl: { [collId: string]: ITimeseries[] };
  timeseries: { [tsid: string]: ITimeseries };
  timeseriesDetails: any | null; // Replace 'any' with the actual type of timeseriesDetails
}

const initialState: ITimeseriesState = {
  timeseriesListByColl: {},
  timeseries: {},
  timeseriesDetails: null,
};

export type ITimeseriesActions =
  | ISaveTimeSeriesAction
  | ISaveTimeseriesListAction
  | ISaveTimeseriesDetailsAction
  | ISaveTimeseriesDeleteAction
  | ISaveObservationsAction
  | IUpdateTimeSeriesDetailsAction;

const timeseriesReducer = (
  state = initialState,
  action: ITimeseriesActions
): ITimeseriesState => {
  switch (action.type) {
    case SAVE_TIMESERIES: {
      const collList = isNil(state.timeseriesListByColl[action.payload.collId])
        ? [action.payload]
        : [
            ...state.timeseriesListByColl[action.payload.collId],
            action.payload,
          ];
      return {
        ...state,
        timeseries: {
          ...state.timeseries,
          [action.payload.tsid]: action.payload,
        },
        timeseriesListByColl: {
          ...state.timeseriesListByColl,
          [action.payload.collId]: collList,
        },
      };
    }
    case SAVE_TIMESERIES_LIST:
      return {
        ...state,
        timeseriesListByColl: {
          ...state.timeseriesListByColl,
          [action.payload.collId]: action.payload.timeseriesList,
        },
      };

    case SAVE_TIMESERIES_DETAILS:
      return {
        ...state,
        timeseriesDetails: action.payload,
      };
    case SAVE_TIMESERIES_DELETE: {
      // const { collId, tsids } = action.payload;
      const tsids: string[] = action.payload.tsids;
      const collId: string = action.payload.collId;
      let out = {
        ...state,
        timeseries: {
          ...filter(
            (x: ITimeseries) => !tsids.includes(x.tsid),
            state.timeseries
          ),
        },
      };
      if (has(collId, state.timeseriesListByColl)) {
        const filteredTimeseries: ITimeseries[] = filter(
          (x: ITimeseries) => !contains(x.tsid, tsids),
          state.timeseriesListByColl[collId] || [] // Provide a default empty array
        ) as ITimeseries[]; // Type assertion
        // const filteredTimeseries: ITimeseries[] = [];
        out = {
          ...out,
          timeseriesListByColl: {
            ...state.timeseriesListByColl,
            [collId]: filteredTimeseries,
          },
        };
      }
      return out;
    }
    default:
      return state;
  }
};

export default timeseriesReducer;

// import {
//   isNil, filter, has, contains,
// } from 'ramda';
// import {
//   SAVE_TIMESERIES,
//   SAVE_TIMESERIES_LIST,
//   SAVE_TIMESERIES_DETAILS,
//   SAVE_TIMESERIES_DELETE,
// } from '../actions/timeseriesActions';

// const initialState = {
//   timeseriesListByColl: {}, // collId -> Array to timeseries object
//   timeseries: {},
//   timeseriesDetails: null,
// };

// const timeseries = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SAVE_TIMESERIES: {
//       const collList = (isNil(state.timeseriesListByColl[payload.collId]))
//         ? [payload]
//         : [...state.timeseriesListByColl[payload.collId], payload];
//       return {
//         ...state,
//         timeseries: {
//           ...state.timeseries,
//           [payload.tsid]: payload,
//         },
//         timeseriesListByColl: {
//           ...state.timeseriesListByColl,
//           [payload.collId]: collList,
//         },
//       };
//     }
//     case SAVE_TIMESERIES_LIST:
//       return {
//         ...state,
//         timeseriesListByColl: {
//           ...state.timeseriesListByColl,
//           [payload.collId]: payload.timeseriesList,
//         },
//       };

//     case SAVE_TIMESERIES_DETAILS:
//       return {
//         ...state,
//         timeseriesDetails: payload,
//       };
//     case SAVE_TIMESERIES_DELETE:
//     {
//       const { collId, tsids } = payload;
//       let out = {
//         ...state,
//         timeseries: {
//           ...filter((x) => x.tsid in tsids, state.timeseries),
//         },
//       };
//       if (has(collId, state.timeseriesListByColl)) {
//         out = {
//           ...out,
//           timeseriesListByColl: {
//             ...state.timeseriesListByColl,
//             [collId]: filter((x) => !contains(x.tsid, tsids), state.timeseriesListByColl[collId]),
//           },
//         };
//       }
//       return out;
//     }
//     default:
//       return state;
//   }
// };

// export default timeseries;
