/**
 * ChronosDB swagger
 * ChronosDB time series database API
 *
 * The version of the OpenAPI document: 0.1
 * Contact: apiteam@chronosdb.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Collection from '../model/Collection';
import CollectionHistorical from '../model/CollectionHistorical';
import CollectionPermissionPost from '../model/CollectionPermissionPost';
import CollectionSummary from '../model/CollectionSummary';

/**
* RawCollection service.
* @module api/RawCollectionApi
* @version 0.1
*/
export default class RawCollectionApi {

    /**
    * Constructs a new RawCollectionApi. 
    * @alias module:api/RawCollectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the appApiCollectionObjectHistory operation.
     * @callback module:api/RawCollectionApi~appApiCollectionObjectHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CollectionHistorical>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve historical values of collection details
     * Retrieve historical values of collection details
     * @param {String} collId collection id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.realStart start time from when values were valid
     * @param {Date} opts.realEnd end time until when values were valid
     * @param {module:api/RawCollectionApi~appApiCollectionObjectHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CollectionHistorical>}
     */
    appApiCollectionObjectHistory(collId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionObjectHistory");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
        'realStart': opts['realStart'],
        'realEnd': opts['realEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CollectionHistorical];
      return this.apiClient.callApi(
        '/raw/collection/{collId}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawAddPermission operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawAddPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Collection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new collection member
     * Add a new collection member
     * @param {String} collId collection id
     * @param {Object} opts Optional parameters
     * @param {module:model/CollectionPermissionPost} opts.collectionPermissionPost Collection member details
     * @param {module:api/RawCollectionApi~appApiCollectionRawAddPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Collection}
     */
    appApiCollectionRawAddPermission(collId, opts, callback) {
      opts = opts || {};
      let postBody = opts['collectionPermissionPost'];
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawAddPermission");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/raw/collection/{collId}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawDelete operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a collection
     * Delete a space
     * @param {String} collId collection id
     * @param {module:api/RawCollectionApi~appApiCollectionRawDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    appApiCollectionRawDelete(collId, callback) {
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawDelete");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/raw/collection/{collId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawDeletePermission operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawDeletePermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Collection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a collection permission
     * Delete a collection permission
     * @param {String} collId collection id
     * @param {module:model/String} type | format of output type * `u` user, * `g` group 
     * @param {String} id id
     * @param {module:api/RawCollectionApi~appApiCollectionRawDeletePermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Collection}
     */
    appApiCollectionRawDeletePermission(collId, type, id, callback) {
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawDeletePermission");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling appApiCollectionRawDeletePermission");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling appApiCollectionRawDeletePermission");
      }

      let pathParams = {
        'collId': collId,
        'type': type,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/raw/collection/{collId}/permissions/{type}/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawGet operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Collection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection details
     * Get collection details
     * @param {String} collId collection id
     * @param {module:api/RawCollectionApi~appApiCollectionRawGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Collection}
     */
    appApiCollectionRawGet(collId, callback) {
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawGet");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/raw/collection/{collId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawGetList operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawGetListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CollectionSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list collections
     * @param {String} spaceId space id
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Search query
     * @param {module:api/RawCollectionApi~appApiCollectionRawGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CollectionSummary>}
     */
    appApiCollectionRawGetList(spaceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling appApiCollectionRawGetList");
      }

      let pathParams = {
        'spaceId': spaceId
      };
      let queryParams = {
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CollectionSummary];
      return this.apiClient.callApi(
        '/raw/space/{spaceId}/collection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawPost operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Collection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new collection
     * Create a new collection
     * @param {String} spaceId space id
     * @param {module:model/Collection} collection Definition of collection
     * @param {module:api/RawCollectionApi~appApiCollectionRawPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Collection}
     */
    appApiCollectionRawPost(spaceId, collection, callback) {
      let postBody = collection;
      // verify the required parameter 'spaceId' is set
      if (spaceId === undefined || spaceId === null) {
        throw new Error("Missing the required parameter 'spaceId' when calling appApiCollectionRawPost");
      }
      // verify the required parameter 'collection' is set
      if (collection === undefined || collection === null) {
        throw new Error("Missing the required parameter 'collection' when calling appApiCollectionRawPost");
      }

      let pathParams = {
        'spaceId': spaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/raw/space/{spaceId}/collection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawPut operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Collection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing collection
     * Update an existing collection
     * @param {String} collId collection id
     * @param {module:model/Collection} collection ok
     * @param {module:api/RawCollectionApi~appApiCollectionRawPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Collection}
     */
    appApiCollectionRawPut(collId, collection, callback) {
      let postBody = collection;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawPut");
      }
      // verify the required parameter 'collection' is set
      if (collection === undefined || collection === null) {
        throw new Error("Missing the required parameter 'collection' when calling appApiCollectionRawPut");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/raw/collection/{collId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiCollectionRawUndelete operation.
     * @callback module:api/RawCollectionApi~appApiCollectionRawUndeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Undelete collection
     * Undelete collection
     * @param {String} collId collection id
     * @param {Object} opts Optional parameters
     * @param {String} opts.name new name for the time series
     * @param {module:api/RawCollectionApi~appApiCollectionRawUndeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    appApiCollectionRawUndelete(collId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiCollectionRawUndelete");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/raw/collection/{collId}/undelete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
