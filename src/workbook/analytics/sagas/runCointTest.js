/* eslint-disable no-underscore-dangle */
import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, CointParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveCointParameters from './resolveCointParameters';
import { analyticsParametersSelector } from '../selectors';


export const callCoint = (params) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.testsApi.analyticsApiTestsCoint(
      params,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

export function* runCointTest({ ayid }) {
  const parameters = yield select(analyticsParametersSelector(ayid));
  yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.running }));
  // clear errors
  yield put(saveAnalyticsParametersAction({
    ayid,
    parameters: {
      ...parameters,
      errors: undefined,
    },
  }));

  const [resolvedParams, errs] = yield resolveCointParameters({ ayid });

  if (isNil(resolvedParams)) {
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        errors: errs,
      },
    }));
    yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.error }));
    return [undefined, errs];
  }

  // Analytics Server Run

  const CointParams = new CointParameters();
  CointParams.x = WSeries.constructFromObject(resolvedParams.x);
  CointParams.y = WSeries.constructFromObject(resolvedParams.y);
  CointParams.maxlag = resolvedParams.maxlag.value;
  CointParams.regression = resolvedParams.regression.value;
  CointParams.autolag = resolvedParams.autolag.value;
  CointParams.dropna = resolvedParams.dropna;
  let data;
  try {
    data = yield call(callCoint, CointParams);
  } catch (error) {
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        errors: [String(error)],
      },
    }));
    yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.error }));
    return [undefined, String(error)];
  }

  if (data.status === 'failed') {
    yield put(saveAnalyticsResults({
      ayid,
      results: data.result,
      resolvedParameters: resolvedParams,
      errors: data.errors,
      warnings: data.warnings,
      status: data.status,
    }));
    yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.error }));
  } else if (data.status === 'success') {
    yield put(saveAnalyticsResults({
      ayid,
      results: data.result,
      resolvedParameters: resolvedParams,
    }));
    yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.completed }));
  }

  yield put(updateAnalyticsUIAction(ayid, {
    tabs: {
      navbarTabId: AnalyticsTabs.results,
    },
  }));
  return [data, undefined];
}
