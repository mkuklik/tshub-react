import {
  put, select,
} from 'redux-saga/effects';
import { path } from 'ramda';
import { updateAnalyticsUIAction, saveAnalyticsParametersAction } from '../actions';
import { analyticsParametersSelector, analyticsUISelector } from '../selectors';
import { createExprSeries } from '../../../viewer/sagas/series.create';
import resolveSeries from '../../../viewer/sagas/series.resolve';
import { SeriesStatus } from '../../../viewer/sagas/series.constants';
import { defaultVariable } from '../components/lm/defaults';


export default function* addVarToList({ ayid, expr, paramName }) {
  const wsid = yield createExprSeries({ expr, name: expr });
  // resolve series
  const resolved = yield resolveSeries({ wsid });
  if (resolved.status === SeriesStatus.SUCCESS) {
    const parameters = yield select(analyticsParametersSelector(ayid));
    const variables = path([paramName], parameters);
    yield put(saveAnalyticsParametersAction({
      ayid,
      parameters: {
        ...parameters,
        [paramName]: [
          ...variables,
          {
            ...defaultVariable,
            wsid,
            expr: undefined,
          },
        ],
      },
    }));
    const ui = yield select(analyticsUISelector(ayid));
    const uiVariables = path([paramName], ui);
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      [paramName]: {
        ...uiVariables,
        expr: '',
        error: undefined,
      },
    }));
  } else {
    const ui = yield select(analyticsUISelector(ayid));
    const uiVariables = path([paramName], ui);
    yield put(updateAnalyticsUIAction(ayid, {
      ...ui,
      [paramName]: {
        ...uiVariables,
        error: resolved.errors.join(', '),
      },
    }));
  }
}
