/**
 * FRED API
 * API for accessing economic data from the Federal Reserve Economic Data (FRED) database.
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Releases from '../model/Releases';
import Sources from '../model/Sources';

/**
* Sources service.
* @module api/SourcesApi
* @version 1.0.2
*/
export default class SourcesApi {

    /**
    * Constructs a new SourcesApi. 
    * @alias module:api/SourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSource operation.
     * @callback module:api/SourcesApi~getSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sources} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [description] Get all sources of economic data.
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [sourceId] The id for a source.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {module:api/SourcesApi~getSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sources}
     */
    getSource(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Description': opts['description'],
        'api_key': opts['apiKey'],
        'file_type': opts['fileType'],
        'source_id': opts['sourceId'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Sources;
      return this.apiClient.callApi(
        '/fred/source', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSourceReleases operation.
     * @callback module:api/SourcesApi~getSourceReleasesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Releases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [the] #Description
     * @param {String} [description] Get all sources of economic data.
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [sourceId] The id for a source.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [limit] The maximum number of results to return.
     * @param {Number} [offset] non-negative integer, optional, default: 0
     * @param {String} [orderBy] Order results by values of the specified attribute.
     * @param {String} [sortOrder] Sort results is ascending or descending order for attribute values specified by order_by.
     * @param {module:api/SourcesApi~getSourceReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Releases}
     */
    getSourceReleases(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'The': opts['the'],
        'Description': opts['description'],
        'api_key': opts['apiKey'],
        'file_type': opts['fileType'],
        'source_id': opts['sourceId'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order_by': opts['orderBy'],
        'sort_order': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Releases;
      return this.apiClient.callApi(
        '/fred/source/releases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSources operation.
     * @callback module:api/SourcesApi~getSourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sources} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [description] Get all sources of economic data.
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [limit] The maximum number of results to return.
     * @param {Number} [offset] non-negative integer, optional, default: 0
     * @param {String} [orderBy] Order results by values of the specified attribute.
     * @param {String} [sortOrder] Sort results is ascending or descending order for attribute values specified by order_by.
     * @param {module:api/SourcesApi~getSourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sources}
     */
    getSources(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Description': opts['description'],
        'api_key': opts['apiKey'],
        'file_type': opts['fileType'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order_by': opts['orderBy'],
        'sort_order': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Sources;
      return this.apiClient.callApi(
        '/fred/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}