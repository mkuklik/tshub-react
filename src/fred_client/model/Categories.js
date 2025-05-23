/**
 * FRED API
 * API for accessing economic data from the Federal Reserve Economic Data (FRED) database.
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CategoriesCategoriesInner from './CategoriesCategoriesInner';

/**
 * The Categories model module.
 * @module model/Categories
 * @version 1.0.2
 */
class Categories {
    /**
     * Constructs a new <code>Categories</code>.
     * @alias module:model/Categories
     */
    constructor() { 
        
        Categories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Categories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Categories} obj Optional instance to populate.
     * @return {module:model/Categories} The populated <code>Categories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Categories();

            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [CategoriesCategoriesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Categories</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Categories</code>.
     */
    static validateJSON(data) {
        if (data['categories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['categories'])) {
                throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
            }
            // validate the optional field `categories` (array)
            for (const item of data['categories']) {
                CategoriesCategoriesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/CategoriesCategoriesInner>} categories
 */
Categories.prototype['categories'] = undefined;






export default Categories;

