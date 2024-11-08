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
import AutocorrelationResults from './AutocorrelationResults';

/**
 * The AutocorrelationResponseAllOf model module.
 * @module model/AutocorrelationResponseAllOf
 * @version 0.1
 */
class AutocorrelationResponseAllOf {
    /**
     * Constructs a new <code>AutocorrelationResponseAllOf</code>.
     * @alias module:model/AutocorrelationResponseAllOf
     */
    constructor() { 
        
        AutocorrelationResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutocorrelationResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutocorrelationResponseAllOf} obj Optional instance to populate.
     * @return {module:model/AutocorrelationResponseAllOf} The populated <code>AutocorrelationResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutocorrelationResponseAllOf();

            if (data.hasOwnProperty('result')) {
                obj['result'] = AutocorrelationResults.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AutocorrelationResults} result
 */
AutocorrelationResponseAllOf.prototype['result'] = undefined;






export default AutocorrelationResponseAllOf;

