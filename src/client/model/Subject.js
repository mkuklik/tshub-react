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
import GroupSummary from './GroupSummary';
import SubjectType from './SubjectType';
import UserSummary from './UserSummary';

/**
 * The Subject model module.
 * @module model/Subject
 * @version 0.1
 */
class Subject {
    /**
     * Constructs a new <code>Subject</code>.
     * @alias module:model/Subject
     * @param type {module:model/SubjectType} 
     */
    constructor(type) { 
        
        Subject.initialize(this, type);
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
     * Constructs a <code>Subject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subject} obj Optional instance to populate.
     * @return {module:model/Subject} The populated <code>Subject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subject();

            if (data.hasOwnProperty('type')) {
                obj['type'] = SubjectType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserSummary.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupSummary.constructFromObject(data['group']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectType} type
 */
Subject.prototype['type'] = undefined;

/**
 * @member {module:model/UserSummary} user
 */
Subject.prototype['user'] = undefined;

/**
 * @member {module:model/GroupSummary} group
 */
Subject.prototype['group'] = undefined;






export default Subject;

