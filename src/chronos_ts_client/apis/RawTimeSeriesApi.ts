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
export class RawTimeSeriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * delete time series
     * Delete a time series
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiTimeseriesRawDelete(collId: string, tsid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawDelete", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawDelete", "tsid");
        }


        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

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
     * Retrieve time series info
     * Retrieve time series info
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiTimeseriesRawGet(collId: string, tsid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawGet", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawGet", "tsid");
        }


        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

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
     * List time series in a collection
     * List time series in a collection
     * @param collId collection id
     * @param tsids array of time series id
     */
    public async appApiTimeseriesRawGetList(collId: string, tsids?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawGetList", "collId");
        }



        // Path Params
        const localVarPath = '/raw/timeseries/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsids !== undefined) {
            requestContext.setQueryParam("tsids", ObjectSerializer.serialize(tsids, "Array<string>", ""));
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
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param realStart start time from when values were valid
     * @param realEnd end time until when values were valid
     */
    public async appApiTimeseriesRawObjectHistory(collId: string, tsid: string, realStart?: Date, realEnd?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawObjectHistory", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawObjectHistory", "tsid");
        }




        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}/history'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

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
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiTimeseriesRawPermanentDelete(collId: string, tsid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPermanentDelete", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPermanentDelete", "tsid");
        }


        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}/permanent'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

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
     * Create a new time series
     * @param collId collection id
     * @param timeSeries Time series parameters. dtype and freq are required
     */
    public async appApiTimeseriesRawPost(collId: string, timeSeries: TimeSeries, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPost", "collId");
        }


        // verify required parameter 'timeSeries' is not null or undefined
        if (timeSeries === null || timeSeries === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPost", "timeSeries");
        }


        // Path Params
        const localVarPath = '/raw/timeseries/{collId}'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update existing time series info
     * Update existing time series info
     * @param collId collection id
     * @param tsid time series id
     * @param timeSeriesUpdate Time series updated info
     */
    public async appApiTimeseriesRawPut(collId: string, tsid: string, timeSeriesUpdate: TimeSeriesUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPut", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPut", "tsid");
        }


        // verify required parameter 'timeSeriesUpdate' is not null or undefined
        if (timeSeriesUpdate === null || timeSeriesUpdate === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawPut", "timeSeriesUpdate");
        }


        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * retrieve historical values
     * @param collId collection id
     * @param tsid time series id
     * @param name new name for the time series
     */
    public async appApiTimeseriesRawUndelete(collId: string, tsid: string, name?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawUndelete", "collId");
        }


        // verify required parameter 'tsid' is not null or undefined
        if (tsid === null || tsid === undefined) {
            throw new RequiredError("RawTimeSeriesApi", "appApiTimeseriesRawUndelete", "tsid");
        }



        // Path Params
        const localVarPath = '/raw/timeseries/{collId}/{tsid}/undelete'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)))
            .replace('{' + 'tsid' + '}', encodeURIComponent(String(tsid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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

}

export class RawTimeSeriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesRawDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeries >> {
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawGetList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawGetListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<TimeSeriesSummary> >> {
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawObjectHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawObjectHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time Series Not Found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawPermanentDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawPermanentDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeriesCore >> {
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeries >> {
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
     * @params response Response returned by the server for a request to appApiTimeseriesRawUndelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesRawUndeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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

}