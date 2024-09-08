import {
  put, select,
} from 'redux-saga/effects';
import { updateAnalyticsUIAction, saveAnalyticsParametersAction } from '../../actions';
import { analyticsParametersSelector, analyticsUISelector } from '../../selectors';
import { createExprSeries } from '../../../../viewer/sagas/series.create';
import resolveSeries from '../../../../viewer/sagas/series.resolve';
import { SeriesStatus } from '../../../../viewer/sagas/series.constants';
import { defaultVariable } from '../../components/lm/defaults';


export function* addVariable({ ayid, expr }) {
  const wsid = yield createExprSeries({ expr, name: expr });
  // resolve series
  const resolved = yield resolveSeries({ wsid });
  if (resolved.status === SeriesStatus.SUCCESS) {
    const parameters = yield select(analyticsParametersSelector(ayid));
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        variable: {
          ...parameters.variable,
          wsid,
          expr: undefined,
        },
      },
    }));
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      variable: {
        ...ui.variable,
        expr: '',
        error: undefined,
      },
    }));
  } else {
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      variable: {
        ...ui.variable,
        error: resolved.errors.join(', '),
      },
    }));
  }
}


export function* addDependentVariable({ ayid, expr }) {
  const wsid = yield createExprSeries({ expr, name: expr });
  // resolve series
  const resolved = yield resolveSeries({ wsid });
  if (resolved.status === SeriesStatus.SUCCESS) {
    const parameters = yield select(analyticsParametersSelector(ayid));
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        dependent: {
          // ...parameters.dependent,
          ...defaultVariable,
          wsid,
          expr: undefined,
        },
      },
    }));
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      dependent: {
        ...ui.dependent,
        expr: '',
        error: undefined,
      },
    }));
  } else {
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      dependent: {
        ...ui.dependent,
        error: resolved.errors.join(', '),
      },
    }));
  }
}


export function* addRegressor({ ayid, expr }) {
  const wsid = yield createExprSeries({ expr, name: expr });
  // resolve series
  const resolved = yield resolveSeries({ wsid });
  if (resolved.status === SeriesStatus.SUCCESS) {
    const parameters = yield select(analyticsParametersSelector(ayid));
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        regressors: [
          ...parameters.regressors,
          {
            ...defaultVariable,
            wsid,
            expr: undefined,
          },
        ],
      },
    }));
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      regressors: {
        ...ui.regressors,
        expr: '',
        error: undefined,
      },
    }));
  } else {
    const ui = yield select(analyticsUISelector(ayid));
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      regressors: {
        ...ui.regressors,
        error: resolved.errors.join(', '),
      },
    }));
  }
}
