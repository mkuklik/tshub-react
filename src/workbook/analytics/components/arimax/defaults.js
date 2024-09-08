import { AnalyticsKind } from '../../definitions/AnalyticsKind';
import { defaultUIObject } from '../defaults';


export const defaultVariable = {
  wsid: undefined,
  expr: '',
};

export const defaultLMObject = {
  ayid: undefined,
  kind: AnalyticsKind.LM,
  status: undefined,
  parameters: {
    dependent: defaultVariable,
    regressors: [],
    addconst: true,
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
