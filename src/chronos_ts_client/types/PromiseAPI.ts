import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { APIKey } from '../models/APIKey';
import { Action } from '../models/Action';
import { Annotation } from '../models/Annotation';
import { AnnotationHistorical } from '../models/AnnotationHistorical';
import { AnnotationSummary } from '../models/AnnotationSummary';
import { AnnotationTarget } from '../models/AnnotationTarget';
import { AnnotationTargetRequest } from '../models/AnnotationTargetRequest';
import { AnnotationUpdate } from '../models/AnnotationUpdate';
import { Collection } from '../models/Collection';
import { CollectionHistorical } from '../models/CollectionHistorical';
import { CollectionObj } from '../models/CollectionObj';
import { CollectionPermission } from '../models/CollectionPermission';
import { CollectionPermissionPost } from '../models/CollectionPermissionPost';
import { CollectionSummary } from '../models/CollectionSummary';
import { DType } from '../models/DType';
import { Effect } from '../models/Effect';
import { Frequency } from '../models/Frequency';
import { Group } from '../models/Group';
import { GroupHistorical } from '../models/GroupHistorical';
import { GroupMemberPost } from '../models/GroupMemberPost';
import { GroupSummary } from '../models/GroupSummary';
import { GroupUpdate } from '../models/GroupUpdate';
import { IType } from '../models/IType';
import { IndexFormat } from '../models/IndexFormat';
import { LoginResponse } from '../models/LoginResponse';
import { Member } from '../models/Member';
import { ModelObject } from '../models/ModelObject';
import { NewPassword } from '../models/NewPassword';
import { ObjectType } from '../models/ObjectType';
import { Observation } from '../models/Observation';
import { ObservationHistorical } from '../models/ObservationHistorical';
import { Policy } from '../models/Policy';
import { PolicyUpdate } from '../models/PolicyUpdate';
import { PolicyUpdateObject } from '../models/PolicyUpdateObject';
import { PolicyUpdateSubject } from '../models/PolicyUpdateSubject';
import { RawDataDeleteResponse } from '../models/RawDataDeleteResponse';
import { RawDataPutRequest } from '../models/RawDataPutRequest';
import { RawDataPutResponse } from '../models/RawDataPutResponse';
import { RawDataPutResponseSeriesInner } from '../models/RawDataPutResponseSeriesInner';
import { RawIndexFormat } from '../models/RawIndexFormat';
import { RawSingleTimeSeriesData } from '../models/RawSingleTimeSeriesData';
import { RawSingleTimeSeriesDataVintage } from '../models/RawSingleTimeSeriesDataVintage';
import { RealIndexFormat } from '../models/RealIndexFormat';
import { SingleTimeSeriesData } from '../models/SingleTimeSeriesData';
import { Space } from '../models/Space';
import { SpaceHistorical } from '../models/SpaceHistorical';
import { SpaceMemberPost } from '../models/SpaceMemberPost';
import { SpaceObj } from '../models/SpaceObj';
import { SpaceSummary } from '../models/SpaceSummary';
import { Subject } from '../models/Subject';
import { SubjectType } from '../models/SubjectType';
import { SubjectUpdate } from '../models/SubjectUpdate';
import { TSI } from '../models/TSI';
import { TSIList } from '../models/TSIList';
import { TSIQuery } from '../models/TSIQuery';
import { TimeSeries } from '../models/TimeSeries';
import { TimeSeriesCore } from '../models/TimeSeriesCore';
import { TimeSeriesHistorical } from '../models/TimeSeriesHistorical';
import { TimeSeriesSummary } from '../models/TimeSeriesSummary';
import { TimeSeriesUpdate } from '../models/TimeSeriesUpdate';
import { TimeseriesObj } from '../models/TimeseriesObj';
import { Upload } from '../models/Upload';
import { User } from '../models/User';
import { UserPermissions } from '../models/UserPermissions';
import { UserPost } from '../models/UserPost';
import { UserSummary } from '../models/UserSummary';
import { UserUpdate } from '../models/UserUpdate';
import { Vintage } from '../models/Vintage';
import { VintageHistorical } from '../models/VintageHistorical';
import { VintageSummary } from '../models/VintageSummary';
import { VintageUpdate } from '../models/VintageUpdate';
import { Visibility } from '../models/Visibility';
import { ObservableAnnotationsApi } from './ObservableAPI';

import { AnnotationsApiRequestFactory, AnnotationsApiResponseProcessor} from "../apis/AnnotationsApi";
export class PromiseAnnotationsApi {
    private api: ObservableAnnotationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnotationsApiRequestFactory,
        responseProcessor?: AnnotationsApiResponseProcessor
    ) {
        this.api = new ObservableAnnotationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add observation target
     * Add observation target
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public appApiAnnotationAddTargetWithHttpInfo(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationAddTargetWithHttpInfo(spaceName, collName, symbol, tsid, index, freq, vid, _options);
        return result.toPromise();
    }

    /**
     * Add observation target
     * Add observation target
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public appApiAnnotationAddTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationAddTarget(spaceName, collName, symbol, tsid, index, freq, vid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param annotation Annotation
     */
    public appApiAnnotationCreateWithHttpInfo(spaceName: string, collName: string, annotation: Annotation, _options?: Configuration): Promise<HttpInfo<Annotation>> {
        const result = this.api.appApiAnnotationCreateWithHttpInfo(spaceName, collName, annotation, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param annotation Annotation
     */
    public appApiAnnotationCreate(spaceName: string, collName: string, annotation: Annotation, _options?: Configuration): Promise<Annotation> {
        const result = this.api.appApiAnnotationCreate(spaceName, collName, annotation, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationDeleteWithHttpInfo(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationDeleteWithHttpInfo(spaceName, collName, symbol, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationDelete(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationDelete(spaceName, collName, symbol, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationGetWithHttpInfo(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<HttpInfo<Annotation>> {
        const result = this.api.appApiAnnotationGetWithHttpInfo(spaceName, collName, symbol, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationGet(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<Annotation> {
        const result = this.api.appApiAnnotationGet(spaceName, collName, symbol, _options);
        return result.toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiAnnotationGetListWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Promise<HttpInfo<Array<Annotation>>> {
        const result = this.api.appApiAnnotationGetListWithHttpInfo(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiAnnotationGetList(spaceName: string, collName: string, _options?: Configuration): Promise<Array<Annotation>> {
        const result = this.api.appApiAnnotationGetList(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * delete observation targets
     * delete observation targets
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public appApiAnnotationRemoveTargetWithHttpInfo(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationRemoveTargetWithHttpInfo(spaceName, collName, symbol, tsid, index, freq, vid, _options);
        return result.toPromise();
    }

    /**
     * delete observation targets
     * delete observation targets
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public appApiAnnotationRemoveTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationRemoveTarget(spaceName, collName, symbol, tsid, index, freq, vid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationUpdateWithHttpInfo(spaceName: string, collName: string, symbol: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationUpdateWithHttpInfo(spaceName, collName, symbol, annotationUpdate, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationUpdate(spaceName: string, collName: string, symbol: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationUpdate(spaceName, collName, symbol, annotationUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableApiKeyApi } from './ObservableAPI';

import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";
export class PromiseApiKeyApi {
    private api: ObservableApiKeyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiKeyApiRequestFactory,
        responseProcessor?: ApiKeyApiResponseProcessor
    ) {
        this.api = new ObservableApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API Key
     * Create API Key
     * @param username username
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyCreateWithHttpInfo(username: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Promise<HttpInfo<APIKey>> {
        const result = this.api.appApiApiKeyCreateWithHttpInfo(username, name, scopes, expiresIn, _options);
        return result.toPromise();
    }

    /**
     * Create API Key
     * Create API Key
     * @param username username
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyCreate(username: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Promise<APIKey> {
        const result = this.api.appApiApiKeyCreate(username, name, scopes, expiresIn, _options);
        return result.toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param username username
     * @param name api key name
     */
    public appApiApiKeyDeleteWithHttpInfo(username: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiApiKeyDeleteWithHttpInfo(username, name, _options);
        return result.toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param username username
     * @param name api key name
     */
    public appApiApiKeyDelete(username: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiApiKeyDelete(username, name, _options);
        return result.toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param username username
     */
    public appApiApiKeyGetListWithHttpInfo(username: string, _options?: Configuration): Promise<HttpInfo<Array<APIKey>>> {
        const result = this.api.appApiApiKeyGetListWithHttpInfo(username, _options);
        return result.toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param username username
     */
    public appApiApiKeyGetList(username: string, _options?: Configuration): Promise<Array<APIKey>> {
        const result = this.api.appApiApiKeyGetList(username, _options);
        return result.toPromise();
    }


}



import { ObservableCollectionApi } from './ObservableAPI';

import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";
export class PromiseCollectionApi {
    private api: ObservableCollectionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionApiRequestFactory,
        responseProcessor?: CollectionApiResponseProcessor
    ) {
        this.api = new ObservableCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a space
     * Delete a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionDeleteWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiCollectionDeleteWithHttpInfo(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionDelete(spaceName: string, collName: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiCollectionDelete(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionGetWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionGetWithHttpInfo(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionGet(spaceName: string, collName: string, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionGet(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * 
     * list collections
     * @param spaceName space name
     * @param query Search query
     */
    public appApiCollectionGetListWithHttpInfo(spaceName: string, query?: string, _options?: Configuration): Promise<HttpInfo<Array<CollectionSummary>>> {
        const result = this.api.appApiCollectionGetListWithHttpInfo(spaceName, query, _options);
        return result.toPromise();
    }

    /**
     * 
     * list collections
     * @param spaceName space name
     * @param query Search query
     */
    public appApiCollectionGetList(spaceName: string, query?: string, _options?: Configuration): Promise<Array<CollectionSummary>> {
        const result = this.api.appApiCollectionGetList(spaceName, query, _options);
        return result.toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param spaceName space name
     * @param collName collection name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionNameHistoryWithHttpInfo(spaceName: string, collName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.appApiCollectionNameHistoryWithHttpInfo(spaceName, collName, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param spaceName space name
     * @param collName collection name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionNameHistory(spaceName: string, collName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.appApiCollectionNameHistory(spaceName, collName, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceName space name
     * @param collection Definition of collection
     */
    public appApiCollectionPostWithHttpInfo(spaceName: string, collection: Collection, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionPostWithHttpInfo(spaceName, collection, _options);
        return result.toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceName space name
     * @param collection Definition of collection
     */
    public appApiCollectionPost(spaceName: string, collection: Collection, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionPost(spaceName, collection, _options);
        return result.toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param spaceName space name
     * @param collName collection name
     * @param collection ok
     */
    public appApiCollectionPutWithHttpInfo(spaceName: string, collName: string, collection: Collection, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionPutWithHttpInfo(spaceName, collName, collection, _options);
        return result.toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param spaceName space name
     * @param collName collection name
     * @param collection ok
     */
    public appApiCollectionPut(spaceName: string, collName: string, collection: Collection, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionPut(spaceName, collName, collection, _options);
        return result.toPromise();
    }


}



import { ObservableGroupApi } from './ObservableAPI';

import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi";
export class PromiseGroupApi {
    private api: ObservableGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupApiRequestFactory,
        responseProcessor?: GroupApiResponseProcessor
    ) {
        this.api = new ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a group member
     * Add a group member
     * @param groupname groupname
     * @param groupMemberPost 
     */
    public appApiGroupAddMemberWithHttpInfo(groupname: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupAddMemberWithHttpInfo(groupname, groupMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Add a group member
     * Add a group member
     * @param groupname groupname
     * @param groupMemberPost 
     */
    public appApiGroupAddMember(groupname: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupAddMember(groupname, groupMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupCreateGroupWithHttpInfo(group?: Group, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupCreateGroupWithHttpInfo(group, _options);
        return result.toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupCreateGroup(group?: Group, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupCreateGroup(group, _options);
        return result.toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param groupname groupname
     */
    public appApiGroupDeleteGroupWithHttpInfo(groupname: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiGroupDeleteGroupWithHttpInfo(groupname, _options);
        return result.toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param groupname groupname
     */
    public appApiGroupDeleteGroup(groupname: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiGroupDeleteGroup(groupname, _options);
        return result.toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param groupname groupname
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiGroupDeleteMemberWithHttpInfo(groupname: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupDeleteMemberWithHttpInfo(groupname, type, memberName, _options);
        return result.toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param groupname groupname
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiGroupDeleteMember(groupname: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupDeleteMember(groupname, type, memberName, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param groupname groupname
     */
    public appApiGroupGetGroupWithHttpInfo(groupname: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupGetGroupWithHttpInfo(groupname, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param groupname groupname
     */
    public appApiGroupGetGroup(groupname: string, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupGetGroup(groupname, _options);
        return result.toPromise();
    }

    /**
     * List groups
     * List groups
     * @param query Search query
     */
    public appApiGroupListGroupsWithHttpInfo(query?: string, _options?: Configuration): Promise<HttpInfo<Array<GroupSummary>>> {
        const result = this.api.appApiGroupListGroupsWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * List groups
     * List groups
     * @param query Search query
     */
    public appApiGroupListGroups(query?: string, _options?: Configuration): Promise<Array<GroupSummary>> {
        const result = this.api.appApiGroupListGroups(query, _options);
        return result.toPromise();
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param groupname groupname
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupNameHistoryWithHttpInfo(groupname: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<GroupHistorical>>> {
        const result = this.api.appApiGroupNameHistoryWithHttpInfo(groupname, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param groupname groupname
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupNameHistory(groupname: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<GroupHistorical>> {
        const result = this.api.appApiGroupNameHistory(groupname, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param groupname groupname
     * @param group an updated group
     */
    public appApiGroupUpdateGroupWithHttpInfo(groupname: string, group?: Group, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupUpdateGroupWithHttpInfo(groupname, group, _options);
        return result.toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param groupname groupname
     * @param group an updated group
     */
    public appApiGroupUpdateGroup(groupname: string, group?: Group, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupUpdateGroup(groupname, group, _options);
        return result.toPromise();
    }


}



import { ObservablePermissionsApi } from './ObservableAPI';

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class PromisePermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionGetWithHttpInfo(spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<HttpInfo<Array<Policy>>> {
        const result = this.api.appApiPermissionGetWithHttpInfo(spaceId, collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionGet(spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<Array<Policy>> {
        const result = this.api.appApiPermissionGet(spaceId, collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * delete permission
     * delete permission
     * @param objType object
     * @param subobject subobject mark
     * @param action action can be Verb or Role
     * @param effect permission effect
     * @param uid user id
     * @param gid group id
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionRemovePermissionWithHttpInfo(objType: ObjectType, subobject: boolean, action: string, effect: 'allow' | 'deny', uid?: string, gid?: string, spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiPermissionRemovePermissionWithHttpInfo(objType, subobject, action, effect, uid, gid, spaceId, collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * delete permission
     * delete permission
     * @param objType object
     * @param subobject subobject mark
     * @param action action can be Verb or Role
     * @param effect permission effect
     * @param uid user id
     * @param gid group id
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionRemovePermission(objType: ObjectType, subobject: boolean, action: string, effect: 'allow' | 'deny', uid?: string, gid?: string, spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiPermissionRemovePermission(objType, subobject, action, effect, uid, gid, spaceId, collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * Set permissions
     * Set permissions
     * @param policyUpdate Policy definition
     */
    public appApiPermissionSetPermissionWithHttpInfo(policyUpdate: PolicyUpdate, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiPermissionSetPermissionWithHttpInfo(policyUpdate, _options);
        return result.toPromise();
    }

    /**
     * Set permissions
     * Set permissions
     * @param policyUpdate Policy definition
     */
    public appApiPermissionSetPermission(policyUpdate: PolicyUpdate, _options?: Configuration): Promise<void> {
        const result = this.api.appApiPermissionSetPermission(policyUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableRawAnnotationsApi } from './ObservableAPI';

import { RawAnnotationsApiRequestFactory, RawAnnotationsApiResponseProcessor} from "../apis/RawAnnotationsApi";
export class PromiseRawAnnotationsApi {
    private api: ObservableRawAnnotationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawAnnotationsApiRequestFactory,
        responseProcessor?: RawAnnotationsApiResponseProcessor
    ) {
        this.api = new ObservableRawAnnotationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add observation target
     * Add a target
     * @param collId collection id
     * @param aid annotation id
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param realStart start time from when values were valid
     */
    public appApiAnnotationRawAddTargetWithHttpInfo(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationRawAddTargetWithHttpInfo(collId, aid, tsid, index, freq, realStart, _options);
        return result.toPromise();
    }

    /**
     * Add observation target
     * Add a target
     * @param collId collection id
     * @param aid annotation id
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param realStart start time from when values were valid
     */
    public appApiAnnotationRawAddTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationRawAddTarget(collId, aid, tsid, index, freq, realStart, _options);
        return result.toPromise();
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param collId collection id
     * @param annotation Annotation
     */
    public appApiAnnotationRawCreateWithHttpInfo(collId: string, annotation: Annotation, _options?: Configuration): Promise<HttpInfo<Annotation>> {
        const result = this.api.appApiAnnotationRawCreateWithHttpInfo(collId, annotation, _options);
        return result.toPromise();
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param collId collection id
     * @param annotation Annotation
     */
    public appApiAnnotationRawCreate(collId: string, annotation: Annotation, _options?: Configuration): Promise<Annotation> {
        const result = this.api.appApiAnnotationRawCreate(collId, annotation, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawDeleteWithHttpInfo(collId: string, aid: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationRawDeleteWithHttpInfo(collId, aid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawDelete(collId: string, aid: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationRawDelete(collId, aid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawGetWithHttpInfo(collId: string, aid: string, _options?: Configuration): Promise<HttpInfo<Annotation>> {
        const result = this.api.appApiAnnotationRawGetWithHttpInfo(collId, aid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawGet(collId: string, aid: string, _options?: Configuration): Promise<Annotation> {
        const result = this.api.appApiAnnotationRawGet(collId, aid, _options);
        return result.toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiAnnotationRawGetListWithHttpInfo(collId: string, tsid?: string, _options?: Configuration): Promise<HttpInfo<Array<AnnotationSummary>>> {
        const result = this.api.appApiAnnotationRawGetListWithHttpInfo(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiAnnotationRawGetList(collId: string, tsid?: string, _options?: Configuration): Promise<Array<AnnotationSummary>> {
        const result = this.api.appApiAnnotationRawGetList(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param collId collection id
     * @param aid annotation id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiAnnotationRawHistoryWithHttpInfo(collId: string, aid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<Annotation>>> {
        const result = this.api.appApiAnnotationRawHistoryWithHttpInfo(collId, aid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param collId collection id
     * @param aid annotation id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiAnnotationRawHistory(collId: string, aid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<Annotation>> {
        const result = this.api.appApiAnnotationRawHistory(collId, aid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * delete observation targets
     * delete a target
     * @param collId collection id
     * @param aid annotation id
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param realStart start time from when values were valid
     */
    public appApiAnnotationRawRemoveTargetWithHttpInfo(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationRawRemoveTargetWithHttpInfo(collId, aid, tsid, index, freq, realStart, _options);
        return result.toPromise();
    }

    /**
     * delete observation targets
     * delete a target
     * @param collId collection id
     * @param aid annotation id
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param realStart start time from when values were valid
     */
    public appApiAnnotationRawRemoveTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationRawRemoveTarget(collId, aid, tsid, index, freq, realStart, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param collId collection id
     * @param aid annotation id
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationRawUpdateWithHttpInfo(collId: string, aid: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiAnnotationRawUpdateWithHttpInfo(collId, aid, annotationUpdate, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param collId collection id
     * @param aid annotation id
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationRawUpdate(collId: string, aid: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<void> {
        const result = this.api.appApiAnnotationRawUpdate(collId, aid, annotationUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableRawApiKeyApi } from './ObservableAPI';

import { RawApiKeyApiRequestFactory, RawApiKeyApiResponseProcessor} from "../apis/RawApiKeyApi";
export class PromiseRawApiKeyApi {
    private api: ObservableRawApiKeyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawApiKeyApiRequestFactory,
        responseProcessor?: RawApiKeyApiResponseProcessor
    ) {
        this.api = new ObservableRawApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API Key
     * Create API Key
     * @param uid user id
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyRawCreateWithHttpInfo(uid: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Promise<HttpInfo<APIKey>> {
        const result = this.api.appApiApiKeyRawCreateWithHttpInfo(uid, name, scopes, expiresIn, _options);
        return result.toPromise();
    }

    /**
     * Create API Key
     * Create API Key
     * @param uid user id
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyRawCreate(uid: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Promise<APIKey> {
        const result = this.api.appApiApiKeyRawCreate(uid, name, scopes, expiresIn, _options);
        return result.toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param uid user id
     * @param name api key name
     */
    public appApiApiKeyRawDeleteWithHttpInfo(uid: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiApiKeyRawDeleteWithHttpInfo(uid, name, _options);
        return result.toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param uid user id
     * @param name api key name
     */
    public appApiApiKeyRawDelete(uid: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiApiKeyRawDelete(uid, name, _options);
        return result.toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param uid user id
     */
    public appApiApiKeyRawGetListWithHttpInfo(uid: string, _options?: Configuration): Promise<HttpInfo<Array<APIKey>>> {
        const result = this.api.appApiApiKeyRawGetListWithHttpInfo(uid, _options);
        return result.toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param uid user id
     */
    public appApiApiKeyRawGetList(uid: string, _options?: Configuration): Promise<Array<APIKey>> {
        const result = this.api.appApiApiKeyRawGetList(uid, _options);
        return result.toPromise();
    }


}



import { ObservableRawCollectionApi } from './ObservableAPI';

import { RawCollectionApiRequestFactory, RawCollectionApiResponseProcessor} from "../apis/RawCollectionApi";
export class PromiseRawCollectionApi {
    private api: ObservableRawCollectionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawCollectionApiRequestFactory,
        responseProcessor?: RawCollectionApiResponseProcessor
    ) {
        this.api = new ObservableRawCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param collId collection id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionObjectHistoryWithHttpInfo(collId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<CollectionHistorical>>> {
        const result = this.api.appApiCollectionObjectHistoryWithHttpInfo(collId, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param collId collection id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionObjectHistory(collId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<CollectionHistorical>> {
        const result = this.api.appApiCollectionObjectHistory(collId, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param collId collection id
     * @param collectionPermissionPost Collection member details
     */
    public appApiCollectionRawAddPermissionWithHttpInfo(collId: string, collectionPermissionPost?: CollectionPermissionPost, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionRawAddPermissionWithHttpInfo(collId, collectionPermissionPost, _options);
        return result.toPromise();
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param collId collection id
     * @param collectionPermissionPost Collection member details
     */
    public appApiCollectionRawAddPermission(collId: string, collectionPermissionPost?: CollectionPermissionPost, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionRawAddPermission(collId, collectionPermissionPost, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param collId collection id
     */
    public appApiCollectionRawDeleteWithHttpInfo(collId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiCollectionRawDeleteWithHttpInfo(collId, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param collId collection id
     */
    public appApiCollectionRawDelete(collId: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiCollectionRawDelete(collId, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param collId collection id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiCollectionRawDeletePermissionWithHttpInfo(collId: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionRawDeletePermissionWithHttpInfo(collId, type, id, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param collId collection id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiCollectionRawDeletePermission(collId: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionRawDeletePermission(collId, type, id, _options);
        return result.toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param collId collection id
     */
    public appApiCollectionRawGetWithHttpInfo(collId: string, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionRawGetWithHttpInfo(collId, _options);
        return result.toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param collId collection id
     */
    public appApiCollectionRawGet(collId: string, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionRawGet(collId, _options);
        return result.toPromise();
    }

    /**
     * 
     * list collections
     * @param spaceId space id
     * @param query Search query
     */
    public appApiCollectionRawGetListWithHttpInfo(spaceId: string, query?: string, _options?: Configuration): Promise<HttpInfo<Array<CollectionSummary>>> {
        const result = this.api.appApiCollectionRawGetListWithHttpInfo(spaceId, query, _options);
        return result.toPromise();
    }

    /**
     * 
     * list collections
     * @param spaceId space id
     * @param query Search query
     */
    public appApiCollectionRawGetList(spaceId: string, query?: string, _options?: Configuration): Promise<Array<CollectionSummary>> {
        const result = this.api.appApiCollectionRawGetList(spaceId, query, _options);
        return result.toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceId space id
     * @param collection Definition of collection
     */
    public appApiCollectionRawPostWithHttpInfo(spaceId: string, collection: Collection, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionRawPostWithHttpInfo(spaceId, collection, _options);
        return result.toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceId space id
     * @param collection Definition of collection
     */
    public appApiCollectionRawPost(spaceId: string, collection: Collection, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionRawPost(spaceId, collection, _options);
        return result.toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param collId collection id
     * @param collection ok
     */
    public appApiCollectionRawPutWithHttpInfo(collId: string, collection: Collection, _options?: Configuration): Promise<HttpInfo<Collection>> {
        const result = this.api.appApiCollectionRawPutWithHttpInfo(collId, collection, _options);
        return result.toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param collId collection id
     * @param collection ok
     */
    public appApiCollectionRawPut(collId: string, collection: Collection, _options?: Configuration): Promise<Collection> {
        const result = this.api.appApiCollectionRawPut(collId, collection, _options);
        return result.toPromise();
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param collId collection id
     * @param name new name for the time series
     */
    public appApiCollectionRawUndeleteWithHttpInfo(collId: string, name?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiCollectionRawUndeleteWithHttpInfo(collId, name, _options);
        return result.toPromise();
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param collId collection id
     * @param name new name for the time series
     */
    public appApiCollectionRawUndelete(collId: string, name?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiCollectionRawUndelete(collId, name, _options);
        return result.toPromise();
    }


}



import { ObservableRawGroupApi } from './ObservableAPI';

import { RawGroupApiRequestFactory, RawGroupApiResponseProcessor} from "../apis/RawGroupApi";
export class PromiseRawGroupApi {
    private api: ObservableRawGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawGroupApiRequestFactory,
        responseProcessor?: RawGroupApiResponseProcessor
    ) {
        this.api = new ObservableRawGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param gid The group\&#39;s unique id.
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupObjectHistoryWithHttpInfo(gid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<GroupHistorical>>> {
        const result = this.api.appApiGroupObjectHistoryWithHttpInfo(gid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param gid The group\&#39;s unique id.
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupObjectHistory(gid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<GroupHistorical>> {
        const result = this.api.appApiGroupObjectHistory(gid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param gid The group\&#39;s unique id.
     * @param groupMemberPost group member details
     */
    public appApiGroupRawAddMemberWithHttpInfo(gid: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupRawAddMemberWithHttpInfo(gid, groupMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param gid The group\&#39;s unique id.
     * @param groupMemberPost group member details
     */
    public appApiGroupRawAddMember(gid: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupRawAddMember(gid, groupMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupRawCreateGroupWithHttpInfo(group?: Group, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupRawCreateGroupWithHttpInfo(group, _options);
        return result.toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupRawCreateGroup(group?: Group, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupRawCreateGroup(group, _options);
        return result.toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawDeleteGroupWithHttpInfo(gid: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiGroupRawDeleteGroupWithHttpInfo(gid, _options);
        return result.toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawDeleteGroup(gid: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiGroupRawDeleteGroup(gid, _options);
        return result.toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param gid The group\&#39;s unique id.
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiGroupRawDeleteMemberWithHttpInfo(gid: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupRawDeleteMemberWithHttpInfo(gid, type, id, _options);
        return result.toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param gid The group\&#39;s unique id.
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiGroupRawDeleteMember(gid: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupRawDeleteMember(gid, type, id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawGetGroupWithHttpInfo(gid: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupRawGetGroupWithHttpInfo(gid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawGetGroup(gid: string, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupRawGetGroup(gid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param query Search query
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     */
    public appApiGroupRawListGroupsWithHttpInfo(query?: string, member?: string, ownOnly?: boolean, _options?: Configuration): Promise<HttpInfo<Array<GroupSummary>>> {
        const result = this.api.appApiGroupRawListGroupsWithHttpInfo(query, member, ownOnly, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param query Search query
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     */
    public appApiGroupRawListGroups(query?: string, member?: string, ownOnly?: boolean, _options?: Configuration): Promise<Array<GroupSummary>> {
        const result = this.api.appApiGroupRawListGroups(query, member, ownOnly, _options);
        return result.toPromise();
    }

    /**
     * Undelete group
     * Undelete group
     * @param gid The group\&#39;s unique id.
     * @param groupname new name for group
     */
    public appApiGroupRawUndeleteWithHttpInfo(gid: string, groupname?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiGroupRawUndeleteWithHttpInfo(gid, groupname, _options);
        return result.toPromise();
    }

    /**
     * Undelete group
     * Undelete group
     * @param gid The group\&#39;s unique id.
     * @param groupname new name for group
     */
    public appApiGroupRawUndelete(gid: string, groupname?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiGroupRawUndelete(gid, groupname, _options);
        return result.toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param gid The group\&#39;s unique id.
     * @param group an updated group
     */
    public appApiGroupRawUpdateGroupWithHttpInfo(gid: string, group?: Group, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.appApiGroupRawUpdateGroupWithHttpInfo(gid, group, _options);
        return result.toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param gid The group\&#39;s unique id.
     * @param group an updated group
     */
    public appApiGroupRawUpdateGroup(gid: string, group?: Group, _options?: Configuration): Promise<Group> {
        const result = this.api.appApiGroupRawUpdateGroup(gid, group, _options);
        return result.toPromise();
    }


}



import { ObservableRawSpaceApi } from './ObservableAPI';

import { RawSpaceApiRequestFactory, RawSpaceApiResponseProcessor} from "../apis/RawSpaceApi";
export class PromiseRawSpaceApi {
    private api: ObservableRawSpaceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawSpaceApiRequestFactory,
        responseProcessor?: RawSpaceApiResponseProcessor
    ) {
        this.api = new ObservableRawSpaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param spaceId space id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceObjectHistoryWithHttpInfo(spaceId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<SpaceHistorical>>> {
        const result = this.api.appApiSpaceObjectHistoryWithHttpInfo(spaceId, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param spaceId space id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceObjectHistory(spaceId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<SpaceHistorical>> {
        const result = this.api.appApiSpaceObjectHistory(spaceId, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param spaceId space id
     * @param spaceMemberPost space member details
     */
    public appApiSpaceRawAddMemberWithHttpInfo(spaceId: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceRawAddMemberWithHttpInfo(spaceId, spaceMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param spaceId space id
     * @param spaceMemberPost space member details
     */
    public appApiSpaceRawAddMember(spaceId: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceRawAddMember(spaceId, spaceMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceId space id
     */
    public appApiSpaceRawDeleteWithHttpInfo(spaceId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiSpaceRawDeleteWithHttpInfo(spaceId, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceId space id
     */
    public appApiSpaceRawDelete(spaceId: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiSpaceRawDelete(spaceId, _options);
        return result.toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceId space id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiSpaceRawDeleteMemberWithHttpInfo(spaceId: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceRawDeleteMemberWithHttpInfo(spaceId, type, id, _options);
        return result.toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceId space id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiSpaceRawDeleteMember(spaceId: string, type: 'u' | 'g', id: string, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceRawDeleteMember(spaceId, type, id, _options);
        return result.toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param spaceId space id
     */
    public appApiSpaceRawGetWithHttpInfo(spaceId: string, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceRawGetWithHttpInfo(spaceId, _options);
        return result.toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param spaceId space id
     */
    public appApiSpaceRawGet(spaceId: string, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceRawGet(spaceId, _options);
        return result.toPromise();
    }

    /**
     * list spaces
     * list spaces
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     * @param visibility visibility
     * @param query Search query
     */
    public appApiSpaceRawGetListWithHttpInfo(member?: string, ownOnly?: boolean, visibility?: Visibility, query?: string, _options?: Configuration): Promise<HttpInfo<Array<Space>>> {
        const result = this.api.appApiSpaceRawGetListWithHttpInfo(member, ownOnly, visibility, query, _options);
        return result.toPromise();
    }

    /**
     * list spaces
     * list spaces
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     * @param visibility visibility
     * @param query Search query
     */
    public appApiSpaceRawGetList(member?: string, ownOnly?: boolean, visibility?: Visibility, query?: string, _options?: Configuration): Promise<Array<Space>> {
        const result = this.api.appApiSpaceRawGetList(member, ownOnly, visibility, query, _options);
        return result.toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpaceRawPostWithHttpInfo(space: Space, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceRawPostWithHttpInfo(space, _options);
        return result.toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpaceRawPost(space: Space, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceRawPost(space, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param spaceId space id
     * @param space Optional description in *Markdown*
     */
    public appApiSpaceRawPutWithHttpInfo(spaceId: string, space: Space, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceRawPutWithHttpInfo(spaceId, space, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param spaceId space id
     * @param space Optional description in *Markdown*
     */
    public appApiSpaceRawPut(spaceId: string, space: Space, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceRawPut(spaceId, space, _options);
        return result.toPromise();
    }

    /**
     * Undelete space
     * Undelete space
     * @param spaceId space id
     * @param name new name for space
     */
    public appApiSpaceRawUndeleteWithHttpInfo(spaceId: string, name?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiSpaceRawUndeleteWithHttpInfo(spaceId, name, _options);
        return result.toPromise();
    }

    /**
     * Undelete space
     * Undelete space
     * @param spaceId space id
     * @param name new name for space
     */
    public appApiSpaceRawUndelete(spaceId: string, name?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiSpaceRawUndelete(spaceId, name, _options);
        return result.toPromise();
    }


}



import { ObservableRawTimeSeriesApi } from './ObservableAPI';

import { RawTimeSeriesApiRequestFactory, RawTimeSeriesApiResponseProcessor} from "../apis/RawTimeSeriesApi";
export class PromiseRawTimeSeriesApi {
    private api: ObservableRawTimeSeriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawTimeSeriesApiRequestFactory,
        responseProcessor?: RawTimeSeriesApiResponseProcessor
    ) {
        this.api = new ObservableRawTimeSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete time series
     * Delete a time series
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawDeleteWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesRawDeleteWithHttpInfo(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * delete time series
     * Delete a time series
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawDelete(collId: string, tsid: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesRawDelete(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawGetWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        const result = this.api.appApiTimeseriesRawGetWithHttpInfo(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawGet(collId: string, tsid: string, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.appApiTimeseriesRawGet(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param collId collection id
     * @param tsids array of time series id
     */
    public appApiTimeseriesRawGetListWithHttpInfo(collId: string, tsids?: Array<string>, _options?: Configuration): Promise<HttpInfo<Array<TimeSeriesSummary>>> {
        const result = this.api.appApiTimeseriesRawGetListWithHttpInfo(collId, tsids, _options);
        return result.toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param collId collection id
     * @param tsids array of time series id
     */
    public appApiTimeseriesRawGetList(collId: string, tsids?: Array<string>, _options?: Configuration): Promise<Array<TimeSeriesSummary>> {
        const result = this.api.appApiTimeseriesRawGetList(collId, tsids, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesRawObjectHistoryWithHttpInfo(collId: string, tsid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.appApiTimeseriesRawObjectHistoryWithHttpInfo(collId, tsid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesRawObjectHistory(collId: string, tsid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.appApiTimeseriesRawObjectHistory(collId, tsid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawPermanentDeleteWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesRawPermanentDeleteWithHttpInfo(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawPermanentDelete(collId: string, tsid: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesRawPermanentDelete(collId, tsid, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param collId collection id
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesRawPostWithHttpInfo(collId: string, timeSeries: TimeSeries, _options?: Configuration): Promise<HttpInfo<TimeSeriesCore>> {
        const result = this.api.appApiTimeseriesRawPostWithHttpInfo(collId, timeSeries, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param collId collection id
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesRawPost(collId: string, timeSeries: TimeSeries, _options?: Configuration): Promise<TimeSeriesCore> {
        const result = this.api.appApiTimeseriesRawPost(collId, timeSeries, _options);
        return result.toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param collId collection id
     * @param tsid time series id
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesRawPutWithHttpInfo(collId: string, tsid: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        const result = this.api.appApiTimeseriesRawPutWithHttpInfo(collId, tsid, timeSeriesUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param collId collection id
     * @param tsid time series id
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesRawPut(collId: string, tsid: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.appApiTimeseriesRawPut(collId, tsid, timeSeriesUpdate, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param name new name for the time series
     */
    public appApiTimeseriesRawUndeleteWithHttpInfo(collId: string, tsid: string, name?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesRawUndeleteWithHttpInfo(collId, tsid, name, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param name new name for the time series
     */
    public appApiTimeseriesRawUndelete(collId: string, tsid: string, name?: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesRawUndelete(collId, tsid, name, _options);
        return result.toPromise();
    }


}



import { ObservableRawTimeSeriesDataApi } from './ObservableAPI';

import { RawTimeSeriesDataApiRequestFactory, RawTimeSeriesDataApiResponseProcessor} from "../apis/RawTimeSeriesDataApi";
export class PromiseRawTimeSeriesDataApi {
    private api: ObservableRawTimeSeriesDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawTimeSeriesDataApiRequestFactory,
        responseProcessor?: RawTimeSeriesDataApiResponseProcessor
    ) {
        this.api = new ObservableRawTimeSeriesDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param collId collection id
     * @param index time series index
     * @param indexFormat 
     * @param tsid time series id
     */
    public appApiRawTimeseriesDataDeleteWithHttpInfo(collId: string, index: Array<number>, indexFormat: IndexFormat, tsid?: string, _options?: Configuration): Promise<HttpInfo<RawDataDeleteResponse>> {
        const result = this.api.appApiRawTimeseriesDataDeleteWithHttpInfo(collId, index, indexFormat, tsid, _options);
        return result.toPromise();
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param collId collection id
     * @param index time series index
     * @param indexFormat 
     * @param tsid time series id
     */
    public appApiRawTimeseriesDataDelete(collId: string, index: Array<number>, indexFormat: IndexFormat, tsid?: string, _options?: Configuration): Promise<RawDataDeleteResponse> {
        const result = this.api.appApiRawTimeseriesDataDelete(collId, index, indexFormat, tsid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param collId collection id
     * @param tsids array of tsid\&#39;s in the collection, collId
     * @param realtime real time to retrieve the historical data
     */
    public appApiRawTimeseriesDataGetWithHttpInfo(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Promise<HttpInfo<{ [key: string]: RawSingleTimeSeriesData; }>> {
        const result = this.api.appApiRawTimeseriesDataGetWithHttpInfo(collId, tsids, realtime, _options);
        return result.toPromise();
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param collId collection id
     * @param tsids array of tsid\&#39;s in the collection, collId
     * @param realtime real time to retrieve the historical data
     */
    public appApiRawTimeseriesDataGet(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Promise<{ [key: string]: RawSingleTimeSeriesData; }> {
        const result = this.api.appApiRawTimeseriesDataGet(collId, tsids, realtime, _options);
        return result.toPromise();
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param collId collection id
     * @param method data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @param rawDataPutRequest time series data
     * @param realtime real time at which data was written. This only works if there is no observations written after this real time
     */
    public appApiRawTimeseriesDataPutWithHttpInfo(collId: string, method: 'overwrite' | 'update' | 'append', rawDataPutRequest: RawDataPutRequest, realtime?: Date, _options?: Configuration): Promise<HttpInfo<RawDataPutResponse>> {
        const result = this.api.appApiRawTimeseriesDataPutWithHttpInfo(collId, method, rawDataPutRequest, realtime, _options);
        return result.toPromise();
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param collId collection id
     * @param method data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @param rawDataPutRequest time series data
     * @param realtime real time at which data was written. This only works if there is no observations written after this real time
     */
    public appApiRawTimeseriesDataPut(collId: string, method: 'overwrite' | 'update' | 'append', rawDataPutRequest: RawDataPutRequest, realtime?: Date, _options?: Configuration): Promise<RawDataPutResponse> {
        const result = this.api.appApiRawTimeseriesDataPut(collId, method, rawDataPutRequest, realtime, _options);
        return result.toPromise();
    }


}



import { ObservableRawUploadApi } from './ObservableAPI';

import { RawUploadApiRequestFactory, RawUploadApiResponseProcessor} from "../apis/RawUploadApi";
export class PromiseRawUploadApi {
    private api: ObservableRawUploadApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawUploadApiRequestFactory,
        responseProcessor?: RawUploadApiResponseProcessor
    ) {
        this.api = new ObservableRawUploadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * commit staging
     * commit staging
     * @param uploadId upload_id
     */
    public appApiUploadCommitWithHttpInfo(uploadId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUploadCommitWithHttpInfo(uploadId, _options);
        return result.toPromise();
    }

    /**
     * commit staging
     * commit staging
     * @param uploadId upload_id
     */
    public appApiUploadCommit(uploadId: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUploadCommit(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     */
    public appApiUploadConfirmUploadWithHttpInfo(uploadId: string, _options?: Configuration): Promise<HttpInfo<Upload>> {
        const result = this.api.appApiUploadConfirmUploadWithHttpInfo(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     */
    public appApiUploadConfirmUpload(uploadId: string, _options?: Configuration): Promise<Upload> {
        const result = this.api.appApiUploadConfirmUpload(uploadId, _options);
        return result.toPromise();
    }

    /**
     * create a new upload
     * create a new upload
     * @param collId collection id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadCreateWithHttpInfo(collId: string, filename?: string, fileType?: string, _options?: Configuration): Promise<HttpInfo<Upload>> {
        const result = this.api.appApiUploadCreateWithHttpInfo(collId, filename, fileType, _options);
        return result.toPromise();
    }

    /**
     * create a new upload
     * create a new upload
     * @param collId collection id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadCreate(collId: string, filename?: string, fileType?: string, _options?: Configuration): Promise<Upload> {
        const result = this.api.appApiUploadCreate(collId, filename, fileType, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param uploadId upload_id
     */
    public appApiUploadGetWithHttpInfo(uploadId: string, _options?: Configuration): Promise<HttpInfo<Upload>> {
        const result = this.api.appApiUploadGetWithHttpInfo(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param uploadId upload_id
     */
    public appApiUploadGet(uploadId: string, _options?: Configuration): Promise<Upload> {
        const result = this.api.appApiUploadGet(uploadId, _options);
        return result.toPromise();
    }

    /**
     * list upload objects
     * list upload objects
     * @param collId collection id
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUploadGetListWithHttpInfo(collId?: string, offset?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<Upload>> {
        const result = this.api.appApiUploadGetListWithHttpInfo(collId, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * list upload objects
     * list upload objects
     * @param collId collection id
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUploadGetList(collId?: string, offset?: number, limit?: number, _options?: Configuration): Promise<Upload> {
        const result = this.api.appApiUploadGetList(collId, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param uploadId upload_id
     */
    public appApiUploadGetProcessedWithHttpInfo(uploadId: string, _options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.appApiUploadGetProcessedWithHttpInfo(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param uploadId upload_id
     */
    public appApiUploadGetProcessed(uploadId: string, _options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.appApiUploadGetProcessed(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param uploadId upload_id
     */
    public appApiUploadGetStagingWithHttpInfo(uploadId: string, _options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.appApiUploadGetStagingWithHttpInfo(uploadId, _options);
        return result.toPromise();
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param uploadId upload_id
     */
    public appApiUploadGetStaging(uploadId: string, _options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.appApiUploadGetStaging(uploadId, _options);
        return result.toPromise();
    }

    /**
     * save processing results
     * save processing results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPostProcessedWithHttpInfo(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUploadPostProcessedWithHttpInfo(uploadId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * save processing results
     * save processing results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPostProcessed(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUploadPostProcessed(uploadId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * save staging results
     * save staging results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPutStagingWithHttpInfo(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUploadPutStagingWithHttpInfo(uploadId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * save staging results
     * save staging results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPutStaging(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUploadPutStaging(uploadId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadRegenerateUrlWithHttpInfo(uploadId: string, filename?: string, fileType?: string, _options?: Configuration): Promise<HttpInfo<Upload>> {
        const result = this.api.appApiUploadRegenerateUrlWithHttpInfo(uploadId, filename, fileType, _options);
        return result.toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadRegenerateUrl(uploadId: string, filename?: string, fileType?: string, _options?: Configuration): Promise<Upload> {
        const result = this.api.appApiUploadRegenerateUrl(uploadId, filename, fileType, _options);
        return result.toPromise();
    }


}



import { ObservableRawUserApi } from './ObservableAPI';

import { RawUserApiRequestFactory, RawUserApiResponseProcessor} from "../apis/RawUserApi";
export class PromiseRawUserApi {
    private api: ObservableRawUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawUserApiRequestFactory,
        responseProcessor?: RawUserApiResponseProcessor
    ) {
        this.api = new ObservableRawUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param uid user id
     * @param newPassword new password
     */
    public appApiUserRawChangePasswordWithHttpInfo(uid: string, newPassword: NewPassword, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserRawChangePasswordWithHttpInfo(uid, newPassword, _options);
        return result.toPromise();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param uid user id
     * @param newPassword new password
     */
    public appApiUserRawChangePassword(uid: string, newPassword: NewPassword, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUserRawChangePassword(uid, newPassword, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserRawCreateWithHttpInfo(userPost?: UserPost, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserRawCreateWithHttpInfo(userPost, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserRawCreate(userPost?: UserPost, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserRawCreate(userPost, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param uid user id
     */
    public appApiUserRawDeleteWithHttpInfo(uid: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserRawDeleteWithHttpInfo(uid, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param uid user id
     */
    public appApiUserRawDelete(uid: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUserRawDelete(uid, _options);
        return result.toPromise();
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param uid user id
     */
    public appApiUserRawGetWithHttpInfo(uid: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserRawGetWithHttpInfo(uid, _options);
        return result.toPromise();
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param uid user id
     */
    public appApiUserRawGet(uid: string, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserRawGet(uid, _options);
        return result.toPromise();
    }

    /**
     * get user permissions
     * get user permissions
     * @param uid user id
     */
    public appApiUserRawGetPermissionsWithHttpInfo(uid: string, _options?: Configuration): Promise<HttpInfo<UserPermissions>> {
        const result = this.api.appApiUserRawGetPermissionsWithHttpInfo(uid, _options);
        return result.toPromise();
    }

    /**
     * get user permissions
     * get user permissions
     * @param uid user id
     */
    public appApiUserRawGetPermissions(uid: string, _options?: Configuration): Promise<UserPermissions> {
        const result = this.api.appApiUserRawGetPermissions(uid, _options);
        return result.toPromise();
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserRawListUsersWithHttpInfo(query?: string, offset?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.appApiUserRawListUsersWithHttpInfo(query, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserRawListUsers(query?: string, offset?: number, limit?: number, _options?: Configuration): Promise<Array<User>> {
        const result = this.api.appApiUserRawListUsers(query, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param uid user id
     * @param userUpdate Updated user object
     */
    public appApiUserRawUpdateWithHttpInfo(uid: string, userUpdate?: UserUpdate, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserRawUpdateWithHttpInfo(uid, userUpdate, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param uid user id
     * @param userUpdate Updated user object
     */
    public appApiUserRawUpdate(uid: string, userUpdate?: UserUpdate, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserRawUpdate(uid, userUpdate, _options);
        return result.toPromise();
    }

    /**
     * update user permissions
     * update user permissions
     * @param uid user id
     * @param isAdmin has user admin permissions
     * @param canCreateGroup can user create group
     * @param canCreateSpace can user create space
     */
    public appApiUserRawUpdatePermissionsWithHttpInfo(uid: string, isAdmin?: boolean, canCreateGroup?: boolean, canCreateSpace?: boolean, _options?: Configuration): Promise<HttpInfo<UserPermissions>> {
        const result = this.api.appApiUserRawUpdatePermissionsWithHttpInfo(uid, isAdmin, canCreateGroup, canCreateSpace, _options);
        return result.toPromise();
    }

    /**
     * update user permissions
     * update user permissions
     * @param uid user id
     * @param isAdmin has user admin permissions
     * @param canCreateGroup can user create group
     * @param canCreateSpace can user create space
     */
    public appApiUserRawUpdatePermissions(uid: string, isAdmin?: boolean, canCreateGroup?: boolean, canCreateSpace?: boolean, _options?: Configuration): Promise<UserPermissions> {
        const result = this.api.appApiUserRawUpdatePermissions(uid, isAdmin, canCreateGroup, canCreateSpace, _options);
        return result.toPromise();
    }


}



import { ObservableRawVintageApi } from './ObservableAPI';

import { RawVintageApiRequestFactory, RawVintageApiResponseProcessor} from "../apis/RawVintageApi";
export class PromiseRawVintageApi {
    private api: ObservableRawVintageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RawVintageApiRequestFactory,
        responseProcessor?: RawVintageApiResponseProcessor
    ) {
        this.api = new ObservableRawVintageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param collId collection id
     * @param tsid time series id
     * @param realtime realtime when values were valid
     */
    public appApiVintagesGetListRawWithHttpInfo(collId: string, tsid?: string, realtime?: Date, _options?: Configuration): Promise<HttpInfo<Array<VintageSummary>>> {
        const result = this.api.appApiVintagesGetListRawWithHttpInfo(collId, tsid, realtime, _options);
        return result.toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param collId collection id
     * @param tsid time series id
     * @param realtime realtime when values were valid
     */
    public appApiVintagesGetListRaw(collId: string, tsid?: string, realtime?: Date, _options?: Configuration): Promise<Array<VintageSummary>> {
        const result = this.api.appApiVintagesGetListRaw(collId, tsid, realtime, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param collId collection id
     * @param vid vintage id
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetRawWithHttpInfo(collId: string, vid: string, meta?: boolean, _options?: Configuration): Promise<HttpInfo<Vintage>> {
        const result = this.api.appApiVintagesGetRawWithHttpInfo(collId, vid, meta, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param collId collection id
     * @param vid vintage id
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetRaw(collId: string, vid: string, meta?: boolean, _options?: Configuration): Promise<Vintage> {
        const result = this.api.appApiVintagesGetRaw(collId, vid, meta, _options);
        return result.toPromise();
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param collId collection id
     * @param vid vintage id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiVintagesObjectHistoryRawWithHttpInfo(collId: string, vid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<VintageHistorical>>> {
        const result = this.api.appApiVintagesObjectHistoryRawWithHttpInfo(collId, vid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param collId collection id
     * @param vid vintage id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiVintagesObjectHistoryRaw(collId: string, vid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<VintageHistorical>> {
        const result = this.api.appApiVintagesObjectHistoryRaw(collId, vid, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param collId collection id
     * @param vid vintage id
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutRawWithHttpInfo(collId: string, vid: string, vintageUpdate: VintageUpdate, _options?: Configuration): Promise<HttpInfo<VintageSummary>> {
        const result = this.api.appApiVintagesPutRawWithHttpInfo(collId, vid, vintageUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param collId collection id
     * @param vid vintage id
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutRaw(collId: string, vid: string, vintageUpdate: VintageUpdate, _options?: Configuration): Promise<VintageSummary> {
        const result = this.api.appApiVintagesPutRaw(collId, vid, vintageUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableSpaceApi } from './ObservableAPI';

import { SpaceApiRequestFactory, SpaceApiResponseProcessor} from "../apis/SpaceApi";
export class PromiseSpaceApi {
    private api: ObservableSpaceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SpaceApiRequestFactory,
        responseProcessor?: SpaceApiResponseProcessor
    ) {
        this.api = new ObservableSpaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a space member
     * Add a space member
     * @param spaceName space name
     * @param spaceMemberPost 
     */
    public appApiSpaceAddMemberWithHttpInfo(spaceName: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceAddMemberWithHttpInfo(spaceName, spaceMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Add a space member
     * Add a space member
     * @param spaceName space name
     * @param spaceMemberPost 
     */
    public appApiSpaceAddMember(spaceName: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceAddMember(spaceName, spaceMemberPost, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceName space name
     */
    public appApiSpaceDeleteWithHttpInfo(spaceName: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiSpaceDeleteWithHttpInfo(spaceName, _options);
        return result.toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceName space name
     */
    public appApiSpaceDelete(spaceName: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiSpaceDelete(spaceName, _options);
        return result.toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceName space name
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiSpaceDeleteMemberWithHttpInfo(spaceName: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceDeleteMemberWithHttpInfo(spaceName, type, memberName, _options);
        return result.toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceName space name
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiSpaceDeleteMember(spaceName: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceDeleteMember(spaceName, type, memberName, _options);
        return result.toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param spaceName space name
     */
    public appApiSpaceGetWithHttpInfo(spaceName: string, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpaceGetWithHttpInfo(spaceName, _options);
        return result.toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param spaceName space name
     */
    public appApiSpaceGet(spaceName: string, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpaceGet(spaceName, _options);
        return result.toPromise();
    }

    /**
     * 
     * list spaces
     * @param query Search query
     */
    public appApiSpaceGetListWithHttpInfo(query?: string, _options?: Configuration): Promise<HttpInfo<Array<Space>>> {
        const result = this.api.appApiSpaceGetListWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * 
     * list spaces
     * @param query Search query
     */
    public appApiSpaceGetList(query?: string, _options?: Configuration): Promise<Array<Space>> {
        const result = this.api.appApiSpaceGetList(query, _options);
        return result.toPromise();
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param spaceName space name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceNameHistoryWithHttpInfo(spaceName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.appApiSpaceNameHistoryWithHttpInfo(spaceName, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param spaceName space name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceNameHistory(spaceName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.appApiSpaceNameHistory(spaceName, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpacePostWithHttpInfo(space: Space, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpacePostWithHttpInfo(space, _options);
        return result.toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpacePost(space: Space, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpacePost(space, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param spaceName space name
     * @param space Optional description in *Markdown*
     */
    public appApiSpacePutWithHttpInfo(spaceName: string, space: Space, _options?: Configuration): Promise<HttpInfo<Space>> {
        const result = this.api.appApiSpacePutWithHttpInfo(spaceName, space, _options);
        return result.toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param spaceName space name
     * @param space Optional description in *Markdown*
     */
    public appApiSpacePut(spaceName: string, space: Space, _options?: Configuration): Promise<Space> {
        const result = this.api.appApiSpacePut(spaceName, space, _options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesApi } from './ObservableAPI';

import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";
export class PromiseTimeSeriesApi {
    private api: ObservableTimeSeriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesApiRequestFactory,
        responseProcessor?: TimeSeriesApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete time series
     * Delete a time series
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesDeleteWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesDeleteWithHttpInfo(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * delete time series
     * Delete a time series
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesDelete(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesDelete(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * 
     * Retrieve time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesGetWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        const result = this.api.appApiTimeseriesGetWithHttpInfo(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * 
     * Retrieve time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesGet(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.appApiTimeseriesGet(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiTimeseriesGetListWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Promise<HttpInfo<Array<TimeSeriesSummary>>> {
        const result = this.api.appApiTimeseriesGetListWithHttpInfo(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiTimeseriesGetList(spaceName: string, collName: string, _options?: Configuration): Promise<Array<TimeSeriesSummary>> {
        const result = this.api.appApiTimeseriesGetList(spaceName, collName, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrive historical values
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesNameHistoryWithHttpInfo(spaceName: string, collName: string, name: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.appApiTimeseriesNameHistoryWithHttpInfo(spaceName, collName, name, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * 
     * retrive historical values
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesNameHistory(spaceName: string, collName: string, name: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.appApiTimeseriesNameHistory(spaceName, collName, name, realStart, realEnd, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param spaceName space name
     * @param collName collection name
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesPostWithHttpInfo(spaceName: string, collName: string, timeSeries: TimeSeries, _options?: Configuration): Promise<HttpInfo<TimeSeriesCore>> {
        const result = this.api.appApiTimeseriesPostWithHttpInfo(spaceName, collName, timeSeries, _options);
        return result.toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param spaceName space name
     * @param collName collection name
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesPost(spaceName: string, collName: string, timeSeries: TimeSeries, _options?: Configuration): Promise<TimeSeriesCore> {
        const result = this.api.appApiTimeseriesPost(spaceName, collName, timeSeries, _options);
        return result.toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesPutWithHttpInfo(spaceName: string, collName: string, name: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        const result = this.api.appApiTimeseriesPutWithHttpInfo(spaceName, collName, name, timeSeriesUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesPut(spaceName: string, collName: string, name: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.appApiTimeseriesPut(spaceName, collName, name, timeSeriesUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesDataApi } from './ObservableAPI';

import { TimeSeriesDataApiRequestFactory, TimeSeriesDataApiResponseProcessor} from "../apis/TimeSeriesDataApi";
export class PromiseTimeSeriesDataApi {
    private api: ObservableTimeSeriesDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesDataApiRequestFactory,
        responseProcessor?: TimeSeriesDataApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete observations from a time series
     * Delete observations
     * @param spaceName space name
     * @param collName collection name
     * @param names list of series names
     * @param index time index
     * @param format Format of data time index * &#x60;string&#x60; a string represenation specific to each index type, e.g. 2000-01 for monthly index. * &#x60;iso&#x60; a string with iso representation of datetime \&#39;\&#39; * &#x60;s&#x60;   a number of seconds from unix epoch 1970-01-01 * &#x60;ms&#x60;  a number of milliseconds from unix epoch 1970-01-01 * &#x60;us&#x60;  a number of microseconds from unix epoch 1970-01-01 
     */
    public appApiTimeseriesDataDeleteWithHttpInfo(spaceName: string, collName: string, names: Array<string>, index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>, format?: 'string' | 'iso' | 's' | 'ms' | 'us', _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesDataDeleteWithHttpInfo(spaceName, collName, names, index, format, _options);
        return result.toPromise();
    }

    /**
     * Delete observations from a time series
     * Delete observations
     * @param spaceName space name
     * @param collName collection name
     * @param names list of series names
     * @param index time index
     * @param format Format of data time index * &#x60;string&#x60; a string represenation specific to each index type, e.g. 2000-01 for monthly index. * &#x60;iso&#x60; a string with iso representation of datetime \&#39;\&#39; * &#x60;s&#x60;   a number of seconds from unix epoch 1970-01-01 * &#x60;ms&#x60;  a number of milliseconds from unix epoch 1970-01-01 * &#x60;us&#x60;  a number of microseconds from unix epoch 1970-01-01 
     */
    public appApiTimeseriesDataDelete(spaceName: string, collName: string, names: Array<string>, index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>, format?: 'string' | 'iso' | 's' | 'ms' | 'us', _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesDataDelete(spaceName, collName, names, index, format, _options);
        return result.toPromise();
    }

    /**
     * Retrieve time series data
     * Retrieve time series data
     * @param series list of time series identifiers
     * @param periodStart start of time index range, format depends on the freq requested 
     * @param periodEnd end of time index range
     * @param transform Time series transformation * &#x60;none&#x60; - as is * &#x60;diff&#x60; - Use the last value of the time period. * &#x60;rdiff&#x60; - relative diff, i.e. % changes * &#x60;log&#x60; - natural log * &#x60;ldiff&#x60; - log diff, i.e. % changes * &#x60;norm&#x60; - normalized to 100 
     * @param freq frequency of returned series
     * @param toLowerMethod Method of converting to lower frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;last&#x60; - Use the last value of the time period. * &#x60;first&#x60; - Use the first value of the time period. * &#x60;sum&#x60; - Aggregate the values of the time period. e.g. for flow type of variables * &#x60;pch&#x60; - Aggregate the percentage change over the period. * &#x60;mix&#x60; - Use the highest value in the time period. * &#x60;min&#x60; - Use the lowest value of the time period. 
     * @param toHigherMethod Method of converting to higher frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;same&#x60; - Use the same value for the whole period. * &#x60;dist&#x60; - Divide equally over the time period. * &#x60;pch&#x60; - Distribute the percentage change over the period. * &#x60;linear&#x60; - Use a linear interpolation of the values from this to the next period. * &#x60;first&#x60; - Use the value for the first value of the period. * &#x60;quad&#x60; - Use quadratic interpolation to distribute the value over the period. * &#x60;cube&#x60; - Use a cubic interpolation of the values from this to the next period. 
     * @param missingMethod Method of filling in any missing values. * &#x60;none&#x60; - Do not fill in missing values. They will remain NaN in the value vector. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;previous&#x60; - Use the previous non-missing value. * &#x60;zero&#x60; - Use the value zero. 
     * @param merge Should merge time series
     * @param realtime real time as of which values were valid
     * @param vintage vintage tag used to identify real time when series was written.
     * @param output output type
     * @param outputIndexType | format of output type * &#x60;auto&#x60; depending on output, * &#x60;string&#x60; string represenation as in * &#x60;epoch&#x60; integers specifying number of ms from unix epoch * &#x60;ISO&#x60; ISO8601 format 2008-09-15T15:53:00
     * @param outputIndexFormat format of output type
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiTimeseriesDataGetWithHttpInfo(series: TSIList, periodStart?: string, periodEnd?: string, transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm', freq?: string, toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min', toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube', missingMethod?: 'none' | 'auto' | 'previous' | 'zero', merge?: boolean, realtime?: Date, vintage?: string, output?: 'json' | 'csv' | 'excel', outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO', outputIndexFormat?: string, offset?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<SingleTimeSeriesData>>> {
        const result = this.api.appApiTimeseriesDataGetWithHttpInfo(series, periodStart, periodEnd, transform, freq, toLowerMethod, toHigherMethod, missingMethod, merge, realtime, vintage, output, outputIndexType, outputIndexFormat, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve time series data
     * Retrieve time series data
     * @param series list of time series identifiers
     * @param periodStart start of time index range, format depends on the freq requested 
     * @param periodEnd end of time index range
     * @param transform Time series transformation * &#x60;none&#x60; - as is * &#x60;diff&#x60; - Use the last value of the time period. * &#x60;rdiff&#x60; - relative diff, i.e. % changes * &#x60;log&#x60; - natural log * &#x60;ldiff&#x60; - log diff, i.e. % changes * &#x60;norm&#x60; - normalized to 100 
     * @param freq frequency of returned series
     * @param toLowerMethod Method of converting to lower frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;last&#x60; - Use the last value of the time period. * &#x60;first&#x60; - Use the first value of the time period. * &#x60;sum&#x60; - Aggregate the values of the time period. e.g. for flow type of variables * &#x60;pch&#x60; - Aggregate the percentage change over the period. * &#x60;mix&#x60; - Use the highest value in the time period. * &#x60;min&#x60; - Use the lowest value of the time period. 
     * @param toHigherMethod Method of converting to higher frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;same&#x60; - Use the same value for the whole period. * &#x60;dist&#x60; - Divide equally over the time period. * &#x60;pch&#x60; - Distribute the percentage change over the period. * &#x60;linear&#x60; - Use a linear interpolation of the values from this to the next period. * &#x60;first&#x60; - Use the value for the first value of the period. * &#x60;quad&#x60; - Use quadratic interpolation to distribute the value over the period. * &#x60;cube&#x60; - Use a cubic interpolation of the values from this to the next period. 
     * @param missingMethod Method of filling in any missing values. * &#x60;none&#x60; - Do not fill in missing values. They will remain NaN in the value vector. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;previous&#x60; - Use the previous non-missing value. * &#x60;zero&#x60; - Use the value zero. 
     * @param merge Should merge time series
     * @param realtime real time as of which values were valid
     * @param vintage vintage tag used to identify real time when series was written.
     * @param output output type
     * @param outputIndexType | format of output type * &#x60;auto&#x60; depending on output, * &#x60;string&#x60; string represenation as in * &#x60;epoch&#x60; integers specifying number of ms from unix epoch * &#x60;ISO&#x60; ISO8601 format 2008-09-15T15:53:00
     * @param outputIndexFormat format of output type
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiTimeseriesDataGet(series: TSIList, periodStart?: string, periodEnd?: string, transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm', freq?: string, toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min', toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube', missingMethod?: 'none' | 'auto' | 'previous' | 'zero', merge?: boolean, realtime?: Date, vintage?: string, output?: 'json' | 'csv' | 'excel', outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO', outputIndexFormat?: string, offset?: number, limit?: number, _options?: Configuration): Promise<Array<SingleTimeSeriesData>> {
        const result = this.api.appApiTimeseriesDataGet(series, periodStart, periodEnd, transform, freq, toLowerMethod, toHigherMethod, missingMethod, merge, realtime, vintage, output, outputIndexType, outputIndexFormat, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * Save observations of time series
     * Save observations
     * @param spaceName space name
     * @param collName collection name
     * @param singleTimeSeriesData time series data
     */
    public appApiTimeseriesDataPutWithHttpInfo(spaceName: string, collName: string, singleTimeSeriesData: Array<SingleTimeSeriesData>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiTimeseriesDataPutWithHttpInfo(spaceName, collName, singleTimeSeriesData, _options);
        return result.toPromise();
    }

    /**
     * Save observations of time series
     * Save observations
     * @param spaceName space name
     * @param collName collection name
     * @param singleTimeSeriesData time series data
     */
    public appApiTimeseriesDataPut(spaceName: string, collName: string, singleTimeSeriesData: Array<SingleTimeSeriesData>, _options?: Configuration): Promise<void> {
        const result = this.api.appApiTimeseriesDataPut(spaceName, collName, singleTimeSeriesData, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param username username
     * @param newPassword new password
     */
    public appApiUserChangePasswordWithHttpInfo(username: string, newPassword: NewPassword, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserChangePasswordWithHttpInfo(username, newPassword, _options);
        return result.toPromise();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param username username
     * @param newPassword new password
     */
    public appApiUserChangePassword(username: string, newPassword: NewPassword, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUserChangePassword(username, newPassword, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserCreateWithHttpInfo(userPost?: UserPost, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserCreateWithHttpInfo(userPost, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserCreate(userPost?: UserPost, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserCreate(userPost, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param username username
     */
    public appApiUserDeleteWithHttpInfo(username: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserDeleteWithHttpInfo(username, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param username username
     */
    public appApiUserDelete(username: string, _options?: Configuration): Promise<void> {
        const result = this.api.appApiUserDelete(username, _options);
        return result.toPromise();
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param username username
     */
    public appApiUserGetWithHttpInfo(username: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserGetWithHttpInfo(username, _options);
        return result.toPromise();
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param username username
     */
    public appApiUserGet(username: string, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserGet(username, _options);
        return result.toPromise();
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserListUsersWithHttpInfo(query?: string, offset?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.appApiUserListUsersWithHttpInfo(query, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserListUsers(query?: string, offset?: number, limit?: number, _options?: Configuration): Promise<Array<User>> {
        const result = this.api.appApiUserListUsers(query, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     */
    public appApiUserLoginWithHttpInfo(_options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.appApiUserLoginWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     */
    public appApiUserLogin(_options?: Configuration): Promise<LoginResponse> {
        const result = this.api.appApiUserLogin(_options);
        return result.toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     */
    public appApiUserLogoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserLogoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     */
    public appApiUserLogout(_options?: Configuration): Promise<void> {
        const result = this.api.appApiUserLogout(_options);
        return result.toPromise();
    }

    /**
     * checks user authorization
     * checks user authorization
     */
    public appApiUserPingWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appApiUserPingWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * checks user authorization
     * checks user authorization
     */
    public appApiUserPing(_options?: Configuration): Promise<void> {
        const result = this.api.appApiUserPing(_options);
        return result.toPromise();
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     */
    public appApiUserRefreshWithHttpInfo(_options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.appApiUserRefreshWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     */
    public appApiUserRefresh(_options?: Configuration): Promise<LoginResponse> {
        const result = this.api.appApiUserRefresh(_options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param username username
     * @param userUpdate Updated user object
     */
    public appApiUserUpdateWithHttpInfo(username: string, userUpdate?: UserUpdate, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.appApiUserUpdateWithHttpInfo(username, userUpdate, _options);
        return result.toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param username username
     * @param userUpdate Updated user object
     */
    public appApiUserUpdate(username: string, userUpdate?: UserUpdate, _options?: Configuration): Promise<User> {
        const result = this.api.appApiUserUpdate(username, userUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableVintageApi } from './ObservableAPI';

import { VintageApiRequestFactory, VintageApiResponseProcessor} from "../apis/VintageApi";
export class PromiseVintageApi {
    private api: ObservableVintageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VintageApiRequestFactory,
        responseProcessor?: VintageApiResponseProcessor
    ) {
        this.api = new ObservableVintageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetWithHttpInfo(spaceName: string, collName: string, name: string, meta?: boolean, _options?: Configuration): Promise<HttpInfo<Vintage>> {
        const result = this.api.appApiVintagesGetWithHttpInfo(spaceName, collName, name, meta, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param meta should include vintage metadata
     */
    public appApiVintagesGet(spaceName: string, collName: string, name: string, meta?: boolean, _options?: Configuration): Promise<Vintage> {
        const result = this.api.appApiVintagesGet(spaceName, collName, name, meta, _options);
        return result.toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param spaceName space name
     * @param collName collection name
     * @param tsid time series id
     */
    public appApiVintagesGetListWithHttpInfo(spaceName: string, collName: string, tsid?: string, _options?: Configuration): Promise<HttpInfo<Array<VintageSummary>>> {
        const result = this.api.appApiVintagesGetListWithHttpInfo(spaceName, collName, tsid, _options);
        return result.toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param spaceName space name
     * @param collName collection name
     * @param tsid time series id
     */
    public appApiVintagesGetList(spaceName: string, collName: string, tsid?: string, _options?: Configuration): Promise<Array<VintageSummary>> {
        const result = this.api.appApiVintagesGetList(spaceName, collName, tsid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     */
    public appApiVintagesNameHistoryWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.appApiVintagesNameHistoryWithHttpInfo(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     */
    public appApiVintagesNameHistory(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.appApiVintagesNameHistory(spaceName, collName, name, _options);
        return result.toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutWithHttpInfo(spaceName: string, collName: string, name: string, vintageUpdate: VintageUpdate, _options?: Configuration): Promise<HttpInfo<VintageSummary>> {
        const result = this.api.appApiVintagesPutWithHttpInfo(spaceName, collName, name, vintageUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPut(spaceName: string, collName: string, name: string, vintageUpdate: VintageUpdate, _options?: Configuration): Promise<VintageSummary> {
        const result = this.api.appApiVintagesPut(spaceName, collName, name, vintageUpdate, _options);
        return result.toPromise();
    }


}



