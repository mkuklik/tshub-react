import { mergeAll, map } from "ramda";
import vintagesReducer, { IVintagesState } from "./vintagesReducer";
import { ISaveVariableAction } from "../actions/vintagesActions";
import {
  VINTAGES_SAVE_HAS_PERMISSION,
  VINTAGES_SAVE_LIST,
  VINTAGES_INITIATE,
  VINTAGES_SAVE_VINTAGE_SERIES,
  VINTAGES_SAVE_VARIABLE,
  VINTAGES_SAVE_OBJECT,
} from "../actions/vintagesActions";

describe("Vintages Reducer", () => {
  const initialState: IVintagesState = {
    objects: {},
    byTsid: {},
    collId: undefined,
    tsid: undefined,
    variable: {
      expr: "",
      error: undefined,
    },
    hasPermission: true,
  };

  it("should return the initial state", () => {
    expect(vintagesReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle VINTAGES_INITIATE", () => {
    const collId = "testCollId";
    expect(
      vintagesReducer(initialState, {
        type: VINTAGES_INITIATE,
        collId,
      })
    ).toEqual({
      ...initialState,
      collId,
    });
  });

  it("should handle VINTAGES_SAVE_HAS_PERMISSION", () => {
    const hasPermission = false;
    expect(
      vintagesReducer(initialState, {
        type: VINTAGES_SAVE_HAS_PERMISSION,
        payload: hasPermission,
      })
    ).toEqual({
      ...initialState,
      hasPermission,
    });
  });

  it("should handle VINTAGES_SAVE_OBJECT", () => {
    const vintageObject = {
      vid: "testVid",
      // ... other properties
    };
    expect(
      vintagesReducer(initialState, {
        type: VINTAGES_SAVE_OBJECT,
        payload: vintageObject,
      })
    ).toEqual({
      ...initialState,
      objects: {
        [vintageObject.vid]: vintageObject,
      },
    });
  });

  it("should handle VINTAGES_SAVE_LIST", () => {
    const listData = [{ vid: "vid1" }, { vid: "vid2" }];
    const tsid = "testTsid";
    const collId = "testcollId";
    expect(
      vintagesReducer(initialState, {
        type: VINTAGES_SAVE_LIST,
        payload: {
          data: listData,
          tsid,
          collId,
        },
      })
    ).toEqual({
      ...initialState,
      objects: {
        vid1: { vid: "vid1" },
        vid2: { vid: "vid2" },
      },
      byTsid: {
        [tsid]: ["vid1", "vid2"],
      },
    });
  });

  it("should handle VINTAGES_SAVE_VINTAGE_SERIES", () => {
    const collId = "newCollId";
    const tsid = "newTsid";
    expect(
      vintagesReducer(initialState, {
        type: VINTAGES_SAVE_VINTAGE_SERIES,
        payload: {
          collId,
          tsid,
        },
      })
    ).toEqual({
      ...initialState,
      collId,
      tsid,
    });
  });

  it("should handle VINTAGES_SAVE_VARIABLE", () => {
    const variable = {
      expr: "testExpr",
      error: "testError",
    };
    const x: ISaveVariableAction = {
      type: VINTAGES_SAVE_VARIABLE,
      payload: {
        variable: {
          expr: "testExpr",
          error: "testError",
        },
      },
    };
    expect(
      vintagesReducer(
        initialState,
        {
          type: VINTAGES_SAVE_VARIABLE,
          payload: {
            variable,
          },
        }
      )
    ).toEqual({
      ...initialState,
      variable,
    });
  });
});
