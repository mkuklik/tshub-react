/**
 * FRED API
 * API for accessing economic data from the Federal Reserve Economic Data (FRED) database.
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReleasesReleasesInner } from '../models/ReleasesReleasesInner';
import { HttpFile } from '../http/http';

export class Releases {
    'realtimeStart'?: string;
    'realtimeEnd'?: string;
    'orderBy'?: string;
    'sortOrder'?: string;
    'count'?: number;
    'offset'?: number;
    'limit'?: number;
    'releases'?: Array<ReleasesReleasesInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "realtimeStart",
            "baseName": "realtime_start",
            "type": "string",
            "format": "date"
        },
        {
            "name": "realtimeEnd",
            "baseName": "realtime_end",
            "type": "string",
            "format": "date"
        },
        {
            "name": "orderBy",
            "baseName": "order_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "string",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "releases",
            "baseName": "releases",
            "type": "Array<ReleasesReleasesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Releases.attributeTypeMap;
    }

    public constructor() {
    }
}
