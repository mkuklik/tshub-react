import {
  API_SET_PARAMETERS,
  API_SET_JWT,
  INITIALIZE,
  STORE_RESET,
  API_SAVE_PARAMETERS,
} from './ActionTypes';

export * from '../../vintages/actions/vintagesActions';

export interface SetApiParametersAction {
  type: typeof API_SET_PARAMETERS;
  spaceId?: string;
  collId?: string;
  tsid?: string;
  jwt?: string;
  wid?: string;
  chronos_address?: string;
  analytics_address?: string;
}

// eslint-disable-next-line camelcase
export const setApiParametersAction = ({
  spaceId, collId, tsid, jwt, wid, chronos_address, analytics_address,
}: { spaceId?: string,
  collId?: string,
  tsid?: string,
  jwt?: string,
  wid?: string,
  chronos_address?: string,
  analytics_address?: string} = {}): SetApiParametersAction => ({ // Type the input object
  type: API_SET_PARAMETERS,
  spaceId,
  collId,
  tsid,
  jwt,
  wid,
  chronos_address,
  analytics_address,
});

export interface SaveApiParametersAction {
  type: typeof API_SAVE_PARAMETERS;
  payload: {
    spaceId: string;
    collId: string;
    tsid: string;
    jwt: string;
    wid: string;
    chronos_address: string;
    analytics_address: string;
  };
}

export const saveApiParametersAction = (
  spaceId: string,
  collId: string,
  tsid: string,
  jwt: string,
  wid: string,
  chronos_address: string,
  analytics_address: string,
): SaveApiParametersAction => ({
  type: API_SAVE_PARAMETERS,
  payload: {
    spaceId,
    collId,
    tsid,
    jwt,
    wid,
    chronos_address,
    analytics_address,
  },
});

export interface SetApiJwtAction {
  type: typeof API_SET_JWT;
  jwt: string;
}

export const setApiJwtAction = (jwt: string): SetApiJwtAction => ({
  type: API_SET_JWT,
  jwt,
});

export interface InitializeAction {
  type: typeof INITIALIZE;
  jwt?: string;
  spaceId?: string;
  collId?: string;
  tsid?: string;
  collName?: string;
  spaceName?: string;
  tsName?: string;
  wid?: string;
  chronos_address?: string;
  analytics_address?: string;
}

export const initializeAction = ({
  jwt, spaceId, collId, tsid, collName, spaceName, tsName, wid,
  chronos_address, analytics_address,
}: { jwt?: string,
  spaceId?: string,
  collId?: string,
  tsid?: string,
  collName?: string,
  spaceName?: string,
  tsName?: string,
  wid?: string,
  chronos_address?: string,
  analytics_address?: string} = {}): InitializeAction => ({ // Type the input object
  type: INITIALIZE,
  jwt,
  spaceId,
  collId,
  tsid,
  collName,
  spaceName,
  tsName,
  wid,
  chronos_address,
  analytics_address,
});

export interface ResetStoreAction {
  type: typeof STORE_RESET;
}

export const resetStoreAction = (): ResetStoreAction => ({
  type: STORE_RESET,
});

// import {
//   API_SET_PARAMETERS,
//   API_SET_JWT,
//   INITIALIZE,
//   STORE_RESET,
//   API_SAVE_PARAMETERS,
// } from './ActionTypes';

// export * from '../../vintages/actions/vintagesActions';

// // eslint-disable-next-line camelcase
// export const setApiParametersAction = ({
//   spaceId, collId, tsid, jwt, wid, chronos_address, analytics_address,
// } = {}) => ({
//   type: API_SET_PARAMETERS,
//   spaceId,
//   collId,
//   tsid,
//   jwt,
//   wid,
//   chronos_address,
//   analytics_address,
// });

// export const saveApiParametersAction = (spaceId, collId, tsid, jwt, wid, chronos_address, analytics_address) => ({
//   type: API_SAVE_PARAMETERS,
//   payload: {
//     spaceId,
//     collId,
//     tsid,
//     jwt,
//     wid,
//     chronos_address,
//     analytics_address,
//   },
// });

// export const setApiJwtAction = (jwt) => ({
//   type: API_SET_JWT,
//   jwt,
// });

// export const initializeAction = ({
//   jwt, spaceId, collId, tsid, collName, spaceName, tsName, wid,
//   chronos_address, analytics_address,
// } = {}) => ({
//   type: INITIALIZE,
//   jwt,
//   spaceId,
//   collId,
//   tsid,
//   collName,
//   spaceName,
//   tsName,
//   wid,
//   chronos_address,
//   analytics_address,
// });

// export const resetStoreAction = () => ({
//   type: STORE_RESET,
// });
