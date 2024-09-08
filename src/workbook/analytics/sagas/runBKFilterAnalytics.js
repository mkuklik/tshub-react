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
import { WSeries, BKFilterParameters } from '../../../analytics_client';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import { AnalyticsTabs } from '../definitions/AnalyticsTabs';
import resolveHPParameters from './resolveHPParameters';


export const callBKFilterAnalytics = (cfFilterParams) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.filtersApi.analyticsApiFiltersBkfilter(
      cfFilterParams,
      (error, data) => (
        error ? reject(error) : resolve(data)
      ),
    );
  })
);

export function* runBKFilterAnalytics({ ayid }) {
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

  const BKParams = new BKFilterParameters();
  BKParams.x = WSeries.constructFromObject(resolvedParams.variable);
  BKParams.low = resolvedParams.low.value;
  BKParams.high = resolvedParams.high.value;
  BKParams.k = resolvedParams.k.value;
  BKParams.dropna = resolvedParams.dropna;
  let data;
  try {
    data = yield call(callBKFilterAnalytics, BKParams);
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
