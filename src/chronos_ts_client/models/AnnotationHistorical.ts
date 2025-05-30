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

import { AnnotationTarget } from '../models/AnnotationTarget';
import { HttpFile } from '../http/http';

/**
* Historical annotation
*/
export class AnnotationHistorical {
    'collId'?: string;
    'aid'?: string;
    /**
    * annotation symbol
    */
    'symbol'?: string;
    'text'?: string;
    'format'?: string;
    /**
    * json-type object can be added to annotation to store some extra data or metadata
    */
    'attributes'?: { [key: string]: any; };
    /**
    * annotated targets
    */
    'targets'?: Array<AnnotationTarget>;
    /**
    * time when the time series definition is valid from
    */
    'deleted'?: boolean;
    /**
    * time when the time series definition is valid from
    */
    'realStart'?: Date;
    /**
    * time when the time series definition is valid until
    */
    'realEnd'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collId",
            "baseName": "coll_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "aid",
            "baseName": "aid",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<AnnotationTarget>",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
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
        return AnnotationHistorical.attributeTypeMap;
    }

    public constructor() {
    }
}

