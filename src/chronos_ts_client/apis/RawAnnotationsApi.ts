// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Annotation } from '../models/Annotation';
import { AnnotationSummary } from '../models/AnnotationSummary';
import { AnnotationUpdate } from '../models/AnnotationUpdate';
import { Frequency } from '../models/Frequency';

/**
 * no description
 */
export class RawAnnotationsApiRequestFactory extends BaseAPIRequestFactory {

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
    public async appApiAnnotationRawAddTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawAddTarget", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawAddTarget", "aid");
        }






        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}/targets'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "number", ""));
        }

        // Query Params
        if (freq !== undefined) {
            requestContext.setQueryParam("freq", ObjectSerializer.serialize(freq, "Frequency", ""));
        }

        // Query Params
        if (realStart !== undefined) {
            requestContext.setQueryParam("realStart", ObjectSerializer.serialize(realStart, "Date", "date-time"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create an annotation
     * Create an annotation
     * @param collId collection id
     * @param annotation Annotation
     */
    public async appApiAnnotationRawCreate(collId: string, annotation: Annotation, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawCreate", "collId");
        }


        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawCreate", "annotation");
        }


        // Path Params
        const localVarPath = '/raw/annotation/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(annotation, "Annotation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Delete annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public async appApiAnnotationRawDelete(collId: string, aid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawDelete", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawDelete", "aid");
        }


        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Get an annotation
     * @param collId collection id
     * @param aid annotation id
     */
    public async appApiAnnotationRawGet(collId: string, aid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawGet", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawGet", "aid");
        }


        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List annotations
     * List annotations
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiAnnotationRawGetList(collId: string, tsid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawGetList", "collId");
        }



        // Path Params
        const localVarPath = '/raw/annotation/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * History of annotation changes
     * History of annotation changes
     * @param collId collection id
     * @param aid annotation id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public async appApiAnnotationRawHistory(collId: string, aid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawHistory", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawHistory", "aid");
        }




        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}/history'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (realStart !== undefined) {
            requestContext.setQueryParam("realStart", ObjectSerializer.serialize(realStart, "Date", "date-time"));
        }

        // Query Params
        if (realEnd !== undefined) {
            requestContext.setQueryParam("realEnd", ObjectSerializer.serialize(realEnd, "Date", "date-time"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async appApiAnnotationRawRemoveTarget(collId: string, aid: string, tsid?: string, index?: number, freq?: Frequency, realStart?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawRemoveTarget", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawRemoveTarget", "aid");
        }






        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}/targets'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "number", ""));
        }

        // Query Params
        if (freq !== undefined) {
            requestContext.setQueryParam("freq", ObjectSerializer.serialize(freq, "Frequency", ""));
        }

        // Query Params
        if (realStart !== undefined) {
            requestContext.setQueryParam("realStart", ObjectSerializer.serialize(realStart, "Date", "date-time"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * Update an annotation
     * @param collId collection id
     * @param aid annotation id
     * @param annotationUpdate Annotation
     */
    public async appApiAnnotationRawUpdate(collId: string, aid: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawUpdate", "collId");
        }


        // verify required parameter 'aid' is not null or undefined
        if (aid === null || aid === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawUpdate", "aid");
        }


        // verify required parameter 'annotationUpdate' is not null or undefined
        if (annotationUpdate === null || annotationUpdate === undefined) {
            throw new RequiredError("RawAnnotationsApi", "appApiAnnotationRawUpdate", "annotationUpdate");
        }


        // Path Params
        const localVarPath = '/raw/annotation/{collId}/{aid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'aid' + '}', encodeURIComponent(String(aid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(annotationUpdate, "AnnotationUpdate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["api_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RawAnnotationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawAddTarget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawAddTargetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Annotation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Annotation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawGetList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawGetListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AnnotationSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AnnotationSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AnnotationSummary>", ""
            ) as Array<AnnotationSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AnnotationSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AnnotationSummary>", ""
            ) as Array<AnnotationSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Annotation> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Annotation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Annotation>", ""
            ) as Array<Annotation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Annotation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Annotation>", ""
            ) as Array<Annotation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawRemoveTarget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawRemoveTargetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRawUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRawUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
