import {
  SAVE_OBSERVATIONS,
  ISaveObservationsAction,
} from "../actions/timeseriesActions";

export interface IVintage {
  vid: string;
}

export interface IObservationData {
  vintage?: IVintage;
  // ... other properties of data
}

export interface IObservationsState {
  [tsid: string]: {
    // TO REVIEW
    'tsid'?: string;
    'collId'?: string;
    /**
    * time series unique name in a collection
    */
    'name'?: string;
    /**
    * number of observations
    */
    'nobs'?: number;
    'index'?: Array<number>;
    'values'?: Array<any>;
    'status'?: Array<number | null> | null;
    'indexFormat'?: RawIndexFormat;
    'dtype'?: DType;
    'dparams'?: any;
    'itype'?: IType;
    'freq'?: Frequency;
    'fparams'?: any;
    'vintage'?: RawSingleTimeSeriesDataVintage | null;

    [vid: string]: IObservationData;
  };
}

const initialState: IObservationsState = {};

export type ObservationActions = ISaveObservationsAction;

const obs = (
  state = initialState,
  action: ObservationActions
): IObservationsState => {
  switch (action.type) {
    case SAVE_OBSERVATIONS: {
      const tmp: IObservationsState = { ...state };
      for (const [tsid, data] of Object.entries(action.payload)) {
        if (data.vintage !== undefined) {
          if (state[tsid] === undefined) {
            tmp[tsid] = {
              [data.vintage.vid]: data,
            };
          } else {
            tmp[tsid] = {
              ...tmp[tsid],
              [data.vintage.vid]: data,
            };
          }
        }
        // else there is no data
      }
      return {
        ...state,
        ...tmp,
      };
    }
    default:
      return state;
  }
};

export default obs;

// import {
//   SAVE_OBSERVATIONS,
// } from '../actions/timeseriesActions';

// const initialState = {
//   // { [tsid]: { [vis]: {...} }
// };

// const obs = (state = initialState, action) => {
//   switch (action.type) {
//     case SAVE_OBSERVATIONS:
//     {
//       let tmp = { ...state };
//       // eslint-disable-next-line no-restricted-syntax
//       for (const [tsid, data] of Object.entries(action.payload)) {
//         if (data.vintage !== undefined) {
//           if (state[tsid] === undefined) {
//             tmp = {
//               ...tmp,
//               [tsid]: {
//                 [data.vintage.vid]: data,
//               },
//             };
//           } else {
//             tmp = {
//               ...tmp,
//               [tsid]: {
//                 ...tmp[tsid],
//                 [data.vintage.vid]: data,
//               },
//             };
//           }
//         }
//         // else there is not data
//       }
//       return {
//         ...state,
//         ...tmp,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default obs;
