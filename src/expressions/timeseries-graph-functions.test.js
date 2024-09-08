import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { testing, toLowerFrequency, mergeSeries } from './timeseries-graph-functions';
import { compare } from './timeseries.test';
import R from 'ramda';
import { TS } from './timeseries';
const moment = extendMoment(Moment);

/*
const toAnnual = (m) => moment.utc([m.year()]);
const toQuarterly = (m) => moment.utc([m.year(), 3 * m.month()]);
const toMonthly = (m) => moment.utc([m.year(), m.month()]);
const toWeekly = (m) => moment.utc([m.year()]).add(m.week(), 'weeks'); // TODO
const toDaily = (m) => moment.utc(R.take(3, m.toArray()));


function _indexToFreq(data, f) {
  return data.map((x) => [f(x[0]), x[1]]);
}
*/


test('toWeekly', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._indexToFreq(data, testing.toMonthly)

  // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));

  expect(out.every((x, i) => {
    return x[0].toArray()[2] === 1 && x[0].toArray()[1] === data[i][0].month()
  })).toBeTruthy();
});

test('toMonthly', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._indexToFreq(data, testing.toMonthly)

  // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));

  expect(out.every((x, i) => {
    return x[0].toArray()[2] === 1 && x[0].toArray()[1] === data[i][0].month()
  })).toBeTruthy();
});


test('toQuarterly', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._indexToFreq(data, testing.toQuarterly)

  // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));
  // const tmp2 = out.map((x, i) => {
  //   return [data[i][0].toISOString(), x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)]
  // });
  expect(out.every((x, i) => {
    return x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)
  })).toBeTruthy();
});


test('toAnnual', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._indexToFreq(data, testing.toAnnual)

  // const tmp = R.zip(out.map((x) => x[0].toISOString()), data.map((x) => x[0].toISOString()));
  // const tmp2 = out.map((x, i) => {
  //   return [data[i][0].toISOString(), x[0].toArray()[2] === 1 && x[0].month() === 3 * (data[i][0].quarter() - 1)]
  // });
  expect(out.every((x, i) => {
    return x[0].toArray()[2] === 1 && x[0].toArray()[1] === 0 && x[0].toArray()[0] === data[i][0].year()
  })).toBeTruthy();
});

/* aggregation functions */

test('_min', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._min(data);
  expect(out[0].isSame(start)).toBeTruthy()
  expect(out[1]).toStrictEqual(0);
});

test('_max', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._max(data);
  expect(out[0].isSame(start)).toBeTruthy()
  expect(out[1]).toStrictEqual(999);
});


test('_max', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._max(data);
  expect(out[0].isSame(start)).toBeTruthy()
  expect(out[1]).toStrictEqual(999);
});


test('avg', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._avg(data);

  expect(out[0].isSame(start)).toBeTruthy()
  expect(out[1]).toBeCloseTo((500 + 499*1000.0)/1000.0);
});


test('flow', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);

  const out = testing._flow(data);

  expect(out[0].isSame(start)).toBeTruthy()
  expect(out[1]).toBeCloseTo(500 + 499*1000.0);
});

/*
      ToLowest 
*/
test('toLowerFrequency D -> Q min', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
  const ts = new TS(data, "D", {}, "float", {}, {});
  const out = toLowerFrequency(ts, "Q", 'min');
  expect(out instanceof TS).toBeTruthy()
  expect(out.data[0][1]).toStrictEqual(0);
  expect(out.data[1][1]).toStrictEqual(91);
  expect(out.data[2][1]).toStrictEqual(182);
  expect(out.data[3][1]).toStrictEqual(274);
  expect(out.data[4][1]).toStrictEqual(366);
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
  expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
  expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
});

test('toLowerFrequency D -> M avg', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
  const ts = new TS(data, "D", {}, "float", {}, {});
  const out = toLowerFrequency(ts, "M", 'average');
  expect(out instanceof TS).toBeTruthy()
  expect(out.data[0][1]).toStrictEqual(15);
  expect(out.data[1][1]).toStrictEqual(45);
  expect(out.data[2][1]).toStrictEqual(75);
  expect(out.data[3][1]).toStrictEqual(105.5);
  expect(out.data[4][1]).toStrictEqual(136);
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
  expect(out.data[3][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
  expect(out.data[4][0].isSame(moment.utc("2000-05-01"))).toBeTruthy()
});


test('toLowerFrequency D -> Q first', () => {
  const inx = R.range(0, 1000);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'days'), i], inx);
  const ts = new TS(data, "D", {}, "float", {}, {});
  const out = toLowerFrequency(ts, "Q", 'first');
  expect(out instanceof TS).toBeTruthy()
  expect(out.data[0][1]).toStrictEqual(0);
  expect(out.data[1][1]).toStrictEqual(91);
  expect(out.data[2][1]).toStrictEqual(182);
  expect(out.data[3][1]).toStrictEqual(274);
  expect(out.data[4][1]).toStrictEqual(366);
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
  expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
  expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
});

/*
  toHigherFrequency
*/

test('genPeriodFunc A to Q', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('A', 'Q');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[3].isSame(moment.utc("2000-10-01"))).toBeTruthy()
  expect(out1.length).toStrictEqual(4); // 4 quarters in a year
});

test('genPeriodFunc A to M', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('A', 'M');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[11].isSame(moment.utc("2000-12-01"))).toBeTruthy()
  expect(out1.length).toStrictEqual(12); 
});

test('genPeriodFunc A to D', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('A', 'D');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[365].isSame(moment.utc("2000-12-31"))).toBeTruthy()
  expect(out1.length).toStrictEqual(366); 
});

test('genPeriodFunc Q to M', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('Q', 'M');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[2].isSame(moment.utc("2000-03-01"))).toBeTruthy()
  expect(out1.length).toStrictEqual(3); // 4 quarters in a year
});

test('genPeriodFunc Q to D', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('Q', 'D');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[90].isSame(moment.utc("2000-03-31"))).toBeTruthy()
  expect(out1.length).toStrictEqual(91); 
});

test('genPeriodFunc M to D', () => {
  const t1 = moment.utc("2000-01-01");
  const f = testing.genPeriodFunc('M', 'D');
  const out1 = f(t1);
  expect(out1[0].isSame(t1)).toBeTruthy()
  expect(out1[30].isSame(moment.utc("2000-01-31"))).toBeTruthy()
  expect(out1.length).toStrictEqual(31); 
});

// test('genPeriodFunc W to D', () => {
//   const t1 = moment.utc("2000-01-01");
//   const f = testing.genPeriodFunc('W', 'D');
//   const out1 = f(t1);
//   expect(out1[0].isSame(t1)).toBeTruthy()
//   expect(out1[30].isSame(moment.utc("2000-01-31"))).toBeTruthy()
//   expect(out1.length).toStrictEqual(31); 
// });

test('toHigherFrequency M -> D same', () => {
  const inx = R.range(0, 12);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'months'), i], inx);
  const ts = new TS(data, "M", {}, "float", {}, {});
  const out = testing.toHigherFrequency(ts, "D", 'same');
  expect(out instanceof TS).toBeTruthy()
  expect(out.data.every((x, i) => x[1] === x[0].month())).toBeTruthy();
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-01-02"))).toBeTruthy()
  expect(out.data[31][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
  expect(out.data[60][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
  expect(out.data[out.data.length-1][0].isSame(moment.utc("2000-12-31"))).toBeTruthy()
});

test('toHigherFrequency Q -> M dist', () => {
  const inx = R.range(0, 6);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), i], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});
  const out = testing.toHigherFrequency(ts, "M", 'dist');
  expect(out instanceof TS).toBeTruthy()
  expect(out.data[0][1]).toBeCloseTo(0);
  expect(out.data[1][1]).toBeCloseTo(0);
  expect(out.data[2][1]).toBeCloseTo(0);
  expect(out.data[3][1]).toBeCloseTo(0.3333333333);
  expect(out.data[4][1]).toBeCloseTo(0.33333333);
  expect(out.data[out.data.length-1][1]).toBeCloseTo(5.0/3.0);
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
  expect(out.data[3][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
  expect(out.data[4][0].isSame(moment.utc("2000-05-01"))).toBeTruthy()
  expect(out.data[out.data.length-1][0].isSame(moment.utc("2001-06-01"))).toBeTruthy()
});

test('toHigherFrequency Q -> D linear', () => {
  const inx = R.range(0, 5);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'quarters'), i], inx);
  const ts = new TS(data, "Q", {}, "float", {}, {});
  const out = testing.toHigherFrequency(ts, "D", 'linear');
  expect(out instanceof TS).toBeTruthy()
  const alpha0 = (ts.data[1][1]-ts.data[0][1])/91;
  expect(out.data.slice(0,92).every((x, i) => Math.abs(alpha0*i+ts.data[0][1] - x[1])<0.001)).toBeTruthy();
  const alpha1 = (ts.data[2][1]-ts.data[1][1])/91
  expect(out.data.slice(91,183).every((x, i) => Math.abs(alpha1*(i)+ts.data[1][1] - x[1])<0.001)).toBeTruthy();
  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-01-02"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-01-03"))).toBeTruthy()
  expect(out.data[31][0].isSame(moment.utc("2000-02-01"))).toBeTruthy()
  expect(out.data[60][0].isSame(moment.utc("2000-03-01"))).toBeTruthy()
  expect(out.data[out.data.length-1][0].isSame(moment.utc("2001-03-31"))).toBeTruthy()
});


test('toHigherFrequency A -> Q pc', () => {
  const inx = R.range(0, 5);
  const start = moment.utc("2000-01-01");
  const data = R.map((i) => [start.clone().add(i, 'years'), 0.02+i/100.0], inx);
  const ts = new TS(data, "A", {}, "float", {}, {});
  const out = testing.toHigherFrequency(ts, "Q", 'pc');
  expect(out instanceof TS).toBeTruthy()

  expect(out.data[0][1]).toBeCloseTo(0.00496293157);
  expect(out.data[1][1]).toBeCloseTo(0.00496293157);
  expect(out.data[2][1]).toBeCloseTo(0.00496293157);
  expect(out.data[3][1]).toBeCloseTo(0.00496293157);
  expect(out.data[4][1]).toBeCloseTo(0.00741707177);

  expect(out.data[0][0].isSame(start)).toBeTruthy()
  expect(out.data[1][0].isSame(moment.utc("2000-04-01"))).toBeTruthy()
  expect(out.data[2][0].isSame(moment.utc("2000-07-01"))).toBeTruthy()
  expect(out.data[3][0].isSame(moment.utc("2000-10-01"))).toBeTruthy()
  expect(out.data[4][0].isSame(moment.utc("2001-01-01"))).toBeTruthy()
});

// 
//   MERGE SERIES
//


test('mergeSeries all', () => {
  const values = [NaN, NaN, 5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const inx = R.range(0, 10);
  const start1 = moment.utc("2000-01-01");
  const start2 = moment.utc("2000-07-01");
  const data = R.map((i) => [start1.clone().add(i, 'quarters'), values[i]], inx);
  const ts1 = new TS(data, "Q", {}, "float", {}, {});
  const ts2 = new TS(R.map((i) => [start2.clone().add(i, 'quarters'), values[i]], inx), "Q", {}, "float", {}, {});

  const expectedValues = [5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const expectedStart = moment.utc("2000-07-01");
  const expectedData = R.map((i) => [expectedStart.clone().add(i, 'quarters'), expectedValues[i]], R.range(0, 8));
  const expected = new TS(expectedData, "Q", {}, "float", {}, {});

  const output = mergeSeries({ ts1, ts2}, "all");

  expect(output.ts1.data[0][0].isSame(start2)).toBeTruthy();
  expect(output.ts1.data[7][0].isSame(start1.clone().add(9, 'quarters'))).toBeTruthy();
  expect(output.ts2.data[0][0].isSame(start2)).toBeTruthy();
  expect(output.ts2.data[7][0].isSame(start1.clone().add(9, 'quarters'))).toBeTruthy();

  compare(expected, output.ts1);
});


test('mergeSeries any', () => {
  const values = [NaN, NaN, 5.6, NaN, 2.4, 5.3, 3.1, 4.5, NaN, 0.7];
  const inx = R.range(0, 10);
  const start1 = moment.utc("2000-01-01");
  const start2 = moment.utc("2000-07-01");
  const data = R.map((i) => [start1.clone().add(i, 'quarters'), values[i]], inx);
  const ts1 = new TS(data, "Q", {}, "float", {}, {});
  const ts2 = new TS(R.map((i) => [start2.clone().add(i, 'quarters'), values[i]], inx), "Q", {}, "float", {}, {});

  const output = mergeSeries({ ts1, ts2 }, "any");

  expect(output.ts1.data[0][0].isSame(start1)).toBeTruthy();
  expect(output.ts1.data[9][0].isSame(start1.clone().add(9, 'quarters'))).toBeTruthy();
  expect(output.ts2.data[0][0].isSame(start2)).toBeTruthy();
  expect(output.ts2.data[9][0].isSame(start2.clone().add(9, 'quarters'))).toBeTruthy();

  compare(ts1, output.ts1);
  compare(ts2, output.ts2);
});
