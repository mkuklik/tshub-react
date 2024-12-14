import { refCheck } from "./refCheck";
import { parseExpression } from "vega-expression";
import { Expression, SequenceExpression, Identifier, Property } from "estree";
import { mapObjIndexed, mergeAll, map as Rmap } from "ramda";
import evaluate from "./evaluate";

const convertToObject = (refs: Property[]): Record<string, any> => {
  const result = Rmap(
    (x: Property) => ({ [x.key.name]: evaluate(x.value, {}) }),
    refs
  );
  return mergeAll(result);
};

describe("refCheck", () => {
  //
  // Workbook series
  //
  it("should handle workbook series references with wsid", () => {
    const ast = parseExpression('$({ wsid: "abc" })');
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);

    expect(found).toBeTruthy();
    expect(refs.wsid).toEqual("abc"); // Check that wsid is correctly extracted
    expect(refs.source).toEqual("workbook"); // These shouldn't be present for wsid refs
    expect(refs.tsName).toBeUndefined();
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined(); // id is a FRED property.
  });

  it("should throw error when wsid and tsName, collName, spaceName or id are used together", () => {
    const ast = parseExpression('$({ wsid: "abc", tsName: "xyz" })');
    expect(() => {
      refCheck(ast, null);
    }).toThrowError();

    const ast2 = parseExpression('$({ wsid: "abc", collName: "xyz" })');
    expect(() => {
      refCheck(ast2, null);
    }).toThrowError();

    const ast3 = parseExpression('$({ wsid: "abc", spaceName: "xyz" })');
    expect(() => {
      refCheck(ast3, null);
    }).toThrowError();

    const ast4 = parseExpression('$({ wsid: "abc", id: "xyz" })');
    expect(() => {
      refCheck(ast4, null);
    }).toThrowError();
  });

  it("should NOT throw error when wsid and realtime are used together", () => {
    const ast = parseExpression('$({ wsid: "abc", realtime:"2000-01-01" })');
    expect(() => {
      refCheck(ast, null);
    }).not.toThrowError();
  });

  //
  // FRED
  //
  it("fred with literal", () => {
    const ast = parseExpression("fred('gdp')");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(refs.source).toEqual("fred");
    expect(refs.tsName).toBeUndefined();
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toEqual("gdp");
    expect(found).toBeTruthy();
  });

  it("fred with object parameters", () => {
    const ast = parseExpression("fred({id: 'gdp'})");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(refs.source).toEqual("fred");
    expect(refs.tsName).toBeUndefined();
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toEqual("gdp");
    expect(found).toBeTruthy();
  });

  it("fred no argument error", () => {
    const ast = parseExpression("fred()");
    expect(() => refCheck(ast, null)).toThrowError(
      "missing argument to FRED reference"
    );
  });

  it("fred too many arguments error", () => {
    const ast = parseExpression("fred({id: 'gdp'}, 123)");
    expect(() => refCheck(ast, null)).toThrowError("too many arguments");
  });

  it("fred wrong argument error", () => {
    const ast = parseExpression("fred(abc)");
    expect(() => refCheck(ast, null)).toThrowError(
      "argument to FRED reference must be a string literal or a object of parameters"
    );
  });
  it("should throw an error for invalid FRED properties", () => {
    const ast = parseExpression("fred({id: 'gdp', invalid: 'test'})"); // Include an invalid property

    expect(() => refCheck(ast, null)).toThrowError(
      `FRED reference only support id,realtime` // Check against the exact error message.
    );
  });

  it("should  NOT throw an error for valid FRED properties", () => {
    const ast = parseExpression("fred({id: 'gdp', realtime: '2024-01-01'})"); // Include only valid properties

    expect(() => refCheck(ast, null)).not.toThrowError(); // Check against the exact error message.
  });

  //
  //  TSHUB
  //

  it("$1", () => {
    const ast = parseExpression("$ts_name");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined();
    expect(found).toBeTruthy();
  });

  it("$2", () => {
    const ast = parseExpression("$ts_name.coll_name");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toEqual("coll_name");
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined();
  });

  it("$3", () => {
    const ast = parseExpression("$ts_name.coll_name.space_name");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toEqual("coll_name");
    expect(refs.spaceName).toEqual("space_name");
    expect(refs.id).toBeUndefined();
  });

  it("$1withParams", () => {
    const ast = parseExpression(
      "$ts_name({start: '2019-01-01', realtime: Date('2020-01-01')})"
    );
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined();
  });

  it("$2withParams", () => {
    const ast = parseExpression(
      "$ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')})"
    );
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toEqual("coll_name");
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined();
  });

  it("$3withParams", () => {
    const ast = parseExpression(
      "$ts_name.coll_name.space_name({start: '2019-01-01', realtime: Date('2020-01-01')})"
    );
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toEqual("coll_name");
    expect(refs.spaceName).toEqual("space_name");
    expect(refs.id).toBeUndefined();
  });

  it("$1withEmptyParams", () => {
    const ast = parseExpression("$ts_name()");
    const { found, ref: rawRefs } = refCheck(ast, null);
    const refs = convertToObject(rawRefs);
    expect(found).toBeTruthy();
    expect(refs.source).toEqual("tshub");
    expect(refs.tsName).toEqual("ts_name");
    expect(refs.collName).toBeUndefined();
    expect(refs.spaceName).toBeUndefined();
    expect(refs.id).toBeUndefined();
  });

  it("$1withLiteralParamsError", () => {
    const ast = parseExpression("$ts_name('asdas')");
    expect(() => {
      refCheck(ast, null);
    }).toThrowError("argument to reference must be a object of parameters");
  });

  it("$1withTooManyParamsError", () => {
    const ast = parseExpression("$ts_name({start: '2012-01-01'}, 'afdasd')");
    expect(() => {
      refCheck(ast, null);
    }).toThrowError("too many arguments");
  });

  it("ParamOnlywithLiteralParamsError", () => {
    const ast = parseExpression("$('asdas')");
    expect(() => {
      refCheck(ast, null);
    }).toThrowError("argument to reference must be a object of parameters");
  });
});
