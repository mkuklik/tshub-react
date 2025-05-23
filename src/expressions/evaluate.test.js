import moment from 'moment';
import { parse } from './parser';
import evaluate from './evaluate';
import { TS } from './timeseries';
import * as ts from './timeseries';
import * as mathfuncs from './timeseries-math-functions';
import { create_tsD, create_tsD2 } from './timeseries-test-utils';

const expr1 = "$gdp + $ts_name.coll_name.space_name + $ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')}) + $gdp({start: index($gdp).first})";


test('parse and evalue plus with Left scalar', () => {
  const { ast, references } = parse('2+$gdp');
  const e = evaluate(ast, {
    undefined,
    _ref0: create_tsD()
  });
  expect(e).toBeDefined();
  expect(e instanceof TS).toBeTruthy();
  const expected = create_tsD();
  expected.data.map((x) => {
    if (isNaN(x[1])) expect(e.value(x[0])).toBeNaN();
    else expect(e.value(x[0])).toBeCloseTo(2+x[1]);
  });
});


test('parse and evalue plus with Right scalar', () => {
  const { ast, references } = parse('$gdp + 4');
  const e = evaluate(ast, {
    undefined,
    _ref0: create_tsD(),
  });
  expect(e).toBeDefined();
  expect(e instanceof TS).toBeTruthy();
  const expected = create_tsD();
  e.data.map((x) => (isNaN(x[1]))
    ? isNaN(expected.value(x[0]))
    : expect(x[1]).toBeCloseTo(4 + expected.value(x[0]))
  );
});


test('parse and evalue plus with two time series', () => {
  const { ast, references } = parse('y + x');
  const out = evaluate(ast, {
    undefined,
    x: create_tsD(),
    y: create_tsD2(),
    get(name) {
      return undefined;
    },
  });
  expect(out).toBeDefined();
  expect(out instanceof TS).toBeTruthy();

  const expected = [
    [moment('2000-01-01'), NaN],
    [moment('2000-01-02'), NaN],
    [moment('2000-01-03'), NaN],
    [moment('2000-01-04'), 8.1],
    [moment('2000-01-05'), NaN],
    [moment('2000-01-06'), 14.40],
    [moment('2000-01-07'), NaN],
    [moment('2000-01-08'), NaN],
    [moment('2000-01-09'), NaN],
  ];

  expected.map((x) => {
    if (isNaN(x[1])) expect(out.value(x[0])).toBeNaN();
    else expect(out.value(x[0])).toBeCloseTo(x[1]);
  });

  // expect(x[1]).toBeCloseTo(4 + expected.value(x[0])))
});


test('parse and evalue minus with two time series', () => {
  const { ast, references } = parse('x - y');
  const out = evaluate(ast, {
    undefined,
    x: create_tsD(),
    y: create_tsD2(),
    get(name) {
      return undefined;
    },
  });
  expect(out).toBeDefined();
  expect(out instanceof TS).toBeTruthy();

  const expected = [
    [moment('2000-01-01'), NaN],
    [moment('2000-01-02'), NaN],
    [moment('2000-01-03'), NaN],
    [moment('2000-01-04'), 1.1],
    [moment('2000-01-05'), NaN],
    [moment('2000-01-06'), 6.0],
    [moment('2000-01-07'), NaN],
    [moment('2000-01-08'), NaN],
    [moment('2000-01-09'), NaN],
  ];

  expected.map((x) => {
    if (isNaN(x[1])) expect(out.value(x[0])).toBeNaN();
    else expect(out.value(x[0])).toBeCloseTo(x[1]);
  });
});


test('parse and evalue ts minus number', () => {
  const { ast, references } = parse('x - 2');
  const out = evaluate(ast, {
    undefined,
    x: create_tsD(),
    y: create_tsD2(),
    get(name) {
      return undefined;
    },
  });
  expect(out).toBeDefined();
  expect(out instanceof TS).toBeTruthy();

  const expected = [
    [moment('2000-01-01'), 2.1],
    [moment('2000-01-02'), 0.3],
    [moment('2000-01-03'), 1.5],
    [moment('2000-01-04'), 2.6],
    [moment('2000-01-05'), NaN],
    [moment('2000-01-06'), 8.2],
  ];

  expected.map((x) => {
    if (isNaN(x[1])) expect(out.value(x[0])).toBeNaN();
    else expect(out.value(x[0])).toBeCloseTo(x[1]);
  });
});


test('parse and evalue log of ts', () => {
  const { ast, references } = parse('ln(x)');
  const out = evaluate(ast, {
    undefined,
    x: create_tsD(),
    get(name) {
      return undefined;
    },
    ln: mathfuncs.ln,
  });
  expect(out).toBeDefined();
  expect(out instanceof TS).toBeTruthy();

  const expected = [
    [moment('2000-01-01'), Math.log(4.1)],
    [moment('2000-01-02'), Math.log(2.3)],
    [moment('2000-01-03'), Math.log(3.5)],
    [moment('2000-01-04'), Math.log(4.6)],
    [moment('2000-01-05'), NaN],
    [moment('2000-01-06'), Math.log(10.2)]
  ];

  expected.map((x) => {
    if (isNaN(x[1])) expect(out.value(x[0])).toBeNaN();
    else expect(out.value(x[0])).toBeCloseTo(x[1]);
  });
}); 