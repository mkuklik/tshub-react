import { DEFAULTS_SET, DEFAULTS_CLEAR } from './ActionTypes';

export interface SetDefaultAction {
  type: typeof DEFAULTS_SET;
  payload: { [key: string]: any }; // Replace 'any' with the actual type of your values
}

export function setDefaultAction(keyvalues: { [key: string]: any }): SetDefaultAction { // Replace 'any' with the actual type of your values
  return {
    type: DEFAULTS_SET,
    payload: keyvalues,
  };
}

export interface ClearDefaultAction {
  type: typeof DEFAULTS_CLEAR;
  payload: string;
}

export function clearDefaultAction(key: string): ClearDefaultAction {
  return {
    type: DEFAULTS_CLEAR,
    payload: key,
  };
}

// import { DEFAULTS_SET, DEFAULTS_CLEAR } from './ActionTypes';


// export function setDefaultAction(keyvalues) {
//   return {
//     type: DEFAULTS_SET,
//     payload: keyvalues, // object (ket->value)
//   };
// }

// export function clearDefaultAction(key) {
//   return {
//     type: DEFAULTS_CLEAR,
//     payload: key,
//   };
// }
