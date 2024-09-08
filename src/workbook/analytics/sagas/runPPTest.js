/* eslint-disable no-underscore-dangle */
import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, PPParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolvePPParameters from './resolvePPParameters';
import { analyticsParametersSelector } from '../selectors';


export const callPP = (params) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.testsApi.analyticsApiTestsPp(
      params,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

export function* runPPTest({ ayid }) {
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

  const [resolvedParams, errs] = yield resolvePPParameters({ ayid });

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

  const PPParams = new PPParameters();
  PPParams.x = WSeries.constructFromObject(resolvedParams.variable);
  PPParams.nlags = resolvedParams.nlags.value;
  PPParams.autolag = resolvedParams.autolag.value;
  PPParams.regression = resolvedParams.regression.value;
  PPParams.dropna = resolvedParams.dropna;

  let data;
  try {
    data = yield call(callPP, PPParams);
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
  // results
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
