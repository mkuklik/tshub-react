/* eslint-disable no-underscore-dangle */
// import { toast } from 'react-semantic-toasts';
import {
  put, call, takeEvery, takeLatest, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';

import {
  FETCH_FRED_CATEGORY,
  FETCH_FRED_CATEGORY_TIMESERIES,
  // FETCH_TIMESERIES,
  // FETCH_TIMESERIES_LIST,
  // FETCH_TIMESERIES_DETAILS,
  // TIMESERIES_DELETE_SERIES,
} from '../actions/ActionTypes';

import {
  saveFredCategoryAction,
  saveFredTimeseriesListAction,
} from '../actions/fredActions';

import { fredBrowserSerCategoryLoadingAction } from '../actions/uiActions';

// import {
//   saveTimeSeriesAction,
//   saveTimeseriesListAction,
//   saveTimeseriesDetailsAction,
//   saveTimeseriesDeleteAction,
// } from '../actions/timeseriesActions';

import { reportApiError, reportErrorAction } from '../actions/errorActions';
import { AppToaster } from '../components/errors/AppToaster';

export function FredApiGetCategory(apiKey, categoryId) {
  /*
  response:
    {
      "categories": [
          {
              "id": 125,
              "name": "Trade Balance",
              "parent_id": 13
          }
      ]
    }
  */
  return new Promise((resolve, reject) => {
    window._fred.CategoryApi.getCategory(apiKey, { categoryId, fileType: 'json' },
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

export function FredApiGetCategoryChildren(apiKey, categoryId) {
  /*
  request:
  opts: {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': opts['categoryId'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd']
  }
  response:
  {
    "categories": [
        {
            "id": 16,
            "name": "Exports",
            "parent_id": 13
        },
        {
            "id": 17,
            "name": "Imports",
            "parent_id": 13
        },
       ...
    ]
  }
  */
  return new Promise((resolve, reject) => {
    window._fred.categoryApi.getCategoryChildren(apiKey, { categoryId, fileType: 'json' },
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

export function FredApiGetCategorySeries(apiKey, categoryId) {
  /*
  request:
  opts: {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': opts['categoryId'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd']
  }
  response:
  {
    "realtime_start": "2017-08-01",
    "realtime_end": "2017-08-01",
    "order_by": "series_id",
    "sort_order": "asc",
    "count": 45,
    "offset": 0,
    "limit": 1000,
    "seriess": [
      {
        "id": "BOPBCA",
        "realtime_start": "2017-08-01",
        "realtime_end": "2017-08-01",
        "title": "Balance on Current Account (DISCONTINUED)",
        "observation_start": "1960-01-01",
        "observation_end": "2014-01-01",
        "frequency": "Quarterly",
        "frequency_short": "Q",
        "units": "Billions of Dollars",
        "units_short": "Bil. of $",
        "seasonal_adjustment": "Seasonally Adjusted",
        "seasonal_adjustment_short": "SA",
        "last_updated": "2014-06-18 08:41:28-05",
        "popularity": 32,
        "group_popularity": 34,
        "notes": "This series has been discontinued as a result of the comprehensive restructuring of the international economic accounts (http:\/\/www.bea.gov\/international\/modern.htm). For a crosswalk of the old and new series in FRED see: http:\/\/research.stlouisfed.org\/CompRevisionReleaseID49.xlsx."
      },
      ...
    ]
  }
  */
  return new Promise((resolve, reject) => {
    window._fred.categoryApi.getCategorySeries(apiKey, categoryId, { fileType: 'json' },
      (err, data) => (err ? reject(err) : resolve(data)));
  });
}

// export function rawApiTimeseriesRawGet(collId, tsid) {
//   return new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(collId, tsid,
//       (err, data) => (err ? reject(err) : resolve(data)));
//   });
// }

// const rawApiFetchTimeseriesList = (collId) => (
//   new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGetList(
//       collId, null,
//       (error, data) => (
//         error ? reject(error) : resolve(data)
//       ),
//     );
//   })
// );

// const rawApiFetchTimeseriesDetails = (collId, tsid) => (
//   new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawGet(
//       collId,
//       tsid,
//       (error, data) => (
//         error ? reject(error) : resolve(data)
//       ),
//     );
//   })
// );

// const apiFetchTimeseriesDetails = (spaceName, collName, name) => (
//   new Promise((resolve, reject) => {
//     window._chronosdb.timeSeriesApi.appApiTimeseriesGet(
//       spaceName, collName, name,
//       (error, data) => (
//         error ? reject(error) : resolve(data)
//       ),
//     );
//   })
// );

// Sagas

export function* fetchFredCategory({ categoryId }) {
  const apiKey = yield select((state) => state.fred.config.apiKey);
  // TODO: Check if key is empty
  console.log('fetchFredCategory: ', categoryId, ' api: ', apiKey);
  try {
    const data = yield call(FredApiGetCategoryChildren, apiKey, categoryId);
    yield put(saveFredCategoryAction({ categoryId, children: data.categories }));
    return data;
  } catch (error) {
    console.log(error);
    yield put(reportErrorAction({ message: `Error fetching category children details, ${error}` }));

    // toast({ title: 'Error fetching timeseries details', description: String(error) });
    return undefined;
  }
}

export function* fetchCategorySeries({ categoryId }) {
  //   yield put(timeseriesBrowserSetTimeseriesListLoading(true));
  const apiKey = yield select((state) => state.fred.config.apiKey);
  // TODO: Check if key is empty
  try {
    const timeseriesList = yield call(FredApiGetCategorySeries, apiKey, categoryId);
    yield put(saveFredTimeseriesListAction({ categoryId, ...timeseriesList })); // TODO, convert it to internal format here or in FredApiGetCategorySeries
    yield put(fredBrowserSerCategoryLoadingAction(false));
  } catch (error) {
    yield put(reportApiError({ error }));
    yield put(reportErrorAction({ message: `Error fetching space list, ${error}` }));

    // toast({
    //   title: 'Error fetching timeseries list',
    //   description: error,
    // });

  //     yield put(timeseriesBrowserSetTimeseriesListLoading(false));
  }
}

// export function* fetchTimeseriesList({ payload: collId }) {
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

// export function* fetchTimeseriesDetails({ payload }) {
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

// export function* fetchTimeseriesDetailsByName({ collName, spaceName, tsName }) {
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

// export function rawApiTimeseriesRawDelete(collId, tsid) {
//   return new Promise((resolve, reject) => {
//     window._chronosdb.rawTimeSeriesApi.appApiTimeseriesRawDelete(collId, tsid,
//       (err, data) => (err ? reject(err) : resolve(data)));
//   });
// }

// function* deleteOneTimeseries({ collId, tsid }) {
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
// export function* deleteTimeseries({ collId, tsids }) {
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
