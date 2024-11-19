import { NAMESPACE_UPDATE } from './ActionTypes';

export interface IUpdateNamespaceAction {
  type: typeof NAMESPACE_UPDATE;
  payload: {
    spaceName: string;
    collName: string;
    tsName: string;
    tsid: string;
    collId: string;
    spaceId: string;
  };
}

export const updateNamespace = ({
  spaceName, collName, tsName, tsid, collId, spaceId,
}: {
  spaceName?: string,
  collName?: string,
  tsName?: string,
  tsid?: string,
  collId?: string,
  spaceId?: string
} = {}): IUpdateNamespaceAction => ({
  type: NAMESPACE_UPDATE,
  payload: {
    spaceName: spaceName || '',
    collName: collName || '',
    tsName: tsName || '',
    tsid: tsid || '',
    collId: collId || '',
    spaceId: spaceId || '',
  },
});
// import { NAMESPACE_UPDATE } from './ActionTypes';

// export const updateNamespace = ({
//   spaceName, collName, tsName, tsid, collId, spaceId,
// } = {}) => ({
//   type: NAMESPACE_UPDATE,
//   payload: {
//     spaceName, collName, tsName, tsid, collId, spaceId,
//   },
// });
