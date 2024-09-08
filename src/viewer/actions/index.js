import {
  API_SET_PARAMETERS,
  API_SET_JWT,
  INITIALIZE,
  STORE_RESET,
  API_SAVE_PARAMETERS,
} from './ActionTypes';

export * from '../../vintages/actions/vintagesActions';

// eslint-disable-next-line camelcase
export const setApiParametersAction = ({
  spaceId, collId, tsid, jwt, wid, chronos_address, analytics_address,
} = {}) => ({
  type: API_SET_PARAMETERS,
  spaceId,
  collId,
  tsid,
  jwt,
  wid,
  chronos_address,
  analytics_address,
});

export const saveApiParametersAction = (spaceId, collId, tsid, jwt, wid, chronos_address, analytics_address) => ({
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

export const setApiJwtAction = (jwt) => ({
  type: API_SET_JWT,
  jwt,
});


export const initializeAction = ({
  jwt, spaceId, collId, tsid, collName, spaceName, tsName, wid,
  chronos_address, analytics_address,
} = {}) => ({
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

export const resetStoreAction = () => ({
  type: STORE_RESET,
});
