import {
  // ApiClient as FredApiClient,
  CategoryApi,
  SeriesApi,
  createConfiguration as createFredConfiguration,
} from "./fred_ts_client";
import {
  RawTimeSeriesDataApi as ChronosRawTimeSeriesDataApi,
  RawTimeSeriesApi as ChronosRawTimeSeriesApi,
} from "./chronos_ts_client";
declare global {
  interface Window {
    _chronosdb: {
      wid: string;
      rawTimeSeriesApi: ChronosRawTimeSeriesApi;
      rawTimeSeriesDataApi: ChronosRawTimeSeriesDataApi;
    };
    _fred: {
      config: fredConfig;
      categoryApi: CategoryApi;
      seriesApi: SeriesApi;
    };
  }
}
