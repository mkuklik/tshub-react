# .TimeSeriesDataApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiTimeseriesDataDelete**](TimeSeriesDataApi.md#appApiTimeseriesDataDelete) | **DELETE** /data | Delete observations
[**appApiTimeseriesDataGet**](TimeSeriesDataApi.md#appApiTimeseriesDataGet) | **GET** /data | Retrieve time series data
[**appApiTimeseriesDataPut**](TimeSeriesDataApi.md#appApiTimeseriesDataPut) | **PUT** /data | Save observations


# **appApiTimeseriesDataDelete**
> void appApiTimeseriesDataDelete()

Delete observations from a time series

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesDataApi(configuration);

let body:.TimeSeriesDataApiAppApiTimeseriesDataDeleteRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Array<string> | list of series names
  names: [
    "names_example",
  ],
  // Array<AppApiTimeseriesDataDeleteIndexParameterInner> | time index
  index: [
    null,
  ],
  // 'string' | 'iso' | 's' | 'ms' | 'us' | Format of data time index * `string` a string represenation specific to each index type, e.g. 2000-01 for monthly index. * `iso` a string with iso representation of datetime \'\' * `s`   a number of seconds from unix epoch 1970-01-01 * `ms`  a number of milliseconds from unix epoch 1970-01-01 * `us`  a number of microseconds from unix epoch 1970-01-01  (optional)
  format: "string",
};

apiInstance.appApiTimeseriesDataDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **names** | **Array&lt;string&gt;** | list of series names | defaults to undefined
 **index** | **Array&lt;AppApiTimeseriesDataDeleteIndexParameterInner&gt;** | time index | defaults to undefined
 **format** | [**&#39;string&#39; | &#39;iso&#39; | &#39;s&#39; | &#39;ms&#39; | &#39;us&#39;**]**Array<&#39;string&#39; &#124; &#39;iso&#39; &#124; &#39;s&#39; &#124; &#39;ms&#39; &#124; &#39;us&#39;>** | Format of data time index * &#x60;string&#x60; a string represenation specific to each index type, e.g. 2000-01 for monthly index. * &#x60;iso&#x60; a string with iso representation of datetime \&#39;\&#39; * &#x60;s&#x60;   a number of seconds from unix epoch 1970-01-01 * &#x60;ms&#x60;  a number of milliseconds from unix epoch 1970-01-01 * &#x60;us&#x60;  a number of microseconds from unix epoch 1970-01-01  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Time series not found error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesDataGet**
> Array<SingleTimeSeriesData> appApiTimeseriesDataGet()

Retrieve time series data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesDataApi(configuration);

let body:.TimeSeriesDataApiAppApiTimeseriesDataGetRequest = {
  // TSIList | list of time series identifiers
  series: [
    "abcdefg.dfds_dfasd.dfsd_dsfdfds",
  ],
  // string | start of time index range, format depends on the freq requested  (optional)
  periodStart: "periodStart_example",
  // string | end of time index range (optional)
  periodEnd: "periodEnd_example",
  // 'diff' | 'rdiff' | 'log' | 'ldiff' | 'norm' | Time series transformation * `none` - as is * `diff` - Use the last value of the time period. * `rdiff` - relative diff, i.e. % changes * `log` - natural log * `ldiff` - log diff, i.e. % changes * `norm` - normalized to 100  (optional)
  transform: "diff",
  // string | frequency of returned series (optional)
  freq: "freq_example",
  // 'auto' | 'last' | 'first' | 'sumw' | 'pch' | 'max' | 'min' | Method of converting to lower frequency. * `auto` - Determine the method based on the series classification. * `last` - Use the last value of the time period. * `first` - Use the first value of the time period. * `sum` - Aggregate the values of the time period. e.g. for flow type of variables * `pch` - Aggregate the percentage change over the period. * `mix` - Use the highest value in the time period. * `min` - Use the lowest value of the time period.  (optional)
  toLowerMethod: "auto",
  // 'auto' | 'same' | 'dist' | 'pch' | 'linear' | 'first' | 'quad' | 'cube' | Method of converting to higher frequency. * `auto` - Determine the method based on the series classification. * `same` - Use the same value for the whole period. * `dist` - Divide equally over the time period. * `pch` - Distribute the percentage change over the period. * `linear` - Use a linear interpolation of the values from this to the next period. * `first` - Use the value for the first value of the period. * `quad` - Use quadratic interpolation to distribute the value over the period. * `cube` - Use a cubic interpolation of the values from this to the next period.  (optional)
  toHigherMethod: "auto",
  // 'none' | 'auto' | 'previous' | 'zero' | Method of filling in any missing values. * `none` - Do not fill in missing values. They will remain NaN in the value vector. * `auto` - Determine the method based on the series classification. * `previous` - Use the previous non-missing value. * `zero` - Use the value zero.  (optional)
  missingMethod: "none",
  // boolean | Should merge time series (optional)
  merge: false,
  // Date | real time as of which values were valid (optional)
  realtime: new Date('1970-01-01T00:00:00.00Z'),
  // string | vintage tag used to identify real time when series was written. (optional)
  vintage: "vintage_example",
  // 'json' | 'csv' | 'excel' | output type (optional)
  output: "json",
  // 'auto' | 'epoch' | 'string' | 'ISO' | | format of output type * `auto` depending on output, * `string` string represenation as in * `epoch` integers specifying number of ms from unix epoch * `ISO` ISO8601 format 2008-09-15T15:53:00 (optional)
  outputIndexType: "epoch",
  // string | format of output type (optional)
  outputIndexFormat: "%Y-Q%Q",
  // number | the first number of item to skip (optional)
  offset: 3.14,
  // number | the number of items to return (optional)
  limit: 3.14,
};

apiInstance.appApiTimeseriesDataGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series** | **TSIList** | list of time series identifiers | defaults to undefined
 **periodStart** | [**string**] | start of time index range, format depends on the freq requested  | (optional) defaults to undefined
 **periodEnd** | [**string**] | end of time index range | (optional) defaults to undefined
 **transform** | [**&#39;diff&#39; | &#39;rdiff&#39; | &#39;log&#39; | &#39;ldiff&#39; | &#39;norm&#39;**]**Array<&#39;diff&#39; &#124; &#39;rdiff&#39; &#124; &#39;log&#39; &#124; &#39;ldiff&#39; &#124; &#39;norm&#39;>** | Time series transformation * &#x60;none&#x60; - as is * &#x60;diff&#x60; - Use the last value of the time period. * &#x60;rdiff&#x60; - relative diff, i.e. % changes * &#x60;log&#x60; - natural log * &#x60;ldiff&#x60; - log diff, i.e. % changes * &#x60;norm&#x60; - normalized to 100  | (optional) defaults to undefined
 **freq** | [**string**] | frequency of returned series | (optional) defaults to undefined
 **toLowerMethod** | [**&#39;auto&#39; | &#39;last&#39; | &#39;first&#39; | &#39;sumw&#39; | &#39;pch&#39; | &#39;max&#39; | &#39;min&#39;**]**Array<&#39;auto&#39; &#124; &#39;last&#39; &#124; &#39;first&#39; &#124; &#39;sumw&#39; &#124; &#39;pch&#39; &#124; &#39;max&#39; &#124; &#39;min&#39;>** | Method of converting to lower frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;last&#x60; - Use the last value of the time period. * &#x60;first&#x60; - Use the first value of the time period. * &#x60;sum&#x60; - Aggregate the values of the time period. e.g. for flow type of variables * &#x60;pch&#x60; - Aggregate the percentage change over the period. * &#x60;mix&#x60; - Use the highest value in the time period. * &#x60;min&#x60; - Use the lowest value of the time period.  | (optional) defaults to 'auto'
 **toHigherMethod** | [**&#39;auto&#39; | &#39;same&#39; | &#39;dist&#39; | &#39;pch&#39; | &#39;linear&#39; | &#39;first&#39; | &#39;quad&#39; | &#39;cube&#39;**]**Array<&#39;auto&#39; &#124; &#39;same&#39; &#124; &#39;dist&#39; &#124; &#39;pch&#39; &#124; &#39;linear&#39; &#124; &#39;first&#39; &#124; &#39;quad&#39; &#124; &#39;cube&#39;>** | Method of converting to higher frequency. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;same&#x60; - Use the same value for the whole period. * &#x60;dist&#x60; - Divide equally over the time period. * &#x60;pch&#x60; - Distribute the percentage change over the period. * &#x60;linear&#x60; - Use a linear interpolation of the values from this to the next period. * &#x60;first&#x60; - Use the value for the first value of the period. * &#x60;quad&#x60; - Use quadratic interpolation to distribute the value over the period. * &#x60;cube&#x60; - Use a cubic interpolation of the values from this to the next period.  | (optional) defaults to 'auto'
 **missingMethod** | [**&#39;none&#39; | &#39;auto&#39; | &#39;previous&#39; | &#39;zero&#39;**]**Array<&#39;none&#39; &#124; &#39;auto&#39; &#124; &#39;previous&#39; &#124; &#39;zero&#39;>** | Method of filling in any missing values. * &#x60;none&#x60; - Do not fill in missing values. They will remain NaN in the value vector. * &#x60;auto&#x60; - Determine the method based on the series classification. * &#x60;previous&#x60; - Use the previous non-missing value. * &#x60;zero&#x60; - Use the value zero.  | (optional) defaults to 'none'
 **merge** | [**boolean**] | Should merge time series | (optional) defaults to false
 **realtime** | [**Date**] | real time as of which values were valid | (optional) defaults to undefined
 **vintage** | [**string**] | vintage tag used to identify real time when series was written. | (optional) defaults to undefined
 **output** | [**&#39;json&#39; | &#39;csv&#39; | &#39;excel&#39;**]**Array<&#39;json&#39; &#124; &#39;csv&#39; &#124; &#39;excel&#39;>** | output type | (optional) defaults to 'json'
 **outputIndexType** | [**&#39;auto&#39; | &#39;epoch&#39; | &#39;string&#39; | &#39;ISO&#39;**]**Array<&#39;auto&#39; &#124; &#39;epoch&#39; &#124; &#39;string&#39; &#124; &#39;ISO&#39;>** | | format of output type * &#x60;auto&#x60; depending on output, * &#x60;string&#x60; string represenation as in * &#x60;epoch&#x60; integers specifying number of ms from unix epoch * &#x60;ISO&#x60; ISO8601 format 2008-09-15T15:53:00 | (optional) defaults to 'epoch'
 **outputIndexFormat** | [**string**] | format of output type | (optional) defaults to undefined
 **offset** | [**number**] | the first number of item to skip | (optional) defaults to undefined
 **limit** | [**number**] | the number of items to return | (optional) defaults to undefined


### Return type

**Array<SingleTimeSeriesData>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Time series not found error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesDataPut**
> void appApiTimeseriesDataPut(singleTimeSeriesData)

Save observations of time series

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesDataApi(configuration);

let body:.TimeSeriesDataApiAppApiTimeseriesDataPutRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Array<SingleTimeSeriesData> | time series data
  singleTimeSeriesData: [
    null,
  ],
};

apiInstance.appApiTimeseriesDataPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **singleTimeSeriesData** | **Array<SingleTimeSeriesData>**| time series data |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Time series not found error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


