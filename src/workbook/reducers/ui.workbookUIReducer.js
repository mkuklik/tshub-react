import {
  WORKBOOK_SAVE_WORKBOOK_UI_PROPS, UI_SAVE_RESTORE_REDUCER, UI_SAVE_TOUR_IS_TOUR_OPEN,
} from '../action/ActionTypes';

const initialState = {
  title: undefined,
  funcEditorErrors: [],
  selectedSeries: undefined,
  isTourOpen: false,
};

const workbookUIReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKBOOK_SAVE_WORKBOOK_UI_PROPS:
      return {
        ...state,
        ...payload,
      };

    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...payload.workbook,
      };
    case UI_SAVE_TOUR_IS_TOUR_OPEN:
      return {
        ...state,
        isTourOpen: payload.isTourOpen,
      };
    default:
      return state;
  }
};

export default workbookUIReducer;
