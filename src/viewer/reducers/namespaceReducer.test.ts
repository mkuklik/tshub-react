import { createStore } from "redux";
import namespaceReducer, { keyBuilder } from "../reducers/namespaceReducer";
import { updateNamespace, NAMESPACE_UPDATE } from "../actions/namespaceActions";

describe("namespaceReducer", () => {
  it("should return the initial state", () => {
    const store = createStore(namespaceReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual({});
  });

  it("should handle NAMESPACE_UPDATE", () => {
    const action = updateNamespace({
      spaceName: "space1",
      collName: "coll1",
      tsName: "ts1",
      tsid: "tsid1",
      collId: "collId1",
      spaceId: "spaceId1",
    });

    const expectedState = {
      "space1|coll1|ts1": {
        spaceName: "space1",
        collName: "coll1",
        tsName: "ts1",
        tsid: "tsid1",
        collId: "collId1",
        spaceId: "spaceId1",
      },
    };

    expect(namespaceReducer({}, action)).toEqual(expectedState);
  });

  it("should handle NAMESPACE_UPDATE with existing state", () => {
    const initialState = {
      "space1|coll1|ts1": {
        spaceName: "space1",
        collName: "coll1",
        tsName: "ts1",
        tsid: "tsid1",
        collId: "collId1",
        spaceId: "spaceId1",
      },
    };

    const action = updateNamespace({
      spaceName: "space2",
      collName: "coll2",
      tsName: "ts2",
      tsid: "tsid2",
      collId: "collId2",
      spaceId: "spaceId2",
    });

    const expectedState = {
      ...initialState,
      "space2|coll2|ts2": {
        spaceName: "space2",
        collName: "coll2",
        tsName: "ts2",
        tsid: "tsid2",
        collId: "collId2",
        spaceId: "spaceId2",
      },
    };

    expect(namespaceReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("keyBuilder", () => {
  it("should build key with spaceName, collName, and tsName", () => {
    expect(keyBuilder("space1", "coll1", "ts1")).toBe("space1|coll1|ts1");
  });

  it("should return empty string if spaceName is undefined", () => {
    expect(keyBuilder(undefined, "coll1", "ts1")).toBe("");
  });

  it("should return spaceName if collName is undefined", () => {
    expect(keyBuilder("space1", undefined, "ts1")).toBe("space1");
  });

  it("should return spaceName|collName if tsName is undefined", () => {
    expect(keyBuilder("space1", "coll1", undefined)).toBe("space1|coll1");
  });
});
