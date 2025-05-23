import { put, select } from 'redux-saga/effects';
import type { PutEffect, SelectEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { saveGraphFreqAction } from '../actions/graphActions';
import type { ISaveGraphFreqAction } from '../actions/graphActions';
import { graphsReducerSelector } from '../selectors/graph';
import type { IGraphState } from '../reducers/graphsReducer.ts.old';

export default function* determineGraphFreq(gid: string): Generator<PutEffect<Action> | SelectEffect, string | undefined, IGraphState> {
  const graph = yield select(graphsReducerSelector);
  const graphObject = graph.objects[gid];

  if (!graphObject) {
    return undefined;
  }

  // If the graph already has a determined frequency, return it
  if (graphObject.determinedFreq) {
    return graphObject.determinedFreq;
  }

  // Otherwise, determine the frequency based on the series
  const series = graphObject.definition.series || [];
  if (series.length === 0) {
    return undefined;
  }

  // Get the frequency of the first series
  const freq = series[0].freq;
  yield put(saveGraphFreqAction({ gid, freq }));
  return freq;
} 