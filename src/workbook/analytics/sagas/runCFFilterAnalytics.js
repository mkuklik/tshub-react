/* eslint-disable no-underscore-dangle */
import { put, call, select } from 'redux-saga/effects';
import { isNil } from 'ramda';
import { analyticsParametersSelector } from '../selectors';
import {
  saveAnalyticsResults,
  saveAnalyticsStatus,
  updateAnalyticsUIAction,
  saveAnalyticsParametersAction,
} from '../actions';
import { WSeries, CFFilterParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveHPParameters from './resolveHPParameters';


export const callCFFilterAnalytics = (cfFilterParams) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.filtersApi.analyticsApiFiltersCffilter(
      cfFilterParams,
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

export function* runCFFilterAnalytics({ ayid }) {
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

  const CFParams = new CFFilterParameters();
  CFParams.x = WSeries.constructFromObject(resolvedParams.variable);
  CFParams.low = resolvedParams.low.value;
  CFParams.high = resolvedParams.high.value;
  CFParams.drift = resolvedParams.drift;
  CFParams.dropna = resolvedParams.dropna;
  let data;
  try {
    data = yield call(callCFFilterAnalytics, CFParams);
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
    yield put(saveAnalyticsStatus({
      ayid,
      status: AnalyticsStatus.completed,
    }));
  }
  yield put(updateAnalyticsUIAction(ayid, {
    tabs: {
      navbarTabId: AnalyticsTabs.results,
    },
  }));
  return [data, undefined];
}
