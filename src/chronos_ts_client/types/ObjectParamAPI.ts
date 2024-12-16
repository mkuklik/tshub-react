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

import { ObservableAnnotationsApi } from "./ObservableAPI";
import { AnnotationsApiRequestFactory, AnnotationsApiResponseProcessor} from "../apis/AnnotationsApi";

export interface AnnotationsApiAppApiAnnotationAddTargetRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    collName: string
    /**
     * annotation symbol
     * @type string
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    symbol: string
    /**
     * time series id
     * @type string
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    tsid?: string
    /**
     * time series index
     * @type number
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    index?: number
    /**
     * frequency
     * @type Frequency
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    freq?: Frequency
    /**
     * vintage id
     * @type string
     * @memberof AnnotationsApiappApiAnnotationAddTarget
     */
    vid?: string
}

export interface AnnotationsApiAppApiAnnotationCreateRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationCreate
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationCreate
     */
    collName: string
    /**
     * Annotation
     * @type Annotation
     * @memberof AnnotationsApiappApiAnnotationCreate
     */
    annotation: Annotation
}

export interface AnnotationsApiAppApiAnnotationDeleteRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationDelete
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationDelete
     */
    collName: string
    /**
     * annotation symbol
     * @type string
     * @memberof AnnotationsApiappApiAnnotationDelete
     */
    symbol: string
}

export interface AnnotationsApiAppApiAnnotationGetRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationGet
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationGet
     */
    collName: string
    /**
     * annotation symbol
     * @type string
     * @memberof AnnotationsApiappApiAnnotationGet
     */
    symbol: string
}

export interface AnnotationsApiAppApiAnnotationGetListRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationGetList
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationGetList
     */
    collName: string
}

export interface AnnotationsApiAppApiAnnotationRemoveTargetRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    collName: string
    /**
     * annotation symbol
     * @type string
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    symbol: string
    /**
     * time series id
     * @type string
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    tsid?: string
    /**
     * time series index
     * @type number
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    index?: number
    /**
     * frequency
     * @type Frequency
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    freq?: Frequency
    /**
     * vintage id
     * @type string
     * @memberof AnnotationsApiappApiAnnotationRemoveTarget
     */
    vid?: string
}

export interface AnnotationsApiAppApiAnnotationUpdateRequest {
    /**
     * space name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationUpdate
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof AnnotationsApiappApiAnnotationUpdate
     */
    collName: string
    /**
     * annotation symbol
     * @type string
     * @memberof AnnotationsApiappApiAnnotationUpdate
     */
    symbol: string
    /**
     * Annotation
     * @type AnnotationUpdate
     * @memberof AnnotationsApiappApiAnnotationUpdate
     */
    annotationUpdate: AnnotationUpdate
}

export class ObjectAnnotationsApi {
    private api: ObservableAnnotationsApi

    public constructor(configuration: Configuration, requestFactory?: AnnotationsApiRequestFactory, responseProcessor?: AnnotationsApiResponseProcessor) {
        this.api = new ObservableAnnotationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add observation target
     * Add observation target
     * @param param the request object
     */
    public appApiAnnotationAddTargetWithHttpInfo(param: AnnotationsApiAppApiAnnotationAddTargetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationAddTargetWithHttpInfo(param.spaceName, param.collName, param.symbol, param.tsid, param.index, param.freq, param.vid,  options).toPromise();
    }

    /**
     * Add observation target
     * Add observation target
     * @param param the request object
     */
    public appApiAnnotationAddTarget(param: AnnotationsApiAppApiAnnotationAddTargetRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationAddTarget(param.spaceName, param.collName, param.symbol, param.tsid, param.index, param.freq, param.vid,  options).toPromise();
    }

    /**
     * 
     * Create an annotation
     * @param param the request object
     */
    public appApiAnnotationCreateWithHttpInfo(param: AnnotationsApiAppApiAnnotationCreateRequest, options?: Configuration): Promise<HttpInfo<Annotation>> {
        return this.api.appApiAnnotationCreateWithHttpInfo(param.spaceName, param.collName, param.annotation,  options).toPromise();
    }

    /**
     * 
     * Create an annotation
     * @param param the request object
     */
    public appApiAnnotationCreate(param: AnnotationsApiAppApiAnnotationCreateRequest, options?: Configuration): Promise<Annotation> {
        return this.api.appApiAnnotationCreate(param.spaceName, param.collName, param.annotation,  options).toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param param the request object
     */
    public appApiAnnotationDeleteWithHttpInfo(param: AnnotationsApiAppApiAnnotationDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationDeleteWithHttpInfo(param.spaceName, param.collName, param.symbol,  options).toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param param the request object
     */
    public appApiAnnotationDelete(param: AnnotationsApiAppApiAnnotationDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationDelete(param.spaceName, param.collName, param.symbol,  options).toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param param the request object
     */
    public appApiAnnotationGetWithHttpInfo(param: AnnotationsApiAppApiAnnotationGetRequest, options?: Configuration): Promise<HttpInfo<Annotation>> {
        return this.api.appApiAnnotationGetWithHttpInfo(param.spaceName, param.collName, param.symbol,  options).toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param param the request object
     */
    public appApiAnnotationGet(param: AnnotationsApiAppApiAnnotationGetRequest, options?: Configuration): Promise<Annotation> {
        return this.api.appApiAnnotationGet(param.spaceName, param.collName, param.symbol,  options).toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param param the request object
     */
    public appApiAnnotationGetListWithHttpInfo(param: AnnotationsApiAppApiAnnotationGetListRequest, options?: Configuration): Promise<HttpInfo<Array<Annotation>>> {
        return this.api.appApiAnnotationGetListWithHttpInfo(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param param the request object
     */
    public appApiAnnotationGetList(param: AnnotationsApiAppApiAnnotationGetListRequest, options?: Configuration): Promise<Array<Annotation>> {
        return this.api.appApiAnnotationGetList(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * delete observation targets
     * delete observation targets
     * @param param the request object
     */
    public appApiAnnotationRemoveTargetWithHttpInfo(param: AnnotationsApiAppApiAnnotationRemoveTargetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationRemoveTargetWithHttpInfo(param.spaceName, param.collName, param.symbol, param.tsid, param.index, param.freq, param.vid,  options).toPromise();
    }

    /**
     * delete observation targets
     * delete observation targets
     * @param param the request object
     */
    public appApiAnnotationRemoveTarget(param: AnnotationsApiAppApiAnnotationRemoveTargetRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationRemoveTarget(param.spaceName, param.collName, param.symbol, param.tsid, param.index, param.freq, param.vid,  options).toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param param the request object
     */
    public appApiAnnotationUpdateWithHttpInfo(param: AnnotationsApiAppApiAnnotationUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationUpdateWithHttpInfo(param.spaceName, param.collName, param.symbol, param.annotationUpdate,  options).toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param param the request object
     */
    public appApiAnnotationUpdate(param: AnnotationsApiAppApiAnnotationUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationUpdate(param.spaceName, param.collName, param.symbol, param.annotationUpdate,  options).toPromise();
    }

}

import { ObservableApiKeyApi } from "./ObservableAPI";
import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";

export interface ApiKeyApiAppApiApiKeyCreateRequest {
    /**
     * username
     * @type string
     * @memberof ApiKeyApiappApiApiKeyCreate
     */
    username: string
    /**
     * friendly name to display
     * @type string
     * @memberof ApiKeyApiappApiApiKeyCreate
     */
    name: string
    /**
     * api key scopes
     * @type Array&lt;string&gt;
     * @memberof ApiKeyApiappApiApiKeyCreate
     */
    scopes?: Array<string>
    /**
     * number of days to expiry
     * @type number
     * @memberof ApiKeyApiappApiApiKeyCreate
     */
    expiresIn?: number
}

export interface ApiKeyApiAppApiApiKeyDeleteRequest {
    /**
     * username
     * @type string
     * @memberof ApiKeyApiappApiApiKeyDelete
     */
    username: string
    /**
     * api key name
     * @type string
     * @memberof ApiKeyApiappApiApiKeyDelete
     */
    name: string
}

export interface ApiKeyApiAppApiApiKeyGetListRequest {
    /**
     * username
     * @type string
     * @memberof ApiKeyApiappApiApiKeyGetList
     */
    username: string
}

export class ObjectApiKeyApi {
    private api: ObservableApiKeyApi

    public constructor(configuration: Configuration, requestFactory?: ApiKeyApiRequestFactory, responseProcessor?: ApiKeyApiResponseProcessor) {
        this.api = new ObservableApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API Key
     * Create API Key
     * @param param the request object
     */
    public appApiApiKeyCreateWithHttpInfo(param: ApiKeyApiAppApiApiKeyCreateRequest, options?: Configuration): Promise<HttpInfo<APIKey>> {
        return this.api.appApiApiKeyCreateWithHttpInfo(param.username, param.name, param.scopes, param.expiresIn,  options).toPromise();
    }

    /**
     * Create API Key
     * Create API Key
     * @param param the request object
     */
    public appApiApiKeyCreate(param: ApiKeyApiAppApiApiKeyCreateRequest, options?: Configuration): Promise<APIKey> {
        return this.api.appApiApiKeyCreate(param.username, param.name, param.scopes, param.expiresIn,  options).toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param param the request object
     */
    public appApiApiKeyDeleteWithHttpInfo(param: ApiKeyApiAppApiApiKeyDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiApiKeyDeleteWithHttpInfo(param.username, param.name,  options).toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param param the request object
     */
    public appApiApiKeyDelete(param: ApiKeyApiAppApiApiKeyDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiApiKeyDelete(param.username, param.name,  options).toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param param the request object
     */
    public appApiApiKeyGetListWithHttpInfo(param: ApiKeyApiAppApiApiKeyGetListRequest, options?: Configuration): Promise<HttpInfo<Array<APIKey>>> {
        return this.api.appApiApiKeyGetListWithHttpInfo(param.username,  options).toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param param the request object
     */
    public appApiApiKeyGetList(param: ApiKeyApiAppApiApiKeyGetListRequest, options?: Configuration): Promise<Array<APIKey>> {
        return this.api.appApiApiKeyGetList(param.username,  options).toPromise();
    }

}

import { ObservableCollectionApi } from "./ObservableAPI";
import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";

export interface CollectionApiAppApiCollectionDeleteRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionDelete
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof CollectionApiappApiCollectionDelete
     */
    collName: string
}

export interface CollectionApiAppApiCollectionGetRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionGet
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof CollectionApiappApiCollectionGet
     */
    collName: string
}

export interface CollectionApiAppApiCollectionGetListRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionGetList
     */
    spaceName: string
    /**
     * Search query
     * @type string
     * @memberof CollectionApiappApiCollectionGetList
     */
    query?: string
}

export interface CollectionApiAppApiCollectionNameHistoryRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionNameHistory
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof CollectionApiappApiCollectionNameHistory
     */
    collName: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof CollectionApiappApiCollectionNameHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof CollectionApiappApiCollectionNameHistory
     */
    realEnd?: Date
}

export interface CollectionApiAppApiCollectionPostRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionPost
     */
    spaceName: string
    /**
     * Definition of collection
     * @type Collection
     * @memberof CollectionApiappApiCollectionPost
     */
    collection: Collection
}

export interface CollectionApiAppApiCollectionPutRequest {
    /**
     * space name
     * @type string
     * @memberof CollectionApiappApiCollectionPut
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof CollectionApiappApiCollectionPut
     */
    collName: string
    /**
     * ok
     * @type Collection
     * @memberof CollectionApiappApiCollectionPut
     */
    collection: Collection
}

export class ObjectCollectionApi {
    private api: ObservableCollectionApi

    public constructor(configuration: Configuration, requestFactory?: CollectionApiRequestFactory, responseProcessor?: CollectionApiResponseProcessor) {
        this.api = new ObservableCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a space
     * Delete a collection
     * @param param the request object
     */
    public appApiCollectionDeleteWithHttpInfo(param: CollectionApiAppApiCollectionDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiCollectionDeleteWithHttpInfo(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param param the request object
     */
    public appApiCollectionDelete(param: CollectionApiAppApiCollectionDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiCollectionDelete(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param param the request object
     */
    public appApiCollectionGetWithHttpInfo(param: CollectionApiAppApiCollectionGetRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionGetWithHttpInfo(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param param the request object
     */
    public appApiCollectionGet(param: CollectionApiAppApiCollectionGetRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionGet(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * 
     * list collections
     * @param param the request object
     */
    public appApiCollectionGetListWithHttpInfo(param: CollectionApiAppApiCollectionGetListRequest, options?: Configuration): Promise<HttpInfo<Array<CollectionSummary>>> {
        return this.api.appApiCollectionGetListWithHttpInfo(param.spaceName, param.query,  options).toPromise();
    }

    /**
     * 
     * list collections
     * @param param the request object
     */
    public appApiCollectionGetList(param: CollectionApiAppApiCollectionGetListRequest, options?: Configuration): Promise<Array<CollectionSummary>> {
        return this.api.appApiCollectionGetList(param.spaceName, param.query,  options).toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param param the request object
     */
    public appApiCollectionNameHistoryWithHttpInfo(param: CollectionApiAppApiCollectionNameHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.appApiCollectionNameHistoryWithHttpInfo(param.spaceName, param.collName, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param param the request object
     */
    public appApiCollectionNameHistory(param: CollectionApiAppApiCollectionNameHistoryRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.appApiCollectionNameHistory(param.spaceName, param.collName, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param param the request object
     */
    public appApiCollectionPostWithHttpInfo(param: CollectionApiAppApiCollectionPostRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionPostWithHttpInfo(param.spaceName, param.collection,  options).toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param param the request object
     */
    public appApiCollectionPost(param: CollectionApiAppApiCollectionPostRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionPost(param.spaceName, param.collection,  options).toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param param the request object
     */
    public appApiCollectionPutWithHttpInfo(param: CollectionApiAppApiCollectionPutRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionPutWithHttpInfo(param.spaceName, param.collName, param.collection,  options).toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param param the request object
     */
    public appApiCollectionPut(param: CollectionApiAppApiCollectionPutRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionPut(param.spaceName, param.collName, param.collection,  options).toPromise();
    }

}

import { ObservableGroupApi } from "./ObservableAPI";
import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi";

export interface GroupApiAppApiGroupAddMemberRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupAddMember
     */
    groupname: string
    /**
     * 
     * @type GroupMemberPost
     * @memberof GroupApiappApiGroupAddMember
     */
    groupMemberPost?: GroupMemberPost
}

export interface GroupApiAppApiGroupCreateGroupRequest {
    /**
     * 
     * @type Group
     * @memberof GroupApiappApiGroupCreateGroup
     */
    group?: Group
}

export interface GroupApiAppApiGroupDeleteGroupRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupDeleteGroup
     */
    groupname: string
}

export interface GroupApiAppApiGroupDeleteMemberRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupDeleteMember
     */
    groupname: string
    /**
     * | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @type &#39;u&#39; | &#39;g&#39;
     * @memberof GroupApiappApiGroupDeleteMember
     */
    type: 'u' | 'g'
    /**
     * username or groupname
     * @type string
     * @memberof GroupApiappApiGroupDeleteMember
     */
    memberName: string
}

export interface GroupApiAppApiGroupGetGroupRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupGetGroup
     */
    groupname: string
}

export interface GroupApiAppApiGroupListGroupsRequest {
    /**
     * Search query
     * @type string
     * @memberof GroupApiappApiGroupListGroups
     */
    query?: string
}

export interface GroupApiAppApiGroupNameHistoryRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupNameHistory
     */
    groupname: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof GroupApiappApiGroupNameHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof GroupApiappApiGroupNameHistory
     */
    realEnd?: Date
}

export interface GroupApiAppApiGroupUpdateGroupRequest {
    /**
     * groupname
     * @type string
     * @memberof GroupApiappApiGroupUpdateGroup
     */
    groupname: string
    /**
     * an updated group
     * @type Group
     * @memberof GroupApiappApiGroupUpdateGroup
     */
    group?: Group
}

export class ObjectGroupApi {
    private api: ObservableGroupApi

    public constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor) {
        this.api = new ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a group member
     * Add a group member
     * @param param the request object
     */
    public appApiGroupAddMemberWithHttpInfo(param: GroupApiAppApiGroupAddMemberRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupAddMemberWithHttpInfo(param.groupname, param.groupMemberPost,  options).toPromise();
    }

    /**
     * Add a group member
     * Add a group member
     * @param param the request object
     */
    public appApiGroupAddMember(param: GroupApiAppApiGroupAddMemberRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupAddMember(param.groupname, param.groupMemberPost,  options).toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param param the request object
     */
    public appApiGroupCreateGroupWithHttpInfo(param: GroupApiAppApiGroupCreateGroupRequest = {}, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupCreateGroupWithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param param the request object
     */
    public appApiGroupCreateGroup(param: GroupApiAppApiGroupCreateGroupRequest = {}, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupCreateGroup(param.group,  options).toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param param the request object
     */
    public appApiGroupDeleteGroupWithHttpInfo(param: GroupApiAppApiGroupDeleteGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiGroupDeleteGroupWithHttpInfo(param.groupname,  options).toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param param the request object
     */
    public appApiGroupDeleteGroup(param: GroupApiAppApiGroupDeleteGroupRequest, options?: Configuration): Promise<void> {
        return this.api.appApiGroupDeleteGroup(param.groupname,  options).toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param param the request object
     */
    public appApiGroupDeleteMemberWithHttpInfo(param: GroupApiAppApiGroupDeleteMemberRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupDeleteMemberWithHttpInfo(param.groupname, param.type, param.memberName,  options).toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param param the request object
     */
    public appApiGroupDeleteMember(param: GroupApiAppApiGroupDeleteMemberRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupDeleteMember(param.groupname, param.type, param.memberName,  options).toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param param the request object
     */
    public appApiGroupGetGroupWithHttpInfo(param: GroupApiAppApiGroupGetGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupGetGroupWithHttpInfo(param.groupname,  options).toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param param the request object
     */
    public appApiGroupGetGroup(param: GroupApiAppApiGroupGetGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupGetGroup(param.groupname,  options).toPromise();
    }

    /**
     * List groups
     * List groups
     * @param param the request object
     */
    public appApiGroupListGroupsWithHttpInfo(param: GroupApiAppApiGroupListGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<GroupSummary>>> {
        return this.api.appApiGroupListGroupsWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * List groups
     * List groups
     * @param param the request object
     */
    public appApiGroupListGroups(param: GroupApiAppApiGroupListGroupsRequest = {}, options?: Configuration): Promise<Array<GroupSummary>> {
        return this.api.appApiGroupListGroups(param.query,  options).toPromise();
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param param the request object
     */
    public appApiGroupNameHistoryWithHttpInfo(param: GroupApiAppApiGroupNameHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<GroupHistorical>>> {
        return this.api.appApiGroupNameHistoryWithHttpInfo(param.groupname, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param param the request object
     */
    public appApiGroupNameHistory(param: GroupApiAppApiGroupNameHistoryRequest, options?: Configuration): Promise<Array<GroupHistorical>> {
        return this.api.appApiGroupNameHistory(param.groupname, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param param the request object
     */
    public appApiGroupUpdateGroupWithHttpInfo(param: GroupApiAppApiGroupUpdateGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupUpdateGroupWithHttpInfo(param.groupname, param.group,  options).toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param param the request object
     */
    public appApiGroupUpdateGroup(param: GroupApiAppApiGroupUpdateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupUpdateGroup(param.groupname, param.group,  options).toPromise();
    }

}

import { ObservablePermissionsApi } from "./ObservableAPI";
import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";

export interface PermissionsApiAppApiPermissionGetRequest {
    /**
     * space id
     * @type string
     * @memberof PermissionsApiappApiPermissionGet
     */
    spaceId?: string
    /**
     * collection id
     * @type string
     * @memberof PermissionsApiappApiPermissionGet
     */
    collId?: string
    /**
     * time series id
     * @type string
     * @memberof PermissionsApiappApiPermissionGet
     */
    tsid?: string
}

export interface PermissionsApiAppApiPermissionRemovePermissionRequest {
    /**
     * object
     * @type ObjectType
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    objType: ObjectType
    /**
     * subobject mark
     * @type boolean
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    subobject: boolean
    /**
     * action can be Verb or Role
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    action: string
    /**
     * permission effect
     * @type &#39;allow&#39; | &#39;deny&#39;
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    effect: 'allow' | 'deny'
    /**
     * user id
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    uid?: string
    /**
     * group id
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    gid?: string
    /**
     * space id
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    spaceId?: string
    /**
     * collection id
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    collId?: string
    /**
     * time series id
     * @type string
     * @memberof PermissionsApiappApiPermissionRemovePermission
     */
    tsid?: string
}

export interface PermissionsApiAppApiPermissionSetPermissionRequest {
    /**
     * Policy definition
     * @type PolicyUpdate
     * @memberof PermissionsApiappApiPermissionSetPermission
     */
    policyUpdate: PolicyUpdate
}

export class ObjectPermissionsApi {
    private api: ObservablePermissionsApi

    public constructor(configuration: Configuration, requestFactory?: PermissionsApiRequestFactory, responseProcessor?: PermissionsApiResponseProcessor) {
        this.api = new ObservablePermissionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param param the request object
     */
    public appApiPermissionGetWithHttpInfo(param: PermissionsApiAppApiPermissionGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Policy>>> {
        return this.api.appApiPermissionGetWithHttpInfo(param.spaceId, param.collId, param.tsid,  options).toPromise();
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param param the request object
     */
    public appApiPermissionGet(param: PermissionsApiAppApiPermissionGetRequest = {}, options?: Configuration): Promise<Array<Policy>> {
        return this.api.appApiPermissionGet(param.spaceId, param.collId, param.tsid,  options).toPromise();
    }

    /**
     * delete permission
     * delete permission
     * @param param the request object
     */
    public appApiPermissionRemovePermissionWithHttpInfo(param: PermissionsApiAppApiPermissionRemovePermissionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiPermissionRemovePermissionWithHttpInfo(param.objType, param.subobject, param.action, param.effect, param.uid, param.gid, param.spaceId, param.collId, param.tsid,  options).toPromise();
    }

    /**
     * delete permission
     * delete permission
     * @param param the request object
     */
    public appApiPermissionRemovePermission(param: PermissionsApiAppApiPermissionRemovePermissionRequest, options?: Configuration): Promise<void> {
        return this.api.appApiPermissionRemovePermission(param.objType, param.subobject, param.action, param.effect, param.uid, param.gid, param.spaceId, param.collId, param.tsid,  options).toPromise();
    }

    /**
     * Set permissions
     * Set permissions
     * @param param the request object
     */
    public appApiPermissionSetPermissionWithHttpInfo(param: PermissionsApiAppApiPermissionSetPermissionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiPermissionSetPermissionWithHttpInfo(param.policyUpdate,  options).toPromise();
    }

    /**
     * Set permissions
     * Set permissions
     * @param param the request object
     */
    public appApiPermissionSetPermission(param: PermissionsApiAppApiPermissionSetPermissionRequest, options?: Configuration): Promise<void> {
        return this.api.appApiPermissionSetPermission(param.policyUpdate,  options).toPromise();
    }

}

import { ObservableRawAnnotationsApi } from "./ObservableAPI";
import { RawAnnotationsApiRequestFactory, RawAnnotationsApiResponseProcessor} from "../apis/RawAnnotationsApi";

export interface RawAnnotationsApiAppApiAnnotationRawAddTargetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    aid: string
    /**
     * time series id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    tsid?: string
    /**
     * time series index
     * @type number
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    index?: number
    /**
     * frequency
     * @type Frequency
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    freq?: Frequency
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawAnnotationsApiappApiAnnotationRawAddTarget
     */
    realStart?: Date
}

export interface RawAnnotationsApiAppApiAnnotationRawCreateRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawCreate
     */
    collId: string
    /**
     * Annotation
     * @type Annotation
     * @memberof RawAnnotationsApiappApiAnnotationRawCreate
     */
    annotation: Annotation
}

export interface RawAnnotationsApiAppApiAnnotationRawDeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawDelete
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawDelete
     */
    aid: string
}

export interface RawAnnotationsApiAppApiAnnotationRawGetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawGet
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawGet
     */
    aid: string
}

export interface RawAnnotationsApiAppApiAnnotationRawGetListRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawGetList
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawGetList
     */
    tsid?: string
}

export interface RawAnnotationsApiAppApiAnnotationRawHistoryRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawHistory
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawHistory
     */
    aid: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawAnnotationsApiappApiAnnotationRawHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawAnnotationsApiappApiAnnotationRawHistory
     */
    realEnd?: Date
}

export interface RawAnnotationsApiAppApiAnnotationRawRemoveTargetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    aid: string
    /**
     * time series id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    tsid?: string
    /**
     * time series index
     * @type number
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    index?: number
    /**
     * frequency
     * @type Frequency
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    freq?: Frequency
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawAnnotationsApiappApiAnnotationRawRemoveTarget
     */
    realStart?: Date
}

export interface RawAnnotationsApiAppApiAnnotationRawUpdateRequest {
    /**
     * collection id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawUpdate
     */
    collId: string
    /**
     * annotation id
     * @type string
     * @memberof RawAnnotationsApiappApiAnnotationRawUpdate
     */
    aid: string
    /**
     * Annotation
     * @type AnnotationUpdate
     * @memberof RawAnnotationsApiappApiAnnotationRawUpdate
     */
    annotationUpdate: AnnotationUpdate
}

export class ObjectRawAnnotationsApi {
    private api: ObservableRawAnnotationsApi

    public constructor(configuration: Configuration, requestFactory?: RawAnnotationsApiRequestFactory, responseProcessor?: RawAnnotationsApiResponseProcessor) {
        this.api = new ObservableRawAnnotationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add observation target
     * Add a target
     * @param param the request object
     */
    public appApiAnnotationRawAddTargetWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawAddTargetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationRawAddTargetWithHttpInfo(param.collId, param.aid, param.tsid, param.index, param.freq, param.realStart,  options).toPromise();
    }

    /**
     * Add observation target
     * Add a target
     * @param param the request object
     */
    public appApiAnnotationRawAddTarget(param: RawAnnotationsApiAppApiAnnotationRawAddTargetRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationRawAddTarget(param.collId, param.aid, param.tsid, param.index, param.freq, param.realStart,  options).toPromise();
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param param the request object
     */
    public appApiAnnotationRawCreateWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawCreateRequest, options?: Configuration): Promise<HttpInfo<Annotation>> {
        return this.api.appApiAnnotationRawCreateWithHttpInfo(param.collId, param.annotation,  options).toPromise();
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param param the request object
     */
    public appApiAnnotationRawCreate(param: RawAnnotationsApiAppApiAnnotationRawCreateRequest, options?: Configuration): Promise<Annotation> {
        return this.api.appApiAnnotationRawCreate(param.collId, param.annotation,  options).toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param param the request object
     */
    public appApiAnnotationRawDeleteWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationRawDeleteWithHttpInfo(param.collId, param.aid,  options).toPromise();
    }

    /**
     * 
     * Delete annotation
     * @param param the request object
     */
    public appApiAnnotationRawDelete(param: RawAnnotationsApiAppApiAnnotationRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationRawDelete(param.collId, param.aid,  options).toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param param the request object
     */
    public appApiAnnotationRawGetWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawGetRequest, options?: Configuration): Promise<HttpInfo<Annotation>> {
        return this.api.appApiAnnotationRawGetWithHttpInfo(param.collId, param.aid,  options).toPromise();
    }

    /**
     * 
     * Get an annotation
     * @param param the request object
     */
    public appApiAnnotationRawGet(param: RawAnnotationsApiAppApiAnnotationRawGetRequest, options?: Configuration): Promise<Annotation> {
        return this.api.appApiAnnotationRawGet(param.collId, param.aid,  options).toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param param the request object
     */
    public appApiAnnotationRawGetListWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawGetListRequest, options?: Configuration): Promise<HttpInfo<Array<AnnotationSummary>>> {
        return this.api.appApiAnnotationRawGetListWithHttpInfo(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * List annotations
     * List annotations
     * @param param the request object
     */
    public appApiAnnotationRawGetList(param: RawAnnotationsApiAppApiAnnotationRawGetListRequest, options?: Configuration): Promise<Array<AnnotationSummary>> {
        return this.api.appApiAnnotationRawGetList(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param param the request object
     */
    public appApiAnnotationRawHistoryWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<Annotation>>> {
        return this.api.appApiAnnotationRawHistoryWithHttpInfo(param.collId, param.aid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param param the request object
     */
    public appApiAnnotationRawHistory(param: RawAnnotationsApiAppApiAnnotationRawHistoryRequest, options?: Configuration): Promise<Array<Annotation>> {
        return this.api.appApiAnnotationRawHistory(param.collId, param.aid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * delete observation targets
     * delete a target
     * @param param the request object
     */
    public appApiAnnotationRawRemoveTargetWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawRemoveTargetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationRawRemoveTargetWithHttpInfo(param.collId, param.aid, param.tsid, param.index, param.freq, param.realStart,  options).toPromise();
    }

    /**
     * delete observation targets
     * delete a target
     * @param param the request object
     */
    public appApiAnnotationRawRemoveTarget(param: RawAnnotationsApiAppApiAnnotationRawRemoveTargetRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationRawRemoveTarget(param.collId, param.aid, param.tsid, param.index, param.freq, param.realStart,  options).toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param param the request object
     */
    public appApiAnnotationRawUpdateWithHttpInfo(param: RawAnnotationsApiAppApiAnnotationRawUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiAnnotationRawUpdateWithHttpInfo(param.collId, param.aid, param.annotationUpdate,  options).toPromise();
    }

    /**
     * 
     * Update an annotation
     * @param param the request object
     */
    public appApiAnnotationRawUpdate(param: RawAnnotationsApiAppApiAnnotationRawUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.appApiAnnotationRawUpdate(param.collId, param.aid, param.annotationUpdate,  options).toPromise();
    }

}

import { ObservableRawApiKeyApi } from "./ObservableAPI";
import { RawApiKeyApiRequestFactory, RawApiKeyApiResponseProcessor} from "../apis/RawApiKeyApi";

export interface RawApiKeyApiAppApiApiKeyRawCreateRequest {
    /**
     * user id
     * @type string
     * @memberof RawApiKeyApiappApiApiKeyRawCreate
     */
    uid: string
    /**
     * friendly name to display
     * @type string
     * @memberof RawApiKeyApiappApiApiKeyRawCreate
     */
    name: string
    /**
     * api key scopes
     * @type Array&lt;string&gt;
     * @memberof RawApiKeyApiappApiApiKeyRawCreate
     */
    scopes?: Array<string>
    /**
     * number of days to expiry
     * @type number
     * @memberof RawApiKeyApiappApiApiKeyRawCreate
     */
    expiresIn?: number
}

export interface RawApiKeyApiAppApiApiKeyRawDeleteRequest {
    /**
     * user id
     * @type string
     * @memberof RawApiKeyApiappApiApiKeyRawDelete
     */
    uid: string
    /**
     * api key name
     * @type string
     * @memberof RawApiKeyApiappApiApiKeyRawDelete
     */
    name: string
}

export interface RawApiKeyApiAppApiApiKeyRawGetListRequest {
    /**
     * user id
     * @type string
     * @memberof RawApiKeyApiappApiApiKeyRawGetList
     */
    uid: string
}

export class ObjectRawApiKeyApi {
    private api: ObservableRawApiKeyApi

    public constructor(configuration: Configuration, requestFactory?: RawApiKeyApiRequestFactory, responseProcessor?: RawApiKeyApiResponseProcessor) {
        this.api = new ObservableRawApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create API Key
     * Create API Key
     * @param param the request object
     */
    public appApiApiKeyRawCreateWithHttpInfo(param: RawApiKeyApiAppApiApiKeyRawCreateRequest, options?: Configuration): Promise<HttpInfo<APIKey>> {
        return this.api.appApiApiKeyRawCreateWithHttpInfo(param.uid, param.name, param.scopes, param.expiresIn,  options).toPromise();
    }

    /**
     * Create API Key
     * Create API Key
     * @param param the request object
     */
    public appApiApiKeyRawCreate(param: RawApiKeyApiAppApiApiKeyRawCreateRequest, options?: Configuration): Promise<APIKey> {
        return this.api.appApiApiKeyRawCreate(param.uid, param.name, param.scopes, param.expiresIn,  options).toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param param the request object
     */
    public appApiApiKeyRawDeleteWithHttpInfo(param: RawApiKeyApiAppApiApiKeyRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiApiKeyRawDeleteWithHttpInfo(param.uid, param.name,  options).toPromise();
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param param the request object
     */
    public appApiApiKeyRawDelete(param: RawApiKeyApiAppApiApiKeyRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiApiKeyRawDelete(param.uid, param.name,  options).toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param param the request object
     */
    public appApiApiKeyRawGetListWithHttpInfo(param: RawApiKeyApiAppApiApiKeyRawGetListRequest, options?: Configuration): Promise<HttpInfo<Array<APIKey>>> {
        return this.api.appApiApiKeyRawGetListWithHttpInfo(param.uid,  options).toPromise();
    }

    /**
     * List API Keys
     * List API Keys
     * @param param the request object
     */
    public appApiApiKeyRawGetList(param: RawApiKeyApiAppApiApiKeyRawGetListRequest, options?: Configuration): Promise<Array<APIKey>> {
        return this.api.appApiApiKeyRawGetList(param.uid,  options).toPromise();
    }

}

import { ObservableRawCollectionApi } from "./ObservableAPI";
import { RawCollectionApiRequestFactory, RawCollectionApiResponseProcessor} from "../apis/RawCollectionApi";

export interface RawCollectionApiAppApiCollectionObjectHistoryRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionObjectHistory
     */
    collId: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawCollectionApiappApiCollectionObjectHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawCollectionApiappApiCollectionObjectHistory
     */
    realEnd?: Date
}

export interface RawCollectionApiAppApiCollectionRawAddPermissionRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawAddPermission
     */
    collId: string
    /**
     * Collection member details
     * @type CollectionPermissionPost
     * @memberof RawCollectionApiappApiCollectionRawAddPermission
     */
    collectionPermissionPost?: CollectionPermissionPost
}

export interface RawCollectionApiAppApiCollectionRawDeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawDelete
     */
    collId: string
}

export interface RawCollectionApiAppApiCollectionRawDeletePermissionRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawDeletePermission
     */
    collId: string
    /**
     * | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @type &#39;u&#39; | &#39;g&#39;
     * @memberof RawCollectionApiappApiCollectionRawDeletePermission
     */
    type: 'u' | 'g'
    /**
     * id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawDeletePermission
     */
    id: string
}

export interface RawCollectionApiAppApiCollectionRawGetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawGet
     */
    collId: string
}

export interface RawCollectionApiAppApiCollectionRawGetListRequest {
    /**
     * space id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawGetList
     */
    spaceId: string
    /**
     * Search query
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawGetList
     */
    query?: string
}

export interface RawCollectionApiAppApiCollectionRawPostRequest {
    /**
     * space id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawPost
     */
    spaceId: string
    /**
     * Definition of collection
     * @type Collection
     * @memberof RawCollectionApiappApiCollectionRawPost
     */
    collection: Collection
}

export interface RawCollectionApiAppApiCollectionRawPutRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawPut
     */
    collId: string
    /**
     * ok
     * @type Collection
     * @memberof RawCollectionApiappApiCollectionRawPut
     */
    collection: Collection
}

export interface RawCollectionApiAppApiCollectionRawUndeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawUndelete
     */
    collId: string
    /**
     * new name for the time series
     * @type string
     * @memberof RawCollectionApiappApiCollectionRawUndelete
     */
    name?: string
}

export class ObjectRawCollectionApi {
    private api: ObservableRawCollectionApi

    public constructor(configuration: Configuration, requestFactory?: RawCollectionApiRequestFactory, responseProcessor?: RawCollectionApiResponseProcessor) {
        this.api = new ObservableRawCollectionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param param the request object
     */
    public appApiCollectionObjectHistoryWithHttpInfo(param: RawCollectionApiAppApiCollectionObjectHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<CollectionHistorical>>> {
        return this.api.appApiCollectionObjectHistoryWithHttpInfo(param.collId, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param param the request object
     */
    public appApiCollectionObjectHistory(param: RawCollectionApiAppApiCollectionObjectHistoryRequest, options?: Configuration): Promise<Array<CollectionHistorical>> {
        return this.api.appApiCollectionObjectHistory(param.collId, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param param the request object
     */
    public appApiCollectionRawAddPermissionWithHttpInfo(param: RawCollectionApiAppApiCollectionRawAddPermissionRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionRawAddPermissionWithHttpInfo(param.collId, param.collectionPermissionPost,  options).toPromise();
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param param the request object
     */
    public appApiCollectionRawAddPermission(param: RawCollectionApiAppApiCollectionRawAddPermissionRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionRawAddPermission(param.collId, param.collectionPermissionPost,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param param the request object
     */
    public appApiCollectionRawDeleteWithHttpInfo(param: RawCollectionApiAppApiCollectionRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiCollectionRawDeleteWithHttpInfo(param.collId,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param param the request object
     */
    public appApiCollectionRawDelete(param: RawCollectionApiAppApiCollectionRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiCollectionRawDelete(param.collId,  options).toPromise();
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param param the request object
     */
    public appApiCollectionRawDeletePermissionWithHttpInfo(param: RawCollectionApiAppApiCollectionRawDeletePermissionRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionRawDeletePermissionWithHttpInfo(param.collId, param.type, param.id,  options).toPromise();
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param param the request object
     */
    public appApiCollectionRawDeletePermission(param: RawCollectionApiAppApiCollectionRawDeletePermissionRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionRawDeletePermission(param.collId, param.type, param.id,  options).toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param param the request object
     */
    public appApiCollectionRawGetWithHttpInfo(param: RawCollectionApiAppApiCollectionRawGetRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionRawGetWithHttpInfo(param.collId,  options).toPromise();
    }

    /**
     * Get collection details
     * Get collection details
     * @param param the request object
     */
    public appApiCollectionRawGet(param: RawCollectionApiAppApiCollectionRawGetRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionRawGet(param.collId,  options).toPromise();
    }

    /**
     * 
     * list collections
     * @param param the request object
     */
    public appApiCollectionRawGetListWithHttpInfo(param: RawCollectionApiAppApiCollectionRawGetListRequest, options?: Configuration): Promise<HttpInfo<Array<CollectionSummary>>> {
        return this.api.appApiCollectionRawGetListWithHttpInfo(param.spaceId, param.query,  options).toPromise();
    }

    /**
     * 
     * list collections
     * @param param the request object
     */
    public appApiCollectionRawGetList(param: RawCollectionApiAppApiCollectionRawGetListRequest, options?: Configuration): Promise<Array<CollectionSummary>> {
        return this.api.appApiCollectionRawGetList(param.spaceId, param.query,  options).toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param param the request object
     */
    public appApiCollectionRawPostWithHttpInfo(param: RawCollectionApiAppApiCollectionRawPostRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionRawPostWithHttpInfo(param.spaceId, param.collection,  options).toPromise();
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param param the request object
     */
    public appApiCollectionRawPost(param: RawCollectionApiAppApiCollectionRawPostRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionRawPost(param.spaceId, param.collection,  options).toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param param the request object
     */
    public appApiCollectionRawPutWithHttpInfo(param: RawCollectionApiAppApiCollectionRawPutRequest, options?: Configuration): Promise<HttpInfo<Collection>> {
        return this.api.appApiCollectionRawPutWithHttpInfo(param.collId, param.collection,  options).toPromise();
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param param the request object
     */
    public appApiCollectionRawPut(param: RawCollectionApiAppApiCollectionRawPutRequest, options?: Configuration): Promise<Collection> {
        return this.api.appApiCollectionRawPut(param.collId, param.collection,  options).toPromise();
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param param the request object
     */
    public appApiCollectionRawUndeleteWithHttpInfo(param: RawCollectionApiAppApiCollectionRawUndeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiCollectionRawUndeleteWithHttpInfo(param.collId, param.name,  options).toPromise();
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param param the request object
     */
    public appApiCollectionRawUndelete(param: RawCollectionApiAppApiCollectionRawUndeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiCollectionRawUndelete(param.collId, param.name,  options).toPromise();
    }

}

import { ObservableRawGroupApi } from "./ObservableAPI";
import { RawGroupApiRequestFactory, RawGroupApiResponseProcessor} from "../apis/RawGroupApi";

export interface RawGroupApiAppApiGroupObjectHistoryRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupObjectHistory
     */
    gid: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawGroupApiappApiGroupObjectHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawGroupApiappApiGroupObjectHistory
     */
    realEnd?: Date
}

export interface RawGroupApiAppApiGroupRawAddMemberRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawAddMember
     */
    gid: string
    /**
     * group member details
     * @type GroupMemberPost
     * @memberof RawGroupApiappApiGroupRawAddMember
     */
    groupMemberPost?: GroupMemberPost
}

export interface RawGroupApiAppApiGroupRawCreateGroupRequest {
    /**
     * 
     * @type Group
     * @memberof RawGroupApiappApiGroupRawCreateGroup
     */
    group?: Group
}

export interface RawGroupApiAppApiGroupRawDeleteGroupRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawDeleteGroup
     */
    gid: string
}

export interface RawGroupApiAppApiGroupRawDeleteMemberRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawDeleteMember
     */
    gid: string
    /**
     * | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @type &#39;u&#39; | &#39;g&#39;
     * @memberof RawGroupApiappApiGroupRawDeleteMember
     */
    type: 'u' | 'g'
    /**
     * id
     * @type string
     * @memberof RawGroupApiappApiGroupRawDeleteMember
     */
    id: string
}

export interface RawGroupApiAppApiGroupRawGetGroupRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawGetGroup
     */
    gid: string
}

export interface RawGroupApiAppApiGroupRawListGroupsRequest {
    /**
     * Search query
     * @type string
     * @memberof RawGroupApiappApiGroupRawListGroups
     */
    query?: string
    /**
     * a member of group/space/collection/etc.
     * @type string
     * @memberof RawGroupApiappApiGroupRawListGroups
     */
    member?: string
    /**
     * ownOnly
     * @type boolean
     * @memberof RawGroupApiappApiGroupRawListGroups
     */
    ownOnly?: boolean
}

export interface RawGroupApiAppApiGroupRawUndeleteRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawUndelete
     */
    gid: string
    /**
     * new name for group
     * @type string
     * @memberof RawGroupApiappApiGroupRawUndelete
     */
    groupname?: string
}

export interface RawGroupApiAppApiGroupRawUpdateGroupRequest {
    /**
     * The group\&#39;s unique id.
     * @type string
     * @memberof RawGroupApiappApiGroupRawUpdateGroup
     */
    gid: string
    /**
     * an updated group
     * @type Group
     * @memberof RawGroupApiappApiGroupRawUpdateGroup
     */
    group?: Group
}

export class ObjectRawGroupApi {
    private api: ObservableRawGroupApi

    public constructor(configuration: Configuration, requestFactory?: RawGroupApiRequestFactory, responseProcessor?: RawGroupApiResponseProcessor) {
        this.api = new ObservableRawGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param param the request object
     */
    public appApiGroupObjectHistoryWithHttpInfo(param: RawGroupApiAppApiGroupObjectHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<GroupHistorical>>> {
        return this.api.appApiGroupObjectHistoryWithHttpInfo(param.gid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param param the request object
     */
    public appApiGroupObjectHistory(param: RawGroupApiAppApiGroupObjectHistoryRequest, options?: Configuration): Promise<Array<GroupHistorical>> {
        return this.api.appApiGroupObjectHistory(param.gid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param param the request object
     */
    public appApiGroupRawAddMemberWithHttpInfo(param: RawGroupApiAppApiGroupRawAddMemberRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupRawAddMemberWithHttpInfo(param.gid, param.groupMemberPost,  options).toPromise();
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param param the request object
     */
    public appApiGroupRawAddMember(param: RawGroupApiAppApiGroupRawAddMemberRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupRawAddMember(param.gid, param.groupMemberPost,  options).toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param param the request object
     */
    public appApiGroupRawCreateGroupWithHttpInfo(param: RawGroupApiAppApiGroupRawCreateGroupRequest = {}, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupRawCreateGroupWithHttpInfo(param.group,  options).toPromise();
    }

    /**
     * Create a new group
     * Create a new group
     * @param param the request object
     */
    public appApiGroupRawCreateGroup(param: RawGroupApiAppApiGroupRawCreateGroupRequest = {}, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupRawCreateGroup(param.group,  options).toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param param the request object
     */
    public appApiGroupRawDeleteGroupWithHttpInfo(param: RawGroupApiAppApiGroupRawDeleteGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiGroupRawDeleteGroupWithHttpInfo(param.gid,  options).toPromise();
    }

    /**
     * Delete a group
     * Delete a group
     * @param param the request object
     */
    public appApiGroupRawDeleteGroup(param: RawGroupApiAppApiGroupRawDeleteGroupRequest, options?: Configuration): Promise<void> {
        return this.api.appApiGroupRawDeleteGroup(param.gid,  options).toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param param the request object
     */
    public appApiGroupRawDeleteMemberWithHttpInfo(param: RawGroupApiAppApiGroupRawDeleteMemberRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupRawDeleteMemberWithHttpInfo(param.gid, param.type, param.id,  options).toPromise();
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param param the request object
     */
    public appApiGroupRawDeleteMember(param: RawGroupApiAppApiGroupRawDeleteMemberRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupRawDeleteMember(param.gid, param.type, param.id,  options).toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param param the request object
     */
    public appApiGroupRawGetGroupWithHttpInfo(param: RawGroupApiAppApiGroupRawGetGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupRawGetGroupWithHttpInfo(param.gid,  options).toPromise();
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param param the request object
     */
    public appApiGroupRawGetGroup(param: RawGroupApiAppApiGroupRawGetGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupRawGetGroup(param.gid,  options).toPromise();
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param param the request object
     */
    public appApiGroupRawListGroupsWithHttpInfo(param: RawGroupApiAppApiGroupRawListGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<GroupSummary>>> {
        return this.api.appApiGroupRawListGroupsWithHttpInfo(param.query, param.member, param.ownOnly,  options).toPromise();
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param param the request object
     */
    public appApiGroupRawListGroups(param: RawGroupApiAppApiGroupRawListGroupsRequest = {}, options?: Configuration): Promise<Array<GroupSummary>> {
        return this.api.appApiGroupRawListGroups(param.query, param.member, param.ownOnly,  options).toPromise();
    }

    /**
     * Undelete group
     * Undelete group
     * @param param the request object
     */
    public appApiGroupRawUndeleteWithHttpInfo(param: RawGroupApiAppApiGroupRawUndeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiGroupRawUndeleteWithHttpInfo(param.gid, param.groupname,  options).toPromise();
    }

    /**
     * Undelete group
     * Undelete group
     * @param param the request object
     */
    public appApiGroupRawUndelete(param: RawGroupApiAppApiGroupRawUndeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiGroupRawUndelete(param.gid, param.groupname,  options).toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param param the request object
     */
    public appApiGroupRawUpdateGroupWithHttpInfo(param: RawGroupApiAppApiGroupRawUpdateGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.appApiGroupRawUpdateGroupWithHttpInfo(param.gid, param.group,  options).toPromise();
    }

    /**
     * Update a group
     * Update a group
     * @param param the request object
     */
    public appApiGroupRawUpdateGroup(param: RawGroupApiAppApiGroupRawUpdateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.appApiGroupRawUpdateGroup(param.gid, param.group,  options).toPromise();
    }

}

import { ObservableRawSpaceApi } from "./ObservableAPI";
import { RawSpaceApiRequestFactory, RawSpaceApiResponseProcessor} from "../apis/RawSpaceApi";

export interface RawSpaceApiAppApiSpaceObjectHistoryRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceObjectHistory
     */
    spaceId: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawSpaceApiappApiSpaceObjectHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawSpaceApiappApiSpaceObjectHistory
     */
    realEnd?: Date
}

export interface RawSpaceApiAppApiSpaceRawAddMemberRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawAddMember
     */
    spaceId: string
    /**
     * space member details
     * @type SpaceMemberPost
     * @memberof RawSpaceApiappApiSpaceRawAddMember
     */
    spaceMemberPost?: SpaceMemberPost
}

export interface RawSpaceApiAppApiSpaceRawDeleteRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawDelete
     */
    spaceId: string
}

export interface RawSpaceApiAppApiSpaceRawDeleteMemberRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawDeleteMember
     */
    spaceId: string
    /**
     * | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @type &#39;u&#39; | &#39;g&#39;
     * @memberof RawSpaceApiappApiSpaceRawDeleteMember
     */
    type: 'u' | 'g'
    /**
     * id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawDeleteMember
     */
    id: string
}

export interface RawSpaceApiAppApiSpaceRawGetRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawGet
     */
    spaceId: string
}

export interface RawSpaceApiAppApiSpaceRawGetListRequest {
    /**
     * a member of group/space/collection/etc.
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawGetList
     */
    member?: string
    /**
     * ownOnly
     * @type boolean
     * @memberof RawSpaceApiappApiSpaceRawGetList
     */
    ownOnly?: boolean
    /**
     * visibility
     * @type Visibility
     * @memberof RawSpaceApiappApiSpaceRawGetList
     */
    visibility?: Visibility
    /**
     * Search query
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawGetList
     */
    query?: string
}

export interface RawSpaceApiAppApiSpaceRawPostRequest {
    /**
     * Space definition
     * @type Space
     * @memberof RawSpaceApiappApiSpaceRawPost
     */
    space: Space
}

export interface RawSpaceApiAppApiSpaceRawPutRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawPut
     */
    spaceId: string
    /**
     * Optional description in *Markdown*
     * @type Space
     * @memberof RawSpaceApiappApiSpaceRawPut
     */
    space: Space
}

export interface RawSpaceApiAppApiSpaceRawUndeleteRequest {
    /**
     * space id
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawUndelete
     */
    spaceId: string
    /**
     * new name for space
     * @type string
     * @memberof RawSpaceApiappApiSpaceRawUndelete
     */
    name?: string
}

export class ObjectRawSpaceApi {
    private api: ObservableRawSpaceApi

    public constructor(configuration: Configuration, requestFactory?: RawSpaceApiRequestFactory, responseProcessor?: RawSpaceApiResponseProcessor) {
        this.api = new ObservableRawSpaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param param the request object
     */
    public appApiSpaceObjectHistoryWithHttpInfo(param: RawSpaceApiAppApiSpaceObjectHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<SpaceHistorical>>> {
        return this.api.appApiSpaceObjectHistoryWithHttpInfo(param.spaceId, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param param the request object
     */
    public appApiSpaceObjectHistory(param: RawSpaceApiAppApiSpaceObjectHistoryRequest, options?: Configuration): Promise<Array<SpaceHistorical>> {
        return this.api.appApiSpaceObjectHistory(param.spaceId, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param param the request object
     */
    public appApiSpaceRawAddMemberWithHttpInfo(param: RawSpaceApiAppApiSpaceRawAddMemberRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceRawAddMemberWithHttpInfo(param.spaceId, param.spaceMemberPost,  options).toPromise();
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param param the request object
     */
    public appApiSpaceRawAddMember(param: RawSpaceApiAppApiSpaceRawAddMemberRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceRawAddMember(param.spaceId, param.spaceMemberPost,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param param the request object
     */
    public appApiSpaceRawDeleteWithHttpInfo(param: RawSpaceApiAppApiSpaceRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiSpaceRawDeleteWithHttpInfo(param.spaceId,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param param the request object
     */
    public appApiSpaceRawDelete(param: RawSpaceApiAppApiSpaceRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiSpaceRawDelete(param.spaceId,  options).toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param param the request object
     */
    public appApiSpaceRawDeleteMemberWithHttpInfo(param: RawSpaceApiAppApiSpaceRawDeleteMemberRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceRawDeleteMemberWithHttpInfo(param.spaceId, param.type, param.id,  options).toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param param the request object
     */
    public appApiSpaceRawDeleteMember(param: RawSpaceApiAppApiSpaceRawDeleteMemberRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceRawDeleteMember(param.spaceId, param.type, param.id,  options).toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param param the request object
     */
    public appApiSpaceRawGetWithHttpInfo(param: RawSpaceApiAppApiSpaceRawGetRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceRawGetWithHttpInfo(param.spaceId,  options).toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param param the request object
     */
    public appApiSpaceRawGet(param: RawSpaceApiAppApiSpaceRawGetRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceRawGet(param.spaceId,  options).toPromise();
    }

    /**
     * list spaces
     * list spaces
     * @param param the request object
     */
    public appApiSpaceRawGetListWithHttpInfo(param: RawSpaceApiAppApiSpaceRawGetListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Space>>> {
        return this.api.appApiSpaceRawGetListWithHttpInfo(param.member, param.ownOnly, param.visibility, param.query,  options).toPromise();
    }

    /**
     * list spaces
     * list spaces
     * @param param the request object
     */
    public appApiSpaceRawGetList(param: RawSpaceApiAppApiSpaceRawGetListRequest = {}, options?: Configuration): Promise<Array<Space>> {
        return this.api.appApiSpaceRawGetList(param.member, param.ownOnly, param.visibility, param.query,  options).toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param param the request object
     */
    public appApiSpaceRawPostWithHttpInfo(param: RawSpaceApiAppApiSpaceRawPostRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceRawPostWithHttpInfo(param.space,  options).toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param param the request object
     */
    public appApiSpaceRawPost(param: RawSpaceApiAppApiSpaceRawPostRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceRawPost(param.space,  options).toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param param the request object
     */
    public appApiSpaceRawPutWithHttpInfo(param: RawSpaceApiAppApiSpaceRawPutRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceRawPutWithHttpInfo(param.spaceId, param.space,  options).toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param param the request object
     */
    public appApiSpaceRawPut(param: RawSpaceApiAppApiSpaceRawPutRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceRawPut(param.spaceId, param.space,  options).toPromise();
    }

    /**
     * Undelete space
     * Undelete space
     * @param param the request object
     */
    public appApiSpaceRawUndeleteWithHttpInfo(param: RawSpaceApiAppApiSpaceRawUndeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiSpaceRawUndeleteWithHttpInfo(param.spaceId, param.name,  options).toPromise();
    }

    /**
     * Undelete space
     * Undelete space
     * @param param the request object
     */
    public appApiSpaceRawUndelete(param: RawSpaceApiAppApiSpaceRawUndeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiSpaceRawUndelete(param.spaceId, param.name,  options).toPromise();
    }

}

import { ObservableRawTimeSeriesApi } from "./ObservableAPI";
import { RawTimeSeriesApiRequestFactory, RawTimeSeriesApiResponseProcessor} from "../apis/RawTimeSeriesApi";

export interface RawTimeSeriesApiAppApiTimeseriesRawDeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawDelete
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawDelete
     */
    tsid: string
}

export interface RawTimeSeriesApiAppApiTimeseriesRawGetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawGet
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawGet
     */
    tsid: string
}

export interface RawTimeSeriesApiAppApiTimeseriesRawGetListRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawGetList
     */
    collId: string
    /**
     * array of time series id
     * @type Array&lt;string&gt;
     * @memberof RawTimeSeriesApiappApiTimeseriesRawGetList
     */
    tsids?: Array<string>
}

export interface RawTimeSeriesApiAppApiTimeseriesRawObjectHistoryRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawObjectHistory
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawObjectHistory
     */
    tsid: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawTimeSeriesApiappApiTimeseriesRawObjectHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawTimeSeriesApiappApiTimeseriesRawObjectHistory
     */
    realEnd?: Date
}

export interface RawTimeSeriesApiAppApiTimeseriesRawPermanentDeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPermanentDelete
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPermanentDelete
     */
    tsid: string
}

export interface RawTimeSeriesApiAppApiTimeseriesRawPostRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPost
     */
    collId: string
    /**
     * Time series parameters. dtype and freq are required
     * @type TimeSeries
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPost
     */
    timeSeries: TimeSeries
}

export interface RawTimeSeriesApiAppApiTimeseriesRawPutRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPut
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPut
     */
    tsid: string
    /**
     * Time series updated info
     * @type TimeSeriesUpdate
     * @memberof RawTimeSeriesApiappApiTimeseriesRawPut
     */
    timeSeriesUpdate: TimeSeriesUpdate
}

export interface RawTimeSeriesApiAppApiTimeseriesRawUndeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawUndelete
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawUndelete
     */
    tsid: string
    /**
     * new name for the time series
     * @type string
     * @memberof RawTimeSeriesApiappApiTimeseriesRawUndelete
     */
    name?: string
}

export class ObjectRawTimeSeriesApi {
    private api: ObservableRawTimeSeriesApi

    public constructor(configuration: Configuration, requestFactory?: RawTimeSeriesApiRequestFactory, responseProcessor?: RawTimeSeriesApiResponseProcessor) {
        this.api = new ObservableRawTimeSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete time series
     * Delete a time series
     * @param param the request object
     */
    public appApiTimeseriesRawDeleteWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesRawDeleteWithHttpInfo(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * delete time series
     * Delete a time series
     * @param param the request object
     */
    public appApiTimeseriesRawDelete(param: RawTimeSeriesApiAppApiTimeseriesRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesRawDelete(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param param the request object
     */
    public appApiTimeseriesRawGetWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawGetRequest, options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        return this.api.appApiTimeseriesRawGetWithHttpInfo(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param param the request object
     */
    public appApiTimeseriesRawGet(param: RawTimeSeriesApiAppApiTimeseriesRawGetRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.appApiTimeseriesRawGet(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param param the request object
     */
    public appApiTimeseriesRawGetListWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawGetListRequest, options?: Configuration): Promise<HttpInfo<Array<TimeSeriesSummary>>> {
        return this.api.appApiTimeseriesRawGetListWithHttpInfo(param.collId, param.tsids,  options).toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param param the request object
     */
    public appApiTimeseriesRawGetList(param: RawTimeSeriesApiAppApiTimeseriesRawGetListRequest, options?: Configuration): Promise<Array<TimeSeriesSummary>> {
        return this.api.appApiTimeseriesRawGetList(param.collId, param.tsids,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawObjectHistoryWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawObjectHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.appApiTimeseriesRawObjectHistoryWithHttpInfo(param.collId, param.tsid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawObjectHistory(param: RawTimeSeriesApiAppApiTimeseriesRawObjectHistoryRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.appApiTimeseriesRawObjectHistory(param.collId, param.tsid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawPermanentDeleteWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawPermanentDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesRawPermanentDeleteWithHttpInfo(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawPermanentDelete(param: RawTimeSeriesApiAppApiTimeseriesRawPermanentDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesRawPermanentDelete(param.collId, param.tsid,  options).toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param param the request object
     */
    public appApiTimeseriesRawPostWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawPostRequest, options?: Configuration): Promise<HttpInfo<TimeSeriesCore>> {
        return this.api.appApiTimeseriesRawPostWithHttpInfo(param.collId, param.timeSeries,  options).toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param param the request object
     */
    public appApiTimeseriesRawPost(param: RawTimeSeriesApiAppApiTimeseriesRawPostRequest, options?: Configuration): Promise<TimeSeriesCore> {
        return this.api.appApiTimeseriesRawPost(param.collId, param.timeSeries,  options).toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param param the request object
     */
    public appApiTimeseriesRawPutWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawPutRequest, options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        return this.api.appApiTimeseriesRawPutWithHttpInfo(param.collId, param.tsid, param.timeSeriesUpdate,  options).toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param param the request object
     */
    public appApiTimeseriesRawPut(param: RawTimeSeriesApiAppApiTimeseriesRawPutRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.appApiTimeseriesRawPut(param.collId, param.tsid, param.timeSeriesUpdate,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawUndeleteWithHttpInfo(param: RawTimeSeriesApiAppApiTimeseriesRawUndeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesRawUndeleteWithHttpInfo(param.collId, param.tsid, param.name,  options).toPromise();
    }

    /**
     * 
     * retrieve historical values
     * @param param the request object
     */
    public appApiTimeseriesRawUndelete(param: RawTimeSeriesApiAppApiTimeseriesRawUndeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesRawUndelete(param.collId, param.tsid, param.name,  options).toPromise();
    }

}

import { ObservableRawTimeSeriesDataApi } from "./ObservableAPI";
import { RawTimeSeriesDataApiRequestFactory, RawTimeSeriesDataApiResponseProcessor} from "../apis/RawTimeSeriesDataApi";

export interface RawTimeSeriesDataApiAppApiRawTimeseriesDataDeleteRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataDelete
     */
    collId: string
    /**
     * time series index
     * @type Array&lt;number&gt;
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataDelete
     */
    index: Array<number>
    /**
     * 
     * @type IndexFormat
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataDelete
     */
    indexFormat: IndexFormat
    /**
     * time series id
     * @type string
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataDelete
     */
    tsid?: string
}

export interface RawTimeSeriesDataApiAppApiRawTimeseriesDataGetRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataGet
     */
    collId: string
    /**
     * array of tsid\&#39;s in the collection, collId
     * @type Array&lt;string&gt;
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataGet
     */
    tsids: Array<string>
    /**
     * real time to retrieve the historical data
     * @type Date
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataGet
     */
    realtime?: Date
}

export interface RawTimeSeriesDataApiAppApiRawTimeseriesDataPutRequest {
    /**
     * collection id
     * @type string
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataPut
     */
    collId: string
    /**
     * data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @type &#39;overwrite&#39; | &#39;update&#39; | &#39;append&#39;
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataPut
     */
    method: 'overwrite' | 'update' | 'append'
    /**
     * time series data
     * @type RawDataPutRequest
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataPut
     */
    rawDataPutRequest: RawDataPutRequest
    /**
     * real time at which data was written. This only works if there is no observations written after this real time
     * @type Date
     * @memberof RawTimeSeriesDataApiappApiRawTimeseriesDataPut
     */
    realtime?: Date
}

export class ObjectRawTimeSeriesDataApi {
    private api: ObservableRawTimeSeriesDataApi

    public constructor(configuration: Configuration, requestFactory?: RawTimeSeriesDataApiRequestFactory, responseProcessor?: RawTimeSeriesDataApiResponseProcessor) {
        this.api = new ObservableRawTimeSeriesDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataDeleteWithHttpInfo(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataDeleteRequest, options?: Configuration): Promise<HttpInfo<RawDataDeleteResponse>> {
        return this.api.appApiRawTimeseriesDataDeleteWithHttpInfo(param.collId, param.index, param.indexFormat, param.tsid,  options).toPromise();
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataDelete(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataDeleteRequest, options?: Configuration): Promise<RawDataDeleteResponse> {
        return this.api.appApiRawTimeseriesDataDelete(param.collId, param.index, param.indexFormat, param.tsid,  options).toPromise();
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataGetWithHttpInfo(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataGetRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: RawSingleTimeSeriesData; }>> {
        return this.api.appApiRawTimeseriesDataGetWithHttpInfo(param.collId, param.tsids, param.realtime,  options).toPromise();
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataGet(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataGetRequest, options?: Configuration): Promise<{ [key: string]: RawSingleTimeSeriesData; }> {
        return this.api.appApiRawTimeseriesDataGet(param.collId, param.tsids, param.realtime,  options).toPromise();
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataPutWithHttpInfo(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataPutRequest, options?: Configuration): Promise<HttpInfo<RawDataPutResponse>> {
        return this.api.appApiRawTimeseriesDataPutWithHttpInfo(param.collId, param.method, param.rawDataPutRequest, param.realtime,  options).toPromise();
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param param the request object
     */
    public appApiRawTimeseriesDataPut(param: RawTimeSeriesDataApiAppApiRawTimeseriesDataPutRequest, options?: Configuration): Promise<RawDataPutResponse> {
        return this.api.appApiRawTimeseriesDataPut(param.collId, param.method, param.rawDataPutRequest, param.realtime,  options).toPromise();
    }

}

import { ObservableRawUploadApi } from "./ObservableAPI";
import { RawUploadApiRequestFactory, RawUploadApiResponseProcessor} from "../apis/RawUploadApi";

export interface RawUploadApiAppApiUploadCommitRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadCommit
     */
    uploadId: string
}

export interface RawUploadApiAppApiUploadConfirmUploadRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadConfirmUpload
     */
    uploadId: string
}

export interface RawUploadApiAppApiUploadCreateRequest {
    /**
     * collection id
     * @type string
     * @memberof RawUploadApiappApiUploadCreate
     */
    collId: string
    /**
     * 
     * @type string
     * @memberof RawUploadApiappApiUploadCreate
     */
    filename?: string
    /**
     * 
     * @type string
     * @memberof RawUploadApiappApiUploadCreate
     */
    fileType?: string
}

export interface RawUploadApiAppApiUploadGetRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadGet
     */
    uploadId: string
}

export interface RawUploadApiAppApiUploadGetListRequest {
    /**
     * collection id
     * @type string
     * @memberof RawUploadApiappApiUploadGetList
     */
    collId?: string
    /**
     * the first number of item to skip
     * @type number
     * @memberof RawUploadApiappApiUploadGetList
     */
    offset?: number
    /**
     * the number of items to return
     * @type number
     * @memberof RawUploadApiappApiUploadGetList
     */
    limit?: number
}

export interface RawUploadApiAppApiUploadGetProcessedRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadGetProcessed
     */
    uploadId: string
}

export interface RawUploadApiAppApiUploadGetStagingRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadGetStaging
     */
    uploadId: string
}

export interface RawUploadApiAppApiUploadPostProcessedRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadPostProcessed
     */
    uploadId: string
    /**
     * Time series updated info
     * @type { [key: string]: any; }
     * @memberof RawUploadApiappApiUploadPostProcessed
     */
    requestBody: { [key: string]: any; }
}

export interface RawUploadApiAppApiUploadPutStagingRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadPutStaging
     */
    uploadId: string
    /**
     * Time series updated info
     * @type { [key: string]: any; }
     * @memberof RawUploadApiappApiUploadPutStaging
     */
    requestBody: { [key: string]: any; }
}

export interface RawUploadApiAppApiUploadRegenerateUrlRequest {
    /**
     * upload_id
     * @type string
     * @memberof RawUploadApiappApiUploadRegenerateUrl
     */
    uploadId: string
    /**
     * 
     * @type string
     * @memberof RawUploadApiappApiUploadRegenerateUrl
     */
    filename?: string
    /**
     * 
     * @type string
     * @memberof RawUploadApiappApiUploadRegenerateUrl
     */
    fileType?: string
}

export class ObjectRawUploadApi {
    private api: ObservableRawUploadApi

    public constructor(configuration: Configuration, requestFactory?: RawUploadApiRequestFactory, responseProcessor?: RawUploadApiResponseProcessor) {
        this.api = new ObservableRawUploadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * commit staging
     * commit staging
     * @param param the request object
     */
    public appApiUploadCommitWithHttpInfo(param: RawUploadApiAppApiUploadCommitRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUploadCommitWithHttpInfo(param.uploadId,  options).toPromise();
    }

    /**
     * commit staging
     * commit staging
     * @param param the request object
     */
    public appApiUploadCommit(param: RawUploadApiAppApiUploadCommitRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUploadCommit(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param param the request object
     */
    public appApiUploadConfirmUploadWithHttpInfo(param: RawUploadApiAppApiUploadConfirmUploadRequest, options?: Configuration): Promise<HttpInfo<Upload>> {
        return this.api.appApiUploadConfirmUploadWithHttpInfo(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param param the request object
     */
    public appApiUploadConfirmUpload(param: RawUploadApiAppApiUploadConfirmUploadRequest, options?: Configuration): Promise<Upload> {
        return this.api.appApiUploadConfirmUpload(param.uploadId,  options).toPromise();
    }

    /**
     * create a new upload
     * create a new upload
     * @param param the request object
     */
    public appApiUploadCreateWithHttpInfo(param: RawUploadApiAppApiUploadCreateRequest, options?: Configuration): Promise<HttpInfo<Upload>> {
        return this.api.appApiUploadCreateWithHttpInfo(param.collId, param.filename, param.fileType,  options).toPromise();
    }

    /**
     * create a new upload
     * create a new upload
     * @param param the request object
     */
    public appApiUploadCreate(param: RawUploadApiAppApiUploadCreateRequest, options?: Configuration): Promise<Upload> {
        return this.api.appApiUploadCreate(param.collId, param.filename, param.fileType,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param param the request object
     */
    public appApiUploadGetWithHttpInfo(param: RawUploadApiAppApiUploadGetRequest, options?: Configuration): Promise<HttpInfo<Upload>> {
        return this.api.appApiUploadGetWithHttpInfo(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param param the request object
     */
    public appApiUploadGet(param: RawUploadApiAppApiUploadGetRequest, options?: Configuration): Promise<Upload> {
        return this.api.appApiUploadGet(param.uploadId,  options).toPromise();
    }

    /**
     * list upload objects
     * list upload objects
     * @param param the request object
     */
    public appApiUploadGetListWithHttpInfo(param: RawUploadApiAppApiUploadGetListRequest = {}, options?: Configuration): Promise<HttpInfo<Upload>> {
        return this.api.appApiUploadGetListWithHttpInfo(param.collId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * list upload objects
     * list upload objects
     * @param param the request object
     */
    public appApiUploadGetList(param: RawUploadApiAppApiUploadGetListRequest = {}, options?: Configuration): Promise<Upload> {
        return this.api.appApiUploadGetList(param.collId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param param the request object
     */
    public appApiUploadGetProcessedWithHttpInfo(param: RawUploadApiAppApiUploadGetProcessedRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.appApiUploadGetProcessedWithHttpInfo(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param param the request object
     */
    public appApiUploadGetProcessed(param: RawUploadApiAppApiUploadGetProcessedRequest, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.appApiUploadGetProcessed(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param param the request object
     */
    public appApiUploadGetStagingWithHttpInfo(param: RawUploadApiAppApiUploadGetStagingRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.appApiUploadGetStagingWithHttpInfo(param.uploadId,  options).toPromise();
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param param the request object
     */
    public appApiUploadGetStaging(param: RawUploadApiAppApiUploadGetStagingRequest, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.appApiUploadGetStaging(param.uploadId,  options).toPromise();
    }

    /**
     * save processing results
     * save processing results
     * @param param the request object
     */
    public appApiUploadPostProcessedWithHttpInfo(param: RawUploadApiAppApiUploadPostProcessedRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUploadPostProcessedWithHttpInfo(param.uploadId, param.requestBody,  options).toPromise();
    }

    /**
     * save processing results
     * save processing results
     * @param param the request object
     */
    public appApiUploadPostProcessed(param: RawUploadApiAppApiUploadPostProcessedRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUploadPostProcessed(param.uploadId, param.requestBody,  options).toPromise();
    }

    /**
     * save staging results
     * save staging results
     * @param param the request object
     */
    public appApiUploadPutStagingWithHttpInfo(param: RawUploadApiAppApiUploadPutStagingRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUploadPutStagingWithHttpInfo(param.uploadId, param.requestBody,  options).toPromise();
    }

    /**
     * save staging results
     * save staging results
     * @param param the request object
     */
    public appApiUploadPutStaging(param: RawUploadApiAppApiUploadPutStagingRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUploadPutStaging(param.uploadId, param.requestBody,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param param the request object
     */
    public appApiUploadRegenerateUrlWithHttpInfo(param: RawUploadApiAppApiUploadRegenerateUrlRequest, options?: Configuration): Promise<HttpInfo<Upload>> {
        return this.api.appApiUploadRegenerateUrlWithHttpInfo(param.uploadId, param.filename, param.fileType,  options).toPromise();
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param param the request object
     */
    public appApiUploadRegenerateUrl(param: RawUploadApiAppApiUploadRegenerateUrlRequest, options?: Configuration): Promise<Upload> {
        return this.api.appApiUploadRegenerateUrl(param.uploadId, param.filename, param.fileType,  options).toPromise();
    }

}

import { ObservableRawUserApi } from "./ObservableAPI";
import { RawUserApiRequestFactory, RawUserApiResponseProcessor} from "../apis/RawUserApi";

export interface RawUserApiAppApiUserRawChangePasswordRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawChangePassword
     */
    uid: string
    /**
     * new password
     * @type NewPassword
     * @memberof RawUserApiappApiUserRawChangePassword
     */
    newPassword: NewPassword
}

export interface RawUserApiAppApiUserRawCreateRequest {
    /**
     * 
     * @type UserPost
     * @memberof RawUserApiappApiUserRawCreate
     */
    userPost?: UserPost
}

export interface RawUserApiAppApiUserRawDeleteRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawDelete
     */
    uid: string
}

export interface RawUserApiAppApiUserRawGetRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawGet
     */
    uid: string
}

export interface RawUserApiAppApiUserRawGetPermissionsRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawGetPermissions
     */
    uid: string
}

export interface RawUserApiAppApiUserRawListUsersRequest {
    /**
     * Search query
     * @type string
     * @memberof RawUserApiappApiUserRawListUsers
     */
    query?: string
    /**
     * the first number of item to skip
     * @type number
     * @memberof RawUserApiappApiUserRawListUsers
     */
    offset?: number
    /**
     * the number of items to return
     * @type number
     * @memberof RawUserApiappApiUserRawListUsers
     */
    limit?: number
}

export interface RawUserApiAppApiUserRawUpdateRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawUpdate
     */
    uid: string
    /**
     * Updated user object
     * @type UserUpdate
     * @memberof RawUserApiappApiUserRawUpdate
     */
    userUpdate?: UserUpdate
}

export interface RawUserApiAppApiUserRawUpdatePermissionsRequest {
    /**
     * user id
     * @type string
     * @memberof RawUserApiappApiUserRawUpdatePermissions
     */
    uid: string
    /**
     * has user admin permissions
     * @type boolean
     * @memberof RawUserApiappApiUserRawUpdatePermissions
     */
    isAdmin?: boolean
    /**
     * can user create group
     * @type boolean
     * @memberof RawUserApiappApiUserRawUpdatePermissions
     */
    canCreateGroup?: boolean
    /**
     * can user create space
     * @type boolean
     * @memberof RawUserApiappApiUserRawUpdatePermissions
     */
    canCreateSpace?: boolean
}

export class ObjectRawUserApi {
    private api: ObservableRawUserApi

    public constructor(configuration: Configuration, requestFactory?: RawUserApiRequestFactory, responseProcessor?: RawUserApiResponseProcessor) {
        this.api = new ObservableRawUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param param the request object
     */
    public appApiUserRawChangePasswordWithHttpInfo(param: RawUserApiAppApiUserRawChangePasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserRawChangePasswordWithHttpInfo(param.uid, param.newPassword,  options).toPromise();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param param the request object
     */
    public appApiUserRawChangePassword(param: RawUserApiAppApiUserRawChangePasswordRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUserRawChangePassword(param.uid, param.newPassword,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public appApiUserRawCreateWithHttpInfo(param: RawUserApiAppApiUserRawCreateRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserRawCreateWithHttpInfo(param.userPost,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public appApiUserRawCreate(param: RawUserApiAppApiUserRawCreateRequest = {}, options?: Configuration): Promise<User> {
        return this.api.appApiUserRawCreate(param.userPost,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public appApiUserRawDeleteWithHttpInfo(param: RawUserApiAppApiUserRawDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserRawDeleteWithHttpInfo(param.uid,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public appApiUserRawDelete(param: RawUserApiAppApiUserRawDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUserRawDelete(param.uid,  options).toPromise();
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param param the request object
     */
    public appApiUserRawGetWithHttpInfo(param: RawUserApiAppApiUserRawGetRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserRawGetWithHttpInfo(param.uid,  options).toPromise();
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param param the request object
     */
    public appApiUserRawGet(param: RawUserApiAppApiUserRawGetRequest, options?: Configuration): Promise<User> {
        return this.api.appApiUserRawGet(param.uid,  options).toPromise();
    }

    /**
     * get user permissions
     * get user permissions
     * @param param the request object
     */
    public appApiUserRawGetPermissionsWithHttpInfo(param: RawUserApiAppApiUserRawGetPermissionsRequest, options?: Configuration): Promise<HttpInfo<UserPermissions>> {
        return this.api.appApiUserRawGetPermissionsWithHttpInfo(param.uid,  options).toPromise();
    }

    /**
     * get user permissions
     * get user permissions
     * @param param the request object
     */
    public appApiUserRawGetPermissions(param: RawUserApiAppApiUserRawGetPermissionsRequest, options?: Configuration): Promise<UserPermissions> {
        return this.api.appApiUserRawGetPermissions(param.uid,  options).toPromise();
    }

    /**
     * list users
     * List users
     * @param param the request object
     */
    public appApiUserRawListUsersWithHttpInfo(param: RawUserApiAppApiUserRawListUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.appApiUserRawListUsersWithHttpInfo(param.query, param.offset, param.limit,  options).toPromise();
    }

    /**
     * list users
     * List users
     * @param param the request object
     */
    public appApiUserRawListUsers(param: RawUserApiAppApiUserRawListUsersRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.appApiUserRawListUsers(param.query, param.offset, param.limit,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public appApiUserRawUpdateWithHttpInfo(param: RawUserApiAppApiUserRawUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserRawUpdateWithHttpInfo(param.uid, param.userUpdate,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public appApiUserRawUpdate(param: RawUserApiAppApiUserRawUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.appApiUserRawUpdate(param.uid, param.userUpdate,  options).toPromise();
    }

    /**
     * update user permissions
     * update user permissions
     * @param param the request object
     */
    public appApiUserRawUpdatePermissionsWithHttpInfo(param: RawUserApiAppApiUserRawUpdatePermissionsRequest, options?: Configuration): Promise<HttpInfo<UserPermissions>> {
        return this.api.appApiUserRawUpdatePermissionsWithHttpInfo(param.uid, param.isAdmin, param.canCreateGroup, param.canCreateSpace,  options).toPromise();
    }

    /**
     * update user permissions
     * update user permissions
     * @param param the request object
     */
    public appApiUserRawUpdatePermissions(param: RawUserApiAppApiUserRawUpdatePermissionsRequest, options?: Configuration): Promise<UserPermissions> {
        return this.api.appApiUserRawUpdatePermissions(param.uid, param.isAdmin, param.canCreateGroup, param.canCreateSpace,  options).toPromise();
    }

}

import { ObservableRawVintageApi } from "./ObservableAPI";
import { RawVintageApiRequestFactory, RawVintageApiResponseProcessor} from "../apis/RawVintageApi";

export interface RawVintageApiAppApiVintagesGetListRawRequest {
    /**
     * collection id
     * @type string
     * @memberof RawVintageApiappApiVintagesGetListRaw
     */
    collId: string
    /**
     * time series id
     * @type string
     * @memberof RawVintageApiappApiVintagesGetListRaw
     */
    tsid?: string
    /**
     * realtime when values were valid
     * @type Date
     * @memberof RawVintageApiappApiVintagesGetListRaw
     */
    realtime?: Date
}

export interface RawVintageApiAppApiVintagesGetRawRequest {
    /**
     * collection id
     * @type string
     * @memberof RawVintageApiappApiVintagesGetRaw
     */
    collId: string
    /**
     * vintage id
     * @type string
     * @memberof RawVintageApiappApiVintagesGetRaw
     */
    vid: string
    /**
     * should include vintage metadata
     * @type boolean
     * @memberof RawVintageApiappApiVintagesGetRaw
     */
    meta?: boolean
}

export interface RawVintageApiAppApiVintagesObjectHistoryRawRequest {
    /**
     * collection id
     * @type string
     * @memberof RawVintageApiappApiVintagesObjectHistoryRaw
     */
    collId: string
    /**
     * vintage id
     * @type string
     * @memberof RawVintageApiappApiVintagesObjectHistoryRaw
     */
    vid: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof RawVintageApiappApiVintagesObjectHistoryRaw
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof RawVintageApiappApiVintagesObjectHistoryRaw
     */
    realEnd?: Date
}

export interface RawVintageApiAppApiVintagesPutRawRequest {
    /**
     * collection id
     * @type string
     * @memberof RawVintageApiappApiVintagesPutRaw
     */
    collId: string
    /**
     * vintage id
     * @type string
     * @memberof RawVintageApiappApiVintagesPutRaw
     */
    vid: string
    /**
     * vintage tag
     * @type VintageUpdate
     * @memberof RawVintageApiappApiVintagesPutRaw
     */
    vintageUpdate: VintageUpdate
}

export class ObjectRawVintageApi {
    private api: ObservableRawVintageApi

    public constructor(configuration: Configuration, requestFactory?: RawVintageApiRequestFactory, responseProcessor?: RawVintageApiResponseProcessor) {
        this.api = new ObservableRawVintageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param param the request object
     */
    public appApiVintagesGetListRawWithHttpInfo(param: RawVintageApiAppApiVintagesGetListRawRequest, options?: Configuration): Promise<HttpInfo<Array<VintageSummary>>> {
        return this.api.appApiVintagesGetListRawWithHttpInfo(param.collId, param.tsid, param.realtime,  options).toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param param the request object
     */
    public appApiVintagesGetListRaw(param: RawVintageApiAppApiVintagesGetListRawRequest, options?: Configuration): Promise<Array<VintageSummary>> {
        return this.api.appApiVintagesGetListRaw(param.collId, param.tsid, param.realtime,  options).toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesGetRawWithHttpInfo(param: RawVintageApiAppApiVintagesGetRawRequest, options?: Configuration): Promise<HttpInfo<Vintage>> {
        return this.api.appApiVintagesGetRawWithHttpInfo(param.collId, param.vid, param.meta,  options).toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesGetRaw(param: RawVintageApiAppApiVintagesGetRawRequest, options?: Configuration): Promise<Vintage> {
        return this.api.appApiVintagesGetRaw(param.collId, param.vid, param.meta,  options).toPromise();
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param param the request object
     */
    public appApiVintagesObjectHistoryRawWithHttpInfo(param: RawVintageApiAppApiVintagesObjectHistoryRawRequest, options?: Configuration): Promise<HttpInfo<Array<VintageHistorical>>> {
        return this.api.appApiVintagesObjectHistoryRawWithHttpInfo(param.collId, param.vid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param param the request object
     */
    public appApiVintagesObjectHistoryRaw(param: RawVintageApiAppApiVintagesObjectHistoryRawRequest, options?: Configuration): Promise<Array<VintageHistorical>> {
        return this.api.appApiVintagesObjectHistoryRaw(param.collId, param.vid, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param param the request object
     */
    public appApiVintagesPutRawWithHttpInfo(param: RawVintageApiAppApiVintagesPutRawRequest, options?: Configuration): Promise<HttpInfo<VintageSummary>> {
        return this.api.appApiVintagesPutRawWithHttpInfo(param.collId, param.vid, param.vintageUpdate,  options).toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param param the request object
     */
    public appApiVintagesPutRaw(param: RawVintageApiAppApiVintagesPutRawRequest, options?: Configuration): Promise<VintageSummary> {
        return this.api.appApiVintagesPutRaw(param.collId, param.vid, param.vintageUpdate,  options).toPromise();
    }

}

import { ObservableSpaceApi } from "./ObservableAPI";
import { SpaceApiRequestFactory, SpaceApiResponseProcessor} from "../apis/SpaceApi";

export interface SpaceApiAppApiSpaceAddMemberRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpaceAddMember
     */
    spaceName: string
    /**
     * 
     * @type SpaceMemberPost
     * @memberof SpaceApiappApiSpaceAddMember
     */
    spaceMemberPost?: SpaceMemberPost
}

export interface SpaceApiAppApiSpaceDeleteRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpaceDelete
     */
    spaceName: string
}

export interface SpaceApiAppApiSpaceDeleteMemberRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpaceDeleteMember
     */
    spaceName: string
    /**
     * | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @type &#39;u&#39; | &#39;g&#39;
     * @memberof SpaceApiappApiSpaceDeleteMember
     */
    type: 'u' | 'g'
    /**
     * username or groupname
     * @type string
     * @memberof SpaceApiappApiSpaceDeleteMember
     */
    memberName: string
}

export interface SpaceApiAppApiSpaceGetRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpaceGet
     */
    spaceName: string
}

export interface SpaceApiAppApiSpaceGetListRequest {
    /**
     * Search query
     * @type string
     * @memberof SpaceApiappApiSpaceGetList
     */
    query?: string
}

export interface SpaceApiAppApiSpaceNameHistoryRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpaceNameHistory
     */
    spaceName: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof SpaceApiappApiSpaceNameHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof SpaceApiappApiSpaceNameHistory
     */
    realEnd?: Date
}

export interface SpaceApiAppApiSpacePostRequest {
    /**
     * Space definition
     * @type Space
     * @memberof SpaceApiappApiSpacePost
     */
    space: Space
}

export interface SpaceApiAppApiSpacePutRequest {
    /**
     * space name
     * @type string
     * @memberof SpaceApiappApiSpacePut
     */
    spaceName: string
    /**
     * Optional description in *Markdown*
     * @type Space
     * @memberof SpaceApiappApiSpacePut
     */
    space: Space
}

export class ObjectSpaceApi {
    private api: ObservableSpaceApi

    public constructor(configuration: Configuration, requestFactory?: SpaceApiRequestFactory, responseProcessor?: SpaceApiResponseProcessor) {
        this.api = new ObservableSpaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a space member
     * Add a space member
     * @param param the request object
     */
    public appApiSpaceAddMemberWithHttpInfo(param: SpaceApiAppApiSpaceAddMemberRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceAddMemberWithHttpInfo(param.spaceName, param.spaceMemberPost,  options).toPromise();
    }

    /**
     * Add a space member
     * Add a space member
     * @param param the request object
     */
    public appApiSpaceAddMember(param: SpaceApiAppApiSpaceAddMemberRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceAddMember(param.spaceName, param.spaceMemberPost,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param param the request object
     */
    public appApiSpaceDeleteWithHttpInfo(param: SpaceApiAppApiSpaceDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiSpaceDeleteWithHttpInfo(param.spaceName,  options).toPromise();
    }

    /**
     * Delete a space
     * Delete a space
     * @param param the request object
     */
    public appApiSpaceDelete(param: SpaceApiAppApiSpaceDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiSpaceDelete(param.spaceName,  options).toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param param the request object
     */
    public appApiSpaceDeleteMemberWithHttpInfo(param: SpaceApiAppApiSpaceDeleteMemberRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceDeleteMemberWithHttpInfo(param.spaceName, param.type, param.memberName,  options).toPromise();
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param param the request object
     */
    public appApiSpaceDeleteMember(param: SpaceApiAppApiSpaceDeleteMemberRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceDeleteMember(param.spaceName, param.type, param.memberName,  options).toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param param the request object
     */
    public appApiSpaceGetWithHttpInfo(param: SpaceApiAppApiSpaceGetRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpaceGetWithHttpInfo(param.spaceName,  options).toPromise();
    }

    /**
     * Get space details
     * Get space details
     * @param param the request object
     */
    public appApiSpaceGet(param: SpaceApiAppApiSpaceGetRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpaceGet(param.spaceName,  options).toPromise();
    }

    /**
     * 
     * list spaces
     * @param param the request object
     */
    public appApiSpaceGetListWithHttpInfo(param: SpaceApiAppApiSpaceGetListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Space>>> {
        return this.api.appApiSpaceGetListWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * 
     * list spaces
     * @param param the request object
     */
    public appApiSpaceGetList(param: SpaceApiAppApiSpaceGetListRequest = {}, options?: Configuration): Promise<Array<Space>> {
        return this.api.appApiSpaceGetList(param.query,  options).toPromise();
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param param the request object
     */
    public appApiSpaceNameHistoryWithHttpInfo(param: SpaceApiAppApiSpaceNameHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.appApiSpaceNameHistoryWithHttpInfo(param.spaceName, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param param the request object
     */
    public appApiSpaceNameHistory(param: SpaceApiAppApiSpaceNameHistoryRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.appApiSpaceNameHistory(param.spaceName, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param param the request object
     */
    public appApiSpacePostWithHttpInfo(param: SpaceApiAppApiSpacePostRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpacePostWithHttpInfo(param.space,  options).toPromise();
    }

    /**
     * Create a new space
     * Create a new space
     * @param param the request object
     */
    public appApiSpacePost(param: SpaceApiAppApiSpacePostRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpacePost(param.space,  options).toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param param the request object
     */
    public appApiSpacePutWithHttpInfo(param: SpaceApiAppApiSpacePutRequest, options?: Configuration): Promise<HttpInfo<Space>> {
        return this.api.appApiSpacePutWithHttpInfo(param.spaceName, param.space,  options).toPromise();
    }

    /**
     * 
     * Update an existing space
     * @param param the request object
     */
    public appApiSpacePut(param: SpaceApiAppApiSpacePutRequest, options?: Configuration): Promise<Space> {
        return this.api.appApiSpacePut(param.spaceName, param.space,  options).toPromise();
    }

}

import { ObservableTimeSeriesApi } from "./ObservableAPI";
import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";

export interface TimeSeriesApiAppApiTimeseriesDeleteRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesDelete
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesDelete
     */
    collName: string
    /**
     * a single series name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesDelete
     */
    name: string
}

export interface TimeSeriesApiAppApiTimeseriesGetRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesGet
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesGet
     */
    collName: string
    /**
     * a single series name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesGet
     */
    name: string
}

export interface TimeSeriesApiAppApiTimeseriesGetListRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesGetList
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesGetList
     */
    collName: string
}

export interface TimeSeriesApiAppApiTimeseriesNameHistoryRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesNameHistory
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesNameHistory
     */
    collName: string
    /**
     * a single series name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesNameHistory
     */
    name: string
    /**
     * start time from when values were valid
     * @type Date
     * @memberof TimeSeriesApiappApiTimeseriesNameHistory
     */
    realStart?: Date
    /**
     * end time until when values were valid
     * @type Date
     * @memberof TimeSeriesApiappApiTimeseriesNameHistory
     */
    realEnd?: Date
}

export interface TimeSeriesApiAppApiTimeseriesPostRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesPost
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesPost
     */
    collName: string
    /**
     * Time series parameters. dtype and freq are required
     * @type TimeSeries
     * @memberof TimeSeriesApiappApiTimeseriesPost
     */
    timeSeries: TimeSeries
}

export interface TimeSeriesApiAppApiTimeseriesPutRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesPut
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesPut
     */
    collName: string
    /**
     * a single series name
     * @type string
     * @memberof TimeSeriesApiappApiTimeseriesPut
     */
    name: string
    /**
     * Time series updated info
     * @type TimeSeriesUpdate
     * @memberof TimeSeriesApiappApiTimeseriesPut
     */
    timeSeriesUpdate: TimeSeriesUpdate
}

export class ObjectTimeSeriesApi {
    private api: ObservableTimeSeriesApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesApiRequestFactory, responseProcessor?: TimeSeriesApiResponseProcessor) {
        this.api = new ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete time series
     * Delete a time series
     * @param param the request object
     */
    public appApiTimeseriesDeleteWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesDeleteWithHttpInfo(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * delete time series
     * Delete a time series
     * @param param the request object
     */
    public appApiTimeseriesDelete(param: TimeSeriesApiAppApiTimeseriesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesDelete(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * 
     * Retrieve time series info
     * @param param the request object
     */
    public appApiTimeseriesGetWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesGetRequest, options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        return this.api.appApiTimeseriesGetWithHttpInfo(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * 
     * Retrieve time series info
     * @param param the request object
     */
    public appApiTimeseriesGet(param: TimeSeriesApiAppApiTimeseriesGetRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.appApiTimeseriesGet(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param param the request object
     */
    public appApiTimeseriesGetListWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesGetListRequest, options?: Configuration): Promise<HttpInfo<Array<TimeSeriesSummary>>> {
        return this.api.appApiTimeseriesGetListWithHttpInfo(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param param the request object
     */
    public appApiTimeseriesGetList(param: TimeSeriesApiAppApiTimeseriesGetListRequest, options?: Configuration): Promise<Array<TimeSeriesSummary>> {
        return this.api.appApiTimeseriesGetList(param.spaceName, param.collName,  options).toPromise();
    }

    /**
     * 
     * retrive historical values
     * @param param the request object
     */
    public appApiTimeseriesNameHistoryWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesNameHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.appApiTimeseriesNameHistoryWithHttpInfo(param.spaceName, param.collName, param.name, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * 
     * retrive historical values
     * @param param the request object
     */
    public appApiTimeseriesNameHistory(param: TimeSeriesApiAppApiTimeseriesNameHistoryRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.appApiTimeseriesNameHistory(param.spaceName, param.collName, param.name, param.realStart, param.realEnd,  options).toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param param the request object
     */
    public appApiTimeseriesPostWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesPostRequest, options?: Configuration): Promise<HttpInfo<TimeSeriesCore>> {
        return this.api.appApiTimeseriesPostWithHttpInfo(param.spaceName, param.collName, param.timeSeries,  options).toPromise();
    }

    /**
     * 
     * Create a new time series
     * @param param the request object
     */
    public appApiTimeseriesPost(param: TimeSeriesApiAppApiTimeseriesPostRequest, options?: Configuration): Promise<TimeSeriesCore> {
        return this.api.appApiTimeseriesPost(param.spaceName, param.collName, param.timeSeries,  options).toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param param the request object
     */
    public appApiTimeseriesPutWithHttpInfo(param: TimeSeriesApiAppApiTimeseriesPutRequest, options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        return this.api.appApiTimeseriesPutWithHttpInfo(param.spaceName, param.collName, param.name, param.timeSeriesUpdate,  options).toPromise();
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param param the request object
     */
    public appApiTimeseriesPut(param: TimeSeriesApiAppApiTimeseriesPutRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.appApiTimeseriesPut(param.spaceName, param.collName, param.name, param.timeSeriesUpdate,  options).toPromise();
    }

}

import { ObservableTimeSeriesDataApi } from "./ObservableAPI";
import { TimeSeriesDataApiRequestFactory, TimeSeriesDataApiResponseProcessor} from "../apis/TimeSeriesDataApi";

export interface TimeSeriesDataApiAppApiTimeseriesDataDeleteRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataDelete
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataDelete
     */
    collName: string
    /**
     * list of series names
     * @type Array&lt;string&gt;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataDelete
     */
    names: Array<string>
    /**
     * time index
     * @type Array&lt;AppApiTimeseriesDataDeleteIndexParameterInner&gt;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataDelete
     */
    index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>
    /**
     * Format of data time index * &#x60;string&#x60; a string represenation specific to each index type, e.g. 2000-01 for monthly index. * &#x60;iso&#x60; a string with iso representation of datetime \&#39;\&#39; * &#x60;s&#x60;   a number of seconds from unix epoch 1970-01-01 * &#x60;ms&#x60;  a number of milliseconds from unix epoch 1970-01-01 * &#x60;us&#x60;  a number of microseconds from unix epoch 1970-01-01 
     * @type &#39;string&#39; | &#39;iso&#39; | &#39;s&#39; | &#39;ms&#39; | &#39;us&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataDelete
     */
    format?: 'string' | 'iso' | 's' | 'ms' | 'us'
}

export interface TimeSeriesDataApiAppApiTimeseriesDataGetRequest {
    /**
     * list of time series identifiers
     * @type TSIList
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    series: TSIList
    /**
     * start of time index range, format depends on the freq requested 
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    periodStart?: string
    /**
     * end of time index range
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    periodEnd?: string
    /**
     * Time series transformation * &#x60;none&#x60; - as is * &#x60;diff&#x60; - Use the last value of the time period. * &#x60;rdiff&#x60; - relative diff, i.e. % changes * &#x60;log&#x60; - natural log * &#x60;ldiff&#x60; - log diff, i.e. % changes * &#x60;norm&#x60; - normalized to 100 
     * @type &#39;diff&#39; | &#39;rdiff&#39; | &#39;log&#39; | &#39;ldiff&#39; | &#39;norm&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm'
    /**
     * frequency of returned series
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    freq?: string
    /**
     * Method of converting to lower frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;last&#x60; - Use the last value of the time period. * &#x60;first&#x60; - Use the first value of the time period. * &#x60;sum&#x60; - Aggregate the values of the time period. e.g. for flow type of variables * &#x60;pch&#x60; - Aggregate the percentage change over the period. * &#x60;mix&#x60; - Use the highest value in the time period. * &#x60;min&#x60; - Use the lowest value of the time period. 
     * @type &#39;auto&#39; | &#39;last&#39; | &#39;first&#39; | &#39;sumw&#39; | &#39;pch&#39; | &#39;max&#39; | &#39;min&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min'
    /**
     * Method of converting to higher frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;same&#x60; - Use the same value for the whole period. * &#x60;dist&#x60; - Divide equally over the time period. * &#x60;pch&#x60; - Distribute the percentage change over the period. * &#x60;linear&#x60; - Use a linear interpolation of the values from this to the next period. * &#x60;first&#x60; - Use the value for the first value of the period. * &#x60;quad&#x60; - Use quadratic interpolation to distribute the value over the period. * &#x60;cube&#x60; - Use a cubic interpolation of the values from this to the next period. 
     * @type &#39;auto&#39; | &#39;same&#39; | &#39;dist&#39; | &#39;pch&#39; | &#39;linear&#39; | &#39;first&#39; | &#39;quad&#39; | &#39;cube&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube'
    /**
     * Method of filling in any missing values. * &#x60;none&#x60; - Do not fill in missing values. They will remain NaN in the value vector. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;previous&#x60; - Use the previous non-missing value. * &#x60;zero&#x60; - Use the value zero. 
     * @type &#39;none&#39; | &#39;auto&#39; | &#39;previous&#39; | &#39;zero&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    missingMethod?: 'none' | 'auto' | 'previous' | 'zero'
    /**
     * Should merge time series
     * @type boolean
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    merge?: boolean
    /**
     * real time as of which values were valid
     * @type Date
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    realtime?: Date
    /**
     * vintage tag used to identify real time when series was written.
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    vintage?: string
    /**
     * output type
     * @type &#39;json&#39; | &#39;csv&#39; | &#39;excel&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    output?: 'json' | 'csv' | 'excel'
    /**
     * | format of output type * &#x60;auto&#x60; depending on output, * &#x60;string&#x60; string represenation as in * &#x60;epoch&#x60; integers specifying number of ms from unix epoch * &#x60;ISO&#x60; ISO8601 format 2008-09-15T15:53:00
     * @type &#39;auto&#39; | &#39;epoch&#39; | &#39;string&#39; | &#39;ISO&#39;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO'
    /**
     * format of output type
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    outputIndexFormat?: string
    /**
     * the first number of item to skip
     * @type number
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    offset?: number
    /**
     * the number of items to return
     * @type number
     * @memberof TimeSeriesDataApiappApiTimeseriesDataGet
     */
    limit?: number
}

export interface TimeSeriesDataApiAppApiTimeseriesDataPutRequest {
    /**
     * space name
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataPut
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof TimeSeriesDataApiappApiTimeseriesDataPut
     */
    collName: string
    /**
     * time series data
     * @type Array&lt;SingleTimeSeriesData&gt;
     * @memberof TimeSeriesDataApiappApiTimeseriesDataPut
     */
    singleTimeSeriesData: Array<SingleTimeSeriesData>
}

export class ObjectTimeSeriesDataApi {
    private api: ObservableTimeSeriesDataApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesDataApiRequestFactory, responseProcessor?: TimeSeriesDataApiResponseProcessor) {
        this.api = new ObservableTimeSeriesDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete observations from a time series
     * Delete observations
     * @param param the request object
     */
    public appApiTimeseriesDataDeleteWithHttpInfo(param: TimeSeriesDataApiAppApiTimeseriesDataDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesDataDeleteWithHttpInfo(param.spaceName, param.collName, param.names, param.index, param.format,  options).toPromise();
    }

    /**
     * Delete observations from a time series
     * Delete observations
     * @param param the request object
     */
    public appApiTimeseriesDataDelete(param: TimeSeriesDataApiAppApiTimeseriesDataDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesDataDelete(param.spaceName, param.collName, param.names, param.index, param.format,  options).toPromise();
    }

    /**
     * Retrieve time series data
     * Retrieve time series data
     * @param param the request object
     */
    public appApiTimeseriesDataGetWithHttpInfo(param: TimeSeriesDataApiAppApiTimeseriesDataGetRequest, options?: Configuration): Promise<HttpInfo<Array<SingleTimeSeriesData>>> {
        return this.api.appApiTimeseriesDataGetWithHttpInfo(param.series, param.periodStart, param.periodEnd, param.transform, param.freq, param.toLowerMethod, param.toHigherMethod, param.missingMethod, param.merge, param.realtime, param.vintage, param.output, param.outputIndexType, param.outputIndexFormat, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Retrieve time series data
     * Retrieve time series data
     * @param param the request object
     */
    public appApiTimeseriesDataGet(param: TimeSeriesDataApiAppApiTimeseriesDataGetRequest, options?: Configuration): Promise<Array<SingleTimeSeriesData>> {
        return this.api.appApiTimeseriesDataGet(param.series, param.periodStart, param.periodEnd, param.transform, param.freq, param.toLowerMethod, param.toHigherMethod, param.missingMethod, param.merge, param.realtime, param.vintage, param.output, param.outputIndexType, param.outputIndexFormat, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Save observations of time series
     * Save observations
     * @param param the request object
     */
    public appApiTimeseriesDataPutWithHttpInfo(param: TimeSeriesDataApiAppApiTimeseriesDataPutRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiTimeseriesDataPutWithHttpInfo(param.spaceName, param.collName, param.singleTimeSeriesData,  options).toPromise();
    }

    /**
     * Save observations of time series
     * Save observations
     * @param param the request object
     */
    public appApiTimeseriesDataPut(param: TimeSeriesDataApiAppApiTimeseriesDataPutRequest, options?: Configuration): Promise<void> {
        return this.api.appApiTimeseriesDataPut(param.spaceName, param.collName, param.singleTimeSeriesData,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiAppApiUserChangePasswordRequest {
    /**
     * username
     * @type string
     * @memberof UserApiappApiUserChangePassword
     */
    username: string
    /**
     * new password
     * @type NewPassword
     * @memberof UserApiappApiUserChangePassword
     */
    newPassword: NewPassword
}

export interface UserApiAppApiUserCreateRequest {
    /**
     * 
     * @type UserPost
     * @memberof UserApiappApiUserCreate
     */
    userPost?: UserPost
}

export interface UserApiAppApiUserDeleteRequest {
    /**
     * username
     * @type string
     * @memberof UserApiappApiUserDelete
     */
    username: string
}

export interface UserApiAppApiUserGetRequest {
    /**
     * username
     * @type string
     * @memberof UserApiappApiUserGet
     */
    username: string
}

export interface UserApiAppApiUserListUsersRequest {
    /**
     * Search query
     * @type string
     * @memberof UserApiappApiUserListUsers
     */
    query?: string
    /**
     * the first number of item to skip
     * @type number
     * @memberof UserApiappApiUserListUsers
     */
    offset?: number
    /**
     * the number of items to return
     * @type number
     * @memberof UserApiappApiUserListUsers
     */
    limit?: number
}

export interface UserApiAppApiUserLoginRequest {
}

export interface UserApiAppApiUserLogoutRequest {
}

export interface UserApiAppApiUserPingRequest {
}

export interface UserApiAppApiUserRefreshRequest {
}

export interface UserApiAppApiUserUpdateRequest {
    /**
     * username
     * @type string
     * @memberof UserApiappApiUserUpdate
     */
    username: string
    /**
     * Updated user object
     * @type UserUpdate
     * @memberof UserApiappApiUserUpdate
     */
    userUpdate?: UserUpdate
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param param the request object
     */
    public appApiUserChangePasswordWithHttpInfo(param: UserApiAppApiUserChangePasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserChangePasswordWithHttpInfo(param.username, param.newPassword,  options).toPromise();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param param the request object
     */
    public appApiUserChangePassword(param: UserApiAppApiUserChangePasswordRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUserChangePassword(param.username, param.newPassword,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public appApiUserCreateWithHttpInfo(param: UserApiAppApiUserCreateRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserCreateWithHttpInfo(param.userPost,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public appApiUserCreate(param: UserApiAppApiUserCreateRequest = {}, options?: Configuration): Promise<User> {
        return this.api.appApiUserCreate(param.userPost,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public appApiUserDeleteWithHttpInfo(param: UserApiAppApiUserDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserDeleteWithHttpInfo(param.username,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public appApiUserDelete(param: UserApiAppApiUserDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.appApiUserDelete(param.username,  options).toPromise();
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param param the request object
     */
    public appApiUserGetWithHttpInfo(param: UserApiAppApiUserGetRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserGetWithHttpInfo(param.username,  options).toPromise();
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param param the request object
     */
    public appApiUserGet(param: UserApiAppApiUserGetRequest, options?: Configuration): Promise<User> {
        return this.api.appApiUserGet(param.username,  options).toPromise();
    }

    /**
     * list users
     * List users
     * @param param the request object
     */
    public appApiUserListUsersWithHttpInfo(param: UserApiAppApiUserListUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.appApiUserListUsersWithHttpInfo(param.query, param.offset, param.limit,  options).toPromise();
    }

    /**
     * list users
     * List users
     * @param param the request object
     */
    public appApiUserListUsers(param: UserApiAppApiUserListUsersRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.appApiUserListUsers(param.query, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     * @param param the request object
     */
    public appApiUserLoginWithHttpInfo(param: UserApiAppApiUserLoginRequest = {}, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.appApiUserLoginWithHttpInfo( options).toPromise();
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     * @param param the request object
     */
    public appApiUserLogin(param: UserApiAppApiUserLoginRequest = {}, options?: Configuration): Promise<LoginResponse> {
        return this.api.appApiUserLogin( options).toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     * @param param the request object
     */
    public appApiUserLogoutWithHttpInfo(param: UserApiAppApiUserLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     * @param param the request object
     */
    public appApiUserLogout(param: UserApiAppApiUserLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.appApiUserLogout( options).toPromise();
    }

    /**
     * checks user authorization
     * checks user authorization
     * @param param the request object
     */
    public appApiUserPingWithHttpInfo(param: UserApiAppApiUserPingRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.appApiUserPingWithHttpInfo( options).toPromise();
    }

    /**
     * checks user authorization
     * checks user authorization
     * @param param the request object
     */
    public appApiUserPing(param: UserApiAppApiUserPingRequest = {}, options?: Configuration): Promise<void> {
        return this.api.appApiUserPing( options).toPromise();
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     * @param param the request object
     */
    public appApiUserRefreshWithHttpInfo(param: UserApiAppApiUserRefreshRequest = {}, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.appApiUserRefreshWithHttpInfo( options).toPromise();
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     * @param param the request object
     */
    public appApiUserRefresh(param: UserApiAppApiUserRefreshRequest = {}, options?: Configuration): Promise<LoginResponse> {
        return this.api.appApiUserRefresh( options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public appApiUserUpdateWithHttpInfo(param: UserApiAppApiUserUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.appApiUserUpdateWithHttpInfo(param.username, param.userUpdate,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public appApiUserUpdate(param: UserApiAppApiUserUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.appApiUserUpdate(param.username, param.userUpdate,  options).toPromise();
    }

}

import { ObservableVintageApi } from "./ObservableAPI";
import { VintageApiRequestFactory, VintageApiResponseProcessor} from "../apis/VintageApi";

export interface VintageApiAppApiVintagesGetRequest {
    /**
     * space name
     * @type string
     * @memberof VintageApiappApiVintagesGet
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof VintageApiappApiVintagesGet
     */
    collName: string
    /**
     * vintage tag
     * @type string
     * @memberof VintageApiappApiVintagesGet
     */
    name: string
    /**
     * should include vintage metadata
     * @type boolean
     * @memberof VintageApiappApiVintagesGet
     */
    meta?: boolean
}

export interface VintageApiAppApiVintagesGetListRequest {
    /**
     * space name
     * @type string
     * @memberof VintageApiappApiVintagesGetList
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof VintageApiappApiVintagesGetList
     */
    collName: string
    /**
     * time series id
     * @type string
     * @memberof VintageApiappApiVintagesGetList
     */
    tsid?: string
}

export interface VintageApiAppApiVintagesNameHistoryRequest {
    /**
     * space name
     * @type string
     * @memberof VintageApiappApiVintagesNameHistory
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof VintageApiappApiVintagesNameHistory
     */
    collName: string
    /**
     * vintage tag
     * @type string
     * @memberof VintageApiappApiVintagesNameHistory
     */
    name: string
}

export interface VintageApiAppApiVintagesPutRequest {
    /**
     * space name
     * @type string
     * @memberof VintageApiappApiVintagesPut
     */
    spaceName: string
    /**
     * collection name
     * @type string
     * @memberof VintageApiappApiVintagesPut
     */
    collName: string
    /**
     * vintage tag
     * @type string
     * @memberof VintageApiappApiVintagesPut
     */
    name: string
    /**
     * vintage tag
     * @type VintageUpdate
     * @memberof VintageApiappApiVintagesPut
     */
    vintageUpdate: VintageUpdate
}

export class ObjectVintageApi {
    private api: ObservableVintageApi

    public constructor(configuration: Configuration, requestFactory?: VintageApiRequestFactory, responseProcessor?: VintageApiResponseProcessor) {
        this.api = new ObservableVintageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesGetWithHttpInfo(param: VintageApiAppApiVintagesGetRequest, options?: Configuration): Promise<HttpInfo<Vintage>> {
        return this.api.appApiVintagesGetWithHttpInfo(param.spaceName, param.collName, param.name, param.meta,  options).toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesGet(param: VintageApiAppApiVintagesGetRequest, options?: Configuration): Promise<Vintage> {
        return this.api.appApiVintagesGet(param.spaceName, param.collName, param.name, param.meta,  options).toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param param the request object
     */
    public appApiVintagesGetListWithHttpInfo(param: VintageApiAppApiVintagesGetListRequest, options?: Configuration): Promise<HttpInfo<Array<VintageSummary>>> {
        return this.api.appApiVintagesGetListWithHttpInfo(param.spaceName, param.collName, param.tsid,  options).toPromise();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param param the request object
     */
    public appApiVintagesGetList(param: VintageApiAppApiVintagesGetListRequest, options?: Configuration): Promise<Array<VintageSummary>> {
        return this.api.appApiVintagesGetList(param.spaceName, param.collName, param.tsid,  options).toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesNameHistoryWithHttpInfo(param: VintageApiAppApiVintagesNameHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.appApiVintagesNameHistoryWithHttpInfo(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param param the request object
     */
    public appApiVintagesNameHistory(param: VintageApiAppApiVintagesNameHistoryRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.appApiVintagesNameHistory(param.spaceName, param.collName, param.name,  options).toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param param the request object
     */
    public appApiVintagesPutWithHttpInfo(param: VintageApiAppApiVintagesPutRequest, options?: Configuration): Promise<HttpInfo<VintageSummary>> {
        return this.api.appApiVintagesPutWithHttpInfo(param.spaceName, param.collName, param.name, param.vintageUpdate,  options).toPromise();
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param param the request object
     */
    public appApiVintagesPut(param: VintageApiAppApiVintagesPutRequest, options?: Configuration): Promise<VintageSummary> {
        return this.api.appApiVintagesPut(param.spaceName, param.collName, param.name, param.vintageUpdate,  options).toPromise();
    }

}
