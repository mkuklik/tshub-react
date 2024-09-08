import {
  SERIESLIST_FUNC_EDITOR_SAVE_OPEN,
  SERIESLIST_FUNC_EDITOR_SAVE_CLOSE,
  SERIESLIST_FUNC_EDITOR_SAVE_ERRORS,
  UI_SAVE_RESTORE_REDUCER,
} from '../action/ActionTypes';

const initialState = {
  isFuncEditorOpen: false,
  funcEditorErrors: [],
  selectedSeries: undefined,
};

const seriesListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SERIESLIST_FUNC_EDITOR_SAVE_OPEN:
      return {
        ...state,
        isFuncEditorOpen: true,
        selectedSeries: payload.wsid,
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
        funcEditorErrors: payload.errors,
      };
    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...payload.seriesList,
      };
    default:
      return state;
  }
};

export default seriesListReducer;
