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

import { HttpFile } from '../http/http';

export class SeriessSeriessInner {
    'id'?: string;
    'realtimeStart'?: string;
    'realtimeEnd'?: string;
    'title'?: string;
    'observationStart'?: string;
    'observationEnd'?: string;
    'frequency'?: string;
    'frequencyShort'?: string;
    'units'?: string;
    'unitsShort'?: string;
    'seasonalAdjustment'?: string;
    'seasonalAdjustmentShort'?: string;
    'lastUpdated'?: string;
    'popularity'?: number;
    'groupPopularity'?: number;
    'notes'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
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
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "observationStart",
            "baseName": "observation_start",
            "type": "string",
            "format": "date"
        },
        {
            "name": "observationEnd",
            "baseName": "observation_end",
            "type": "string",
            "format": "date"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "string",
            "format": ""
        },
        {
            "name": "frequencyShort",
            "baseName": "frequency_short",
            "type": "string",
            "format": ""
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitsShort",
            "baseName": "units_short",
            "type": "string",
            "format": ""
        },
        {
            "name": "seasonalAdjustment",
            "baseName": "seasonal_adjustment",
            "type": "string",
            "format": ""
        },
        {
            "name": "seasonalAdjustmentShort",
            "baseName": "seasonal_adjustment_short",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdated",
            "baseName": "last_updated",
            "type": "string",
            "format": ""
        },
        {
            "name": "popularity",
            "baseName": "popularity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "groupPopularity",
            "baseName": "group_popularity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SeriessSeriessInner.attributeTypeMap;
    }

    public constructor() {
    }
}

