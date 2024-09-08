import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction
} from '../actions';
import { LMParameters, WSeries } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveLMParameters from './resolveLMParameters';
import { analyticsParametersSelector } from '../selectors';

export const callLMAnalytics = (lmParams) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.modelsApi.analyticsApiLmPost(
      lmParams,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);


export function* runLMAnalytics({ ayid }) {
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

  const [resolvedParams, errs] = yield resolveLMParameters({ ayid });

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

  const lmParams = new LMParameters();
  lmParams.dependent = WSeries.constructFromObject(resolvedParams.dependent);
  lmParams.dropna = resolvedParams.dropna || false;
  lmParams.addconst = resolvedParams.hasconst || true;
  lmParams.regressors = resolvedParams.regressors;
  let data;
  try {
    data = yield call(callLMAnalytics, lmParams);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
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
      errors: data.errors,
      warnings: data.warnings,
      status: data.status,
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
