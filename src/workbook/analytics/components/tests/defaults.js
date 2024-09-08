import { AnalyticsKind } from '../../definitions/AnalyticsKind';
import { defaultUIObject } from '../defaults';

export const defaultVariable = {
  wsid: undefined,
  expr: '',
  freq: undefined,
  units: undefined,
};

export const defaultADFTestObject = {
  ayid: undefined,
  kind: AnalyticsKind.ADF,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    maxlag: {
      value: undefined,
    },
    regression: {
      value: 'c',
    },
    autolag: {
      value: 'AIC',
    },
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
  },
};


export const defaultKPSSTestObject = {
  ayid: undefined,
  kind: AnalyticsKind.KPSS,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    regression: {
      value: 'c',
    },
    autolag: {
      value: 'legacy',
    },
    nlags: {
      value: undefined,
    },
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
  },
};


export const defaultPPTestObject = {
  ayid: undefined,
  kind: AnalyticsKind.PP,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    regression: {
      value: 'c',
    },
    autolag: {
      value: 'auto',
    },
    nlags: {
      value: undefined,
    },
    type: {
      value: 'tau',
    },
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
  },
};


export const defaultCointTestObject = {
  ayid: undefined,
  kind: AnalyticsKind.Coint,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    maxlag: {
      value: undefined,
    },
    regression: {
      value: 'c',
    },
    autolag: {
      value: 'AIC',
    },
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
  },
};


export const defaultAutocorrelationObject = {
  ayid: undefined,
  kind: AnalyticsKind.Autocorrelation,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    transformation: {
      value: 'level',
    },
    nlags: {
      value: 30,
    },
    dropna: false,
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
  },
};


export const defaultDescriptiveStatsObject = {
  ayid: undefined,
  kind: AnalyticsKind.Descriptive,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    dropna: false,
    procentiles: {
      values: undefined,
    },
    nbins: {
      value: undefined,
    },
    errors: undefined,
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    variable: {
      expr: '',
      error: undefined,
    },
    procentiles: {
      text: '25, 75',
      error: undefined,
    },
  },
};
