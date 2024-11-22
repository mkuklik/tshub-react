// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Seriess } from '../models/Seriess';
import { Tags } from '../models/Tags';

/**
 * no description
 */
export class TagsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 
     * @param description Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param tagNames A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param tagGroupId A tag group id to filter tags by type.
     * @param searchText The words to find matching tags with.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending order for attribute values specified by order_by.
     */
    public async getRelatedTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/fred/related_tags';

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
        if (tagNames !== undefined) {
            requestContext.setQueryParam("tag_names", ObjectSerializer.serialize(tagNames, "string", ""));
        }

        // Query Params
        if (tagGroupId !== undefined) {
            requestContext.setQueryParam("tag_group_id", ObjectSerializer.serialize(tagGroupId, "string", ""));
        }

        // Query Params
        if (searchText !== undefined) {
            requestContext.setQueryParam("search_text", ObjectSerializer.serialize(searchText, "string", ""));
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
     * @param description Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param tagNames A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param tagGroupId A tag group id to filter tags by type.
     * @param searchText The words to find matching tags with.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending order for attribute values specified by order_by.
     */
    public async getTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/fred/tags';

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
        if (tagNames !== undefined) {
            requestContext.setQueryParam("tag_names", ObjectSerializer.serialize(tagNames, "string", ""));
        }

        // Query Params
        if (tagGroupId !== undefined) {
            requestContext.setQueryParam("tag_group_id", ObjectSerializer.serialize(tagGroupId, "string", ""));
        }

        // Query Params
        if (searchText !== undefined) {
            requestContext.setQueryParam("search_text", ObjectSerializer.serialize(searchText, "string", ""));
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
     * @param description Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param tagNames A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param excludeTagNames A semicolon delimited list of tag names that series match none of.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending order for attribute values specified by order_by.
     */
    public async getTagsSeries(description?: string, apiKey?: string, fileType?: string, tagNames?: string, excludeTagNames?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/fred/tags/series';

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
        if (tagNames !== undefined) {
            requestContext.setQueryParam("tag_names", ObjectSerializer.serialize(tagNames, "string", ""));
        }

        // Query Params
        if (excludeTagNames !== undefined) {
            requestContext.setQueryParam("exclude_tag_names", ObjectSerializer.serialize(excludeTagNames, "string", ""));
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

export class TagsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRelatedTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRelatedTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tags", ""
            ) as Tags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTagsSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTagsSeriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Seriess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Seriess", ""
            ) as Seriess;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Seriess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Seriess", ""
            ) as Seriess;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
