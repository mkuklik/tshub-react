import * as R from "ramda";
import { ASTNode } from "vega-expression";
import evaluate from "./evaluate";
import { parse } from "./parser";
import * as basicfuncs from "./timeseries-basic-functions";
import * as advfuncs from "./timeseries-adv-functions";
import * as macrofuncs from "./timeseries-macro-functions";
import * as mathfuncs from "./timeseries-math-functions";
import * as mathinternal from "./timeseries-math-internal";
import * as utilfuncs from "./timeseries-utils-functions";
import * as statsfuncs from "./timeseries-stats-functions";

const _args_vars = {
  undefined,
  Date,
};

class Evaluator {
  constructor(expr) {
    this.expr = expr;

    let ast;
    let refs = [];
    this.errors = [];

    try {
      ({ ast, refs } = parse(expr)); // handle errors
    } catch (error) {
      this.errors = [error instanceof Error ? error.message : error];
    }

    // evaluate references
    // const a = Rmap(x => (x instanceof ASTNode), refs); // todo handle errors
    // this.refs = Rmap(x => (x instanceof ASTNode) ? evaluate(x, _args_vars) : x, refs);
    this.refs = R.map(
      (x) =>
        R.map((y) => (y instanceof ASTNode ? evaluate(y, _args_vars) : y), x),
      refs
    ); // todo handle errors
    this.ast = ast;
  }

  getRefs() {
    return this.refs;
  }

  hasErrors = () => this.errors.length > 0;

  getErrors = () => this.errors;

  isSingleReference() {
    if (Object.keys(this.refs).length !== 1) return false;
    if (R.path(["type"], this.ast) === "Identifier") return true;
    return false;
  }

  evaluate(refs) {
    // TODO error handling from each function
    const exprVars = {
      undefined,
      true: true,
      false: false,
      NaN,
      Date,
      ...basicfuncs,
      ...advfuncs,
      ...macrofuncs,
      ...mathfuncs,
      ...utilfuncs,
      ...statsfuncs,
      ...refs,
      add: mathinternal.binary_plus,
      sub: mathinternal.binary_minus,
      mul: mathinternal.binary_times,
      div: mathinternal.binary_divide,
      rdiv: mathinternal.binary_reciprocal_divide,
    };
    // handle any errors
    let out;
    try {
      out = evaluate(this.ast, exprVars);
    } catch (error) {
      this.errors = [error instanceof Error ? error.message : error];
    }
    if (R.isNil(out) || Object.keys(out).length === 0) {
      // handle error
      this.errors = ["evaluation error"];
      out = undefined;
    }
    return [out, this.errors];
  }
}

export default Evaluator;
