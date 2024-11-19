import {
  SAVE_OBSERVATIONS,
} from '../actions/timeseriesActions';

const initialState = {
  // { [tsid]: { [vis]: {...} }
};

const obs = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_OBSERVATIONS:
    {
      let tmp = { ...state };
      // eslint-disable-next-line no-restricted-syntax
      for (const [tsid, data] of Object.entries(action.payload)) {
        if (data.vintage !== undefined) {
          if (state[tsid] === undefined) {
            tmp = {
              ...tmp,
              [tsid]: {
                [data.vintage.vid]: data,
              },
            };
          } else {
            tmp = {
              ...tmp,
              [tsid]: {
                ...tmp[tsid],
                [data.vintage.vid]: data,
              },
            };
          }
        }
        // else there is not data
      }
      return {
        ...state,
        ...tmp,
      };
    }
    default:
      return state;
  }
};

export default obs;
