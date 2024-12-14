import * as mathfuncs from "./timeseries-math-internal";
import * as escodegen from "escodegen";
import { Expression, SequenceExpression } from "estree";

const unparse = escodegen.generate;

type UnaryOperator = "+" | "-" | "~" | "!";
type BinaryOperator =
  | "=="
  | "==="
  | "!="
  | "!=="
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "<"
  | "<="
  | ">"
  | ">="
  | "|"
  | "&"
  | "^";
type LogicalOperator = "&&" | "||";
type Operator = UnaryOperator | BinaryOperator | LogicalOperator;

export default function evaluateTS(
  ast: Expression,
  vars: Record<string, any>
): any {
  // const FAIL = {};
  const FAIL: symbol = Symbol("FAIL"); // Use a Symbol for FAIL

  const walk = (node: Node, scopeVars?: Record<string, any>): any => {
    switch (node.type) {
      case "Literal":
        return node.value!;
      case "UnaryExpression": {
        const val = walk(node.argument!);
        switch (node.operator) {
          case "+":
            return mathfuncs.unary_plus(val);
          case "-":
            return mathfuncs.unary_minus(val);
          case "~":
            return mathfuncs.unary_tilda(val);
          case "!":
            return mathfuncs.unary_not(val);
          default:
            return FAIL;
        }
      }
      case "ArrayExpression":
        return node.elements!.reduce((xs, element) => {
          const x = walk(element);
          return x === FAIL ? FAIL : [...xs, x];
        }, [] as any[]);
      case "ObjectExpression":
        return node.properties!.reduce(
          (obj, prop) => {
            const value = prop.value === null ? prop.value : walk(prop.value);
            return value === FAIL
              ? FAIL
              : { ...obj, [prop.key.value || prop.key.name!]: value };
          },
          {} as Record<string, any>
        );
      case "BinaryExpression":
      case "LogicalExpression": {
        const l = walk(node.left!);
        if (l === FAIL) return FAIL;
        const r = walk(node.right!);
        if (r === FAIL) return FAIL;
        const op = node.operator!;
        switch (op) {
          case "==":
            return l == r;
          case "===":
            return l === r;
          case "!=":
            return l != r;
          case "!==":
            return l !== r;
          case "+":
            return mathfuncs.binary_plus(l, r);
          case "-":
            return mathfuncs.binary_minus(l, r);
          case "*":
            return mathfuncs.binary_times(l, r);
          case "/":
            return mathfuncs.binary_divide(l, r);
          case "%":
            return l % r;
          case "<":
            return l < r;
          case "<=":
            return l <= r;
          case ">":
            return l > r;
          case ">=":
            return l >= r;
          case "|":
            return l | r;
          case "&":
            return l & r;
          case "^":
            return mathfuncs.binary_power(l, r);
          case "&&":
            return l && r;
          case "||":
            return l || r;
          default:
            return FAIL;
        }
      }
      case "Identifier":
        return vars.hasOwnProperty(node.name!) ? vars[node.name!] : FAIL;
      case "ThisExpression":
        return vars!.hasOwnProperty("this") ? vars!.this : FAIL;
      case "CallExpression": {
        const callee = walk(node.callee!);
        if (callee === FAIL || typeof callee !== "function") return FAIL;
        const ctx = node.callee!.object ? walk(node.callee!.object) : FAIL;
        const args = node.arguments!.reduce(
          (args, arg) => (walk(arg) === FAIL ? FAIL : [...args, walk(arg)]),
          [] as any[]
        );
        return args === FAIL
          ? FAIL
          : callee.apply(ctx === FAIL ? null : ctx, args);
      }
      case "MemberExpression": {
        const obj = walk(node.object!);
        if (obj === FAIL || typeof obj === "function") return FAIL;
        if (node.property!.type === "Identifier" && !node.computed) {
          if (isUnsafeProperty(node.property!.name!)) return FAIL;
          return obj[node.property!.name!];
        }
        const prop = walk(node.property!);
        if (prop === null || prop === FAIL || isUnsafeProperty(prop))
          return FAIL;
        return obj[prop];
      }
      case "ConditionalExpression": {
        const val = walk(node.test!);
        return val === FAIL
          ? FAIL
          : val
            ? walk(node.consequent!)
            : walk(node.alternate!);
      }
      case "ExpressionStatement": {
        const val = walk(node.expression!);
        return val === FAIL ? FAIL : val;
      }
      case "ReturnStatement":
        return walk(node.argument!);
      case "FunctionExpression": {
        const bodies = node.body!.body;
        const oldVars = { ...vars };

        for (let i = 0; i < node.params!.length; i++) {
          const key = node.params![i];
          if (key.type === "Identifier") {
            vars![key.name!] = null;
          } else return FAIL;
        }

        for (const body of bodies) {
          if (walk(body) === FAIL) {
            return FAIL;
          }
        }

        Object.assign(vars, oldVars); // Restore vars
        const keys = Object.keys(vars!);
        const vals = keys.map((key) => vars![key]);
        return Function(keys.join(", "), `return ${unparse(node)}`).apply(
          null,
          vals
        );
      }
      case "TemplateLiteral": {
        let str = "";
        for (let i = 0; i < node.expressions!.length; i++) {
          str += walk(node.quasis![i]);
          str += walk(node.expressions![i]);
        }
        str += walk(node.quasis![node.expressions!.length]);
        return str;
      }
      case "TaggedTemplateExpression": {
        const tag = walk(node.tag!);
        const strings = node.quasi!.quasis.map(walk);
        const values = node.quasi!.expressions.map(walk);
        return tag.apply(null, [strings].concat(values));
      }
      case "TemplateElement":
        return node.value!.cooked!;
      default:
        return FAIL;
    }
  };

  const result = walk(ast, vars);
  return result === FAIL ? undefined : result;
}

function isUnsafeProperty(name: string): boolean {
  return name === "constructor" || name === "__proto__";
}

// import * as mathfuncs from './timeseries-math-internal';
// const unparse = require('escodegen').generate;

// export default function (ast, vars) {
//   if (!vars) vars = {};
//   const FAIL = {};

//   const result = (function walk(node, scopeVars) {
//     if (node.type === 'Literal') {
//       return node.value;
//     }
//     if (node.type === 'UnaryExpression') {
//       var val = walk(node.argument);
//       if (node.operator === '+') return mathfuncs.unary_plus(val);
//       if (node.operator === '-') return mathfuncs.unary_minus(val);
//       if (node.operator === '~') return mathfuncs.unary_tilda(val);
//       if (node.operator === '!') return mathfuncs.unary_not(val);
//       return FAIL;
//     }
//     if (node.type === 'ArrayExpression') {
//       const xs = [];
//       for (var i = 0, l = node.elements.length; i < l; i++) {
//         var x = walk(node.elements[i]);
//         if (x === FAIL) return FAIL;
//         xs.push(x);
//       }
//       return xs;
//     }
//     if (node.type === 'ObjectExpression') {
//       var obj = {};
//       for (var i = 0; i < node.properties.length; i++) {
//         var prop = node.properties[i];
//         const value = prop.value === null
//           ? prop.value
//           : walk(prop.value);
//         if (value === FAIL) return FAIL;
//         obj[prop.key.value || prop.key.name] = value;
//       }
//       return obj;
//     }
//     if (node.type === 'BinaryExpression'
//                  || node.type === 'LogicalExpression') {
//       var l = walk(node.left);
//       if (l === FAIL) return FAIL;
//       const r = walk(node.right);
//       if (r === FAIL) return FAIL;

//       const op = node.operator;
//       if (op === '==') return l == r;
//       if (op === '===') return l === r;
//       if (op === '!=') return l != r;
//       if (op === '!==') return l !== r;
//       if (op === '+') return mathfuncs.binary_plus(l, r);
//       if (op === '-') return mathfuncs.binary_minus(l, r);
//       if (op === '*') return mathfuncs.binary_times(l, r);
//       if (op === '/') return mathfuncs.binary_divide(l, r);
//       if (op === '%') return l % r;
//       if (op === '<') return l < r;
//       if (op === '<=') return l <= r;
//       if (op === '>') return l > r;
//       if (op === '>=') return l >= r;
//       if (op === '|') return l | r;
//       if (op === '&') return l & r;
//       if (op === '^') return mathfuncs.binary_power(l, r);
//       if (op === '&&') return l && r;
//       if (op === '||') return l || r;

//       return FAIL;
//     }
//     if (node.type === 'Identifier') {
//       if ({}.hasOwnProperty.call(vars, node.name)) {
//         return vars[node.name];
//       }
//       return FAIL;
//     }
//     if (node.type === 'ThisExpression') {
//       if ({}.hasOwnProperty.call(vars, 'this')) {
//         return vars.this;
//       }
//       return FAIL;
//     }
//     if (node.type === 'CallExpression') {
//       const callee = walk(node.callee);
//       if (callee === FAIL) return FAIL;
//       if (typeof callee !== 'function') return FAIL;

//       let ctx = node.callee.object ? walk(node.callee.object) : FAIL;
//       if (ctx === FAIL) ctx = null;

//       const args = [];
//       for (var i = 0, l = node.arguments.length; i < l; i++) {
//         var x = walk(node.arguments[i]);
//         if (x === FAIL) return FAIL;
//         args.push(x);
//       }
//       return callee.apply(ctx, args);
//     }
//     if (node.type === 'MemberExpression') {
//       var obj = walk(node.object);
//       // do not allow access to methods on Function
//       if ((obj === FAIL) || (typeof obj === 'function')) {
//         return FAIL;
//       }
//       if (node.property.type === 'Identifier' && !node.computed) {
//         if (isUnsafeProperty(node.property.name)) return FAIL;
//         return obj[node.property.name];
//       }
//       var prop = walk(node.property);
//       if (prop === null || prop === FAIL) return FAIL;
//       if (isUnsafeProperty(prop)) return FAIL;
//       return obj[prop];
//     }
//     if (node.type === 'ConditionalExpression') {
//       var val = walk(node.test);
//       if (val === FAIL) return FAIL;
//       return val ? walk(node.consequent) : walk(node.alternate);
//     }
//     if (node.type === 'ExpressionStatement') {
//       var val = walk(node.expression);
//       if (val === FAIL) return FAIL;
//       return val;
//     }
//     if (node.type === 'ReturnStatement') {
//       return walk(node.argument);
//     }
//     if (node.type === 'FunctionExpression') {
//       const bodies = node.body.body;

//       // Create a "scope" for our arguments
//       const oldVars = {};
//       Object.keys(vars).forEach((element) => {
//         oldVars[element] = vars[element];
//       });

//       for (var i = 0; i < node.params.length; i++) {
//         const key = node.params[i];
//         if (key.type == 'Identifier') {
//           vars[key.name] = null;
//         } else return FAIL;
//       }
//       for (var i in bodies) {
//         if (walk(bodies[i]) === FAIL) {
//           return FAIL;
//         }
//       }
//       // restore the vars and scope after we walk
//       vars = oldVars;

//       const keys = Object.keys(vars);
//       const vals = keys.map((key) => vars[key]);
//       return Function(keys.join(', '), `return ${unparse(node)}`).apply(null, vals);
//     }
//     if (node.type === 'TemplateLiteral') {
//       let str = '';
//       for (var i = 0; i < node.expressions.length; i++) {
//         str += walk(node.quasis[i]);
//         str += walk(node.expressions[i]);
//       }
//       str += walk(node.quasis[i]);
//       return str;
//     }
//     if (node.type === 'TaggedTemplateExpression') {
//       const tag = walk(node.tag);
//       const { quasi } = node;
//       const strings = quasi.quasis.map(walk);
//       const values = quasi.expressions.map(walk);
//       return tag.apply(null, [strings].concat(values));
//     }
//     if (node.type === 'TemplateElement') {
//       return node.value.cooked;
//     }
//     return FAIL;
//   }(ast));

//   return result === FAIL ? undefined : result;
// };

// function isUnsafeProperty(name) {
//   return name === 'constructor' || name === '__proto__';
// }
