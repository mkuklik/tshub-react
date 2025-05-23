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
* Enum class DType.
* @enum {}
* @readonly
*/
export default class DType {
    
        /**
         * value: "int"
         * @const
         */
        "int" = "int";

    
        /**
         * value: "float"
         * @const
         */
        "float" = "float";

    
        /**
         * value: "bool"
         * @const
         */
        "bool" = "bool";

    
        /**
         * value: "cat"
         * @const
         */
        "cat" = "cat";

    

    /**
    * Returns a <code>DType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DType} The enum <code>DType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

