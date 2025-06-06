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
import Member from './Member';
import Visibility from './Visibility';

/**
 * The Space model module.
 * @module model/Space
 * @version 0.1
 */
class Space {
    /**
     * Constructs a new <code>Space</code>.
     * @alias module:model/Space
     */
    constructor() { 
        
        Space.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Space</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Space} obj Optional instance to populate.
     * @return {module:model/Space} The populated <code>Space</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Space();

            if (data.hasOwnProperty('spaceId')) {
                obj['spaceId'] = ApiClient.convertToType(data['spaceId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = Visibility.constructFromObject(data['visibility']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [Member]);
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
 * @member {String} spaceId
 */
Space.prototype['spaceId'] = undefined;

/**
 * @member {String} name
 */
Space.prototype['name'] = undefined;

/**
 * @member {String} title
 */
Space.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Space.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
Space.prototype['tags'] = undefined;

/**
 * @member {module:model/Visibility} visibility
 */
Space.prototype['visibility'] = undefined;

/**
 * @member {Array.<module:model/Member>} members
 */
Space.prototype['members'] = undefined;

/**
 * @member {Date} realStart
 */
Space.prototype['realStart'] = undefined;

/**
 * @member {Date} realEnd
 */
Space.prototype['realEnd'] = undefined;






export default Space;

