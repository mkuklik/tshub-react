import { API_SAVE_PARAMETERS, API_SET_JWT } from "../actions/ActionTypes";
import ApiClient from "../../client/ApiClient";

export interface IApiState {
  spaceId: string | undefined;
  collId: string | undefined;
  tsid: string | undefined;
  client: any; //ApiClient; replace it with ApiClient when type of authentications is fixed, currently it is an array, but should be an object
  jwt: string | undefined;
  host: string | undefined;
  port: number | undefined;
  wid: string | undefined; // workbook id
  chronos_address: string | undefined;
  analytics_address: string | undefined;
}

const initialState: IApiState = {
  spaceId: undefined,
  collId: undefined,
  tsid: undefined,
  client: ApiClient.instance,
  jwt: undefined,
  host: undefined,
  port: undefined,
  wid: undefined, // workbook id
  chronos_address: undefined,
  analytics_address: undefined,
};

export interface Action {
  type: string;
  payload?: {
    jwt?: string;
    spaceId?: string;
    collId?: string;
    tsid?: string;
    wid?: string;
    chronos_address?: string;
    analytics_address?: string;
  };
  jwt?: string;
}

const api = (state: IApiState = initialState, action: Action): IApiState => {
  switch (action.type) {
    case API_SAVE_PARAMETERS:
      if (action.payload?.jwt !== undefined) {
        const { jwt } = state.client.authentications;
        jwt.accessToken = action.payload.jwt;
      }

      return {
        ...state,
        jwt: action.payload?.jwt,
        spaceId: action.payload?.spaceId,
        collId: action.payload?.collId,
        tsid: action.payload?.tsid,
        wid: action.payload?.wid, // workbook id
        chronos_address: action.payload?.chronos_address,
        analytics_address: action.payload?.analytics_address,
      };

    case API_SET_JWT:
      return { ...state, jwt: action.jwt };

    default:
      return state;
  }
};

export default api;

// import { API_SAVE_PARAMETERS, API_SET_JWT } from '../actions/ActionTypes';
// import ApiClient from '../../client/ApiClient';

// const initialState = {
//   spaceId: undefined,
//   collId: undefined,
//   tsid: undefined,
//   client: ApiClient.instance,
//   jwt: undefined,
//   host: undefined,
//   port: undefined,
//   wid: undefined, // workbook id
// };

// const api = (state = initialState, action) => {
//   switch (action.type) {
//     case API_SAVE_PARAMETERS:
//       if (action.payload.jwt !== undefined) {
//         const { jwt } = state.client.authentications;
//         jwt.accessToken = action.payload.jwt;
//       }

//       return {
//         ...state,
//         jwt: action.payload.jwt,
//         spaceId: action.payload.spaceId,
//         collId: action.payload.collId,
//         tsid: action.payload.tsid,
//         wid: action.payload.wid, // workbook id
//         chronos_address: action.payload.chronos_address,
//         analytics_address: action.payload.analytics_address,
//       };

//     case API_SET_JWT:
//       return { ...state, jwt: action.jwt };

//     default:
//       return state;
//   }
// };

// export default api;
