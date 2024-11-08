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
import AutocorrelationResultsValues from './AutocorrelationResultsValues';
import Sample from './Sample';

/**
 * The AutocorrelationResults model module.
 * @module model/AutocorrelationResults
 * @version 0.1
 */
class AutocorrelationResults {
    /**
     * Constructs a new <code>AutocorrelationResults</code>.
     * @alias module:model/AutocorrelationResults
     */
    constructor() { 
        
        AutocorrelationResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutocorrelationResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutocorrelationResults} obj Optional instance to populate.
     * @return {module:model/AutocorrelationResults} The populated <code>AutocorrelationResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutocorrelationResults();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [AutocorrelationResultsValues]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('sample')) {
                obj['sample'] = Sample.constructFromObject(data['sample']);
            }
            if (data.hasOwnProperty('nlags')) {
                obj['nlags'] = ApiClient.convertToType(data['nlags'], 'Number');
            }
            if (data.hasOwnProperty('unbiased')) {
                obj['unbiased'] = ApiClient.convertToType(data['unbiased'], 'Boolean');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('dropna')) {
                obj['dropna'] = ApiClient.convertToType(data['dropna'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AutocorrelationResultsValues>} values
 */
AutocorrelationResults.prototype['values'] = undefined;

/**
 * @member {Date} timestamp
 */
AutocorrelationResults.prototype['timestamp'] = undefined;

/**
 * @member {module:model/Sample} sample
 */
AutocorrelationResults.prototype['sample'] = undefined;

/**
 * number of lags
 * @member {Number} nlags
 */
AutocorrelationResults.prototype['nlags'] = undefined;

/**
 * unbiased estimation of acf
 * @member {Boolean} unbiased
 */
AutocorrelationResults.prototype['unbiased'] = undefined;

/**
 * Method for the pacf calculation: ‘yw’ : Yule-Walker with bias correction in denominator for acovf. (default) ‘ywm’ : constant and trend. ‘ols’ : regression of time series on lags of it and on constant. ‘olsineff’ : regression of time series on lags using a single common sample to estimate all pacf coefficients. ‘olsb’ : regression of time series on lags with a bias adjustment. ‘ld’ :  Levinson-Durbin recursion with bias correction. ‘ldb’ :  Levinson-Durbin recursion without bias correction.
 * @member {module:model/AutocorrelationResults.MethodEnum} method
 */
AutocorrelationResults.prototype['method'] = undefined;

/**
 * Drop missing values; any observations with NaNs are dropped.
 * @member {Boolean} dropna
 */
AutocorrelationResults.prototype['dropna'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
AutocorrelationResults['MethodEnum'] = {

    /**
     * value: "yw"
     * @const
     */
    "yw": "yw",

    /**
     * value: "ywm"
     * @const
     */
    "ywm": "ywm",

    /**
     * value: "ols"
     * @const
     */
    "ols": "ols",

    /**
     * value: "olse"
     * @const
     */
    "olse": "olse",

    /**
     * value: "olsb"
     * @const
     */
    "olsb": "olsb",

    /**
     * value: "ld"
     * @const
     */
    "ld": "ld",

    /**
     * value: "ldb"
     * @const
     */
    "ldb": "ldb"
};



export default AutocorrelationResults;

