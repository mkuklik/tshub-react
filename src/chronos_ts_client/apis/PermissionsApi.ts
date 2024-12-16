// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ObjectType } from '../models/ObjectType';
import { Policy } from '../models/Policy';
import { PolicyUpdate } from '../models/PolicyUpdate';

/**
 * no description
 */
export class PermissionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List explicit permissions for object
     * List permissions for object
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiPermissionGet(spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/raw/permissions/object';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (spaceId !== undefined) {
            requestContext.setQueryParam("space_id", ObjectSerializer.serialize(spaceId, "string", ""));
        }

        // Query Params
        if (collId !== undefined) {
            requestContext.setQueryParam("coll_id", ObjectSerializer.serialize(collId, "string", ""));
        }

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
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
     * delete permission
     * delete permission
     * @param objType object
     * @param subobject subobject mark
     * @param action action can be Verb or Role
     * @param effect permission effect
     * @param uid user id
     * @param gid group id
     * @param spaceId space id
     * @param collId collection id
     * @param tsid time series id
     */
    public async appApiPermissionRemovePermission(objType: ObjectType, subobject: boolean, action: string, effect: 'allow' | 'deny', uid?: string, gid?: string, spaceId?: string, collId?: string, tsid?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objType' is not null or undefined
        if (objType === null || objType === undefined) {
            throw new RequiredError("PermissionsApi", "appApiPermissionRemovePermission", "objType");
        }


        // verify required parameter 'subobject' is not null or undefined
        if (subobject === null || subobject === undefined) {
            throw new RequiredError("PermissionsApi", "appApiPermissionRemovePermission", "subobject");
        }


        // verify required parameter 'action' is not null or undefined
        if (action === null || action === undefined) {
            throw new RequiredError("PermissionsApi", "appApiPermissionRemovePermission", "action");
        }


        // verify required parameter 'effect' is not null or undefined
        if (effect === null || effect === undefined) {
            throw new RequiredError("PermissionsApi", "appApiPermissionRemovePermission", "effect");
        }







        // Path Params
        const localVarPath = '/raw/permissions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (gid !== undefined) {
            requestContext.setQueryParam("gid", ObjectSerializer.serialize(gid, "string", ""));
        }

        // Query Params
        if (objType !== undefined) {
            requestContext.setQueryParam("obj_type", ObjectSerializer.serialize(objType, "ObjectType", ""));
        }

        // Query Params
        if (subobject !== undefined) {
            requestContext.setQueryParam("subobject", ObjectSerializer.serialize(subobject, "boolean", ""));
        }

        // Query Params
        if (spaceId !== undefined) {
            requestContext.setQueryParam("space_id", ObjectSerializer.serialize(spaceId, "string", ""));
        }

        // Query Params
        if (collId !== undefined) {
            requestContext.setQueryParam("coll_id", ObjectSerializer.serialize(collId, "string", ""));
        }

        // Query Params
        if (tsid !== undefined) {
            requestContext.setQueryParam("tsid", ObjectSerializer.serialize(tsid, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (effect !== undefined) {
            requestContext.setQueryParam("effect", ObjectSerializer.serialize(effect, "'allow' | 'deny'", ""));
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
     * Set permissions
     * Set permissions
     * @param policyUpdate Policy definition
     */
    public async appApiPermissionSetPermission(policyUpdate: PolicyUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'policyUpdate' is not null or undefined
        if (policyUpdate === null || policyUpdate === undefined) {
            throw new RequiredError("PermissionsApi", "appApiPermissionSetPermission", "policyUpdate");
        }


        // Path Params
        const localVarPath = '/raw/permissions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(policyUpdate, "PolicyUpdate", ""),
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

export class PermissionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiPermissionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiPermissionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Policy> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Policy> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Policy>", ""
            ) as Array<Policy>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "object not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Policy> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Policy>", ""
            ) as Array<Policy>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appApiPermissionRemovePermission
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiPermissionRemovePermissionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "permission not found", undefined, response.headers);
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
     * @params response Response returned by the server for a request to appApiPermissionSetPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appApiPermissionSetPermissionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "wrong parameter", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid username/password, API key, or token", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "object not found", undefined, response.headers);
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
