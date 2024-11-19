import * as R from 'ramda';
import {
  SERIES_SAVE_SERIES,
  SERIES_SAVE_RESOLVED_SERIES,
  SERIES_SAVE_DELETE_SERIES,
  SERIES_SAVE_UPDATE,
  SERIES_SAVE_RESTORE_SERIES,
} from '../actions/seriesActions';

const initialState = {
  definition: {}, // wsid -> {}
  resolved: {}, // wsid -> {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SERIES_SAVE_SERIES:
    {
      const { wsid, series } = payload;
      return {
        ...state,
        definition: {
          ...state.definition,
          [wsid]: series,
        },
      };
    }
    case SERIES_SAVE_RESOLVED_SERIES:
    {
      const { wsid, series } = payload;
      return {
        ...state,
        resolved: {
          ...state.resolved,
          [wsid]: series,
        },
      };
    }
    case SERIES_SAVE_DELETE_SERIES:
    {
      const { wsid } = payload;
      return {
        ...state,
        resolved: R.omit([wsid], state.resolved),
      };
    }
    case SERIES_SAVE_UPDATE:
    {
      const { wsid, series } = payload;
      return {
        ...state,
        definition: {
          ...state.definition,
          [wsid]: {
            ...state.definition[wsid],
            // reset collId and tsid which is only set for a direct time series, e.g. '$({collId: '', tsid: ''})'
            collId: undefined,
            tsid: undefined,
            ...series,
          },
        },
        resolved: R.omit([wsid], state.resolved),
      };
    }
    case SERIES_SAVE_RESTORE_SERIES:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
