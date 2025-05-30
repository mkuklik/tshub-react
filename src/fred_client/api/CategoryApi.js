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
import Seriess from '../model/Seriess';
import Tags from '../model/Tags';

/**
* Category service.
* @module api/CategoryApi
* @version 1.0.2
*/
export default class CategoryApi {

    /**
    * Constructs a new CategoryApi. 
    * @alias module:api/CategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCategory operation.
     * @callback module:api/CategoryApi~getCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Categories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a category.
     * @param {String} apiKey 88e6be3b42147d9eb6726f79a6671453
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Number} [categoryId = 0)] 
     * @param {module:api/CategoryApi~getCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categories}
     */
    getCategory(apiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategory");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': opts['categoryId']
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
        '/fred/category', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryChildren operation.
     * @callback module:api/CategoryApi~getCategoryChildrenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Categories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the child categories for a specified parent category.
     * @param {String} apiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Number} [categoryId = 0)] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {module:api/CategoryApi~getCategoryChildrenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categories}
     */
    getCategoryChildren(apiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategoryChildren");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': opts['categoryId'],
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
      let returnType = Categories;
      return this.apiClient.callApi(
        '/fred/category/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryRelated operation.
     * @callback module:api/CategoryApi~getCategoryRelatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Categories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get related categories for a specified category.
     * @param {String} apiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Number} [categoryId = 0)] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {module:api/CategoryApi~getCategoryRelatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Categories}
     */
    getCategoryRelated(apiKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategoryRelated");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': opts['categoryId'],
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
      let returnType = Categories;
      return this.apiClient.callApi(
        '/fred/category/related', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryRelatedTags operation.
     * @callback module:api/CategoryApi~getCategoryRelatedTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve related tags for a specific category.
     * @param {String} apiKey 
     * @param {Number} categoryId 
     * @param {String} tagNames 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {module:api/CategoryApi~getCategoryRelatedTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getCategoryRelatedTags(apiKey, categoryId, tagNames, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategoryRelatedTags");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryRelatedTags");
      }
      // verify the required parameter 'tagNames' is set
      if (tagNames === undefined || tagNames === null) {
        throw new Error("Missing the required parameter 'tagNames' when calling getCategoryRelatedTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': categoryId,
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
        '/fred/category/related_tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategorySeries operation.
     * @callback module:api/CategoryApi~getCategorySeriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Seriess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve series within a specified category.
     * @param {String} apiKey 
     * @param {Number} categoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {String} [filterVariable] 
     * @param {String} [filterValue] 
     * @param {module:api/CategoryApi~getCategorySeriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Seriess}
     */
    getCategorySeries(apiKey, categoryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategorySeries");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategorySeries");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': categoryId,
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
        '/fred/category/series', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryTags operation.
     * @callback module:api/CategoryApi~getCategoryTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve tags for a specific category.
     * @param {String} apiKey 
     * @param {Number} categoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [fileType = 'xml')] 
     * @param {Date} [realtimeStart] 
     * @param {Date} [realtimeEnd] 
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {module:model/String} [orderBy] 
     * @param {module:model/String} [sortOrder] 
     * @param {module:api/CategoryApi~getCategoryTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tags}
     */
    getCategoryTags(apiKey, categoryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getCategoryTags");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'api_key': apiKey,
        'file_type': opts['fileType'],
        'category_id': categoryId,
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
        '/fred/category/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
