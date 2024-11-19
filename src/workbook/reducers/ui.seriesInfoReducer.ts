import {
  SERIESINFO_SAVE_ACTIVE_SERIES,
  UI_SAVE_RESTORE_REDUCER,
} from '../action/ActionTypes';

import {
  ISeriesInfoSaveActiveSeriesAction,
  IRestoreUIReducerAction,
} from '../action/uiActions';

interface SeriesInfoState {
  activeSeries: string | undefined;
}

const initialState: SeriesInfoState = {
  activeSeries: undefined,
};

const seriesInfoReducer = (state: SeriesInfoState = initialState, action: ISeriesInfoSaveActiveSeriesAction | IRestoreUIReducerAction): SeriesInfoState => {
  const { type, payload } = action;
  switch (type) {
    case SERIESINFO_SAVE_ACTIVE_SERIES:
      return {
        ...state,
        activeSeries: payload.activeSeries,
      };
    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...payload.seriesInfo, // Make sure payload.seriesInfo matches SeriesInfoState
      };
    default:
      return state;
  }
};

export default seriesInfoReducer;

// import {
//   SERIESINFO_SAVE_ACTIVE_SERIES,
//   UI_SAVE_RESTORE_REDUCER,
// } from '../action/ActionTypes';

// const initialState = {
//   activeSeries: undefined,
// };

// const seriesInfoReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case SERIESINFO_SAVE_ACTIVE_SERIES:
//       return {
//         ...state,
//         activeSeries: payload.activeSeries,
//       };
//     case UI_SAVE_RESTORE_REDUCER:
//       return {
//         ...state,
//         ...payload.seriesInfo,
//       };
//     default:
//       return state;
//   }
// };

// export default seriesInfoReducer;
