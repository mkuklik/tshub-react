import {
  filter, prop, ascend, sortWith,
} from 'ramda';
import {
  SAVE_SPACES,
  SAVE_SPACE_DETAILS,
  SAVE_SPACE,
  SAVE_SPACE_REMOVE,
} from '../actions/spacesActions';

const initialState = {
  spaces: [],
  spaceDetails: null,
};

const sortByNameAscending = sortWith([ascend(prop('name'))]);

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SPACES:
      return {
        ...state,
        spaces: sortByNameAscending(payload),
      };
    case SAVE_SPACE:
      return {
        ...state,
        spaces: sortByNameAscending([
          ...filter((x) => x.spaceId !== payload.spaceId, state.spaces),
          payload,
        ]),
      };
    case SAVE_SPACE_DETAILS:
      return {
        ...state,
        spaceDetails: payload,
      };
    case SAVE_SPACE_REMOVE:
      return {
        ...state,
        spaces: [
          ...filter((x) => x.spaceId !== payload.spaceId, state.spaces),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
