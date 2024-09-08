import { call, put } from 'redux-saga/effects';
import { isMoment } from 'moment';
import {
  saveVintagesListAction,
  saveHasPermissionAction,
  saveVintageObjectAction,
} from '../../actions/vintagesActions';
import { reportApiError, reportErrorAction } from '../../../viewer/actions/errorActions';
import { path, isNil } from 'ramda';

export const apiVintagesGetList = (collId, tsid, realtime, offset, limit) => {
  const opts = {
    tsid, realtime,
  };
  return (
    new Promise((resolve, reject) => {
      window._chronosdb.rawVintageApi.appApiVintagesGetListRaw(collId, opts,
        (error, data) => (error ? reject(error) : resolve(data)),
      );
    })
  );
};


export default function* fetchVintageList({
  collId, tsid, limit, offset,
}) {
  try {
    const data = yield call(apiVintagesGetList, collId, tsid, undefined, limit, offset);

    yield put(saveVintagesListAction({ collId, tsid, data }));
    return [data, undefined];
  } catch (error) {
    if (error.status === 403) {
      yield put(saveHasPermissionAction(false));
    } else {
      yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
      yield put(reportApiError({ error }));
      return [undefined, `failed listing vintages for series ${tsid}`];
    }
    return [undefined, error];
  }
}


export function* fetchVintageAtRealtimeList({
  collId, tsid, realtime,
}) {
  const rt = isMoment(realtime) ? realtime.toDate() : realtime;
  try {
    const data = yield call(apiVintagesGetList, collId, tsid, rt, undefined, undefined);

    // yield put(saveVintagesListAction({ collId, tsid, data }));
    const tmp = path([0], data);
    if (!isNil(tmp)) yield put(saveVintageObjectAction(tmp));

    return [data, undefined];
  } catch (error) {
    if (error.status === 403) {
      yield put(saveHasPermissionAction(false));
    } else {
      yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
      yield put(reportApiError({ error }));
      return [undefined, `failed listing vintages for series ${tsid}`];
    }
    return [undefined, error];
  }
}


// export function fetchVintageList({ collId, tsid } = {}) {
//   return (dispatch) => {
//     window._chronosdb.rawVintageApi.appApiVintagesGetListRaw(collId, { tsid },
//       (error, data) => {
//         if (error !== null) {
//           // eslint-disable-next-line no-console
//           console.error('fetchVintageList error', error);
//         } else {
//           dispatch(saveVitnageListAction(data));
//         }
//       });
//   };
// }
