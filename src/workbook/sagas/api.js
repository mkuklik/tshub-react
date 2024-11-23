import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  ApiClient as AnalyticsApiClient,
  DefaultApi as AnalyticsApi,
  FilterApi,
  ModelApi,
  TestApi,
} from "../../analytics_client";
import {
  ApiClient,
  RawSpaceApi,
  RawCollectionApi,
  RawAnnotationsApi,
  RawTimeSeriesApi,
  RawTimeSeriesDataApi,
  RawVintageApi,
  TimeSeriesApi,
  RawUploadApi,
  // UserApi,
} from "../../client";
import { API_SET_PARAMETERS } from "../../viewer/actions/ActionTypes";
import { saveApiParametersAction } from "../../viewer/actions/index";
import WseriesApi from "../../analytics_client/api/WseriesApi";
// import {
//   ApiClient as FredApiClient,
//   CategoryApi as FredCategoryApi,
// } from '../../fred_client';
import {
  // ApiClient as FredApiClient,
  CategoryApi as FredCategoryApi,
  SeriesApi as FredSeriesApi,
  createConfiguration as createFredConfiguration,
} from "../../fred_ts_client";

export function* setParameters({
  spaceId,
  collId,
  tsid,
  jwt,
  wid,
  chronos_address,
  analytics_address,
}) {
  // const client = new ApiClient();
  // client.basePath = chronos_address.replace(/\/+$/, '');
  // client.authentications.jwt.accessToken = jwt;

  // eslint-disable-next-line no-underscore-dangle
  // window._chronosdb = {
  //   client,
  //   rawSpaceApi: new RawSpaceApi(client),
  //   rawCollectionApi: new RawCollectionApi(client),
  //   rawAnnotationApi: new RawAnnotationsApi(client),
  //   rawTimeSeriesApi: new RawTimeSeriesApi(client),
  //   rawTimeSeriesDataApi: new RawTimeSeriesDataApi(client),
  //   rawVintageApi: new RawVintageApi(client),
  //   timeSeriesApi: new TimeSeriesApi(client),
  // };

  // Axios.defaults.baseURL = 'https://www.tshub.io';
  // Axios.defaults.headers.common.Authorization = jwt;

  //

  //  const {
  //   wid, chronos_address, jwt, title, initialize,
  // } = this.props;

  const client = new ApiClient();
  client.basePath = chronos_address.replace(/\/+$/, "");
  client.authentications.jwt.accessToken = jwt;

  const analyticsClient = new AnalyticsApiClient();
  analyticsClient.authentications.jwt.accessToken = jwt;
  if (process.env.NODE_ENV === "production") {
    analyticsClient.basePath = analytics_address.replace(/\/+$/, "");
  } else {
    analyticsClient.basePath = analytics_address
      .replace(/\/+$/, "")
      .replace(/:(\d){1,}\//gm, ":9091/");
  }

  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  if (process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = chronos_address
      .replace(/\/+$/, "")
      .replace("/api", "");
  } else {
    axios.defaults.baseURL = "http://localhost:5000";
  }
  axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
  // axios.defaults.withCredentials = true;
  // axios.defaults.crossDomain = true;

  // eslint - disable - next - line no - underscore - dangle
  window._chronosdb = {
    wid,
    rawSpaceApi: new RawSpaceApi(client),
    rawCollectionApi: new RawCollectionApi(client),
    rawAnnotationApi: new RawAnnotationsApi(client),
    rawTimeSeriesApi: new RawTimeSeriesApi(client),
    rawTimeSeriesDataApi: new RawTimeSeriesDataApi(client),
    rawVintageApi: new RawVintageApi(client),
    timeSeriesApi: new TimeSeriesApi(client),
    rawUploadApi: new RawUploadApi(client),
    // userApi: new UserApi(client),

    analyticsApi: new AnalyticsApi(analyticsClient),
    modelsApi: new ModelApi(analyticsClient),
    filtersApi: new FilterApi(analyticsClient),
    testsApi: new TestApi(analyticsClient),
    wseriesApi: new WseriesApi(analyticsClient),
  };

  // const fredClient = new FredApiClient();
  const fredConfig = createFredConfiguration();
  // eslint-disable-next-line no-underscore-dangle
  window._fred = {
    // client: fredClient,
    // categoryApi: new FredCategoryApi(fredClient),
    config: fredConfig,
    categoryApi: new FredCategoryApi(fredConfig),
    seriesApi: new FredSeriesApi(fredConfig),
  };

  yield put(
    saveApiParametersAction(
      spaceId,
      collId,
      tsid,
      jwt,
      wid,
      chronos_address,
      analytics_address
    )
  );
}

export default function* watchApiActions() {
  yield takeEvery(API_SET_PARAMETERS, setParameters);
}
