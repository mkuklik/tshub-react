import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AnnotationsApiRequestFactory, AnnotationsApiResponseProcessor} from "../apis/AnnotationsApi";
export class ObservableAnnotationsApi {
    private requestFactory: AnnotationsApiRequestFactory;
    private responseProcessor: AnnotationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnotationsApiRequestFactory,
        responseProcessor?: AnnotationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnnotationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnnotationsApiResponseProcessor();
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
    public appApiAnnotationAddTargetWithHttpInfo(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationAddTarget(spaceName, collName, symbol, tsid, index, freq, vid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationAddTargetWithHttpInfo(rsp)));
            }));
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
    public appApiAnnotationAddTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationAddTargetWithHttpInfo(spaceName, collName, symbol, tsid, index, freq, vid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Create an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param annotation Annotation
     */
    public appApiAnnotationCreateWithHttpInfo(spaceName: string, collName: string, annotation: Annotation, _options?: Configuration): Observable<HttpInfo<Annotation>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationCreate(spaceName, collName, annotation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param annotation Annotation
     */
    public appApiAnnotationCreate(spaceName: string, collName: string, annotation: Annotation, _options?: Configuration): Observable<Annotation> {
        return this.appApiAnnotationCreateWithHttpInfo(spaceName, collName, annotation, _options).pipe(map((apiResponse: HttpInfo<Annotation>) => apiResponse.data));
    }

    /**
     * 
     * Delete annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationDeleteWithHttpInfo(spaceName: string, collName: string, symbol: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationDelete(spaceName, collName, symbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationDelete(spaceName: string, collName: string, symbol: string, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationDeleteWithHttpInfo(spaceName, collName, symbol, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Get an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationGetWithHttpInfo(spaceName: string, collName: string, symbol: string, _options?: Configuration): Observable<HttpInfo<Annotation>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationGet(spaceName, collName, symbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public appApiAnnotationGet(spaceName: string, collName: string, symbol: string, _options?: Configuration): Observable<Annotation> {
        return this.appApiAnnotationGetWithHttpInfo(spaceName, collName, symbol, _options).pipe(map((apiResponse: HttpInfo<Annotation>) => apiResponse.data));
    }

    /**
     * List annotations
     * List annotations
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiAnnotationGetListWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Observable<HttpInfo<Array<Annotation>>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationGetList(spaceName, collName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List annotations
     * List annotations
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiAnnotationGetList(spaceName: string, collName: string, _options?: Configuration): Observable<Array<Annotation>> {
        return this.appApiAnnotationGetListWithHttpInfo(spaceName, collName, _options).pipe(map((apiResponse: HttpInfo<Array<Annotation>>) => apiResponse.data));
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
    public appApiAnnotationRemoveTargetWithHttpInfo(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRemoveTarget(spaceName, collName, symbol, tsid, index, freq, vid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRemoveTargetWithHttpInfo(rsp)));
            }));
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
    public appApiAnnotationRemoveTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationRemoveTargetWithHttpInfo(spaceName, collName, symbol, tsid, index, freq, vid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Update an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationUpdateWithHttpInfo(spaceName: string, collName: string, symbol: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationUpdate(spaceName, collName, symbol, annotationUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationUpdate(spaceName: string, collName: string, symbol: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationUpdateWithHttpInfo(spaceName, collName, symbol, annotationUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";
export class ObservableApiKeyApi {
    private requestFactory: ApiKeyApiRequestFactory;
    private responseProcessor: ApiKeyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiKeyApiRequestFactory,
        responseProcessor?: ApiKeyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiKeyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiKeyApiResponseProcessor();
    }

    /**
     * Create API Key
     * Create API Key
     * @param username username
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyCreateWithHttpInfo(username: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Observable<HttpInfo<APIKey>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyCreate(username, name, scopes, expiresIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create API Key
     * Create API Key
     * @param username username
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyCreate(username: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Observable<APIKey> {
        return this.appApiApiKeyCreateWithHttpInfo(username, name, scopes, expiresIn, _options).pipe(map((apiResponse: HttpInfo<APIKey>) => apiResponse.data));
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param username username
     * @param name api key name
     */
    public appApiApiKeyDeleteWithHttpInfo(username: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyDelete(username, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param username username
     * @param name api key name
     */
    public appApiApiKeyDelete(username: string, name: string, _options?: Configuration): Observable<void> {
        return this.appApiApiKeyDeleteWithHttpInfo(username, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * List API Keys
     * List API Keys
     * @param username username
     */
    public appApiApiKeyGetListWithHttpInfo(username: string, _options?: Configuration): Observable<HttpInfo<Array<APIKey>>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyGetList(username, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List API Keys
     * List API Keys
     * @param username username
     */
    public appApiApiKeyGetList(username: string, _options?: Configuration): Observable<Array<APIKey>> {
        return this.appApiApiKeyGetListWithHttpInfo(username, _options).pipe(map((apiResponse: HttpInfo<Array<APIKey>>) => apiResponse.data));
    }

}

import { CollectionApiRequestFactory, CollectionApiResponseProcessor} from "../apis/CollectionApi";
export class ObservableCollectionApi {
    private requestFactory: CollectionApiRequestFactory;
    private responseProcessor: CollectionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionApiRequestFactory,
        responseProcessor?: CollectionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionApiResponseProcessor();
    }

    /**
     * Delete a space
     * Delete a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionDeleteWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiCollectionDelete(spaceName, collName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space
     * Delete a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionDelete(spaceName: string, collName: string, _options?: Configuration): Observable<void> {
        return this.appApiCollectionDeleteWithHttpInfo(spaceName, collName, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get collection details
     * Get collection details
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionGetWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionGet(spaceName, collName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get collection details
     * Get collection details
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiCollectionGet(spaceName: string, collName: string, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionGetWithHttpInfo(spaceName, collName, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * 
     * list collections
     * @param spaceName space name
     * @param query Search query
     */
    public appApiCollectionGetListWithHttpInfo(spaceName: string, query?: string, _options?: Configuration): Observable<HttpInfo<Array<CollectionSummary>>> {
        const requestContextPromise = this.requestFactory.appApiCollectionGetList(spaceName, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * list collections
     * @param spaceName space name
     * @param query Search query
     */
    public appApiCollectionGetList(spaceName: string, query?: string, _options?: Configuration): Observable<Array<CollectionSummary>> {
        return this.appApiCollectionGetListWithHttpInfo(spaceName, query, _options).pipe(map((apiResponse: HttpInfo<Array<CollectionSummary>>) => apiResponse.data));
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param spaceName space name
     * @param collName collection name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionNameHistoryWithHttpInfo(spaceName: string, collName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.appApiCollectionNameHistory(spaceName, collName, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionNameHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param spaceName space name
     * @param collName collection name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionNameHistory(spaceName: string, collName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<string>> {
        return this.appApiCollectionNameHistoryWithHttpInfo(spaceName, collName, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceName space name
     * @param collection Definition of collection
     */
    public appApiCollectionPostWithHttpInfo(spaceName: string, collection: Collection, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionPost(spaceName, collection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceName space name
     * @param collection Definition of collection
     */
    public appApiCollectionPost(spaceName: string, collection: Collection, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionPostWithHttpInfo(spaceName, collection, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param spaceName space name
     * @param collName collection name
     * @param collection ok
     */
    public appApiCollectionPutWithHttpInfo(spaceName: string, collName: string, collection: Collection, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionPut(spaceName, collName, collection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param spaceName space name
     * @param collName collection name
     * @param collection ok
     */
    public appApiCollectionPut(spaceName: string, collName: string, collection: Collection, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionPutWithHttpInfo(spaceName, collName, collection, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

}

import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi";
export class ObservableGroupApi {
    private requestFactory: GroupApiRequestFactory;
    private responseProcessor: GroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupApiRequestFactory,
        responseProcessor?: GroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupApiResponseProcessor();
    }

    /**
     * Add a group member
     * Add a group member
     * @param groupname groupname
     * @param groupMemberPost 
     */
    public appApiGroupAddMemberWithHttpInfo(groupname: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupAddMember(groupname, groupMemberPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupAddMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a group member
     * Add a group member
     * @param groupname groupname
     * @param groupMemberPost 
     */
    public appApiGroupAddMember(groupname: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Observable<Group> {
        return this.appApiGroupAddMemberWithHttpInfo(groupname, groupMemberPost, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupCreateGroupWithHttpInfo(group?: Group, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupCreateGroup(group, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupCreateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupCreateGroup(group?: Group, _options?: Configuration): Observable<Group> {
        return this.appApiGroupCreateGroupWithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Delete a group
     * Delete a group
     * @param groupname groupname
     */
    public appApiGroupDeleteGroupWithHttpInfo(groupname: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiGroupDeleteGroup(groupname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupDeleteGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a group
     * Delete a group
     * @param groupname groupname
     */
    public appApiGroupDeleteGroup(groupname: string, _options?: Configuration): Observable<void> {
        return this.appApiGroupDeleteGroupWithHttpInfo(groupname, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param groupname groupname
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiGroupDeleteMemberWithHttpInfo(groupname: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupDeleteMember(groupname, type, memberName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupDeleteMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param groupname groupname
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiGroupDeleteMember(groupname: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Observable<Group> {
        return this.appApiGroupDeleteMemberWithHttpInfo(groupname, type, memberName, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param groupname groupname
     */
    public appApiGroupGetGroupWithHttpInfo(groupname: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupGetGroup(groupname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupGetGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param groupname groupname
     */
    public appApiGroupGetGroup(groupname: string, _options?: Configuration): Observable<Group> {
        return this.appApiGroupGetGroupWithHttpInfo(groupname, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * List groups
     * List groups
     * @param query Search query
     */
    public appApiGroupListGroupsWithHttpInfo(query?: string, _options?: Configuration): Observable<HttpInfo<Array<GroupSummary>>> {
        const requestContextPromise = this.requestFactory.appApiGroupListGroups(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupListGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List groups
     * List groups
     * @param query Search query
     */
    public appApiGroupListGroups(query?: string, _options?: Configuration): Observable<Array<GroupSummary>> {
        return this.appApiGroupListGroupsWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<GroupSummary>>) => apiResponse.data));
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param groupname groupname
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupNameHistoryWithHttpInfo(groupname: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<GroupHistorical>>> {
        const requestContextPromise = this.requestFactory.appApiGroupNameHistory(groupname, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupNameHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve historical values of group details
     * Retrieve historical values of group details
     * @param groupname groupname
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupNameHistory(groupname: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<GroupHistorical>> {
        return this.appApiGroupNameHistoryWithHttpInfo(groupname, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<GroupHistorical>>) => apiResponse.data));
    }

    /**
     * Update a group
     * Update a group
     * @param groupname groupname
     * @param group an updated group
     */
    public appApiGroupUpdateGroupWithHttpInfo(groupname: string, group?: Group, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupUpdateGroup(groupname, group, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupUpdateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a group
     * Update a group
     * @param groupname groupname
     * @param group an updated group
     */
    public appApiGroupUpdateGroup(groupname: string, group?: Group, _options?: Configuration): Observable<Group> {
        return this.appApiGroupUpdateGroupWithHttpInfo(groupname, group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

}

import { PermissionsApiRequestFactory, PermissionsApiResponseProcessor} from "../apis/PermissionsApi";
export class ObservablePermissionsApi {
    private requestFactory: PermissionsApiRequestFactory;
    private responseProcessor: PermissionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PermissionsApiRequestFactory,
        responseProcessor?: PermissionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PermissionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PermissionsApiResponseProcessor();
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionGetWithHttpInfo(spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Observable<HttpInfo<Array<Policy>>> {
        const requestContextPromise = this.requestFactory.appApiPermissionGet(spaceId, collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiPermissionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiPermissionGet(spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Observable<Array<Policy>> {
        return this.appApiPermissionGetWithHttpInfo(spaceId, collId, tsid, _options).pipe(map((apiResponse: HttpInfo<Array<Policy>>) => apiResponse.data));
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
    public appApiPermissionRemovePermissionWithHttpInfo(objType: ObjectType, subobject: boolean, action: string, effect: 'allow' | 'deny', uid?: string, gid?: string, spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiPermissionRemovePermission(objType, subobject, action, effect, uid, gid, spaceId, collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiPermissionRemovePermissionWithHttpInfo(rsp)));
            }));
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
    public appApiPermissionRemovePermission(objType: ObjectType, subobject: boolean, action: string, effect: 'allow' | 'deny', uid?: string, gid?: string, spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Observable<void> {
        return this.appApiPermissionRemovePermissionWithHttpInfo(objType, subobject, action, effect, uid, gid, spaceId, collId, tsid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set permissions
     * Set permissions
     * @param policyUpdate Policy definition
     */
    public appApiPermissionSetPermissionWithHttpInfo(policyUpdate: PolicyUpdate, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiPermissionSetPermission(policyUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiPermissionSetPermissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set permissions
     * Set permissions
     * @param policyUpdate Policy definition
     */
    public appApiPermissionSetPermission(policyUpdate: PolicyUpdate, _options?: Configuration): Observable<void> {
        return this.appApiPermissionSetPermissionWithHttpInfo(policyUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RawAnnotationsApiRequestFactory, RawAnnotationsApiResponseProcessor} from "../apis/RawAnnotationsApi";
export class ObservableRawAnnotationsApi {
    private requestFactory: RawAnnotationsApiRequestFactory;
    private responseProcessor: RawAnnotationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawAnnotationsApiRequestFactory,
        responseProcessor?: RawAnnotationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawAnnotationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawAnnotationsApiResponseProcessor();
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
    public appApiAnnotationRawAddTargetWithHttpInfo(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawAddTarget(collId, aid, tsid, index, freq, realStart, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawAddTargetWithHttpInfo(rsp)));
            }));
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
    public appApiAnnotationRawAddTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationRawAddTargetWithHttpInfo(collId, aid, tsid, index, freq, realStart, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param collId collection id
     * @param annotation Annotation
     */
    public appApiAnnotationRawCreateWithHttpInfo(collId: string, annotation: Annotation, _options?: Configuration): Observable<HttpInfo<Annotation>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawCreate(collId, annotation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param collId collection id
     * @param annotation Annotation
     */
    public appApiAnnotationRawCreate(collId: string, annotation: Annotation, _options?: Configuration): Observable<Annotation> {
        return this.appApiAnnotationRawCreateWithHttpInfo(collId, annotation, _options).pipe(map((apiResponse: HttpInfo<Annotation>) => apiResponse.data));
    }

    /**
     * 
     * Delete annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawDeleteWithHttpInfo(collId: string, aid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawDelete(collId, aid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawDelete(collId: string, aid: string, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationRawDeleteWithHttpInfo(collId, aid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Get an annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawGetWithHttpInfo(collId: string, aid: string, _options?: Configuration): Observable<HttpInfo<Annotation>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawGet(collId, aid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get an annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public appApiAnnotationRawGet(collId: string, aid: string, _options?: Configuration): Observable<Annotation> {
        return this.appApiAnnotationRawGetWithHttpInfo(collId, aid, _options).pipe(map((apiResponse: HttpInfo<Annotation>) => apiResponse.data));
    }

    /**
     * List annotations
     * List annotations
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiAnnotationRawGetListWithHttpInfo(collId: string, tsid?: string, _options?: Configuration): Observable<HttpInfo<Array<AnnotationSummary>>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawGetList(collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List annotations
     * List annotations
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiAnnotationRawGetList(collId: string, tsid?: string, _options?: Configuration): Observable<Array<AnnotationSummary>> {
        return this.appApiAnnotationRawGetListWithHttpInfo(collId, tsid, _options).pipe(map((apiResponse: HttpInfo<Array<AnnotationSummary>>) => apiResponse.data));
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param collId collection id
     * @param aid annotation id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiAnnotationRawHistoryWithHttpInfo(collId: string, aid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<Annotation>>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawHistory(collId, aid, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param collId collection id
     * @param aid annotation id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiAnnotationRawHistory(collId: string, aid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<Annotation>> {
        return this.appApiAnnotationRawHistoryWithHttpInfo(collId, aid, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<Annotation>>) => apiResponse.data));
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
    public appApiAnnotationRawRemoveTargetWithHttpInfo(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawRemoveTarget(collId, aid, tsid, index, freq, realStart, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawRemoveTargetWithHttpInfo(rsp)));
            }));
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
    public appApiAnnotationRawRemoveTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationRawRemoveTargetWithHttpInfo(collId, aid, tsid, index, freq, realStart, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Update an annotation
     * @param collId collection id
     * @param aid annotation id
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationRawUpdateWithHttpInfo(collId: string, aid: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiAnnotationRawUpdate(collId, aid, annotationUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiAnnotationRawUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update an annotation
     * @param collId collection id
     * @param aid annotation id
     * @param annotationUpdate Annotation
     */
    public appApiAnnotationRawUpdate(collId: string, aid: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Observable<void> {
        return this.appApiAnnotationRawUpdateWithHttpInfo(collId, aid, annotationUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RawApiKeyApiRequestFactory, RawApiKeyApiResponseProcessor} from "../apis/RawApiKeyApi";
export class ObservableRawApiKeyApi {
    private requestFactory: RawApiKeyApiRequestFactory;
    private responseProcessor: RawApiKeyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawApiKeyApiRequestFactory,
        responseProcessor?: RawApiKeyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawApiKeyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawApiKeyApiResponseProcessor();
    }

    /**
     * Create API Key
     * Create API Key
     * @param uid user id
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyRawCreateWithHttpInfo(uid: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Observable<HttpInfo<APIKey>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyRawCreate(uid, name, scopes, expiresIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyRawCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create API Key
     * Create API Key
     * @param uid user id
     * @param name friendly name to display
     * @param scopes api key scopes
     * @param expiresIn number of days to expiry
     */
    public appApiApiKeyRawCreate(uid: string, name: string, scopes?: Array<string>, expiresIn?: number, _options?: Configuration): Observable<APIKey> {
        return this.appApiApiKeyRawCreateWithHttpInfo(uid, name, scopes, expiresIn, _options).pipe(map((apiResponse: HttpInfo<APIKey>) => apiResponse.data));
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param uid user id
     * @param name api key name
     */
    public appApiApiKeyRawDeleteWithHttpInfo(uid: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyRawDelete(uid, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete API Key
     * Delete API Key
     * @param uid user id
     * @param name api key name
     */
    public appApiApiKeyRawDelete(uid: string, name: string, _options?: Configuration): Observable<void> {
        return this.appApiApiKeyRawDeleteWithHttpInfo(uid, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * List API Keys
     * List API Keys
     * @param uid user id
     */
    public appApiApiKeyRawGetListWithHttpInfo(uid: string, _options?: Configuration): Observable<HttpInfo<Array<APIKey>>> {
        const requestContextPromise = this.requestFactory.appApiApiKeyRawGetList(uid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiApiKeyRawGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List API Keys
     * List API Keys
     * @param uid user id
     */
    public appApiApiKeyRawGetList(uid: string, _options?: Configuration): Observable<Array<APIKey>> {
        return this.appApiApiKeyRawGetListWithHttpInfo(uid, _options).pipe(map((apiResponse: HttpInfo<Array<APIKey>>) => apiResponse.data));
    }

}

import { RawCollectionApiRequestFactory, RawCollectionApiResponseProcessor} from "../apis/RawCollectionApi";
export class ObservableRawCollectionApi {
    private requestFactory: RawCollectionApiRequestFactory;
    private responseProcessor: RawCollectionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawCollectionApiRequestFactory,
        responseProcessor?: RawCollectionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawCollectionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawCollectionApiResponseProcessor();
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param collId collection id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionObjectHistoryWithHttpInfo(collId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<CollectionHistorical>>> {
        const requestContextPromise = this.requestFactory.appApiCollectionObjectHistory(collId, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionObjectHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param collId collection id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiCollectionObjectHistory(collId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<CollectionHistorical>> {
        return this.appApiCollectionObjectHistoryWithHttpInfo(collId, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<CollectionHistorical>>) => apiResponse.data));
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param collId collection id
     * @param collectionPermissionPost Collection member details
     */
    public appApiCollectionRawAddPermissionWithHttpInfo(collId: string, collectionPermissionPost?: CollectionPermissionPost, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawAddPermission(collId, collectionPermissionPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawAddPermissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new collection member
     * Add a new collection member
     * @param collId collection id
     * @param collectionPermissionPost Collection member details
     */
    public appApiCollectionRawAddPermission(collId: string, collectionPermissionPost?: CollectionPermissionPost, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionRawAddPermissionWithHttpInfo(collId, collectionPermissionPost, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * Delete a space
     * Delete a collection
     * @param collId collection id
     */
    public appApiCollectionRawDeleteWithHttpInfo(collId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawDelete(collId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space
     * Delete a collection
     * @param collId collection id
     */
    public appApiCollectionRawDelete(collId: string, _options?: Configuration): Observable<void> {
        return this.appApiCollectionRawDeleteWithHttpInfo(collId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param collId collection id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiCollectionRawDeletePermissionWithHttpInfo(collId: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawDeletePermission(collId, type, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawDeletePermissionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param collId collection id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiCollectionRawDeletePermission(collId: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionRawDeletePermissionWithHttpInfo(collId, type, id, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * Get collection details
     * Get collection details
     * @param collId collection id
     */
    public appApiCollectionRawGetWithHttpInfo(collId: string, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawGet(collId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get collection details
     * Get collection details
     * @param collId collection id
     */
    public appApiCollectionRawGet(collId: string, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionRawGetWithHttpInfo(collId, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * 
     * list collections
     * @param spaceId space id
     * @param query Search query
     */
    public appApiCollectionRawGetListWithHttpInfo(spaceId: string, query?: string, _options?: Configuration): Observable<HttpInfo<Array<CollectionSummary>>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawGetList(spaceId, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * list collections
     * @param spaceId space id
     * @param query Search query
     */
    public appApiCollectionRawGetList(spaceId: string, query?: string, _options?: Configuration): Observable<Array<CollectionSummary>> {
        return this.appApiCollectionRawGetListWithHttpInfo(spaceId, query, _options).pipe(map((apiResponse: HttpInfo<Array<CollectionSummary>>) => apiResponse.data));
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceId space id
     * @param collection Definition of collection
     */
    public appApiCollectionRawPostWithHttpInfo(spaceId: string, collection: Collection, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawPost(spaceId, collection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new collection
     * Create a new collection
     * @param spaceId space id
     * @param collection Definition of collection
     */
    public appApiCollectionRawPost(spaceId: string, collection: Collection, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionRawPostWithHttpInfo(spaceId, collection, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param collId collection id
     * @param collection ok
     */
    public appApiCollectionRawPutWithHttpInfo(collId: string, collection: Collection, _options?: Configuration): Observable<HttpInfo<Collection>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawPut(collId, collection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing collection
     * Update an existing collection
     * @param collId collection id
     * @param collection ok
     */
    public appApiCollectionRawPut(collId: string, collection: Collection, _options?: Configuration): Observable<Collection> {
        return this.appApiCollectionRawPutWithHttpInfo(collId, collection, _options).pipe(map((apiResponse: HttpInfo<Collection>) => apiResponse.data));
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param collId collection id
     * @param name new name for the time series
     */
    public appApiCollectionRawUndeleteWithHttpInfo(collId: string, name?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiCollectionRawUndelete(collId, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiCollectionRawUndeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Undelete collection
     * Undelete collection
     * @param collId collection id
     * @param name new name for the time series
     */
    public appApiCollectionRawUndelete(collId: string, name?: string, _options?: Configuration): Observable<void> {
        return this.appApiCollectionRawUndeleteWithHttpInfo(collId, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RawGroupApiRequestFactory, RawGroupApiResponseProcessor} from "../apis/RawGroupApi";
export class ObservableRawGroupApi {
    private requestFactory: RawGroupApiRequestFactory;
    private responseProcessor: RawGroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawGroupApiRequestFactory,
        responseProcessor?: RawGroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawGroupApiResponseProcessor();
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param gid The group\&#39;s unique id.
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupObjectHistoryWithHttpInfo(gid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<GroupHistorical>>> {
        const requestContextPromise = this.requestFactory.appApiGroupObjectHistory(gid, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupObjectHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve history of group object by its id
     * retrieve history of group object by its id
     * @param gid The group\&#39;s unique id.
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiGroupObjectHistory(gid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<GroupHistorical>> {
        return this.appApiGroupObjectHistoryWithHttpInfo(gid, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<GroupHistorical>>) => apiResponse.data));
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param gid The group\&#39;s unique id.
     * @param groupMemberPost group member details
     */
    public appApiGroupRawAddMemberWithHttpInfo(gid: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawAddMember(gid, groupMemberPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawAddMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new group member
     * Add a new group member
     * @param gid The group\&#39;s unique id.
     * @param groupMemberPost group member details
     */
    public appApiGroupRawAddMember(gid: string, groupMemberPost?: GroupMemberPost, _options?: Configuration): Observable<Group> {
        return this.appApiGroupRawAddMemberWithHttpInfo(gid, groupMemberPost, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupRawCreateGroupWithHttpInfo(group?: Group, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawCreateGroup(group, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawCreateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new group
     * Create a new group
     * @param group 
     */
    public appApiGroupRawCreateGroup(group?: Group, _options?: Configuration): Observable<Group> {
        return this.appApiGroupRawCreateGroupWithHttpInfo(group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Delete a group
     * Delete a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawDeleteGroupWithHttpInfo(gid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawDeleteGroup(gid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawDeleteGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a group
     * Delete a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawDeleteGroup(gid: string, _options?: Configuration): Observable<void> {
        return this.appApiGroupRawDeleteGroupWithHttpInfo(gid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param gid The group\&#39;s unique id.
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiGroupRawDeleteMemberWithHttpInfo(gid: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawDeleteMember(gid, type, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawDeleteMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a group member
     * Delete a group member
     * @param gid The group\&#39;s unique id.
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiGroupRawDeleteMember(gid: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<Group> {
        return this.appApiGroupRawDeleteMemberWithHttpInfo(gid, type, id, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawGetGroupWithHttpInfo(gid: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawGetGroup(gid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawGetGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a group
     * Retrieve a group
     * @param gid The group\&#39;s unique id.
     */
    public appApiGroupRawGetGroup(gid: string, _options?: Configuration): Observable<Group> {
        return this.appApiGroupRawGetGroupWithHttpInfo(gid, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param query Search query
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     */
    public appApiGroupRawListGroupsWithHttpInfo(query?: string, member?: string, ownOnly?: boolean, _options?: Configuration): Observable<HttpInfo<Array<GroupSummary>>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawListGroups(query, member, ownOnly, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawListGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve all groups for a member
     * Retrieve all groups for a member
     * @param query Search query
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     */
    public appApiGroupRawListGroups(query?: string, member?: string, ownOnly?: boolean, _options?: Configuration): Observable<Array<GroupSummary>> {
        return this.appApiGroupRawListGroupsWithHttpInfo(query, member, ownOnly, _options).pipe(map((apiResponse: HttpInfo<Array<GroupSummary>>) => apiResponse.data));
    }

    /**
     * Undelete group
     * Undelete group
     * @param gid The group\&#39;s unique id.
     * @param groupname new name for group
     */
    public appApiGroupRawUndeleteWithHttpInfo(gid: string, groupname?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawUndelete(gid, groupname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawUndeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Undelete group
     * Undelete group
     * @param gid The group\&#39;s unique id.
     * @param groupname new name for group
     */
    public appApiGroupRawUndelete(gid: string, groupname?: string, _options?: Configuration): Observable<void> {
        return this.appApiGroupRawUndeleteWithHttpInfo(gid, groupname, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a group
     * Update a group
     * @param gid The group\&#39;s unique id.
     * @param group an updated group
     */
    public appApiGroupRawUpdateGroupWithHttpInfo(gid: string, group?: Group, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.appApiGroupRawUpdateGroup(gid, group, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiGroupRawUpdateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a group
     * Update a group
     * @param gid The group\&#39;s unique id.
     * @param group an updated group
     */
    public appApiGroupRawUpdateGroup(gid: string, group?: Group, _options?: Configuration): Observable<Group> {
        return this.appApiGroupRawUpdateGroupWithHttpInfo(gid, group, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

}

import { RawSpaceApiRequestFactory, RawSpaceApiResponseProcessor} from "../apis/RawSpaceApi";
export class ObservableRawSpaceApi {
    private requestFactory: RawSpaceApiRequestFactory;
    private responseProcessor: RawSpaceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawSpaceApiRequestFactory,
        responseProcessor?: RawSpaceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawSpaceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawSpaceApiResponseProcessor();
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param spaceId space id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceObjectHistoryWithHttpInfo(spaceId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<SpaceHistorical>>> {
        const requestContextPromise = this.requestFactory.appApiSpaceObjectHistory(spaceId, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceObjectHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve history of space object by its id, space_id
     * retrieve history of space object by its id, space_id
     * @param spaceId space id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceObjectHistory(spaceId: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<SpaceHistorical>> {
        return this.appApiSpaceObjectHistoryWithHttpInfo(spaceId, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<SpaceHistorical>>) => apiResponse.data));
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param spaceId space id
     * @param spaceMemberPost space member details
     */
    public appApiSpaceRawAddMemberWithHttpInfo(spaceId: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawAddMember(spaceId, spaceMemberPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawAddMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new space member
     * Add a new space member
     * @param spaceId space id
     * @param spaceMemberPost space member details
     */
    public appApiSpaceRawAddMember(spaceId: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceRawAddMemberWithHttpInfo(spaceId, spaceMemberPost, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceId space id
     */
    public appApiSpaceRawDeleteWithHttpInfo(spaceId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawDelete(spaceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceId space id
     */
    public appApiSpaceRawDelete(spaceId: string, _options?: Configuration): Observable<void> {
        return this.appApiSpaceRawDeleteWithHttpInfo(spaceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceId space id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiSpaceRawDeleteMemberWithHttpInfo(spaceId: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawDeleteMember(spaceId, type, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawDeleteMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceId space id
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param id id
     */
    public appApiSpaceRawDeleteMember(spaceId: string, type: 'u' | 'g', id: string, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceRawDeleteMemberWithHttpInfo(spaceId, type, id, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * Get space details
     * Get space details
     * @param spaceId space id
     */
    public appApiSpaceRawGetWithHttpInfo(spaceId: string, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawGet(spaceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get space details
     * Get space details
     * @param spaceId space id
     */
    public appApiSpaceRawGet(spaceId: string, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceRawGetWithHttpInfo(spaceId, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * list spaces
     * list spaces
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     * @param visibility visibility
     * @param query Search query
     */
    public appApiSpaceRawGetListWithHttpInfo(member?: string, ownOnly?: boolean, visibility?: Visibility, query?: string, _options?: Configuration): Observable<HttpInfo<Array<Space>>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawGetList(member, ownOnly, visibility, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * list spaces
     * list spaces
     * @param member a member of group/space/collection/etc.
     * @param ownOnly ownOnly
     * @param visibility visibility
     * @param query Search query
     */
    public appApiSpaceRawGetList(member?: string, ownOnly?: boolean, visibility?: Visibility, query?: string, _options?: Configuration): Observable<Array<Space>> {
        return this.appApiSpaceRawGetListWithHttpInfo(member, ownOnly, visibility, query, _options).pipe(map((apiResponse: HttpInfo<Array<Space>>) => apiResponse.data));
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpaceRawPostWithHttpInfo(space: Space, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawPost(space, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpaceRawPost(space: Space, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceRawPostWithHttpInfo(space, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * 
     * Update an existing space
     * @param spaceId space id
     * @param space Optional description in *Markdown*
     */
    public appApiSpaceRawPutWithHttpInfo(spaceId: string, space: Space, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawPut(spaceId, space, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update an existing space
     * @param spaceId space id
     * @param space Optional description in *Markdown*
     */
    public appApiSpaceRawPut(spaceId: string, space: Space, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceRawPutWithHttpInfo(spaceId, space, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * Undelete space
     * Undelete space
     * @param spaceId space id
     * @param name new name for space
     */
    public appApiSpaceRawUndeleteWithHttpInfo(spaceId: string, name?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiSpaceRawUndelete(spaceId, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceRawUndeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Undelete space
     * Undelete space
     * @param spaceId space id
     * @param name new name for space
     */
    public appApiSpaceRawUndelete(spaceId: string, name?: string, _options?: Configuration): Observable<void> {
        return this.appApiSpaceRawUndeleteWithHttpInfo(spaceId, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RawTimeSeriesApiRequestFactory, RawTimeSeriesApiResponseProcessor} from "../apis/RawTimeSeriesApi";
export class ObservableRawTimeSeriesApi {
    private requestFactory: RawTimeSeriesApiRequestFactory;
    private responseProcessor: RawTimeSeriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawTimeSeriesApiRequestFactory,
        responseProcessor?: RawTimeSeriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawTimeSeriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawTimeSeriesApiResponseProcessor();
    }

    /**
     * delete time series
     * Delete a time series
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawDeleteWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawDelete(collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete time series
     * Delete a time series
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawDelete(collId: string, tsid: string, _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesRawDeleteWithHttpInfo(collId, tsid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawGetWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Observable<HttpInfo<TimeSeries>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawGet(collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve time series info
     * Retrieve time series info
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawGet(collId: string, tsid: string, _options?: Configuration): Observable<TimeSeries> {
        return this.appApiTimeseriesRawGetWithHttpInfo(collId, tsid, _options).pipe(map((apiResponse: HttpInfo<TimeSeries>) => apiResponse.data));
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param collId collection id
     * @param tsids array of time series id
     */
    public appApiTimeseriesRawGetListWithHttpInfo(collId: string, tsids?: Array<string>, _options?: Configuration): Observable<HttpInfo<Array<TimeSeriesSummary>>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawGetList(collId, tsids, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param collId collection id
     * @param tsids array of time series id
     */
    public appApiTimeseriesRawGetList(collId: string, tsids?: Array<string>, _options?: Configuration): Observable<Array<TimeSeriesSummary>> {
        return this.appApiTimeseriesRawGetListWithHttpInfo(collId, tsids, _options).pipe(map((apiResponse: HttpInfo<Array<TimeSeriesSummary>>) => apiResponse.data));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesRawObjectHistoryWithHttpInfo(collId: string, tsid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawObjectHistory(collId, tsid, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawObjectHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiTimeseriesRawObjectHistory(collId: string, tsid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<string>> {
        return this.appApiTimeseriesRawObjectHistoryWithHttpInfo(collId, tsid, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawPermanentDeleteWithHttpInfo(collId: string, tsid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawPermanentDelete(collId, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawPermanentDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     */
    public appApiTimeseriesRawPermanentDelete(collId: string, tsid: string, _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesRawPermanentDeleteWithHttpInfo(collId, tsid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Create a new time series
     * @param collId collection id
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesRawPostWithHttpInfo(collId: string, timeSeries: TimeSeries, _options?: Configuration): Observable<HttpInfo<TimeSeriesCore>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawPost(collId, timeSeries, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create a new time series
     * @param collId collection id
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesRawPost(collId: string, timeSeries: TimeSeries, _options?: Configuration): Observable<TimeSeriesCore> {
        return this.appApiTimeseriesRawPostWithHttpInfo(collId, timeSeries, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesCore>) => apiResponse.data));
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param collId collection id
     * @param tsid time series id
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesRawPutWithHttpInfo(collId: string, tsid: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Observable<HttpInfo<TimeSeries>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawPut(collId, tsid, timeSeriesUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param collId collection id
     * @param tsid time series id
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesRawPut(collId: string, tsid: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Observable<TimeSeries> {
        return this.appApiTimeseriesRawPutWithHttpInfo(collId, tsid, timeSeriesUpdate, _options).pipe(map((apiResponse: HttpInfo<TimeSeries>) => apiResponse.data));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param name new name for the time series
     */
    public appApiTimeseriesRawUndeleteWithHttpInfo(collId: string, tsid: string, name?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesRawUndelete(collId, tsid, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesRawUndeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param name new name for the time series
     */
    public appApiTimeseriesRawUndelete(collId: string, tsid: string, name?: string, _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesRawUndeleteWithHttpInfo(collId, tsid, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RawTimeSeriesDataApiRequestFactory, RawTimeSeriesDataApiResponseProcessor} from "../apis/RawTimeSeriesDataApi";
export class ObservableRawTimeSeriesDataApi {
    private requestFactory: RawTimeSeriesDataApiRequestFactory;
    private responseProcessor: RawTimeSeriesDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawTimeSeriesDataApiRequestFactory,
        responseProcessor?: RawTimeSeriesDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawTimeSeriesDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawTimeSeriesDataApiResponseProcessor();
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param collId collection id
     * @param index time series index
     * @param indexFormat 
     * @param tsid time series id
     */
    public appApiRawTimeseriesDataDeleteWithHttpInfo(collId: string, index: Array<number>, indexFormat: IndexFormat, tsid?: string, _options?: Configuration): Observable<HttpInfo<RawDataDeleteResponse>> {
        const requestContextPromise = this.requestFactory.appApiRawTimeseriesDataDelete(collId, index, indexFormat, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiRawTimeseriesDataDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param collId collection id
     * @param index time series index
     * @param indexFormat 
     * @param tsid time series id
     */
    public appApiRawTimeseriesDataDelete(collId: string, index: Array<number>, indexFormat: IndexFormat, tsid?: string, _options?: Configuration): Observable<RawDataDeleteResponse> {
        return this.appApiRawTimeseriesDataDeleteWithHttpInfo(collId, index, indexFormat, tsid, _options).pipe(map((apiResponse: HttpInfo<RawDataDeleteResponse>) => apiResponse.data));
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param collId collection id
     * @param tsids array of tsid\&#39;s in the collection, collId
     * @param realtime real time to retrieve the historical data
     */
    public appApiRawTimeseriesDataGetWithHttpInfo(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Observable<HttpInfo<{ [key: string]: RawSingleTimeSeriesData; }>> {
        const requestContextPromise = this.requestFactory.appApiRawTimeseriesDataGet(collId, tsids, realtime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiRawTimeseriesDataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param collId collection id
     * @param tsids array of tsid\&#39;s in the collection, collId
     * @param realtime real time to retrieve the historical data
     */
    public appApiRawTimeseriesDataGet(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Observable<{ [key: string]: RawSingleTimeSeriesData; }> {
        return this.appApiRawTimeseriesDataGetWithHttpInfo(collId, tsids, realtime, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: RawSingleTimeSeriesData; }>) => apiResponse.data));
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param collId collection id
     * @param method data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @param rawDataPutRequest time series data
     * @param realtime real time at which data was written. This only works if there is no observations written after this real time
     */
    public appApiRawTimeseriesDataPutWithHttpInfo(collId: string, method: 'overwrite' | 'update' | 'append', rawDataPutRequest: RawDataPutRequest, realtime?: Date, _options?: Configuration): Observable<HttpInfo<RawDataPutResponse>> {
        const requestContextPromise = this.requestFactory.appApiRawTimeseriesDataPut(collId, method, rawDataPutRequest, realtime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiRawTimeseriesDataPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param collId collection id
     * @param method data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @param rawDataPutRequest time series data
     * @param realtime real time at which data was written. This only works if there is no observations written after this real time
     */
    public appApiRawTimeseriesDataPut(collId: string, method: 'overwrite' | 'update' | 'append', rawDataPutRequest: RawDataPutRequest, realtime?: Date, _options?: Configuration): Observable<RawDataPutResponse> {
        return this.appApiRawTimeseriesDataPutWithHttpInfo(collId, method, rawDataPutRequest, realtime, _options).pipe(map((apiResponse: HttpInfo<RawDataPutResponse>) => apiResponse.data));
    }

}

import { RawUploadApiRequestFactory, RawUploadApiResponseProcessor} from "../apis/RawUploadApi";
export class ObservableRawUploadApi {
    private requestFactory: RawUploadApiRequestFactory;
    private responseProcessor: RawUploadApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawUploadApiRequestFactory,
        responseProcessor?: RawUploadApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawUploadApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawUploadApiResponseProcessor();
    }

    /**
     * commit staging
     * commit staging
     * @param uploadId upload_id
     */
    public appApiUploadCommitWithHttpInfo(uploadId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUploadCommit(uploadId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadCommitWithHttpInfo(rsp)));
            }));
    }

    /**
     * commit staging
     * commit staging
     * @param uploadId upload_id
     */
    public appApiUploadCommit(uploadId: string, _options?: Configuration): Observable<void> {
        return this.appApiUploadCommitWithHttpInfo(uploadId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     */
    public appApiUploadConfirmUploadWithHttpInfo(uploadId: string, _options?: Configuration): Observable<HttpInfo<Upload>> {
        const requestContextPromise = this.requestFactory.appApiUploadConfirmUpload(uploadId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadConfirmUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     */
    public appApiUploadConfirmUpload(uploadId: string, _options?: Configuration): Observable<Upload> {
        return this.appApiUploadConfirmUploadWithHttpInfo(uploadId, _options).pipe(map((apiResponse: HttpInfo<Upload>) => apiResponse.data));
    }

    /**
     * create a new upload
     * create a new upload
     * @param collId collection id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadCreateWithHttpInfo(collId: string, filename?: string, fileType?: string, _options?: Configuration): Observable<HttpInfo<Upload>> {
        const requestContextPromise = this.requestFactory.appApiUploadCreate(collId, filename, fileType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a new upload
     * create a new upload
     * @param collId collection id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadCreate(collId: string, filename?: string, fileType?: string, _options?: Configuration): Observable<Upload> {
        return this.appApiUploadCreateWithHttpInfo(collId, filename, fileType, _options).pipe(map((apiResponse: HttpInfo<Upload>) => apiResponse.data));
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param uploadId upload_id
     */
    public appApiUploadGetWithHttpInfo(uploadId: string, _options?: Configuration): Observable<HttpInfo<Upload>> {
        const requestContextPromise = this.requestFactory.appApiUploadGet(uploadId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve history of group object by its id
     * retrieve upload object
     * @param uploadId upload_id
     */
    public appApiUploadGet(uploadId: string, _options?: Configuration): Observable<Upload> {
        return this.appApiUploadGetWithHttpInfo(uploadId, _options).pipe(map((apiResponse: HttpInfo<Upload>) => apiResponse.data));
    }

    /**
     * list upload objects
     * list upload objects
     * @param collId collection id
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUploadGetListWithHttpInfo(collId?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<Upload>> {
        const requestContextPromise = this.requestFactory.appApiUploadGetList(collId, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * list upload objects
     * list upload objects
     * @param collId collection id
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUploadGetList(collId?: string, offset?: number, limit?: number, _options?: Configuration): Observable<Upload> {
        return this.appApiUploadGetListWithHttpInfo(collId, offset, limit, _options).pipe(map((apiResponse: HttpInfo<Upload>) => apiResponse.data));
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param uploadId upload_id
     */
    public appApiUploadGetProcessedWithHttpInfo(uploadId: string, _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.appApiUploadGetProcessed(uploadId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadGetProcessedWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve processed data
     * retrieve processed data
     * @param uploadId upload_id
     */
    public appApiUploadGetProcessed(uploadId: string, _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.appApiUploadGetProcessedWithHttpInfo(uploadId, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param uploadId upload_id
     */
    public appApiUploadGetStagingWithHttpInfo(uploadId: string, _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.appApiUploadGetStaging(uploadId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadGetStagingWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve staging data
     * retrieve staging data
     * @param uploadId upload_id
     */
    public appApiUploadGetStaging(uploadId: string, _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.appApiUploadGetStagingWithHttpInfo(uploadId, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * save processing results
     * save processing results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPostProcessedWithHttpInfo(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUploadPostProcessed(uploadId, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadPostProcessedWithHttpInfo(rsp)));
            }));
    }

    /**
     * save processing results
     * save processing results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPostProcessed(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        return this.appApiUploadPostProcessedWithHttpInfo(uploadId, requestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * save staging results
     * save staging results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPutStagingWithHttpInfo(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUploadPutStaging(uploadId, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadPutStagingWithHttpInfo(rsp)));
            }));
    }

    /**
     * save staging results
     * save staging results
     * @param uploadId upload_id
     * @param requestBody Time series updated info
     */
    public appApiUploadPutStaging(uploadId: string, requestBody: { [key: string]: any; }, _options?: Configuration): Observable<void> {
        return this.appApiUploadPutStagingWithHttpInfo(uploadId, requestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadRegenerateUrlWithHttpInfo(uploadId: string, filename?: string, fileType?: string, _options?: Configuration): Observable<HttpInfo<Upload>> {
        const requestContextPromise = this.requestFactory.appApiUploadRegenerateUrl(uploadId, filename, fileType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUploadRegenerateUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * retrieve history of group object by its id
     * regenerate upload url
     * @param uploadId upload_id
     * @param filename 
     * @param fileType 
     */
    public appApiUploadRegenerateUrl(uploadId: string, filename?: string, fileType?: string, _options?: Configuration): Observable<Upload> {
        return this.appApiUploadRegenerateUrlWithHttpInfo(uploadId, filename, fileType, _options).pipe(map((apiResponse: HttpInfo<Upload>) => apiResponse.data));
    }

}

import { RawUserApiRequestFactory, RawUserApiResponseProcessor} from "../apis/RawUserApi";
export class ObservableRawUserApi {
    private requestFactory: RawUserApiRequestFactory;
    private responseProcessor: RawUserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawUserApiRequestFactory,
        responseProcessor?: RawUserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawUserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawUserApiResponseProcessor();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param uid user id
     * @param newPassword new password
     */
    public appApiUserRawChangePasswordWithHttpInfo(uid: string, newPassword: NewPassword, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserRawChangePassword(uid, newPassword, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawChangePasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param uid user id
     * @param newPassword new password
     */
    public appApiUserRawChangePassword(uid: string, newPassword: NewPassword, _options?: Configuration): Observable<void> {
        return this.appApiUserRawChangePasswordWithHttpInfo(uid, newPassword, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserRawCreateWithHttpInfo(userPost?: UserPost, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserRawCreate(userPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserRawCreate(userPost?: UserPost, _options?: Configuration): Observable<User> {
        return this.appApiUserRawCreateWithHttpInfo(userPost, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param uid user id
     */
    public appApiUserRawDeleteWithHttpInfo(uid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserRawDelete(uid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param uid user id
     */
    public appApiUserRawDelete(uid: string, _options?: Configuration): Observable<void> {
        return this.appApiUserRawDeleteWithHttpInfo(uid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param uid user id
     */
    public appApiUserRawGetWithHttpInfo(uid: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserRawGet(uid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user by uid
     * Get user by uid
     * @param uid user id
     */
    public appApiUserRawGet(uid: string, _options?: Configuration): Observable<User> {
        return this.appApiUserRawGetWithHttpInfo(uid, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * get user permissions
     * get user permissions
     * @param uid user id
     */
    public appApiUserRawGetPermissionsWithHttpInfo(uid: string, _options?: Configuration): Observable<HttpInfo<UserPermissions>> {
        const requestContextPromise = this.requestFactory.appApiUserRawGetPermissions(uid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawGetPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get user permissions
     * get user permissions
     * @param uid user id
     */
    public appApiUserRawGetPermissions(uid: string, _options?: Configuration): Observable<UserPermissions> {
        return this.appApiUserRawGetPermissionsWithHttpInfo(uid, _options).pipe(map((apiResponse: HttpInfo<UserPermissions>) => apiResponse.data));
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserRawListUsersWithHttpInfo(query?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.appApiUserRawListUsers(query, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawListUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserRawListUsers(query?: string, offset?: number, limit?: number, _options?: Configuration): Observable<Array<User>> {
        return this.appApiUserRawListUsersWithHttpInfo(query, offset, limit, _options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param uid user id
     * @param userUpdate Updated user object
     */
    public appApiUserRawUpdateWithHttpInfo(uid: string, userUpdate?: UserUpdate, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserRawUpdate(uid, userUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param uid user id
     * @param userUpdate Updated user object
     */
    public appApiUserRawUpdate(uid: string, userUpdate?: UserUpdate, _options?: Configuration): Observable<User> {
        return this.appApiUserRawUpdateWithHttpInfo(uid, userUpdate, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * update user permissions
     * update user permissions
     * @param uid user id
     * @param isAdmin has user admin permissions
     * @param canCreateGroup can user create group
     * @param canCreateSpace can user create space
     */
    public appApiUserRawUpdatePermissionsWithHttpInfo(uid: string, isAdmin?: boolean, canCreateGroup?: boolean, canCreateSpace?: boolean, _options?: Configuration): Observable<HttpInfo<UserPermissions>> {
        const requestContextPromise = this.requestFactory.appApiUserRawUpdatePermissions(uid, isAdmin, canCreateGroup, canCreateSpace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRawUpdatePermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * update user permissions
     * update user permissions
     * @param uid user id
     * @param isAdmin has user admin permissions
     * @param canCreateGroup can user create group
     * @param canCreateSpace can user create space
     */
    public appApiUserRawUpdatePermissions(uid: string, isAdmin?: boolean, canCreateGroup?: boolean, canCreateSpace?: boolean, _options?: Configuration): Observable<UserPermissions> {
        return this.appApiUserRawUpdatePermissionsWithHttpInfo(uid, isAdmin, canCreateGroup, canCreateSpace, _options).pipe(map((apiResponse: HttpInfo<UserPermissions>) => apiResponse.data));
    }

}

import { RawVintageApiRequestFactory, RawVintageApiResponseProcessor} from "../apis/RawVintageApi";
export class ObservableRawVintageApi {
    private requestFactory: RawVintageApiRequestFactory;
    private responseProcessor: RawVintageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RawVintageApiRequestFactory,
        responseProcessor?: RawVintageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RawVintageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RawVintageApiResponseProcessor();
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param collId collection id
     * @param tsid time series id
     * @param realtime realtime when values were valid
     */
    public appApiVintagesGetListRawWithHttpInfo(collId: string, tsid?: string, realtime?: Date, _options?: Configuration): Observable<HttpInfo<Array<VintageSummary>>> {
        const requestContextPromise = this.requestFactory.appApiVintagesGetListRaw(collId, tsid, realtime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesGetListRawWithHttpInfo(rsp)));
            }));
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection 
     * @param collId collection id
     * @param tsid time series id
     * @param realtime realtime when values were valid
     */
    public appApiVintagesGetListRaw(collId: string, tsid?: string, realtime?: Date, _options?: Configuration): Observable<Array<VintageSummary>> {
        return this.appApiVintagesGetListRawWithHttpInfo(collId, tsid, realtime, _options).pipe(map((apiResponse: HttpInfo<Array<VintageSummary>>) => apiResponse.data));
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param collId collection id
     * @param vid vintage id
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetRawWithHttpInfo(collId: string, vid: string, meta?: boolean, _options?: Configuration): Observable<HttpInfo<Vintage>> {
        const requestContextPromise = this.requestFactory.appApiVintagesGetRaw(collId, vid, meta, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesGetRawWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param collId collection id
     * @param vid vintage id
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetRaw(collId: string, vid: string, meta?: boolean, _options?: Configuration): Observable<Vintage> {
        return this.appApiVintagesGetRawWithHttpInfo(collId, vid, meta, _options).pipe(map((apiResponse: HttpInfo<Vintage>) => apiResponse.data));
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param collId collection id
     * @param vid vintage id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiVintagesObjectHistoryRawWithHttpInfo(collId: string, vid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<VintageHistorical>>> {
        const requestContextPromise = this.requestFactory.appApiVintagesObjectHistoryRaw(collId, vid, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesObjectHistoryRawWithHttpInfo(rsp)));
            }));
    }

    /**
     * History of vintage by tag id
     * History of vintage by tag id
     * @param collId collection id
     * @param vid vintage id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiVintagesObjectHistoryRaw(collId: string, vid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<VintageHistorical>> {
        return this.appApiVintagesObjectHistoryRawWithHttpInfo(collId, vid, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<VintageHistorical>>) => apiResponse.data));
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param collId collection id
     * @param vid vintage id
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutRawWithHttpInfo(collId: string, vid: string, vintageUpdate: VintageUpdate, _options?: Configuration): Observable<HttpInfo<VintageSummary>> {
        const requestContextPromise = this.requestFactory.appApiVintagesPutRaw(collId, vid, vintageUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesPutRawWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param collId collection id
     * @param vid vintage id
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutRaw(collId: string, vid: string, vintageUpdate: VintageUpdate, _options?: Configuration): Observable<VintageSummary> {
        return this.appApiVintagesPutRawWithHttpInfo(collId, vid, vintageUpdate, _options).pipe(map((apiResponse: HttpInfo<VintageSummary>) => apiResponse.data));
    }

}

import { SpaceApiRequestFactory, SpaceApiResponseProcessor} from "../apis/SpaceApi";
export class ObservableSpaceApi {
    private requestFactory: SpaceApiRequestFactory;
    private responseProcessor: SpaceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SpaceApiRequestFactory,
        responseProcessor?: SpaceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SpaceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SpaceApiResponseProcessor();
    }

    /**
     * Add a space member
     * Add a space member
     * @param spaceName space name
     * @param spaceMemberPost 
     */
    public appApiSpaceAddMemberWithHttpInfo(spaceName: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceAddMember(spaceName, spaceMemberPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceAddMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a space member
     * Add a space member
     * @param spaceName space name
     * @param spaceMemberPost 
     */
    public appApiSpaceAddMember(spaceName: string, spaceMemberPost?: SpaceMemberPost, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceAddMemberWithHttpInfo(spaceName, spaceMemberPost, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceName space name
     */
    public appApiSpaceDeleteWithHttpInfo(spaceName: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiSpaceDelete(spaceName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space
     * Delete a space
     * @param spaceName space name
     */
    public appApiSpaceDelete(spaceName: string, _options?: Configuration): Observable<void> {
        return this.appApiSpaceDeleteWithHttpInfo(spaceName, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceName space name
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiSpaceDeleteMemberWithHttpInfo(spaceName: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceDeleteMember(spaceName, type, memberName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceDeleteMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a space member
     * Delete a space member
     * @param spaceName space name
     * @param type | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group 
     * @param memberName username or groupname
     */
    public appApiSpaceDeleteMember(spaceName: string, type: 'u' | 'g', memberName: string, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceDeleteMemberWithHttpInfo(spaceName, type, memberName, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * Get space details
     * Get space details
     * @param spaceName space name
     */
    public appApiSpaceGetWithHttpInfo(spaceName: string, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpaceGet(spaceName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get space details
     * Get space details
     * @param spaceName space name
     */
    public appApiSpaceGet(spaceName: string, _options?: Configuration): Observable<Space> {
        return this.appApiSpaceGetWithHttpInfo(spaceName, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * 
     * list spaces
     * @param query Search query
     */
    public appApiSpaceGetListWithHttpInfo(query?: string, _options?: Configuration): Observable<HttpInfo<Array<Space>>> {
        const requestContextPromise = this.requestFactory.appApiSpaceGetList(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * list spaces
     * @param query Search query
     */
    public appApiSpaceGetList(query?: string, _options?: Configuration): Observable<Array<Space>> {
        return this.appApiSpaceGetListWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Space>>) => apiResponse.data));
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param spaceName space name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceNameHistoryWithHttpInfo(spaceName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.appApiSpaceNameHistory(spaceName, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpaceNameHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get historical values for space details
     * Get historical values for space details
     * @param spaceName space name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public appApiSpaceNameHistory(spaceName: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<string>> {
        return this.appApiSpaceNameHistoryWithHttpInfo(spaceName, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpacePostWithHttpInfo(space: Space, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpacePost(space, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpacePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new space
     * Create a new space
     * @param space Space definition
     */
    public appApiSpacePost(space: Space, _options?: Configuration): Observable<Space> {
        return this.appApiSpacePostWithHttpInfo(space, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

    /**
     * 
     * Update an existing space
     * @param spaceName space name
     * @param space Optional description in *Markdown*
     */
    public appApiSpacePutWithHttpInfo(spaceName: string, space: Space, _options?: Configuration): Observable<HttpInfo<Space>> {
        const requestContextPromise = this.requestFactory.appApiSpacePut(spaceName, space, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiSpacePutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update an existing space
     * @param spaceName space name
     * @param space Optional description in *Markdown*
     */
    public appApiSpacePut(spaceName: string, space: Space, _options?: Configuration): Observable<Space> {
        return this.appApiSpacePutWithHttpInfo(spaceName, space, _options).pipe(map((apiResponse: HttpInfo<Space>) => apiResponse.data));
    }

}

import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";
export class ObservableTimeSeriesApi {
    private requestFactory: TimeSeriesApiRequestFactory;
    private responseProcessor: TimeSeriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesApiRequestFactory,
        responseProcessor?: TimeSeriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesApiResponseProcessor();
    }

    /**
     * delete time series
     * Delete a time series
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesDeleteWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesDelete(spaceName, collName, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete time series
     * Delete a time series
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesDelete(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesDeleteWithHttpInfo(spaceName, collName, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * 
     * Retrieve time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesGetWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<HttpInfo<TimeSeries>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesGet(spaceName, collName, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Retrieve time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public appApiTimeseriesGet(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<TimeSeries> {
        return this.appApiTimeseriesGetWithHttpInfo(spaceName, collName, name, _options).pipe(map((apiResponse: HttpInfo<TimeSeries>) => apiResponse.data));
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiTimeseriesGetListWithHttpInfo(spaceName: string, collName: string, _options?: Configuration): Observable<HttpInfo<Array<TimeSeriesSummary>>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesGetList(spaceName, collName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List time series in a collection
     * List time series in a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public appApiTimeseriesGetList(spaceName: string, collName: string, _options?: Configuration): Observable<Array<TimeSeriesSummary>> {
        return this.appApiTimeseriesGetListWithHttpInfo(spaceName, collName, _options).pipe(map((apiResponse: HttpInfo<Array<TimeSeriesSummary>>) => apiResponse.data));
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
    public appApiTimeseriesNameHistoryWithHttpInfo(spaceName: string, collName: string, name: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesNameHistory(spaceName, collName, name, realStart, realEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesNameHistoryWithHttpInfo(rsp)));
            }));
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
    public appApiTimeseriesNameHistory(spaceName: string, collName: string, name: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Observable<Array<string>> {
        return this.appApiTimeseriesNameHistoryWithHttpInfo(spaceName, collName, name, realStart, realEnd, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * 
     * Create a new time series
     * @param spaceName space name
     * @param collName collection name
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesPostWithHttpInfo(spaceName: string, collName: string, timeSeries: TimeSeries, _options?: Configuration): Observable<HttpInfo<TimeSeriesCore>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesPost(spaceName, collName, timeSeries, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create a new time series
     * @param spaceName space name
     * @param collName collection name
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public appApiTimeseriesPost(spaceName: string, collName: string, timeSeries: TimeSeries, _options?: Configuration): Observable<TimeSeriesCore> {
        return this.appApiTimeseriesPostWithHttpInfo(spaceName, collName, timeSeries, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesCore>) => apiResponse.data));
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesPutWithHttpInfo(spaceName: string, collName: string, name: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Observable<HttpInfo<TimeSeries>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesPut(spaceName, collName, name, timeSeriesUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param timeSeriesUpdate Time series updated info
     */
    public appApiTimeseriesPut(spaceName: string, collName: string, name: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Observable<TimeSeries> {
        return this.appApiTimeseriesPutWithHttpInfo(spaceName, collName, name, timeSeriesUpdate, _options).pipe(map((apiResponse: HttpInfo<TimeSeries>) => apiResponse.data));
    }

}

import { TimeSeriesDataApiRequestFactory, TimeSeriesDataApiResponseProcessor} from "../apis/TimeSeriesDataApi";
export class ObservableTimeSeriesDataApi {
    private requestFactory: TimeSeriesDataApiRequestFactory;
    private responseProcessor: TimeSeriesDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesDataApiRequestFactory,
        responseProcessor?: TimeSeriesDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesDataApiResponseProcessor();
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
    public appApiTimeseriesDataDeleteWithHttpInfo(spaceName: string, collName: string, names: Array<string>, index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>, format?: 'string' | 'iso' | 's' | 'ms' | 'us', _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesDataDelete(spaceName, collName, names, index, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesDataDeleteWithHttpInfo(rsp)));
            }));
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
    public appApiTimeseriesDataDelete(spaceName: string, collName: string, names: Array<string>, index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>, format?: 'string' | 'iso' | 's' | 'ms' | 'us', _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesDataDeleteWithHttpInfo(spaceName, collName, names, index, format, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public appApiTimeseriesDataGetWithHttpInfo(series: TSIList, periodStart?: string, periodEnd?: string, transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm', freq?: string, toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min', toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube', missingMethod?: 'none' | 'auto' | 'previous' | 'zero', merge?: boolean, realtime?: Date, vintage?: string, output?: 'json' | 'csv' | 'excel', outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO', outputIndexFormat?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<SingleTimeSeriesData>>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesDataGet(series, periodStart, periodEnd, transform, freq, toLowerMethod, toHigherMethod, missingMethod, merge, realtime, vintage, output, outputIndexType, outputIndexFormat, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesDataGetWithHttpInfo(rsp)));
            }));
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
    public appApiTimeseriesDataGet(series: TSIList, periodStart?: string, periodEnd?: string, transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm', freq?: string, toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min', toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube', missingMethod?: 'none' | 'auto' | 'previous' | 'zero', merge?: boolean, realtime?: Date, vintage?: string, output?: 'json' | 'csv' | 'excel', outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO', outputIndexFormat?: string, offset?: number, limit?: number, _options?: Configuration): Observable<Array<SingleTimeSeriesData>> {
        return this.appApiTimeseriesDataGetWithHttpInfo(series, periodStart, periodEnd, transform, freq, toLowerMethod, toHigherMethod, missingMethod, merge, realtime, vintage, output, outputIndexType, outputIndexFormat, offset, limit, _options).pipe(map((apiResponse: HttpInfo<Array<SingleTimeSeriesData>>) => apiResponse.data));
    }

    /**
     * Save observations of time series
     * Save observations
     * @param spaceName space name
     * @param collName collection name
     * @param singleTimeSeriesData time series data
     */
    public appApiTimeseriesDataPutWithHttpInfo(spaceName: string, collName: string, singleTimeSeriesData: Array<SingleTimeSeriesData>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiTimeseriesDataPut(spaceName, collName, singleTimeSeriesData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiTimeseriesDataPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Save observations of time series
     * Save observations
     * @param spaceName space name
     * @param collName collection name
     * @param singleTimeSeriesData time series data
     */
    public appApiTimeseriesDataPut(spaceName: string, collName: string, singleTimeSeriesData: Array<SingleTimeSeriesData>, _options?: Configuration): Observable<void> {
        return this.appApiTimeseriesDataPutWithHttpInfo(spaceName, collName, singleTimeSeriesData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param username username
     * @param newPassword new password
     */
    public appApiUserChangePasswordWithHttpInfo(username: string, newPassword: NewPassword, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserChangePassword(username, newPassword, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserChangePasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change password. Authentication via password only.
     * Change password.
     * @param username username
     * @param newPassword new password
     */
    public appApiUserChangePassword(username: string, newPassword: NewPassword, _options?: Configuration): Observable<void> {
        return this.appApiUserChangePasswordWithHttpInfo(username, newPassword, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserCreateWithHttpInfo(userPost?: UserPost, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserCreate(userPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param userPost 
     */
    public appApiUserCreate(userPost?: UserPost, _options?: Configuration): Observable<User> {
        return this.appApiUserCreateWithHttpInfo(userPost, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param username username
     */
    public appApiUserDeleteWithHttpInfo(username: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserDelete(username, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param username username
     */
    public appApiUserDelete(username: string, _options?: Configuration): Observable<void> {
        return this.appApiUserDeleteWithHttpInfo(username, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param username username
     */
    public appApiUserGetWithHttpInfo(username: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserGet(username, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user by user name
     * Get user by user name
     * @param username username
     */
    public appApiUserGet(username: string, _options?: Configuration): Observable<User> {
        return this.appApiUserGetWithHttpInfo(username, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserListUsersWithHttpInfo(query?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.appApiUserListUsers(query, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserListUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * list users
     * List users
     * @param query Search query
     * @param offset the first number of item to skip
     * @param limit the number of items to return
     */
    public appApiUserListUsers(query?: string, offset?: number, limit?: number, _options?: Configuration): Observable<Array<User>> {
        return this.appApiUserListUsersWithHttpInfo(query, offset, limit, _options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     */
    public appApiUserLoginWithHttpInfo(_options?: Configuration): Observable<HttpInfo<LoginResponse>> {
        const requestContextPromise = this.requestFactory.appApiUserLogin(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * Logs user into the system and get JWT
     * Logs user into the system and get JWT
     */
    public appApiUserLogin(_options?: Configuration): Observable<LoginResponse> {
        return this.appApiUserLoginWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<LoginResponse>) => apiResponse.data));
    }

    /**
     * 
     * Logs out current logged in user session
     */
    public appApiUserLogoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserLogout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserLogoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Logs out current logged in user session
     */
    public appApiUserLogout(_options?: Configuration): Observable<void> {
        return this.appApiUserLogoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * checks user authorization
     * checks user authorization
     */
    public appApiUserPingWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.appApiUserPing(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserPingWithHttpInfo(rsp)));
            }));
    }

    /**
     * checks user authorization
     * checks user authorization
     */
    public appApiUserPing(_options?: Configuration): Observable<void> {
        return this.appApiUserPingWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     */
    public appApiUserRefreshWithHttpInfo(_options?: Configuration): Observable<HttpInfo<LoginResponse>> {
        const requestContextPromise = this.requestFactory.appApiUserRefresh(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserRefreshWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh user session; get new token
     * Refresh user session
     */
    public appApiUserRefresh(_options?: Configuration): Observable<LoginResponse> {
        return this.appApiUserRefreshWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<LoginResponse>) => apiResponse.data));
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param username username
     * @param userUpdate Updated user object
     */
    public appApiUserUpdateWithHttpInfo(username: string, userUpdate?: UserUpdate, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.appApiUserUpdate(username, userUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiUserUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param username username
     * @param userUpdate Updated user object
     */
    public appApiUserUpdate(username: string, userUpdate?: UserUpdate, _options?: Configuration): Observable<User> {
        return this.appApiUserUpdateWithHttpInfo(username, userUpdate, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { VintageApiRequestFactory, VintageApiResponseProcessor} from "../apis/VintageApi";
export class ObservableVintageApi {
    private requestFactory: VintageApiRequestFactory;
    private responseProcessor: VintageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VintageApiRequestFactory,
        responseProcessor?: VintageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VintageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VintageApiResponseProcessor();
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param meta should include vintage metadata
     */
    public appApiVintagesGetWithHttpInfo(spaceName: string, collName: string, name: string, meta?: boolean, _options?: Configuration): Observable<HttpInfo<Vintage>> {
        const requestContextPromise = this.requestFactory.appApiVintagesGet(spaceName, collName, name, meta, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param meta should include vintage metadata
     */
    public appApiVintagesGet(spaceName: string, collName: string, name: string, meta?: boolean, _options?: Configuration): Observable<Vintage> {
        return this.appApiVintagesGetWithHttpInfo(spaceName, collName, name, meta, _options).pipe(map((apiResponse: HttpInfo<Vintage>) => apiResponse.data));
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param spaceName space name
     * @param collName collection name
     * @param tsid time series id
     */
    public appApiVintagesGetListWithHttpInfo(spaceName: string, collName: string, tsid?: string, _options?: Configuration): Observable<HttpInfo<Array<VintageSummary>>> {
        const requestContextPromise = this.requestFactory.appApiVintagesGetList(spaceName, collName, tsid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesGetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List vintage tags in a collection
     * List vintage tags in a collection
     * @param spaceName space name
     * @param collName collection name
     * @param tsid time series id
     */
    public appApiVintagesGetList(spaceName: string, collName: string, tsid?: string, _options?: Configuration): Observable<Array<VintageSummary>> {
        return this.appApiVintagesGetListWithHttpInfo(spaceName, collName, tsid, _options).pipe(map((apiResponse: HttpInfo<Array<VintageSummary>>) => apiResponse.data));
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     */
    public appApiVintagesNameHistoryWithHttpInfo(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.appApiVintagesNameHistory(spaceName, collName, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesNameHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a vintage tag with metadata
     * Retrieve a vintage tag with metadata
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     */
    public appApiVintagesNameHistory(spaceName: string, collName: string, name: string, _options?: Configuration): Observable<Array<string>> {
        return this.appApiVintagesNameHistoryWithHttpInfo(spaceName, collName, name, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPutWithHttpInfo(spaceName: string, collName: string, name: string, vintageUpdate: VintageUpdate, _options?: Configuration): Observable<HttpInfo<VintageSummary>> {
        const requestContextPromise = this.requestFactory.appApiVintagesPut(spaceName, collName, name, vintageUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appApiVintagesPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection
     * Update vintage tag
     * @param spaceName space name
     * @param collName collection name
     * @param name vintage tag
     * @param vintageUpdate vintage tag
     */
    public appApiVintagesPut(spaceName: string, collName: string, name: string, vintageUpdate: VintageUpdate, _options?: Configuration): Observable<VintageSummary> {
        return this.appApiVintagesPutWithHttpInfo(spaceName, collName, name, vintageUpdate, _options).pipe(map((apiResponse: HttpInfo<VintageSummary>) => apiResponse.data));
    }

}
