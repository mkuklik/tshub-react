import { put, select } from 'redux-saga/effects';
import * as R from 'ramda';
import { saveGraphFreqAction } from '../actions/graphActions';
import { graphSelector, defaultsSelector } from '../selectors/graph';
import { resolvedSeriesFrequencySelector } from '../selectors/series';
import { freqOrder } from '../../expressions/freqOrder';
import { GraphFrequencyMethod } from './graph.constants';

export default function* determineGraphFreq({ gid } = {}) {
  /*
  determine graph frequency from resolved series
  */
  const graph = yield select(graphSelector(gid));
  const defaults = yield select(defaultsSelector);

  if (graph === undefined) return undefined;

  if (R.has('freq', graph.definition) && graph.definition.freq !== undefined) return graph.definition.freq;

  // if graph frequency is not explicitely defined by a user
  // frequency is automatically determined based on the frequency of the resolved time series:
  // - lowest frequency (graph frequency is the lowest frequency of all resolved series)
  // - highest frequency (graph frequency is the highest frequency of all resolved series)
  
  // collect resolved series
  let freqs = [];
  for (const series of graph.definition.series) {
    const freq = yield select(resolvedSeriesFrequencySelector(series.wsid));
    if (!R.isNil(freq)) freqs=[...freqs, freq];
  }
  if (freqs.length === 0) {
    yield put(saveGraphFreqAction({ gid, freq: undefined }));
    return undefined;
  }
  // const freqs = R.filter(R.compose(R.not, R.isNil), Object.values(R.map((s) => s.freq, graph.resolvedSeries)));

  // find out the method
  const method = graph.definition.graphFrequencyMethod
    || defaults.graphFrequencyMethod
    || GraphFrequencyMethod.highest;

  let ordered;
  switch (method) {
    case 'highest': {
      ordered = R.sort((a, b) => freqOrder[b] - freqOrder[a], freqs);
      break;
    }
    case 'lowest': {
      ordered = R.sort((a, b) => freqOrder[a] - freqOrder[b], freqs);
      break;
    }
    default:
      return undefined;
  }
  const freq = ordered[0];
  yield put(saveGraphFreqAction({ gid, freq }));
  return freq;
}
