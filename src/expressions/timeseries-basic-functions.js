import { _duration } from './timeseries-internal-functions';
import { methods as reg } from './regression';
import { TS } from './timeseries';

export const npy = (ts) => {
  switch (ts.freq) {
    case 'D':
      return 365;
    case 'W':
      return 52;
    case 'M':
      return 12;
    case 'Q':
      return 4;
    case 'A':
      return 1;
    default:
      throw Error(`unsupported frequency, ${ts.freq}`);
  }
};

export function apc(ts) {
  /* Percentage change at compound annual rate */
  if (ts instanceof TS) {
    const n = npy(ts);
    const duration = _duration(ts.freq);
    const data = ts.data.map((z, i) => [
      z[0],
      ((z[1] / ts.value(z[0].clone().subtract(1, duration))) ** n) - 1.0,
    ]);
    // TODO determine dtype and units
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options);
  }
  throw Error('apc: not a timeseries');


  // if (ts instanceof TS) {
  //   const n = npy(ts)
  //   // ts.data.map((z, i) => [z[0].toISOString(), (i<n) ? NaN : z[0].clone().subtract(1, 'years').toISOString()])
  //   const data = ts.data.map((z, i) => [z[0], (i<n) ? NaN : (Math.pow(z[1]-ts.value(z[0].clone().subtract(1, 'years')), n)-1.0)]);
  //   return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options) // TODO determine dtype and units
  // } else {
  //   throw Error("apc: not a timeseries");
  // }
}

export function pc(ts) {
  /* Period to period percentage change */
  if (ts instanceof TS) {
    const duration = _duration(ts.freq);
    const data = ts.data.map((z, i) => [
      z[0].clone(),
      z[1] / ts.value(z[0].clone().subtract(1, duration)) - 1.0,
    ]);
    // TODO determine dtype and units
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options);
  }
  throw Error('pc: not a timeseries');
}

export function yoypc(ts) {
  /* Year over year percentage change */
  if (ts instanceof TS) {
    const n = npy(ts);
    const data = ts.data.map((z, i) => [
      z[0].clone(),
      (i < n) ? NaN : (z[1] / ts.value(z[0].clone().subtract(1, 'years')) - 1.0),
    ]);
    // TODO determine dtype and units
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options);
  }
  throw Error('yoypc: not a timeseries');
}

export function diff(ts) {
  /* Period to period difference change */
  if (ts instanceof TS) {
    // const duration = _duration(ts.freq);
    // const data = ts.data.map((z, i) => [z[0], z[1]-ts.value(z[0].clone().subtract(1, duration))]);
    const data = ts.data.map((z, i) => [z[0].clone(), (i < 1) ? NaN : z[1] - ts.data[i - 1][1]]);
    // TODO units
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
  }
  throw Error('diff: not a timeseries');
}

export function yoydiff(ts) {
  /* Year over year difference change */
  if (ts instanceof TS) {
    const n = npy(ts);
    const data = ts.data.map((z, i) => [z[0].clone(), (i < n) ? NaN : (z[1] - ts.value(z[0].clone().subtract(1, 'years')))]);
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
  }
  throw Error('yoydiff: not a timeseries');
}

export function alogdiff(ts) {
  /* Log change - compound annual rate */
  if (ts instanceof TS) {
    const data = ts.data.map((z, i) => [z[0].clone(), (i < 1) ? NaN : 4.0 * (Math.log(z[1]) - Math.log(ts.data[i - 1][1]))]);
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
  }
  throw Error('alogdiff: not a timeseries');
}

export function logdiff(ts) {
  /* Log change - period to period */
  if (ts instanceof TS) {
    const data = ts.data.map((z, i) => [z[0].clone(), (i < 1) ? NaN : (Math.log(z[1]) - Math.log(ts.data[i - 1][1]))]);
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
  }
  throw Error('logdiff: not a timeseries');
}

export function yoylogdiff(ts) {
  /* Year to year log change */
  if (ts instanceof TS) {
    const n = npy(ts);
    const data = ts.data.map((z, i) => [z[0].clone(), (i < n) ? NaN : (Math.log(z[1]) - Math.log(ts.value(z[0].clone().subtract(1, 'years'))))]);
    return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
  }
  throw Error('yoylogdiff: not a timeseries');
}

export function trend(ts, drop) {
  // linear trend
  if (drop === undefined) drop = true;
  const data = ts.data.map((x, i) => [i, x[1]]);
  const model = reg.linear(data, { precision: 10, drop });
  const out = ts.data.map((x, i) => [x[0].clone(), model.predict(i)[1]]);
  return new TS(out, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
}

export function detrend(ts, drop) {
  // detrended series
  if (drop === undefined) drop = true;
  const data = ts.data.map((x, i) => [i, x[1]]);
  const model = reg.linear(data, { precision: 10, drop });
  const out = ts.data.map((x, i) => [x[0].clone(), x[1] - model.predict(i)[1]]);
  return new TS(out, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options); // TODO determine dtype and units
}
