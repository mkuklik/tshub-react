// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AppApiTimeseriesDataDeleteIndexParameterInner } from '../models/AppApiTimeseriesDataDeleteIndexParameterInner';
import { SingleTimeSeriesData } from '../models/SingleTimeSeriesData';

/**
 * no description
 */
export class TimeSeriesDataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete observations from a time series
     * Delete observations
     * @param spaceName space name
     * @param collName collection name
     * @param names list of series names
     * @param index time index
     * @param format Format of data time index * &#x60;string&#x60; a string represenation specific to each index type, e.g. 2000-01 for monthly index. * &#x60;iso&#x60; a string with iso representation of datetime \&#39;\&#39; * &#x60;s&#x60;   a number of seconds from unix epoch 1970-01-01 * &#x60;ms&#x60;  a number of milliseconds from unix epoch 1970-01-01 * &#x60;us&#x60;  a number of microseconds from unix epoch 1970-01-01 
     */
    public async appApiTimeseriesDataDelete(spaceName: string, collName: string, names: Array<string>, index: Array<AppApiTimeseriesDataDeleteIndexParameterInner>, format?: 'string' | 'iso' | 's' | 'ms' | 'us', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataDelete", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataDelete", "collName");
        }


        // verify required parameter 'names' is not null or undefined
        if (names === null || names === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataDelete", "names");
        }


        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataDelete", "index");
        }



        // Path Params
        const localVarPath = '/data'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (names !== undefined) {
            requestContext.setQueryParam("names", ObjectSerializer.serialize(names, "Array<string>", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "Array<AppApiTimeseriesDataDeleteIndexParameterInner>", ""));
        }

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "'string' | 'iso' | 's' | 'ms' | 'us'", ""));
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
    public async appApiTimeseriesDataGet(series: TSIList, periodStart?: string, periodEnd?: string, transform?: 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm', freq?: string, toLowerMethod?: 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min', toHigherMethod?: 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube', missingMethod?: 'none' | 'auto' | 'previous' | 'zero', merge?: boolean, realtime?: Date, vintage?: string, output?: 'json' | 'csv' | 'excel', outputIndexType?: 'auto' | 'epoch' | 'string' | 'ISO', outputIndexFormat?: string, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'series' is not null or undefined
        if (series === null || series === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataGet", "series");
        }

















        // Path Params
        const localVarPath = '/data';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (series !== undefined) {
            requestContext.setQueryParam("series", ObjectSerializer.serialize(series, "TSIList", ""));
        }

        // Query Params
        if (periodStart !== undefined) {
            requestContext.setQueryParam("periodStart", ObjectSerializer.serialize(periodStart, "string", ""));
        }

        // Query Params
        if (periodEnd !== undefined) {
            requestContext.setQueryParam("periodEnd", ObjectSerializer.serialize(periodEnd, "string", ""));
        }

        // Query Params
        if (transform !== undefined) {
            requestContext.setQueryParam("transform", ObjectSerializer.serialize(transform, "'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm'", ""));
        }

        // Query Params
        if (freq !== undefined) {
            requestContext.setQueryParam("freq", ObjectSerializer.serialize(freq, "string", ""));
        }

        // Query Params
        if (toLowerMethod !== undefined) {
            requestContext.setQueryParam("toLowerMethod", ObjectSerializer.serialize(toLowerMethod, "'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min'", ""));
        }

        // Query Params
        if (toHigherMethod !== undefined) {
            requestContext.setQueryParam("toHigherMethod", ObjectSerializer.serialize(toHigherMethod, "'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube'", ""));
        }

        // Query Params
        if (missingMethod !== undefined) {
            requestContext.setQueryParam("missingMethod", ObjectSerializer.serialize(missingMethod, "'none' | 'auto' | 'previous' | 'zero'", ""));
        }

        // Query Params
        if (merge !== undefined) {
            requestContext.setQueryParam("merge", ObjectSerializer.serialize(merge, "boolean", ""));
        }

        // Query Params
        if (realtime !== undefined) {
            requestContext.setQueryParam("realtime", ObjectSerializer.serialize(realtime, "Date", "date-time"));
        }

        // Query Params
        if (vintage !== undefined) {
            requestContext.setQueryParam("vintage", ObjectSerializer.serialize(vintage, "string", ""));
        }

        // Query Params
        if (output !== undefined) {
            requestContext.setQueryParam("output", ObjectSerializer.serialize(output, "'json' | 'csv' | 'excel'", ""));
        }

        // Query Params
        if (outputIndexType !== undefined) {
            requestContext.setQueryParam("outputIndexType", ObjectSerializer.serialize(outputIndexType, "'auto' | 'epoch' | 'string' | 'ISO'", ""));
        }

        // Query Params
        if (outputIndexFormat !== undefined) {
            requestContext.setQueryParam("outputIndexFormat", ObjectSerializer.serialize(outputIndexFormat, "string", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * Save observations of time series
     * Save observations
     * @param spaceName space name
     * @param collName collection name
     * @param singleTimeSeriesData time series data
     */
    public async appApiTimeseriesDataPut(spaceName: string, collName: string, singleTimeSeriesData: Array<SingleTimeSeriesData>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataPut", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataPut", "collName");
        }


        // verify required parameter 'singleTimeSeriesData' is not null or undefined
        if (singleTimeSeriesData === null || singleTimeSeriesData === undefined) {
            throw new RequiredError("TimeSeriesDataApi", "appApiTimeseriesDataPut", "singleTimeSeriesData");
        }


        // Path Params
        const localVarPath = '/data'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(singleTimeSeriesData, "Array<SingleTimeSeriesData>", ""),
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

export class TimeSeriesDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesDataDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesDataDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time series not found error", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiTimeseriesDataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesDataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SingleTimeSeriesData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SingleTimeSeriesData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SingleTimeSeriesData>", ""
            ) as Array<SingleTimeSeriesData>;
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
            const body: Array<SingleTimeSeriesData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SingleTimeSeriesData>", ""
            ) as Array<SingleTimeSeriesData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiTimeseriesDataPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiTimeseriesDataPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Time series not found error", undefined, response.headers);
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
