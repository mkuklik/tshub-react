import { call, select } from "redux-saga/effects";
import { has, isNil } from "ramda";
import moment from "moment";
import { obsSelector } from "../selectors/graph";
import { resolvedSeriesSelector } from "../selectors/series";
import { fetchVintageAtRealtimeList } from "../../vintages/sagas/vintages/fetchVintageList";
import fetchObservations from "./obs.fetchObservations";
import { chronosToMoment } from "./obs.converters";
import { SeriesDefinition } from "./series.constants";
import { Observation, Vintage } from "./obs.types";
import { IRefs } from "../../expressions/Evaluator";

interface FetchedData {
  [tsid: string]: any; // Replace 'any' with the actual type of fetched data if known
}

function* fetchReference(
  {
    refs,
    realtime: defaultRealtime,
  }: { refs: IRefs; realtime?: moment.Moment } = { refs: {} }
): Generator<any, { [refId: string]: any }, any> {
  const outData: { [refId: string]: any } = {};

  for (const refId of Object.keys(refs)) {
    outData[refId] = { ...refs[refId] };
    const { wsid, collId, tsid } = refs[refId];

    if (!isNil(wsid)) {
      const tmp = yield select(resolvedSeriesSelector(wsid));
      // Type guard to check if tmp is not null or undefined
      if (tmp) {
        outData[refId] = {
          ...outData[refId],
          ...tmp,
          data: tmp.data.map((x: [number, number]) => [moment.utc(x[0]), x[1]]),
        };
      }
    } else if (collId && tsid) {
      // Type guard for collId and tsid
      let { realtime, vid } = refs[refId];

      if (realtime === undefined) {
        realtime = defaultRealtime;
      }
      const [vintages, verr]: [Vintage[] | undefined, string | undefined] =
        yield call(fetchVintageAtRealtimeList, { collId, tsid, realtime });
      if (vintages === undefined) {
        outData[refId].error = `failed to fetch vintage: ${verr}`;
      } else if (vintages.length === 0) {
        outData[refId] = {
          ...outData[refId],
          dtype: undefined,
          dparams: undefined,
          freq: undefined,
          fparams: undefined,
          units: undefined,
          data: [],
          error: undefined,
        };
        continue;
      } else {
        vid = vintages[0].vid;
      }

      const obs: { [vid: number]: Observation } | undefined = yield select(
        obsSelector(tsid)
      );
      let ts;
      if (obs === undefined || obs[vid] === undefined) {
        const [fetched, err]: [FetchedData | undefined, string | undefined] =
          yield fetchObservations({
            collId,
            tsids: [tsid],
            realtime,
          });
        if (err !== undefined) {
          outData[refId].error = err;
          continue;
        }
        if (fetched && !has(tsid, fetched)) {
          outData[refId].error = `response has no requested tsid [${tsid}]`;
          continue;
        }
        ts = fetched ? fetched[tsid] : undefined;
      } else {
        ts = obs[vid];
      }
      // typeguard for ts
      if (ts) {
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

// import {
//   call, select,
// } from 'redux-saga/effects';
// import { has, isNil } from 'ramda';
// import moment from 'moment';
// import { obsSelector } from '../selectors/graph';
// import { resolvedSeriesSelector } from '../selectors/series';
// import { fetchVintageAtRealtimeList } from '../../vintages/sagas/vintages/fetchVintageList';
// import fetchObservations from './obs.fetchObservations';
// import { chronosToMoment } from './obs.converters';
// /*
//   resolve series
// */

// function* fetchReference({ refs, realtime: defaultRealtime } = {}) {
//   const outData = {};
//   // eslint-disable-next-line no-restricted-syntax
//   for (const refId of Object.keys(refs)) {
//     if (has(refId, refs)) {
//       outData[refId] = { ...refs[refId] };
//       const { wsid, collId, tsid } = refs[refId];

//       if (!isNil(wsid)) {
//         // data series, fetch from series store
//         const tmp = yield select(resolvedSeriesSelector(wsid));
//         outData[refId] = {
//           ...outData,
//           ...tmp,
//           data: tmp.data.map((x) => [moment.utc(x[0]), x[1]]), // / 1000
//         };
//       } else {
//         // fetch data from timeseries store or database

//         let { realtime, vid } = refs[refId];

//         if (realtime === undefined) realtime = defaultRealtime;

//         const [vintages, verr] = yield call(fetchVintageAtRealtimeList, { collId, tsid, realtime });
//         if (vintages === undefined) {
//           outData[refId].error = `failed to fetch vintage: ${verr}`;
//         } else if (vintages.length === 0) {
//           // const ts = yield select(timeseriesSelector(tsid));
//           outData[refId] = {
//             ...outData[refId],
//             dtype: undefined, // ts.dtype,
//             dparams: undefined, // ts.dparams,
//             freq: undefined, // ts.freq,
//             fparams: undefined, // ts.fparams,
//             units: undefined, // ts.units,
//             data: [],
//             error: undefined,
//           };
//           continue;
//         } else {
//           vid = vintages[0].vid;
//         }

//         // check for observations
//         const obs = yield select(obsSelector(tsid));
//         let ts;
//         if (obs === undefined || obs[vid] === undefined) {
//           // fetch data
//           const [fetched, err] = yield fetchObservations({
//             collId, tsids: [tsid], realtime,
//           });
//           if (err !== undefined) {
//             outData[refId].error = err; // todo
//             continue;
//           }
//           if (!has(tsid, fetched)) {
//             outData[refId].error = `response has no requested tsid [${tsid}]`;
//             continue;
//           }
//           ts = fetched[tsid];
//         } else {
//           ts = obs[vid];
//         }

//         outData[refId] = {
//           ...outData[refId],
//           dtype: ts.dtype,
//           dparams: ts.dparams,
//           freq: ts.freq,
//           fparams: ts.fparams,
//           units: ts.units,
//           data: chronosToMoment(ts),
//           error: undefined,
//         };
//       }
//     }
//   }
//   return outData;
// }

// export default fetchReference;
