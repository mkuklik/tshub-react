import { map as Rmap } from "ramda";
import { parse } from "./parser";
import evaluate from "./evaluate";

describe("parse_fred_test", () => {
  it("fred_function", () => {
    const { ast, refs } = parse("fred('fred1')");
    expect(Object.keys(refs)).toContain("_ref0");
    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("id");
    expect(refs._ref0.id).toEqual("fred1");
    expect(refs._ref0.source).toEqual("fred");
  });
});

describe("parse_fred_test", () => {
  it("fred_function", () => {
    const { ast, refs } = parse("fred('fred1')");
    expect(Object.keys(refs)).toContain("_ref0");
    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("id");
    expect(refs._ref0.id).toEqual("fred1");
    expect(refs._ref0.source).toEqual("fred");
  });

  it("fred_function", () => {
    const { ast, refs } = parse("fred('fred1')");
    expect(Object.keys(refs)).toContain("_ref0");
    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("id");
    expect(refs._ref0.id).toEqual("fred1");
    expect(refs._ref0.source).toEqual("fred");
  });
});

describe("parse_tshub_test", () => {
  it("parse $tsname", () => {
    const { ast, refs } = parse("$ts_name");
    const val = evaluate(ast, {
      undefined,
      _ref0: "abc",
    });
    expect(val).toStrictEqual("abc");
    expect(Object.keys(refs)).toContain("_ref0");

    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("tsName");
    expect(Object.keys(refs._ref0)).toContain("collName");
    expect(Object.keys(refs._ref0)).toContain("spaceName");

    expect(refs._ref0.source).toStrictEqual("tshub");
    expect(refs._ref0.tsName).toStrictEqual("ts_name");
    expect(refs._ref0.collName).toBeUndefined();
    expect(refs._ref0.spaceName).toBeUndefined();
  });

  it("parse $tsname.coll_id", () => {
    const { ast, refs } = parse("$ts_name.coll_id");
    const val = evaluate(ast, {
      undefined,
      _ref0: "abc",
    });
    expect(val).toStrictEqual("abc");
    expect(Object.keys(refs)).toContain("_ref0");

    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("tsName");
    expect(Object.keys(refs._ref0)).toContain("collName");
    expect(Object.keys(refs._ref0)).toContain("spaceName");

    expect(refs._ref0.source).toStrictEqual("tshub");
    expect(refs._ref0.tsName).toStrictEqual("ts_name");
    expect(refs._ref0.collName).toStrictEqual("coll_id");
    expect(refs._ref0.spaceName).toBeUndefined();
  });

  it("parse $tsname.coll_id.space_name", () => {
    const { ast, refs } = parse("$ts_name.coll_id.space_name");
    const val = evaluate(ast, {
      undefined,
      _ref0: "abc",
    });
    expect(val).toStrictEqual("abc");
    expect(Object.keys(refs)).toContain("_ref0");

    expect(Object.keys(refs._ref0)).toContain("source");
    expect(Object.keys(refs._ref0)).toContain("tsName");
    expect(Object.keys(refs._ref0)).toContain("collName");
    expect(Object.keys(refs._ref0)).toContain("spaceName");

    expect(refs._ref0.source).toStrictEqual("tshub");
    expect(refs._ref0.tsName).toStrictEqual("ts_name");
    expect(refs._ref0.collName).toStrictEqual("coll_id");
    expect(refs._ref0.spaceName).toStrictEqual("space_name");
  });

  it("ts_name with parameters", () => {
    const { ast, refs } = parse(
      "$ts_name({start: '2019-01-01', realtime: Date('2020-01-01')})"
    );
    const val = evaluate(ast, {
      undefined,
      _ref0: "abc",
    });
    expect(val).toStrictEqual("abc");
    expect(Object.keys(refs)).toContain("_ref0");

    expect(Object.keys(refs._ref0)).toContain("tsName");
    expect(Object.keys(refs._ref0)).toContain("collName");
    expect(Object.keys(refs._ref0)).toContain("spaceName");
    expect(Object.keys(refs._ref0)).toContain("start");
    expect(Object.keys(refs._ref0)).toContain("realtime");

    expect(refs._ref0.tsName).toStrictEqual("ts_name");
    expect(refs._ref0.collName).toBeUndefined();
    expect(refs._ref0.spaceName).toBeUndefined();
  });

  it("ts_name.coll_name with parameters", () => {
    const { ast, refs } = parse(
      "$ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')})"
    );
    const val = evaluate(ast, {
      undefined,
      _ref0: "abc",
    });
    expect(val).toStrictEqual("abc");
    expect(Object.keys(refs)).toContain("_ref0");

    expect(Object.keys(refs._ref0)).toContain("tsName");
    expect(Object.keys(refs._ref0)).toContain("collName");
    expect(Object.keys(refs._ref0)).toContain("spaceName");
    expect(Object.keys(refs._ref0)).toContain("start");
    expect(Object.keys(refs._ref0)).toContain("realtime");

    expect(refs._ref0.tsName).toStrictEqual("ts_name");
    expect(refs._ref0.collName).toStrictEqual("coll_name");
    expect(refs._ref0.spaceName).toBeUndefined();
  });

  it("parser combined terms", () => {
    const { ast, refs } = parse(
      "$gdp + $ts_name.coll_name.space_name + $ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')}) + $gdp({start: index($gdp).first})"
    );
    const val = evaluate(ast, {
      undefined,
      _ref0: 1,
      _ref1: 2,
      _ref2: 3,
      _ref3: 4,
    });
    expect(val).toStrictEqual(10);

    expect(Object.keys(refs)).toContain("_ref0");
    expect(Object.keys(refs)).toContain("_ref1");
    expect(Object.keys(refs)).toContain("_ref2");
    expect(Object.keys(refs)).toContain("_ref3");

    // expect(Object.keys(refs._ref0)).toContain('ts_name');
    // expect(Object.keys(refs._ref0)).toContain('coll_name');
    // expect(Object.keys(refs._ref0)).toContain('space_name');
    // expect(Object.keys(refs._ref0)).toContain('start');
    // expect(Object.keys(refs._ref0)).toContain('realtime');

    // expect(Object.keys(refs._ref0.ts_name)).toStrictEqual('ts_name')
    // expect(Object.keys(refs._ref0.coll_name)).toStrictEqual('coll_name')
    // expect(Object.keys(refs._ref0.space_name)).toBeUndefined();
  });
});

test("parser_debugging", () => {
  // const { ast, refs } = parse("$gdp");
  // const { ast, refs } = parse("fred({id: 'fred1', realtime: Date('2020-01-01')})");
  const { ast, refs } = parse("fred('fred1')");

  console.log("ast: ", ast);
  console.log("refs: ", refs);

  const e = evaluate(ast, {
    undefined,
    _ref0: "abc",
  });
  expect(e).toStrictEqual("abc");
  expect(Object.keys(refs)).toContain("_ref0");
});
