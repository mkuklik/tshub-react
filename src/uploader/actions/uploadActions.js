
import {
  UPLOAD_INITIATE,
  UPLOAD_FETCH_LIST,
  UPLOAD_FETCH_OBJECT,
  UPLOAD_FETCH_PENDING,
  UPLOAD_LOAD_MORE,
  UPLOAD_SAVE_LIST,
  UPLOAD_SAVE_OBJECT,
  UPLOAD_SAVE_HAS_PERMISSION,
  UPLOAD_REFRESH_LIST,
  UPLOAD_AUTO_REFRESH_OBJECT,
  UPLOAD_AUTO_REFRESH_LIST,
} from './ActionTypes';


// SAGAS

export const initiateUploadAction = ({ collId } = {}) => ({
  type: UPLOAD_INITIATE,
  collId,
});

export const fetchUploadListAction = ({ collId, limit, offset, since } = {}) => ({
  type: UPLOAD_FETCH_LIST,
  collId,
  limit,
  offset,
  since,
});

export const featchUploadObjectAction = ({ collId, uploadId } = {}) => ({
  type: UPLOAD_FETCH_OBJECT,
  collId,
  uploadId,
});

export const refreshUploadListAction = ({ collId }) => ({
  type: UPLOAD_REFRESH_LIST,
  collId,
});

export const saveUploadFetchPendingAction = ({ fetchPending }) => ({
  type: UPLOAD_FETCH_PENDING,
  payload: {
    fetchPending,
  },
});


export const loadMoreUploadsAction = () => ({
  type: UPLOAD_LOAD_MORE,
});

export const autoRefreshObjectAction = ({ uploadId, collId }={}) => ({
  type: UPLOAD_AUTO_REFRESH_OBJECT,
  uploadId, collId
});


export const autoRefreshListAction = ({ collId, limit, offset, since }) => ({
  type: UPLOAD_AUTO_REFRESH_LIST,
  collId, limit, offset, since
});

// STORE

export const saveUploadListAction = ({
  result, offset, limit, total,
} = {}) => ({
  type: UPLOAD_SAVE_LIST,
  payload: {
    result, offset, limit, total,
  },
});

export const saveUploadObjectAction = (data) => ({
  type: UPLOAD_SAVE_OBJECT,
  payload: data,
});


export const saveHasPermissionAction = (bool) => ({
  type: UPLOAD_SAVE_HAS_PERMISSION,
  payload: bool,
});
