import { IVintage } from "../types/VintageTypes";
// Define action types as constants
export const VINTAGES_INITIATE = "VINTAGES_INITIATE";
export const VINTAGES_FETCH_LIST = "VINTAGES_FETCH_LIST";
export const VINTAGES_FETCH_OBJECT = "VINTAGES_FETCH_OBJECT";
export const VINTAGES_LOAD_MORE = "VINTAGES_LOAD_MORE";
export const VINTAGES_REFRESH_LIST = "VINTAGES_REFRESH_LIST";
export const VINTAGES_SAVE_LIST = "VINTAGES_SAVE_LIST";
export const VINTAGES_SAVE_OBJECT = "VINTAGES_SAVE_OBJECT";
export const VINTAGES_SAVE_HAS_PERMISSION = "VINTAGES_SAVE_HAS_PERMISSION";
export const VINTAGES_SAVE_VINTAGE_SERIES = "VINTAGES_SAVE_VINTAGE_SERIES";
export const VINTAGES_SAVE_VARIABLE = "VINTAGES_SAVE_VARIABLE";
export const VINTAGES_AUTO_REFRESH_OBJECT = "VINTAGES_AUTO_REFRESH_OBJECT";
export const VINTAGES_AUTO_REFRESH_LIST = "VINTAGES_AUTO_REFRESH_LIST";

// Define interfaces for action payloads

export interface IInitiateAction {
  type: typeof VINTAGES_INITIATE;
  collId?: string;
}

export const initiateVintagesAction = ({
  collId,
}: { collId?: string } = {}): IInitiateAction => ({
  type: VINTAGES_INITIATE,
  collId,
});

export interface IFetchListAction {
  type: typeof VINTAGES_FETCH_LIST;
  collId?: string;
  tsid?: string;
  limit?: number;
  offset?: number;
  since?: number;
}

export const fetchVintageListAction = ({
  collId,
  tsid,
  limit,
  offset,
  since,
}: IFetchListAction): IFetchListAction => ({
  type: VINTAGES_FETCH_LIST,
  collId,
  tsid,
  limit,
  offset,
  since,
});

export interface IFetchObjectAction {
  type: typeof VINTAGES_FETCH_OBJECT;
  collId?: string;
  vid?: string;
}

export const featchVintageObjectAction = ({
  collId,
  vid,
}: { collId?: string; vid?: string } = {}): IFetchObjectAction => ({
  type: VINTAGES_FETCH_OBJECT,
  collId,
  vid,
});

export interface IRefreshListAction {
  type: typeof VINTAGES_REFRESH_LIST;
  collId?: string;
}

export const refreshVintageListAction = ({
  collId,
}: { collId?: string } = {}): IRefreshListAction => ({
  type: VINTAGES_REFRESH_LIST,
  collId,
});

export interface ILoadMoreAction {
  type: typeof VINTAGES_LOAD_MORE;
}

export const loadMoreVintagesAction = (): ILoadMoreAction => ({
  type: VINTAGES_LOAD_MORE,
});

export interface IAutoRefreshObjectAction {
  type: typeof VINTAGES_AUTO_REFRESH_OBJECT;
  uploadId?: string;
}

export const autoRefreshObjectAction = ({
  uploadId,
}: { uploadId?: string } = {}): IAutoRefreshObjectAction => ({
  type: VINTAGES_AUTO_REFRESH_OBJECT,
  uploadId,
});

export interface IAutoRefreshListAction {
  type: typeof VINTAGES_AUTO_REFRESH_LIST;
  collId?: string;
  limit?: number;
  offset?: number;
  since?: number;
}

export const autoRefreshListAction = ({
  collId,
  limit,
  offset,
  since,
}: IAutoRefreshListAction): IAutoRefreshListAction => ({
  type: VINTAGES_AUTO_REFRESH_LIST,
  collId,
  limit,
  offset,
  since,
});

export interface ISaveVintageSeriesAction {
  type: typeof VINTAGES_SAVE_VINTAGE_SERIES;
  payload: {
    collId: string;
    tsid: string;
  };
}

export const saveVintageSeriesAction = ({
  collId,
  tsid,
}: { collId: string; tsid: string }): ISaveVintageSeriesAction => ({
  type: VINTAGES_SAVE_VINTAGE_SERIES,
  payload: {
    collId,
    tsid,
  },
});

export interface ISaveVariableAction {
  type: typeof VINTAGES_SAVE_VARIABLE;
  payload: {
    variable: {
      expr: string;
      error?: string;
    };
  };
}

export const saveVintageVariableAction = ({
  expr,
  error,
}: {
  expr: string;
  error?: string;
}): ISaveVariableAction => ({
  type: VINTAGES_SAVE_VARIABLE,
  payload: {
    variable: {
      expr,
      error,
    },
  },
});

export interface ISaveListAction {
  type: typeof VINTAGES_SAVE_LIST;
  payload: {
    tsid: string;
    collId: string;
    data: IVintage[]; // Replace 'any' with the actual type of data
  };
}

export const saveVintagesListAction = ({
  data,
  collId,
  tsid,
}: {
  tsid: string;
  collId: string;
  data: IVintage[];
}): ISaveListAction => ({
  type: VINTAGES_SAVE_LIST,
  payload: {
    data,
    collId,
    tsid,
  },
});

export interface ISaveObjectAction {
  type: typeof VINTAGES_SAVE_OBJECT;
  payload: any; // Replace 'any' with the actual type of data
}

export const saveVintageObjectAction = (data: any): ISaveObjectAction => ({
  type: VINTAGES_SAVE_OBJECT,
  payload: data,
});

export interface ISaveHasPermissionAction {
  type: typeof VINTAGES_SAVE_HAS_PERMISSION;
  payload: boolean;
}

export const saveHasPermissionAction = (
  bool: boolean
): ISaveHasPermissionAction => ({
  type: VINTAGES_SAVE_HAS_PERMISSION,
  payload: bool,
});

// export const VINTAGES_INITIATE = "VINTAGES_INITIATE";
// export const VINTAGES_FETCH_LIST = "VINTAGES_FETCH_LIST";
// export const VINTAGES_FETCH_OBJECT = "VINTAGES_FETCH_OBJECT";
// export const VINTAGES_LOAD_MORE = "VINTAGES_LOAD_MORE";
// export const VINTAGES_REFRESH_LIST = "VINTAGES_REFRESH_LIST";

// // store
// export const VINTAGES_SAVE_LIST = "VINTAGES_SAVE_LIST";
// export const VINTAGES_SAVE_OBJECT = "VINTAGES_SAVE_OBJECT";
// export const VINTAGES_SAVE_HAS_PERMISSION = "VINTAGES_SAVE_HAS_PERMISSION";
// export const VINTAGES_SAVE_VINTAGE_SERIES = "VINTAGES_SAVE_VINTAGE_SERIES";
// export const VINTAGES_SAVE_VARIABLE = "VINTAGES_SAVE_VARIABLE";

// // SAGAS

// export const initiateVintagesAction = ({ collId } = {}) => ({
//   type: VINTAGES_INITIATE,
//   collId,
// });

// export const fetchVintageListAction = ({
//   collId,
//   tsid,
//   limit,
//   offset,
//   since,
// } = {}) => ({
//   type: VINTAGES_FETCH_LIST,
//   collId,
//   tsid,
//   limit,
//   offset,
//   since,
// });

// export const featchVintageObjectAction = ({ collId, vid } = {}) => ({
//   type: VINTAGES_FETCH_OBJECT,
//   collId,
//   vid,
// });

// export const refreshVintageListAction = ({ collId }) => ({
//   type: VINTAGES_REFRESH_LIST,
//   collId,
// });

// export const loadMoreVintagesAction = () => ({
//   type: VINTAGES_LOAD_MORE,
// });

// export const autoRefreshObjectAction = ({ uploadId }) => ({
//   type: VINTAGES_AUTO_REFRESH_OBJECT,
//   uploadId,
// });

// export const autoRefreshListAction = ({ collId, limit, offset, since }) => ({
//   type: VINTAGES_AUTO_REFRESH_LIST,
//   collId,
//   limit,
//   offset,
//   since,
// });

// // STORE
// export const saveVintageSeriesAction = ({ collId, tsid } = {}) => ({
//   type: VINTAGES_SAVE_VINTAGE_SERIES,
//   payload: {
//     collId,
//     tsid,
//   },
// });

// export const saveVintageVariableAction = ({ expr, error } = {}) => ({
//   type: VINTAGES_SAVE_VARIABLE,
//   payload: {
//     variable: {
//       expr,
//       error,
//     },
//   },
// });

// export const saveVintagesListAction = (
//   { data, collId, tsid } = {}
//   //   {
//   //   result, offset, limit, total,
//   // } = {}
// ) => ({
//   type: VINTAGES_SAVE_LIST,
//   payload: {
//     data,
//     collId,
//     tsid,
//   },
//   // {
//   // result, offset, limit, total,
//   // },
// });

// export const saveVintageObjectAction = (data) => ({
//   type: VINTAGES_SAVE_OBJECT,
//   payload: data,
// });

// export const saveHasPermissionAction = (bool) => ({
//   type: VINTAGES_SAVE_HAS_PERMISSION,
//   payload: bool,
// });
