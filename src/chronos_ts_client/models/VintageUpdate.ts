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
* Vintage tag is a label associated with a real time (valid time) in a collection. 
*/
export class VintageUpdate {
    'name'?: string;
    'description'?: string;
    'metadata'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VintageUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
