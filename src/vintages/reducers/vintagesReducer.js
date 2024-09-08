import { mergeAll, map } from 'ramda';
import {
  VINTAGES_SAVE_HAS_PERMISSION,
  VINTAGES_SAVE_LIST,
  VINTAGES_INITIATE,
  VINTAGES_SAVE_VINTAGE_SERIES,
  VINTAGES_SAVE_VARIABLE,
  VINTAGES_SAVE_OBJECT,
} from '../actions/ActionTypes';


const initialState = {
  objects: {}, // vid -> Vintage
  byTsid: [], // vid 
  collId: undefined,
  tsid: undefined,
  variable: {
    expr: '',
    error: undefined,
  },
  hasPermission: true,
};

const vintagesReducer = (state = initialState,
  action) => {
  switch (action.type) {
    case VINTAGES_INITIATE:
    {
      return {
        ...initialState,
        collId: action.collId,
      };
    }
    case VINTAGES_SAVE_HAS_PERMISSION:
    {
      return {
        ...state,
        hasPermission: action.payload,
      };
    }
    case VINTAGES_SAVE_OBJECT:
    {
      return {
        ...state,
        objects: {
          ...state.objects,
          [action.payload.vid]: action.payload,
        },
      };
    }
    case VINTAGES_SAVE_LIST:
    {
      return {
        ...state,
        // total: action.payload.total,
        // offset: action.payload.total,
        // limit: action.payload.limit,
        objects: {
          ...state.objects,
          ...mergeAll(map((x) => ({ [x.vid]: x }), action.payload.data)),
        },
        byTsid:
        {
          [action.payload.tsid]: map((x) => x.vid, action.payload.data),
        }
      };
    }
    case VINTAGES_SAVE_VINTAGE_SERIES:
    {
      return {
        collId: action.collId,
        tsid: action.tsid,
      };
    }
    case VINTAGES_SAVE_VARIABLE:
    {
      return {
        ...state,
        variable: action.variable,
      };
    }
    default:
      return state;
  }
};

export default vintagesReducer;
