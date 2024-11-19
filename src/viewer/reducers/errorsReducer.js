// import {  } from '../actions/errorTypes';
import { ADD_ERROR, SHOW_LOGIN_ERROR, CLOSE_LOGIN_ERROR } from '../actions/errorActions';

const initialState = {
  loginErrorScreenIsOpen: false,
  error: null,
  isOpen: false,
  errors: [],
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
    {
      return {
        ...state,
        errors: [...state.errors, action.error],
      };
    }
    case SHOW_LOGIN_ERROR:
      return {
        ...state,
        loginErrorScreenIsOpen: true,
      };
    case CLOSE_LOGIN_ERROR:
      return {
        ...state,
        loginErrorScreenIsOpen: true,
      };
    default:
      return state;
  }
};

export default errorReducer;
