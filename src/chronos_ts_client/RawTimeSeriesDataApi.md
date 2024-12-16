# .RawTimeSeriesDataApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiRawTimeseriesDataDelete**](RawTimeSeriesDataApi.md#appApiRawTimeseriesDataDelete) | **DELETE** /raw/data/{collId} | Delete observations, for internal use only
[**appApiRawTimeseriesDataGet**](RawTimeSeriesDataApi.md#appApiRawTimeseriesDataGet) | **GET** /raw/data/{collId} | Retrieve raw time series data, for internal use only
[**appApiRawTimeseriesDataPut**](RawTimeSeriesDataApi.md#appApiRawTimeseriesDataPut) | **PUT** /raw/data/{collId} | Save raw observations, for internal use only


# **appApiRawTimeseriesDataDelete**
> RawDataDeleteResponse appApiRawTimeseriesDataDelete()

Delete observations from a time series, for internal use only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesDataApi(configuration);

let body:.RawTimeSeriesDataApiAppApiRawTimeseriesDataDeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // Array<number> | time series index
  index: [
    1,
  ],
  // IndexFormat
  indexFormat: "iso",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiRawTimeseriesDataDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **index** | **Array&lt;number&gt;** | time series index | defaults to undefined
 **indexFormat** | **IndexFormat** |  | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined


### Return type

**RawDataDeleteResponse**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

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

# **appApiRawTimeseriesDataGet**
> { [key: string]: RawSingleTimeSeriesData; } appApiRawTimeseriesDataGet()

Retrieve raw time series data, for internal use only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesDataApi(configuration);

let body:.RawTimeSeriesDataApiAppApiRawTimeseriesDataGetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // Array<string> | array of tsid\'s in the collection, collId
  tsids: [
    "tsids_example",
  ],
  // Date | real time to retrieve the historical data (optional)
  realtime: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiRawTimeseriesDataGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsids** | **Array&lt;string&gt;** | array of tsid\&#39;s in the collection, collId | defaults to undefined
 **realtime** | [**Date**] | real time to retrieve the historical data | (optional) defaults to undefined


### Return type

**{ [key: string]: RawSingleTimeSeriesData; }**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

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

# **appApiRawTimeseriesDataPut**
> RawDataPutResponse appApiRawTimeseriesDataPut(rawDataPutRequest)

Save raw observations of time series, for internal use only

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesDataApi(configuration);

let body:.RawTimeSeriesDataApiAppApiRawTimeseriesDataPutRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // 'overwrite' | 'update' | 'append' | data type is one of the following * `overwrite` overwrite entire series * `update`    update exisitng values and add new values * `append`    add only new values ignoring any existing values 
  method: "update",
  // RawDataPutRequest | time series data
  rawDataPutRequest: {
    series: [
      null,
    ],
    vintage: {
      name: "name_example",
      description: "description_example",
      metadata: {},
    },
  },
  // Date | real time at which data was written. This only works if there is no observations written after this real time (optional)
  realtime: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiRawTimeseriesDataPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rawDataPutRequest** | **RawDataPutRequest**| time series data |
 **collId** | [**string**] | collection id | defaults to undefined
 **method** | [**&#39;overwrite&#39; | &#39;update&#39; | &#39;append&#39;**]**Array<&#39;overwrite&#39; &#124; &#39;update&#39; &#124; &#39;append&#39;>** | data type is one of the following * &#x60;overwrite&#x60; overwrite entire series * &#x60;update&#x60;    update exisitng values and add new values * &#x60;append&#x60;    add only new values ignoring any existing values  | defaults to 'update'
 **realtime** | [**Date**] | real time at which data was written. This only works if there is no observations written after this real time | (optional) defaults to undefined


### Return type

**RawDataPutResponse**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Time series not found error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


