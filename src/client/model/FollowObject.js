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

import ApiClient from '../ApiClient';

/**
 * The FollowObject model module.
 * @module model/FollowObject
 * @version 0.1
 */
class FollowObject {
    /**
     * Constructs a new <code>FollowObject</code>.
     * @alias module:model/FollowObject
     */
    constructor() { 
        
        FollowObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FollowObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FollowObject} obj Optional instance to populate.
     * @return {module:model/FollowObject} The populated <code>FollowObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FollowObject();

            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('paylaod')) {
                obj['paylaod'] = ApiClient.convertToType(data['paylaod'], {'String': Object});
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uid
 */
FollowObject.prototype['uid'] = undefined;

/**
 * @member {String} class
 */
FollowObject.prototype['class'] = undefined;

/**
 * @member {String} id
 */
FollowObject.prototype['id'] = undefined;

/**
 * @member {Object.<String, Object>} paylaod
 */
FollowObject.prototype['paylaod'] = undefined;

/**
 * @member {Date} created_on
 */
FollowObject.prototype['created_on'] = undefined;






export default FollowObject;

