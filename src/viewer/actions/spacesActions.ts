import { ISpace } from "../types/TSpaces";

// Spaces
export const FETCH_SPACES = "FETCH_SPACES";
export const DELETE_SPACE = "DELETE_SPACE";
export const SAVE_SPACES = "SAVE_SPACES";
export const SAVE_SPACE = "SAVE_SPACE";
export const FETCH_SPACE_DETAILS = "FETCH_SPACE_DETAILS";
export const SAVE_SPACE_DETAILS = "SAVE_SPACE_DETAILS";
export const SAVE_SPACE_REMOVE = "SAVE_SPACE_REMOVE";

export interface IFetchSpacesAction {
  type: typeof FETCH_SPACES;
  payload: any;
}

export const fetchSpacesAction = (data: any): IFetchSpacesAction => ({
  type: FETCH_SPACES,
  payload: data,
});

export interface IDeleteSpaceAction {
  type: typeof DELETE_SPACE;
  spaceId: string;
}

export const deleteSpaceAction = (spaceId: string): IDeleteSpaceAction => ({
  type: DELETE_SPACE,
  spaceId,
});

export interface ISaveSpacesAction {
  type: typeof SAVE_SPACES;
  payload: ISpace[];
}

export const saveSpacesAction = (data: any): ISaveSpacesAction => ({
  type: SAVE_SPACES,
  payload: data,
});

export interface ISaveSpaceAction {
  type: typeof SAVE_SPACE;
  payload: ISpace;
}

export const saveSpaceAction = (data: any): ISaveSpaceAction => ({
  type: SAVE_SPACE,
  payload: data,
});

export interface IFetchSpaceDetailsAction {
  type: typeof FETCH_SPACE_DETAILS;
  payload: any;
}

export const fetchSpaceDetailsAction = (
  data: any
): IFetchSpaceDetailsAction => ({
  type: FETCH_SPACE_DETAILS,
  payload: data,
});

export interface ISaveSpaceDetailsAction {
  type: typeof SAVE_SPACE_DETAILS;
  payload: ISpace;
}

export const saveSpaceDetailsAction = (data: any): ISaveSpaceDetailsAction => ({
  type: SAVE_SPACE_DETAILS,
  payload: data,
});

export interface ISaveSpaceRemoveAction {
  type: typeof SAVE_SPACE_REMOVE;
  payload: { spaceId: string };
}

export const saveSpaceRemoveAction = (
  spaceId: string
): ISaveSpaceRemoveAction => ({
  type: SAVE_SPACE_REMOVE,
  payload: {
    spaceId,
  },
});

// export const fetchSpacesAction = (data) => ({
//   type: FETCH_SPACES,
//   payload: data,
// });

// export const deleteSpaceAction = (spaceId) => ({
//   type: DELETE_SPACE,
//   spaceId,
// });

// export const saveSpacesAction = (data) => ({
//   type: SAVE_SPACES,
//   payload: data,
// });

// export const saveSpaceAction = (data) => ({
//   type: SAVE_SPACE,
//   payload: data,
// });

// export const fetchSpaceDetailsAction = (data) => ({
//   type: FETCH_SPACE_DETAILS,
//   payload: data,
// });

// export const saveSpaceDetailsAction = (data) => ({
//   type: SAVE_SPACE_DETAILS,
//   payload: data,
// });

// export const saveSpaceRemoveAction = (spaceId) => ({
//   type: SAVE_SPACE_REMOVE,
//   payload: {
//     spaceId,
//   },
// });
