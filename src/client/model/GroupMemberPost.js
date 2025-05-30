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
 * The GroupMemberPost model module.
 * @module model/GroupMemberPost
 * @version 0.1
 */
class GroupMemberPost {
    /**
     * Constructs a new <code>GroupMemberPost</code>.
     * @alias module:model/GroupMemberPost
     */
    constructor() { 
        
        GroupMemberPost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupMemberPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMemberPost} obj Optional instance to populate.
     * @return {module:model/GroupMemberPost} The populated <code>GroupMemberPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupMemberPost();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * member type: `g` group `u` user 
 * @member {module:model/GroupMemberPost.TypeEnum} type
 */
GroupMemberPost.prototype['type'] = undefined;

/**
 * @member {String} id
 */
GroupMemberPost.prototype['id'] = undefined;

/**
 * member role: `member` group member, who can see group info and members `manager` group manager, who can add/remove members, and edit group info `owner` group owner, who can transfer ownership and delete the group 
 * @member {module:model/GroupMemberPost.RoleEnum} role
 */
GroupMemberPost.prototype['role'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GroupMemberPost['TypeEnum'] = {

    /**
     * value: "g"
     * @const
     */
    "g": "g",

    /**
     * value: "u"
     * @const
     */
    "u": "u"
};


/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
GroupMemberPost['RoleEnum'] = {

    /**
     * value: "manager"
     * @const
     */
    "manager": "manager",

    /**
     * value: "member"
     * @const
     */
    "member": "member",

    /**
     * value: "owner"
     * @const
     */
    "owner": "owner"
};



export default GroupMemberPost;

