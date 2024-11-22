import { filter, prop, ascend, sortWith } from "ramda";
import {
  SAVE_SPACES,
  SAVE_SPACE_DETAILS,
  SAVE_SPACE,
  SAVE_SPACE_REMOVE,
  ISaveSpacesAction,
  ISaveSpaceAction,
  ISaveSpaceDetailsAction,
  ISaveSpaceRemoveAction,
} from "../actions/spacesActions";

import { ISpace } from "../types/TSpaces";

export interface ISpacesState {
  spaces: ISpace[];
  spaceDetails: ISpace | null;
}

const initialState: ISpacesState = {
  spaces: [],
  spaceDetails: null,
};

const sortByNameAscending = sortWith<ISpace>([ascend(prop("name"))]);

type ISpaceActions =
  | ISaveSpacesAction
  | ISaveSpaceAction
  | ISaveSpaceDetailsAction
  | ISaveSpaceRemoveAction;

const spacesReducer = (
  state: ISpacesState = initialState,
  action: ISpaceActions
): ISpacesState => {
  switch (action.type) {
    case SAVE_SPACES:
      return {
        ...state,
        spaces: sortByNameAscending(action.payload) as ISpace[],
      };
    case SAVE_SPACE:
      return {
        ...state,
        spaces: sortByNameAscending([
          ...filter(
            (x: ISpace) => x.spaceId !== (action.payload as ISpace).spaceId,
            state.spaces
          ),
          action.payload,
        ]) as ISpace[],
      };
    case SAVE_SPACE_DETAILS:
      return {
        ...state,
        spaceDetails: action.payload,
      };
    case SAVE_SPACE_REMOVE:
      return {
        ...state,
        spaces: [
          ...filter(
            (x: ISpace) =>
              x.spaceId !== (action.payload as { spaceId: string }).spaceId,
            state.spaces
          ),
        ],
      };
    default:
      return state;
  }
};

export default spacesReducer;

// import {
//   filter, prop, ascend, sortWith,
// } from 'ramda';
// import {
//   SAVE_SPACES,
//   SAVE_SPACE_DETAILS,
//   SAVE_SPACE,
//   SAVE_SPACE_REMOVE,
// } from '../actions/spacesActions';

// const initialState = {
//   spaces: [],
//   spaceDetails: null,
// };

// const sortByNameAscending = sortWith([ascend(prop('name'))]);

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case SAVE_SPACES:
//       return {
//         ...state,
//         spaces: sortByNameAscending(payload),
//       };
//     case SAVE_SPACE:
//       return {
//         ...state,
//         spaces: sortByNameAscending([
//           ...filter((x) => x.spaceId !== payload.spaceId, state.spaces),
//           payload,
//         ]),
//       };
//     case SAVE_SPACE_DETAILS:
//       return {
//         ...state,
//         spaceDetails: payload,
//       };
//     case SAVE_SPACE_REMOVE:
//       return {
//         ...state,
//         spaces: [
//           ...filter((x) => x.spaceId !== payload.spaceId, state.spaces),
//         ],
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
