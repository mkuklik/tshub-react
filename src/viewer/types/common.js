import types from 'prop-types';

export const SizeType = types.shape({
  height: types.number,
  width: types.number,
});

export const FreqType = types.oneOf(['D', 'W', 'M', 'Q']);
export const DTypeType = types.oneOf(['float', 'init']); // todo factor, descrete ???
