import {
  ANALYTICS_CREATE,
  IMPORT_PARAMS_FROM_GRAPH,
  ANALYTICS_RUN,
  ANALYTICS_SAVE_UI,
  ANALYTICS_UPDATE_PARAMETERS,

  // store
  ANALYTICS_SAVE_NEW,
  ANALYTICS_SAVE_PARAMETERS,
  ANALYTICS_SAVE_RESOLVED_PARAMETERS,
  ANALYTICS_SAVE_RESULTS,
  ANALYTICS_SAVE_STATUS,
  ANALYTICS_SAVE_RESTORE_ANALYTICS,
  DELETE_ANALYTICS_OBJECT,
  ANALYTICS_ADD_VARIABLE,
} from './actionTypes';

//
// sagas
//

export const createAnalyticsAction = ({ kind, ayid } = {}) => ({
  type: ANALYTICS_CREATE,
  kind,
  ayid,
});


export const runAnalyticsAction = ({ ayid } = {}) => ({
  type: ANALYTICS_RUN,
  ayid,
});

export const addVariableAction = (ayid, expr) => ({
  type: ANALYTICS_ADD_VARIABLE,
  ayid,
  expr,
});

export const importParametersFromGraphAction = ({ ayid } = {}) => ({
  type: IMPORT_PARAMS_FROM_GRAPH,
  ayid,
});


export const updateAnalyticsParametersAction = ({ ayid, parameters } = {}) => ({
  type: ANALYTICS_UPDATE_PARAMETERS,
  ayid,
  parameters,
});

//
// store
//
export const saveAnalytics = ({ ayid, object } = {}) => ({
  type: ANALYTICS_SAVE_NEW,
  payload: {
    ayid,
    object,
  },
});

export const saveAnalyticsParametersAction = ({ ayid, parameters } = {}) => ({
  type: ANALYTICS_SAVE_PARAMETERS,
  payload: {
    ayid,
    parameters,
  },
});

export const saveResolvedParametersAction = ({ ayid, parameters } = {}) => ({
  type: ANALYTICS_SAVE_RESOLVED_PARAMETERS,
  payload: {
    ayid,
    parameters,
  },
});


export const saveAnalyticsStatus = ({ ayid, status } = {}) => ({
  type: ANALYTICS_SAVE_STATUS,
  payload: {
    ayid,
    status,
  },
});

export const saveAnalyticsResults = ({
  ayid, results, resolvedParameters, errors, warnings, status
} = {}) => ({
  type: ANALYTICS_SAVE_RESULTS,
  payload: {
    ayid,
    results,
    resolvedParameters,
    errors,
    warnings,
    status,
  },
});

export const restoreAnalyticsStoreAction = (store) => ({
  type: ANALYTICS_SAVE_RESTORE_ANALYTICS,
  payload: store,
});

export const deleteAnalyticsObjectAction = (ayid) => ({
  type: DELETE_ANALYTICS_OBJECT,
  payload: {
    ayid,
  },
});

export const updateAnalyticsUIAction = (ayid, ui) => ({
  type: ANALYTICS_SAVE_UI,
  payload: {
    ayid, ui,
  },
});
