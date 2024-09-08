import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { TS } from './timeseries';
import * as R from 'ramda';
const moment = extendMoment(Moment);


// generate index for 
export function _duration(freq) {
  switch (freq) {
    case "D":
      return "days";
    case "W":
      return "weeks";
    case "M":
      return "months";
    case "Q":
      return "quarters";
    case "A":
      return "years";
    default:
      throw Error(`unsupported frequency, ${freq}`)
  }
}
