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

export class APIKey {
    'name'?: string;
    'key'?: string | null;
    'prefix'?: string;
    'scopes'?: Array<string>;
    'createdOn'?: Date;
    'expiriesOn'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expiriesOn",
            "baseName": "expiriesOn",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return APIKey.attributeTypeMap;
    }

    public constructor() {
    }
}

