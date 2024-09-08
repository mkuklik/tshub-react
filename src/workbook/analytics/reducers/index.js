import {
  ANALYTICS_SAVE_NEW,
  ANALYTICS_SAVE_PARAMETERS,
  ANALYTICS_SAVE_STATUS,
  ANALYTICS_SAVE_RESULTS,
  ANALYTICS_SAVE_UI,
  DELETE_ANALYTICS_OBJECT,
  ANALYTICS_SAVE_RESTORE_ANALYTICS,
} from '../actions/actionTypes';

const initialState = {
  objects: {
    // ayid -> Analytics object
  },
};

const analyticsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ANALYTICS_SAVE_NEW:
      return {
        ...state,
        objects: {
          ...state.objects,
          [payload.ayid]: payload.object,
        },
      };

    case ANALYTICS_SAVE_STATUS:
      return {
        ...state,
        objects: {
          ...state.objects,
          [payload.ayid]: {
            ...state.objects[payload.ayid],
            status: payload.status,
          },
        },
      };

    case ANALYTICS_SAVE_PARAMETERS:
      return {
        ...state,
        objects: {
          ...state.objects,
          [payload.ayid]: {
            ...state.objects[payload.ayid],
            parameters: payload.parameters,
          },
        },
      };

    case ANALYTICS_SAVE_RESULTS:
      return {
        ...state,
        objects: {
          ...state.objects,
          [payload.ayid]: {
            ...state.objects[payload.ayid],
            results: payload.results,
            resolvedParameters: payload.resolvedParameters,
            errors: payload.errors,
            warnings: payload.warnings,
            status: payload.status,
          },
        },
      };

    case ANALYTICS_SAVE_RESTORE_ANALYTICS:
      return {
        ...state,
        ...payload,
      };

    case DELETE_ANALYTICS_OBJECT:
    {
      const copyOfObjects = state.objects;
      delete copyOfObjects[action.payload.ayid];
      return {
        ...state,
        objects: copyOfObjects,
      };
    }

    case ANALYTICS_SAVE_UI:
    {
      return {
        ...state,
        objects: {
          ...state.objects,
          [payload.ayid]: {
            ...state.objects[payload.ayid],
            ui: {
              ...state.objects[payload.ayid].ui,
              ...payload.ui,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export default analyticsReducer;
