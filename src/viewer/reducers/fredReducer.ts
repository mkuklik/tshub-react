import { has, toString } from "ramda";
import {
  SAVE_FRED_CATEGORY,
  SAVE_FRED_TIMESERIES_LIST,
  SAVE_FRED_CONFIG,
  ISaveFredCategoryAction,
  ISaveFredTimeseriesListAction,
  ISaveFredBrowserConfigAction,
} from "../actions/fredActions";
import { ICategory, IFredSeries } from "../types/TFred";

export interface IConfig {
  apiKey: string | null;
  removeDiscontinued: boolean;
}

export interface IFredState {
  config: IConfig;
  categories: { [key: number]: ICategory };
  timeseriesByCategory: { [categoryId: number]: string[] };
  timeseries: { [id: string]: IFredSeries };
}

const initialState: IFredState = {
  // config: { apiKey: null },
  config: {
    apiKey: "7198a36a3b054ff70ad7ff5f038605e4",
    removeDiscontinued: true,
  },
  categories: {
    // categoryId -> { name, children: null | [] , parentId}
    0: {
      name: "Categories",
      children: [],
      parentId: 0,
      fetched: false,
    },
  },
  timeseriesByCategory: {},
  timeseries: {},
};

type Action =
  | ISaveFredCategoryAction
  | ISaveFredTimeseriesListAction
  | ISaveFredBrowserConfigAction;

const fred = (state: IFredState = initialState, action: Action): IFredState => {
  switch (action.type) {
    case SAVE_FRED_CATEGORY: {
      const { categoryId, children } = action.payload;
      const categories: { [key: number]: ICategory } = {};
      const childrenIds = children.flatMap((x) => x.id);
      if (has(toString(categoryId), state.categories)) {
        categories[categoryId] = {
          ...state.categories[categoryId],
          children: childrenIds,
          fetched: true,
        };
      } else {
        categories[categoryId] = {
          name: null,
          children: childrenIds,
          parentId: null,
          fetched: true,
        };
      }
      children.forEach((x) => {
        if (!has(toString(x.id), state.categories)) {
          categories[x.id] = {
            name: x.name,
            children: null,
            parentId: categoryId,
            fetched: false,
          };
        }
      });
      return {
        ...state,
        categories: {
          ...state.categories,
          ...categories,
        },
      };
    }
    case SAVE_FRED_TIMESERIES_LIST: {
      // const timeseries: { [key: string]: IFredSeries } = {};
      // action.payload.seriess.forEach((x: IFredSeries) => {
      //   if (
      //     !has(x.id, state.timeseries) &&
      //     !(state.config.removeDiscontinued && x.title.includes("DISCONTINUED"))
      //   ) {
      //     timeseries[x.id] = x;
      //   }
      // });
      const timeseries: { [key: string]: IFredSeries } = {};
      const seriesIds: string[] = [];
      action.payload.seriess.forEach((series) => {
        timeseries[series.id] = series;
        seriesIds.push(series.id);
      });
      return {
        ...state,
        timeseriesByCategory: {
          ...state.timeseriesByCategory,
          [action.payload.categoryId]: seriesIds,
        },
        timeseries: {
          ...state.timeseries,
          ...timeseries,
        },
      };
    }
    case SAVE_FRED_CONFIG: {
      const { apiKey, removeDiscontinued } = action.payload;
      return {
        ...state,
        config: {
          ...state.config, // Fixed: Access config property instead of SAVE_FRED_CONFIG
          apiKey,
          removeDiscontinued,
        },
      };
    }
    default:
      return state;
  }
};

export { initialState };
export default fred;

// import {
//   has,
// } from 'ramda';
// import {
//   SAVE_FRED_CATEGORY,
//   SAVE_FRED_TIMESERIES_LIST,
//   SAVE_FRED_CONFIG,
// } from '../actions/fredActions';

// const initialState = {
//   // config: { apiKey: null },
//   config: { apiKey: '7198a36a3b054ff70ad7ff5f038605e4', removeDiscontinued: true },
//   categories: { // categoryId -> { name, children: null | [] , parentId}
//     0: {
//       name: 'Categories', children: [], parentId: 0, fetched: false,
//     },
//   },
//   timeseries: {},
// };

// const fred = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SAVE_FRED_CATEGORY: {
//       const { categoryId, children } = payload;
//       const categories = {};
//       const childrenIds = children.flatMap((x) => x.id);
//       if (has(categoryId, state.categories)) {
//         categories[categoryId] = { ...state.categories[categoryId], children: childrenIds, fetched: true };
//       } else {
//         categories[categoryId] = { name: null, children: childrenIds, fetched: true };
//       }
//       children.forEach((x) => {
//         if (!has(x.id, state.categories)) {
//           categories[x.id] = {
//             name: x.name, children: null, parentId: categoryId, fetched: false,
//           };
//         }
//       });
//       return {
//         ...state,
//         categories: {
//           ...state.categories,
//           ...categories,
//         },
//       };
//     }
//     case SAVE_FRED_TIMESERIES_LIST: {
//       const timeseries = {};
//       payload.seriess.forEach((x) => {
//         if (!has(x.id, state.timeseries) && !(state.config.removeDiscontinued && x.title.includes('DISCONTINUED'))) {
//           timeseries[x.id] = x;
//         }
//       });
//       return {
//         ...state,
//         timeseries: {
//           ...state.timeseries,
//           timeseries,
//         },
//       };
//     }
//     case SAVE_FRED_CONFIG: {
//       const { apiKey, removeDiscontinued } = payload;
//       return {
//         ...state,
//         config: {
//           ...state.SAVE_FRED_CONFIG,
//           apiKey,
//           removeDiscontinued,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// export { initialState };
// export default fred;
