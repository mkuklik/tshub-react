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
import Annotation from '../model/Annotation';
import AnnotationSummary from '../model/AnnotationSummary';
import AnnotationUpdate from '../model/AnnotationUpdate';
import Frequency from '../model/Frequency';

/**
* RawAnnotations service.
* @module api/RawAnnotationsApi
* @version 0.1
*/
export default class RawAnnotationsApi {

    /**
    * Constructs a new RawAnnotationsApi. 
    * @alias module:api/RawAnnotationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the appApiAnnotationRawAddTarget operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawAddTargetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Annotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a target
     * Add observation target
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {Object} opts Optional parameters
     * @param {String} opts.tsid time series id
     * @param {Number} opts.index time series index
     * @param {module:model/Frequency} opts.freq frequency
     * @param {Date} opts.realStart start time from when values were valid
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawAddTargetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Annotation}
     */
    appApiAnnotationRawAddTarget(collId, aid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawAddTarget");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawAddTarget");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
      };
      let queryParams = {
        'tsid': opts['tsid'],
        'index': opts['index'],
        'freq': opts['freq'],
        'realStart': opts['realStart']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Annotation;
      return this.apiClient.callApi(
        '/raw/annotation/{collId}/{aid}/targets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawCreate operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Annotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an annotation
     * Create an annotation
     * @param {String} collId collection id
     * @param {module:model/Annotation} annotation Annotation
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Annotation}
     */
    appApiAnnotationRawCreate(collId, annotation, callback) {
      let postBody = annotation;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawCreate");
      }
      // verify the required parameter 'annotation' is set
      if (annotation === undefined || annotation === null) {
        throw new Error("Missing the required parameter 'annotation' when calling appApiAnnotationRawCreate");
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
      let returnType = Annotation;
      return this.apiClient.callApi(
        '/raw/annotation/{collId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawDelete operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete annotation
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    appApiAnnotationRawDelete(collId, aid, callback) {
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawDelete");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawDelete");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
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
        '/raw/annotation/{collId}/{aid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawGet operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Annotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an annotation
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Annotation}
     */
    appApiAnnotationRawGet(collId, aid, callback) {
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawGet");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawGet");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
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
      let returnType = Annotation;
      return this.apiClient.callApi(
        '/raw/annotation/{collId}/{aid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawGetList operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawGetListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AnnotationSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List annotations
     * List annotations
     * @param {String} collId collection id
     * @param {Object} opts Optional parameters
     * @param {String} opts.tsid time series id
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AnnotationSummary>}
     */
    appApiAnnotationRawGetList(collId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawGetList");
      }

      let pathParams = {
        'collId': collId
      };
      let queryParams = {
        'tsid': opts['tsid']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AnnotationSummary];
      return this.apiClient.callApi(
        '/raw/annotation/{collId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawHistory operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Annotation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * History of annotation changes
     * History of annotation changes
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.realStart start time from when values were valid
     * @param {Date} opts.realEnd end time until when values were valid
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Annotation>}
     */
    appApiAnnotationRawHistory(collId, aid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawHistory");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawHistory");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
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
      let returnType = [Annotation];
      return this.apiClient.callApi(
        '/raw/annotation/{collId}/{aid}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawRemoveTarget operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawRemoveTargetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Annotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a target
     * delete observation targets
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {Object} opts Optional parameters
     * @param {String} opts.tsid time series id
     * @param {Number} opts.index time series index
     * @param {module:model/Frequency} opts.freq frequency
     * @param {Date} opts.realStart start time from when values were valid
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawRemoveTargetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Annotation}
     */
    appApiAnnotationRawRemoveTarget(collId, aid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawRemoveTarget");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawRemoveTarget");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
      };
      let queryParams = {
        'tsid': opts['tsid'],
        'index': opts['index'],
        'freq': opts['freq'],
        'realStart': opts['realStart']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Annotation;
      return this.apiClient.callApi(
        '/raw/annotation/{collId}/{aid}/targets', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the appApiAnnotationRawUpdate operation.
     * @callback module:api/RawAnnotationsApi~appApiAnnotationRawUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an annotation
     * @param {String} collId collection id
     * @param {String} aid annotation id
     * @param {module:model/AnnotationUpdate} annotationUpdate Annotation
     * @param {module:api/RawAnnotationsApi~appApiAnnotationRawUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    appApiAnnotationRawUpdate(collId, aid, annotationUpdate, callback) {
      let postBody = annotationUpdate;
      // verify the required parameter 'collId' is set
      if (collId === undefined || collId === null) {
        throw new Error("Missing the required parameter 'collId' when calling appApiAnnotationRawUpdate");
      }
      // verify the required parameter 'aid' is set
      if (aid === undefined || aid === null) {
        throw new Error("Missing the required parameter 'aid' when calling appApiAnnotationRawUpdate");
      }
      // verify the required parameter 'annotationUpdate' is set
      if (annotationUpdate === undefined || annotationUpdate === null) {
        throw new Error("Missing the required parameter 'annotationUpdate' when calling appApiAnnotationRawUpdate");
      }

      let pathParams = {
        'collId': collId,
        'aid': aid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'jwt'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/raw/annotation/{collId}/{aid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
