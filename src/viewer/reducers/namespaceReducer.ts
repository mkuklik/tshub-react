import { NAMESPACE_UPDATE, IUpdateNamespaceAction } from '../actions/namespaceActions';

export const keyBuilder = (spaceName?: string, collName?: string, tsName?: string): string => {
  let key = '';

  if (spaceName) key += spaceName;
  else return key;

  if (collName) key += `|${collName}`;
  else return key;

  if (tsName) key += `|${tsName}`;

  return key;
};

export interface INamespace {
  spaceName: string;
  collName: string;
  tsName: string;
  tsid: string;
  collId: string;
  spaceId: string;
}

export interface INamespaceState {
  [key: string]: INamespace;
}

const initialState: INamespaceState = {};

const namespaceReducer = (state = initialState, action: IUpdateNamespaceAction): INamespaceState => {
  const { type, payload } = action;

  switch (type) {
    case NAMESPACE_UPDATE:
      const {
        spaceName, collName, tsName, tsid, collId, spaceId,
      } = payload;
      const key = keyBuilder(spaceName, collName, tsName);

      return {
        ...state,
        [key]: {
          spaceName, collName, tsName, tsid, collId, spaceId,
        },
      };
    default:
      return state;
  }
};

export default namespaceReducer;

// import {
//   NAMESPACE_UPDATE,
// } from '../actions/namespaceActions';

// export const keyBuilder = (spaceName, collName, tsName) => {
//   let key = '';

//   if (spaceName !== undefined || spaceName !== '') key += spaceName;
//   else return key;

//   if (collName !== undefined || collName !== '') key += `|${collName}`;
//   else return key;

//   if (tsName !== undefined || tsName !== '') key += `${tsName}`;

//   return key;
// };

// const initialState = {
//   space: {}, // spaceName -> collName -> tsName
// };

// const namespaceReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case NAMESPACE_UPDATE:
//       const {
//         spaceName, collName, tsName, tsid, collId, spaceId,
//       } = payload;
//       const key = keyBuilder(spaceName, collName, tsName);

//       return {
//         ...state,
//         [key]: {
//           spaceName, collName, tsName, tsid, collId, spaceId,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default namespaceReducer;
