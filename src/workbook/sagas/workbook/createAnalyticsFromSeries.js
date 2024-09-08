/* eslint-disable import/prefer-default-export */

import { isNil, path } from 'ramda';
import { select, put } from 'redux-saga/effects';
import { Actions } from 'flexlayout-react';
import { analyticsModelSelector, flexLayoutModelSelector } from '../../selectors/workbookSelectors';
import createAnalyticsTab from './createAnalyticsTab';
import { AnalyticsTabId, ANALYTICS_BORDER_TAB } from '../../layouts/definitions';
import { analyticsParametersSelector } from '../../analytics/selectors';
import { saveAnalyticsParametersAction } from '../../analytics/actions';
import { reportErrorAction } from '../../../viewer/actions/errorActions';


export function* createAnalyticsFromSeries({ kind, wsid }) {
  // const model = yield select(flexLayoutModelSelector);
  // if (isNil(model)) {
  //   yield put(reportErrorAction({ message: 'windows module hasn\'t been initiated' }));
  //   return;
  // }
  // model.doAction(Actions.selectTab(ANALYTICS_BORDER_TAB));

  const analyticsModel = yield select(analyticsModelSelector);
  if (isNil(analyticsModel)) {
    // console.error('analyticsModel is not initiated');
    yield put(reportErrorAction({ message: 'Analytics module hasn\'t been initiated' }));
    return;
  }

  const ayid = yield createAnalyticsTab({ kind });
  const tabId = AnalyticsTabId(ayid);

  analyticsModel.doAction(Actions.selectTab(tabId));

  // add variable
  if (!isNil(wsid)) {
    const parameters = yield select(analyticsParametersSelector(ayid));
    const variable = path(['variable'], parameters);
    const dependent = path(['dependent'], parameters);
    if (!isNil(variable)) {
    // filters and single variable analytics
      const params = {
        ayid,
        parameters: {
          ...parameters,
          variable: {
            wsid,
            expr: undefined,
          },
        },
      };

      yield put(saveAnalyticsParametersAction(params));
    } else if (!isNil(dependent)) {
    // LM model
      yield put(saveAnalyticsParametersAction({
        ayid,
        parameters: {
          ...parameters,
          dependent: {
            ...dependent,
            wsid,
            expr: undefined,
          },
        },
      }));
    } else {
      console.error(`createAnalyticsFromSeries: unknown analytics type ${kind}`);
    }
  }
}
