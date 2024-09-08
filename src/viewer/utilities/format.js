export const getFormat = (freq) => {
  switch (freq) {
    case 'Q':
      return '%Y Q%q';
    case 'M':
      return '%Y M%m';
    case 'W':
      return '%Y W%W';
    case 'D':
      return '%Y/%m/%d';
    case 'A':
      return '%Y';
    default:
      return '%Y/%m/%d';
  }
};


export const dateFormat = (freq) => {
  switch (freq) {
    case 'D':
      return 'YYYY-MM-DD';
    case 'M':
      return 'YYYY-MM';
    case 'Q':
      return 'YYYY [Q]Q';
    case 'W':
      return 'YYYY [W]WW';
    case 'A':
      return 'YYYY';
    default:
      return undefined;
  }
};
