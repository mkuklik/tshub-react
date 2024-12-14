import { select, put } from "redux-saga/effects";
import { seriesSelector } from "../selectors/series";
import { SeriesKind } from "./series.constants";
import resolveExpr from "./series.resolveExpr";
import {
  saveResolvedSeriesAction,
  IResolveSeriesAction,
} from "../actions/seriesActions";
import { SeriesState } from "../../types"; // Import the SeriesState type or define it here
import { IResolvedSeries, ISeries } from "../types/TSeries";

function* resolve(action: IResolveSeriesAction): IResolvedSeries | undefined {
  // Type the generator's return
  const { wsid } = action.payload;
  const realtime = action.payload.realtime;
  const series: ISeries = yield select(seriesSelector(wsid)); // Type the selected series

  if (!series) {
    return undefined; // or throw an error if a series is expected
  }

  if (series.kind === TSeriesKind.data) {
    return series;
  }
  if (series.kind === SeriesKind.expr && series.expr) {
    // Check if series.expr exists
    const resolvedSeries = yield resolveExpr({ expr: series.expr, realtime });
    yield put(
      saveResolvedSeriesAction({ wsid, series: { ...resolvedSeries, wsid } })
    );
    return resolvedSeries;
  }
  return undefined; // Or handle other SeriesKind cases as needed
}

export default resolve;

// import {
//   select, put,
// } from 'redux-saga/effects';

// import { seriesSelector } from '../selectors/series';
// import { SeriesKind } from './series.constants';
// import resolveExpr from './series.resolveExpr';
// import { saveResolvedSeriesAction } from '../actions/seriesActions';
// /*
//   resolve series
// */

// function* resolve({ wsid, realtime } = {}) {
//   const series = yield select(seriesSelector(wsid));

//   if (series.kind === SeriesKind.data) {
//     return series;
//   } if (series.kind === SeriesKind.expr) {
//     const resolvedSeries = yield resolveExpr({ expr: series.expr, realtime });
//     yield put(saveResolvedSeriesAction({ wsid, series: { ...resolvedSeries, wsid } }));
//     return resolvedSeries;
//   }
// }

// export default resolve;
