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
import SubjectType from './SubjectType';

/**
 * The SubjectUpdate model module.
 * @module model/SubjectUpdate
 * @version 0.1
 */
class SubjectUpdate {
    /**
     * Constructs a new <code>SubjectUpdate</code>.
     * @alias module:model/SubjectUpdate
     * @param type {module:model/SubjectType} 
     */
    constructor(type) { 
        
        SubjectUpdate.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>SubjectUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectUpdate} obj Optional instance to populate.
     * @return {module:model/SubjectUpdate} The populated <code>SubjectUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectUpdate();

            if (data.hasOwnProperty('type')) {
                obj['type'] = SubjectType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectType} type
 */
SubjectUpdate.prototype['type'] = undefined;

/**
 * @member {String} gid
 */
SubjectUpdate.prototype['gid'] = undefined;

/**
 * @member {String} uid
 */
SubjectUpdate.prototype['uid'] = undefined;






export default SubjectUpdate;

