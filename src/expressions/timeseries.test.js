import { create_tsD, create_tsD2, compare } from './timeseries-test-utils';
import { TS } from './timeseries';
import moment from 'moment';
import {
  unary_minus, binary_times, binary_divide, binary_plus, binary_minus, 
  ln, log, abs, max, min
} from './timeseries-math-functions';
import { start, lag } from './timeseries-utils-functions';

describe('TS', () => {
  describe('basic', () => {
    it('should create a TS object', () => {
      const ts = create_tsD();
      expect(ts).toBeInstanceOf(TS);
      expect(ts.data.length).toBe(6);
    });

    it('should handle NaN values', () => {
      const ts = create_tsD();
      expect(ts.value(ts.data[4][0])).toBeNaN();
    });

    it('should compare values correctly', () => {
      const ts = create_tsD();
      const ts2 = create_tsD2();
      compare(ts, ts);
      compare(ts2, ts2);
    });

    it('should get values correctly', () => {
      const ts = create_tsD();
      const values = ts.values();
      expect(values).toEqual([4.1, 2.3, 3.5, 4.6, Number.NaN, 10.2]);
    });
  });
});

/*
      unary_minus
*/

// test('unary_minus on scalar', () => {
//   expect(unary_minus(1)).toBe(-1);
// });

// test('unary_minus on ts and scalar', () => {
//   const x = create_tsD();

//   const output = binary_minus(x, 1.0);

//   const expected = new TS([
//     [moment('2000-01-01'), 3.1],
//     [moment('2000-01-02'), 1.3],
//     [moment('2000-01-03'), 2.5],
//     [moment('2000-01-04'), 3.6],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 9.2],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   compare(expected, output);
// });

// test('unary_minus on scalar and ts', () => {
//   const x = create_tsD();

//   const output = binary_minus(1.0, x);

//   const expected = new TS([
//     [moment('2000-01-01'), -3.1],
//     [moment('2000-01-02'), -1.3],
//     [moment('2000-01-03'), -2.5],
//     [moment('2000-01-04'), -3.6],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), -9.2],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   compare(expected, output);
// });

// test('unary_minus on two ts', () => {
//   const x = create_tsD();
//   const y = create_tsD2();

//   const output = binary_minus(x, y);

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), 1.0999999999999996],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 5.999999999999999],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   compare(expected, output);
// });


// /*
//       start
// */

// test('start on scalar', () => {
//   expect(() => {
//     start(1);
//   }).toThrow(Error);
// });

// test('start on daily ts', () => {
//   const data = [
//     [moment('2000-01-04'), 3.5],
//     [moment('2000-01-05'), 1.4],
//     [moment('2000-01-06'), 4.2],
//   ];
//   const x = new TS(data, 'D', 'float');
//   expect(start(x)).toStrictEqual(moment('2000-01-04'));
// });

// test('start on weekly ts', () => {
//   const data = [
//     [moment('2000-01-01'), 3.5],
//     [moment('2000-01-08'), 1.4],
//     [moment('2000-01-15'), 4.2],
//   ];
//   const x = new TS(data, 'W', 'float');
//   expect(start(x)).toStrictEqual(moment('2000-01-01'));
// });

// /*
//       binary_plus
// */

// test('binary_plus on scalar', () => {
//   const x = create_tsD();
//   const y = create_tsD2();

//   const output = binary_plus(x, y);

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), 8.1],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 14.40],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   compare(expected, output);
// });


// test('binary_plus two series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = create_tsD2();  // 2000-01-04 -> 2000-01-09

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), 8.1],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 14.40],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   const output = binary_plus(x, y);
//   compare(expected, output);

//   const output_rev = binary_plus(y, x);
//   compare(expected, output_rev);
// });

// test('binary_plus no-overlapping series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = lag(create_tsD2(), -5);  // 2000-01-09 -> 2000-01-14

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), NaN],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), NaN],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//     [moment('2000-01-10'), NaN],
//     [moment('2000-01-11'), NaN],
//     [moment('2000-01-12'), NaN],
//     [moment('2000-01-13'), NaN],
//     [moment('2000-01-14'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   const output = binary_plus(x, y);
//   compare(expected, output);

//   const output_rev = binary_plus(y, x);
//   compare(expected, output_rev);
// });

/*
  divide
*/
//   [moment('2000-01-04'), 4.6],
//     [moment('2000-01-05'), 5.7],
//     [moment('2000-01-06'), 10.2],
//   ];
//   return new TS(data, 'D', {}, 'int64', {}, { txt: '$' }, {}); // data, freq, fparams, dtype, dparams, units, options
// }

// export function create_tsD2() {
//   const data = [
//     [moment('2000-01-04'), 3.5],
//     [moment('2000-01-05'), 1.4],
//     [moment('2000-01-06'), 4.2],


// test('binary_divide two series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = create_tsD2();  // 2000-01-04 -> 2000-01-09

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), 1.3142857142857143],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 2.4285714285714284],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//   ], 'D', {}, 'float', {}, { txt: '$' }, {});

//   const output = binary_divide(x, y);
//   compare(expected, output);
// });


// test('binary_divide no-overlapping series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = lag(create_tsD2(), -5);  // 2000-01-09 -> 2000-01-14

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), NaN],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), NaN],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//     [moment('2000-01-10'), NaN],
//     [moment('2000-01-11'), NaN],
//     [moment('2000-01-12'), NaN],
//     [moment('2000-01-13'), NaN],
//     [moment('2000-01-14'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   const output = binary_divide(x, y);
//   compare(expected, output);
// });

// /*
//   TIMES
// */


//  test('binary_times two series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = create_tsD2();  // 2000-01-04 -> 2000-01-09

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), 16.099999999999998],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), 42.839999999999996],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//   ], 'D', {}, 'float', {}, { txt: '$' }, {});

//   const output = binary_times(x, y);
//   compare(expected, output);

//   const output2 = binary_times(y, x);
//   compare(expected, output2);
// });


// test('binary_times no-overlapping series', () => {
//   const x = create_tsD();  // 2000-01-01 -> 2000-01-06
//   const y = lag(create_tsD2(), -5);  // 2000-01-09 -> 2000-01-14

//   const expected = new TS([
//     [moment('2000-01-01'), NaN],
//     [moment('2000-01-02'), NaN],
//     [moment('2000-01-03'), NaN],
//     [moment('2000-01-04'), NaN],
//     [moment('2000-01-05'), NaN],
//     [moment('2000-01-06'), NaN],
//     [moment('2000-01-07'), NaN],
//     [moment('2000-01-08'), NaN],
//     [moment('2000-01-09'), NaN],
//     [moment('2000-01-10'), NaN],
//     [moment('2000-01-11'), NaN],
//     [moment('2000-01-12'), NaN],
//     [moment('2000-01-13'), NaN],
//     [moment('2000-01-14'), NaN],
//   ], 'D', {}, 'int64', {}, { txt: '$' }, {});

//   const output = binary_times(x, y);
//   compare(expected, output);

//   const output2 = binary_times(y, x);
//   compare(expected, output2);
// });


/*
 TEST LAG
 */


test('lag daily ts', () => {
  const data = [
    [moment('2000-01-02'), 3.5],
    [moment('2000-01-03'), 1.4],
    [moment('2000-01-04'), 4.2]
  ];
  const x = new TS(data, 'D', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('2000-01-01'), 3.5],
    [moment('2000-01-02'), 1.4],
    [moment('2000-01-03'), 4.2]
  ], 'D', {}, 'float', {}, {}, {});

  const output = lag(x);

  compare(expected, output);
});


test('lag weekly ts', () => {
  const data = [
    [moment('2000-01-03'), 3.5],
    [moment('2000-01-10'), 1.4],
    [moment('2000-01-17'), 4.2]
  ];
  const x = new TS(data, 'W', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('1999-12-27'), 3.5],
    [moment('2000-01-03'), 1.4],
    [moment('2000-01-10'), 4.2]
  ], 'W', {}, 'float', {}, {}, {});

  const output = lag(x);

  compare(expected, output);
});

test('lag quarterly ts', () => {
  const data = [
    [moment('2000-01-01'), 3.5],
    [moment('2000-04-01'), 1.4],
    [moment('2000-07-01'), 4.2]
  ];
  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('1999-10-01'), 3.5],
    [moment('2000-01-01'), 1.4],
    [moment('2000-04-01'), 4.2]
  ], 'Q', {}, 'float', {}, {}, {});

  const output = lag(x);

  compare(expected, output);
});


test('lag quarterly ts, n=2', () => {
  const raw_data = [
    [moment('2000-01-01'), 3.5],
    [moment('2000-04-01'), 1.4],
    [moment('2000-07-01'), 4.2]
  ];
  const ts = new TS(raw_data, 'Q', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('1999-07-01'), 3.5],
    [moment('1999-10-01'), 1.4],
    [moment('2000-01-01'), 4.2]
  ], 'Q', {}, 'float', {}, {}, {});

  const output = lag(ts, 2);

  compare(expected, output);
});

/* 
  LN
*/

test('ln ts', () => {
  const data = [
    [moment('2000-01-01'), 1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ];

  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('2000-01-01'), 0.0],
    [moment('2000-04-01'), 0.6931471805599453],
    [moment('2000-07-01'), Number.NaN]
  ], 'Q', {}, 'float');

  const output = ln(x);

  compare(expected, output);
});

test('ln scalar', () => {
  const x = 2.0;

  const expected = 0.6931471805599453;

  const output = ln(x);

  compare(expected, output);
});

/* 
  LOG
*/

test('log ts', () => {
  const data = [
    [moment('2000-01-01'), 1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ];

  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('2000-01-01'), 0.0],
    [moment('2000-04-01'), 0.566401],
    [moment('2000-07-01'), Number.NaN]
  ], 'Q', {}, 'float', {}, {}, {});

  const output = log(x, 3.4);

  compare(expected, output);
});

test('log scalar', () => {
  const x = 2.0;

  const expected = 0.566401;

  const output = log(x, 3.4);

  compare(expected, output);
});

test('abs scalar', () => {
  const output = abs(3.4);
  expect(output).toBeCloseTo(3.4);

  const output2 = abs(-3.4);
  expect(output2).toBeCloseTo(3.4);
});


test('abs ts', () => {
  const data = [
    [moment('2000-01-01'), -1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ];

  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = new TS([
    [moment('2000-01-01'), 1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ], 'Q', {}, 'float', {}, {}, {});

  const output = abs(x);

  compare(expected, output);
});

test('max ts with NaN', () => {
  const data = [
    [moment('2000-01-01'), -1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ];
  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const output = max(x);
  expect(output).toBeNaN();  
});

test('max ts', () => {
  const data = [
    [moment('2000-01-01'), -1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), 3.4]
  ];
  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = 3.4;
  const output = max(x);
  expect(expected).toBeCloseTo(output)
});

test('min ts with NaN', () => {
  const data = [
    [moment('2000-01-01'), -1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), Number.NaN]
  ];
  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = Number.NaN;
  const output = min(x);
  expect(output).toBeNaN();
  
});


test('min ts', () => {
  const data = [
    [moment('2000-01-01'), -1.0],
    [moment('2000-04-01'), 2.0],
    [moment('2000-07-01'), 3.4]
  ];
  const x = new TS(data, 'Q', {}, 'float', {}, {}, {});

  const expected = -1.0;
  const output = min(x);
  expect(expected).toBeCloseTo(output)
  
});