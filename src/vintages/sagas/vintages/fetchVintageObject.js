/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import { put, call } from 'redux-saga/effects';
import { saveVintageObjectAction } from '../../actions/vintagesActions';
import { reportApiError, reportErrorAction } from '../../../viewer/actions/errorActions';


function appApiVintagesGetRaw(collId, vid, meta) {
  const opts = {};
  if (meta !== undefined) opts.meta = meta;
  return new Promise((resolve, reject) => {
    window._chronosdb.rawVintageApi.appApiVintagesGetRaw(collId, vid, opts,
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

export function* fetchVintageObject(collId, vid, meta) {
  try {
    const vintage = yield call(appApiVintagesGetRaw, collId, vid, meta);
    yield put(saveVintageObjectAction(vintage));
    return [vintage, undefined];
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
    return [undefined, 'failed'];
    // TODO
  }
}
