import { NAMESPACE_UPDATE } from "./ActionTypes";

export const updateNamespace = ({spaceName, collName, tsName, tsid, collId, spaceId }={}) => ({
  type: NAMESPACE_UPDATE,
  payload: { spaceName, collName, tsName, tsid, collId, spaceId }
});
