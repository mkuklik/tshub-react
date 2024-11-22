//
// actionTypes.ts
//
export const ANALYTICS_CREATE = "ANALYTICS_CREATE";
export const IMPORT_PARAMS_FROM_GRAPH = "IMPORT_PARAMS_FROM_GRAPH";
export const ANALYTICS_RUN = "ANALYTICS_RUN";
export const ANALYTICS_SAVE_UI = "ANALYTICS_SAVE_UI";
export const ANALYTICS_UPDATE_PARAMETERS = "ANALYTICS_UPDATE_PARAMETERS";

// store
export const ANALYTICS_SAVE_NEW = "ANALYTICS_SAVE_NEW";
export const ANALYTICS_SAVE_PARAMETERS = "ANALYTICS_SAVE_PARAMETERS";
export const ANALYTICS_SAVE_RESOLVED_PARAMETERS =
  "ANALYTICS_SAVE_RESOLVED_PARAMETERS";
export const ANALYTICS_SAVE_RESULTS = "ANALYTICS_SAVE_RESULTS";
export const ANALYTICS_SAVE_STATUS = "ANALYTICS_SAVE_STATUS";
export const ANALYTICS_SAVE_RESTORE_ANALYTICS =
  "ANALYTICS_SAVE_RESTORE_ANALYTICS";
export const DELETE_ANALYTICS_OBJECT = "DELETE_ANALYTICS_OBJECT";
export const ANALYTICS_ADD_VARIABLE = "ANALYTICS_ADD_VARIABLE";

export interface ICreateAnalyticsAction {
  type: typeof ANALYTICS_CREATE;
  kind: string;
  ayid: string;
}

export const createAnalyticsAction = ({
  kind,
  ayid,
}:{
  kind: string;
  ayid: string;
}): ICreateAnalyticsAction => ({
  type: ANALYTICS_CREATE,
  kind,
  ayid,
});

export interface IRunAnalyticsAction {
  type: typeof ANALYTICS_RUN;
  ayid: string;
}

export const runAnalyticsAction = ({
  ayid,
}: {
  ayid: string;
}): IRunAnalyticsAction => ({
  type: ANALYTICS_RUN,
  ayid,
});

export interface IAddVariableAction {
  type: typeof ANALYTICS_ADD_VARIABLE;
  ayid: string;
  expr: string;
}

export const addVariableAction = (
  ayid: string,
  expr: string
): IAddVariableAction => ({
  type: ANALYTICS_ADD_VARIABLE,
  ayid,
  expr,
});

export interface IImportParametersFromGraphAction {
  type: typeof IMPORT_PARAMS_FROM_GRAPH;
  ayid: string;
}

export const importParametersFromGraphAction = ({
  ayid,
}: {
  ayid: string;
}): IImportParametersFromGraphAction => ({
  type: IMPORT_PARAMS_FROM_GRAPH,
  ayid,
});

export interface IUpdateAnalyticsParametersAction {
  type: typeof ANALYTICS_UPDATE_PARAMETERS;
  ayid: string;
  parameters?: any; // Replace 'any' with the actual type of 'parameters'
}

export const updateAnalyticsParametersAction = ({
  ayid,
  parameters,
}: {
  ayid: string;
  parameters: any;
}): IUpdateAnalyticsParametersAction => ({
  type: ANALYTICS_UPDATE_PARAMETERS,
  ayid,
  parameters,
});

//
// store
//

export interface ISaveAnalyticsAction {
  type: typeof ANALYTICS_SAVE_NEW;
  payload: {
    ayid: string;
    object?: any; // Replace 'any' with the actual type of 'object'
  };
}

export const saveAnalytics = ({
  ayid,
  object,
}: {
  ayid: string;
  object: any;
}): ISaveAnalyticsAction => ({
  type: ANALYTICS_SAVE_NEW,
  payload: {
    ayid,
    object,
  },
});

export interface ISaveAnalyticsParametersAction {
  type: typeof ANALYTICS_SAVE_PARAMETERS;
  payload: {
    ayid: string;
    parameters?: any; // Replace 'any' with the actual type of 'parameters'
  };
}

export const saveAnalyticsParametersAction = ({
  ayid,
  parameters,
}: {
  ayid: string;
  parameters: any;
}): ISaveAnalyticsParametersAction => ({
  type: ANALYTICS_SAVE_PARAMETERS,
  payload: {
    ayid,
    parameters,
  },
});

export interface ISaveResolvedParametersAction {
  type: typeof ANALYTICS_SAVE_RESOLVED_PARAMETERS;
  payload: {
    ayid: string;
    parameters?: any; // Replace 'any' with the actual type of 'parameters'
  };
}

export const saveResolvedParametersAction = ({
  ayid,
  parameters,
}: {
  ayid: string;
  parameters: any;
}): ISaveResolvedParametersAction => ({
  type: ANALYTICS_SAVE_RESOLVED_PARAMETERS,
  payload: {
    ayid,
    parameters,
  },
});

export interface ISaveAnalyticsStatusAction {
  type: typeof ANALYTICS_SAVE_STATUS;
  payload: {
    ayid: string;
    status?: any; // Replace 'any' with the actual type of 'status'
  };
}

export const saveAnalyticsStatus = ({
  ayid,
  status,
}: {
  ayid: string;
  status: any;
}): ISaveAnalyticsStatusAction => ({
  type: ANALYTICS_SAVE_STATUS,
  payload: {
    ayid,
    status,
  },
});

export interface ISaveAnalyticsResultsAction {
  type: typeof ANALYTICS_SAVE_RESULTS;
  payload: {
    ayid: string;
    results?: any; // Replace 'any' with the actual type of 'results'
    resolvedParameters?: any; // Replace 'any' with the actual type of 'resolvedParameters'
    errors?: any; // Replace 'any' with the actual type of 'errors'
    warnings?: any; // Replace 'any' with the actual type of 'warnings'
    status?: any; // Replace 'any' with the actual type of 'status'
  };
}

export const saveAnalyticsResults = ({
  ayid,
  results,
  resolvedParameters,
  errors,
  warnings,
  status,
}: {
  ayid: string;
  results?: any; // Replace 'any' with the actual type of 'results'
  resolvedParameters?: any; // Replace 'any' with the actual type of 'resolvedParameters'
  errors?: any; // Replace 'any' with the actual type of 'errors'
  warnings?: any; // Replace 'any' with the actual type of 'warnings'
  status?: any; // Replace 'any' with the actual type of 'status'
}): ISaveAnalyticsResultsAction => ({
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

export interface IRestoreAnalyticsStoreAction {
  type: typeof ANALYTICS_SAVE_RESTORE_ANALYTICS;
  payload: any; // Replace 'any' with the actual type of 'store'
}

export const restoreAnalyticsStoreAction = (
  store: any
): IRestoreAnalyticsStoreAction => ({
  type: ANALYTICS_SAVE_RESTORE_ANALYTICS,
  payload: store,
});

export interface IDeleteAnalyticsObjectAction {
  type: typeof DELETE_ANALYTICS_OBJECT;
  payload: {
    ayid: string;
  };
}

export const deleteAnalyticsObjectAction = (
  ayid: string
): IDeleteAnalyticsObjectAction => ({
  type: DELETE_ANALYTICS_OBJECT,
  payload: {
    ayid,
  },
});

export interface IUpdateAnalyticsUIAction {
  type: typeof ANALYTICS_SAVE_UI;
  payload: {
    ayid: string;
    ui: any; // Replace 'any' with the actual type of 'ui'
  };
}

export const updateAnalyticsUIAction = (
  ayid: string,
  ui: any
): IUpdateAnalyticsUIAction => ({
  type: ANALYTICS_SAVE_UI,
  payload: {
    ayid,
    ui,
  },
});

// import {
//   ANALYTICS_CREATE,
//   IMPORT_PARAMS_FROM_GRAPH,
//   ANALYTICS_RUN,
//   ANALYTICS_SAVE_UI,
//   ANALYTICS_UPDATE_PARAMETERS,

//   // store
//   ANALYTICS_SAVE_NEW,
//   ANALYTICS_SAVE_PARAMETERS,
//   ANALYTICS_SAVE_RESOLVED_PARAMETERS,
//   ANALYTICS_SAVE_RESULTS,
//   ANALYTICS_SAVE_STATUS,
//   ANALYTICS_SAVE_RESTORE_ANALYTICS,
//   DELETE_ANALYTICS_OBJECT,
//   ANALYTICS_ADD_VARIABLE,
// } from './actionTypes';

// //
// // sagas
// //

// export const createAnalyticsAction = ({ kind, ayid } = {}) => ({
//   type: ANALYTICS_CREATE,
//   kind,
//   ayid,
// });

// export const runAnalyticsAction = ({ ayid } = {}) => ({
//   type: ANALYTICS_RUN,
//   ayid,
// });

// export const addVariableAction = (ayid, expr) => ({
//   type: ANALYTICS_ADD_VARIABLE,
//   ayid,
//   expr,
// });

// export const importParametersFromGraphAction = ({ ayid } = {}) => ({
//   type: IMPORT_PARAMS_FROM_GRAPH,
//   ayid,
// });

// export const updateAnalyticsParametersAction = ({ ayid, parameters } = {}) => ({
//   type: ANALYTICS_UPDATE_PARAMETERS,
//   ayid,
//   parameters,
// });

// //
// // store
// //
// export const saveAnalytics = ({ ayid, object } = {}) => ({
//   type: ANALYTICS_SAVE_NEW,
//   payload: {
//     ayid,
//     object,
//   },
// });

// export const saveAnalyticsParametersAction = ({ ayid, parameters } = {}) => ({
//   type: ANALYTICS_SAVE_PARAMETERS,
//   payload: {
//     ayid,
//     parameters,
//   },
// });

// export const saveResolvedParametersAction = ({ ayid, parameters } = {}) => ({
//   type: ANALYTICS_SAVE_RESOLVED_PARAMETERS,
//   payload: {
//     ayid,
//     parameters,
//   },
// });

// export const saveAnalyticsStatus = ({ ayid, status } = {}) => ({
//   type: ANALYTICS_SAVE_STATUS,
//   payload: {
//     ayid,
//     status,
//   },
// });

// export const saveAnalyticsResults = ({
//   ayid, results, resolvedParameters, errors, warnings, status
// } = {}) => ({
//   type: ANALYTICS_SAVE_RESULTS,
//   payload: {
//     ayid,
//     results,
//     resolvedParameters,
//     errors,
//     warnings,
//     status,
//   },
// });

// export const restoreAnalyticsStoreAction = (store) => ({
//   type: ANALYTICS_SAVE_RESTORE_ANALYTICS,
//   payload: store,
// });

// export const deleteAnalyticsObjectAction = (ayid) => ({
//   type: DELETE_ANALYTICS_OBJECT,
//   payload: {
//     ayid,
//   },
// });

// export const updateAnalyticsUIAction = (ayid, ui) => ({
//   type: ANALYTICS_SAVE_UI,
//   payload: {
//     ayid, ui,
//   },
// });
