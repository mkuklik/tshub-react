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

/**
* Vintage tag summary
*/
export class VintageSummary {
    'collId'?: string;
    'vid'?: string;
    'name'?: string;
    'description'?: string;
    'realtime'?: Date;
    'realStart'?: Date;
    'realEnd'?: Date;
    /**
    * array of time series id, which were saved in this vintage
    */
    'tsids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collId",
            "baseName": "coll_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "vid",
            "baseName": "vid",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "realtime",
            "baseName": "realtime",
            "type": "Date",
            "format": "date-time"
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
        },
        {
            "name": "tsids",
            "baseName": "tsids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VintageSummary.attributeTypeMap;
    }

    public constructor() {
    }
}

