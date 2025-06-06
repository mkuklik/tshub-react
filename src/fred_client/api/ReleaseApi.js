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
import Categories from '../model/Categories';
import ReleaseDates from '../model/ReleaseDates';
import Releases from '../model/Releases';
import Seriess from '../model/Seriess';
import Sources from '../model/Sources';
import Tags from '../model/Tags';

/**
* Release service.
* @module api/ReleaseApi
* @version 1.0.2
*/
export default class ReleaseApi {

    /**
    * Constructs a new ReleaseApi. 
    * @alias module:api/ReleaseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getReleaseDates operation.
     * @callback module:api/ReleaseApi~getReleaseDatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseDates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve release dates for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {module:api/ReleaseApi~getReleaseDatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReleaseDates}
     */
    getReleaseDates(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseDates");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseDates");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'release_id': releaseId,
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
      let returnType = ReleaseDates;
      return this.apiClient.callApi(
        '/fred/release/dates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseInfo operation.
     * @callback module:api/ReleaseApi~getReleaseInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Releases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {module:api/ReleaseApi~getReleaseInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Releases}
     */
    getReleaseInfo(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseInfo");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseInfo");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'release_id': releaseId,
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
      let returnType = Releases;
      return this.apiClient.callApi(
        '/fred/release', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseRelatedTags operation.
     * @callback module:api/ReleaseApi~getReleaseRelatedTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve related tags for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {String} tagNames 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {module:api/ReleaseApi~getReleaseRelatedTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getReleaseRelatedTags(apiKey, releaseId, tagNames, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseRelatedTags");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseRelatedTags");
      }
      // verify the required parameter 'tagNames' is set
      if (tagNames === undefined || tagNames === null) {
        throw new Error("Missing the required parameter 'tagNames' when calling getReleaseRelatedTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'release_id': releaseId,
        'file_type': opts['fileType'],
        'tag_names': tagNames,
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
      let returnType = Tags;
      return this.apiClient.callApi(
        '/fred/release/related_tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseSeries operation.
     * @callback module:api/ReleaseApi~getReleaseSeriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Seriess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get series for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {String} [filterVariable] 
     * @param {String} [filterValue] 
     * @param {module:api/ReleaseApi~getReleaseSeriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Seriess}
     */
    getReleaseSeries(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseSeries");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseSeries");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'release_id': releaseId,
        'file_type': opts['fileType'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order_by': opts['orderBy'],
        'sort_order': opts['sortOrder'],
        'filter_variable': opts['filterVariable'],
        'filter_value': opts['filterValue']
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
        '/fred/release/series', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseSources operation.
     * @callback module:api/ReleaseApi~getReleaseSourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sources} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sources for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {module:api/ReleaseApi~getReleaseSourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sources}
     */
    getReleaseSources(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseSources");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseSources");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'release_id': releaseId,
        'file_type': opts['fileType'],
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
        '/fred/release/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseTables operation.
     * @callback module:api/ReleaseApi~getReleaseTablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Categories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get data tables for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Number} [elementId] 
     * @param {Boolean} [includeObservations] 
     * @param {Date} [observationDate] 
     * @param {module:api/ReleaseApi~getReleaseTablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categories}
     */
    getReleaseTables(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseTables");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseTables");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'release_id': releaseId,
        'file_type': opts['fileType'],
        'element_id': opts['elementId'],
        'include_observations': opts['includeObservations'],
        'observation_date': opts['observationDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Categories;
      return this.apiClient.callApi(
        '/fred/release/tables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseTags operation.
     * @callback module:api/ReleaseApi~getReleaseTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tags for a specific economic data release.
     * @param {String} apiKey 
     * @param {Number} releaseId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {String} [searchText] 
     * @param {module:api/ReleaseApi~getReleaseTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getReleaseTags(apiKey, releaseId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleaseTags");
      }
      // verify the required parameter 'releaseId' is set
      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling getReleaseTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'release_id': releaseId,
        'file_type': opts['fileType'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order_by': opts['orderBy'],
        'sort_order': opts['sortOrder'],
        'search_text': opts['searchText']
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
        '/fred/release/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleases operation.
     * @callback module:api/ReleaseApi~getReleasesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Releases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all releases of economic data.
     * @param {String} apiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {String} [filterVariable] 
     * @param {String} [filterValue] 
     * @param {module:api/ReleaseApi~getReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Releases}
     */
    getReleases(apiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleases");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order_by': opts['orderBy'],
        'sort_order': opts['sortOrder'],
        'filter_variable': opts['filterVariable'],
        'filter_value': opts['filterValue']
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
        '/fred/releases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleasesDates operation.
     * @callback module:api/ReleaseApi~getReleasesDatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseDates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve release dates for all economic data.
     * @param {String} apiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'json')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {Date} [lastUpdated] 
     * @param {module:api/ReleaseApi~getReleasesDatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReleaseDates}
     */
    getReleasesDates(apiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getReleasesDates");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'realtime_start': opts['realtimeStart'],
        'realtime_end': opts['realtimeEnd'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'last_updated': opts['lastUpdated']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReleaseDates;
      return this.apiClient.callApi(
        '/fred/releases/dates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
