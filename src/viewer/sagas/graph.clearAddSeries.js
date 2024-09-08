import { isNil } from 'ramda';
import { addRefSeries } from './graph.addSeries';
import clearSeries from './graph.clearSeries';
import { currentGraphSelector } from '../selectors/graph';

function* clearAddSeries(action) {
  let { gid } = action;
  if (isNil(gid)) gid = yield currentGraphSelector;
  yield clearSeries({ gid }, false);
  yield addRefSeries({ ...action, gid });
}

export default clearAddSeries;
