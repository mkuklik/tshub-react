import moment from "moment";
import Evaluator from "./Evaluator";

import sampleData from "./sampleEvaluationData";
import { TS } from "./timeseries";
import { compare } from "./timeseries.test";

const expr1 =
  "$gdp + $ts_name.coll_name.space_name + $ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')}) + $gdp({start: index($gdp).first})";

/* 

isSingleReference

*/
test("isSingleReference 1", () => {
  const evaluator = new Evaluator("4*$xyz + log($fgh.dfd.wew) - ($ewq - 4)");
  expect(evaluator.isSingleReference()).toBeFalsy();
});

test("isSingleReference 2", () => {
  const evaluator = new Evaluator("$xyz");
  expect(evaluator.isSingleReference()).toBeTruthy();
});

test("isSingleReference 3", () => {
  const evaluator = new Evaluator('$xyz({start: "2019-01-01"}) + 1');
  expect(evaluator.isSingleReference()).toBeTruthy();
});

test("evaluator equation with error", () => {
  const evaluator = new Evaluator("4*$xyz + log($fgh.dfd.wew) - ($ewq - 4)");
  expect(!evaluator.hasErrors()).toBeTruthy();
  const data = {
    _ref0: 123,
    _ref1: 123,
    _ref2: 123,
  };
  const [value, error] = evaluator.evaluate(data);
  expect(evaluator.hasErrors()).toBeTruthy();
  expect(evaluator.getErrors()[0]).toStrictEqual("log: base is undefined");
});

test("evaluator equation", () => {
  const evaluator = new Evaluator("4*$xyz + ln($fgh.dfd.wew) - ($ewq - 4)");
  expect(!evaluator.hasErrors()).toBeTruthy();
  const data = {
    _ref0: 123,
    _ref1: 123,
    _ref2: 123,
  };
  const [value, error] = evaluator.evaluate(data);
  expect(!evaluator.hasErrors()).toBeTruthy();
  expect(value).toBeCloseTo(623.8121843553724);
});

test("evaluator1", () => {
  const evaluator = new Evaluator("$abc");
  const data = {
    _ref0: 123,
  };
  const [value, error] = evaluator.evaluate(data);
  expect(!evaluator.hasErrors()).toBeTruthy();
  expect(value).toStrictEqual(123);
});

test("evaluator with ids only wsid", () => {
  // const { ast, refs } = parse('$abc({start: "2019-01-01", realtime: Date("2020-01-01")})');
  const data = {
    _ref0: 123,
  };
  const e = new Evaluator('$({wsid: "dfdsfsda"})');
  const refs = e.getRefs();
  expect(e.hasErrors()).toBeFalsy();
  expect(refs).toEqual({
    _ref0: { wsid: "dfdsfsda" },
  });
  const [value, err] = e.evaluate(data);
  expect(value).toStrictEqual(123);
});

test("evaluator extras", () => {
  // const { ast, refs } = parse('$abc({start: "2019-01-01", realtime: Date("2020-01-01")})');
  const data = {
    _ref0: 123,
  };
  const e = new Evaluator(
    '$abc({start: "2019-01-01", realtime: Date("2020-01-01")})'
  );
  const [value, err] = e.evaluate(data);
  expect(value).toStrictEqual(123);
});

test("parsing error handling", () => {
  const evaluator = new Evaluator("$abc=2132{");
  expect(evaluator.hasErrors()).toBeTruthy();

  // no evaluation with errors
  const value = evaluator.evaluate({
    _ref0: 123,
  });
  expect(value).toBeUndefined();
});

test("evaluator gnp", () => {
  const evaluator = new Evaluator("$gnp");
  let x = sampleData.gnp;
  x.data = x.data.map((x) => [moment.utc(x[0]), x[1]]);
  const data = {
    _ref0: new TS(x.data, x.freq, x.fparams, x.dtype, x.dparams, x.units),
  };
  const [out, err] = evaluator.evaluate(data);
  compare(out, data._ref0);
});

test("evaluator subtract gnp", () => {
  const evaluator = new Evaluator("$gnp - $gnp");
  console.log("refs: ", evaluator.getRefs());
  let x = sampleData.gnp;
  x.data = x.data.map((x) => [moment.utc(x[0]), x[1]]);
  const expectedValue = new TS(
    x.data.map((x) => [moment.utc(x[0]), 0.0]),
    x.freq,
    x.fparams,
    x.dtype,
    x.dparams,
    x.units
  );
  const data = {
    _ref0: new TS(x.data, x.freq, x.fparams, x.dtype, x.dparams, x.units),
    _ref1: new TS(x.data, x.freq, x.fparams, x.dtype, x.dparams, x.units),
  };
  const [value, err] = evaluator.evaluate(data);
  expect(value.isSame(expectedValue)).toBeTruthy();
});
