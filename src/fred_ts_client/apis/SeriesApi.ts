// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Categories } from '../models/Categories';
import { Observations } from '../models/Observations';
import { Releases } from '../models/Releases';
import { Seriess } from '../models/Seriess';
import { Tags } from '../models/Tags';
import { VintageDates } from '../models/VintageDates';

/**
 * no description
 */
export class SeriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 
     * @param description Get an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public async getSeries(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/fred/series';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description:", ObjectSerializer.serialize(description, "string", ""));
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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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
     * @param description Get an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public async getSeriesCategories(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/fred/series/categories';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description:", ObjectSerializer.serialize(description, "string", ""));
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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param sortOrder Sort results is ascending or descending observation_date order.
     * @param observationStart The start of the observation period.
     * @param observationEnd The end of the observation period.
     * @param units A key that indicates a data value transformation.
     * @param frequency An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter.
     * @param aggregationMethod A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set.
     * @param outputType An integer that indicates an output type.
     * @param vintageDates Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end.
     */
    public async getSeriesObservations(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, sortOrder?: string, observationStart?: string, observationEnd?: string, units?: string, frequency?: number, aggregationMethod?: string, outputType?: number, vintageDates?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

















        // Path Params
        const localVarPath = '/fred/series/observations';

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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (observationStart !== undefined) {
            requestContext.setQueryParam("observation_start", ObjectSerializer.serialize(observationStart, "string", ""));
        }

        // Query Params
        if (observationEnd !== undefined) {
            requestContext.setQueryParam("observation_end", ObjectSerializer.serialize(observationEnd, "string", ""));
        }

        // Query Params
        if (units !== undefined) {
            requestContext.setQueryParam("units", ObjectSerializer.serialize(units, "string", ""));
        }

        // Query Params
        if (frequency !== undefined) {
            requestContext.setQueryParam("frequency", ObjectSerializer.serialize(frequency, "number", ""));
        }

        // Query Params
        if (aggregationMethod !== undefined) {
            requestContext.setQueryParam("aggregation_method", ObjectSerializer.serialize(aggregationMethod, "string", ""));
        }

        // Query Params
        if (outputType !== undefined) {
            requestContext.setQueryParam("output_type", ObjectSerializer.serialize(outputType, "number", ""));
        }

        // Query Params
        if (vintageDates !== undefined) {
            requestContext.setQueryParam("vintage_dates", ObjectSerializer.serialize(vintageDates, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public async getSeriesRelease(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/fred/series/release';

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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param searchText The words to match against economic data series.
     * @param searchType Determines the type of search to perform.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending observation_date order.
     * @param filterVariable The attribute to filter results by.
     * @param filterValue The value of the filter_variable attribute to filter results by.
     * @param tagNames A semicolon delimited list of tag names that series match all of.
     * @param excludeTagNames A semicolon delimited list of tag names that series match none of.
     */
    public async getSeriesSearch(description?: string, apiKey?: string, fileType?: string, searchText?: string, searchType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, filterVariable?: string, filterValue?: string, tagNames?: string, excludeTagNames?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
















        // Path Params
        const localVarPath = '/fred/series/search';

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
        if (searchText !== undefined) {
            requestContext.setQueryParam("search_text", ObjectSerializer.serialize(searchText, "string", ""));
        }

        // Query Params
        if (searchType !== undefined) {
            requestContext.setQueryParam("search_type", ObjectSerializer.serialize(searchType, "string", ""));
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

        // Query Params
        if (filterVariable !== undefined) {
            requestContext.setQueryParam("filter_variable", ObjectSerializer.serialize(filterVariable, "string", ""));
        }

        // Query Params
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter_value", ObjectSerializer.serialize(filterValue, "string", ""));
        }

        // Query Params
        if (tagNames !== undefined) {
            requestContext.setQueryParam("tag_names", ObjectSerializer.serialize(tagNames, "string", ""));
        }

        // Query Params
        if (excludeTagNames !== undefined) {
            requestContext.setQueryParam("exclude_tag_names", ObjectSerializer.serialize(excludeTagNames, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesSearchText The words to match against economic data series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param tagNames A semicolon delimited list of tag names that series match all of.
     * @param excludeTagNames A semicolon delimited list of tag names that series match none of.
     * @param tagGroupId A tag group id to filter tags by type.
     * @param tagSearchText The words to find matching tags with.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending observation_date order.
     */
    public async getSeriesSearchRelatedTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, excludeTagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/fred/series/search/related_tags';

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
        if (seriesSearchText !== undefined) {
            requestContext.setQueryParam("series_search_text", ObjectSerializer.serialize(seriesSearchText, "string", ""));
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
        if (excludeTagNames !== undefined) {
            requestContext.setQueryParam("exclude_tag_names", ObjectSerializer.serialize(excludeTagNames, "string", ""));
        }

        // Query Params
        if (tagGroupId !== undefined) {
            requestContext.setQueryParam("tag_group_id", ObjectSerializer.serialize(tagGroupId, "string", ""));
        }

        // Query Params
        if (tagSearchText !== undefined) {
            requestContext.setQueryParam("tag_search_text", ObjectSerializer.serialize(tagSearchText, "string", ""));
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
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesSearchText The words to match against economic data series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param tagNames A semicolon delimited list of tag names that series match all of.
     * @param tagGroupId A tag group id to filter tags by type.
     * @param tagSearchText The words to find matching tags with.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending observation_date order.
     */
    public async getSeriesSearchTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/fred/series/search/tags';

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
        if (seriesSearchText !== undefined) {
            requestContext.setQueryParam("series_search_text", ObjectSerializer.serialize(seriesSearchText, "string", ""));
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
        if (tagSearchText !== undefined) {
            requestContext.setQueryParam("tag_search_text", ObjectSerializer.serialize(tagSearchText, "string", ""));
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
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param orderBy Order results by values of the specified attribute.
     * @param sortOrder Sort results is ascending or descending observation_date order.
     */
    public async getSeriesTags(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/fred/series/tags';

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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     * @param filterValue The value of the filter_variable attribute to filter results by.
     * @param startTime Start time for limiting results for a time range, can filter down to minutes
     * @param endTime End time for limiting results for a time range, can filter down to minutes
     */
    public async getSeriesUpdates(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, filterValue?: string, startTime?: string, endTime?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/fred/series/updates';

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
        if (filterValue !== undefined) {
            requestContext.setQueryParam("filter_value", ObjectSerializer.serialize(filterValue, "string", ""));
        }

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("start_time", ObjectSerializer.serialize(startTime, "string", ""));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("end_time", ObjectSerializer.serialize(endTime, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 
     * @param description Get the observations or data values for an economic data series.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param seriesId The id for a series.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     * @param limit The maximum number of results to return.
     * @param offset non-negative integer, optional, default: 0
     */
    public async getSeriesVintagedates(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/fred/series/vintagedates';

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
        if (seriesId !== undefined) {
            requestContext.setQueryParam("series_id", ObjectSerializer.serialize(seriesId, "string", ""));
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SeriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
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
     * @params response Response returned by the server for a request to getSeriesCategories
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesCategoriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Categories >> {
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
     * @params response Response returned by the server for a request to getSeriesObservations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesObservationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Observations >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Observations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Observations", ""
            ) as Observations;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Observations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Observations", ""
            ) as Observations;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSeriesRelease
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesReleaseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Releases >> {
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
     * @params response Response returned by the server for a request to getSeriesSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
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
     * @params response Response returned by the server for a request to getSeriesSearchRelatedTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesSearchRelatedTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getSeriesSearchTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesSearchTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getSeriesTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tags >> {
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
     * @params response Response returned by the server for a request to getSeriesUpdates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesUpdatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Seriess >> {
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
     * @params response Response returned by the server for a request to getSeriesVintagedates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeriesVintagedatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VintageDates >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VintageDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VintageDates", ""
            ) as VintageDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VintageDates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VintageDates", ""
            ) as VintageDates;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
