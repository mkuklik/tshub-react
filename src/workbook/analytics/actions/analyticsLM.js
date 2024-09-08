import {
  ANALYTICS_LM_REGRESSOR,
  ANALYTICS_LM_DEPENDENT,
  ANALYTICS_LM_GRAPHS,
  ANALYTICS_ADD_VARIABLE_TO_LIST,
} from './actionTypes';


export const analyticsLMAddRegressorAction = (ayid, expr) => ({
  type: ANALYTICS_LM_REGRESSOR,
  ayid,
  expr,
});


export const analyticsAddVariableToListAction = ({ ayid, expr, paramName }) => ({
  type: ANALYTICS_ADD_VARIABLE_TO_LIST,
  ayid,
  expr,
  paramName,
});


export const analyticsLMAddDependentAction = (ayid, expr) => ({
  type: ANALYTICS_LM_DEPENDENT,
  ayid,
  expr,
});


export const analyticsLMGraphsAction = (ayid, name, create) => ({
  type: ANALYTICS_LM_GRAPHS,
  ayid,
  name,
  create,
});
