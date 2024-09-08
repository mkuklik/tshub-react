import { map as Rmap } from 'ramda';
import { parse } from './parser';
import evaluate from './evaluate';
import { ASTNode } from 'vega-expression';
// import moment from 'moment';
// import { TS } from './timeseries';
// import { create_tsD, create_tsD2 } from './timeseries.test';

const expr1 = "$ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')})";
const expr2 = "$gdp + $ts_name.coll_name.space_name + $ts_name.coll_name({start: '2019-01-01', realtime: Date('2020-01-01')}) + $gdp({start: index($gdp).first})";


test('parser_debugging', () => {
  const { ast, refs } = parse('$gdp');

  console.log(ast);
  console.log(refs);

  const _refs = Rmap(x => Rmap(y => (y instanceof ASTNode) ? evaluate(y, {}) : y, x), refs); 

  const e = evaluate(ast, {
    undefined,
    '_ref0': 'abc'
  });
  expect(e).toStrictEqual('abc');
  expect(Object.keys(refs)).toContain('_ref0');

  const { ast: ast2, refs: refs2 } = parse(expr2);
  console.log(ast2);
  console.log(refs2);
  const _refs2 = Rmap(x => Rmap(y => (y instanceof ASTNode) ? evaluate(y, {Date: Date}) : y, x), refs2); 
  expect(Object.keys(refs)).toContain('_ref0');

  const e2 = evaluate(ast2, {
    undefined,
    '_ref0': 1,
    '_ref1': 2,
    '_ref2': 3,
    '_ref3': 4,
  });
  expect(e2).toStrictEqual(10);
  expect(Object.keys(refs2)).toContain('_ref0');
  expect(Object.keys(refs2._ref0)).toContain('ts_name');
  expect(Object.keys(refs2._ref0)).toContain('coll_name');
  expect(Object.keys(refs2._ref0)).toContain('space_name');
  expect(Object.keys(refs2._ref2)).toContain('start');
  expect(Object.keys(refs2._ref2)).toContain('realtime');

});


test('parser simple', () => {
  const { ast, refs } = parse('$gdp');

  console.log(ast);
  console.log(refs);

  const _refs = Rmap(x => Rmap(y => (y instanceof ASTNode) ? evaluate(y, {}) : y, x), refs); 

  const e = evaluate(ast, {
    undefined,
    '_ref0': 'abc'
  });
  expect(e).toStrictEqual('abc');
  expect(Object.keys(refs)).toContain('_ref0');
  expect(Object.keys(refs._ref0)).toContain('ts_name');
  expect(Object.keys(refs._ref0)).toContain('coll_name');
  expect(Object.keys(refs._ref0)).toContain('space_name');

  expect(refs._ref0.ts_name).toStrictEqual('gdp')
  expect(refs._ref0.coll_name).toBeUndefined();
  expect(refs._ref0.space_name).toBeUndefined();

});

test('parser expr1', () => {
  const { ast, refs: rawRefs } = parse(expr1);
  const refs = Rmap(x => Rmap(y => (y instanceof ASTNode) ? evaluate(y, {Date: Date}) : y, x), rawRefs); 
  const val = evaluate(ast, {
    undefined,
    '_ref0': 'abc'
  });
  expect(val).toStrictEqual('abc');
  expect(Object.keys(refs)).toContain('_ref0');

  expect(Object.keys(refs._ref0)).toContain('ts_name');
  expect(Object.keys(refs._ref0)).toContain('coll_name');
  expect(Object.keys(refs._ref0)).toContain('space_name');
  expect(Object.keys(refs._ref0)).toContain('start');
  expect(Object.keys(refs._ref0)).toContain('realtime');
  
  expect(refs._ref0.ts_name).toStrictEqual('ts_name')
  expect(refs._ref0.coll_name).toStrictEqual('coll_name')
  expect(refs._ref0.space_name).toBeUndefined();

});


test('parser expr2', () => {
  const { ast, refs: rawRefs } = parse(expr2);
  const refs = Rmap(x => Rmap(y => (y instanceof ASTNode) ? evaluate(y, {Date: Date}) : y, x), rawRefs); 
  const val = evaluate(ast, {
    undefined,
    '_ref0': 1,
    '_ref1': 2,
    '_ref2': 3,
    '_ref3': 4,
  });
  expect(val).toStrictEqual(10);

  expect(Object.keys(refs)).toContain('_ref0');
  expect(Object.keys(refs)).toContain('_ref1');
  expect(Object.keys(refs)).toContain('_ref2');
  expect(Object.keys(refs)).toContain('_ref3');

  // expect(Object.keys(refs._ref0)).toContain('ts_name');
  // expect(Object.keys(refs._ref0)).toContain('coll_name');
  // expect(Object.keys(refs._ref0)).toContain('space_name');
  // expect(Object.keys(refs._ref0)).toContain('start');
  // expect(Object.keys(refs._ref0)).toContain('realtime');
  
  // expect(Object.keys(refs._ref0.ts_name)).toStrictEqual('ts_name')
  // expect(Object.keys(refs._ref0.coll_name)).toStrictEqual('coll_name')
  // expect(Object.keys(refs._ref0.space_name)).toBeUndefined();

});

// TODO all the error handling and reporting

// test('parse and evalue plus with Left scalar', () => {
//   const { ast, refs } = parse('2+$gdp');

//   console.log(ast);
//   console.log(refs);
// });


// test('parse and evalue plus with Right scalar', () => {
//   const { ast, refs } = parse('$gdp + 4');
//   const e = evaluate(ast, {
//     undefined,
//     get(name) {
//       return create_tsD();
//     },
//   });
//   expect(e).toBeDefined();
//   expect(e instanceof TS).toBeTruthy();
//   const expected = create_tsD();
//   e.data.map((x) => expect(x[1]).toBeCloseTo(4 + expected.value(x[0])));
// });

