// import {
//   REPORT_ERROR,
//   REPORT_API_ERROR,
//   HIDE_ERRORS,
//   SHOW_ERRORS,
//   SHOW_LOGIN_ERROR,
//   ADD_ERROR,
// } from './ActionTypes';

// ERRORS
export const REPORT_ERROR = 'REPORT_ERROR';
export const REPORT_API_ERROR = 'REPORT_API_ERROR';
export const DISMISS_ERROR = 'DISMISS_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SHOW_ERRORS = 'SHOW_ERRORS';
export const HIDE_ERRORS = 'HIDE_ERRORS';

export const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR';
export const CLOSE_LOGIN_ERROR = 'CLOSE_LOGIN_ERROR';

// ERROR STORE ACTIONS
export const ADD_ERROR = 'ADD_ERROR';


export interface ReportErrorAction {
  type: typeof REPORT_ERROR;
  error: any; // Replace 'any' with the actual type of your error object
}

export function reportErrorAction(error: any): ReportErrorAction { // Replace 'any' with the actual type of your error object
  return {
    type: REPORT_ERROR,
    error,
  };
}

export interface HideErrorsAction {
  type: typeof HIDE_ERRORS;
}

export function hideErrorsAction(): HideErrorsAction {
  return {
    type: HIDE_ERRORS,
  };
}

export interface ShowErrorsAction {
  type: typeof SHOW_ERRORS;
}

export function showErrorsAction(): ShowErrorsAction {
  return {
    type: SHOW_ERRORS,
  };
}

export interface ReportApiErrorAction {
  type: typeof REPORT_API_ERROR;
  error: any; // Replace 'any' with the actual type of your error object
  extra: any; // Replace 'any' with the actual type of your extra data
}

export function reportApiError({ error, extra }: ReportApiErrorAction): ReportApiErrorAction {
  return {
    type: REPORT_API_ERROR,
    error,
    extra,
  };
}

export interface ShowLoginErrorAction {
  type: typeof SHOW_LOGIN_ERROR;
}

export function showLoginError(): ShowLoginErrorAction {
  return {
    type: SHOW_LOGIN_ERROR,
  };
}

export interface AddErrorAction {
  type: typeof ADD_ERROR;
  payload: any; // Replace 'any' with the actual type of your error object
}

export function addErrorAction(error: any): AddErrorAction { // Replace 'any' with the actual type of your error object
  return {
    type: ADD_ERROR,
    payload: error,
  };
}

// import { REPORT_ERROR, REPORT_API_ERROR, HIDE_ERRORS, SHOW_ERRORS, SHOW_LOGIN_ERROR, ADD_ERROR } from './ActionTypes';

// export function reportErrorAction(error) {
//   return {
//     type: REPORT_ERROR,
//     error,
//   };
// }

// export function hideErrorsAction() {
//   return {
//     type: HIDE_ERRORS,
//   };
// }

// export function showErrorsAction() {
//   return {
//     type: SHOW_ERRORS,
//   };
// }

// export function reportApiError({ error, extra }) {
//   return {
//     type: REPORT_API_ERROR,
//     error,
//     extra,
//   }
// }

// export function showLoginError() {
//   return {
//     type: SHOW_LOGIN_ERROR,
//   }
// }

// export function addErrorAction(error) {
//   return {
//     type: ADD_ERROR,
//     payload: error
//   }
// }
