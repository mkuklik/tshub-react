/* eslint-disable no-underscore-dangle */

export const SAVE_VINTAGE = "SAVE_VINTAGE";
export const SAVE_VINTAGE_LIST = "SAVE_VINTAGE_LIST";

// FETCH_VINTAGE

export const saveVitnageDetailsAction = (data) => ({
  type: SAVE_VINTAGE,
  payload: data,
});

export function fetchVintageDetails({ collId, vid } = {}) {
  return (dispatch) => {
    window._chronosdb.rawVintageApi.appApiVintagesGetRaw(
      collId,
      vid,
      (error, data) => {
        if (error !== null) {
          // eslint-disable-next-line no-console
          console.error(error);
          // TODO
        } else {
          dispatch(saveVitnageDetailsAction(data));
        }
      }
    );
  };
}

// FETCH_VINTAGE_LIST

export const saveVitnageListAction = (data) => ({
  type: SAVE_VINTAGE_LIST,
  payload: data,
});

export function fetchVintageList({ collId, tsid } = {}) {
  return (dispatch) => {
    window._chronosdb.rawVintageApi.appApiVintagesGetListRaw(
      collId,
      { tsid },
      (error, data) => {
        if (error !== null) {
          // eslint-disable-next-line no-console
          console.error("fetchVintageList error", error);
        } else {
          dispatch(saveVitnageListAction(data));
        }
      }
    );
  };
}
