import {
  select,
} from 'redux-saga/effects';
import { analyticsKindSelector } from '../selectors';
import { AnalyticsKind } from '../definitions/AnalyticsKind';
import { runHPFilterAnalytics } from './runHPFilterAnalytics';
import { runLMAnalytics } from './runLMAnalytics';
import { runVARAnalytics } from './runVARAnalytics';
import { runADFTest } from './runADFTest';
import { runKPSSTest } from './runKPSSTest';
import { runAutocorrelation } from './runAutocorrelation';
import { runX12 } from './runX12';
import { runCFFilterAnalytics } from './runCFFilterAnalytics';
import { runPPTest } from './runPPTest';
import { runCointTest } from './runCointTest';
import { runBKFilterAnalytics } from './runBKFilterAnalytics';
import { runDescriptive } from './runDescriptive';


function* runAnalytics({ ayid }) {
  const kind = yield select(analyticsKindSelector(ayid));
  switch (kind) {
    // models
    case AnalyticsKind.LM:
      yield runLMAnalytics({ ayid });
      break;
    case AnalyticsKind.VAR:
      yield runVARAnalytics({ ayid });
      break;
    // tests
    case AnalyticsKind.Autocorrelation:
      yield runAutocorrelation({ ayid });
      break;
    case AnalyticsKind.ADF:
      yield runADFTest({ ayid });
      break;
    case AnalyticsKind.KPSS:
      yield runKPSSTest({ ayid });
      break;
    case AnalyticsKind.PP:
      yield runPPTest({ ayid });
      break;
    case AnalyticsKind.Coint:
      yield runCointTest({ ayid });
      break;
    case AnalyticsKind.Descriptive:
      yield runDescriptive({ ayid });
      break;
    // filters
    case AnalyticsKind.HPFilter:
      yield runHPFilterAnalytics({ ayid });
      break;
    case AnalyticsKind.CFFilter:
      yield runCFFilterAnalytics({ ayid });
      break;
    case AnalyticsKind.BKFilter:
      yield runBKFilterAnalytics({ ayid });
      break;
    case AnalyticsKind.X12:
      yield runX12({ ayid });
      break;
    default:
      console.log(`unknown analytics type ${kind}`);
      // TODO Error reporting
  }
}

export default runAnalytics;
