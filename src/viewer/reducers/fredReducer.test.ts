import { createStore } from "redux";
import fredReducer, { initialState } from "./fredReducer";
import {
  saveFredCategoryAction,
  saveFredTimeseriesListAction,
  saveFredBrowserConfigAction,
} from "../actions/fredActions";
import { IFredSeries } from "../types/TFred";
import { IFrequency, IDType } from "../types/TTimeseries";

const generateFredSeries = (id: string): IFredSeries => ({
  id,
  realtimeStart: "2023-01-01",
  realtimeEnd: "2023-12-31",
  title: `Series ${id}`,
  observationStart: "2023-01-01",
  observationEnd: "2023-12-31",
  frequency: "D",
  frequencyShort: "D",
  units: "Units",
  unitsShort: "Units",
  seasonalAdjustment: "None",
  seasonalAdjustmentShort: "None",
  lastUpdated: "2024-01-01",
  popularity: 100,
  groupPopularity: 100,
  freq: IFrequency.D,
  dtype: IDType.FLOAT,
  isDiscontinued: false,
});

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
    const action = saveFredTimeseriesListAction(1234, [
      generateFredSeries("FRED1"),
      generateFredSeries("FRED2"),
    ]);
    const expectedState = {
      ...initialState,
      timeseries: {
        FRED1: generateFredSeries("FRED1"),
        FRED2: generateFredSeries("FRED2"),
      },
      timeseriesByCategory: {
        1234: ["FRED1", "FRED2"],
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
