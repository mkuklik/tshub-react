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
 * The ReleaseDatesReleaseDatesInner model module.
 * @module model/ReleaseDatesReleaseDatesInner
 * @version 1.0.2
 */
class ReleaseDatesReleaseDatesInner {
    /**
     * Constructs a new <code>ReleaseDatesReleaseDatesInner</code>.
     * @alias module:model/ReleaseDatesReleaseDatesInner
     */
    constructor() { 
        
        ReleaseDatesReleaseDatesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReleaseDatesReleaseDatesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseDatesReleaseDatesInner} obj Optional instance to populate.
     * @return {module:model/ReleaseDatesReleaseDatesInner} The populated <code>ReleaseDatesReleaseDatesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReleaseDatesReleaseDatesInner();

            if (data.hasOwnProperty('release_id')) {
                obj['release_id'] = ApiClient.convertToType(data['release_id'], 'Number');
            }
            if (data.hasOwnProperty('release_name')) {
                obj['release_name'] = ApiClient.convertToType(data['release_name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReleaseDatesReleaseDatesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReleaseDatesReleaseDatesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['release_name'] && !(typeof data['release_name'] === 'string' || data['release_name'] instanceof String)) {
            throw new Error("Expected the field `release_name` to be a primitive type in the JSON string but got " + data['release_name']);
        }

        return true;
    }


}



/**
 * @member {Number} release_id
 */
ReleaseDatesReleaseDatesInner.prototype['release_id'] = undefined;

/**
 * @member {String} release_name
 */
ReleaseDatesReleaseDatesInner.prototype['release_name'] = undefined;

/**
 * @member {Date} date
 */
ReleaseDatesReleaseDatesInner.prototype['date'] = undefined;






export default ReleaseDatesReleaseDatesInner;
