import {
  FETCH_SPACES,
  DELETE_SPACE,
  SAVE_SPACES,
  SAVE_SPACE,
  FETCH_SPACE_DETAILS,
  SAVE_SPACE_DETAILS,
  SAVE_SPACE_REMOVE,
} from './ActionTypes';

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
  payload: any;
}

export const saveSpacesAction = (data: any): ISaveSpacesAction => ({
  type: SAVE_SPACES,
  payload: data,
});

export interface ISaveSpaceAction {
  type: typeof SAVE_SPACE;
  payload: any;
}

export const saveSpaceAction = (data: any): ISaveSpaceAction => ({
  type: SAVE_SPACE,
  payload: data,
});

export interface IFetchSpaceDetailsAction {
  type: typeof FETCH_SPACE_DETAILS;
  payload: any;
}

export const fetchSpaceDetailsAction = (data: any): IFetchSpaceDetailsAction => ({
  type: FETCH_SPACE_DETAILS,
  payload: data,
});

export interface ISaveSpaceDetailsAction {
  type: typeof SAVE_SPACE_DETAILS;
  payload: any;
}

export const saveSpaceDetailsAction = (data: any): ISaveSpaceDetailsAction => ({
  type: SAVE_SPACE_DETAILS,
  payload: data,
});

export interface ISaveSpaceRemoveAction {
  type: typeof SAVE_SPACE_REMOVE;
  payload: { spaceId: string };
}

export const saveSpaceRemoveAction = (spaceId: string): ISaveSpaceRemoveAction => ({
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