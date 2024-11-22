import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class ObservableCategoryApi {
    private requestFactory: CategoryApiRequestFactory;
    private responseProcessor: CategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryApiResponseProcessor();
    }

    /**
     * Get a category.
     * @param apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param fileType 
     * @param categoryId 
     */
    public getCategoryWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, _options?: Configuration): Observable<HttpInfo<Categories>> {
        const requestContextPromise = this.requestFactory.getCategory(apiKey, fileType, categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a category.
     * @param apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param fileType 
     * @param categoryId 
     */
    public getCategory(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, _options?: Configuration): Observable<Categories> {
        return this.getCategoryWithHttpInfo(apiKey, fileType, categoryId, _options).pipe(map((apiResponse: HttpInfo<Categories>) => apiResponse.data));
    }

    /**
     * Get the child categories for a specified parent category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryChildrenWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Categories>> {
        const requestContextPromise = this.requestFactory.getCategoryChildren(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryChildrenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the child categories for a specified parent category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryChildren(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Categories> {
        return this.getCategoryChildrenWithHttpInfo(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Categories>) => apiResponse.data));
    }

    /**
     * Get related categories for a specified category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryRelatedWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Categories>> {
        const requestContextPromise = this.requestFactory.getCategoryRelated(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryRelatedWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get related categories for a specified category.
     * @param apiKey 
     * @param fileType 
     * @param categoryId 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getCategoryRelated(apiKey: string, fileType?: 'xml' | 'json', categoryId?: number, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Categories> {
        return this.getCategoryRelatedWithHttpInfo(apiKey, fileType, categoryId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Categories>) => apiResponse.data));
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
    public getCategoryRelatedTagsWithHttpInfo(apiKey: string, categoryId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getCategoryRelatedTags(apiKey, categoryId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryRelatedTagsWithHttpInfo(rsp)));
            }));
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
    public getCategoryRelatedTags(apiKey: string, categoryId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<Tags> {
        return this.getCategoryRelatedTagsWithHttpInfo(apiKey, categoryId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getCategorySeriesWithHttpInfo(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getCategorySeries(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategorySeriesWithHttpInfo(rsp)));
            }));
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
    public getCategorySeries(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<Seriess> {
        return this.getCategorySeriesWithHttpInfo(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
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
    public getCategoryTagsWithHttpInfo(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getCategoryTags(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryTagsWithHttpInfo(rsp)));
            }));
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
    public getCategoryTags(apiKey: string, categoryId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<Tags> {
        return this.getCategoryTagsWithHttpInfo(apiKey, categoryId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
    }

}

import { ReleaseApiRequestFactory, ReleaseApiResponseProcessor} from "../apis/ReleaseApi";
export class ObservableReleaseApi {
    private requestFactory: ReleaseApiRequestFactory;
    private responseProcessor: ReleaseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReleaseApiRequestFactory,
        responseProcessor?: ReleaseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReleaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReleaseApiResponseProcessor();
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseDatesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<ReleaseDates>> {
        const requestContextPromise = this.requestFactory.getReleaseDates(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseDatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve release dates for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseDates(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<ReleaseDates> {
        return this.getReleaseDatesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<ReleaseDates>) => apiResponse.data));
    }

    /**
     * Get information for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseInfoWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Releases>> {
        const requestContextPromise = this.requestFactory.getReleaseInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Releases> {
        return this.getReleaseInfoWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Releases>) => apiResponse.data));
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
    public getReleaseRelatedTagsWithHttpInfo(apiKey: string, releaseId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getReleaseRelatedTags(apiKey, releaseId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseRelatedTagsWithHttpInfo(rsp)));
            }));
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
    public getReleaseRelatedTags(apiKey: string, releaseId: number, tagNames: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_count' | 'popularity', sortOrder?: 'asc' | 'desc', _options?: Configuration): Observable<Tags> {
        return this.getReleaseRelatedTagsWithHttpInfo(apiKey, releaseId, tagNames, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getReleaseSeriesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getReleaseSeries(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseSeriesWithHttpInfo(rsp)));
            }));
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
    public getReleaseSeries(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<Seriess> {
        return this.getReleaseSeriesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
    }

    /**
     * Get sources for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseSourcesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Sources>> {
        const requestContextPromise = this.requestFactory.getReleaseSources(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get sources for a specific economic data release.
     * @param apiKey 
     * @param releaseId 
     * @param fileType 
     * @param realtimeStart 
     * @param realtimeEnd 
     */
    public getReleaseSources(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Sources> {
        return this.getReleaseSourcesWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Sources>) => apiResponse.data));
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
    public getReleaseTablesWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', elementId?: number, includeObservations?: boolean, observationDate?: string, _options?: Configuration): Observable<HttpInfo<Categories>> {
        const requestContextPromise = this.requestFactory.getReleaseTables(apiKey, releaseId, fileType, elementId, includeObservations, observationDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseTablesWithHttpInfo(rsp)));
            }));
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
    public getReleaseTables(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', elementId?: number, includeObservations?: boolean, observationDate?: string, _options?: Configuration): Observable<Categories> {
        return this.getReleaseTablesWithHttpInfo(apiKey, releaseId, fileType, elementId, includeObservations, observationDate, _options).pipe(map((apiResponse: HttpInfo<Categories>) => apiResponse.data));
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
    public getReleaseTagsWithHttpInfo(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', searchText?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getReleaseTags(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, searchText, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleaseTagsWithHttpInfo(rsp)));
            }));
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
    public getReleaseTags(apiKey: string, releaseId: number, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'name' | 'group_id', sortOrder?: 'asc' | 'desc', searchText?: string, _options?: Configuration): Observable<Tags> {
        return this.getReleaseTagsWithHttpInfo(apiKey, releaseId, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, searchText, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getReleasesWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<HttpInfo<Releases>> {
        const requestContextPromise = this.requestFactory.getReleases(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleasesWithHttpInfo(rsp)));
            }));
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
    public getReleases(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, orderBy?: 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end', sortOrder?: 'asc' | 'desc', filterVariable?: string, filterValue?: string, _options?: Configuration): Observable<Releases> {
        return this.getReleasesWithHttpInfo(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, _options).pipe(map((apiResponse: HttpInfo<Releases>) => apiResponse.data));
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
    public getReleasesDatesWithHttpInfo(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, lastUpdated?: Date, _options?: Configuration): Observable<HttpInfo<ReleaseDates>> {
        const requestContextPromise = this.requestFactory.getReleasesDates(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, lastUpdated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleasesDatesWithHttpInfo(rsp)));
            }));
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
    public getReleasesDates(apiKey: string, fileType?: 'xml' | 'json', realtimeStart?: string, realtimeEnd?: string, limit?: number, offset?: number, lastUpdated?: Date, _options?: Configuration): Observable<ReleaseDates> {
        return this.getReleasesDatesWithHttpInfo(apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, lastUpdated, _options).pipe(map((apiResponse: HttpInfo<ReleaseDates>) => apiResponse.data));
    }

}

import { SeriesApiRequestFactory, SeriesApiResponseProcessor} from "../apis/SeriesApi";
export class ObservableSeriesApi {
    private requestFactory: SeriesApiRequestFactory;
    private responseProcessor: SeriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SeriesApiRequestFactory,
        responseProcessor?: SeriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SeriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SeriesApiResponseProcessor();
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
    public getSeriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getSeries(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesWithHttpInfo(rsp)));
            }));
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
    public getSeries(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Seriess> {
        return this.getSeriesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
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
    public getSeriesCategoriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Categories>> {
        const requestContextPromise = this.requestFactory.getSeriesCategories(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesCategoriesWithHttpInfo(rsp)));
            }));
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
    public getSeriesCategories(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Categories> {
        return this.getSeriesCategoriesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Categories>) => apiResponse.data));
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
    public getSeriesObservationsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, sortOrder?: string, observationStart?: string, observationEnd?: string, units?: string, frequency?: number, aggregationMethod?: string, outputType?: number, vintageDates?: string, _options?: Configuration): Observable<HttpInfo<Observations>> {
        const requestContextPromise = this.requestFactory.getSeriesObservations(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, sortOrder, observationStart, observationEnd, units, frequency, aggregationMethod, outputType, vintageDates, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesObservationsWithHttpInfo(rsp)));
            }));
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
    public getSeriesObservations(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, sortOrder?: string, observationStart?: string, observationEnd?: string, units?: string, frequency?: number, aggregationMethod?: string, outputType?: number, vintageDates?: string, _options?: Configuration): Observable<Observations> {
        return this.getSeriesObservationsWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, sortOrder, observationStart, observationEnd, units, frequency, aggregationMethod, outputType, vintageDates, _options).pipe(map((apiResponse: HttpInfo<Observations>) => apiResponse.data));
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
    public getSeriesReleaseWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Releases>> {
        const requestContextPromise = this.requestFactory.getSeriesRelease(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesReleaseWithHttpInfo(rsp)));
            }));
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
    public getSeriesRelease(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Releases> {
        return this.getSeriesReleaseWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Releases>) => apiResponse.data));
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
    public getSeriesSearchWithHttpInfo(description?: string, apiKey?: string, fileType?: string, searchText?: string, searchType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, filterVariable?: string, filterValue?: string, tagNames?: string, excludeTagNames?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getSeriesSearch(description, apiKey, fileType, searchText, searchType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, tagNames, excludeTagNames, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesSearchWithHttpInfo(rsp)));
            }));
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
    public getSeriesSearch(description?: string, apiKey?: string, fileType?: string, searchText?: string, searchType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, filterVariable?: string, filterValue?: string, tagNames?: string, excludeTagNames?: string, _options?: Configuration): Observable<Seriess> {
        return this.getSeriesSearchWithHttpInfo(description, apiKey, fileType, searchText, searchType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, filterVariable, filterValue, tagNames, excludeTagNames, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
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
    public getSeriesSearchRelatedTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, excludeTagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getSeriesSearchRelatedTags(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, excludeTagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesSearchRelatedTagsWithHttpInfo(rsp)));
            }));
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
    public getSeriesSearchRelatedTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, excludeTagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Tags> {
        return this.getSeriesSearchRelatedTagsWithHttpInfo(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, excludeTagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getSeriesSearchTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getSeriesSearchTags(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesSearchTagsWithHttpInfo(rsp)));
            }));
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
    public getSeriesSearchTags(description?: string, apiKey?: string, fileType?: string, seriesSearchText?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, tagSearchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Tags> {
        return this.getSeriesSearchTagsWithHttpInfo(description, apiKey, fileType, seriesSearchText, realtimeStart, realtimeEnd, tagNames, tagGroupId, tagSearchText, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getSeriesTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getSeriesTags(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesTagsWithHttpInfo(rsp)));
            }));
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
    public getSeriesTags(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Tags> {
        return this.getSeriesTagsWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getSeriesUpdatesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, filterValue?: string, startTime?: string, endTime?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getSeriesUpdates(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, filterValue, startTime, endTime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesUpdatesWithHttpInfo(rsp)));
            }));
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
    public getSeriesUpdates(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, filterValue?: string, startTime?: string, endTime?: string, _options?: Configuration): Observable<Seriess> {
        return this.getSeriesUpdatesWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, filterValue, startTime, endTime, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
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
    public getSeriesVintagedatesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, _options?: Configuration): Observable<HttpInfo<VintageDates>> {
        const requestContextPromise = this.requestFactory.getSeriesVintagedates(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeriesVintagedatesWithHttpInfo(rsp)));
            }));
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
    public getSeriesVintagedates(description?: string, apiKey?: string, fileType?: string, seriesId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, _options?: Configuration): Observable<VintageDates> {
        return this.getSeriesVintagedatesWithHttpInfo(description, apiKey, fileType, seriesId, realtimeStart, realtimeEnd, limit, offset, _options).pipe(map((apiResponse: HttpInfo<VintageDates>) => apiResponse.data));
    }

}

import { SourcesApiRequestFactory, SourcesApiResponseProcessor} from "../apis/SourcesApi";
export class ObservableSourcesApi {
    private requestFactory: SourcesApiRequestFactory;
    private responseProcessor: SourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SourcesApiRequestFactory,
        responseProcessor?: SourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SourcesApiResponseProcessor();
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
    public getSourceWithHttpInfo(description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<HttpInfo<Sources>> {
        const requestContextPromise = this.requestFactory.getSource(description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourceWithHttpInfo(rsp)));
            }));
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
    public getSource(description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, _options?: Configuration): Observable<Sources> {
        return this.getSourceWithHttpInfo(description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, _options).pipe(map((apiResponse: HttpInfo<Sources>) => apiResponse.data));
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
    public getSourceReleasesWithHttpInfo(the?: string, description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Releases>> {
        const requestContextPromise = this.requestFactory.getSourceReleases(the, description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourceReleasesWithHttpInfo(rsp)));
            }));
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
    public getSourceReleases(the?: string, description?: string, apiKey?: string, fileType?: string, sourceId?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Releases> {
        return this.getSourceReleasesWithHttpInfo(the, description, apiKey, fileType, sourceId, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Releases>) => apiResponse.data));
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
    public getSourcesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Sources>> {
        const requestContextPromise = this.requestFactory.getSources(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourcesWithHttpInfo(rsp)));
            }));
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
    public getSources(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Sources> {
        return this.getSourcesWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Sources>) => apiResponse.data));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
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
    public getRelatedTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getRelatedTags(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRelatedTagsWithHttpInfo(rsp)));
            }));
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
    public getRelatedTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Tags> {
        return this.getRelatedTagsWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getTagsWithHttpInfo(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Tags>> {
        const requestContextPromise = this.requestFactory.getTags(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagsWithHttpInfo(rsp)));
            }));
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
    public getTags(description?: string, apiKey?: string, fileType?: string, realtimeStart?: string, realtimeEnd?: string, tagNames?: string, tagGroupId?: string, searchText?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Tags> {
        return this.getTagsWithHttpInfo(description, apiKey, fileType, realtimeStart, realtimeEnd, tagNames, tagGroupId, searchText, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Tags>) => apiResponse.data));
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
    public getTagsSeriesWithHttpInfo(description?: string, apiKey?: string, fileType?: string, tagNames?: string, excludeTagNames?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<Seriess>> {
        const requestContextPromise = this.requestFactory.getTagsSeries(description, apiKey, fileType, tagNames, excludeTagNames, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagsSeriesWithHttpInfo(rsp)));
            }));
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
    public getTagsSeries(description?: string, apiKey?: string, fileType?: string, tagNames?: string, excludeTagNames?: string, realtimeStart?: string, realtimeEnd?: string, limit?: string, offset?: number, orderBy?: string, sortOrder?: string, _options?: Configuration): Observable<Seriess> {
        return this.getTagsSeriesWithHttpInfo(description, apiKey, fileType, tagNames, excludeTagNames, realtimeStart, realtimeEnd, limit, offset, orderBy, sortOrder, _options).pipe(map((apiResponse: HttpInfo<Seriess>) => apiResponse.data));
    }

}
