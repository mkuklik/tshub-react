import { API_SAVE_PARAMETERS, API_SET_JWT } from '../actions/ActionTypes';
import ApiClient from '../../client/ApiClient';


const initialState = {
  spaceId: undefined,
  collId: undefined,
  tsid: undefined,
  client: ApiClient.instance,
  jwt: undefined,
  host: undefined,
  port: undefined,
  wid: undefined, // workbook id
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case API_SAVE_PARAMETERS:
      if (action.payload.jwt !== undefined) {
        const { jwt } = state.client.authentications;
        jwt.accessToken = action.payload.jwt;
      }

      return {
        ...state,
        jwt: action.payload.jwt,
        spaceId: action.payload.spaceId,
        collId: action.payload.collId,
        tsid: action.payload.tsid,
        wid: action.payload.wid, // workbook id
        chronos_address: action.payload.chronos_address,
        analytics_address: action.payload.analytics_address,
      };

    case API_SET_JWT:
      return { ...state, jwt: action.jwt };

    default:
      return state;
  }
};

export default api;
