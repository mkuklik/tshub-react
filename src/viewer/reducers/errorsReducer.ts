import {
  IAddErrorAction,
  IShowLoginErrorAction,
  ICloseLoginErrorAction,
  ADD_ERROR,
  SHOW_LOGIN_ERROR,
  CLOSE_LOGIN_ERROR,
} from "../actions/errorActions";

export interface IErrorsState {
  loginErrorScreenIsOpen: boolean;
  error: Error | null;
  isOpen: boolean;
  errors: Error[];
}

const initialState: IErrorsState = {
  loginErrorScreenIsOpen: false,
  error: null,
  isOpen: false,
  errors: [],
};

type ErrorAction =
  | IAddErrorAction
  | IShowLoginErrorAction
  | ICloseLoginErrorAction;

const errorReducer = (
  state = initialState,
  action: ErrorAction
): IErrorsState => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case SHOW_LOGIN_ERROR:
      return {
        ...state,
        loginErrorScreenIsOpen: true,
      };
    case CLOSE_LOGIN_ERROR:
      return {
        ...state,
        loginErrorScreenIsOpen: false,
      };
    default:
      return state;
  }
};

export default errorReducer;

// import { ADD_ERROR, SHOW_LOGIN_ERROR, CLOSE_LOGIN_ERROR } from '../actions/errorActions';

// const initialState = {
//   loginErrorScreenIsOpen: false,
//   error: null,
//   isOpen: false,
//   errors: [],
// };

// const errorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ERROR:
//     {
//       return {
//         ...state,
//         errors: [...state.errors, action.error],
//       };
//     }
//     case SHOW_LOGIN_ERROR:
//       return {
//         ...state,
//         loginErrorScreenIsOpen: true,
//       };
//     case CLOSE_LOGIN_ERROR:
//       return {
//         ...state,
//         loginErrorScreenIsOpen: true,
//       };
//     default:
//       return state;
//   }
// };

// export default errorReducer;
