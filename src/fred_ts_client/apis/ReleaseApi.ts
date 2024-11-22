// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Categories } from '../models/Categories';
import { ReleaseDates } from '../models/ReleaseDates';
import { Releases } from '../models/Releases';
import { Seriess } from '../models/Seriess';
import { Sources } from '../models/Sources';
import { Tags } from '../models/Tags';

/**
 * no description
 */
export class ReleaseApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve release dates for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public async getReleaseDates(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseDates", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseDates", "releaseId");
        }





        // Path Params
        const localVarPath = '/fred/release/dates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get information for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public async getReleaseInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseInfo", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseInfo", "releaseId");
        }





        // Path Params
        const localVarPath = '/fred/release';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve related tags for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param tagNames 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     */
    public async getReleaseRelatedTags(apiKey: string, releaseId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseRelatedTags", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseRelatedTags", "releaseId");
        }


        // verify required parameter 'tagNames' is not null or undefined
        if (tagNames === null || tagNames === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseRelatedTags", "tagNames");
        }









        // Path Params
        const localVarPath = '/fred/release/related_tags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (tagNames !== undefined) {
            requestContext.setQueryParam("tag_names", ObjectSerializer.serialize(tagNames, "string", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'series_count' | 'popularity'", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get series for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     * @param filterVariable 
     * @param filterValue 
     */
    public async getReleaseSeries(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseSeries", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseSeries", "releaseId");
        }











        // Path Params
        const localVarPath = '/fred/release/series';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity'", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }

        // Query Params
        if (filterVariable !== undefined) {
            requestContext.setQueryParam("filter_variable", ObjectSerializer.serialize(filterVariable, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter_value", ObjectSerializer.serialize(filterValue, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get sources for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public async getReleaseSources(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseSources", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseSources", "releaseId");
        }





        // Path Params
        const localVarPath = '/fred/release/sources';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get data tables for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param elementId 
     * @param includeObservations 
     * @param observationDate 
     */
    public async getReleaseTables(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', elementId?: number, includeObservations?: boolean, observationDate?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseTables", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseTables", "releaseId");
        }






        // Path Params
        const localVarPath = '/fred/release/tables';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (elementId !== undefined) {
            requestContext.setQueryParam("element_id", ObjectSerializer.serialize(elementId, "number", ""));
        }

        // Query Params
        if (includeObservations !== undefined) {
            requestContext.setQueryParam("include_observations", ObjectSerializer.serialize(includeObservations, "boolean", ""));
        }

        // Query Params
        if (observationDate !== undefined) {
            requestContext.setQueryParam("observation_date", ObjectSerializer.serialize(observationDate, "string", "date"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get tags for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     * @param searchText 
     */
    public async getReleaseTags(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', searchText?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseTags", "apiKey");
        }


        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError("ReleaseApi", "getReleaseTags", "releaseId");
        }










        // Path Params
        const localVarPath = '/fred/release/tags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (releaseId !== undefined) {
            requestContext.setQueryParam("release_id", ObjectSerializer.serialize(releaseId, "number", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'name' | 'group_id'", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }

        // Query Params
        if (searchText !== undefined) {
            requestContext.setQueryParam("search_text", ObjectSerializer.serialize(searchText, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all releases of economic data.
     * @param apiKey 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     * @param filterVariable 
     * @param filterValue 
     */
    public async getReleases(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleases", "apiKey");
        }











        // Path Params
        const localVarPath = '/fred/releases';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end'", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }

        // Query Params
        if (filterVariable !== undefined) {
            requestContext.setQueryParam("filter_variable", ObjectSerializer.serialize(filterVariable, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter_value", ObjectSerializer.serialize(filterValue, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve release dates for all economic data.
     * @param apiKey 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param lastUpdated 
     */
    public async getReleasesDates(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, lastUpdated?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("ReleaseApi", "getReleasesDates", "apiKey");
        }








        // Path Params
        const localVarPath = '/fred/releases/dates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("api_key", ObjectSerializer.serialize(apiKey, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("file_type", ObjectSerializer.serialize(fileType, "'xml' | 'json'", ""));
        }

        // Query Params
        if (realtimeStart !== undefined) {
            requestContext.setQueryParam("realtime_start", ObjectSerializer.serialize(realtimeStart, "string", "date"));
        }

        // Query Params
        if (realtimeEnd !== undefined) {
            requestContext.setQueryParam("realtime_end", ObjectSerializer.serialize(realtimeEnd, "string", "date"));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (lastUpdated !== undefined) {
            requestContext.setQueryParam("last_updated", ObjectSerializer.serialize(lastUpdated, "Date", "date-time"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ReleaseApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReleaseDates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseDatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReleaseDates >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReleaseDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReleaseDates", ""
            ) as ReleaseDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReleaseDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReleaseDates", ""
            ) as ReleaseDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReleaseInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Releases >> {
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
     * @params response Response returned by the server for a request to getReleaseRelatedTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseRelatedTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getReleaseSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseSeriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReleaseSources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseSourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Sources >> {
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
     * @params response Response returned by the server for a request to getReleaseTables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseTablesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categories >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Categories = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Categories", ""
            ) as Categories;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Categories = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Categories", ""
            ) as Categories;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReleaseTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleaseTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getReleases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleasesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Releases >> {
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
     * @params response Response returned by the server for a request to getReleasesDates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReleasesDatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReleaseDates >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReleaseDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReleaseDates", ""
            ) as ReleaseDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReleaseDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReleaseDates", ""
            ) as ReleaseDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
