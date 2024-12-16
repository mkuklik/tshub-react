// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { TimeSeries } from '../models/TimeSeries';
import { TimeSeriesCore } from '../models/TimeSeriesCore';
import { TimeSeriesSummary } from '../models/TimeSeriesSummary';
import { TimeSeriesUpdate } from '../models/TimeSeriesUpdate';

/**
 * no description
 */
export class TimeSeriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * delete time series
     * Delete a time series
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public async appApiTimeseriesDelete(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesDelete", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesDelete", "collName");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesDelete", "name");
        }


        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}/{name}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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
     * Retrieve time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     */
    public async appApiTimeseriesGet(spaceName: string, collName: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesGet", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesGet", "collName");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesGet", "name");
        }


        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}/{name}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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
     * List time series in a collection
     * List time series in a collection
     * @param spaceName space name
     * @param collName collection name
     */
    public async appApiTimeseriesGetList(spaceName: string, collName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesGetList", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesGetList", "collName");
        }


        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)));

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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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
     * retrive historical values
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public async appApiTimeseriesNameHistory(spaceName: string, collName: string, name: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesNameHistory", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesNameHistory", "collName");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesNameHistory", "name");
        }




        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}/{name}/history'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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
     * Create a new time series
     * @param spaceName space name
     * @param collName collection name
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public async appApiTimeseriesPost(spaceName: string, collName: string, timeSeries: TimeSeries, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPost", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPost", "collName");
        }


        // verify required parameter 'timeSeries' is not null or undefined
        if (timeSeries === null || timeSeries === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPost", "timeSeries");
        }


        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timeSeries, "TimeSeries", ""),
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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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
     * Update existing time series info
     * Update existing time series info
     * @param spaceName space name
     * @param collName collection name
     * @param name a single series name
     * @param timeSeriesUpdate Time series updated info
     */
    public async appApiTimeseriesPut(spaceName: string, collName: string, name: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPut", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPut", "collName");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPut", "name");
        }


        // verify required parameter 'timeSeriesUpdate' is not null or undefined
        if (timeSeriesUpdate === null || timeSeriesUpdate === undefined) {
            throw new RequiredError("TimeSeriesApi", "appApiTimeseriesPut", "timeSeriesUpdate");
        }


        // Path Params
        const localVarPath = '/timeseries/{space_name}/{coll_name}/{name}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timeSeriesUpdate, "TimeSeriesUpdate", ""),
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
        // Apply auth methods
        authMethod = _config.authMethods["basic"]
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

export class TimeSeriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiTimeseriesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeries >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeries", ""
            ) as TimeSeries;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeries", ""
            ) as TimeSeries;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesGetList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesGetListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<TimeSeriesSummary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TimeSeriesSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TimeSeriesSummary>", ""
            ) as Array<TimeSeriesSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TimeSeriesSummary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TimeSeriesSummary>", ""
            ) as Array<TimeSeriesSummary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesNameHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesNameHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeriesCore >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeriesCore = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesCore", ""
            ) as TimeSeriesCore;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeriesCore = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesCore", ""
            ) as TimeSeriesCore;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeries >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeries", ""
            ) as TimeSeries;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "You don’t have permission to access this resource", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeries", ""
            ) as TimeSeries;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
