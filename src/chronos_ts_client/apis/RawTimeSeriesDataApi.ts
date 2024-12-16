// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { IndexFormat } from '../models/IndexFormat';
import { RawDataDeleteResponse } from '../models/RawDataDeleteResponse';
import { RawDataPutRequest } from '../models/RawDataPutRequest';
import { RawDataPutResponse } from '../models/RawDataPutResponse';
import { RawSingleTimeSeriesData } from '../models/RawSingleTimeSeriesData';

/**
 * no description
 */
export class RawTimeSeriesDataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete observations from a time series, for internal use only
     * Delete observations, for internal use only
     * @param collId collection id
     * @param index time series index
     * @param indexFormat 
     * @param tsid time series id
     */
    public async appApiRawTimeseriesDataDelete(collId: string, index: Array<number>, indexFormat: IndexFormat, tsid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataDelete", "collId");
        }


        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataDelete", "index");
        }


        // verify required parameter 'indexFormat' is not null or undefined
        if (indexFormat === null || indexFormat === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataDelete", "indexFormat");
        }



        // Path Params
        const localVarPath = '/raw/data/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "Array<number>", ""));
        }

        // Query Params
        if (indexFormat !== undefined) {
            requestContext.setQueryParam("indexFormat", ObjectSerializer.serialize(indexFormat, "IndexFormat", ""));
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
     * Retrieve raw time series data, for internal use only
     * Retrieve raw time series data, for internal use only
     * @param collId collection id
     * @param tsids array of tsid\&#39;s in the collection, collId
     * @param realtime real time to retrieve the historical data
     */
    public async appApiRawTimeseriesDataGet(collId: string, tsids: Array<string>, realtime?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataGet", "collId");
        }


        // verify required parameter 'tsids' is not null or undefined
        if (tsids === null || tsids === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataGet", "tsids");
        }



        // Path Params
        const localVarPath = '/raw/data/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsids !== undefined) {
            requestContext.setQueryParam("tsids", ObjectSerializer.serialize(tsids, "Array<string>", ""));
        }

        // Query Params
        if (realtime !== undefined) {
            requestContext.setQueryParam("realtime", ObjectSerializer.serialize(realtime, "Date", "date-time"));
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
     * Save raw observations of time series, for internal use only
     * Save raw observations, for internal use only
     * @param collId collection id
     * @param method data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values 
     * @param rawDataPutRequest time series data
     * @param realtime real time at which data was written. This only works if there is no observations written after this real time
     */
    public async appApiRawTimeseriesDataPut(collId: string, method: 'overwrite' | 'update' | 'append', rawDataPutRequest: RawDataPutRequest, realtime?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'collId' is not null or undefined
        if (collId === null || collId === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataPut", "collId");
        }


        // verify required parameter 'method' is not null or undefined
        if (method === null || method === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataPut", "method");
        }


        // verify required parameter 'rawDataPutRequest' is not null or undefined
        if (rawDataPutRequest === null || rawDataPutRequest === undefined) {
            throw new RequiredError("RawTimeSeriesDataApi", "appApiRawTimeseriesDataPut", "rawDataPutRequest");
        }



        // Path Params
        const localVarPath = '/raw/data/{collId}'
            .replace('{' + 'collId' + '}', encodeURIComponent(String(collId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (method !== undefined) {
            requestContext.setQueryParam("method", ObjectSerializer.serialize(method, "'overwrite' | 'update' | 'append'", ""));
        }

        // Query Params
        if (realtime !== undefined) {
            requestContext.setQueryParam("realtime", ObjectSerializer.serialize(realtime, "Date", "date-time"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rawDataPutRequest, "RawDataPutRequest", ""),
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

export class RawTimeSeriesDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiRawTimeseriesDataDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiRawTimeseriesDataDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RawDataDeleteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RawDataDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RawDataDeleteResponse", ""
            ) as RawDataDeleteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time series not found error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RawDataDeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RawDataDeleteResponse", ""
            ) as RawDataDeleteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiRawTimeseriesDataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiRawTimeseriesDataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: RawSingleTimeSeriesData; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: RawSingleTimeSeriesData; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: RawSingleTimeSeriesData; }", ""
            ) as { [key: string]: RawSingleTimeSeriesData; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time series not found error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: RawSingleTimeSeriesData; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: RawSingleTimeSeriesData; }", ""
            ) as { [key: string]: RawSingleTimeSeriesData; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiRawTimeseriesDataPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiRawTimeseriesDataPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RawDataPutResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RawDataPutResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RawDataPutResponse", ""
            ) as RawDataPutResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time series not found error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RawDataPutResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RawDataPutResponse", ""
            ) as RawDataPutResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
