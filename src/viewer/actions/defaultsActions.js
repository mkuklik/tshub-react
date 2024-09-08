import { DEFAULTS_SET, DEFAULTS_CLEAR } from './ActionTypes';


export function setDefaultAction(keyvalues) {
  return {
    type: DEFAULTS_SET,
    payload: keyvalues, // object (ket->value)
  };
}

export function clearDefaultAction(key) {
  return {
    type: DEFAULTS_CLEAR,
    payload: key,
  };
}
