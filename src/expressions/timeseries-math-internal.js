import { TS } from './timeseries';
import { seq, start2, end2 } from './timeseries-utils-functions';
// import { max as _max, min as _min, each as _each } from 'lodash';

export function unary_plus(value) {
  if (value instanceof TS) {
    return +value
  } else {
    return +value
  }
}

export function unary_tilda(value) {
  if (value instanceof TS) {
    value.data.forEach(x => ~x[1]);
    return value
  } else {
    return ~value
  }
}

export function unary_not(value) {
  if (value instanceof TS) {
    value.data.forEach(x => !x[1]);
    return value
  } else {
    return !value
  }
}

export function unary_minus(value) {
  if (value instanceof TS) {
    value.data.forEach(x => x[1] = -x[1]);
    return value
  } else {
    return -value
  }
}

export function unary_mark(value) {
  if (value instanceof TS) {
    value.data.forEach(x => !x[1]);
    // value.dtype = 
    // value.freq = 
    // value.units = 
    return value
  } else {
    return !value
  }
}

export function binary_plus(l, r) {
  if (r instanceof TS && l instanceof TS) {
    if (r.freq !== l.freq)
      throw TypeError("Frequency mismatch");
    // TODO determine dtype

    const inx = seq(start2(l, r), end2(l, r), r.freq);
    const data = inx.map(x => {
      const a = l.value(x);
      const b = r.value(x);
      if (a === undefined || b === undefined)
        return [x, undefined]
      else
        return [x, a + b]
    });
    return new TS(data, l.freq, l.dtype) // TODO determine dtype
  }
  else if (r instanceof TS && !(l instanceof TS)) {
    const data = r.indices().map(t => {
      const b = r.value(t);
      if (l === undefined || b === undefined)
        return [t, undefined]
      else
        return [t, l + b]
    });
    return new TS(data, r.freq, r.dtype) // TODO determine dtype
  }
  else if (!(r instanceof TS) && (l instanceof TS)) {
    const data = l.indices().map(t => {
      const a = l.value(t);
      if (r === undefined || a === undefined)
        return [t, undefined]
      else
        return [t, a + r]
    });
    return new TS(data, l.freq, l.dtype) // TODO determine dtype
  }
  else {
    return l + r
  }
}

export function binary_minus(l, r) {
  if (r instanceof TS && l instanceof TS) {
    if (r.freq !== l.freq)
      throw TypeError("Frequency mismatch");
    // TODO determine dtype
    const inx = seq(start2(l, r), end2(l, r), r.freq);
    const data = inx.map(x => [x, l.value(x) - r.value(x)]);
    return new TS(data, l.freq, l.dtype) // TODO determine dtype
  }
  else if (r instanceof TS && !(l instanceof TS)) {
    const data = r.data.map(x => [x[0], l - x[1]]);
    return new TS(data, l.freq, l.dtype) // TODO determine dtype
  }
  else if (!(r instanceof TS) && (l instanceof TS)) {
    const data = l.data.map(x => [x[0], x[1] - r]);
    return new TS(data, l.freq, l.dtype) // TODO determine dtype
  }
  else {
    return l + r
  }
}

export function binary_times(l, r) {
  // todo check types

  if (r instanceof TS && l instanceof TS) {
    if (r.freq !== l.freq)
      throw TypeError("Frequency mismatch");
    // TODO determine dtype
    const inx = seq(start2(l, r), end2(l, r), r.freq);
    const data = inx.map(x => [x, l.value(x) * r.value(x)]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else if (r instanceof TS && !(l instanceof TS)) {
    const data = r.data.map(x => [x[0], l * x[1]]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else if (!(r instanceof TS) && (l instanceof TS)) {
    const data = l.data.map(x => [x[0], x[1] * r]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else {
    return l * r
  }
}

export function binary_divide(l, r) {
  // todo check types

  if (r instanceof TS && l instanceof TS) {
    if (r.freq !== l.freq)
      throw TypeError("Frequency mismatch");
    // TODO determine dtype
    const inx = seq(start2(l, r), end2(l, r), r.freq);
    const data = inx.map(x => [x, l.value(x) / r.value(x)]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else if (r instanceof TS && !(l instanceof TS)) {
    const data = r.data.map(x => [x[0], l / x[1]]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else if (!(r instanceof TS) && (l instanceof TS)) {
    const data = l.data.map(x => [x[0], x[1] / r]);
    return new TS(data, l.freq, 'float') // TODO determine dtype
  }
  else {
    return l / r
  }
}

export function binary_reciprocal_divide(r, l) {
  return binary_divide(l, r);
}

export function binary_power(l, r) {
  if (l instanceof TS && r instanceof TS) {
    throw Error("input error, right input of ^ has to be a number")
  } else if (l instanceof TS && (!r instanceof TS)) {
    const data = l.data.map(x => [x[0], x[1] ^ r]);
    return new TS(data, l.freq, l.dtype) // TODO determine dtype 
  } else {
    return l ^ r
  }
}



export function TSisNaN(x, base) {
  if (base === undefined) throw Error("log: base is undefined");
  if (x instanceof TS) {
    // value.value = 
    // value.dtype = 
    // value.freq = 
    // value.units =
    const data = x.data.map(z => [z[0], isNaN(z[1])]);
    return new TS(data, x.freq, 'bool') // TODO determine dtype
  } else {
    return Math.log(x) / Math.log(base);
  }
}


export function TSisFinite(x, base) {
  if (x instanceof TS) {
    // value.value = 
    // value.dtype = 
    // value.freq = 
    // value.units =
    const data = x.data.map(z => [z[0], isFinite(z[1])]);
    return new TS(data, x.freq, 'bool'); // TODO determine dtype
  } else {
    return Math.log(x) / Math.log(base);
  }
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
