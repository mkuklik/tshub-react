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

/**
 * The ARResultLb model module.
 * @module model/ARResultLb
 * @version 0.1
 */
class ARResultLb {
    /**
     * Constructs a new <code>ARResultLb</code>.
     * @alias module:model/ARResultLb
     */
    constructor() { 
        
        ARResultLb.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ARResultLb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ARResultLb} obj Optional instance to populate.
     * @return {module:model/ARResultLb} The populated <code>ARResultLb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ARResultLb();

            if (data.hasOwnProperty('lb')) {
                obj['lb'] = ApiClient.convertToType(data['lb'], 'Number');
            }
            if (data.hasOwnProperty('pv')) {
                obj['pv'] = ApiClient.convertToType(data['pv'], 'Number');
            }
            if (data.hasOwnProperty('df')) {
                obj['df'] = ApiClient.convertToType(data['df'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lb
 */
ARResultLb.prototype['lb'] = undefined;

/**
 * @member {Number} pv
 */
ARResultLb.prototype['pv'] = undefined;

/**
 * @member {Number} df
 */
ARResultLb.prototype['df'] = undefined;






export default ARResultLb;

