import {
  put,
} from 'redux-saga/effects';
import ObjectID from 'bson-objectid';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';
import {
  saveAnalytics,
} from '../actions';
import { AnalyticsKind } from '../definitions/AnalyticsKind';
import { defaultLMObject } from '../components/lm/defaults';
import {
  defaultHPFilterObject,
  defaultX12Object,
  defaultCFFilterObject,
  defaultBKFilterObject,
} from '../components/filters/defaults';
import {
  defaultADFTestObject,
  defaultKPSSTestObject,
  defaultAutocorrelationObject,
  defaultPPTestObject,
  defaultCointTestObject,
  defaultDescriptiveStatsObject,
} from '../components/tests/defaults';
import { defaultVARObject } from '../components/var/defaults';


const defaultAnalytics = (ayid, kind) => {
  switch (kind) {
    case AnalyticsKind.LM:
      return {
        ...defaultLMObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.VAR:
      return {
        ...defaultVARObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    // filters
    case AnalyticsKind.HPFilter:
      return {
        ...defaultHPFilterObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.CFFilter:
      return {
        ...defaultCFFilterObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.BKFilter:
      return {
        ...defaultBKFilterObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.X12:
      return {
        ...defaultX12Object,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    // tests
    case AnalyticsKind.Autocorrelation:
      return {
        ...defaultAutocorrelationObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.ADF:
      return {
        ...defaultADFTestObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.KPSS:
      return {
        ...defaultKPSSTestObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.PP:
      return {
        ...defaultPPTestObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.Coint:
      return {
        ...defaultCointTestObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    case AnalyticsKind.Descriptive:
      return {
        ...defaultDescriptiveStatsObject,
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
      };
    default:
      return ({
        ayid,
        kind,
        status: AnalyticsStatus.initiated,
        parameters: {},
        results: {},
        diagnostics: {},
      });
  }
};

function* createAnalytics(action) {
  const { kind } = action;
  let { ayid } = action;
  ayid = ayid || ObjectID().toHexString();
  yield put(saveAnalytics({
    ayid,
    object: defaultAnalytics(ayid, kind),
  }));

  return ayid;
}

export default createAnalytics;
