import {
  SAVE_FRED_TIMESERIES_LIST,
  SAVE_FRED_CATEGORY,
  FETCH_FRED_CATEGORY,
  FETCH_FRED_CATEGORY_TIMESERIES,
  SAVE_FRED_CONFIG,
} from './ActionTypes';

export const fetchFredCategoryAction = (categoryId) => ({
  type: FETCH_FRED_CATEGORY,
  categoryId,
});

export const fetchFredCategoryTimeseriesAction = (categoryId) => ({
  type: FETCH_FRED_CATEGORY_TIMESERIES,
  categoryId,
});

//
// STORE ACTIONS
//

export const saveFredCategoryAction = (data) => ({
  type: SAVE_FRED_CATEGORY,
  payload: data,
});


/* data
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
export const saveFredTimeseriesListAction = (data) => ({
  type: SAVE_FRED_TIMESERIES_LIST,
  payload: data,
});

export const saveFredBrowserConfigAction = (data) => ({
  type: SAVE_FRED_CONFIG,
  payload: data,
});
