import * as R from "ramda";
import { ASTNode } from "vega-expression"; // If you are using Vega, keep this. Otherwise, replace with the appropriate ASTNode type.
import evaluate from "./evaluate";
import { parse } from "./parser";
import * as basicfuncs from "./timeseries-basic-functions";
import * as advfuncs from "./timeseries-adv-functions";
import * as macrofuncs from "./timeseries-macro-functions";
import * as mathfuncs from "./timeseries-math-functions";
import * as mathinternal from "./timeseries-math-internal";
import * as utilfuncs from "./timeseries-utils-functions";
import * as statsfuncs from "./timeseries-stats-functions";
import { Expression } from "estree";
import { Moment } from "moment";

export interface IRef {
  source?: string;
  realtime?: Moment;
  start?: Moment;
  end?: Moment;
  // TSHUB specific
  collId?: string;
  collName?: string;
  spaceId?: string;
  spaceName?: string;
  tsName?: string;
  tsid?: string;
  // workbook
  wsid?: string;
  // FRED
  id?: string;
}

export interface IRefs {
  [ref_id: string]: IRef;
}

class Evaluator {
  expr: string;
  ast: Expression | undefined;
  refs: IRefs = {};
  errors: string[] = [];

  constructor(expr: string) {
    this.expr = expr;

    try {
      const parsed = parse(expr);
      this.ast = parsed.ast;
      this.refs = parsed.refs;
    } catch (error: any) {
      // Catching any allows us to handle various error types
      this.errors = [error instanceof Error ? error.message : String(error)];
    }
  }

  getRefs(): IRefs {
    return this.refs;
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): string[] {
    return this.errors;
  }

  isSingleReference(): boolean {
    return Object.keys(this.refs).length === 1;
  }

  evaluate(refs: Record<string, any>): [any, string[]] | undefined {
    if (!this.ast || this.hasErrors()) {
      return undefined; // Or handle the case where ast is undefined differently
    }

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

    try {
      const out = evaluate(this.ast, exprVars);

      if (R.isNil(out)) {
        this.errors = ["Evaluation error: Result is null or undefined"];
        return [undefined, this.errors];
      }
      return [out, this.errors];
    } catch (error: any) {
      this.errors = [error instanceof Error ? error.message : String(error)];
      return [undefined, this.errors];
    }
  }
}

const argsVars = {
  undefined,
  Date,
};

export default Evaluator;

// import * as R from "ramda";
// import { ASTNode } from "vega-expression";
// import evaluate from "./evaluate";
// import { parse } from "./parser";
// import * as basicfuncs from "./timeseries-basic-functions";
// import * as advfuncs from "./timeseries-adv-functions";
// import * as macrofuncs from "./timeseries-macro-functions";
// import * as mathfuncs from "./timeseries-math-functions";
// import * as mathinternal from "./timeseries-math-internal";
// import * as utilfuncs from "./timeseries-utils-functions";
// import * as statsfuncs from "./timeseries-stats-functions";

// const _args_vars = {
//   undefined,
//   Date,
// };

// class Evaluator {
//   constructor(expr) {
//     this.expr = expr;

//     let ast;
//     let refs = [];
//     this.errors = [];

//     try {
//       ({ ast, refs } = parse(expr)); // handle errors
//     } catch (error) {
//       this.errors = [error instanceof Error ? error.message : error];
//     }

//     // evaluate references
//     // const a = Rmap(x => (x instanceof ASTNode), refs); // todo handle errors
//     // this.refs = Rmap(x => (x instanceof ASTNode) ? evaluate(x, _args_vars) : x, refs);
//     this.refs = R.map(
//       (x) =>
//         R.map((y) => (y instanceof ASTNode ? evaluate(y, _args_vars) : y), x),
//       refs
//     ); // todo handle errors
//     this.ast = ast;
//   }

//   getRefs() {
//     return this.refs;
//   }

//   hasErrors = () => this.errors.length > 0;

//   getErrors = () => this.errors;

//   isSingleReference() {
//     if (Object.keys(this.refs).length !== 1) return false;
//     if (R.path(["type"], this.ast) === "Identifier") return true;
//     return false;
//   }

//   evaluate(refs) {
//     // TODO error handling from each function
//     const exprVars = {
//       undefined,
//       true: true,
//       false: false,
//       NaN,
//       Date,
//       ...basicfuncs,
//       ...advfuncs,
//       ...macrofuncs,
//       ...mathfuncs,
//       ...utilfuncs,
//       ...statsfuncs,
//       ...refs,
//       add: mathinternal.binary_plus,
//       sub: mathinternal.binary_minus,
//       mul: mathinternal.binary_times,
//       div: mathinternal.binary_divide,
//       rdiv: mathinternal.binary_reciprocal_divide,
//     };
//     // handle any errors
//     let out;
//     try {
//       out = evaluate(this.ast, exprVars);
//     } catch (error) {
//       this.errors = [error instanceof Error ? error.message : error];
//     }
//     if (R.isNil(out) || Object.keys(out).length === 0) {
//       // handle error
//       this.errors = ["evaluation error"];
//       out = undefined;
//     }
//     return [out, this.errors];
//   }
// }

// export default Evaluator;
