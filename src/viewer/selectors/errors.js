/* eslint-disable import/prefer-default-export */
import * as R from 'ramda';


export const loginErrorScreenSelector = (state) => R.path(['errors', 'loginErrorScreenIsOpen'], state) || false;
