import moment from 'moment';

export const chronosToMoment = (data) => {
  // data is TimeSeriesObservatiosn object fetched from the pipe
  if (data.indexFormat === 'ms') return data.index.map((e, i) => [moment.utc(e / 1000), data.values[i]]);

  throw Error('unsupported format');
};


export const chronosToTimestamp = (data) => {
  // data is TimeSeriesObservatiosn object fetched from the pipe
  if (data.indexFormat === 'ms') return data.index.map((e, i) => [e / 1000, data.values[i]]);

  throw Error('unsupported format');
};

export const TSToChronos = (ts) => {
  // TODO
  // if (ts.indexFormat === 'ms')
  //   return ts.index.map((e, i) => [e / 1000, ts.values[i]]);
  // else {
  //   throw Error('unsupported format');
  // }
};
