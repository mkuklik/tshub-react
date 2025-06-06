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
 * The PolicyUpdateSubject model module.
 * @module model/PolicyUpdateSubject
 * @version 0.1
 */
class PolicyUpdateSubject {
    /**
     * Constructs a new <code>PolicyUpdateSubject</code>.
     * @alias module:model/PolicyUpdateSubject
     */
    constructor() { 
        
        PolicyUpdateSubject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PolicyUpdateSubject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyUpdateSubject} obj Optional instance to populate.
     * @return {module:model/PolicyUpdateSubject} The populated <code>PolicyUpdateSubject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyUpdateSubject();

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
PolicyUpdateSubject.prototype['type'] = undefined;

/**
 * @member {String} gid
 */
PolicyUpdateSubject.prototype['gid'] = undefined;

/**
 * @member {String} uid
 */
PolicyUpdateSubject.prototype['uid'] = undefined;






export default PolicyUpdateSubject;

