import { select, put, takeEvery } from "redux-saga/effects";
import { isNil, has } from "ramda";
import { fredCategorySelector } from "../selectors/ui";
import { fetchFredCategoryAction } from "../actions/fredActions";
import { fetchCategorySeries } from "./fred";
import {
  fredBrowserSaveExpandedCategoryAction,
  fredBrowserSaveCollapsedCategoryAction,
  fredBrowserSaveSelectedCategoryAction,
  FRED_BROWSER_ADD_SERIES,
} from "../actions/uiActions";
import { workbookAddNewGraphTabAction } from "../../workbook/action/workbookActions";
import createGraph from "./graph.createGraph";
import { reportErrorAction } from "../actions/errorActions";

import { fetchFredCategory } from "./fred";
import {
  FRED_BROWSER_COLLAPSE_CATEGORY,
  FRED_BROWSER_EXPAND_CATEGORY,
  FRED_BROWSER_SELECT_CATEGORY,
} from "../actions/uiActions";

function* expandCategory(data) {
  const { categoryId } = data.payload;
  if (isNil(categoryId)) {
    yield put(
      reportErrorAction(
        "Internal Error: expandCategory: categoryId is not specified"
      )
    );
  }

  const category = yield select(fredCategorySelector(categoryId));
  console.log("has('fetched', category)", has("fetched", category));
  console.log("!category.fetched", !category.fetched);
  if (has("fetched", category) && !category.fetched) {
    yield* fetchFredCategory({ categoryId });
    const updatedData = yield select((state) => state.fred.categories); // Wait for state update
    console.log("updatedData", updatedData);
  }
  yield put(fredBrowserSaveExpandedCategoryAction(categoryId));
}

function* collapseCategory(message) {
  const { categoryId } = message.payload;
  if (isNil(categoryId)) {
    yield put(
      reportErrorAction(
        "Internal Error: collapseCategory: categoryId is not specified"
      )
    );
  }
  yield put(fredBrowserSaveCollapsedCategoryAction(categoryId));
}

function* selectCategory(message) {
  const { categoryId } = message.payload;
  if (isNil(categoryId)) {
    yield put(
      reportErrorAction(
        "Internal Error: selectCategory: categoryId is not specified"
      )
    );
  }
  yield* fetchCategorySeries({ categoryId });
  // const category = yield select(fredCategorySelector(categoryId));
  // if (has('fetched', category) && !category.fetched) {
  //   yield* fetchFredCategory({ categoryId });
  //   const updatedData = yield select((state) => state.fred.categories); // Wait for state update
  //   console.log('updatedData', updatedData);
  // }
  // TODO fetch time series if not present
  yield put(fredBrowserSaveSelectedCategoryAction(categoryId));
}

function* addFredSeries(message) {
  const { seriesId } = message.payload;

  // check if exists in the store
  // if not fetch it from Fred

  if (isNil(seriesId)) {
    yield put(
      reportErrorAction(
        "Internal Error: addTimeseries: timeseires or collection is not specified"
      )
    );
  }
  let gid = yield select(currentGraphGidSelector);
  if (isNil(gid)) {
    gid = yield createGraph({ gid }, false);
    yield put(workbookAddNewGraphTabAction(undefined, gid));
  }
  yield put(
    addRefSeriesToGraphAction({
      gid,
      name: timeseries.name,
      spaceId: collection.spaceId,
      collId: collection.collId,
      tsid: timeseries.tsid,
    })
  );
}

export default function* watchUIFredActions() {
  yield takeEvery(FRED_BROWSER_EXPAND_CATEGORY, expandCategory);
  yield takeEvery(FRED_BROWSER_COLLAPSE_CATEGORY, collapseCategory);
  yield takeEvery(FRED_BROWSER_SELECT_CATEGORY, selectCategory);
  yield takeEvery(FRED_BROWSER_ADD_SERIES, addFredSeries);
}
