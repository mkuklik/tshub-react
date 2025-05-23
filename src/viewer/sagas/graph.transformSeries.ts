import { put, select } from 'redux-saga/effects';
import type { PutEffect, SelectEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { isNil } from 'ramda';
import moment, { type Moment } from 'moment';
import {
  saveTransformedSeriesBulkAction, addGraphErrorsAction,
} from '../actions/graphActions';
import {
  graphSelector,
  graphFreqSelector,
} from '../selectors/graph';
import { resolvedSeriesSelector } from '../selectors/series';
import type { TS, TSOptions } from '../../expressions/timeseries';
import { freqOrder } from '../../expressions/freqOrder';
import {
  toHigherFrequency,
  toLowerFrequency,
  mergeSeries,
} from '../../expressions/timeseries-graph-functions';
import { GraphProcessingStage } from './graph.constants';
import { defaultResolvedSeries } from './graph.defaults';
import type { IResolvedSeries } from '../types/TSeries';
import type { IGraphType, ITransformedSeriesType } from '../types/TGraph';
import type { IFreq } from '../types/Tcommon';

const defaults = {
  toHigherFrequencyMethod: 'auto',
  toLowerFrequencyMethod: 'auto',
  missingValueMethod: 'auto',
  partialPeriodsMethod: 'auto',
  mergeMethod: 'any',
};

interface ITransformFreqParams {
  ts: TS;
  toFreq: string;
  toHigherMethod: string;
  toLowerMethod: string;
}

function transformFreq({ ts, toFreq, toHigherMethod, toLowerMethod }: ITransformFreqParams): TS {
  if (toFreq === ts.freq) {
    return ts;
  } 
  if (freqOrder[toFreq as keyof typeof freqOrder] > freqOrder[ts.freq as keyof typeof freqOrder]) {
    return toHigherFrequency(ts, toFreq, toHigherMethod);
  }
  return toLowerFrequency(ts, toFreq, toLowerMethod);
}


export default function* transformSeries(gid: string, wsid?: string): Generator<PutEffect<Action> | SelectEffect, ITransformedSeriesType, unknown> {
  /*
  transform resolved series to graph frequency and others like chosen currency
  and merge
  */

  const transformedSeries: ITransformedSeriesType = {};

  // 1. transform frequencies
  const graph = (yield select(graphSelector(gid))) as IGraphType;
  const determinedFreq = (yield select(graphFreqSelector(gid))) as IFreq;

  const graphDef = graph.definition;
  if (graphDef === undefined) return transformedSeries;
  // todo handle this situation

  if (determinedFreq === undefined) {
    // handle errors
    for (const seriesDef of graphDef.series) {
      transformedSeries[seriesDef.wsid] = defaultResolvedSeries(seriesDef.wsid);
    }
    yield put(saveTransformedSeriesBulkAction({ gid, transformedSeries }));
    return transformedSeries;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const seriesDef of graphDef.series) {
    // take resolved series
    const rs = (yield select(resolvedSeriesSelector(seriesDef.wsid))) as IResolvedSeries;
    if (isNil(rs)) {
      yield put(addGraphErrorsAction({
        gid,
        errors: [{
          wsid: seriesDef.wsid,
          message: `resolved series (${seriesDef.wsid}) not found`,
          stage: GraphProcessingStage.TRANSFORM,
        }],
      }));
      transformedSeries[seriesDef.wsid] = new TS([], undefined, undefined, undefined, undefined, undefined, undefined);
      continue;
    }
    // convert to TS object
    const ts = new TS(rs.data.map((x: [string | number, number]) => [moment.utc(x[0]), x[1]]),
      rs.freq, rs.fparams, rs.dtype, rs.dparams, rs.units, rs.options as TSOptions);

    // 1. partial values treatment
    // TODO

    // 2. convert to graph frequency
    const toLowerFrequencyMethod = seriesDef.toLowerFrequencyMethod
      || graphDef.toLowerFrequencyMethod
      || defaults.toLowerFrequencyMethod;
    const toHigherFrequencyMethod = seriesDef.toHigherFrequencyMethod
      || graphDef.toHigherFrequencyMethod
      || defaults.toHigherFrequencyMethod;

    try {
      transformedSeries[seriesDef.wsid] = transformFreq({
        ts,
        toFreq: graph.determinedFreq,
        toHigherMethod: toHigherFrequencyMethod,
        toLowerMethod: toLowerFrequencyMethod,
      });
    } catch (error) {
      // TODO TODO TODO !!!
      // transformedSeries[seriesDef.wsid] = undefined; // TEMP
      throw error;
    }
    // determine whether series was modified from its original frequency, if so reset collId/tsid,
    // otherwise use collId/tsid from seriesDef. Note that collId/tsid in transformed series is
    // used by the table. We need to do it becuase series that changed its frequency can't have
    // target asign to it as graph frequency is different than original freq of that series.
    if (graph.determinedFreq === rs.freq) {
      transformedSeries[seriesDef.wsid].collId = rs.collId;
      transformedSeries[seriesDef.wsid].tsid = rs.tsid;
    } else {
      transformedSeries[seriesDef.wsid].collId = undefined;
      transformedSeries[seriesDef.wsid].tsid = undefined;
    }

    // 3. missing values
    //   deal with missing values as per series
    const missingValueMethod = seriesDef.missingValueMethod || graphDef.missingValueMethod;
    // TODO
  }
  // 4. merge
  const mergeMethod = graphDef.mergeMethod
    || defaults.mergeMethod || 'any';

  // 5. range
  let rangeStart: Moment | undefined;
  let rangeEnd: Moment | undefined;
  if (!isNil(graphDef.rangeStart)) rangeStart = moment.utc(graphDef.rangeStart);
  if (!isNil(graphDef.rangeEnd)) rangeEnd = moment.utc(graphDef.rangeEnd);
  // make sure rangeStart, rangeEnd

  // try {
  const mergedSeries = mergeSeries(transformedSeries, mergeMethod, rangeStart, rangeEnd);
  // } catch (error) {
  // todo
  // }

  // 5. convert back to timestamp
  // eslint-disable-next-line no-restricted-syntax
  for (const seriesDef of graphDef.series) {
    transformedSeries[seriesDef.wsid] = {
      // ...transformedSeries[seriesDef.wsid],
      freq: mergedSeries[seriesDef.wsid].freq,
      fparams: mergedSeries[seriesDef.wsid].fparams,
      dtype: mergedSeries[seriesDef.wsid].dtype,
      dparams: mergedSeries[seriesDef.wsid].dparams,
      units: mergedSeries[seriesDef.wsid].units,
      data: mergedSeries[seriesDef.wsid].data.map((x: [Moment, number]) => [x[0].valueOf(), x[1]]),
      // required for annotation and table module
      collId: transformedSeries[seriesDef.wsid].collId,
      tsid: transformedSeries[seriesDef.wsid].tsid,
    };
  }

  yield put(saveTransformedSeriesBulkAction({ gid, transformedSeries }));
  return transformedSeries;
} 