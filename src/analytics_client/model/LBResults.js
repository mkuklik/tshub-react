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
 * The LBResults model module.
 * @module model/LBResults
 * @version 0.1
 */
class LBResults {
    /**
     * Constructs a new <code>LBResults</code>.
     * Ljung-Box serial correlation test results
     * @alias module:model/LBResults
     */
    constructor() { 
        
        LBResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LBResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LBResults} obj Optional instance to populate.
     * @return {module:model/LBResults} The populated <code>LBResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LBResults();

            if (data.hasOwnProperty('acf')) {
                obj['acf'] = ApiClient.convertToType(data['acf'], ['Number']);
            }
            if (data.hasOwnProperty('qstat')) {
                obj['qstat'] = ApiClient.convertToType(data['qstat'], ['Number']);
            }
            if (data.hasOwnProperty('pvalue')) {
                obj['pvalue'] = ApiClient.convertToType(data['pvalue'], ['Number']);
            }
            if (data.hasOwnProperty('confint')) {
                obj['confint'] = ApiClient.convertToType(data['confint'], [['Number']]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} acf
 */
LBResults.prototype['acf'] = undefined;

/**
 * @member {Array.<Number>} qstat
 */
LBResults.prototype['qstat'] = undefined;

/**
 * @member {Array.<Number>} pvalue
 */
LBResults.prototype['pvalue'] = undefined;

/**
 * @member {Array.<Array.<Number>>} confint
 */
LBResults.prototype['confint'] = undefined;






export default LBResults;

