import {
  DEFAULTS_SET,
} from '../actions/defaultsActions';

const initialState = {
  collName: undefined,
  collId: undefined,
  spaceName: undefined,
  spaceId: undefined,
};

const defaultsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DEFAULTS_SET:
      return {
        ...state,
        ...payload,
      };


    default:
      return state;
  }
};

export default defaultsReducer;
