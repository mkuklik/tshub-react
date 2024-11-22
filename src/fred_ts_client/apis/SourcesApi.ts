// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Releases } from '../models/Releases';
import { Sources } from '../models/Sources';

/**
 * no description
 */
export class SourcesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 
     * @param description Get all sources of economic data.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param sourceId The id for a source.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public async getSource(description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/fred/source';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "string", ""));
        }

        // Query Params
        if (sourceId !== undefined) {
            requestContext.setQueryParam("source_id", ObjectSerializer.serialize(sourceId, "string", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", ""));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * @param the #Description
     * @param description Get all sources of economic data.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param sourceId The id for a source.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending order for attribute values specified by order_by.
     */
    public async getSourceReleases(the?: string, description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/fred/source/releases';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (the !== undefined) {
            requestContext.setQueryParam("The", ObjectSerializer.serialize(the, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "string", ""));
        }

        // Query Params
        if (sourceId !== undefined) {
            requestContext.setQueryParam("source_id", ObjectSerializer.serialize(sourceId, "string", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", ""));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * @param description Get all sources of economic data.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending order for attribute values specified by order_by.
     */
    public async getSources(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/fred/sources';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "string", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", ""));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SourcesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSource
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSourceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Sources >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Sources = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Sources", ""
            ) as Sources;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Sources = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Sources", ""
            ) as Sources;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSourceReleases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSourceReleasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Releases >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Releases = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Releases", ""
            ) as Releases;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Releases = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Releases", ""
            ) as Releases;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Sources >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Sources = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Sources", ""
            ) as Sources;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Sources = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Sources", ""
            ) as Sources;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
