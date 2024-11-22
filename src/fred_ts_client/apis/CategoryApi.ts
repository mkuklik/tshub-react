// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Categories } from '../models/Categories';
import { Seriess } from '../models/Seriess';
import { Tags } from '../models/Tags';

/**
 * no description
 */
export class CategoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a category.
     * @param apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param fileType 
     * @param categoryId 
     */
    public async getCategory(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategory", "apiKey");
        }




        // Path Params
        const localVarPath = '/fred/category';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the child categories for a specified parent category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public async getCategoryChildren(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryChildren", "apiKey");
        }






        // Path Params
        const localVarPath = '/fred/category/children';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
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
     * Get related categories for a specified category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public async getCategoryRelated(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryRelated", "apiKey");
        }






        // Path Params
        const localVarPath = '/fred/category/related';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
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
     * Retrieve related tags for a specific category.
     * @param apiKey 
     * @param categoryId 
     * @param tagNames 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     */
    public async getCategoryRelatedTags(apiKey: string, categoryId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryRelatedTags", "apiKey");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryRelatedTags", "categoryId");
        }


        // verify required parameter 'tagNames' is not null or undefined
        if (tagNames === null || tagNames === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryRelatedTags", "tagNames");
        }









        // Path Params
        const localVarPath = '/fred/category/related_tags';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
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
     * Retrieve series within a specified category.
     * @param apiKey 
     * @param categoryId 
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
    public async getCategorySeries(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategorySeries", "apiKey");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "getCategorySeries", "categoryId");
        }











        // Path Params
        const localVarPath = '/fred/category/series';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
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
     * Retrieve tags for a specific category.
     * @param apiKey 
     * @param categoryId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     * @param limit 
     * @param offset 
     * @param orderBy 
     * @param sortOrder 
     */
    public async getCategoryTags(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryTags", "apiKey");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "getCategoryTags", "categoryId");
        }









        // Path Params
        const localVarPath = '/fred/category/tags';

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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "number", ""));
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CategoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categories >> {
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
     * @params response Response returned by the server for a request to getCategoryChildren
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryChildrenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categories >> {
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
     * @params response Response returned by the server for a request to getCategoryRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categories >> {
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
     * @params response Response returned by the server for a request to getCategoryRelatedTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryRelatedTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getCategorySeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategorySeriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
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
     * @params response Response returned by the server for a request to getCategoryTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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

}
