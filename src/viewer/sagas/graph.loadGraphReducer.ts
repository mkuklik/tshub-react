import { put } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import type { Action } from 'redux';
import { mapObjIndexed, isNil, map } from 'ramda';
import moment from 'moment';
import { restoreGraphReducer } from '../actions/graphActions';
import { defaultGraphUI } from './graph.defaults';
import type { IGraphState } from '../reducers/graphsReducer.ts.old';

interface ILoadGraphStoreParams {
  graphs?: IGraphState;
}

export default function* loadGraphStore({ graphs } = {} as ILoadGraphStoreParams): Generator<PutEffect<Action>, void, unknown> {
  // add ui to each graph object
  if (!isNil(graphs)) {
    let objects = mapObjIndexed((x) => ({ ...x, ui: defaultGraphUI }), graphs.objects);
    // convert realtime string to Date object
    objects = map((x) => ({
      ...x,
      definition: {
        ...x.definition,
        realtime: moment(x.definition.realtime).toDate(),
      },
    }), objects);

    const final = {
      ...graphs,
      objects,
    };

    yield put(restoreGraphReducer(final));
  }
} 