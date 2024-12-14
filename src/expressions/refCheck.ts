import { ObjectExpression, Property } from "estree";
import { bool } from "prop-types";
import { any } from "ramda";

const undefined_property_node = (name): Property => ({
  type: "Property",
  key: {
    type: "Identifier",
    name,
  },
  value: {
    type: "Identifier",
    name: "undefined",
  },
  kind: "init",
});

const literal_property_node = (name, value): Property => ({
  type: "Property",
  key: {
    type: "Identifier",
    name,
  },
  value: {
    type: "Literal",
    value,
    raw: `\"${value}\"`,
  },
  kind: "init",
});

/**
 * Checks if a node's callee is a sole '$' identifier,
 * meaning it starts with '$' and has no member expressions.
 *
 * @param callee The callee node to check.
 * @returns True if the callee is a sole '$' identifier, false otherwise.
 */
function isDollarOnly(callee: Node): boolean {
  return callee.type === "Identifier" && callee.name.startsWith("$");
}

export interface RefCheckResult {
  found: boolean;
  ref: Property[];
}

// TODO: make sure undefined fields are not in refs
// TODO: support for ${id: 'abc'}, which has to return only parameters supplied in ref

//
// Covered Cases:
//
// $ts_name => Identifier { name = $ts_name }
// $ts_name.coll_name => MemberExpression { object = Identifier {name = $ts_name} , property = Identifier { name = coll_name }}
// $ts_name.coll_name.space_node => MemberExpression {
//      object = MemberExpression { object =  Identifier { name = $ts_name } , property = Identifier { name = coll_name }},
//      property = Identifier { name = space_na,e }
//    }

// $ts_name({...}) => CallExpression = { callee = Identifier { name = $ts_name }, arguments = []}
// $ts_name.coll_name({}) => CallExpression { callee = MemberExpression, arguments = []}
// $ts_name.coll_name.space_node() => ....
//
// Workbook
// $({ wsid: 'sada', realtime: ""}) => CallExpression
//  in this case there can not be any reference to tshub or fred series
//
// FRED
//
// fred('gdp') => CallExpression
// fred({id:'gdp'}) => CallExpression
// only refs allowed are realtime, and id

/**
 * Checks if the given node is a reference to a collection.
 * @param node The node to check.
 * @param parent The parent node.
 * @returns A RefCheckResult object containing a boolean indicating whether a reference was found and an array of properties representing the reference.
 */

const tshubAllowedProperties: string[] = [
  "tsid",
  "collId",
  "spaceId",
  "realtime",
];
const fredAllowedProperties: string[] = ["id", "realtime"];

/**
 * Checks if an array of properties contains only allowed properties for FRED.
 *
 * @param properties An array of Property objects.
 * @returns True if all properties are allowed, false otherwise.
 */
function checkForAllowedProperties(
  properties: Property[],
  allowed: string[]
): boolean {
  if (!properties) return true;
  return properties.every(
    (prop) => prop.key.type === "Identifier" && allowed.includes(prop.key.name)
  );
}

export const refCheck = (
  node: Expression,
  parent: Expression
): RefCheckResult => {
  //
  // ...({...})
  //
  if (node.type === "CallExpression") {
    let found = false;
    if (
      node.callee.type === "Identifier" &&
      (node.callee.name === "fred" || node.callee.name === "FRED")
    ) {
      //
      // fred('gdp') or fred({id: 'gdp', realtime: '2009-01-01'})
      //
      const ref: Property[] = [literal_property_node("source", "fred")];
      if (node.arguments && node.arguments.length === 0) {
        throw Error("missing argument to FRED reference");
      } else if (node.arguments && node.arguments.length > 1) {
        throw Error("too many arguments");
      } else if (
        node.arguments.length === 1 &&
        node.arguments[0].type === "ObjectExpression"
      ) {
        //
        // fred({id: 'gdp'})
        //
        if (
          !checkForAllowedProperties(
            node.arguments[0].properties,
            fredAllowedProperties
          )
        ) {
          throw Error(
            `FRED reference only support ${fredAllowedProperties.join(",")}`
          );
        }
        found = true;
        ref.push(...node.arguments[0].properties);
      } else if (
        node.arguments.length === 1 &&
        node.arguments[0].type === "Literal"
      ) {
        //
        // fred('gdp')
        //
        found = true;
        ref.push(literal_property_node("id", node.arguments[0].value));
      } else {
        throw Error(
          "argument to FRED reference must be a string literal or a object of parameters"
        );
      }
      return {
        found,
        ref,
      };
    } else {
      ///
      // $ts_name(...), $ts_name.coll_name(...), $ts_name.coll_name.space_name(...)
      //
      const { found, ref: _ref } = checkDottedNames(node.callee, parent);
      if (found) {
        // extract key-values from object argument, i.e. $abc({ key1: value1, ... })
        let args: Property[] = [];
        if (node.arguments && node.arguments.length > 1) {
          throw Error("too many arguments");
        } else if (node.arguments && node.arguments.length === 1) {
          if (node.arguments[0].type !== "ObjectExpression")
            throw Error("argument to reference must be a object of parameters");
          args = node.arguments[0].properties;
        }

        let ref = [..._ref, ...args];
        const refMap = ref.reduce((acc, curr) => {
          acc[curr.key.name] = curr.value.value;
          return acc;
        }, {});
        const refKeys = Object.keys(refMap);

        // TODO, here we can endup with $ts_name, but also ${ x: 'a'}
        // this is a special case where type of properties determines the source.
        if (refMap["source"] === undefined) {
          // This is ${ x: 'a'} case
          // TODO figure out the source based on Property's
          // e.g. tsname, space_name, etc. => tshub

          if ("wsid" in refMap) {
            // check references
            const notAllowed = [
              "tsName",
              "collName",
              "spaceName",
              "tsid",
              "collId",
            ];
            if (any(notAllowed.map((r) => refMap[r] !== undefined)))
              throw Error(
                "workbook series reference can't contain 'tsName', 'collName', 'spaceName', 'tsid', or 'collId'"
              );

            refMap["source"] = "workbook";
          }
        }

        ref = [];
        for (const key in refMap) {
          if (refMap.hasOwnProperty(key)) {
            const value = refMap[key];
            if (value === undefined) {
              ref.push(undefined_property_node(key));
            } else {
              ref.push(literal_property_node(key, value));
            }
          }
        }

        return {
          found,
          ref,
        };
      }
    }
  }
  //
  // $ts_name, $ts_name.coll_name, $ts_name.coll_name.space_name
  //
  return checkDottedNames(node, parent);
};

/**
 * Checks if the given node is a dotted name, i.e. $ts_name, $ts_name.coll_name, or $ts_name.coll_name.space_name.
 * @param node The node to check.
 * @param parent The parent node.
 * @returns A RefCheckResult object containing a boolean indicating whether a dotted name was found and an array of properties representing the dotted name.
 */
function checkDottedNames(node, parent): RefCheckResult {
  let found = false;
  let spaceName;
  let collName;
  let tsName;
  let id;
  let source;

  if (node.type === "MemberExpression") {
    if (
      node.object.type === "MemberExpression" &&
      node.object.object.type === "Identifier" &&
      node.object.object.name.startsWith("$")
    ) {
      // "$ts_name.coll_name.space_name"
      // space, coll, tsName are defined
      tsName = node.object.object.name.slice(1);
      if (node.object.property.type === "Identifier") {
        collName = node.object.property.name;
      } else {
        throw Error("invalid collection name");
      }

      if (node.property.type === "Identifier") {
        spaceName = node.property.name;
      } else {
        throw Error("invalid space name");
      }
      source = "tshub";
      found = true;
    } else if (
      node.object.type === "Identifier" &&
      node.object.name.startsWith("$")
    ) {
      // $ts_name.coll_name
      tsName = node.object.name.slice(1);
      if (node.property.type === "Identifier") {
        collName = node.property.name;
      } else {
        throw Error("invalid collection name");
      }
      spaceName = undefined;
      source = "tshub";
      found = true;
    }
  } else if (node.type === "Identifier" && node.name === "$") {
    // TODO, cover case for $({}). Here source will depend on the properties
    // $({ wsid: 'fdsf'}) is a source=workbook,
    // $({ tsid: 'fdsf'}) is a source=tshub,
    tsName = undefined;
    collName = undefined;
    spaceName = undefined;
    source = undefined;
    found = true;
  } else if (node.type === "Identifier" && node.name.startsWith("$")) {
    // "$ts_name"
    tsName = node.name.slice(1) || undefined;
    collName = undefined;
    spaceName = undefined;
    source = "tshub";
    found = true;
  }

  // return { found, ref: { tsName, collName, spaceName } }
  let ref;
  if (found) {
    ref = [
      tsName === undefined
        ? undefined_property_node("tsName")
        : literal_property_node("tsName", tsName),
      collName === undefined
        ? undefined_property_node("collName")
        : literal_property_node("collName", collName),
      spaceName === undefined
        ? undefined_property_node("spaceName")
        : literal_property_node("spaceName", spaceName),
      id === undefined
        ? undefined_property_node("id")
        : literal_property_node("id", id),
      source === undefined
        ? undefined_property_node("source")
        : literal_property_node("source", source),
    ];
  }
  return {
    found,
    ref,
  };
}
