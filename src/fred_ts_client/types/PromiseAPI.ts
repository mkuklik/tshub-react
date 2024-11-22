import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Categories } from '../models/Categories';
import { CategoriesCategoriesInner } from '../models/CategoriesCategoriesInner';
import { Observations } from '../models/Observations';
import { ObservationsObservationsInner } from '../models/ObservationsObservationsInner';
import { ReleaseDates } from '../models/ReleaseDates';
import { ReleaseDatesReleaseDatesInner } from '../models/ReleaseDatesReleaseDatesInner';
import { Releases } from '../models/Releases';
import { ReleasesReleasesInner } from '../models/ReleasesReleasesInner';
import { Seriess } from '../models/Seriess';
import { SeriessSeriessInner } from '../models/SeriessSeriessInner';
import { Sources } from '../models/Sources';
import { SourcesSourcesInner } from '../models/SourcesSourcesInner';
import { Tags } from '../models/Tags';
import { TagsTagsInner } from '../models/TagsTagsInner';
import { VintageDates } from '../models/VintageDates';
import { ObservableCategoryApi } from './ObservableAPI';

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class PromiseCategoryApi {
    private api: ObservableCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a category.
     * @param apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param fileType 
     * @param categoryId 
     */
    public getCategoryWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, _options?: Configuration): Promise<HttpInfo<Categories>> {
        const result = this.api.getCategoryWithHttpInfo(apiKey, fileType, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get a category.
     * @param apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param fileType 
     * @param categoryId 
     */
    public getCategory(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, _options?: Configuration): Promise<Categories> {
        const result = this.api.getCategory(apiKey, fileType, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get the child categories for a specified parent category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryChildrenWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Categories>> {
        const result = this.api.getCategoryChildrenWithHttpInfo(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get the child categories for a specified parent category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryChildren(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Categories> {
        const result = this.api.getCategoryChildren(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get related categories for a specified category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryRelatedWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Categories>> {
        const result = this.api.getCategoryRelatedWithHttpInfo(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get related categories for a specified category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryRelated(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Categories> {
        const result = this.api.getCategoryRelated(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getCategoryRelatedTagsWithHttpInfo(apiKey: string, categoryId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getCategoryRelatedTagsWithHttpInfo(apiKey, categoryId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getCategoryRelatedTags(apiKey: string, categoryId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<Tags> {
        const result = this.api.getCategoryRelatedTags(apiKey, categoryId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getCategorySeriesWithHttpInfo(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getCategorySeriesWithHttpInfo(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
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
    public getCategorySeries(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getCategorySeries(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
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
    public getCategoryTagsWithHttpInfo(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getCategoryTagsWithHttpInfo(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getCategoryTags(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<Tags> {
        const result = this.api.getCategoryTags(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableReleaseApi } from './ObservableAPI';

import { ReleaseApiRequestFactory, ReleaseApiResponseProcessor} from "../apis/ReleaseApi";
export class PromiseReleaseApi {
    private api: ObservableReleaseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReleaseApiRequestFactory,
        responseProcessor?: ReleaseApiResponseProcessor
    ) {
        this.api = new ObservableReleaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseDatesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<ReleaseDates>> {
        const result = this.api.getReleaseDatesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseDates(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<ReleaseDates> {
        const result = this.api.getReleaseDates(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get information for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseInfoWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Releases>> {
        const result = this.api.getReleaseInfoWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get information for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Releases> {
        const result = this.api.getReleaseInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getReleaseRelatedTagsWithHttpInfo(apiKey: string, releaseId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getReleaseRelatedTagsWithHttpInfo(apiKey, releaseId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getReleaseRelatedTags(apiKey: string, releaseId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Promise<Tags> {
        const result = this.api.getReleaseRelatedTags(apiKey, releaseId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getReleaseSeriesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getReleaseSeriesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
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
    public getReleaseSeries(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getReleaseSeries(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
    }

    /**
     * Get sources for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseSourcesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Sources>> {
        const result = this.api.getReleaseSourcesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * Get sources for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseSources(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Sources> {
        const result = this.api.getReleaseSources(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getReleaseTablesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', elementId?: number, includeObservations?: boolean, observationDate?: string, _options?: Configuration): Promise<HttpInfo<Categories>> {
        const result = this.api.getReleaseTablesWithHttpInfo(apiKey, releaseId, fileType, elementId, includeObservations, observationDate, _options);
        return result.toPromise();
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
    public getReleaseTables(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', elementId?: number, includeObservations?: boolean, observationDate?: string, _options?: Configuration): Promise<Categories> {
        const result = this.api.getReleaseTables(apiKey, releaseId, fileType, elementId, includeObservations, observationDate, _options);
        return result.toPromise();
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
    public getReleaseTagsWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', searchText?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getReleaseTagsWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, searchText, _options);
        return result.toPromise();
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
    public getReleaseTags(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', searchText?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getReleaseTags(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, searchText, _options);
        return result.toPromise();
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
    public getReleasesWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<HttpInfo<Releases>> {
        const result = this.api.getReleasesWithHttpInfo(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
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
    public getReleases(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Promise<Releases> {
        const result = this.api.getReleases(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);
        return result.toPromise();
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
    public getReleasesDatesWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, lastUpdated?: Date, _options?: Configuration): Promise<HttpInfo<ReleaseDates>> {
        const result = this.api.getReleasesDatesWithHttpInfo(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, lastUpdated, _options);
        return result.toPromise();
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
    public getReleasesDates(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, lastUpdated?: Date, _options?: Configuration): Promise<ReleaseDates> {
        const result = this.api.getReleasesDates(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, lastUpdated, _options);
        return result.toPromise();
    }


}



import { ObservableSeriesApi } from './ObservableAPI';

import { SeriesApiRequestFactory, SeriesApiResponseProcessor} from "../apis/SeriesApi";
export class PromiseSeriesApi {
    private api: ObservableSeriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SeriesApiRequestFactory,
        responseProcessor?: SeriesApiResponseProcessor
    ) {
        this.api = new ObservableSeriesApi(configuration, requestFactory, responseProcessor);
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
    public getSeriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getSeriesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeries(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getSeries(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeriesCategoriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Categories>> {
        const result = this.api.getSeriesCategoriesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeriesCategories(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Categories> {
        const result = this.api.getSeriesCategories(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeriesObservationsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, sortOrder?: string, observationStart?: string, observationEnd?: string, units?: string, frequency?: number, aggregationMethod?: string, outputType?: number, vintageDates?: string, _options?: Configuration): Promise<HttpInfo<Observations>> {
        const result = this.api.getSeriesObservationsWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, sortOrder, observationStart, observationEnd, units, frequency, aggregationMethod, outputType, vintageDates, _options);
        return result.toPromise();
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
    public getSeriesObservations(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, sortOrder?: string, observationStart?: string, observationEnd?: string, units?: string, frequency?: number, aggregationMethod?: string, outputType?: number, vintageDates?: string, _options?: Configuration): Promise<Observations> {
        const result = this.api.getSeriesObservations(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, sortOrder, observationStart, observationEnd, units, frequency, aggregationMethod, outputType, vintageDates, _options);
        return result.toPromise();
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
    public getSeriesReleaseWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Releases>> {
        const result = this.api.getSeriesReleaseWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeriesRelease(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Releases> {
        const result = this.api.getSeriesRelease(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSeriesSearchWithHttpInfo(description?: string, apiKey?: string, fileType?: string, searchText?: string, searchType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, filterVariable?: string, filterValue?: string, tagNames?: string, excludeTagNames?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getSeriesSearchWithHttpInfo(description, apiKey, fileType, searchText, searchType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, tagNames, excludeTagNames, _options);
        return result.toPromise();
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
    public getSeriesSearch(description?: string, apiKey?: string, fileType?: string, searchText?: string, searchType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, filterVariable?: string, filterValue?: string, tagNames?: string, excludeTagNames?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getSeriesSearch(description, apiKey, fileType, searchText, searchType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, tagNames, excludeTagNames, _options);
        return result.toPromise();
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
    public getSeriesSearchRelatedTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, excludeTagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getSeriesSearchRelatedTagsWithHttpInfo(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, excludeTagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesSearchRelatedTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, excludeTagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getSeriesSearchRelatedTags(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, excludeTagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesSearchTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getSeriesSearchTagsWithHttpInfo(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesSearchTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getSeriesSearchTags(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getSeriesTagsWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesTags(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getSeriesTags(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSeriesUpdatesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, filterValue?: string, startTime?: string, endTime?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getSeriesUpdatesWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, filterValue, startTime, endTime, _options);
        return result.toPromise();
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
    public getSeriesUpdates(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, filterValue?: string, startTime?: string, endTime?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getSeriesUpdates(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, filterValue, startTime, endTime, _options);
        return result.toPromise();
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
    public getSeriesVintagedatesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, _options?: Configuration): Promise<HttpInfo<VintageDates>> {
        const result = this.api.getSeriesVintagedatesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, _options);
        return result.toPromise();
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
    public getSeriesVintagedates(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, _options?: Configuration): Promise<VintageDates> {
        const result = this.api.getSeriesVintagedates(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, _options);
        return result.toPromise();
    }


}



import { ObservableSourcesApi } from './ObservableAPI';

import { SourcesApiRequestFactory, SourcesApiResponseProcessor} from "../apis/SourcesApi";
export class PromiseSourcesApi {
    private api: ObservableSourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SourcesApiRequestFactory,
        responseProcessor?: SourcesApiResponseProcessor
    ) {
        this.api = new ObservableSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * @param description Get all sources of economic data.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param sourceId The id for a source.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public getSourceWithHttpInfo(description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<HttpInfo<Sources>> {
        const result = this.api.getSourceWithHttpInfo(description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
    }

    /**
     * 
     * @param description Get all sources of economic data.
     * @param apiKey Read API Keys for more information.
     * @param fileType A key or file extension that indicates the type of file to send.
     * @param sourceId The id for a source.
     * @param realtimeStart The start of the real-time period. For more information, see Real-Time Periods.
     * @param realtimeEnd The end of the real-time period. For more information, see Real-Time Periods.
     */
    public getSource(description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Promise<Sources> {
        const result = this.api.getSource(description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, _options);
        return result.toPromise();
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
    public getSourceReleasesWithHttpInfo(the?: string, description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Releases>> {
        const result = this.api.getSourceReleasesWithHttpInfo(the, description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSourceReleases(the?: string, description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Releases> {
        const result = this.api.getSourceReleases(the, description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSourcesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Sources>> {
        const result = this.api.getSourcesWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getSources(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Sources> {
        const result = this.api.getSources(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
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
    public getRelatedTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getRelatedTagsWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getRelatedTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getRelatedTags(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Tags>> {
        const result = this.api.getTagsWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Tags> {
        const result = this.api.getTags(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getTagsSeriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, tagNames?: string, excludeTagNames?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<HttpInfo<Seriess>> {
        const result = this.api.getTagsSeriesWithHttpInfo(description, apiKey, fileType, tagNames, excludeTagNames, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
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
    public getTagsSeries(description?: string, apiKey?: string, fileType?: string, tagNames?: string, excludeTagNames?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Promise<Seriess> {
        const result = this.api.getTagsSeries(description, apiKey, fileType, tagNames, excludeTagNames, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);
        return result.toPromise();
    }


}



