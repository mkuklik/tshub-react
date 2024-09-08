import {
  FETCH_SPACES,
  DELETE_SPACE,
  SAVE_SPACES,
  SAVE_SPACE,
  FETCH_SPACE_DETAILS,
  SAVE_SPACE_DETAILS,
  SAVE_SPACE_REMOVE,
} from './ActionTypes';

export const fetchSpacesAction = (data) => ({
  type: FETCH_SPACES,
  payload: data,
});

export const deleteSpaceAction = (spaceId) => ({
  type: DELETE_SPACE,
  spaceId,
});


export const saveSpacesAction = (data) => ({
  type: SAVE_SPACES,
  payload: data,
});

export const saveSpaceAction = (data) => ({
  type: SAVE_SPACE,
  payload: data,
});


export const fetchSpaceDetailsAction = (data) => ({
  type: FETCH_SPACE_DETAILS,
  payload: data,
});

export const saveSpaceDetailsAction = (data) => ({
  type: SAVE_SPACE_DETAILS,
  payload: data,
});

export const saveSpaceRemoveAction = (spaceId) => ({
  type: SAVE_SPACE_REMOVE,
  payload: {
    spaceId,
  },
});