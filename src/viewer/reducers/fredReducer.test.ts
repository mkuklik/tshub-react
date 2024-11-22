import { createStore } from "redux";
import fredReducer, { initialState } from "./fredReducer";
import {
  saveFredCategoryAction,
  saveFredTimeseriesListAction,
  saveFredBrowserConfigAction,
} from "../actions/fredActions";

describe("fred reducer", () => {
  it("should return the initial state", () => {
    const store = createStore(fredReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual(initialState);
  });

  it("should handle SAVE_FRED_CATEGORY when category exists", () => {
    const action = saveFredCategoryAction({
      categoryId: 0,
      children: [{ id: 1, name: "Category 1" }],
    });
    const expectedState = {
      ...initialState,
      categories: {
        ...initialState.categories,
        0: { ...initialState.categories[0], children: [1], fetched: true },
        1: { name: "Category 1", children: null, parentId: 0, fetched: false },
      },
    };
    expect(fredReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SAVE_FRED_CATEGORY when category does not exist", () => {
    const action = saveFredCategoryAction({
      categoryId: 1,
      children: [{ id: 2, name: "Category 2" }],
    });
    const expectedState = {
      ...initialState,
      categories: {
        ...initialState.categories,
        1: { name: null, children: [2], fetched: true, parentId: null },
        2: { name: "Category 2", children: null, parentId: 1, fetched: false },
      },
    };
    expect(fredReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SAVE_FRED_TIMESERIES_LIST", () => {
    const action = saveFredTimeseriesListAction({
      seriess: [
        {
          id: "FRED1",
          title: "Series 1",
          observation_start: "2023-01-01",
          observation_end: "2023-12-31",
        },
        {
          id: "FRED2",
          title: "Series 2 (DISCONTINUED)",
          observation_start: "2022-01-01",
          observation_end: "2022-12-31",
        },
      ],
    });
    const expectedState = {
      ...initialState,
      timeseries: {
        FRED1: {
          id: "FRED1",
          title: "Series 1",
          observation_start: "2023-01-01",
          observation_end: "2023-12-31",
        },
      },
    };
    expect(fredReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SAVE_FRED_CONFIG", () => {
    const action = saveFredBrowserConfigAction({
      apiKey: "newApiKey",
      removeDiscontinued: false,
    });
    const expectedState = {
      ...initialState,
      config: { apiKey: "newApiKey", removeDiscontinued: false },
    };
    expect(fredReducer(initialState, action)).toEqual(expectedState);
  });
});
