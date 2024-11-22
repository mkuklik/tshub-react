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

import { ObservableCategoryApi } from "./ObservableAPI";
import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";

export interface CategoryApiGetCategoryRequest {
    /**
     * 88e6be3b42147d9eb6726f79a6671453
     * @type string
     * @memberof CategoryApigetCategory
     */
    apiKey: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategory
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategory
     */
    categoryId?: number
}

export interface CategoryApiGetCategoryChildrenRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryChildren
     */
    apiKey: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategoryChildren
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryChildren
     */
    categoryId?: number
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryChildren
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryChildren
     */
    realtimeEnd?: string
}

export interface CategoryApiGetCategoryRelatedRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelated
     */
    apiKey: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategoryRelated
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryRelated
     */
    categoryId?: number
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelated
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelated
     */
    realtimeEnd?: string
}

export interface CategoryApiGetCategoryRelatedTagsRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelatedTags
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryRelatedTags
     */
    categoryId: number
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelatedTags
     */
    tagNames: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategoryRelatedTags
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelatedTags
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryRelatedTags
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryRelatedTags
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryRelatedTags
     */
    offset?: number
    /**
     * 
     * @type &#39;series_count&#39; | &#39;popularity&#39;
     * @memberof CategoryApigetCategoryRelatedTags
     */
    orderBy?: 'series_count' | 'popularity'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CategoryApigetCategoryRelatedTags
     */
    sortOrder?: 'asc' | 'desc'
}

export interface CategoryApiGetCategorySeriesRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategorySeries
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategorySeries
     */
    categoryId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategorySeries
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategorySeries
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategorySeries
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategorySeries
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategorySeries
     */
    offset?: number
    /**
     * 
     * @type &#39;series_id&#39; | &#39;title&#39; | &#39;units&#39; | &#39;frequency&#39; | &#39;seasonal_adjustment&#39; | &#39;realtime_start&#39; | &#39;realtime_end&#39; | &#39;last_updated&#39; | &#39;observation_start&#39; | &#39;observation_end&#39; | &#39;popularity&#39; | &#39;group_popularity&#39;
     * @memberof CategoryApigetCategorySeries
     */
    orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CategoryApigetCategorySeries
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategorySeries
     */
    filterVariable?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategorySeries
     */
    filterValue?: string
}

export interface CategoryApiGetCategoryTagsRequest {
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryTags
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryTags
     */
    categoryId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof CategoryApigetCategoryTags
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryTags
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof CategoryApigetCategoryTags
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryTags
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CategoryApigetCategoryTags
     */
    offset?: number
    /**
     * 
     * @type &#39;name&#39; | &#39;group_id&#39;
     * @memberof CategoryApigetCategoryTags
     */
    orderBy?: 'name' | 'group_id'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof CategoryApigetCategoryTags
     */
    sortOrder?: 'asc' | 'desc'
}

export class ObjectCategoryApi {
    private api: ObservableCategoryApi

    public constructor(configuration: Configuration, requestFactory?: CategoryApiRequestFactory, responseProcessor?: CategoryApiResponseProcessor) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a category.
     * @param param the request object
     */
    public getCategoryWithHttpInfo(param: CategoryApiGetCategoryRequest, options?: Configuration): Promise<HttpInfo<Categories>> {
        return this.api.getCategoryWithHttpInfo(param.apiKey, param.fileType, param.categoryId,  options).toPromise();
    }

    /**
     * Get a category.
     * @param param the request object
     */
    public getCategory(param: CategoryApiGetCategoryRequest, options?: Configuration): Promise<Categories> {
        return this.api.getCategory(param.apiKey, param.fileType, param.categoryId,  options).toPromise();
    }

    /**
     * Get the child categories for a specified parent category.
     * @param param the request object
     */
    public getCategoryChildrenWithHttpInfo(param: CategoryApiGetCategoryChildrenRequest, options?: Configuration): Promise<HttpInfo<Categories>> {
        return this.api.getCategoryChildrenWithHttpInfo(param.apiKey, param.fileType, param.categoryId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get the child categories for a specified parent category.
     * @param param the request object
     */
    public getCategoryChildren(param: CategoryApiGetCategoryChildrenRequest, options?: Configuration): Promise<Categories> {
        return this.api.getCategoryChildren(param.apiKey, param.fileType, param.categoryId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get related categories for a specified category.
     * @param param the request object
     */
    public getCategoryRelatedWithHttpInfo(param: CategoryApiGetCategoryRelatedRequest, options?: Configuration): Promise<HttpInfo<Categories>> {
        return this.api.getCategoryRelatedWithHttpInfo(param.apiKey, param.fileType, param.categoryId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get related categories for a specified category.
     * @param param the request object
     */
    public getCategoryRelated(param: CategoryApiGetCategoryRelatedRequest, options?: Configuration): Promise<Categories> {
        return this.api.getCategoryRelated(param.apiKey, param.fileType, param.categoryId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Retrieve related tags for a specific category.
     * @param param the request object
     */
    public getCategoryRelatedTagsWithHttpInfo(param: CategoryApiGetCategoryRelatedTagsRequest, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getCategoryRelatedTagsWithHttpInfo(param.apiKey, param.categoryId, param.tagNames, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve related tags for a specific category.
     * @param param the request object
     */
    public getCategoryRelatedTags(param: CategoryApiGetCategoryRelatedTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getCategoryRelatedTags(param.apiKey, param.categoryId, param.tagNames, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve series within a specified category.
     * @param param the request object
     */
    public getCategorySeriesWithHttpInfo(param: CategoryApiGetCategorySeriesRequest, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getCategorySeriesWithHttpInfo(param.apiKey, param.categoryId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Retrieve series within a specified category.
     * @param param the request object
     */
    public getCategorySeries(param: CategoryApiGetCategorySeriesRequest, options?: Configuration): Promise<Seriess> {
        return this.api.getCategorySeries(param.apiKey, param.categoryId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Retrieve tags for a specific category.
     * @param param the request object
     */
    public getCategoryTagsWithHttpInfo(param: CategoryApiGetCategoryTagsRequest, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getCategoryTagsWithHttpInfo(param.apiKey, param.categoryId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve tags for a specific category.
     * @param param the request object
     */
    public getCategoryTags(param: CategoryApiGetCategoryTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getCategoryTags(param.apiKey, param.categoryId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

}

import { ObservableReleaseApi } from "./ObservableAPI";
import { ReleaseApiRequestFactory, ReleaseApiResponseProcessor} from "../apis/ReleaseApi";

export interface ReleaseApiGetReleaseDatesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseDates
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseDates
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseDates
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseDates
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseDates
     */
    realtimeEnd?: string
}

export interface ReleaseApiGetReleaseInfoRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseInfo
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseInfo
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseInfo
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseInfo
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseInfo
     */
    realtimeEnd?: string
}

export interface ReleaseApiGetReleaseRelatedTagsRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    releaseId: number
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    tagNames: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    offset?: number
    /**
     * 
     * @type &#39;series_count&#39; | &#39;popularity&#39;
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    orderBy?: 'series_count' | 'popularity'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof ReleaseApigetReleaseRelatedTags
     */
    sortOrder?: 'asc' | 'desc'
}

export interface ReleaseApiGetReleaseSeriesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSeries
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseSeries
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseSeries
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSeries
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSeries
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseSeries
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseSeries
     */
    offset?: number
    /**
     * 
     * @type &#39;series_id&#39; | &#39;title&#39; | &#39;units&#39; | &#39;frequency&#39; | &#39;seasonal_adjustment&#39; | &#39;realtime_start&#39; | &#39;realtime_end&#39; | &#39;last_updated&#39; | &#39;observation_start&#39; | &#39;observation_end&#39; | &#39;popularity&#39; | &#39;group_popularity&#39;
     * @memberof ReleaseApigetReleaseSeries
     */
    orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof ReleaseApigetReleaseSeries
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSeries
     */
    filterVariable?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSeries
     */
    filterValue?: string
}

export interface ReleaseApiGetReleaseSourcesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSources
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseSources
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseSources
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSources
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseSources
     */
    realtimeEnd?: string
}

export interface ReleaseApiGetReleaseTablesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTables
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseTables
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseTables
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseTables
     */
    elementId?: number
    /**
     * 
     * @type boolean
     * @memberof ReleaseApigetReleaseTables
     */
    includeObservations?: boolean
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTables
     */
    observationDate?: string
}

export interface ReleaseApiGetReleaseTagsRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTags
     */
    apiKey: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseTags
     */
    releaseId: number
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleaseTags
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTags
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTags
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseTags
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleaseTags
     */
    offset?: number
    /**
     * 
     * @type &#39;name&#39; | &#39;group_id&#39;
     * @memberof ReleaseApigetReleaseTags
     */
    orderBy?: 'name' | 'group_id'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof ReleaseApigetReleaseTags
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleaseTags
     */
    searchText?: string
}

export interface ReleaseApiGetReleasesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleases
     */
    apiKey: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleases
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleases
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleases
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleases
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleases
     */
    offset?: number
    /**
     * 
     * @type &#39;release_id&#39; | &#39;name&#39; | &#39;press_release&#39; | &#39;realtime_start&#39; | &#39;realtime_end&#39;
     * @memberof ReleaseApigetReleases
     */
    orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end'
    /**
     * 
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof ReleaseApigetReleases
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleases
     */
    filterVariable?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleases
     */
    filterValue?: string
}

export interface ReleaseApiGetReleasesDatesRequest {
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleasesDates
     */
    apiKey: string
    /**
     * 
     * @type &#39;xml&#39; | &#39;json&#39;
     * @memberof ReleaseApigetReleasesDates
     */
    fileType?: 'xml' | 'json'
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleasesDates
     */
    realtimeStart?: string
    /**
     * 
     * @type string
     * @memberof ReleaseApigetReleasesDates
     */
    realtimeEnd?: string
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleasesDates
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReleaseApigetReleasesDates
     */
    offset?: number
    /**
     * 
     * @type Date
     * @memberof ReleaseApigetReleasesDates
     */
    lastUpdated?: Date
}

export class ObjectReleaseApi {
    private api: ObservableReleaseApi

    public constructor(configuration: Configuration, requestFactory?: ReleaseApiRequestFactory, responseProcessor?: ReleaseApiResponseProcessor) {
        this.api = new ObservableReleaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param param the request object
     */
    public getReleaseDatesWithHttpInfo(param: ReleaseApiGetReleaseDatesRequest, options?: Configuration): Promise<HttpInfo<ReleaseDates>> {
        return this.api.getReleaseDatesWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param param the request object
     */
    public getReleaseDates(param: ReleaseApiGetReleaseDatesRequest, options?: Configuration): Promise<ReleaseDates> {
        return this.api.getReleaseDates(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get information for a specific economic data release.
     * @param param the request object
     */
    public getReleaseInfoWithHttpInfo(param: ReleaseApiGetReleaseInfoRequest, options?: Configuration): Promise<HttpInfo<Releases>> {
        return this.api.getReleaseInfoWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get information for a specific economic data release.
     * @param param the request object
     */
    public getReleaseInfo(param: ReleaseApiGetReleaseInfoRequest, options?: Configuration): Promise<Releases> {
        return this.api.getReleaseInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Retrieve related tags for a specific economic data release.
     * @param param the request object
     */
    public getReleaseRelatedTagsWithHttpInfo(param: ReleaseApiGetReleaseRelatedTagsRequest, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getReleaseRelatedTagsWithHttpInfo(param.apiKey, param.releaseId, param.tagNames, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve related tags for a specific economic data release.
     * @param param the request object
     */
    public getReleaseRelatedTags(param: ReleaseApiGetReleaseRelatedTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getReleaseRelatedTags(param.apiKey, param.releaseId, param.tagNames, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * Get series for a specific economic data release.
     * @param param the request object
     */
    public getReleaseSeriesWithHttpInfo(param: ReleaseApiGetReleaseSeriesRequest, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getReleaseSeriesWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Get series for a specific economic data release.
     * @param param the request object
     */
    public getReleaseSeries(param: ReleaseApiGetReleaseSeriesRequest, options?: Configuration): Promise<Seriess> {
        return this.api.getReleaseSeries(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Get sources for a specific economic data release.
     * @param param the request object
     */
    public getReleaseSourcesWithHttpInfo(param: ReleaseApiGetReleaseSourcesRequest, options?: Configuration): Promise<HttpInfo<Sources>> {
        return this.api.getReleaseSourcesWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get sources for a specific economic data release.
     * @param param the request object
     */
    public getReleaseSources(param: ReleaseApiGetReleaseSourcesRequest, options?: Configuration): Promise<Sources> {
        return this.api.getReleaseSources(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * Get data tables for a specific economic data release.
     * @param param the request object
     */
    public getReleaseTablesWithHttpInfo(param: ReleaseApiGetReleaseTablesRequest, options?: Configuration): Promise<HttpInfo<Categories>> {
        return this.api.getReleaseTablesWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.elementId, param.includeObservations, param.observationDate,  options).toPromise();
    }

    /**
     * Get data tables for a specific economic data release.
     * @param param the request object
     */
    public getReleaseTables(param: ReleaseApiGetReleaseTablesRequest, options?: Configuration): Promise<Categories> {
        return this.api.getReleaseTables(param.apiKey, param.releaseId, param.fileType, param.elementId, param.includeObservations, param.observationDate,  options).toPromise();
    }

    /**
     * Get tags for a specific economic data release.
     * @param param the request object
     */
    public getReleaseTagsWithHttpInfo(param: ReleaseApiGetReleaseTagsRequest, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getReleaseTagsWithHttpInfo(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.searchText,  options).toPromise();
    }

    /**
     * Get tags for a specific economic data release.
     * @param param the request object
     */
    public getReleaseTags(param: ReleaseApiGetReleaseTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getReleaseTags(param.apiKey, param.releaseId, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.searchText,  options).toPromise();
    }

    /**
     * Get all releases of economic data.
     * @param param the request object
     */
    public getReleasesWithHttpInfo(param: ReleaseApiGetReleasesRequest, options?: Configuration): Promise<HttpInfo<Releases>> {
        return this.api.getReleasesWithHttpInfo(param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Get all releases of economic data.
     * @param param the request object
     */
    public getReleases(param: ReleaseApiGetReleasesRequest, options?: Configuration): Promise<Releases> {
        return this.api.getReleases(param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue,  options).toPromise();
    }

    /**
     * Retrieve release dates for all economic data.
     * @param param the request object
     */
    public getReleasesDatesWithHttpInfo(param: ReleaseApiGetReleasesDatesRequest, options?: Configuration): Promise<HttpInfo<ReleaseDates>> {
        return this.api.getReleasesDatesWithHttpInfo(param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.lastUpdated,  options).toPromise();
    }

    /**
     * Retrieve release dates for all economic data.
     * @param param the request object
     */
    public getReleasesDates(param: ReleaseApiGetReleasesDatesRequest, options?: Configuration): Promise<ReleaseDates> {
        return this.api.getReleasesDates(param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.lastUpdated,  options).toPromise();
    }

}

import { ObservableSeriesApi } from "./ObservableAPI";
import { SeriesApiRequestFactory, SeriesApiResponseProcessor} from "../apis/SeriesApi";

export interface SeriesApiGetSeriesRequest {
    /**
     * Get an economic data series.
     * @type string
     * @memberof SeriesApigetSeries
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeries
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeries
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeries
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeries
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeries
     */
    realtimeEnd?: string
}

export interface SeriesApiGetSeriesCategoriesRequest {
    /**
     * Get an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesCategories
     */
    realtimeEnd?: string
}

export interface SeriesApiGetSeriesObservationsRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesObservations
     */
    offset?: number
    /**
     * Sort results is ascending or descending observation_date order.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    sortOrder?: string
    /**
     * The start of the observation period.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    observationStart?: string
    /**
     * The end of the observation period.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    observationEnd?: string
    /**
     * A key that indicates a data value transformation.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    units?: string
    /**
     * An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter.
     * @type number
     * @memberof SeriesApigetSeriesObservations
     */
    frequency?: number
    /**
     * A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    aggregationMethod?: string
    /**
     * An integer that indicates an output type.
     * @type number
     * @memberof SeriesApigetSeriesObservations
     */
    outputType?: number
    /**
     * Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end.
     * @type string
     * @memberof SeriesApigetSeriesObservations
     */
    vintageDates?: string
}

export interface SeriesApiGetSeriesReleaseRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesRelease
     */
    realtimeEnd?: string
}

export interface SeriesApiGetSeriesSearchRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    fileType?: string
    /**
     * The words to match against economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    searchText?: string
    /**
     * Determines the type of search to perform.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    searchType?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesSearch
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending observation_date order.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    sortOrder?: string
    /**
     * The attribute to filter results by.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    filterVariable?: string
    /**
     * The value of the filter_variable attribute to filter results by.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    filterValue?: string
    /**
     * A semicolon delimited list of tag names that series match all of.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    tagNames?: string
    /**
     * A semicolon delimited list of tag names that series match none of.
     * @type string
     * @memberof SeriesApigetSeriesSearch
     */
    excludeTagNames?: string
}

export interface SeriesApiGetSeriesSearchRelatedTagsRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    fileType?: string
    /**
     * The words to match against economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    seriesSearchText?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    realtimeEnd?: string
    /**
     * A semicolon delimited list of tag names that series match all of.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    tagNames?: string
    /**
     * A semicolon delimited list of tag names that series match none of.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    excludeTagNames?: string
    /**
     * A tag group id to filter tags by type.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    tagGroupId?: string
    /**
     * The words to find matching tags with.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    tagSearchText?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending observation_date order.
     * @type string
     * @memberof SeriesApigetSeriesSearchRelatedTags
     */
    sortOrder?: string
}

export interface SeriesApiGetSeriesSearchTagsRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    fileType?: string
    /**
     * The words to match against economic data series.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    seriesSearchText?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    realtimeEnd?: string
    /**
     * A semicolon delimited list of tag names that series match all of.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    tagNames?: string
    /**
     * A tag group id to filter tags by type.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    tagGroupId?: string
    /**
     * The words to find matching tags with.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    tagSearchText?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesSearchTags
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending observation_date order.
     * @type string
     * @memberof SeriesApigetSeriesSearchTags
     */
    sortOrder?: string
}

export interface SeriesApiGetSeriesTagsRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    realtimeEnd?: string
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending observation_date order.
     * @type string
     * @memberof SeriesApigetSeriesTags
     */
    sortOrder?: string
}

export interface SeriesApiGetSeriesUpdatesRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    fileType?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesUpdates
     */
    offset?: number
    /**
     * The value of the filter_variable attribute to filter results by.
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    filterValue?: string
    /**
     * Start time for limiting results for a time range, can filter down to minutes
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    startTime?: string
    /**
     * End time for limiting results for a time range, can filter down to minutes
     * @type string
     * @memberof SeriesApigetSeriesUpdates
     */
    endTime?: string
}

export interface SeriesApiGetSeriesVintagedatesRequest {
    /**
     * Get the observations or data values for an economic data series.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    fileType?: string
    /**
     * The id for a series.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    seriesId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SeriesApigetSeriesVintagedates
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SeriesApigetSeriesVintagedates
     */
    offset?: number
}

export class ObjectSeriesApi {
    private api: ObservableSeriesApi

    public constructor(configuration: Configuration, requestFactory?: SeriesApiRequestFactory, responseProcessor?: SeriesApiResponseProcessor) {
        this.api = new ObservableSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesWithHttpInfo(param: SeriesApiGetSeriesRequest = {}, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getSeriesWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeries(param: SeriesApiGetSeriesRequest = {}, options?: Configuration): Promise<Seriess> {
        return this.api.getSeries(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesCategoriesWithHttpInfo(param: SeriesApiGetSeriesCategoriesRequest = {}, options?: Configuration): Promise<HttpInfo<Categories>> {
        return this.api.getSeriesCategoriesWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesCategories(param: SeriesApiGetSeriesCategoriesRequest = {}, options?: Configuration): Promise<Categories> {
        return this.api.getSeriesCategories(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesObservationsWithHttpInfo(param: SeriesApiGetSeriesObservationsRequest = {}, options?: Configuration): Promise<HttpInfo<Observations>> {
        return this.api.getSeriesObservationsWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.sortOrder, param.observationStart, param.observationEnd, param.units, param.frequency, param.aggregationMethod, param.outputType, param.vintageDates,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesObservations(param: SeriesApiGetSeriesObservationsRequest = {}, options?: Configuration): Promise<Observations> {
        return this.api.getSeriesObservations(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.sortOrder, param.observationStart, param.observationEnd, param.units, param.frequency, param.aggregationMethod, param.outputType, param.vintageDates,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesReleaseWithHttpInfo(param: SeriesApiGetSeriesReleaseRequest = {}, options?: Configuration): Promise<HttpInfo<Releases>> {
        return this.api.getSeriesReleaseWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesRelease(param: SeriesApiGetSeriesReleaseRequest = {}, options?: Configuration): Promise<Releases> {
        return this.api.getSeriesRelease(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearchWithHttpInfo(param: SeriesApiGetSeriesSearchRequest = {}, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getSeriesSearchWithHttpInfo(param.description, param.apiKey, param.fileType, param.searchText, param.searchType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue, param.tagNames, param.excludeTagNames,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearch(param: SeriesApiGetSeriesSearchRequest = {}, options?: Configuration): Promise<Seriess> {
        return this.api.getSeriesSearch(param.description, param.apiKey, param.fileType, param.searchText, param.searchType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder, param.filterVariable, param.filterValue, param.tagNames, param.excludeTagNames,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearchRelatedTagsWithHttpInfo(param: SeriesApiGetSeriesSearchRelatedTagsRequest = {}, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getSeriesSearchRelatedTagsWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesSearchText, param.realtimeStart, param.realtimeEnd, param.tagNames, param.excludeTagNames, param.tagGroupId, param.tagSearchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearchRelatedTags(param: SeriesApiGetSeriesSearchRelatedTagsRequest = {}, options?: Configuration): Promise<Tags> {
        return this.api.getSeriesSearchRelatedTags(param.description, param.apiKey, param.fileType, param.seriesSearchText, param.realtimeStart, param.realtimeEnd, param.tagNames, param.excludeTagNames, param.tagGroupId, param.tagSearchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearchTagsWithHttpInfo(param: SeriesApiGetSeriesSearchTagsRequest = {}, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getSeriesSearchTagsWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesSearchText, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.tagSearchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesSearchTags(param: SeriesApiGetSeriesSearchTagsRequest = {}, options?: Configuration): Promise<Tags> {
        return this.api.getSeriesSearchTags(param.description, param.apiKey, param.fileType, param.seriesSearchText, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.tagSearchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesTagsWithHttpInfo(param: SeriesApiGetSeriesTagsRequest = {}, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getSeriesTagsWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesTags(param: SeriesApiGetSeriesTagsRequest = {}, options?: Configuration): Promise<Tags> {
        return this.api.getSeriesTags(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesUpdatesWithHttpInfo(param: SeriesApiGetSeriesUpdatesRequest = {}, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getSeriesUpdatesWithHttpInfo(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.filterValue, param.startTime, param.endTime,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesUpdates(param: SeriesApiGetSeriesUpdatesRequest = {}, options?: Configuration): Promise<Seriess> {
        return this.api.getSeriesUpdates(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.filterValue, param.startTime, param.endTime,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesVintagedatesWithHttpInfo(param: SeriesApiGetSeriesVintagedatesRequest = {}, options?: Configuration): Promise<HttpInfo<VintageDates>> {
        return this.api.getSeriesVintagedatesWithHttpInfo(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSeriesVintagedates(param: SeriesApiGetSeriesVintagedatesRequest = {}, options?: Configuration): Promise<VintageDates> {
        return this.api.getSeriesVintagedates(param.description, param.apiKey, param.fileType, param.seriesId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableSourcesApi } from "./ObservableAPI";
import { SourcesApiRequestFactory, SourcesApiResponseProcessor} from "../apis/SourcesApi";

export interface SourcesApiGetSourceRequest {
    /**
     * Get all sources of economic data.
     * @type string
     * @memberof SourcesApigetSource
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SourcesApigetSource
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SourcesApigetSource
     */
    fileType?: string
    /**
     * The id for a source.
     * @type string
     * @memberof SourcesApigetSource
     */
    sourceId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSource
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSource
     */
    realtimeEnd?: string
}

export interface SourcesApiGetSourceReleasesRequest {
    /**
     * #Description
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    the?: string
    /**
     * Get all sources of economic data.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    fileType?: string
    /**
     * The id for a source.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    sourceId?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SourcesApigetSourceReleases
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending order for attribute values specified by order_by.
     * @type string
     * @memberof SourcesApigetSourceReleases
     */
    sortOrder?: string
}

export interface SourcesApiGetSourcesRequest {
    /**
     * Get all sources of economic data.
     * @type string
     * @memberof SourcesApigetSources
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof SourcesApigetSources
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof SourcesApigetSources
     */
    fileType?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSources
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof SourcesApigetSources
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof SourcesApigetSources
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof SourcesApigetSources
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof SourcesApigetSources
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending order for attribute values specified by order_by.
     * @type string
     * @memberof SourcesApigetSources
     */
    sortOrder?: string
}

export class ObjectSourcesApi {
    private api: ObservableSourcesApi

    public constructor(configuration: Configuration, requestFactory?: SourcesApiRequestFactory, responseProcessor?: SourcesApiResponseProcessor) {
        this.api = new ObservableSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * @param param the request object
     */
    public getSourceWithHttpInfo(param: SourcesApiGetSourceRequest = {}, options?: Configuration): Promise<HttpInfo<Sources>> {
        return this.api.getSourceWithHttpInfo(param.description, param.apiKey, param.fileType, param.sourceId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSource(param: SourcesApiGetSourceRequest = {}, options?: Configuration): Promise<Sources> {
        return this.api.getSource(param.description, param.apiKey, param.fileType, param.sourceId, param.realtimeStart, param.realtimeEnd,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSourceReleasesWithHttpInfo(param: SourcesApiGetSourceReleasesRequest = {}, options?: Configuration): Promise<HttpInfo<Releases>> {
        return this.api.getSourceReleasesWithHttpInfo(param.the, param.description, param.apiKey, param.fileType, param.sourceId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSourceReleases(param: SourcesApiGetSourceReleasesRequest = {}, options?: Configuration): Promise<Releases> {
        return this.api.getSourceReleases(param.the, param.description, param.apiKey, param.fileType, param.sourceId, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSourcesWithHttpInfo(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<HttpInfo<Sources>> {
        return this.api.getSourcesWithHttpInfo(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getSources(param: SourcesApiGetSourcesRequest = {}, options?: Configuration): Promise<Sources> {
        return this.api.getSources(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiGetRelatedTagsRequest {
    /**
     * Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    fileType?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    realtimeEnd?: string
    /**
     * A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    tagNames?: string
    /**
     * A tag group id to filter tags by type.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    tagGroupId?: string
    /**
     * The words to find matching tags with.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    searchText?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof TagsApigetRelatedTags
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending order for attribute values specified by order_by.
     * @type string
     * @memberof TagsApigetRelatedTags
     */
    sortOrder?: string
}

export interface TagsApiGetTagsRequest {
    /**
     * Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @type string
     * @memberof TagsApigetTags
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof TagsApigetTags
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof TagsApigetTags
     */
    fileType?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetTags
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetTags
     */
    realtimeEnd?: string
    /**
     * A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @type string
     * @memberof TagsApigetTags
     */
    tagNames?: string
    /**
     * A tag group id to filter tags by type.
     * @type string
     * @memberof TagsApigetTags
     */
    tagGroupId?: string
    /**
     * The words to find matching tags with.
     * @type string
     * @memberof TagsApigetTags
     */
    searchText?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof TagsApigetTags
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof TagsApigetTags
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof TagsApigetTags
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending order for attribute values specified by order_by.
     * @type string
     * @memberof TagsApigetTags
     */
    sortOrder?: string
}

export interface TagsApiGetTagsSeriesRequest {
    /**
     * Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    description?: string
    /**
     * Read API Keys for more information.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    apiKey?: string
    /**
     * A key or file extension that indicates the type of file to send.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    fileType?: string
    /**
     * A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    tagNames?: string
    /**
     * A semicolon delimited list of tag names that series match none of.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    excludeTagNames?: string
    /**
     * The start of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    realtimeStart?: string
    /**
     * The end of the real-time period. For more information, see Real-Time Periods.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    realtimeEnd?: string
    /**
     * The maximum number of results to return.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    limit?: string
    /**
     * non-negative integer, optional, default: 0
     * @type number
     * @memberof TagsApigetTagsSeries
     */
    offset?: number
    /**
     * Order results by values of the specified attribute.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    orderBy?: string
    /**
     * Sort results is ascending or descending order for attribute values specified by order_by.
     * @type string
     * @memberof TagsApigetTagsSeries
     */
    sortOrder?: string
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * @param param the request object
     */
    public getRelatedTagsWithHttpInfo(param: TagsApiGetRelatedTagsRequest = {}, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getRelatedTagsWithHttpInfo(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.searchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getRelatedTags(param: TagsApiGetRelatedTagsRequest = {}, options?: Configuration): Promise<Tags> {
        return this.api.getRelatedTags(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.searchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getTagsWithHttpInfo(param: TagsApiGetTagsRequest = {}, options?: Configuration): Promise<HttpInfo<Tags>> {
        return this.api.getTagsWithHttpInfo(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.searchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getTags(param: TagsApiGetTagsRequest = {}, options?: Configuration): Promise<Tags> {
        return this.api.getTags(param.description, param.apiKey, param.fileType, param.realtimeStart, param.realtimeEnd, param.tagNames, param.tagGroupId, param.searchText, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getTagsSeriesWithHttpInfo(param: TagsApiGetTagsSeriesRequest = {}, options?: Configuration): Promise<HttpInfo<Seriess>> {
        return this.api.getTagsSeriesWithHttpInfo(param.description, param.apiKey, param.fileType, param.tagNames, param.excludeTagNames, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getTagsSeries(param: TagsApiGetTagsSeriesRequest = {}, options?: Configuration): Promise<Seriess> {
        return this.api.getTagsSeries(param.description, param.apiKey, param.fileType, param.tagNames, param.excludeTagNames, param.realtimeStart, param.realtimeEnd, param.limit, param.offset, param.orderBy, param.sortOrder,  options).toPromise();
    }

}
