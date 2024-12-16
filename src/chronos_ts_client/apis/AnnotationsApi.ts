// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Annotation } from '../models/Annotation';
import { AnnotationUpdate } from '../models/AnnotationUpdate';
import { Frequency } from '../models/Frequency';

/**
 * no description
 */
export class AnnotationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add observation target
     * Add observation target
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public async appApiAnnotationAddTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationAddTarget", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationAddTarget", "collName");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationAddTarget", "symbol");
        }






        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}/{symbol}/targets'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "number", ""));
        }

        // Query Params
        if (freq !== undefined) {
            requestContext.setQueryParam("freq", ObjectSerializer.serialize(freq, "Frequency", ""));
        }

        // Query Params
        if (vid !== undefined) {
            requestContext.setQueryParam("vid", ObjectSerializer.serialize(vid, "string", ""));
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
     * Create an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param annotation Annotation
     */
    public async appApiAnnotationCreate(spaceName: string, collName: string, annotation: Annotation, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationCreate", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationCreate", "collName");
        }


        // verify required parameter 'annotation' is not null or undefined
        if (annotation === null || annotation === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationCreate", "annotation");
        }


        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}'
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
            ObjectSerializer.serialize(annotation, "Annotation", ""),
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
     * 
     * Delete annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public async appApiAnnotationDelete(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationDelete", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationDelete", "collName");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationDelete", "symbol");
        }


        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}/{symbol}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

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
     * Get an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     */
    public async appApiAnnotationGet(spaceName: string, collName: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationGet", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationGet", "collName");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationGet", "symbol");
        }


        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}/{symbol}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

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
     * List annotations
     * List annotations
     * @param spaceName space name
     * @param collName collection name
     */
    public async appApiAnnotationGetList(spaceName: string, collName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationGetList", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationGetList", "collName");
        }


        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}'
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
     * delete observation targets
     * delete observation targets
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param tsid time series id
     * @param index time series index
     * @param freq frequency
     * @param vid vintage id
     */
    public async appApiAnnotationRemoveTarget(spaceName: string, collName: string, symbol: string, tsid?: string, index?: number, freq?: Frequency, vid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationRemoveTarget", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationRemoveTarget", "collName");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationRemoveTarget", "symbol");
        }






        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}/{symbol}/targets'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "number", ""));
        }

        // Query Params
        if (freq !== undefined) {
            requestContext.setQueryParam("freq", ObjectSerializer.serialize(freq, "Frequency", ""));
        }

        // Query Params
        if (vid !== undefined) {
            requestContext.setQueryParam("vid", ObjectSerializer.serialize(vid, "string", ""));
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
     * Update an annotation
     * @param spaceName space name
     * @param collName collection name
     * @param symbol annotation symbol
     * @param annotationUpdate Annotation
     */
    public async appApiAnnotationUpdate(spaceName: string, collName: string, symbol: string, annotationUpdate: AnnotationUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'spaceName' is not null or undefined
        if (spaceName === null || spaceName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationUpdate", "spaceName");
        }


        // verify required parameter 'collName' is not null or undefined
        if (collName === null || collName === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationUpdate", "collName");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationUpdate", "symbol");
        }


        // verify required parameter 'annotationUpdate' is not null or undefined
        if (annotationUpdate === null || annotationUpdate === undefined) {
            throw new RequiredError("AnnotationsApi", "appApiAnnotationUpdate", "annotationUpdate");
        }


        // Path Params
        const localVarPath = '/annotation/{space_name}/{coll_name}/{symbol}'
            .replace('{' + 'space_name' + '}', encodeURIComponent(String(spaceName)))
            .replace('{' + 'coll_name' + '}', encodeURIComponent(String(collName)))
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(annotationUpdate, "AnnotationUpdate", ""),
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

export class AnnotationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationAddTarget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationAddTargetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiAnnotationCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Annotation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiAnnotationGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Annotation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Annotation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Annotation", ""
            ) as Annotation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationGetList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationGetListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Annotation> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Annotation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Annotation>", ""
            ) as Array<Annotation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Annotation> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Annotation>", ""
            ) as Array<Annotation>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiAnnotationRemoveTarget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationRemoveTargetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiAnnotationUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiAnnotationUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "space/collection/annotation not found", undefined, response.headers);
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
