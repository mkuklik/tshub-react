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

export class ObservationHistorical {
    'obsId'?: string;
    'index'?: any | null;
    'value'?: any | null;
    'status'?: number;
    'realStart'?: Date;
    'realEnd'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "obsId",
            "baseName": "obsId",
            "type": "string",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "any",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": ""
        },
        {
            "name": "realStart",
            "baseName": "realStart",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "realEnd",
            "baseName": "realEnd",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ObservationHistorical.attributeTypeMap;
    }

    public constructor() {
    }
}
