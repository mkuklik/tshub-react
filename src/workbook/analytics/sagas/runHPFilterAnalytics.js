import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { analyticsParametersSelector } from '../selectors';
import {
  saveAnalyticsResults, saveAnalyticsStatus, updateAnalyticsUIAction, saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, HPFilterParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveHPParameters from './resolveHPParameters';


export const callHPFilterAnalytics = (hpFilterParams) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.filtersApi.analyticsApiFiltersHpfilter(
      hpFilterParams,
      (error, data) => (
        error ? reject(error) : resolve(data)
        // {
        // if (error) {
        //   throw new Error(error);
        // }
        // return resolve(data);
      // },
      ),
    );
  })
);

export function* runHPFilterAnalytics({ ayid }) {
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

  const [resolvedParams, errs] = yield resolveHPParameters({ ayid });

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

  const HPParams = new HPFilterParameters();
  HPParams.x = WSeries.constructFromObject(resolvedParams.variable);
  HPParams.lambda = resolvedParams.lambda.value;
  HPParams.dropna = resolvedParams.dropna;
  let data;
  try {
    data = yield call(callHPFilterAnalytics, HPParams);
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
    yield put(saveAnalyticsResults({ ayid, results: data.result, resolvedParameters: resolvedParams }));
    yield put(saveAnalyticsStatus({ ayid, status: AnalyticsStatus.completed }));
  }
  yield put(updateAnalyticsUIAction(ayid, {
    tabs: {
      navbarTabId: AnalyticsTabs.results,
    },
  }));
  return [data, undefined];
}
