import { put, select } from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import {
  saveAnalyticsParametersAction,
} from '../actions';
import { AnalyticsKind } from '../definitions/AnalyticsKind';
import {
  analyticsSelector,
  analyticsParametersSelector,
} from '../selectors';

export function* updateHPFilterParameters({ ayid, parameters }) {
  const freq = path(['variable', 'freq'], parameters);
  const wsid = path(['variable', 'wsid'], parameters);
  const prevParameters = yield select(analyticsParametersSelector(ayid));
  const prevWsid = path(['variable', 'wsid'], prevParameters);

  let outParameters = parameters;

  if (!isNil(freq) && (prevWsid !== wsid)) {
    let lambda;
    switch (freq) {
      case 'D':
        lambda = 110930628906; // 1600 × (365/4)^4
        break;
      case 'W':
        lambda = 33177600; // 1600 × (12)^4
        break;
      case 'M':
        lambda = 129600;
        break;
      case 'Q':
        lambda = 1600;
        break;
      case 'A':
        lambda = 6.25;
        break;
      default:
        lambda = undefined;
    }

    if (!isNil(lambda)) {
      outParameters = {
        ...parameters,
        lambda: {
          value: lambda,
        },
      };
    }
  }

  yield put(saveAnalyticsParametersAction({ ayid, parameters: outParameters }));
}


export function* updateCFFilterParameters({ ayid, parameters }) {
  const freq = path(['variable', 'freq'], parameters);
  const wsid = path(['variable', 'wsid'], parameters);
  const prevParameters = yield select(analyticsParametersSelector(ayid));
  const prevWsid = path(['variable', 'wsid'], prevParameters);

  let outParameters = parameters;

  if (!isNil(freq) && (prevWsid !== wsid)) {
    // only when variable is changing
    let low; let
      high;
    switch (freq) {
      // case 'D':
      //   lambda = 110930628906; // 1600 × (365/4)^4
      //   break;
      // case 'W':
      //   lambda = 33177600; // 1600 × (12)^4
      //   break;
      case 'M':
        low = 18;
        high = 96;
        break;
      case 'Q':
        low = 6;
        high = 32;
        break;
      // case 'A':
      //   break;
      default:
        low = undefined;
        high = undefined;
    }

    if (!isNil(low) && !isNil(high)) {
      outParameters = {
        ...parameters,
        low: {
          value: low,
        },
        high: {
          value: high,
        },
      };
    }
  }

  const l = path(['low', 'value'], outParameters);
  const h = path(['high', 'value'], outParameters);
  if (!isNil(l) && !isNil(h)) {
    if (l >= h) {
      outParameters = {
        ...parameters,
        low: {
          value: l,
        },
        high: {
          value: h,
        },
        errors: [{ message: 'minimum period has to be less than maximum period' }],
      };
    }
  }

  yield put(saveAnalyticsParametersAction({ ayid, parameters: outParameters }));
}


export default function* updateAnalyticsParameters({ ayid, parameters }) {
  const analytics = yield select(analyticsSelector(ayid));
  switch (analytics.kind) {
    case AnalyticsKind.HPFilter:
      yield updateHPFilterParameters({ ayid, parameters });
      break;
    case AnalyticsKind.CFFilter:
      yield updateCFFilterParameters({ ayid, parameters });
      break;
    default:
      yield put(saveAnalyticsParametersAction({ ayid, parameters }));
  }
}
