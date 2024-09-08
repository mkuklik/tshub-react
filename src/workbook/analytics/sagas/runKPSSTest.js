import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, KPSSParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveKPSSParameters from './resolveKPSSParameters';
import { analyticsParametersSelector } from '../selectors';


export const callKPSS = (params) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.testsApi.analyticsApiTestsKpss(
      params,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

export function* runKPSSTest({ ayid }) {
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

  const [resolvedParams, errs] = yield resolveKPSSParameters({ ayid });

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

  const KPSSParams = new KPSSParameters();
  KPSSParams.x = WSeries.constructFromObject(resolvedParams.variable);
  KPSSParams.nlags = resolvedParams.nlags.value;
  KPSSParams.autolag = resolvedParams.autolag.value;
  KPSSParams.regression = resolvedParams.regression.value;
  KPSSParams.dropna = resolvedParams.dropna;

  let data;
  try {
    data = yield call(callKPSS, KPSSParams);
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
