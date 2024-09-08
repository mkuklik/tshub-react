/* eslint-disable */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { parse, codegen } from 'vega-expression';
import escodegen from 'escodegen';
import estraverse from 'estraverse';

window.__timeseries = {
  log() {
    console.log('my global function');
  },
};

const funcRefCheck = (node, parent) => {
  if (node.type === 'CallExpression') {
    // check callee
    const { found, ref } = refCheck(node.callee, node);
    if (found) {
      // check arguments
      let args = [];
      if (node.arguments.length > 1) {
        throw ('too many arguments');
      } else if (node.arguments.length === 1) {
        if (node.arguments[0].type !== 'ObjectExpression') throw ('argument to time series must be be a object of parameters');
        args = node.arguments[0].properties;
      }
      return {
        found: true,
        ref: [
          ...ref,
          ...args,
        ],
      };
    }
  }
  return refCheck(node, parent);
};


const refCheck = (node, parent) => {
  let found = false;
  let space_name; let coll_name; let
    ts_name;
  if (node.type === 'MemberExpression') {
    if (node.object.type === 'MemberExpression' && node.object.object.type === 'Identifier' && node.object.object.name.startsWith('$')) {
      // space, coll, ts_name are defined
      ts_name = node.object.object.name.slice(1);
      if (node.object.property.type === 'Identifier') {
        coll_name = node.object.property.name;
      } else {
        throw ('invalid collection name');
      }

      if (node.property.type === 'Identifier') {
        space_name = node.property.name;
      } else {
        throw ('invalid space name');
      }
      found = true;
    } else if (node.object.type === 'Identifier' && node.object.name.startsWith('$')) {
      ts_name = node.object.name.slice(1);
      if (node.property.type === 'Identifier') {
        coll_name = node.property.name;
      } else {
        throw ('invalid collection name');
      }
      space_name = undefined;
      found = true;
    }
  } else if (node.type === 'Identifier' && node.name.startsWith('$')) {
    ts_name = node.name.slice(1);
    coll_name = undefined;
    space_name = undefined;
    found = true;
  } else {
    ts_name = undefined;
    coll_name = undefined;
    space_name = undefined;
    found = false;
  }

  // return { found, ref: { ts_name, coll_name, space_name } }
  return {
    found,
    ref: [
      (ts_name === undefined) ? undefined_property_node('ts_name') : property_node('ts_name', ts_name),
      (coll_name === undefined) ? undefined_property_node('coll_name') : property_node('coll_name', coll_name),
      (space_name === undefined) ? undefined_property_node('space_name') : property_node('space_name', space_name),
    ],
  };
};

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

const getNode = (args) => ({
  type: 'CallExpression',
  callee: {
    type: 'Identifier',
    name: 'get',
  },
  arguments: [
    {
      type: 'ObjectExpression',
      properties: [...args],
    },
  ],
});

class ExpressionsParser extends React.Component {
  references = [];

  constructor(props) {
    super(props);
    this.state = {
      expr: '',
      expr_post: '',
      ast: null,
      ast2: null,
    };
  }

  componentDidMount() {
    this.handleChange(null,
      "$gdp + $ts_name.coll_name.space_name + $ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')}) + $gdp({start: index($gdp).first})");
  }

  /*

    transform $ts_name, $ts_name.coll_name, $ts_name.coll_name.space_name,
    $ts_name({realtime: Date("1990-01-01")}) to function get({ts_name: "dfdsf", 
    coll_name:"", space_name: "", realtime: ""})

  */


  transformIdentifiers = (ast) => ast

  /*
    takes set of defined series
    1. parse, transform ast, resolve names, fetch data, and calculate each series
    2. determine frequency of each resolved
    3. if graph frequency is auto, determine graph frequency using the frequency of all the resolved
    4. given graph frequency, transform each series to graph frequency using specified
      method (auto - uses units info to determine best method, ....
    5. currency conversion
    6. select observations based on one of the methods or use range specified by the user


  */

  parseExpression = (expr) => parse(expr)

  evaluate = (ast) => {
    const value = codegen(ast);
    const fn = Function('d', `"use strict";return(${value.code})`);
    return fn();
  }

  checkCollection = (node) => {

  }

  findTimeseriesReferences = (ast) => {
    let refs = [];
    estraverse.traverse(ast, {
      enter(node) {
        if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'get' && node.arguments.length === 1) {
          refs += node.arguments[0].properties;
          console.log(node.arguments[0].properties);
        }
      },
    });
    return refs;
  }

  processAST = (ast) => {
    /*
      - find all time series references in order for them to be fetched
      - replace tiemseries referales with a function
    */
    estraverse.replace(ast, {
      enter(node, parent) {
        const { found, ref } = funcRefCheck(node, parent);
        console.log(found, ref, node);
        if (found) {
          this.references += ref;
          return getNode(ref);
        }
      },
    });
    return ast;
  }

  findGraphFrequency = (graphDefinition, resolvedSeries) => {

  }

  cuccencyConversion = () => {

  }

  funcs = function (codegen) {
    console.log(codegen);

    function fncall(name, args, cast, type) {
      let obj = codegen(args[0]);
      if (cast) {
        obj = `${cast}(${obj})`;
        if (cast.lastIndexOf('new ', 0) === 0) obj = `(${obj})`;
      }
      return `${obj}.${name}${type < 0 ? '' : type === 0
        ? '()'
        : `(${args.slice(1).map(codegen).join(',')})`}`;
    }

    function fn(name, cast, type) {
      return function (args) {
        return fncall(name, args, cast, type);
      };
    }

    const DATE = 'new Date';
    const STRING = 'String';
    const REGEXP = 'RegExp';

    return {
      // MATH functions
      isNaN: 'Number.isNaN',
      isFinite: 'Number.isFinite',
      abs: 'Math.abs',
      acos: 'Math.acos',
      asin: 'Math.asin',
      atan: 'Math.atan',
      atan2: 'Math.atan2',
      ceil: 'Math.ceil',
      cos: 'Math.cos',
      exp: 'Math.exp',
      floor: 'Math.floor',
      log: 'Math.log',
      max: 'Math.max',
      min: 'Math.min',
      pow: 'Math.pow',
      random: 'Math.random',
      round: 'Math.round',
      sin: 'Math.sin',
      sqrt: 'Math.sqrt',
      tan: 'Math.tan',

      get(args) {
        console.log('get', args);
        return `

        dsfsd
        `;
      },

      clamp(args) {
        if (args.length < 3) error('Missing arguments to clamp function.');
        if (args.length > 3) error('Too many arguments to clamp function.');
        const a = args.map(codegen);
        return `Math.max(${a[1]}, Math.min(${a[2]},${a[0]}))`;
      },


    };
  }

  handleChange = (e, _expr) => {
    const expr = (e) ? e.target.value : _expr;
    this.setState({
      expr,
    });

    let ast = null;
    let ast2 = null;
    let expr_post = '';
    try {
      ast = parse(expr);
      ast2 = this.processAST(ast);
      expr_post = escodegen.generate(ast2);
      console.log('refs', this.findTimeseriesReferences(ast2));
      console.log(expr, ast);
      console.log('references', this.references);
    } catch (err) {
      console.error(err);
    }
    this.setState({
      ast, ast2, expr_post,
    });

    this.evaluate(parse('2+2'));

    const g = codegen({ functions: this.funcs })(ast2);
    // const g = codegen({
    //   constants: { "PI": 3.14 },
    //   functions: { lag: x => x - 1 }
    // })(ast2);
    console.log('g', g);
    console.log('code', g.code);


    const fn = Function('d', '"use strict"; __timeseries.log()');
    fn();
  }

  render() {
    const {
      expr, expr_post, ast, ast2,
    } = this.state;

    return (
      <>

        input:
        {' '}
        <input value={expr} onChange={this.handleChange} />
        <br />
        result:
        {' '}
        {expr_post}
        <div>
          <h3>AST</h3>
          <pre>
            {ast && JSON.stringify(ast, null, 2)}
          </pre>
          <h3>AST Post porcessing</h3>
          <pre>
            {ast && JSON.stringify(ast2, null, 2)}
          </pre>

        </div>
      </>
    );
  }
}

ExpressionsParser.defaultProps = {};

ExpressionsParser.propTypes = {

};

const mapStateToProps = (state, ownProps) => ({
  api: state.api,
  ts: state.timeseries[ownProps.tsid],
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExpressionsParser);


/*
  $ts_name
  {
    "type": "Identifier",
    "name": "$ts_name"
  }

  // $ts_name.coll_name
{
  "type": "MemberExpression",
  "computed": false,
  "object": {
    "type": "Identifier",
    "name": "$ts_name"
  },
  "property": {
    "type": "Identifier",
    "name": "coll_name",
    "member": true
  }
}

  // $ts_name.coll_name.space_name
{
  "type": "MemberExpression",
  "computed": false,
  "object": {
    "type": "MemberExpression",
    "computed": false,
    "object": {
      "type": "Identifier",
      "name": "$ts_name"
    },
    "property": {
      "type": "Identifier",
      "name": "coll_name",
      "member": true
    }
  },
  "property": {
    "type": "Identifier",
    "name": "space_name",
    "member": true
  }
}


  // $ts_name({x: "y"})


  // $ts_name.coll_name()


  // $ts_name.coll_name.space_name()

{
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "computed": false,
    "object": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
        "type": "Identifier",
        "name": "$ts_name"
      },
      "property": {
        "type": "Identifier",
        "name": "coll_name",
        "member": true
      }
    },
    "property": {
      "type": "Identifier",
      "name": "space_name",
      "member": true
    }
  },
  "arguments": [
    {
      "type": "ObjectExpression",
      "properties": [
        {
          "type": "Property",
          "key": {
            "type": "Identifier",
            "name": "x"
          },
          "value": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\""
          },
          "kind": "init"
        }
      ]
    }
  ]
}

  */
