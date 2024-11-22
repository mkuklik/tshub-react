import { createStore } from "redux";
import defaultsReducer from "./defaultReducer";
import { DEFAULTS_SET, setDefaultAction } from "../actions/defaultsActions";

describe("defaultsReducer", () => {
  it("should return the initial state", () => {
    const store = createStore(defaultsReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual({
      collName: undefined,
      collId: undefined,
      spaceName: undefined,
      spaceId: undefined,
    });
  });

  it("should handle DEFAULTS_SET", () => {
    const payload = {
      collName: "test collection",
      collId: "123",
      spaceName: "test space",
      spaceId: "456",
    };

    expect(defaultsReducer(undefined, setDefaultAction(payload))).toEqual({
      collName: "test collection",
      collId: "123",
      spaceName: "test space",
      spaceId: "456",
    });
  });

  it("should handle DEFAULTS_SET with partial payload", () => {
    const payload = {
      collName: "test collection",
    };

    expect(defaultsReducer(undefined, setDefaultAction(payload))).toEqual({
      collName: "test collection",
      collId: undefined,
      spaceName: undefined,
      spaceId: undefined,
    });
  });
});
