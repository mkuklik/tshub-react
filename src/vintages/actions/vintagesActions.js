
import {
  VINTAGES_INITIATE,
  VINTAGES_FETCH_LIST,
  VINTAGES_FETCH_OBJECT,
  VINTAGES_LOAD_MORE,
  VINTAGES_SAVE_LIST,
  VINTAGES_SAVE_OBJECT,
  VINTAGES_SAVE_HAS_PERMISSION,
  VINTAGES_SAVE_VINTAGE_SERIES,
  VINTAGES_REFRESH_LIST,
  VINTAGES_SAVE_VARIABLE,
} from './ActionTypes';


// SAGAS

export const initiateVintagesAction = ({ collId } = {}) => ({
  type: VINTAGES_INITIATE,
  collId,
});

export const fetchVintageListAction = ({ collId, tsid, limit, offset, since } = {}) => ({
  type: VINTAGES_FETCH_LIST,
  collId,
  tsid,
  limit,
  offset,
  since,
});

export const featchVintageObjectAction = ({ collId, vid } = {}) => ({
  type: VINTAGES_FETCH_OBJECT,
  collId,
  vid,
});

export const refreshVintageListAction = ({ collId }) => ({
  type: VINTAGES_REFRESH_LIST,
  collId,
});


export const loadMoreVintagesAction = () => ({
  type: VINTAGES_LOAD_MORE,
});

export const autoRefreshObjectAction = ({ uploadId }) => ({
  type: VINTAGES_AUTO_REFRESH_OBJECT,
  uploadId,
});


export const autoRefreshListAction = ({ collId, limit, offset, since }) => ({
  type: VINTAGES_AUTO_REFRESH_LIST,
  collId, limit, offset, since
});

// STORE
export const saveVintageSeriesAction = ({
  collId, tsid,
} = {}) => ({
  type: VINTAGES_SAVE_VINTAGE_SERIES,
  payload: {
    collId, tsid,
  },
});

export const saveVintageVariableAction = ({
  expr, error,
} = {}) => ({
  type: VINTAGES_SAVE_VARIABLE,
  payload: {
    variable: {
      expr,
      error,
    },
  },
});

export const saveVintagesListAction = ({ data, collId, tsid }={}
//   {
//   result, offset, limit, total,
// } = {}
) => ({
  type: VINTAGES_SAVE_LIST,
  payload: {
    data, collId, tsid,
  },
  // {
    // result, offset, limit, total,
  // },
});

export const saveVintageObjectAction = (data) => ({
  type: VINTAGES_SAVE_OBJECT,
  payload: data,
});


export const saveHasPermissionAction = (bool) => ({
  type: VINTAGES_SAVE_HAS_PERMISSION,
  payload: bool,
});
