import * as R from 'ramda';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { freqOrder, frequencies } from './freqOrder';
import { TS } from './timeseries';
import { seq, start, end, window } from './timeseries-utils-functions';
const moment = extendMoment(Moment);


export function mergeSeries(seriesObj, method, rangeStart, rangeEnd) {
  /*
    This enumeration defines how calendars are merged into one calendar when there are time periods missing in one or more series. Please note that missing time period is not the same thing as a missing value. A time period is missing in cases when there should be no observation such as on a holiday. A missing value, on the other hand, is a special value in the time series that indicates that there should have been a value, but it is unknown for some reason.

    FullCalendar		Use all the time periods as specified by the frequency and weekdays.
    AvailableInAll		Use the time periods that are available in all series.
    AvailableInAny	Use the time periods that are available in any series.
  */
  const values = Object.values(seriesObj);
  const allStarts = R.filter(R.compose(R.not, R.isNil),R.map((ts) => start(ts), values));
  const allEnds = R.filter(R.compose(R.not, R.isNil),R.map((ts) => end(ts), values));

  switch (method) {
    case 'all': {
      let tStart = moment.max(...allStarts);
      let tEnd = moment.min(...allEnds);

      if (!R.isNil(rangeStart)) tStart = moment.max(tStart, rangeStart);
      if (!R.isNil(rangeEnd)) tEnd = moment.min(tEnd, rangeEnd);

      return R.map((ts) => window(ts, tStart, tEnd), seriesObj);
    }

    case 'any':
      {
        let tStart = moment.min(...allStarts);
        let tEnd = moment.max(...allEnds);

        if (!R.isNil(rangeStart)) tStart = moment.max(tStart, rangeStart);
        if (!R.isNil(rangeEnd)) tEnd = moment.min(tEnd, rangeEnd);
  
        return R.map((ts) => window(ts, tStart, tEnd), seriesObj);
      }
    default:
      return seriesObj
  }
}


export function partialPeriods() {
  /*
    PartialPeriodsMethod
    This enumeration determines the method for converting a series with partial periods.

    - None	Do not include partial periods.
    - Auto	Determine the method based on the series metadata.
    - RepeatLastValue	Fill up the partial period by repeating the last value.
    - FlowCurrentSum	Fill up the partial period with the average of the incomplete period.
    - PastRateOfChange	Use the rate of change from the previous year to extend the partial period.
    - Zero	Fill up the partial period with zeroes.
  */
}

// https://en.wikipedia.org/wiki/ISO_week_date

const toAnnual = (m) => moment.utc([m.year()]);
const toQuarterly = (m) => moment.utc([m.year(), 3 * (m.quarter() - 1)]);
const toMonthly = (m) => moment.utc([m.year(), m.month()]);
const toWeekly = (m) => {
  m.day() // day of week 0=Sunday, 1=monday
  const w = (m.day() + 6) % 7;
  m.dayOfYear()
  if (m.dayOfYear() <= 4 && m.isoWeek() > 1) {
    m.subtract(w)
  }

  return moment.utc([m.year()]).add(m.week(), 'weeks'); // TODO
}
const toDaily = (m) => moment.utc(R.take(3, m.toArray()));

function _indexToFreq(data, f) {
  return data.map((x) => [f(x[0]), x[1]]);
}
function _groupBySame(data) {
  return R.groupWith((x, y) => x[0].isSame(y[0]), data);
}
const _first = (data) => {
  if (data.length === 0) return data; // TODO maybe throw error
  else return data[0];
}
const _last = (data) => {
  if (data.length === 0) return undefined; // TODO maybe throw error
  else return data[data.length - 1];
}
const _avg = (data) => {
  if (data.length === 0) return data;  // is this right, this shouldn't happen !!!
  return [data[0][0], R.divide(R.sum(R.map((x) => x[1], data)), data.length)];
}
const _flow = (data) => {
  if (data.length === 0) return undefined; // TODO maybe throw error
  else return [data[0][0], R.sum(R.map((x) => x[1], data))];
}
const _max = (data) => {
  if (data.length === 0) return undefined; // TODO maybe throw error
  else return [data[0][0], R.reduce(R.max, -Infinity, R.map((x) => x[1], data))];
}
const _min = (data) => {
  if (data.length === 0) return undefined; // TODO maybe throw error
  else return [data[0][0], R.reduce(R.min, Infinity, R.map((x) => x[1], data))];
}
// TODO
// const _pc = (data) => {
//   if (data.length === 0) return data;  // is this right, this shouldn't happen !!!
//   const tmp =  [data[0][0], R.sum(R.map((x, i) => (i === 0) ? 0.0 : x[1]/data[i-1]-1.0, data))];
//   return tmp;
// }
/*
    const data = ts.data.map((z, i) => [
      z[0].clone(),
      z[1] / ts.value(z[0].clone().subtract(1, duration)) - 1.0,
    ]);

*/
const pickMethodFuncToLower = (method, units) => {
  switch (method) {
    case 'last':
      return _last;
    case 'first':
      return _first;
    case 'max':
      return _max;
    case 'min':
      return _min;
    case 'average':
      return _avg;
    case 'flow':
      return _flow;
    // case 'pc':
    //   return _pc;
    case 'auto':
      return _avg; // TODO, use units to determine the conversion method
    default:
      throw `unknown aggregation method ${method}`;
  }
}

const pickFreqFuncToLower = (freq, units) => {
  switch (freq) {
    case 'A':
      return toAnnual;
    case 'Q':
      return toQuarterly;
    case 'M':
      return toMonthly;
    case 'W':
      return toWeekly;
    case 'D':
      return toDaily;
    default:
      throw "unknown frequency";
  }
}

export function toLowerFrequency(ts, freq, method = 'auto') {
  /*

    This enumeration determines the method for converting a series to a lower frequency.

    - auto	Determine the method based on the series classification.
    - last	Use the last value of the time period.
    - first	Use the first value of the time period.
    - flow	Aggregate the values of the time period.
    - average Average
    - max 
    - min 
    - PercentageChange	Aggregate the percentage change over the period.
    - Highest	Use the highest value in the time period.
    - Lowest  Use the lowest value of the time period.
    - Average	Use the average value of the period.

  */
  if (!frequencies.includes(freq)) throw `Unsupported frequency ${freq}`;
  if (freqOrder[ts.freq] < freqOrder[freq])
    throw `frequency ${freq} is higher than the frequency of input`;
  if (freqOrder[ts.freq] === freqOrder[freq]) {
    return ts;
  }
  const methodFunc = pickMethodFuncToLower(method);
  const freqFunc = pickFreqFuncToLower(freq);
  return new TS(R.map(methodFunc, _groupBySame(_indexToFreq(ts.data, freqFunc))),
    freq, undefined, ts.dtype, ts.dparams, ts.units, ts.options);
}


//
//
//    TO HIGHER FREQUENCY
//
//


const _same = (i, data, expandFunc) => {
  const period = expandFunc(data[i][0]);
  const val = data[i][1]
  return R.map(p => [p, val], period);
}

const _pc = (i, data, expandFunc, units) => {
  const period = expandFunc(data[i][0]);
  // todo, depending on units (percent, decimal, vs log difference)
  const val = Math.pow(1.0 + data[i][1], 1 / period.length) - 1.0
  return R.map(p => [p, val], period);
}

const _linear = (i, data, expandFunc, units) => {
  const period = expandFunc(data[i][0]);
  const alpha = (i >= data.length - 1) ? NaN : (data[i + 1][1] - data[i][1]) / period.length;
  const beta = data[i][1];
  return period.map((p, j) => [p, alpha * j + beta]);
}

const _dist = (i, data, expandFunc, units) => {
  // opposite of flow
  const period = expandFunc(data[i][0]);
  const val = R.divide(data[i][1], period.length);
  return R.map(p => [p, val], period);
}

const pickMethodFuncToHigher = (method, units) => {
  switch (method) {
    case 'same':
      return _same;
    case 'dist':
      return _dist;
    case 'pc':
      return _pc;
    case 'linear':
      return _linear;
    case 'auto':
      return _same; // TODO, use units to determine the conversion method
    default:
      throw Error(`unknown interpolation method ${method}`);
  }
}

const pickPeriodLength = (freq) => {
  switch (freq) {
    case 'A':
      return 'years';
    case 'Q':
      return 'quarters';
    case 'M':
      return 'months';
    case 'W':
      return 'weeks';
    case 'D':
      return 'days';
    default:
      throw Error(`unknown frequency ${freq}`);

  }
}

const genPeriodFunc = (fromFreq, toFreq) => {
  if (fromFreq === toFreq) return (t) => [t];
  const periodLength = pickPeriodLength(fromFreq);
  return (t) => {
    const end = t.clone().add(1, periodLength);
    const out = seq(t, end, toFreq);
    out.pop();
    return out;
  }
}

const flattenPairs = (acc, pair) => acc.concat(pair);

export function toHigherFrequency(ts, freq, method = 'auto') {
  /*
   converting a series to a higher frequency
   Methods
    - auto		Determine the method based on the series classification.
    - same		Use the same value for the whole period.
      constant for all points in the period
    - dist (Distribute)	Use the first value of the time period.
       split x into equal parts, e.g. 100 over 30 days is 3.33333 per day
    - pc (PercentageChange)	Distribute the percentage change over the period.
      0.1 (10%) distributed over 30 days is 1.1^(1/30)-1.0 = 0.0031820580257142517 per day
    - LinearInterpolation	Use a linear interpolation of the values from this to the next period.
    - first (Pulse)	Use the value for the first value of the period.
    - QuadraticDistribution	Use quadratic interpolation to distribute the value over the period.
    - CubicInterpolation	Use a cubic interpolation of the values from this to the next period.
  */

  if (!frequencies.includes(freq)) throw `Unsupported frequency ${freq}`;
  if (freqOrder[ts.freq] > freqOrder[freq])
    throw `frequency ${freq} is lower than the frequency of input`;
  if (freqOrder[ts.freq] === freqOrder[freq]) {
    return ts;
  }
  const methodFunc = pickMethodFuncToHigher(method);
  const genFunc = genPeriodFunc(ts.freq, freq)


  const tmp = ts.data.map((x, i) => methodFunc(i, ts.data, genFunc));
  const out = R.reduceRight(flattenPairs, [], tmp);
  return new TS(out,
    freq, undefined, ts.dtype, ts.dparams, ts.units, ts.options);
}


export function missingValues({ ts, method = 'auto' } = {}) {
  /*
    This enumeration determines the method for filling in any missing values. Missing values is when a value is supposed to be there but is missing, in pandas it is NaN. This is different from missing period, which means that series is not available for periods, because it is before series starts or after series end
    Methods:
    - none
      Do not fill in missing values. They will remain NaN in the value vector.
    - auto
      Determine the method based on the series classification.
    - previous
      Use the previous non-missing value.
    - zero
      Use the value zero.
    - linear
      Do a linear interpolation between the previous and next non-missing values.
  */

  throw Error('not implemented');
}


export const testing = {
  toAnnual, toQuarterly, toMonthly, toWeekly, toDaily,
  _first, _last, _max, _min, _avg, _flow,
  _indexToFreq, _groupBySame,
  genPeriodFunc,
  toHigherFrequency,
  // expandToMonthly, expandToAnnual, expandToDaily, expandToQuarterly, expandToWeekly
}
