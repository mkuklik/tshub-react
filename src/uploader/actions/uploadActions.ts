// Actions
export const UPLOAD_INITIATE = "UPLOAD_INITIATE";
export const UPLOAD_CREATE = "UPLOAD_CREATE";
export const UPLOAD_FETCH_LIST = "UPLOAD_FETCH_LIST";
export const UPLOAD_FETCH_OBJECT = "UPLOAD_FETCH_OBJECT";
export const UPLOAD_FETCH_PENDING = "UPLOAD_FETCH_PENDING";
export const UPLOAD_LOAD_MORE = "UPLOAD_LOAD_MORE";
export const UPLOAD_REFRESH_LIST = "UPLOAD_REFRESH_LIST";
export const UPLOAD_AUTO_REFRESH_OBJECT = "UPLOAD_AUTO_REFRESH_OBJECT";
export const UPLOAD_AUTO_REFRESH_LIST = "UPLOAD_AUTO_REFRESH_LIST";

// store
export const UPLOAD_SAVE_LIST = "UPLOAD_SAVE_LIST";
export const UPLOAD_SAVE_OBJECT = "UPLOAD_SAVE_OBJECT";
export const UPLOAD_SAVE_HAS_PERMISSION = "UPLOAD_SAVE_HAS_PERMISSION";

// Action Interface
export interface IInitiateUploadAction {
  type: typeof UPLOAD_INITIATE;
  collId: string;
}

// Action Creator
export const initiateUploadAction = ({
  collId,
}: {
  collId: string;
}): IInitiateUploadAction => ({
  type: UPLOAD_INITIATE,
  collId,
});

// Action Interface
export interface IFetchUploadListAction {
  type: typeof UPLOAD_FETCH_LIST;
  collId: string;
  limit?: number;
  offset?: number;
  since?: string;
}

// Action Creator
export const fetchUploadListAction = ({
  collId,
  limit,
  offset,
  since,
}: {
  collId: string;
  limit?: number;
  offset?: number;
  since?: string;
}): IFetchUploadListAction => ({
  type: UPLOAD_FETCH_LIST,
  collId,
  limit,
  offset,
  since,
});

// Action Interface
export interface IFetchUploadObjectAction {
  type: typeof UPLOAD_FETCH_OBJECT;
  collId: string;
  uploadId: string;
}

// Action Creator
export const featchUploadObjectAction = ({
  collId,
  uploadId,
}: {
  collId: string;
  uploadId: string;
}): IFetchUploadObjectAction => ({
  type: UPLOAD_FETCH_OBJECT,
  collId,
  uploadId,
});

// Action Interface
export interface ISaveUploadFetchPendingAction {
  type: typeof UPLOAD_FETCH_PENDING;
  payload: {
    fetchPending: boolean;
  };
}

// Action Creator
export const saveUploadFetchPendingAction = ({
  fetchPending,
}: {
  fetchPending: boolean;
}): ISaveUploadFetchPendingAction => ({
  type: UPLOAD_FETCH_PENDING,
  payload: {
    fetchPending,
  },
});

// Action Interface
export interface ILoadMoreUploadsAction {
  type: typeof UPLOAD_LOAD_MORE;
}

// Action Creator
export const loadMoreUploadsAction = (): ILoadMoreUploadsAction => ({
  type: UPLOAD_LOAD_MORE,
});

// Action Interface
export interface IRefreshUploadListAction {
  type: typeof UPLOAD_REFRESH_LIST;
  collId: string;
}

// Action Creator
export const refreshUploadListAction = ({
  collId,
}: {
  collId: string;
}): IRefreshUploadListAction => ({
  type: UPLOAD_REFRESH_LIST,
  collId,
});

// Action Interface
export interface IAutoRefreshObjectAction {
  type: typeof UPLOAD_AUTO_REFRESH_OBJECT;
  uploadId: string;
  collId: string;
}

// Action Creator
export const autoRefreshObjectAction = ({
  uploadId,
  collId,
}: {
  uploadId: string;
  collId: string;
}): IAutoRefreshObjectAction => ({
  type: UPLOAD_AUTO_REFRESH_OBJECT,
  uploadId,
  collId,
});

// Action Interface
export interface IAutoRefreshListAction {
  type: typeof UPLOAD_AUTO_REFRESH_LIST;
  collId: string;
  limit?: number;
  offset?: number;
  since?: string;
}

// Action Creator
export const autoRefreshListAction = ({
  collId,
  limit,
  offset,
  since,
}: {
  collId: string;
  limit?: number;
  offset?: number;
  since?: string;
}): IAutoRefreshListAction => ({
  type: UPLOAD_AUTO_REFRESH_LIST,
  collId,
  limit,
  offset,
  since,
});

// Store Interface
export interface ISaveUploadListAction {
  type: typeof UPLOAD_SAVE_LIST;
  payload: {
    result: any[]; // Replace 'any' with the actual type of your result
    offset: number;
    limit: number;
    total: number;
  };
}

// Store Action Creator
export const saveUploadListAction = ({
  result,
  offset,
  limit,
  total,
}: {
  result: any[];
  offset: number;
  limit: number;
  total: number;
}): ISaveUploadListAction => ({
  type: UPLOAD_SAVE_LIST,
  payload: {
    result,
    offset,
    limit,
    total,
  },
});

// Store Interface
export interface ISaveUploadObjectAction {
  type: typeof UPLOAD_SAVE_OBJECT;
  payload: any; // Replace 'any' with the actual type of your data
}

// Store Action Creator
export const saveUploadObjectAction = (data: any): ISaveUploadObjectAction => ({
  type: UPLOAD_SAVE_OBJECT,
  payload: data,
});

// Store Interface
export interface ISaveHasPermissionAction {
  type: typeof UPLOAD_SAVE_HAS_PERMISSION;
  payload: boolean;
}

// Store Action Creator
export const saveHasPermissionAction = (
  x: boolean
): ISaveHasPermissionAction => ({
  type: UPLOAD_SAVE_HAS_PERMISSION,
  payload: x,
});

// export const UPLOAD_INITIATE = "UPLOAD_INITIATE";
// export const UPLOAD_CREATE = "UPLOAD_CREATE";
// export const UPLOAD_FETCH_LIST = "UPLOAD_FETCH_LIST";
// export const UPLOAD_FETCH_OBJECT = "UPLOAD_FETCH_OBJECT";
// export const UPLOAD_FETCH_PENDING = "UPLOAD_FETCH_PENDING";
// export const UPLOAD_LOAD_MORE = "UPLOAD_LOAD_MORE";
// export const UPLOAD_REFRESH_LIST = "UPLOAD_REFRESH_LIST";
// export const UPLOAD_AUTO_REFRESH_OBJECT = "UPLOAD_AUTO_REFRESH_OBJECT";
// export const UPLOAD_AUTO_REFRESH_LIST = "UPLOAD_AUTO_REFRESH_LIST";

// // store
// export const UPLOAD_SAVE_LIST = "UPLOAD_SAVE_LIST";
// export const UPLOAD_SAVE_OBJECT = "UPLOAD_SAVE_OBJECT";
// export const UPLOAD_SAVE_HAS_PERMISSION = "UPLOAD_SAVE_HAS_PERMISSION";

// // SAGAS

// export const initiateUploadAction = ({ collId } = {}) => ({
//   type: UPLOAD_INITIATE,
//   collId,
// });

// export const fetchUploadListAction = ({
//   collId,
//   limit,
//   offset,
//   since,
// } = {}) => ({
//   type: UPLOAD_FETCH_LIST,
//   collId,
//   limit,
//   offset,
//   since,
// });

// export const featchUploadObjectAction = ({ collId, uploadId } = {}) => ({
//   type: UPLOAD_FETCH_OBJECT,
//   collId,
//   uploadId,
// });

// export const refreshUploadListAction = ({ collId }) => ({
//   type: UPLOAD_REFRESH_LIST,
//   collId,
// });

// export const saveUploadFetchPendingAction = ({ fetchPending }) => ({
//   type: UPLOAD_FETCH_PENDING,
//   payload: {
//     fetchPending,
//   },
// });

// export const loadMoreUploadsAction = () => ({
//   type: UPLOAD_LOAD_MORE,
// });

// export const autoRefreshObjectAction = ({ uploadId, collId } = {}) => ({
//   type: UPLOAD_AUTO_REFRESH_OBJECT,
//   uploadId,
//   collId,
// });

// export const autoRefreshListAction = ({ collId, limit, offset, since }) => ({
//   type: UPLOAD_AUTO_REFRESH_LIST,
//   collId,
//   limit,
//   offset,
//   since,
// });

// // STORE

// export const saveUploadListAction = ({
//   result,
//   offset,
//   limit,
//   total,
// } = {}) => ({
//   type: UPLOAD_SAVE_LIST,
//   payload: {
//     result,
//     offset,
//     limit,
//     total,
//   },
// });

// export const saveUploadObjectAction = (data) => ({
//   type: UPLOAD_SAVE_OBJECT,
//   payload: data,
// });

// export const saveHasPermissionAction = (bool) => ({
//   type: UPLOAD_SAVE_HAS_PERMISSION,
//   payload: bool,
// });
