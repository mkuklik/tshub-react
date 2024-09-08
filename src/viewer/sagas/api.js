import {
  takeEvery, put,
} from 'redux-saga/effects';
import Axios from 'axios';
import {
  ApiClient,
  RawSpaceApi,
  RawCollectionApi,
  RawAnnotationsApi,
  RawTimeSeriesApi,
  RawTimeSeriesDataApi,
  RawVintageApi,
  TimeSeriesApi,
} from '../../client';
import {
  API_SET_PARAMETERS,
} from '../actions/ActionTypes';
import { saveApiParametersAction } from '../actions/index';


export function* setParameters({
  spaceId, collId, tsid, jwt, wid, chronos_address,
}) {
  const client = new ApiClient();
  client.basePath = chronos_address.replace(/\/+$/, '');
  client.authentications.jwt.accessToken = jwt;

  // eslint-disable-next-line no-underscore-dangle
  window._chronosdb = {
    client,
    rawSpaceApi: new RawSpaceApi(client),
    rawCollectionApi: new RawCollectionApi(client),
    rawAnnotationApi: new RawAnnotationsApi(client),
    rawTimeSeriesApi: new RawTimeSeriesApi(client),
    rawTimeSeriesDataApi: new RawTimeSeriesDataApi(client),
    rawVintageApi: new RawVintageApi(client),
    timeSeriesApi: new TimeSeriesApi(client),
  };

  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    Axios.defaults.baseURL = chronos_address.replace(/\/+$/, '').replace('/api', '');
  } else {
    Axios.defaults.baseURL = 'http://localhost:5000';
  }
  Axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;

  // Axios.defaults.baseURL = 'https://www.tshub.io';
  // Axios.defaults.headers.common.Authorization = jwt;

  yield put(saveApiParametersAction(spaceId, collId, tsid, jwt, wid, chronos_address));
}


export default function* watchApiActions() {
  yield takeEvery(API_SET_PARAMETERS, setParameters);
}
