/**
 * ChronosDB swagger
 * ChronosDB Analytics server
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
import HPFilterResult from './HPFilterResult';

/**
 * The HPFilterResponseAllOf model module.
 * @module model/HPFilterResponseAllOf
 * @version 0.1
 */
class HPFilterResponseAllOf {
    /**
     * Constructs a new <code>HPFilterResponseAllOf</code>.
     * @alias module:model/HPFilterResponseAllOf
     */
    constructor() { 
        
        HPFilterResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HPFilterResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HPFilterResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HPFilterResponseAllOf} The populated <code>HPFilterResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HPFilterResponseAllOf();

            if (data.hasOwnProperty('result')) {
                obj['result'] = HPFilterResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/HPFilterResult} result
 */
HPFilterResponseAllOf.prototype['result'] = undefined;






export default HPFilterResponseAllOf;

