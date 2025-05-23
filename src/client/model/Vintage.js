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
 * The Vintage model module.
 * @module model/Vintage
 * @version 0.1
 */
class Vintage {
    /**
     * Constructs a new <code>Vintage</code>.
     * Vintage tag is a label associated with a real time (valid time) in a collection. 
     * @alias module:model/Vintage
     */
    constructor() { 
        
        Vintage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Vintage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vintage} obj Optional instance to populate.
     * @return {module:model/Vintage} The populated <code>Vintage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vintage();

            if (data.hasOwnProperty('coll_id')) {
                obj['coll_id'] = ApiClient.convertToType(data['coll_id'], 'String');
            }
            if (data.hasOwnProperty('vid')) {
                obj['vid'] = ApiClient.convertToType(data['vid'], 'String');
            }
            if (data.hasOwnProperty('realtime')) {
                obj['realtime'] = ApiClient.convertToType(data['realtime'], 'Date');
            }
            if (data.hasOwnProperty('tsids')) {
                obj['tsids'] = ApiClient.convertToType(data['tsids'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('realStart')) {
                obj['realStart'] = ApiClient.convertToType(data['realStart'], 'Date');
            }
            if (data.hasOwnProperty('realEnd')) {
                obj['realEnd'] = ApiClient.convertToType(data['realEnd'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * collection id
 * @member {String} coll_id
 */
Vintage.prototype['coll_id'] = undefined;

/**
 * @member {String} vid
 */
Vintage.prototype['vid'] = undefined;

/**
 * @member {Date} realtime
 */
Vintage.prototype['realtime'] = undefined;

/**
 * array of time series id, which were saved in this vintage
 * @member {Array.<String>} tsids
 */
Vintage.prototype['tsids'] = undefined;

/**
 * @member {String} name
 */
Vintage.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Vintage.prototype['description'] = undefined;

/**
 * @member {Object.<String, Object>} metadata
 */
Vintage.prototype['metadata'] = undefined;

/**
 * @member {Date} realStart
 */
Vintage.prototype['realStart'] = undefined;

/**
 * @member {Date} realEnd
 */
Vintage.prototype['realEnd'] = undefined;






export default Vintage;

