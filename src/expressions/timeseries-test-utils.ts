import moment from 'moment';
import type { Moment } from 'moment';
import { TS } from './timeseries';

/**
 * Creates a daily time series with sample data
 * @returns A TS object with daily frequency data
 */
export function create_tsD(): TS {
  const data: [Moment, number][] = [
    [moment('2000-01-01'), 4.1],
    [moment('2000-01-02'), 2.3],
    [moment('2000-01-03'), 3.5],
    [moment('2000-01-04'), 4.6],
    [moment('2000-01-05'), Number.NaN],
    [moment('2000-01-06'), 10.2],
  ];
  return new TS(data, 'D', {}, 'int64', {}, '$', {}); // data, freq, fparams, dtype, dparams, units, options
}

/**
 * Creates a second daily time series with sample data
 * @returns A TS object with daily frequency data
 */
export function create_tsD2(): TS {
  const data: [Moment, number][] = [
    [moment('2000-01-04'), 3.5],
    [moment('2000-01-05'), 1.4],
    [moment('2000-01-06'), 4.2],
    [moment('2000-01-07'), 2.1],
    [moment('2000-01-08'), 3.9],
    [moment('2000-01-09'), -2.2],
  ];
  return new TS(data, 'D', {}, 'int64', {}, '$', {}); // data, freq, fparams, dtype, dparams, units, options
}

/**
 * Compares expected and output values for time series testing
 * @param expected The expected value or TS object
 * @param output The actual output value or TS object
 */
export const compare = (expected: TS | number, output: TS | number): void => {
  if (expected instanceof TS) {
    for (const x of expected.data) {
      if (Number.isNaN(x[1])) {
        expect((output as TS).value(x[0])).toBeNaN();
      }
      else {
        expect((output as TS).value(x[0])).toBeCloseTo(x[1]);
      }
    }
  } else {
    if (Number.isNaN(expected)) expect(output).toBeNaN();
    else expect(expected).toBeCloseTo(output as number);
  }
} 