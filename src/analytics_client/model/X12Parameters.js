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
import WSeries from './WSeries';

/**
 * The X12Parameters model module.
 * @module model/X12Parameters
 * @version 0.1
 */
class X12Parameters {
    /**
     * Constructs a new <code>X12Parameters</code>.
     * @alias module:model/X12Parameters
     */
    constructor() { 
        
        X12Parameters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>X12Parameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/X12Parameters} obj Optional instance to populate.
     * @return {module:model/X12Parameters} The populated <code>X12Parameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new X12Parameters();

            if (data.hasOwnProperty('input')) {
                obj['input'] = ApiClient.convertToType(data['input'], [WSeries]);
            }
        }
        return obj;
    }


}

/**
 * input series
 * @member {Array.<module:model/WSeries>} input
 */
X12Parameters.prototype['input'] = undefined;






export default X12Parameters;

