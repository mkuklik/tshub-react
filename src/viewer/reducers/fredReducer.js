import {
  has,
} from 'ramda';
import {
  SAVE_FRED_CATEGORY,
  SAVE_FRED_TIMESERIES_LIST,
  SAVE_FRED_CONFIG,
} from '../actions/fredActions';

const initialState = {
  // config: { apiKey: null },
  config: { apiKey: '7198a36a3b054ff70ad7ff5f038605e4', removeDiscontinued: true },
  categories: { // categoryId -> { name, children: null | [] , parentId}
    0: {
      name: 'Categories', children: [], parentId: 0, fetched: false,
    },
  },
  timeseries: {},
};

const fred = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_FRED_CATEGORY: {
      const { categoryId, children } = payload;
      const categories = {};
      const childrenIds = children.flatMap((x) => x.id);
      if (has(categoryId, state.categories)) {
        categories[categoryId] = { ...state.categories[categoryId], children: childrenIds, fetched: true };
      } else {
        categories[categoryId] = { name: null, children: childrenIds, fetched: true };
      }
      children.forEach((x) => {
        if (!has(x.id, state.categories)) {
          categories[x.id] = {
            name: x.name, children: null, parentId: categoryId, fetched: false,
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
      const timeseries = {};
      payload.seriess.forEach((x) => {
        if (!has(x.id, state.timeseries) && !(state.config.removeDiscontinued && x.title.includes('DISCONTINUED'))) {
          timeseries[x.id] = x;
        }
      });
      return {
        ...state,
        timeseries: {
          ...state.timeseries,
          timeseries,
        },
      };
    }
    case SAVE_FRED_CONFIG: {
      const { apiKey, removeDiscontinued } = payload;
      return {
        ...state,
        config: {
          ...state.SAVE_FRED_CONFIG,
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
