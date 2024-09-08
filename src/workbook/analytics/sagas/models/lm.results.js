/* eslint-disable import/prefer-default-export */
import {
  put, select,
} from 'redux-saga/effects';
import { isNil, path } from 'ramda';
import { analyticsParametersSelector, analyticsResultsSelector } from '../../selectors';
import createGraph from '../../../../viewer/sagas/graph.createGraph';
import { addDataSeries, addSeries } from '../../../../viewer/sagas/graph.addSeries';
import { focusOnGraphAction } from '../../../../viewer/actions/graphActions';
import { selectGraphTabTabset } from '../../../sagas/workbook/selectGraphTabTabset';
import { addGraphTabToModel } from '../../../sagas/workbook/addGraphTabToModel';
import { reportErrorAction } from '../../../../viewer/actions/errorActions';
import { currentGraphGidSelector } from '../../../../viewer/selectors/graph';

const xRegex = /x(\d*)/;

export function* lmGraphs({ ayid, name, create }) {
  // if gid is nil, use current graph
  const params = yield select(analyticsParametersSelector(ayid));
  const results = yield select(analyticsResultsSelector(ayid));

  let gid;
  if (create) {
    // todo title based on graph type
    let title; let subtitle;
    switch (name) {
      case 'dependent':
        title = `Dependent - ${ayid}`;
        // subtitle = `Dependent var`;
        break;
      case 'Residual':
        title = `Residual - ${ayid}`;
        // subtitle = ``;
        break;
      case 'ActualFittedResidual':
        title = `Actual/Fitted/Residual - ${ayid}`;
        // subtitle = ``;
        break;
      case 'Fitted':
        title = `Fitted - ${ayid}`;
        // subtitle = ``;
        break;
      default:
        title = undefined;
        // subtitle = ``;
    }
    gid = yield createGraph({ title, subtitle, legend: true }, false);
    yield addGraphTabToModel({ gid });
    yield selectGraphTabTabset({ gid });
    yield put(focusOnGraphAction(gid)); // update currentGraphId
  } else {
    gid = yield select(currentGraphGidSelector);
  }
  if (isNil(gid)) {
    yield put(reportErrorAction('No active graph'));
    return;
  }

  const r = xRegex.exec(name);

  if (!isNil(r)) {
    const wsid = path(['regressors', r[1], 'wsid'], params);
    if (!isNil(wsid)) yield addSeries({ wsid });
    else put(reportErrorAction(`regressor ${name} variable wsid not found`));
  } if (name === 'dependent') {
    const wsid = path(['dependent', 'wsid'], params);
    if (!isNil(wsid)) yield addSeries({ wsid });
    else put(reportErrorAction('Dependent variable wsid not found'));
  } else if (name === 'Residual') {
    yield addDataSeries({ gid, name: 'Residual', ...results.resid });
  } else if (name === 'ActualFittedResidual') {
    yield addDataSeries({ gid, name: 'Residual', ...results.resid }, false);
    yield addDataSeries({ gid, name: 'Fitted', ...results.fittedvalues }, false);
    yield addSeries({ gid, name: 'Actual', wsid: params.dependent.wsid }, true);
  } else if (name === 'Fitted') {
    yield addDataSeries({ gid, name: 'Fitted', ...results.fittedvalues });
  } else put(reportErrorAction('lmGraph unknown graph name'));
}


// export function* createResidualGraph({ ayid }) {
//   const results = yield select(analyticsResultsSelector(ayid));

//   if (isNil(results)) {
//     put(reportErrorAction());
//     return;
//   }
//   const { resid } = results;

//   const gid = yield createGraph({}, false); // doUpdate is false
//   yield addDataSeries({ gid, ...resid }, true);
//   yield addGraphTabToModel({ gid });
//   yield selectGraphTabTabset({ gid });
//   yield put(focusOnGraphAction(gid)); // update currentGraphId
// }


// export function* addResidualToGraph({ ayid, gid }) {
//   // if gid is nil, use current graph
//   const results = yield select(analyticsResultsSelector(ayid));

//   if (isNil(results)) {
//     put(reportErrorAction());
//     return;
//   }

//   const { resid } = results;
//   yield addDataSeries({ gid, ...resid });
// }

// export function* CreateActualFittedResidualGraph({ ayid }) {
//   const parameters = yield select(analyticsParametersSelector(ayid));
//   const results = yield select(analyticsResultsSelector(ayid));

//   if (isNil(parameters)) {
//     put(reportErrorAction()); // TODO
//     return;
//   }

//   if (isNil(results)) {
//     put(reportErrorAction()); // TODO
//     return;
//   }
//   const { resid, fittedvalues } = results;

//   const actualWsid = parameters.dependent.wsid;

//   const gid = yield createGraph({}, false);
//   yield addDataSeries({ gid, ...resid }, false);
//   yield addDataSeries({ gid, ...fittedvalues }, false);
//   yield addSeries({ gid, wsid: actualWsid }, true);

//   yield addGraphTabToModel({ gid });
//   yield selectGraphTabTabset({ gid });
//   yield put(focusOnGraphAction(gid)); // update currentGraphId
// }

// export function* addFittedValuesToGraph({ ayid, gid }) {
//   const results = yield select(analyticsResultsSelector(ayid));

//   if (isNil(results)) {
//     put(reportErrorAction());
//     return;
//   }
//   const { fittedvalues } = results;
//   yield addDataSeries({ gid, ...fittedvalues });
// }
