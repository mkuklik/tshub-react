// import { toast } from 'react-semantic-toasts';
import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
import { isNil } from "ramda";
import global from "../../global";
import {
  FETCH_FRED_CATEGORY,
  FETCH_FRED_CATEGORY_TIMESERIES,
  IFetchFredCategoryAction,
  // FETCH_TIMESERIES,
  // FETCH_TIMESERIES_LIST,
  // FETCH_TIMESERIES_DETAILS,
  // TIMESERIES_DELETE_SERIES,
  saveFredCategoryAction,
  saveFredTimeseriesListAction,
} from "../actions/fredActions";

import { fredBrowserSetCategoryLoadingAction } from "../actions/uiActions";

// import {
//   saveTimeSeriesAction,
//   saveTimeseriesListAction,
//   saveTimeseriesDetailsAction,
//   saveTimeseriesDeleteAction,
// } from '../actions/timeseriesActions';

import { reportApiError, reportErrorAction } from "../actions/errorActions";
import { AppToaster } from "../components/errors/AppToaster";
import { Categories } from "../../fred_ts_client/models/Categories";
import { Seriess } from "../../fred_ts_client/models/Seriess";
import { ICategory, IFredSeries } from "../types/TFred";
import { IFrequency, IDType } from "../types/TTimeseries";

export function FredApiGetCategory(
  apiKey: string,
  categoryId: number
): Promise<Categories> {
  return window._fred.categoryApi.getCategory(apiKey, "json", categoryId);
}

export function FredApiGetCategoryChildren(
  apiKey: string,
  categoryId: number
): Promise<Categories> {
  return window._fred.categoryApi.getCategoryChildren(
    apiKey,
    "json",
    categoryId
  );
}

export function FredApiGetCategorySeries(
  apiKey: string,
  categoryId: number
): Promise<Seriess> {
  return window._fred.categoryApi.getCategorySeries(apiKey, categoryId, "json");
}

// Sagas

export function* fetchFredCategory({ categoryId }: IFetchFredCategoryAction) {
  const apiKey: string = yield select((state: any) => state.fred.config.apiKey); // Assuming your state has a structure like { fred: { config: { apiKey: string } } }
  // TODO: Check if key is empty
  console.log("fetchFredCategory: ", categoryId, " api: ", apiKey);
  try {
    const data: Categories = yield call(
      FredApiGetCategoryChildren,
      apiKey,
      categoryId
    );
    const children = data.categories?.flatMap((x) => {
      return { id: x.id, name: x.name };
    });
    yield put(saveFredCategoryAction({ categoryId, children }));
    return data;
  } catch (error) {
    console.log(error);
    yield put(
      reportErrorAction({
        message: `Error fetching category children details, ${error}`,
      })
    );

    // toast({ title: 'Error fetching timeseries details', description: String(error) });
    return undefined;
  }
}

interface FetchCategorySeriesAction {
  type: typeof FETCH_FRED_CATEGORY_TIMESERIES;
  categoryId: number;
}

/*

export class SeriessSeriessInner {
    'id'?: string;
    'realtimeStart'?: string;
    'realtimeEnd'?: string;
    'title'?: string;
    'observationStart'?: string;
    'observationEnd'?: string;
    'frequency'?: string;
    'frequencyShort'?: string;
    'units'?: string;
    'unitsShort'?: string;
    'seasonalAdjustment'?: string;
    'seasonalAdjustmentShort'?: string;
    'lastUpdated'?: string;
    'popularity'?: number;
    'groupPopularity'?: number;
    'notes'?: string;

*/
export function* fetchCategorySeries({
  categoryId,
}: FetchCategorySeriesAction) {
  //   yield put(timeseriesBrowserSetTimeseriesListLoading(true));
  console.log("fetchCategorySeries, categoryId=", categoryId);
  const apiKey: string = yield select((state: any) => state.fred.config.apiKey); // Assuming your state has a structure like { fred: { config: { apiKey: string } } }
  // TODO: Check if key is empty
  try {
    const response: Seriess = yield call(
      FredApiGetCategorySeries,
      apiKey,
      categoryId
    );

    const seriess: IFredSeries[] = [];
    for (const s of response.seriess || []) {
      if (isNil(s.id) || isNil(s.title) || isNil(s.frequencyShort)) {
        console.error(
          `malformed Fred series: id:${s.id} ;title: ${s.title} ;frequencyShort:  ${s.frequencyShort}`
        );
        continue;
      }
      let freq: IFrequency | undefined = undefined;
      try {
        freq = s.frequencyShort as IFrequency; // Attempt direct conversion
      } catch (error) {
        console.error(
          `Unsupported fred frequency: ${s.frequencyShort} in series ${s.id} - ${s.title}`
        );
      }
      if (freq === undefined) {
        yield put(
          reportErrorAction({
            message: `Unsupported fred frequency: ${s.frequencyShort} in series ${s.id} - ${s.title}`,
          })
        );
        continue
      }
      const out: IFredSeries = {
        id: s.id,
        title: s.title,
        realtimeStart: s.realtimeStart || "",
        realtimeEnd: s.realtimeEnd || "",
        observationStart: s.observationStart || "",
        observationEnd: s.observationEnd || "",
        frequency: s.frequency || "",
        frequencyShort: s.frequencyShort,
        units: s.units || "",
        unitsShort: s.unitsShort || "",
        seasonalAdjustment: s.seasonalAdjustment || "",
        seasonalAdjustmentShort: s.seasonalAdjustmentShort || "",
        lastUpdated: s.lastUpdated || "",
        popularity: s.popularity || 0,
        groupPopularity: s.groupPopularity || 0,
        notes: s.notes || "",
        // derived
        freq,
        dtype: IDType.FLOAT,
        isDiscontinued: s.title?.includes("DISCONTINUED") || false,
      };
      seriess.push(out);
    }
    yield put(saveFredTimeseriesListAction(categoryId, seriess));
    yield put(fredBrowserSetCategoryLoadingAction(categoryId, false));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(
      reportErrorAction({ message: `Error fetching space list, ${error}` })
    );

    // toast({
    //   title: 'Error fetching timeseries list',
    //   description: error,
    // });

    //     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
  }
}

// export function* fetchTimeseriesList({ payload: collId }: { payload: string; type: string }) {
//   yield put(timeseriesBrowserSetTimeseriesListLoading(true));

//   try {
//     const timeseriesList = yield call(rawApiFetchTimeseriesList, collId);
//     yield put(saveTimeseriesListAction({ collId, timeseriesList }));
//     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
//   } catch (error) {
//     yield put(reportApiError({ error }));
//     yield put(reportErrorAction({ message: `Error fetching space list, ${error}` }));

//     // toast({
//     //   title: 'Error fetching timeseries list',
//     //   description: error,
//     // });

//     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
//   }
// }

// export function* fetchTimeseriesDetails({ payload }: { payload: { collId: string; tsid: string }; type: string }) {
//   const { collId, tsid } = payload;

//   try {
//     const timeseriesDetails = yield call(rawApiFetchTimeseriesDetails, collId, tsid);
//     yield put(saveTimeseriesDetailsAction(timeseriesDetails));
//   } catch (error) {
//     yield put(reportApiError({ error }));
//     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

//     // toast({
//     //   title: 'Error fetching timeseries details',
//     //   description: String(error),
//     // });
//   }
// }

// export function* fetchTimeseriesDetailsByName({ collName, spaceName, tsName }: { collName: string; spaceName: string; tsName: string; type: string }) {
//   try {
//     const timeseriesDetails = yield call(apiFetchTimeseriesDetails, spaceName, collName, tsName);
//     yield put(saveTimeseriesDetailsAction(timeseriesDetails));
//     return [timeseriesDetails, undefined];
//   } catch (error) {
//     yield put(reportApiError({ error }));
//     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

//     return [undefined, 'Error fetching timeseries details'];
//   }
// }

// export function rawApiTimeseriesRawDelete(collId: string, tsid: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawDelete(collId, tsid,
//       (err, data) => (err ? reject(err) : resolve(data)));
//   });
// }

// function* deleteOneTimeseries({ collId, tsid }: { collId: string; tsid: string }) {
//   try {
//     const data = yield call(rawApiTimeseriesRawDelete, collId, tsid);
//     // TODO remove time series from the store
//     return [data, undefined];
//   } catch (error) {
//     yield put(reportApiError({ error }));
//     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
//     return [undefined, `failed to delete timeseries ${collId}/${tsid}`];
//   }
// }
// export function* deleteTimeseries({ collId, tsids }: { collId: string; tsids: string[] }) {
//   if (Array.isArray(tsids)) {
//     const deleted = [];
//     // eslint-disable-next-line no-restricted-syntax
//     for (const tsid of tsids) {
//       const [data, error] = yield deleteOneTimeseries({ collId, tsid });
//       if (isNil(error)) deleted.push(tsid);
//     }
//     if (deleted.length > 0) {
//       yield put(saveTimeseriesDeleteAction(collId, deleted));
//       // TODO make success report actions
//       AppToaster.show({
//         message: `Successfully deleted ${deleted.length} series`,
//         intent: 'success',
//         timeout: 5000,
//       });
//     }
//   }
// }

export default function* watchFredActions() {
  yield takeEvery(FETCH_FRED_CATEGORY, fetchFredCategory);
  yield takeEvery(FETCH_FRED_CATEGORY_TIMESERIES, fetchCategorySeries);
  // yield takeEvery(FETCH_TIMESERIES_LIST, fetchTimeseriesList);
  // yield takeLatest(FETCH_TIMESERIES_DETAILS, fetchTimeseriesDetails);
  // yield takeEvery(TIMESERIES_DELETE_SERIES, deleteTimeseries);
}

// /* eslint-disable no-underscore-dangle */
// // import { toast } from 'react-semantic-toasts';
// import { put, call, takeEvery, takeLatest, select } from "redux-saga/effects";
// import { isNil } from "ramda";

// import {
//   FETCH_FRED_CATEGORY,
//   FETCH_FRED_CATEGORY_TIMESERIES,
//   // FETCH_TIMESERIES,
//   // FETCH_TIMESERIES_LIST,
//   // FETCH_TIMESERIES_DETAILS,
//   // TIMESERIES_DELETE_SERIES,
//   saveFredCategoryAction,
//   saveFredTimeseriesListAction,
// } from "../actions/fredActions";

// import { fredBrowserSetCategoryLoadingAction } from "../actions/uiActions";

// // import {
// //   saveTimeSeriesAction,
// //   saveTimeseriesListAction,
// //   saveTimeseriesDetailsAction,
// //   saveTimeseriesDeleteAction,
// // } from '../actions/timeseriesActions';

// import { reportApiError, reportErrorAction } from "../actions/errorActions";
// import { AppToaster } from "../components/errors/AppToaster";

// export function FredApiGetCategory(apiKey, categoryId) {
//   /*
//   response:
//     {
//       "categories": [
//           {
//               "id": 125,
//               "name": "Trade Balance",
//               "parent_id": 13
//           }
//       ]
//     }
//   */
//   // return new Promise((resolve, reject) => {
//   //   window._fred.CategoryApi.getCategory(apiKey, { categoryId, fileType: 'json' },
//   //     (err, data) => (err ? reject(err) : resolve(data)));
//   // });
//   return window._fred.categoryApi.getCategory(apiKey, "json", categoryId);
// }

// export function FredApiGetCategoryChildren(apiKey, categoryId) {
//   /*
//   request:
//   opts: {
//         'api_key': apiKey,
//         'file_type': opts['fileType'],
//         'category_id': opts['categoryId'],
//         'realtime_start': opts['realtimeStart'],
//         'realtime_end': opts['realtimeEnd']
//   }
//   response:
//   {
//     "categories": [
//         {
//             "id": 16,
//             "name": "Exports",
//             "parent_id": 13
//         },
//         {
//             "id": 17,
//             "name": "Imports",
//             "parent_id": 13
//         },
//        ...
//     ]
//   }
//   */
//   // return new Promise((resolve, reject) => {
//   //   window._fred.categoryApi.getCategoryChildren(apiKey, { categoryId, fileType: 'json' },
//   //     (err, data) => (err ? reject(err) : resolve(data)));
//   // });
//   return window._fred.categoryApi.getCategoryChildren(
//     apiKey,
//     "json",
//     categoryId
//   );
//   // .then((data) => {
//   //   console.log(data);
//   //   console.log("API called successfully. Returned data: " + data);
//   //   return data;
//   // })
//   // .catch((error) => console.error(error));
// }

// export function FredApiGetCategorySeries(apiKey, categoryId) {
//   /*
//   request:
//   opts: {
//         'api_key': apiKey,
//         'file_type': opts['fileType'],
//         'category_id': opts['categoryId'],
//         'realtime_start': opts['realtimeStart'],
//         'realtime_end': opts['realtimeEnd']
//   }
//   response:
//   {
//     "realtime_start": "2017-08-01",
//     "realtime_end": "2017-08-01",
//     "order_by": "series_id",
//     "sort_order": "asc",
//     "count": 45,
//     "offset": 0,
//     "limit": 1000,
//     "seriess": [
//       {
//         "id": "BOPBCA",
//         "realtime_start": "2017-08-01",
//         "realtime_end": "2017-08-01",
//         "title": "Balance on Current Account (DISCONTINUED)",
//         "observation_start": "1960-01-01",
//         "observation_end": "2014-01-01",
//         "frequency": "Quarterly",
//         "frequency_short": "Q",
//         "units": "Billions of Dollars",
//         "units_short": "Bil. of $",
//         "seasonal_adjustment": "Seasonally Adjusted",
//         "seasonal_adjustment_short": "SA",
//         "last_updated": "2014-06-18 08:41:28-05",
//         "popularity": 32,
//         "group_popularity": 34,
//         "notes": "This series has been discontinued as a result of the comprehensive restructuring of the international economic accounts (http:\/\/www.bea.gov\/international\/modern.htm). For a crosswalk of the old and new series in FRED see: http:\/\/research.stlouisfed.org\/CompRevisionReleaseID49.xlsx."
//       },
//       ...
//     ]
//   }
//   */
//   // return new Promise((resolve, reject) => {
//   //   window._fred.categoryApi.getCategorySeries(
//   //     apiKey,
//   //     categoryId,
//   //     { fileType: "json" },
//   //     (err, data) => (err ? reject(err) : resolve(data))
//   //   );
//   // });
//   return window._fred.categoryApi.getCategorySeries(apiKey, "json", categoryId);
// }

// // export function rawApiTimeseriesRawGet(collId, tsid) {
// //   return new Promise((resolve, reject) => {
// //     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(collId, tsid,
// //       (err, data) => (err ? reject(err) : resolve(data)));
// //   });
// // }

// // const rawApiFetchTimeseriesList = (collId) => (
// //   new Promise((resolve, reject) => {
// //     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGetList(
// //       collId, null,
// //       (error, data) => (
// //         error ? reject(error) : resolve(data)
// //       ),
// //     );
// //   })
// // );

// // const rawApiFetchTimeseriesDetails = (collId, tsid) => (
// //   new Promise((resolve, reject) => {
// //     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(
// //       collId,
// //       tsid,
// //       (error, data) => (
// //         error ? reject(error) : resolve(data)
// //       ),
// //     );
// //   })
// // );

// // const apiFetchTimeseriesDetails = (spaceName, collName, name) => (
// //   new Promise((resolve, reject) => {
// //     window._chronosdb.timeSeriesApi.appApiTimeseriesGet(
// //       spaceName, collName, name,
// //       (error, data) => (
// //         error ? reject(error) : resolve(data)
// //       ),
// //     );
// //   })
// // );

// // Sagas

// export function* fetchFredCategory({ categoryId }) {
//   const apiKey = yield select((state) => state.fred.config.apiKey);
//   // TODO: Check if key is empty
//   console.log("fetchFredCategory: ", categoryId, " api: ", apiKey);
//   try {
//     const data = yield call(FredApiGetCategoryChildren, apiKey, categoryId);
//     yield put(
//       saveFredCategoryAction({ categoryId, children: data.categories })
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     yield put(
//       reportErrorAction({
//         message: `Error fetching category children details, ${error}`,
//       })
//     );

//     // toast({ title: 'Error fetching timeseries details', description: String(error) });
//     return undefined;
//   }
// }

// export function* fetchCategorySeries({ categoryId }) {
//   //   yield put(timeseriesBrowserSetTimeseriesListLoading(true));
//   const apiKey = yield select((state) => state.fred.config.apiKey);
//   // TODO: Check if key is empty
//   try {
//     const timeseriesList = yield call(
//       FredApiGetCategorySeries,
//       apiKey,
//       categoryId
//     );
//     yield put(saveFredTimeseriesListAction({ categoryId, ...timeseriesList })); // TODO, convert it to internal format here or in FredApiGetCategorySeries
//     yield put(fredBrowserSetCategoryLoadingAction(false));
//   } catch (error) {
//     yield put(reportApiError({ error }));
//     yield put(
//       reportErrorAction({ message: `Error fetching space list, ${error}` })
//     );

//     // toast({
//     //   title: 'Error fetching timeseries list',
//     //   description: error,
//     // });

//     //     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
//   }
// }

// // export function* fetchTimeseriesList({ payload: collId }) {
// //   yield put(timeseriesBrowserSetTimeseriesListLoading(true));

// //   try {
// //     const timeseriesList = yield call(rawApiFetchTimeseriesList, collId);
// //     yield put(saveTimeseriesListAction({ collId, timeseriesList }));
// //     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
// //   } catch (error) {
// //     yield put(reportApiError({ error }));
// //     yield put(reportErrorAction({ message: `Error fetching space list, ${error}` }));

// //     // toast({
// //     //   title: 'Error fetching timeseries list',
// //     //   description: error,
// //     // });

// //     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
// //   }
// // }

// // export function* fetchTimeseriesDetails({ payload }) {
// //   const { collId, tsid } = payload;

// //   try {
// //     const timeseriesDetails = yield call(rawApiFetchTimeseriesDetails, collId, tsid);
// //     yield put(saveTimeseriesDetailsAction(timeseriesDetails));
// //   } catch (error) {
// //     yield put(reportApiError({ error }));
// //     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

// //     // toast({
// //     //   title: 'Error fetching timeseries details',
// //     //   description: String(error),
// //     // });
// //   }
// // }

// // export function* fetchTimeseriesDetailsByName({ collName, spaceName, tsName }) {
// //   try {
// //     const timeseriesDetails = yield call(apiFetchTimeseriesDetails, spaceName, collName, tsName);
// //     yield put(saveTimeseriesDetailsAction(timeseriesDetails));
// //     return [timeseriesDetails, undefined];
// //   } catch (error) {
// //     yield put(reportApiError({ error }));
// //     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));

// //     return [undefined, 'Error fetching timeseries details'];
// //   }
// // }

// // export function rawApiTimeseriesRawDelete(collId, tsid) {
// //   return new Promise((resolve, reject) => {
// //     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawDelete(collId, tsid,
// //       (err, data) => (err ? reject(err) : resolve(data)));
// //   });
// // }

// // function* deleteOneTimeseries({ collId, tsid }) {
// //   try {
// //     const data = yield call(rawApiTimeseriesRawDelete, collId, tsid);
// //     // TODO remove time series from the store
// //     return [data, undefined];
// //   } catch (error) {
// //     yield put(reportApiError({ error }));
// //     yield put(reportErrorAction({ message: `Error fetching timeseries details, ${error}` }));
// //     return [undefined, `failed to delete timeseries ${collId}/${tsid}`];
// //   }
// // }
// // export function* deleteTimeseries({ collId, tsids }) {
// //   if (Array.isArray(tsids)) {
// //     const deleted = [];
// //     // eslint-disable-next-line no-restricted-syntax
// //     for (const tsid of tsids) {
// //       const [data, error] = yield deleteOneTimeseries({ collId, tsid });
// //       if (isNil(error)) deleted.push(tsid);
// //     }
// //     if (deleted.length > 0) {
// //       yield put(saveTimeseriesDeleteAction(collId, deleted));
// //       // TODO make success report actions
// //       AppToaster.show({
// //         message: `Successfully deleted ${deleted.length} series`,
// //         intent: 'success',
// //         timeout: 5000,
// //       });
// //     }
// //   }
// // }

// export default function* watchFredActions() {
//   yield takeEvery(FETCH_FRED_CATEGORY, fetchFredCategory);
//   yield takeEvery(FETCH_FRED_CATEGORY_TIMESERIES, fetchCategorySeries);
//   // yield takeEvery(FETCH_TIMESERIES_LIST, fetchTimeseriesList);
//   // yield takeLatest(FETCH_TIMESERIES_DETAILS, fetchTimeseriesDetails);
//   // yield takeEvery(TIMESERIES_DELETE_SERIES, deleteTimeseries);
// }
