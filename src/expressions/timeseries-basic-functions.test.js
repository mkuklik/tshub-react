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
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, 8.7980113, 34.1431563, -0.9715450, 0.1855875, 22.7825551, -0.8829576, 3.4402076, -0.9876543, -0.9525728]
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('apc($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


test('yoypc, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, NaN, NaN, NaN, 0.8461538, 1.3043478, -0.4464286, 0.9565217, -0.3750000, -0.8679245]
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('yoypc($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('pc, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, 0.76923077, 1.43478261, -0.58928571, 0.04347826, 1.20833333, -0.41509434, 0.45161290, -0.66666667, -0.53333333]
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('pc($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


test('diff, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, 1.0, 3.3, -3.3, 0.1, 2.9, -2.2, 1.4, -3.0, -0.8];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('diff($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('alogdiff, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, .57054486, 0.88985747, -0.88985747, 0.04255961, 0.79223808, -0.53630471, 0.37267529, -1.09861229, -0.76214005];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), 4 * expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('alogdiff($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


test('logdiff, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, .57054486, 0.88985747, -0.88985747, 0.04255961, 0.79223808, -0.53630471, 0.37267529, -1.09861229, -0.76214005];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('logdiff($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('yoylogdiff, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, NaN, NaN, NaN, 0.6131045, 0.8347977, -0.5913645, 0.6711683, -0.4700036, -2.0243818];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('yoylogdiff($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});



test('trend, quarterly', () => {
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [3.205455, 3.137576, 3.069697, 3.001818, 2.933939, 2.866061, 2.798182, 2.730303, 2.662424, 2.594545];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('trend($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('trend NaN, quarterly', () => {
  // NaN drops by default
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), (i === 7) ? NaN : example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [3.283529, 3.150588, 3.017647, 2.884706, 2.751765, 2.618824, 2.485882, 2.352941, 2.220000, 2.087059];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('trend($ts)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});

test('trend NaN, quarterly drop false', () => {
  // NaN drops by default
  const inx = R.range(0, 10);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), (i === 4) ? NaN : example1[i]], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});

  const expectedValues = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
  const expectedData = R.map((i) => [start.clone().add(i, 'quarters'), expectedValues[i]], inx);
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const evaluator = new Evaluator('trend($ts, false)');
  const refs = {
    '_ref0': ts
  }
  const [output, err] = evaluator.evaluate(refs);

  compare(expected, output);
});


// test('toMonthly', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._indexToFreq(data, testing.toMonthly)

//   // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));

//   expect(out.every((x, i) => {
//     return x[0].toArray()[2] === 1 && x[0].toArray()[1] === data[i][0].month()
//   })).toBeTruthy();
// });


// test('toQuarterly', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._indexToFreq(data, testing.toQuarterly)

//   // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));
//   // const tmp2 = out.map((x, i) => {
//   //   return [data[i][0].toISOString(), x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)]
//   // });
//   expect(out.every((x, i) => {
//     return x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)
//   })).toBeTruthy();
// });


// test('toAnnual', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._indexToFreq(data, testing.toAnnual)

//   // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));
//   // const tmp2 = out.map((x, i) => {
//   //   return [data[i][0].toISOString(), x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)]
//   // });
//   expect(out.every((x, i) => {
//     return x[0].toArray()[2] === 1 && x[0].toArray()[1] === 0 && x[0].toArray()[0] === data[i][0].year()
//   })).toBeTruthy();
// });

// /* aggregation functions */

// test('_min', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._min(data);
//   expect(out[0].isSame(start)).toBeTruthy()
//   expect(out[1]).toStrictEqual(0);
// });

// test('_max', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._max(data);
//   expect(out[0].isSame(start)).toBeTruthy()
//   expect(out[1]).toStrictEqual(999);
// });


// test('_max', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._max(data);
//   expect(out[0].isSame(start)).toBeTruthy()
//   expect(out[1]).toStrictEqual(999);
// });


// test('avg', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._avg(data);

//   expect(out[0].isSame(start)).toBeTruthy()
//   expect(out[1]).toBeCloseTo((500 + 499 * 1000.0) / 1000.0);
// });


// test('flow', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

//   const out = testing._flow(data);

//   expect(out[0].isSame(start)).toBeTruthy()
//   expect(out[1]).toBeCloseTo(500 + 499 * 1000.0);
// });

// /*
//       ToLowest 
// */
// test('toLowerFrequency D -> Q min', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
//   const ts = new TS(data, "D", {}, "float", {}, {});
//   const out = toLowerFrequency(ts, "Q", 'min');
//   expect(out instanceof TS).toBeTruthy()
//   expect(out.data[0][1]).toStrictEqual(0);
//   expect(out.data[1][1]).toStrictEqual(91);
//   expect(out.data[2][1]).toStrictEqual(182);
//   expect(out.data[3][1]).toStrictEqual(274);
//   expect(out.data[4][1]).toStrictEqual(366);
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
//   expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
//   expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
// });

// test('toLowerFrequency D -> M avg', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
//   const ts = new TS(data, "D", {}, "float", {}, {});
//   const out = toLowerFrequency(ts, "M", 'average');
//   expect(out instanceof TS).toBeTruthy()
//   expect(out.data[0][1]).toStrictEqual(15);
//   expect(out.data[1][1]).toStrictEqual(45);
//   expect(out.data[2][1]).toStrictEqual(75);
//   expect(out.data[3][1]).toStrictEqual(105.5);
//   expect(out.data[4][1]).toStrictEqual(136);
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
//   expect(out.data[3][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
//   expect(out.data[4][0].isSame(moment.utc("2000-05-01"))).toBeTruthy()
// });


// test('toLowerFrequency D -> Q first', () => {
//   const inx = R.range(0, 1000);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
//   const ts = new TS(data, "D", {}, "float", {}, {});
//   const out = toLowerFrequency(ts, "Q", 'first');
//   expect(out instanceof TS).toBeTruthy()
//   expect(out.data[0][1]).toStrictEqual(0);
//   expect(out.data[1][1]).toStrictEqual(91);
//   expect(out.data[2][1]).toStrictEqual(182);
//   expect(out.data[3][1]).toStrictEqual(274);
//   expect(out.data[4][1]).toStrictEqual(366);
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
//   expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
//   expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
// });

// /*
//   toHigherFrequency
// */

// test('genPeriodFunc A to Q', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('A', 'Q');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[3].isSame(moment.utc("2000-10-01"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(4); // 4 quarters in a year
// });

// test('genPeriodFunc A to M', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('A', 'M');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[11].isSame(moment.utc("2000-12-01"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(12);
// });

// test('genPeriodFunc A to D', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('A', 'D');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[365].isSame(moment.utc("2000-12-31"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(366);
// });

// test('genPeriodFunc Q to M', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('Q', 'M');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[2].isSame(moment.utc("2000-03-01"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(3); // 4 quarters in a year
// });

// test('genPeriodFunc Q to D', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('Q', 'D');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[90].isSame(moment.utc("2000-03-31"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(91);
// });

// test('genPeriodFunc M to D', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('M', 'D');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[30].isSame(moment.utc("2000-01-31"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(31);
// });

// // test('genPeriodFunc W to D', () => {
// //   const t1 = moment.utc("2000-01-01");
// //   const f = testing.genPeriodFunc('W', 'D');
// //   const out1 = f(t1);
// //   expect(out1[0].isSame(t1)).toBeTruthy()
// //   expect(out1[30].isSame(moment.utc("2000-01-31"))).toBeTruthy()
// //   expect(out1.length).toStrictEqual(31); 
// // });

// test('toHigherFrequency M -> D same', () => {
//   const inx = R.range(0, 12);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'months'), i], inx);
//   const ts = new TS(data, "M", {}, "float", {}, {});
//   const out = testing.toHigherFrequency(ts, "D", 'same');
//   expect(out instanceof TS).toBeTruthy()
//   expect(out.data.every((x, i) => x[1] === x[0].month())).toBeTruthy();
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-01-02"))).toBeTruthy()
//   expect(out.data[31][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
//   expect(out.data[60][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
//   expect(out.data[out.data.length - 1][0].isSame(moment.utc("2000-12-31"))).toBeTruthy()
// });

// test('toHigherFrequency Q -> M dist', () => {
//   const inx = R.range(0, 6);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'quarters'), i], inx);
//   const ts = new TS(data, "Q", {}, "float", {}, {});
//   const out = testing.toHigherFrequency(ts, "M", 'dist');
//   expect(out instanceof TS).toBeTruthy()
//   expect(out.data[0][1]).toBeCloseTo(0);
//   expect(out.data[1][1]).toBeCloseTo(0);
//   expect(out.data[2][1]).toBeCloseTo(0);
//   expect(out.data[3][1]).toBeCloseTo(0.3333333333);
//   expect(out.data[4][1]).toBeCloseTo(0.33333333);
//   expect(out.data[out.data.length - 1][1]).toBeCloseTo(5.0 / 3.0);
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
//   expect(out.data[3][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
//   expect(out.data[4][0].isSame(moment.utc("2000-05-01"))).toBeTruthy()
//   expect(out.data[out.data.length - 1][0].isSame(moment.utc("2001-06-01"))).toBeTruthy()
// });

// test('toHigherFrequency Q -> D linear', () => {
//   const inx = R.range(0, 5);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'quarters'), i], inx);
//   const ts = new TS(data, "Q", {}, "float", {}, {});
//   const out = testing.toHigherFrequency(ts, "D", 'linear');
//   expect(out instanceof TS).toBeTruthy()
//   const alpha0 = (ts.data[1][1] - ts.data[0][1]) / 91;
//   expect(out.data.slice(0, 92).every((x, i) => Math.abs(alpha0 * i + ts.data[0][1] - x[1]) < 0.001)).toBeTruthy();
//   const alpha1 = (ts.data[2][1] - ts.data[1][1]) / 91
//   expect(out.data.slice(91, 183).every((x, i) => Math.abs(alpha1 * (i) + ts.data[1][1] - x[1]) < 0.001)).toBeTruthy();
//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-01-02"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-01-03"))).toBeTruthy()
//   expect(out.data[31][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
//   expect(out.data[60][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
//   expect(out.data[out.data.length - 1][0].isSame(moment.utc("2001-03-31"))).toBeTruthy()
// });


// test('toHigherFrequency A -> Q pc', () => {
//   const inx = R.range(0, 5);
//   const start = moment.utc("2000-01-01");
//   const data = R.map((i) => [start.clone().add(i, 'years'), 0.02 + i / 100.0], inx);
//   const ts = new TS(data, "A", {}, "float", {}, {});
//   const out = testing.toHigherFrequency(ts, "Q", 'pc');
//   expect(out instanceof TS).toBeTruthy()

//   expect(out.data[0][1]).toBeCloseTo(0.00496293157);
//   expect(out.data[1][1]).toBeCloseTo(0.00496293157);
//   expect(out.data[2][1]).toBeCloseTo(0.00496293157);
//   expect(out.data[3][1]).toBeCloseTo(0.00496293157);
//   expect(out.data[4][1]).toBeCloseTo(0.00741707177);

//   expect(out.data[0][0].isSame(start)).toBeTruthy()
//   expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
//   expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
//   expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
//   expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
// });

