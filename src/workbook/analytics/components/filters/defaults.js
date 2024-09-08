import { AnalyticsKind } from '../../definitions/AnalyticsKind';
import { defaultUIObject } from '../defaults';

export const defaultVariable = {
  wsid: undefined,
  expr: '',
};

export const defaultHPFilterObject = {
  ayid: undefined,
  kind: AnalyticsKind.HPFilter,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    lambda: {
      value: 1600,
    },
    dropna: false,
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
  },
};


export const defaultCFFilterObject = {
  ayid: undefined,
  kind: AnalyticsKind.CFFilter,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    low: {
      value: 6,
    },
    high: {
      value: 32,
    },
    drift: false,
    dropna: false,
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
  },
};


export const defaultBKFilterObject = {
  ayid: undefined,
  kind: AnalyticsKind.BKFilter,
  status: undefined,
  parameters: {
    variable: defaultVariable,
    low: {
      value: 6,
    },
    high: {
      value: 32,
    },
    k: {
      value: 12,
    },
    drift: false,
    dropna: false,
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
  },
};


export const defaultX12Object = {
  ayid: undefined,
  kind: AnalyticsKind.X12,
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
