import {
  call, select,
} from 'redux-saga/effects';
import { has, isNil } from 'ramda';
import moment from 'moment';
import { obsSelector } from '../selectors/graph';
import { resolvedSeriesSelector } from '../selectors/series';
import { fetchVintageAtRealtimeList } from '../../vintages/sagas/vintages/fetchVintageList';
import fetchObservations from './obs.fetchObservations';
import { chronosToMoment } from './obs.converters';
/*
  resolve series
*/

function* fetchReference({ refs, realtime: defaultRealtime } = {}) {
  const outData = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const refId of Object.keys(refs)) {
    if (has(refId, refs)) {
      outData[refId] = { ...refs[refId] };
      const { wsid, collId, tsid } = refs[refId];

      if (!isNil(wsid)) {
        // data series, fetch from series store
        const tmp = yield select(resolvedSeriesSelector(wsid));
        outData[refId] = {
          ...outData,
          ...tmp,
          data: tmp.data.map((x) => [moment.utc(x[0]), x[1]]), // / 1000
        };
      } else {
        // fetch data from timeseries store or database

        let { realtime, vid } = refs[refId];

        if (realtime === undefined) realtime = defaultRealtime;

        const [vintages, verr] = yield call(fetchVintageAtRealtimeList, { collId, tsid, realtime });
        if (vintages === undefined) {
          outData[refId].error = `failed to fetch vintage: ${verr}`;
        } else if (vintages.length === 0) {
          // const ts = yield select(timeseriesSelector(tsid));
          outData[refId] = {
            ...outData[refId],
            dtype: undefined, // ts.dtype,
            dparams: undefined, // ts.dparams,
            freq: undefined, // ts.freq,
            fparams: undefined, // ts.fparams,
            units: undefined, // ts.units,
            data: [],
            error: undefined,
          };
          continue;
        } else {
          vid = vintages[0].vid;
        }

        // check for observations
        const obs = yield select(obsSelector(tsid));
        let ts;
        if (obs === undefined || obs[vid] === undefined) {
          // fetch data
          const [fetched, err] = yield fetchObservations({
            collId, tsids: [tsid], realtime,
          });
          if (err !== undefined) {
            outData[refId].error = err; // todo
            continue;
          }
          if (!has(tsid, fetched)) {
            outData[refId].error = `response has no requested tsid [${tsid}]`;
            continue;
          }
          ts = fetched[tsid];
        } else {
          ts = obs[vid];
        }

        outData[refId] = {
          ...outData[refId],
          dtype: ts.dtype,
          dparams: ts.dparams,
          freq: ts.freq,
          fparams: ts.fparams,
          units: ts.units,
          data: chronosToMoment(ts),
          error: undefined,
        };
      }
    }
  }
  return outData;
}

export default fetchReference;
