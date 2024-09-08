import { select } from 'redux-saga/effects';
import FlexLayout from 'flexlayout-react';
import { isNil } from 'ramda';
import {
  analyticsModelSelector,
  flexLayoutModelSelector,
  timeseriesBrowserModelSelector,
} from '../../selectors/workbookSelectors';
import {
  TIMESERIES_BROWSER_TAB,
  ANALYTICS_BORDER_TAB,
} from '../../layouts/definitions';


export default function* dumpModel() {
  const main = yield (select(flexLayoutModelSelector));
  const analyticsModel = yield (select(analyticsModelSelector));
  const timeseriesBrowserModel = yield (select(timeseriesBrowserModelSelector));

  if (!isNil(analyticsModel)) {
    main.doAction(FlexLayout.Actions.updateNodeAttributes(ANALYTICS_BORDER_TAB, {
      config: {
        model: analyticsModel.toJson(),
      },
    }));
  }

  if (!isNil(analyticsModel)) {
    main.doAction(FlexLayout.Actions.updateNodeAttributes(TIMESERIES_BROWSER_TAB, {
      config: {
        model: timeseriesBrowserModel.toJson(),
      },
    }));
  }

  return main.toJson();
}
