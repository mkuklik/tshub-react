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
* Format of data time index * `iso` a string with iso representation of datetime \'\' * `s`   a number of seconds from unix epoch 1970-01-01 * `ms`  a number of milliseconds from unix epoch 1970-01-01 * `us`  a number of microseconds from unix epoch 1970-01-01 
*/
export enum IndexFormat {
    Iso = 'iso',
    S = 's',
    Ms = 'ms',
    Us = 'us'
}