import types from 'prop-types';

export const steps = types.arrayOf(types.shape({
  'selector': types.string,
  'content': types.oneOfType([
    types.node,
    types.element,
    types.func,
  ]).isRequired,
  'position':types.oneOfType([
    types.arrayOf(types.number),
    types.oneOf(['top', 'right', 'bottom', 'left', 'center']),
  ]),
  'action': types.func,
  'style': types.object,
  'stepInteraction': types.bool,
  'navDotAriaLabel': types.string,
})),
