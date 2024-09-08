import { REPORT_ERROR, REPORT_API_ERROR, HIDE_ERRORS, SHOW_ERRORS, SHOW_LOGIN_ERROR, ADD_ERROR } from './ActionTypes';



export function reportErrorAction(error) {
  return {
    type: REPORT_ERROR,
    error,
  };
}

export function hideErrorsAction() {
  return {
    type: HIDE_ERRORS,
  };
}


export function showErrorsAction() {
  return {
    type: SHOW_ERRORS,
  };
}

export function reportApiError({ error, extra }) {
  return {
    type: REPORT_API_ERROR,
    error,
    extra,
  }
}

export function showLoginError() {
  return {
    type: SHOW_LOGIN_ERROR,
  }
}

export function addErrorAction(error) {
  return {
    type: ADD_ERROR,
    payload: error
  }
}