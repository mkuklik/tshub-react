import { createStore } from "redux";
import obsReducer, { ObservationActions } from "./obsReducer"; // Assuming the reducer is in reducers/obs.ts
import {
  SAVE_OBSERVATIONS,
  saveObservationsAction,
} from "../actions/timeseriesActions";

describe("obs reducer", () => {
  it("should return the initial state", () => {
    const store = createStore(obsReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual({});
  });

  it("should handle SAVE_OBSERVATIONS", () => {
    const action = saveObservationsAction({
      ts1: { vintage: { vid: "v1" }, value: 10 },
      ts2: { vintage: { vid: "v2" }, value: 20 },
    });

    const expectedState = {
      ts1: { v1: { vintage: { vid: "v1" }, value: 10 } },
      ts2: { v2: { vintage: { vid: "v2" }, value: 20 } },
    };

    expect(obsReducer({}, action)).toEqual(expectedState);
  });

  it("should handle SAVE_OBSERVATIONS with existing data", () => {
    const initialState = {
      ts1: { v1: { vintage: { vid: "v1" }, value: 10 } },
    };

    const action = saveObservationsAction({
      ts1: { vintage: { vid: "v2" }, value: 20 },
      ts2: { vintage: { vid: "v1" }, value: 30 },
    });

    const expectedState = {
      ts1: {
        v1: { vintage: { vid: "v1" }, value: 10 },
        v2: { vintage: { vid: "v2" }, value: 20 },
      },
      ts2: { v1: { vintage: { vid: "v1" }, value: 30 } },
    };

    expect(obsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should ignore data without vintage", () => {
    const action = saveObservationsAction({
      ts1: { value: 10 }, // No vintage
    });

    expect(obsReducer({}, action)).toEqual({});
  });
});
