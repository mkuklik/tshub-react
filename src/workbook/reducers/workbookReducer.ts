import {
  WORKBOOK_SAVE_MODEL,
  WORKBOOK_SAVE_ANALYTICS_MODEL,
  WORKBOOK_SAVE_TSB_MODEL,
  WORKBOOK_SAVE_FRED_MODEL,
  WORKBOOK_SAVE_ACTIVE_LAYOUT,
  WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
  WORKBOOK_SAVE_METADATA,
  WORKBOOK_SAVE_FAVORITE,
  WORKBOOK_SAVE_WID,
  ISaveModelAction,
  ISaveAnalyticsModelAction,
  ISaveTimeseriesBrowserModelAction,
  ISaveFredBrowserModelAction,
  ISaveActiveGraphLayoutAction,
  ISaveActiveGraphTabsetAction,
  ISaveMetadataAction,
  ISaveIsFavoriteAction,
  ISaveWidAction,
} from "../action/workbookActions"; // Assuming you put the interfaces in 'WorkbookActions.ts'
import { Model } from "flexlayout-react";

export interface IWorkbookState {
  mainModel: any; // Replace 'any' with the actual model type
  analyticsModel: Model;
  timeseriesBrowserModel: Model;
  fredBrowserModel: Model;
  activeLayout: number;
  activeGraphTabset: string | undefined; // Or the correct type for activeGraphTabset
  metadata: { [key: string]: any };
  isFavorite: boolean;
  wid: string | undefined;
}

const initialState: IWorkbookState = {
  mainModel: undefined,
  analyticsModel: undefined,
  timeseriesBrowserModel: undefined,
  activeLayout: 0,
  activeGraphTabset: undefined,
  metadata: {},
  isFavorite: false,
  wid: undefined,
};

const workbook = (
  state: IWorkbookState = initialState,
  action:
    | ISaveModelAction
    | ISaveAnalyticsModelAction
    | ISaveTimeseriesBrowserModelAction
    | ISaveFredBrowserModelAction
    | ISaveActiveGraphLayoutAction
    | ISaveActiveGraphTabsetAction
    | ISaveMetadataAction
    | ISaveIsFavoriteAction
    | ISaveWidAction
): IWorkbookState => {
  switch (action.type) {
    case WORKBOOK_SAVE_MODEL: {
      const { model } = action.payload;
      return {
        ...state,
        mainModel: model,
      };
    }
    case WORKBOOK_SAVE_ANALYTICS_MODEL: {
      const { model } = action.payload;
      return {
        ...state,
        analyticsModel: model,
      };
    }
    case WORKBOOK_SAVE_TSB_MODEL: {
      const { model } = action.payload;
      return {
        ...state,
        timeseriesBrowserModel: model,
      };
    }
    case WORKBOOK_SAVE_FRED_MODEL: {
      const { model } = action.payload;
      return {
        ...state,
        fredBrowserModel: model,
      };
    }
    case WORKBOOK_SAVE_ACTIVE_LAYOUT: {
      const { layoutIndex } = action.payload;
      return {
        ...state,
        activeLayout: layoutIndex,
      };
    }

    case WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET: {
      const { activeGraphTabset } = action.payload;
      return {
        ...state,
        activeGraphTabset,
      };
    }

    case WORKBOOK_SAVE_METADATA:
      return {
        ...state,
        metadata: {
          ...state.metadata,
          ...action.payload,
        },
      };
    case WORKBOOK_SAVE_FAVORITE:
      return {
        ...state,
        isFavorite: action.payload.isFavorite,
      };
    case WORKBOOK_SAVE_WID:
      return {
        ...state,
        wid: action.payload.wid,
      };
    default:
      return state;
  }
};

export default workbook;

// import {
//   WORKBOOK_SAVE_MODEL,
//   WORKBOOK_SAVE_ANALYTICS_MODEL,
//   WORKBOOK_SAVE_TSB_MODEL,
//   WORKBOOK_SAVE_ACTIVE_LAYOUT,
//   WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET,
//   WORKBOOK_SAVE_METADATA,
//   WORKBOOK_SAVE_FAVORITE,
//   WORKBOOK_SAVE_WID,
// } from '../action/ActionTypes';

// const initialState = {
//   mainModel: undefined,
//   analyticsModel: undefined,
//   timeseriesBrowserModel: undefined,
//   //
//   activeLayout: 0,
//   activeGraphTabset: undefined,
//   //
//   metadata: {},
//   isFavorite: false,
//   wid: undefined,
// };

// const workbook = (state = initialState, action) => {
//   const { payload } = action;
//   switch (action.type) {
//     case WORKBOOK_SAVE_MODEL:
//     {
//       const { model } = payload;
//       return {
//         ...state,
//         mainModel: model,
//       };
//     }
//     case WORKBOOK_SAVE_ANALYTICS_MODEL:
//     {
//       const { model } = payload;
//       return {
//         ...state,
//         analyticsModel: model,
//       };
//     }
//     case WORKBOOK_SAVE_TSB_MODEL:
//     {
//       const { model } = payload;
//       return {
//         ...state,
//         timeseriesBrowserModel: model,
//       };
//     }

//     case WORKBOOK_SAVE_ACTIVE_LAYOUT: {
//       const { layoutIndex } = payload;
//       return {
//         ...state,
//         activeLayout: layoutIndex,
//       };
//     }

//     case WORKBOOK_SAVE_ACTIVE_GRAPH_TABSET: {
//       const { activeGraphTabset } = payload;
//       return {
//         ...state,
//         activeGraphTabset,
//       };
//     }

//     case WORKBOOK_SAVE_METADATA:
//       return {
//         ...state,
//         metadata: {
//           ...state.metadata,
//           ...payload,
//         },
//       };
//     case WORKBOOK_SAVE_FAVORITE:
//       return {
//         ...state,
//         isFavorite: payload.isFavorite,
//       };
//     case WORKBOOK_SAVE_WID:
//       return {
//         ...state,
//         wid: payload.wid,
//       };
//     default:
//       return state;
//   }
// };

// export default workbook;
