import {
  select, put, takeEvery,
} from 'redux-saga/effects';
import { isNil, has, path } from 'ramda';
import { fredCategorySelector } from '../selectors/ui';
import { fetchFredCategoryAction } from '../actions/fredActions';
import {
  fredBrowserSaveExpandedCategoryAction,
  fredBrowserSaveCollapsedCategoryAction,
} from '../actions/uiActions';
// import { workbookAddNewGraphTabAction } from '../../workbook/action/workbookActions';
import { reportErrorAction } from '../actions/errorActions';
// import createGraph from './graph.createGraph';
import { fetchFredCategory } from './fred';
import {
  FRED_BROWSER_COLLAPSE_CATEGORY,
  FRED_BROWSER_EXPAND_CATEGORY,
  FRED_BROWSER_SELECT_CATEGORY,
} from '../actions/ActionTypes';

function* expandCategory(data) {
  const { categoryId } = data.payload;
  if (isNil(categoryId)) {
    yield put(reportErrorAction('Internal Error: expandCategory: categoryId is not specified'));
  }

  const category = yield select(fredCategorySelector(categoryId));
  console.log("has('fetched', category)", has('fetched', category));
  console.log('!category.fetched', !category.fetched);
  if (has('fetched', category) && !category.fetched) {
    yield* fetchFredCategory({ categoryId });
    const updatedData = yield select((state) => state.fred.categories); // Wait for state update
    console.log('updatedData', updatedData);
  }
  yield put(fredBrowserSaveExpandedCategoryAction(categoryId));
}

function* collapseCategory(message) {
  const { categoryId } = message.payload;
  if (isNil(categoryId)) {
    yield put(reportErrorAction('Internal Error: collapseCategory: categoryId is not specified'));
  }
  yield put(fredBrowserSaveCollapsedCategoryAction(categoryId));
}

function* selectCategory(message) {
  const { categoryId } = message.payload;
  if (isNil(categoryId)) {
    yield put(reportErrorAction('Internal Error: selectCategory: categoryId is not specified'));
  }
  // const category = yield select(fredCategorySelector(categoryId));
  // if (has('fetched', category) && !category.fetched) {
  //   yield* fetchFredCategory({ categoryId });
  //   const updatedData = yield select((state) => state.fred.categories); // Wait for state update
  //   console.log('updatedData', updatedData);
  // }
  yield put(fredBrowserSaveExpandedCategoryAction(categoryId));
}

export default function* watchUIFredActions() {
  yield takeEvery(FRED_BROWSER_EXPAND_CATEGORY, expandCategory);
  yield takeEvery(FRED_BROWSER_COLLAPSE_CATEGORY, collapseCategory);
  yield takeEvery(FRED_BROWSER_SELECT_CATEGORY, selectCategory);
}
