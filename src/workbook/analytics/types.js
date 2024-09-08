import types from 'prop-types';
import { AnalyticsKind } from './definitions/AnalyticsKind';

export const AnalyticsKindType = types.oneOf(Object.values(AnalyticsKind));

export const LMAnalyticsType = types.shape({
  ayid: types.string.isRequired,
  kind: AnalyticsKindType,
  parameters: types.object,

  results: types.object,
  diagnostics: types.object,

  errors: types.array,
});

export const LMParameterVariableType = types.shape({
  wsid: types.string,
  expr: types.string,
  realtime: types.instanceOf(Date),
});

export const LMParameterType = types.shape({
  ayid: types.string,
  realtime: types.instanceOf(Date),
  dependent: LMParameterVariableType,
  regressors: types.arrayOf(LMParameterVariableType),
  missing: types.bool,
  addconst: types.bool,
  sampleStart: types.objectOf(Date),
  sampleEnd: types.objectOf(Date),
});

export const AnalyticsType = types.oneOfType([LMAnalyticsType]);
