import Moment from 'moment';
import { extendMoment } from 'moment-range';
import R from 'ramda';
import { TS } from './timeseries';
import { compare } from './timeseries.test';
import Evaluator from './Evaluator';

const moment = extendMoment(Moment);

test('trim, quarterly', () => {
  const values = [NaN, NaN, 5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), values[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const expectedStart = moment.utc('2000-07-01');
  const expectedData = R.map((i) => [expectedStart.clone().add(i, 'quarters'), expectedValues[i]], R.range(0, 8));
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('trim($ts)');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('drop, quarterly', () => {
  const values = [NaN, NaN, 5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), values[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const expectedStart = moment.utc('2000-07-01');
  let expectedData = R.map((i) => [expectedStart.clone().add(i, 'quarters'), expectedValues[i]], R.range(0, 8));
  expectedData = expectedData.filter((x) => !isNaN(x));
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('drop($ts)');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});
