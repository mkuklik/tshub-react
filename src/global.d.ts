import {
  // ApiClient as FredApiClient,
  CategoryApi,
  SeriesApi,
  createConfiguration as createFredConfiguration,
} from "../../fred_ts_client";

declare global {
  interface Window {
    _chronosdb: {
      wid: string;
      rawTimeSeriesApi: any;
    };
    _fred: {
      config: fredConfig;
      categoryApi: CategoryApi;
      seriesApi: SeriesApi;
    };
  }
}
