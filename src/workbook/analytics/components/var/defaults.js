import { AnalyticsKind } from '../../definitions/AnalyticsKind';
import { defaultUIObject } from '../defaults';


export const defaultVariable = {
  wsid: undefined,
  expr: '',
};

export const defaultVARObject = {
  ayid: undefined,
  kind: AnalyticsKind.VAR,
  status: undefined,
  parameters: {
    endogenous: [], // defaultVariable],
    exogenous: [],
    maxlags: {
      value: undefined,
    },
    method: {
      value: 'ols',
    },
    ic: {
      value: 'default',
    },
    trend: {
      value: 'nc',
    },
    dropna: false,
    sampleStart: undefined,
    sampleEnd: undefined,
    errors: undefined,
  },
  results: {},
  diagnostics: {},
  ui: {
    ...defaultUIObject,
    dependent: {
      expr: '',
      error: undefined,
    },
    regressors: {
      expr: '',
      error: undefined,
    },
  },
};
