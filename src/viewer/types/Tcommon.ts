// No need to import 'prop-types' in a TypeScript file

interface SizeType {
  height?: number;
  width?: number;
}

type FreqType = 'D' | 'W' | 'M' | 'Q';

// Expanded DTypeType based on your comment 
type DTypeType = 'float' | 'init' | 'factor' | 'discrete'; 

export { SizeType, FreqType, DTypeType };

// import types from 'prop-types';

// export const SizeType = types.shape({
//   height: types.number,
//   width: types.number,
// });

// export const FreqType = types.oneOf(['D', 'W', 'M', 'Q']);
// export const DTypeType = types.oneOf(['float', 'init']); // todo factor, descrete ???
