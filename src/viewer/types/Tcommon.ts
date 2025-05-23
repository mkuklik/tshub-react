interface IError {
  message: string;
}

interface SizeType {
  height: number;
  width: number;
}

enum IFreq {
  DAILY = "D",
  WEEKLY = "W",
  MONTHLY = "M",
  QUARTERLY = "Q",
  ANNUAL = "A",
}

// Expanded DTypeType based on your comment
enum IDType {
  FLOAT = "float",
  INIT = "init",
  FACTOR = "factor",
  DISCRETE = "discrete",
}

export type { SizeType, IFreq, IDType, IError };

// import types from 'prop-types';

// export const SizeType = types.shape({
//   height: types.number,
//   width: types.number,
// });

// export const FreqType = types.oneOf(['D', 'W', 'M', 'Q']);
// export const DTypeType = types.oneOf(['float', 'init']); // todo factor, descrete ???
