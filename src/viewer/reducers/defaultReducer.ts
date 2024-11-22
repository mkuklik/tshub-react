import { DEFAULTS_SET, SetDefaultAction } from "../actions/defaultsActions";

export interface IDefaultsState {
  collName?: string;
  collId?: string;
  spaceName?: string;
  spaceId?: string;
}

const initialState: IDefaultsState = {
  collName: undefined,
  collId: undefined,
  spaceName: undefined,
  spaceId: undefined,
};

type IDefaultActions = SetDefaultAction;

const defaultsReducer = (
  state = initialState,
  action: IDefaultActions
): IDefaultsState => {
  switch (action.type) {
    case DEFAULTS_SET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default defaultsReducer;

// import {
//   DEFAULTS_SET,
// } from '../actions/defaultsActions';

// const initialState = {
//   collName: undefined,
//   collId: undefined,
//   spaceName: undefined,
//   spaceId: undefined,
// };

// const defaultsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case DEFAULTS_SET:
//       return {
//         ...state,
//         ...payload,
//       };

//     default:
//       return state;
//   }
// };

// export default defaultsReducer;
