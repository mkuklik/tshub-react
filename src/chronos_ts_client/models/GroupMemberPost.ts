/**
 * ChronosDB swagger
 * ChronosDB time series database API
 *
 * OpenAPI spec version: 0.1
 * Contact: apiteam@chronosdb.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GroupMemberPost {
    /**
    * member type: `g` group `u` user 
    */
    'type'?: GroupMemberPostTypeEnum;
    'id'?: string;
    /**
    * member role: `member` group member, who can see group info and members `manager` group manager, who can add/remove members, and edit group info `owner` group owner, who can transfer ownership and delete the group 
    */
    'role'?: GroupMemberPostRoleEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GroupMemberPostTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "GroupMemberPostRoleEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupMemberPost.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GroupMemberPostTypeEnum {
    G = 'g',
    U = 'u'
}
export enum GroupMemberPostRoleEnum {
    Manager = 'manager',
    Member = 'member',
    Owner = 'owner'
}

