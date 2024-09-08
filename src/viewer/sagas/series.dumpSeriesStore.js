import {
  select,
} from 'redux-saga/effects';
import {
  seriesStoreSelector,
} from '../selectors/series';

/*
  save graph
  transform graph to a form that can be saved to the backend:
  - remove transformed series
  - remove data from resolved series and set status to RESOLVED (this will indicate that series will have to be refetched when user
    wants to change something in )
*/

export default function* dumpSeriesStore() {
  const series = yield select(seriesStoreSelector);

  return {
    ...series,
  };
}
