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
 * The AutocorrelationResultsValues model module.
 * @module model/AutocorrelationResultsValues
 * @version 0.1
 */
class AutocorrelationResultsValues {
    /**
     * Constructs a new <code>AutocorrelationResultsValues</code>.
     * @alias module:model/AutocorrelationResultsValues
     */
    constructor() { 
        
        AutocorrelationResultsValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutocorrelationResultsValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutocorrelationResultsValues} obj Optional instance to populate.
     * @return {module:model/AutocorrelationResultsValues} The populated <code>AutocorrelationResultsValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutocorrelationResultsValues();

            if (data.hasOwnProperty('lag')) {
                obj['lag'] = ApiClient.convertToType(data['lag'], 'Number');
            }
            if (data.hasOwnProperty('ac')) {
                obj['ac'] = ApiClient.convertToType(data['ac'], 'Number');
            }
            if (data.hasOwnProperty('pac')) {
                obj['pac'] = ApiClient.convertToType(data['pac'], 'Number');
            }
            if (data.hasOwnProperty('qstat')) {
                obj['qstat'] = ApiClient.convertToType(data['qstat'], 'Number');
            }
            if (data.hasOwnProperty('pvalue')) {
                obj['pvalue'] = ApiClient.convertToType(data['pvalue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lag
 */
AutocorrelationResultsValues.prototype['lag'] = undefined;

/**
 * @member {Number} ac
 */
AutocorrelationResultsValues.prototype['ac'] = undefined;

/**
 * @member {Number} pac
 */
AutocorrelationResultsValues.prototype['pac'] = undefined;

/**
 * @member {Number} qstat
 */
AutocorrelationResultsValues.prototype['qstat'] = undefined;

/**
 * @member {Number} pvalue
 */
AutocorrelationResultsValues.prototype['pvalue'] = undefined;






export default AutocorrelationResultsValues;

