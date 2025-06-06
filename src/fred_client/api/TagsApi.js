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
import Seriess from '../model/Seriess';
import Tags from '../model/Tags';

/**
* Tags service.
* @module api/TagsApi
* @version 1.0.2
*/
export default class TagsApi {

    /**
    * Constructs a new TagsApi. 
    * @alias module:api/TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getRelatedTags operation.
     * @callback module:api/TagsApi~getRelatedTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [description] Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [tagNames] A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param {String} [tagGroupId] A tag group id to filter tags by type.
     * @param {String} [searchText] The words to find matching tags with.
     * @param {String} [limit] The maximum number of results to return.
     * @param {Number} [offset] non-negative integer, optional, default: 0
     * @param {String} [orderBy] Order results by values of the specified attribute.
     * @param {String} [sortOrder] Sort results is ascending or descending order for attribute values specified by order_by.
     * @param {module:api/TagsApi~getRelatedTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getRelatedTags(opts, callback) {
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
        'tag_names': opts['tagNames'],
        'tag_group_id': opts['tagGroupId'],
        'search_text': opts['searchText'],
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
      let returnType = Tags;
      return this.apiClient.callApi(
        '/fred/related_tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTags operation.
     * @callback module:api/TagsApi~getTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [description] Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [tagNames] A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param {String} [tagGroupId] A tag group id to filter tags by type.
     * @param {String} [searchText] The words to find matching tags with.
     * @param {String} [limit] The maximum number of results to return.
     * @param {Number} [offset] non-negative integer, optional, default: 0
     * @param {String} [orderBy] Order results by values of the specified attribute.
     * @param {String} [sortOrder] Sort results is ascending or descending order for attribute values specified by order_by.
     * @param {module:api/TagsApi~getTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getTags(opts, callback) {
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
        'tag_names': opts['tagNames'],
        'tag_group_id': opts['tagGroupId'],
        'search_text': opts['searchText'],
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
      let returnType = Tags;
      return this.apiClient.callApi(
        '/fred/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagsSeries operation.
     * @callback module:api/TagsApi~getTagsSeriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Seriess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} [description] Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
     * @param {String} [apiKey] Read API Keys for more information.
     * @param {String} [fileType] A key or file extension that indicates the type of file to send.
     * @param {String} [tagNames] A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
     * @param {String} [excludeTagNames] A semicolon delimited list of tag names that series match none of.
     * @param {String} [realtimeStart] The start of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [realtimeEnd] The end of the real-time period. For more information, see Real-Time Periods.
     * @param {String} [limit] The maximum number of results to return.
     * @param {Number} [offset] non-negative integer, optional, default: 0
     * @param {String} [orderBy] Order results by values of the specified attribute.
     * @param {String} [sortOrder] Sort results is ascending or descending order for attribute values specified by order_by.
     * @param {module:api/TagsApi~getTagsSeriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Seriess}
     */
    getTagsSeries(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Description': opts['description'],
        'api_key': opts['apiKey'],
        'file_type': opts['fileType'],
        'tag_names': opts['tagNames'],
        'exclude_tag_names': opts['excludeTagNames'],
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
      let returnType = Seriess;
      return this.apiClient.callApi(
        '/fred/tags/series', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
