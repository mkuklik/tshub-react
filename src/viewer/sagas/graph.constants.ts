export enum GraphProcessingStage {
  RESOLVE = 'resolve',
  DETERMINE = 'determine',
  TRANSFORM = 'transform',
  GENERATE = 'generate',
}

export enum GraphStatus {
  LOADING = 'loading',
  UPDATING = 'updating',
  READY = 'ready',
  ERROR = 'error',
}

export enum SeriesMergeMethod {
  calendar = 'calendar',
  all = 'all',
  any = 'any',
}

export enum PartialPeriodsMethod {
  none = 'none',
  all = 'all',
  any = 'any',
}

export enum ToLowerFrequencyMethod {
  auto = 'auto',
  first = 'first',
  last = 'last',
  flow = 'flow',
  // pc = 'pc',  TODO
  max = 'max',
  min = 'min',
  average = 'average',
}

export enum ToHigherFrequencyMethod {
  auto = 'auto',
  same = 'same',
  dist = 'dist',
  linear = 'linear',
}

export enum MissingValueMethod {
  auto = 'auto',
  none = 'none',
  last = 'last', // fill forward
  zero = 'zero',
  linear = 'linear',
}

export enum GraphFrequencyMethod {
  highest = 'highest',
  lowest = 'lowest',
}



// export const GraphProcessingStage = Object.freeze({
//   RESOLVE: 'resolve',
//   DETERMINE: 'determine',
//   TRANSFORM: 'transform',
//   GENERATE: 'generate',
// });

// export const GraphStatus = Object.freeze({
//   LOADING: 'loading',
//   UPDATING: 'updating',
//   READY: 'ready',
//   ERROR: 'error',
// });

// export const SeriesMergeMethod = Object.freeze({
//   calendar: 'calendar',
//   all: 'all',
//   any: 'any',
// });

// export const PartialPeriodsMethod = Object.freeze({
//   none: 'none',
//   all: 'all',
//   any: 'any',
// });

// export const ToLowerFrequencyMethod = Object.freeze({
//   auto: 'auto',
//   first: 'first',
//   last: 'last',
//   flow: 'flow',
//   // pc: 'pc',  TODO
//   max: 'max',
//   min: 'min',
//   average: 'average',
// });

// export const ToHigherFrequencyMethod = Object.freeze({
//   auto: 'auto',
//   same: 'same',
//   dist: 'dist',
//   linear: 'linear',
// });

// export const MissingValueMethod = Object.freeze({
//   auto: 'auto',
//   none: 'none',
//   last: 'last', // fill forward
//   zero: 'zero',
//   linear: 'linear',
// });

// export const GraphFrequencyMethod = Object.freeze({
//   highest: 'highest',
//   lowest: 'lowest',
// });