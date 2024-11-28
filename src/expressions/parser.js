import { parseExpression, ASTNode } from "vega-expression";
import estraverse from "estraverse";
import { mergeAll, mapObjIndexed, any } from "ramda";
import { refCheck } from "./refCheck";
import moment from "moment";

const allowedKeyNames = [
  "tsName",
  "collName",
  "spaceName",
  "start",
  "end",
  "realtime",
  "tsid",
  "collId",
  "wsid",
];

const IdentifierNode = (name) => {
  const node = new ASTNode("Identifier");
  node.name = name;
  return node;
};

const refNode = (_ref) => ({
  type: "Identifier",
  name: _ref,
});

const ref2obj = (x) => {
  // check if key is supported
  if (x.key.type !== "Identifier" || !allowedKeyNames.includes(x.key.name)) {
    // report error
    throw Error(`unsupported property, ${x.key.name}`);
  }
  // extract the stuff we need, i.e. either value or ASTNode
  if (x.value instanceof ASTNode) {
    // check validity of keys
    if (x.key.name === "realtime") {
      if (x.value instanceof ASTNode && x.value.type === "Literal") {
        const tmp = moment.utc(x.value.value, undefined, true);
        if (!tmp.isValid()) {
          throw Error(`invalid realtime date, ${x.value}`);
        }
        return { [x.key.name]: tmp };
      }
    }
    return { [x.key.name]: x.value };
  }
  if (x.value instanceof Object && x.value.type === "Literal") {
    return { [x.key.name]: x.value.value };
  }
  if (x.value instanceof Object && x.value.type === "Identifier") {
    return { [x.key.name]: IdentifierNode(x.value.value) };
  }

  // this is error
  // todo handle it, i.e. propagate
  return {};
};

const funcRefCheck = (node, parent) => {
  if (node.type === "CallExpression") {
    // check callee
    const { found, ref } = refCheck(node.callee, node);
    if (found) {
      // check arguments
      let args = [];
      if (node.arguments.length > 1) {
        throw Error("too many arguments");
      } else if (node.arguments.length === 1) {
        if (node.arguments[0].type !== "ObjectExpression")
          throw Error(
            "argument to time series must be be a object of parameters"
          );
        args = node.arguments[0].properties;
      }
      return {
        found: true,
        ref: [...ref, ...args],
      };
    }
  }
  return refCheck(node, parent);
};

// const getNode = (args) => ({
//   type: 'CallExpression',
//   callee: {
//     type: 'Identifier',
//     name: 'get',
//   },
//   arguments: [
//     {
//       type: 'ObjectExpression',
//       properties: [...args],
//     },
//   ],
// });

export function processAST(ast) {
  /*
    - find all time series references in order for them to be fetched
    - replace tiemseries referales with a function call get({tsName, collName, spaceName})
  */
  const references = {};
  let ref_id = 0;
  const augAST = estraverse.replace(ast, {
    enter(node, parent) {
      const { found, ref } = funcRefCheck(node, parent);
      // console.log(found, ref, node);
      // if (found) {
      //   references.push(ref);
      //   return getNode(ref);
      // }
      if (found) {
        // references.push(ref);
        const _ref = `_ref${ref_id}`;
        references[_ref] = ref;
        ref_id++;
        return refNode(_ref);
      }
    },
  });
  return { ast: augAST, references };
}

export function parse(expr) {
  /*
  -
  */
  const vegaAST = parseExpression(expr);
  const { ast, references } = processAST(vegaAST);

  // Todo, evaluate references that are AST trees, e.g. someone could have put Date("2000-01-01") in realtime parameter

  // const refs = references.map( (r, i) => mergeAll([{_ref: i}, ...r.map(x => ref2obj(x))]));
  // const refs = RmapObjIndexed((i, key, obj) => RmergeAll([{ ref: key }, ...obj[key].map(x => ref2obj(x))]), references);
  const refs = mapObjIndexed(
    (i, key, obj) => mergeAll(obj[key].map((x) => ref2obj(x))),
    references
  );

  // check references
  for (const ref in refs) {
    if (ref.wsid !== undefined) {
      // then tsName, collName, spaceName, tsid, collId are not allowed
      const notAllowed = ["tsName", "collName", "spaceName", "tsid", "collId"];
      if (any(notAllowed.map((r) => ref[r])))
        throw Error(
          "workbook series reference can't contain 'tsName', 'collName', 'spaceName', 'tsid', or 'collId'"
        );
    }

    if (ref.tsid !== undefined || ref.collId !== undefined) {
      const notAllowed = ["tsName", "collName", "spaceName", "wsid"];
      if (any(notAllowed.map((r) => ref[r])))
        throw Error(
          "workbook series reference can't contain 'tsName', 'collName', 'spaceName', 'tsid', or 'collId'"
        );
    }
  }
  return { ast, refs };
}
