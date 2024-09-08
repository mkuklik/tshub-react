import { put, call, select } from 'redux-saga/effects';
import { isNil, map } from 'ramda';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, VARParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveVARParameters from './resolveVARParameters';
import { analyticsParametersSelector } from '../selectors';

export const callVARAnalytics = (params) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.modelsApi.analyticsApiVarPost(
      params,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);


export function* runVARAnalytics({ ayid }) {
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

  const [resolvedParams, errs] = yield resolveVARParameters({ ayid });

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

  const params = new VARParameters();
  params.endogenous = map((x) => WSeries.constructFromObject(x), resolvedParams.endogenous);
  params.dropna = resolvedParams.dropna || false;
  params.trend = resolvedParams.trend.value;
  params.ic = resolvedParams.ic.value;
  params.maxlags = resolvedParams.maxlags.value;
  let data;
  try {
    data = yield call(callVARAnalytics, params);
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
