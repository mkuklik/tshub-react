import { createStore } from "redux";
import spacesReducer from "./spacesReducer";
import {
  saveSpacesAction,
  saveSpaceAction,
  saveSpaceDetailsAction,
  saveSpaceRemoveAction,
} from "../actions/spacesActions";

describe("spacesReducer", () => {
  it("should return the initial state", () => {
    const store = createStore(spacesReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    expect(store.getState()).toEqual({
      spaces: [],
      spaceDetails: null,
    });
  });

  it("should handle SAVE_SPACES", () => {
    const spaces = [
      { spaceId: "2", name: "Space B" },
      { spaceId: "1", name: "Space A" },
    ];
    const action = saveSpacesAction(spaces);
    expect(spacesReducer(undefined, action)).toEqual({
      spaces: [
        { spaceId: "1", name: "Space A" },
        { spaceId: "2", name: "Space B" },
      ],
      spaceDetails: null,
    });
  });

  it("should handle SAVE_SPACE", () => {
    const initialState = {
      spaces: [{ spaceId: "1", name: "Space A" }],
      spaceDetails: null,
    };
    const newSpace = { spaceId: "2", name: "Space B" };
    const action = saveSpaceAction(newSpace);
    expect(spacesReducer(initialState, action)).toEqual({
      spaces: [
        { spaceId: "1", name: "Space A" },
        { spaceId: "2", name: "Space B" },
      ],
      spaceDetails: null,
    });
  });

  it("should handle SAVE_SPACE with existing space", () => {
    const initialState = {
      spaces: [{ spaceId: "1", name: "Space A" }],
      spaceDetails: null,
    };
    const updatedSpace = { spaceId: "1", name: "Updated Space A" };
    const action = saveSpaceAction(updatedSpace);
    expect(spacesReducer(initialState, action)).toEqual({
      spaces: [{ spaceId: "1", name: "Updated Space A" }],
      spaceDetails: null,
    });
  });

  it("should handle SAVE_SPACE_DETAILS", () => {
    const spaceDetails = { spaceId: "1", name: "Space A" };
    const action = saveSpaceDetailsAction(spaceDetails);
    expect(spacesReducer(undefined, action)).toEqual({
      spaces: [],
      spaceDetails: { spaceId: "1", name: "Space A" },
    });
  });

  it("should handle SAVE_SPACE_REMOVE", () => {
    const initialState = {
      spaces: [
        { spaceId: "1", name: "Space A" },
        { spaceId: "2", name: "Space B" },
      ],
      spaceDetails: null,
    };
    const action = saveSpaceRemoveAction("1");
    expect(spacesReducer(initialState, action)).toEqual({
      spaces: [{ spaceId: "2", name: "Space B" }],
      spaceDetails: null,
    });
  });
});
