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

import { ReleaseDatesReleaseDatesInner } from '../models/ReleaseDatesReleaseDatesInner';
import { HttpFile } from '../http/http';

export class ReleaseDates {
    'realtimeStart'?: string;
    'realtimeEnd'?: string;
    'orderBy'?: string;
    'sortOrder'?: string;
    'count'?: number;
    'offset'?: number;
    'limit'?: number;
    'releaseDates'?: Array<ReleaseDatesReleaseDatesInner>;

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
            "format": ""
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
            "name": "releaseDates",
            "baseName": "release_dates",
            "type": "Array<ReleaseDatesReleaseDatesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReleaseDates.attributeTypeMap;
    }

    public constructor() {
    }
}

