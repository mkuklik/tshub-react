
const undefined_property_node = (name) => ({
  type: 'Property',
  key: {
    type: 'Identifier',
    name,
  },
  value: {
    type: 'Identifier',
    name: 'undefined',
  },
  kind: 'init',
});

const property_node = (name, value) => ({
  type: 'Property',
  key: {
    type: 'Identifier',
    name,
  },
  value: {
    type: 'Literal',
    value,
    raw: `\"${value}\"`,
  },
  kind: 'init',
});

export function refCheck(node, parent) {
  let found = false;
  let spaceName; let collName; let tsName;
  if (node.type === 'MemberExpression') {
    if (node.object.type === 'MemberExpression' && node.object.object.type === 'Identifier' && node.object.object.name.startsWith('$')) {
      // space, coll, tsName are defined
      tsName = node.object.object.name.slice(1);
      if (node.object.property.type === 'Identifier') {
        collName = node.object.property.name;
      } else {
        throw Error('invalid collection name');
      }

      if (node.property.type === 'Identifier') {
        spaceName = node.property.name;
      } else {
        throw Error('invalid space name');
      }
      found = true;
    } else if (node.object.type === 'Identifier' && node.object.name.startsWith('$')) {
      tsName = node.object.name.slice(1);
      if (node.property.type === 'Identifier') {
        collName = node.property.name;
      } else {
        throw Error('invalid collection name');
      }
      spaceName = undefined;
      found = true;
    }
  } else if (node.type === 'Identifier' && node.name.startsWith('$')) {
    tsName = node.name.slice(1) || undefined;
    collName = undefined;
    spaceName = undefined;
    found = true;
  } else {
    tsName = undefined;
    collName = undefined;
    spaceName = undefined;
    found = false;
  }

  // return { found, ref: { tsName, collName, spaceName } }
  return {
    found,
    ref: [
      (tsName === undefined) ? undefined_property_node('tsName') : property_node('tsName', tsName),
      (collName === undefined) ? undefined_property_node('collName') : property_node('collName', collName),
      (spaceName === undefined) ? undefined_property_node('spaceName') : property_node('spaceName', spaceName),
    ],
  };
}
