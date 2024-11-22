import { createStore } from "redux";
import reducer from "./seriesReducer";
import {
  saveSeriesAction,
  saveResolvedSeriesAction,
  saveDeleteSeriesAction,
  saveUpdateSeriesAction,
  restoreSeriesStoreAction,
} from "../actions/seriesActions";
import { ISeries } from "../types/TSeries";
import { IFreq, IDType } from "../types/Tcommon";

describe("seriesReducer", () => {
  const initialState = {
    definition: {},
    resolved: {},
  };

  it("should return the initial state", () => {
    const store = createStore(reducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual(initialState);
  });

  it("should handle SERIES_SAVE_SERIES", () => {
    const series: ISeries = {
      wsid: "ws1",
      realtime: {},
      freq: IFreq.DAILY,
      fparams: {},
      dtype: IDType.FLOAT,
      units: {},
      data: [],
    };
    const action = saveSeriesAction({ wsid: "ws1", series });
    const expectedState = {
      ...initialState,
      definition: { ws1: series },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SERIES_SAVE_RESOLVED_SERIES", () => {
    const series: ISeries = {
      wsid: "ws1",
      realtime: {},
      freq: IFreq.DAILY,
      fparams: {},
      dtype: IDType.FLOAT,
      units: {},
      data: [],
    };
    const action = saveResolvedSeriesAction({ wsid: "ws1", series });
    const expectedState = {
      ...initialState,
      resolved: { ws1: series },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SERIES_SAVE_DELETE_SERIES", () => {
    const state = {
      ...initialState,
      resolved: { ws1: { wsid: "ws1" } as ISeries },
    };
    const action = saveDeleteSeriesAction({ wsid: "ws1" });
    const expectedState = {
      ...state,
      resolved: {},
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle SERIES_SAVE_UPDATE", () => {
    const state = {
      ...initialState,
      definition: {
        ws1: { wsid: "ws1", collId: "coll1", tsid: "ts1" } as ISeries,
      },
    };
    const series: Partial<ISeries> = { units: { a: "a" } };
    const action = saveUpdateSeriesAction({ wsid: "ws1", series });
    const expectedState = {
      ...state,
      definition: {
        ws1: {
          wsid: "ws1",
          collId: undefined,
          tsid: undefined,
          units: { a: "a" },
        } as ISeries,
      },
      resolved: {},
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle SERIES_SAVE_RESTORE_SERIES", () => {
    const restoredState = {
      definition: { ws1: { wsid: "ws1" } as ISeries },
      resolved: { ws2: { wsid: "ws2" } as ISeries },
    };
    const action = restoreSeriesStoreAction(restoredState);
    expect(reducer(initialState, action)).toEqual(restoredState);
  });
});
