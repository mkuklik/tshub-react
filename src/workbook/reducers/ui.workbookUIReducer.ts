import {
  WORKBOOK_SAVE_WORKBOOK_UI_PROPS,
  UI_SAVE_TOUR_IS_TOUR_OPEN,
  ISaveWorkbookUIPropsAction,
  IToggleTourOpenAction,
} from '../action/workbookActions';
import {
  UI_SAVE_RESTORE_REDUCER,
  IRestoreUIReducerAction,
} from '../action/uiActions';

interface WorkbookUIState {
  title?: string;
  funcEditorErrors: any[]; // Replace 'any' with the correct type if known
  selectedSeries?: string; // Or the appropriate type for selectedSeries
  isTourOpen: boolean;
}

const initialState: WorkbookUIState = {
  title: undefined,
  funcEditorErrors: [],
  selectedSeries: undefined,
  isTourOpen: false,
};

type WorkbookUIActionTypes =
  | ISaveWorkbookUIPropsAction
  | IRestoreUIReducerAction
  | IToggleTourOpenAction;

const workbookUIReducer = (state = initialState, action: WorkbookUIActionTypes): WorkbookUIState => {
  switch (action.type) {
    case WORKBOOK_SAVE_WORKBOOK_UI_PROPS:
      return {
        ...state,
        ...action.payload,
      };

    case UI_SAVE_RESTORE_REDUCER:
      return {
        ...state,
        ...action.payload.workbook,
      };
    case UI_SAVE_TOUR_IS_TOUR_OPEN:
      return {
        ...state,
        isTourOpen: action.payload.isTourOpen,
      };
    default:
      return state;
  }
};

export default workbookUIReducer;

// import {
//   WORKBOOK_SAVE_WORKBOOK_UI_PROPS, UI_SAVE_RESTORE_REDUCER, UI_SAVE_TOUR_IS_TOUR_OPEN,
// } from '../action/ActionTypes';

// const initialState = {
//   title: undefined,
//   funcEditorErrors: [],
//   selectedSeries: undefined,
//   isTourOpen: false,
// };

// const workbookUIReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case WORKBOOK_SAVE_WORKBOOK_UI_PROPS:
//       return {
//         ...state,
//         ...payload,
//       };

//     case UI_SAVE_RESTORE_REDUCER:
//       return {
//         ...state,
//         ...payload.workbook,
//       };
//     case UI_SAVE_TOUR_IS_TOUR_OPEN:
//       return {
//         ...state,
//         isTourOpen: payload.isTourOpen,
//       };
//     default:
//       return state;
//   }
// };

// export default workbookUIReducer;
