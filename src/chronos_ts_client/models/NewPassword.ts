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

export class NewPassword {
    /**
    * Password
    */
    'password'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": "password"
        }    ];

    static getAttributeTypeMap() {
        return NewPassword.attributeTypeMap;
    }

    public constructor() {
    }
}

