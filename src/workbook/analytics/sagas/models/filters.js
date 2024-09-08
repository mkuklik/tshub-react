/* eslint-disable import/prefer-default-export */
import {
  put, select,
} from 'redux-saga/effects';
import { isNil } from 'ramda';
import { analyticsResultsSelector, analyticsResolvedParametersSelector } from '../../selectors';
import createGraph from '../../../../viewer/sagas/graph.createGraph';
import { addSeries, addDataSeries } from '../../../../viewer/sagas/graph.addSeries';
import { focusOnGraphAction } from '../../../../viewer/actions/graphActions';
import { selectGraphTabTabset } from '../../../sagas/workbook/selectGraphTabTabset';
import { addGraphTabToModel } from '../../../sagas/workbook/addGraphTabToModel';
import { reportErrorAction } from '../../../../viewer/actions/errorActions';
import { currentGraphGidSelector } from '../../../../viewer/selectors/graph';
import { seriesSelector } from '../../../../viewer/selectors/series';


export function* analyticsHPGraph({ ayid, name, create }) {
  console.log("analyticsHPGraph");
  let gid;
  // if (create) {
  //   gid = yield createGraph({title, legend: true }, false); // doUpdate is false
  // } else {
  //   gid = yield select(currentGraphGidSelector);
  // }

  // if (isNil(gid)) {
  //   yield put(reportErrorAction(Error('HP Filter: no target graph')));
  //   return;
  // }

  if (name === 'variable') {
    const resolvedParameters = yield select(analyticsResolvedParametersSelector(ayid));
    if (isNil(resolvedParameters)) {
      yield put(reportErrorAction(Error('HP Filter: resolved parameters cannot be found')));
      return;
    }
    const { wsid } = resolvedParameters.variable;
    if (isNil(wsid)) {
      yield put(reportErrorAction(Error('HP Filter: series not found')));
      return;
    }

    if (create) {
      const { name: varname } = yield select(seriesSelector(wsid));
      const title = `${varname}`;
      gid = yield createGraph({ title, legend: true }, false); // doUpdate is false
    } else {
      gid = yield select(currentGraphGidSelector);
    }

    if (isNil(gid)) {
      yield put(reportErrorAction(Error('HP Filter: no target graph')));
      return;
    }

    yield addSeries({ gid, wsid }, true);
  } else {
    const results = yield select(analyticsResultsSelector(ayid));

    if (isNil(results)) {
      yield put(reportErrorAction(Error('HP Filter: results are missing')));
      return;
    }
    const data = results[name];
    if (isNil(data)) {
      yield put(reportErrorAction(Error(`HP Filter: data for ${name} is missing`)));
      return;
    }
    if (create) {
      const title = `Results`;
      gid = yield createGraph({ title, legend: true }, false); // doUpdate is false
    } else {
      gid = yield select(currentGraphGidSelector);
    }

    if (isNil(gid)) {
      yield put(reportErrorAction(Error('HP Filter: no target graph')));
      return;
    }

    yield addDataSeries({ gid, ...data }, true);
  }

  if (create) {
    yield addGraphTabToModel({ gid });
    yield selectGraphTabTabset({ gid });
    yield put(focusOnGraphAction(gid)); // update currentGraphId
  }
}
