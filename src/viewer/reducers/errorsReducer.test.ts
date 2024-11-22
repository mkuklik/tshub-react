import { createStore } from "redux";
import errorReducer from "./errorsReducer";
import {
  ADD_ERROR,
  SHOW_LOGIN_ERROR,
  CLOSE_LOGIN_ERROR,
} from "../actions/errorActions";

describe("errorReducer", () => {
  it("should return the initial state", () => {
    const store = createStore(errorReducer);

    // Dispatch @@INIT manually
    store.dispatch({ type: "@@INIT" } as any);

    // Check initial state
    expect(store.getState()).toEqual({
      loginErrorScreenIsOpen: false,
      error: null,
      isOpen: false,
      errors: [],
    });
  });

  it("should handle ADD_ERROR", () => {
    const error = { message: "Test error" };
    expect(
      errorReducer(
        {
          loginErrorScreenIsOpen: false,
          error: null,
          isOpen: false,
          errors: [],
        },
        { type: ADD_ERROR, payload: error }
      )
    ).toEqual({
      loginErrorScreenIsOpen: false,
      error: null,
      isOpen: false,
      errors: [error],
    });
  });

  it("should handle SHOW_LOGIN_ERROR", () => {
    expect(
      errorReducer(
        {
          loginErrorScreenIsOpen: false,
          error: null,
          isOpen: false,
          errors: [],
        },
        { type: SHOW_LOGIN_ERROR }
      )
    ).toEqual({
      loginErrorScreenIsOpen: true,
      error: null,
      isOpen: false,
      errors: [],
    });
  });

  it("should handle CLOSE_LOGIN_ERROR", () => {
    expect(
      errorReducer(
        {
          loginErrorScreenIsOpen: true,
          error: null,
          isOpen: false,
          errors: [],
        },
        { type: CLOSE_LOGIN_ERROR }
      )
    ).toEqual({
      loginErrorScreenIsOpen: false,
      error: null,
      isOpen: false,
      errors: [],
    });
  });
});
