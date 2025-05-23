/* eslint-disable no-underscore-dangle */
import { put, call } from "redux-saga/effects";
import { saveObservationsAction } from "../actions/timeseriesActions";
import { reportErrorAction } from "../actions/errorActions";
import moment from "moment";
import { RawSingleTimeSeriesData } from "../../chronos_ts_client/models/RawSingleTimeSeriesData";
import { IObservationData } from "../reducers/obsReducer.ts";

// interface Observations {
//     [tsid: string]: {
//         dtype: string;
//         dparams: any; // Replace 'any' with the correct type if known
//         freq: string;
//         fparams: any; // Replace 'any' with the correct type if known
//         units: string;
//         data: [number, number][];
//     };
// }

// interface FetchObservationsOptions {
//   realtime?: moment.Moment;
// }

//     public appApiRawTimeseriesDataGet(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Promise<{ [key: string]: RawSingleTimeSeriesData; }> {
//   const result = this.api.appApiRawTimeseriesDataGet(collId, tsids, realtime, _options);
//   return result.toPromise();
// }
function appApiRawTimeseriesDataGet(
  collId: string,
  tsids: string[],
  realtime?: Date
): Promise<{ [key: string]: RawSingleTimeSeriesData }> {
  // eslint-disable-next-line no-underscore-dangle
  return window._chronosdb.rawTimeSeriesDataApi.appApiRawTimeseriesDataGet(
    collId,
    tsids,
    realtime
  );
}

// export function FredApiGetCategory(
//   apiKey: string,
//   categoryId: number
// ): Promise<Categories> {
//   return window._fred.categoryApi.getCategory(apiKey, "json", categoryId);
// }

// try {
//   const response: Seriess = yield call(
//     FredApiGetCategorySeries,
//     apiKey,
//     categoryId
//   );

export default function* fetchObservations({
  collId,
  tsids,
  realtime,
}: {
  collId: string;
  tsids: string[] | undefined;
  realtime?: moment.Moment;
} = {}): Generator<any, [Observations | undefined, string | undefined], any> {
  try {
    const data = yield call(
      appApiRawTimeseriesDataGet,
      collId,
      tsids || [],
      realtime?.toDate
    );

    // convert to IObservationData

    yield put(saveObservationsAction(data));
    return [data, undefined];
  } catch (error: any) {
    //ts error
    yield put(
      reportErrorAction({ message: `'FetchObservations Error', ${error}` })
    );
    return [
      undefined,
      `fetching observation failed collId:${collId}, tsids:${tsids}, realtime:${realtime}`,
    ];
  }
}

// /* eslint-disable no-underscore-dangle */
// import { put, call } from 'redux-saga/effects';
// import { saveObservationsAction } from '../actions/timeseriesActions';
// import { reportErrorAction } from '../actions/errorActions';

// function appApiRawTimeseriesDataGet(collId, tsids, opts) {
//   return new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesDataApi.appApiRawTimeseriesDataGet(collId, tsids, opts,
//       (err, data) => (err ? reject(err) : resolve(data)));
//   });
// }

// export default function* fetchObservations({ collId, tsids, realtime } = {}) {
//   const opts = (realtime !== undefined) ? { realtime: realtime.toISOString() } : {};

//   try {
//     const data = yield call(appApiRawTimeseriesDataGet, collId, tsids, opts);
//     yield put(saveObservationsAction(data));
//     return [data, undefined];
//   } catch (error) {
//     yield put(reportErrorAction({ message: `'FetchObservations Error', ${error}` }));
//     return [undefined, `fetching observation failed collId:${collId}, tsids:${tsids}, realtime:${realtime}`];
//   }
// }
