import { TS } from './timeseries';
import { seq, start2, end2 } from './timeseries-utils-functions';
// import { max as _max, min as _min, each as _each } from 'lodash';

export function ln(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.log(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.log(x);
}

export function log(x, base) {
  if (base === undefined) throw Error('log: base is undefined');
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.log(z[1]) / Math.log(base)]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.log(x) / Math.log(base);
}

export function abs(x, base) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.abs(z[1])]);
    return new TS(data, x.freq, 'bool'); // TODO determine dtype
  }
  return Math.abs(x);
}

export function max(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    return Math.max(...x.values());
  }
  return x;
}

export function min(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    return Math.min(...x.values());
  }
  return x;
}

// export function max(x) {
//   if (x instanceof TS) {
//     const array = x.toArray();
//     return _max(array);
//   } else {
//     return Math.max(x)
//   }
// };

// export function min(x) {
//   if (x instanceof TS) {
//     const array = x.toArray();
//     return _min(array);
//   } else {
//     return Math.min(x)
//   }
// };

export function ceil(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.ceil(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.ceil(x);
}

export function floor(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.floor(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.floor(x);
}

export function sqrt(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.sqrt(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.sqrt(x);
}

export function sin(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.sin(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.sin(x);
}

export function cos(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.cos(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.cos(x);
}

export function tan(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.tan(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.tan(x);
}

export function round(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.round(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.round(x);
}

export function exp(x) {
  if (x instanceof TS) {
    // value.value =
    // value.dtype =
    // value.freq =
    // value.units =
    const data = x.data.map((z) => [z[0], Math.exp(z[1])]);
    return new TS(data, x.freq, x.dtype); // TODO determine dtype
  }
  return Math.exp(x);
}

// abs:      'Math.abs',
// acos:     'Math.acos',
// asin:     'Math.asin',
// atan:     'Math.atan',
// atan2:    'Math.atan2',
// ceil:     'Math.ceil',
// cos:      'Math.cos',
// exp:      'Math.exp',
// floor:    'Math.floor',
// max:      'Math.max',
// min:      'Math.min',
// pow:      'Math.pow',
// random:   'Math.random',
// round:    'Math.round',
// sin:      'Math.sin',
// sqrt:     'Math.sqrt',
// tan:      'Math.tan',

// export function abs(ts) {
//   /* absolute value */
//   if (x instanceof TS) {
//     const array = x.toArray();
//     return _max(array);
//   } else {
//     return Math.max(x)
//   }
// }

// export function aggsun(ts) {

// }

// export function max(x) {
//   if (x instanceof TS) {
//     const array = x.toArray();
//     return _max(array);
//   } else {
//     return Math.max(x)
//   }
// };

// export function min(x) {
//   if (x instanceof TS) {
//     const array = x.toArray();
//     return _min(array);
//   } else {
//     return Math.min(x)
//   }
// };
