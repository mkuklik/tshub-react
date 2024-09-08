// var _ = require("underscore");
// import * as _ from 'underscore';

import { TS } from './timeseries';

export function cov(tsx, tsy, opt = {}) {
  /* covariance between series */
  // TODO
}

export function mean(ts) {
  // TODO option for treating NaN, missing periods
  if (ts instanceof TS) {
    let sum = 0;
    let n = 0;
    ts.data.forEach(x => {
      sum += x[1];
      n++;
    });
    return sum / n;
  } else if (ts instanceof Array) {
    let sum = 0;
    let n = 0;
    ts.forEach(x => {
      sum += x;
      n++;
    });
    return sum / n;
  } else {
    throw Error("mean: takes time series as an input")
  }
};


export function stddev(ts) {
  /* standard deviation */
  // TODO option for treating NaN, missing periods
  if (ts instanceof TS) {
    let sum = 0;
    let n = 0;
    const m = mean(ts);
    ts.data.forEach(x => {
      sum += (x[1] - m) * (x[1] - m);
      n++;
    });
    return Math.sqrt(sum / n);
  } else if (ts instanceof Array) {
    let sum = 0;
    let n = 0;
    const m = mean(ts);
    ts.forEach(x => {
      sum += (x - m) * (x - m);
      n++;
    });
    return Math.sqrt(sum / n);
  } else {
    throw Error("stddev() takes time series as an input")
  }
};


export function _var(ts, opt = {}) {
  /* variance */
  if (!ts instanceof TS) {
    throw Error("var: takes time series as an input")
  }

  let sum = 0;
  let n = 0;
  const m = mean(ts);
  ts.data.array.forEach(x => {
    sum += (x[1] - m) * (x[1] - m);
    n++;
  });
  return sum / n;
};

export function kurt(ts, opt = { length: undefined }) {
  /* Kurtosis of a series
  Returns the excess kurtosis of a series in a window of the specified length.
  */
}


/*
LowerTailMean(series, p)
Returns the mean of the number of lowest values as specified by the percentage, p. The parameter p should be in the range 0 < p < 100. This is sometimes known as the tail expectation.

LowerTailMean(series, p, window)
Returns the mean of the number of lowest values as specified by the percentage, p, in a window of the specified length. The parameter p should be in the range 0 < p < 100. This is sometimes known as the tail expectati

Percentile(series, p)
Returns the number of the p:th percentile from series, where p is in the range 0-100.

Percentile(series, p, window)
Returns the value of the p:th percentile within a window of the specified length, where p is in the
range 0-100.

At the start of the series, before there are enough values to cover a full window, the calculation
will be made on fewer observations than specified by the window parameter. This is also the
case if there are missing values.

ExpandingPercentile(series, p, window)

Returns the value of the p:th percentile within an expanding window (0 < p < 100).

PercentRank(series, value)

Returns the rank of a value in a series as a percentage (0..100) of the values in the series.

A missing value will be returned if the value is outside the range of values in the series.

If the value is in between values in the series, a linear interpolation will be made using the ranks of the surrounding values. The last parameter can be either a number or series.

PercentRank(series, value, lenght)

Returns the rank of a value in a series as a percentage (0..100) of the values within a window of the specified length.

A missing value will be returned if the value is outside the range of values in the series.

If the value is in between values in the series, a linear interpolation will be made using the ranks of the surrounding values. The second parameter can be either a number or series.

ExpandingPercentRank(series, value, lenght)

Returns the rank of a value in a series as a percentage (0..100) of the values in an expanding window.

SeasonalAdjustmentAdditive(series, years)
Returns a seasonally adjusted series calculated by using an additive method with weights in a window of the specified number of years.

Skewness(series)
Returns the skewness of a series.

Skewness(series, length)
Returns the skewness of a series in a window of the specified length.

Standardize(series)
Returns a normalised series where the mean is 0 and the standard deviation is 1.

Standardize(series, window)
Returns a normalised series where the mean is 0 and the standard deviation is 1 percentile within a window of the specified length.

At the start of the series, before there are enough values to cover a full window, the calculation will be made on fewer observations than specified by the window parameter. This is also the case if there are missing values.

This is implemented in the Macrobond formula language as:

Standardize(series, window) = FlagForecast((series - Mean(series, window)) / StdDev(series, window), IsForecast(series))
StdDev(series)
Returns the standard deviation of the numbers in a series relative its mean value.

StdDev(series, window)
Returns the standard deviation compared to the mean value within a window of the specified length.

At the start of the series, before there are enough values to cover a full window, the calculation will be made on fewer observations than specified by the window parameter. This is also the case if there are missing values.

In this formula a “window” can be a number or a series. If the values in a series are not natural numbers, application will round them down to the nearest natural number.

Trimean(series)
It returns the Tukey’s trimean

UpperTailMean(series, p)
Returns the mean of the number of highest values as specified by the percentage, p. The parameter p should be in the range 0 < p < 100. This is sometimes known as the tail expectation.

UpperTailMean(series, p, window)
Returns the mean of the number of highest values as specified by the percentage, p, in a window of the specified length. The parameter p should be in the range 0 < p < 100. This is sometimes known as the tail expectation.

Variance(series)
Returns the variance of the series.

Variance(series, window)
Returns the variance for a series within a window of the specified length.

At the start of the series, before there are enough values to cover a full window, the calculation will be made on fewer observations than specified by the window parameter. This is also the case if there are missing values.


*/
