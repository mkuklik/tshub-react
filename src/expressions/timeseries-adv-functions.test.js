import Moment from 'moment';
import { extendMoment } from 'moment-range';
import R from 'ramda';
import { TS } from './timeseries';
import { compare } from './timeseries.test';
import Evaluator from './Evaluator';

const moment = extendMoment(Moment);

const example1 = [1.3, 2.3, 5.6, 2.3, 2.4, 5.3, 3.1, 4.5, 1.5, 0.7];


test('index, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [
    100.0,
    176.9230769230769,
    430.7692307692308,
    176.9230769230769,
    184.6153846153846,
    407.6923076923077,
    238.46153846153845,
    346.15384615384613,
    115.38461538461537,
    53.84615384615385];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('index($ts)');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


test('index, quarterly, start', () => {
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [
    54.16666666666667,
    95.83333333333333,
    233.33333333333334,
    95.83333333333333,
    100.0,
    220.83333333333334,
    129.16666666666669,
    187.5,
    62.5,
    29.166666666666668];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('index($ts, "2001Q1")');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


test('index, quarterly, start error', () => {
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [
    54.16666666666667,
    95.83333333333333,
    233.33333333333334,
    95.83333333333333,
    100.0,
    220.83333333333334,
    129.16666666666669,
    187.5,
    62.5,
    29.166666666666668];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('index($ts, "2001Z1")');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  expect(err[0]).toContain("date to frequency Q failed");
});

test('index, quarterly, start, base', () => {
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [
    541.6666666666667,
    958.3333333333333,
    2333.3333333333334,
    958.3333333333333,
    1000.0,
    2208.3333333333334,
    1291.6666666666669,
    1875.0,
    625.0,
    291.66666666666668];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('index($ts, "2001Q1", 1000)');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});