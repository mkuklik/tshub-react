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

import ApiClient from '../ApiClient';

/**
 * The TagsTagsInner model module.
 * @module model/TagsTagsInner
 * @version 1.0.2
 */
class TagsTagsInner {
    /**
     * Constructs a new <code>TagsTagsInner</code>.
     * @alias module:model/TagsTagsInner
     */
    constructor() { 
        
        TagsTagsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagsTagsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagsTagsInner} obj Optional instance to populate.
     * @return {module:model/TagsTagsInner} The populated <code>TagsTagsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagsTagsInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('popularity')) {
                obj['popularity'] = ApiClient.convertToType(data['popularity'], 'Number');
            }
            if (data.hasOwnProperty('series_count')) {
                obj['series_count'] = ApiClient.convertToType(data['series_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TagsTagsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagsTagsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
            throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
TagsTagsInner.prototype['name'] = undefined;

/**
 * @member {String} group_id
 */
TagsTagsInner.prototype['group_id'] = undefined;

/**
 * @member {String} notes
 */
TagsTagsInner.prototype['notes'] = undefined;

/**
 * @member {String} created
 */
TagsTagsInner.prototype['created'] = undefined;

/**
 * @member {Number} popularity
 */
TagsTagsInner.prototype['popularity'] = undefined;

/**
 * @member {Number} series_count
 */
TagsTagsInner.prototype['series_count'] = undefined;






export default TagsTagsInner;
