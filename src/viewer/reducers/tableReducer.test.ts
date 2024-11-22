import { createStore } from "redux";
import tableReducer, { ITableActions } from "../reducers/tableReducer";
import { TABLE_SAVE } from "../actions/tableActions";

describe("table reducer", () => {
  it("should return the initial state", () => {
    const store = createStore(tableReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual({
      rowData: [],
      columnDefs: [],
      freq: undefined,
      collections: [],
      tries: 0,
    });
  });

  it("should handle TABLE_SAVE", () => {
    const action = {
      type: TABLE_SAVE,
      payload: {
        rowData: [{ col1: "data1" }],
        columnDefs: [{ field: "col1" }],
        freq: 123,
        collections: ["collection1"],
      },
    };
    expect(tableReducer(undefined, action)).toEqual({
      rowData: [{ col1: "data1" }],
      columnDefs: [{ field: "col1" }],
      freq: 123,
      collections: ["collection1"],
      tries: 0,
    });
  });
});
