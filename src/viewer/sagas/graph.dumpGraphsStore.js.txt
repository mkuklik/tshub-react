import { omit, mapObjIndexed } from 'ramda';
import {
  select,
} from 'redux-saga/effects';
import {
  graphsReducerSelector,
} from '../selectors/graph';

/*
  save graph
  transform graph to a form that can be saved to the backend:
  - remove transformed series
  - remove data from resolved series and set status to RESOLVED (this will indicate that series will have to be refetched when user
    wants to change something in )
*/

export default function* dumpGraphsStore() {
  const graph = yield select(graphsReducerSelector);

  // drop ui in every graph
  const objects = mapObjIndexed((x) => omit(['ui'], x), graph.objects);

  return {
    ...graph,
    objects,
  };
}
