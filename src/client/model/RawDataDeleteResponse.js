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
 * The RawDataDeleteResponse model module.
 * @module model/RawDataDeleteResponse
 * @version 0.1
 */
class RawDataDeleteResponse {
    /**
     * Constructs a new <code>RawDataDeleteResponse</code>.
     * Successful data delete for a single series
     * @alias module:model/RawDataDeleteResponse
     */
    constructor() { 
        
        RawDataDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RawDataDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawDataDeleteResponse} obj Optional instance to populate.
     * @return {module:model/RawDataDeleteResponse} The populated <code>RawDataDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawDataDeleteResponse();

            if (data.hasOwnProperty('collId')) {
                obj['collId'] = ApiClient.convertToType(data['collId'], 'String');
            }
            if (data.hasOwnProperty('tsid')) {
                obj['tsid'] = ApiClient.convertToType(data['tsid'], 'String');
            }
            if (data.hasOwnProperty('realtime')) {
                obj['realtime'] = ApiClient.convertToType(data['realtime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} collId
 */
RawDataDeleteResponse.prototype['collId'] = undefined;

/**
 * @member {String} tsid
 */
RawDataDeleteResponse.prototype['tsid'] = undefined;

/**
 * realtime until when the observations are valid
 * @member {Date} realtime
 */
RawDataDeleteResponse.prototype['realtime'] = undefined;






export default RawDataDeleteResponse;

