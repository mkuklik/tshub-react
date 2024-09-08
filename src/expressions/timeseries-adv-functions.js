import { isNil } from 'ramda';
import Moment from 'moment';
import { TS } from './timeseries';
import { start as _start, parseToDate } from './timeseries-utils-functions';

export function index(ts, start, base) {
  /* Index to a Year/Quarter/Month */
  if (ts instanceof TS) {
    let s;
    if (isNil(start)) {
      s = _start(ts);
    } else {
      s = parseToDate(start, ts.freq); // ? string to date
    }
    const b = (isNil(base)) ? 100 : base;

    let denom = ts.value(s);
    if (isNil(denom)) {
      throw Error(`can't find reference value at ${s}`);
    }
    denom /= b;
    const data = ts.data.map((z) => [
      z[0],
      z[1] / denom,
    ]);
    // TODO determine dtype and units
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options);
  }
  throw Error('apc: not a timeseries');
}

export function ma(ts, period) {
  if (period === undefined) {
    period = 12;
  }

  let i;
  let j;
  const l = this.data.length;
  let sum = 0;

  // Reset the buffer
  this.buffer = [];

  // Leave the datapoints [0;period[ intact
  this.buffer = this.data.slice(0, period);

  for (i = period; i < l; i++) {
    sum = 0;
    for (j = period; j > 0; j--) {
      sum += this.data[i - j][1];
    }
    this.buffer[i] = [this.data[i][0].clone(), sum / period];
  }
  this.data = this.buffer;
  return this;
}

export function ema(ts, period) {
  /* exponencial moving average */
  if (period === undefined) {
    period = 12;
  }

  let i;
  let j;
  const l = this.data.length;
  const sum = 0;

  // Reset the buffer
  let buffer = [];

  // Leave the datapoints [0;period[ intact
  buffer = ts.data.slice(0, period);

  const m = 2 / (period + 1);	// Multiplier

  for (i = period; i < l; i++) {
    buffer[i] = [
      ts.data[i][0].clone(),
      (ts.data[i][1] - ts.data[i - 1][1]) * m + ts.data[i - 1][1],
    ];
  }
  return new TS(buffer, ts.freq, ts.fparams, ts.dtype, ts.dparams, ts.units, ts.options);
}

export function lwma(ts, period) {
  if (period === undefined) {
    period = 12;
  }

  let i;
  let j;
  const l = this.data.length;
  let sum = 0;
  let n = 0;

  // Reset the buffer
  let buffer = [];

  // Leave the datapoints [0;period[ intact
  buffer = ts.data.slice(0, period);

  for (i = period; i < l; i++) {
    sum = 0;
    n = 0;
    for (j = period; j > 0; j--) {
      sum += ts.data[i - j][1] * j;
      n += j;
    }
    buffer[i] = [ts.data[i][0].clone(), sum / n];
  }
  return new TS(buffer, ts.freq, ts.fparams, ts.dtype, ts.dparams, ts.units, ts.options);
}

export function amavg() {
/* Annualized Moving Total */
}

export function cmavg() {
  /* Moving Average Centered */
}

export function mtotal() {
  /* Moving Total */
}

export function acmtotal() {
  /* Annualized Moving Total Centered */
}

export function cmtotal() {
  /* Moving Total Centered */
}


/* Other to consider in the future:

Point to Point % Change
Average % Change
Annualized % Change
Point to Point % Change Centered
Average % Change Centered
Annualized % Change Centered
Point to Point Difference Change
Average Difference Change
Annualized Difference Change
Point to Point Difference Change Centered
Average Difference Change Centered
Annualized Difference Change Centered
Point to Point Log Change
Average Log Change
Annualized Log Change
Point to Point Difference Log Change Centered
Average Difference Log Change Centered
Annualized Difference Log Change Centered
*/
