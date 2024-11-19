import {
  SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
  SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  UI_SAVE_RESTORE_REDUCER,
} from '../action/ActionTypes';

import {
  IOpenFuncEditorAction,
  ISaveErrorsFuncEditorAction,
  ICloseFuncEditorAction,
  IRestoreUIReducerAction,
} from '../action/uiActions';

interface SeriesListState {
  isFuncEditorOpen: boolean;
  funcEditorErrors: any[]; // Replace 'any' with the actual error type
  selectedSeries: string | undefined;
}

const initialState: SeriesListState = {
  isFuncEditorOpen: false,
  funcEditorErrors: [],
  selectedSeries: undefined,
};

const seriesListReducer = (state: SeriesListState = initialState, action: IOpenFuncEditorAction | ISaveErrorsFuncEditorAction | ICloseFuncEditorAction | IRestoreUIReducerAction): SeriesListState => {
  switch (action.type) {
    case SERIESLIST_FUNC_EDITOR_SAVE_OPEN:
      return {
        ...state,
        isFuncEditorOpen: true,
        selectedSeries: action.payload.wsid,
      };
    case SERIESLIST_FUNC_EDITOR_SAVE_CLOSE:
      return {
        ...state,
        isFuncEditorOpen: false,
        funcEditorErrors: [],
        selectedSeries: undefined,
      };
    case SERIESLIST_FUNC_EDITOR_SAVE_ERRORS:
      return {
        ...state,
        funcEditorErrors: action.payload.errors,
      };
    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...action.payload.seriesList,
      };
    default:
      return state;
  }
};

export default seriesListReducer;

// import {
//   SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
//   SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
//   SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
//   UI_SAVE_RESTORE_REDUCER,
// } from '../action/ActionTypes';

// const initialState = {
//   isFuncEditorOpen: false,
//   funcEditorErrors: [],
//   selectedSeries: undefined,
// };

// const seriesListReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case SERIESLIST_FUNC_EDITOR_SAVE_OPEN:
//       return {
//         ...state,
//         isFuncEditorOpen: true,
//         selectedSeries: payload.wsid,
//       };
//     case SERIESLIST_FUNC_EDITOR_SAVE_CLOSE:
//       return {
//         ...state,
//         isFuncEditorOpen: false,
//         funcEditorErrors: [],
//         selectedSeries: undefined,
//       };
//     case SERIESLIST_FUNC_EDITOR_SAVE_ERRORS:
//       return {
//         ...state,
//         funcEditorErrors: payload.errors,
//       };
//     case UI_SAVE_RESTORE_REDUCER:
//       return {
//         ...state,
//         ...payload.seriesList,
//       };
//     default:
//       return state;
//   }
// };

// export default seriesListReducer;
