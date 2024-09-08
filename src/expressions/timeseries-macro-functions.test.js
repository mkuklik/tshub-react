
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import R from 'ramda';
import { TS } from './timeseries';
import { compare } from './timeseries.test';
import Evaluator from './Evaluator';

const moment = extendMoment(Moment);

const example1 = [1.3, 2.3, 5.6, 2.3, 2.4, 5.3, 3.1, 4.5, 1.5, 0.7];


test('apc, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc('2000-01-01');
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, 'Q', {}, 'float', {}, {});

  const expectedValues = [NaN, 8.7980113, 34.1431563, -0.9715450, 0.1855875, 22.7825551, -0.8829576, 3.4402076, -0.9876543, -0.9525728];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, 'Q', {}, 'float', {}, {});

  const evaluator = new Evaluator('apc($ts)');
  const refs = {
    _ref0: ts,
  };
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});
