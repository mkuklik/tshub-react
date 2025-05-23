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
/**
* Enum class IndexFormat.
* @enum {}
* @readonly
*/
export default class IndexFormat {
    
        /**
         * value: "iso"
         * @const
         */
        "iso" = "iso";

    
        /**
         * value: "s"
         * @const
         */
        "s" = "s";

    
        /**
         * value: "ms"
         * @const
         */
        "ms" = "ms";

    
        /**
         * value: "us"
         * @const
         */
        "us" = "us";

    

    /**
    * Returns a <code>IndexFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IndexFormat} The enum <code>IndexFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

