/* eslint-disable import/prefer-default-export */
export const AnalyticsKind = Object.freeze({
  LM: 'LM',
  VAR: 'VAR',
  ARIMAX: 'ARIMAX',
  UnitRoot: 'unitroot',
  Autocorrelation: 'Autocorrelation',

  // tests
  Descriptive: 'Descriptive',
  ADF: 'ADF',
  KPSS: 'KPSS',
  PP: 'PP',
  Coint: 'Coint',
  ZA: 'ZA',  // Zivot-Andrews

  // filters
  HPFilter: 'HPFilter',
  CFFilter: 'CFFilter',
  BKFilter: 'BKFilter',
  X12: 'X12',
});
