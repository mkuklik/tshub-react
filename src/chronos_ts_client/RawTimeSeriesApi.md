# .RawTimeSeriesApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiTimeseriesRawDelete**](RawTimeSeriesApi.md#appApiTimeseriesRawDelete) | **DELETE** /raw/timeseries/{collId}/{tsid} | Delete a time series
[**appApiTimeseriesRawGet**](RawTimeSeriesApi.md#appApiTimeseriesRawGet) | **GET** /raw/timeseries/{collId}/{tsid} | Retrieve time series info
[**appApiTimeseriesRawGetList**](RawTimeSeriesApi.md#appApiTimeseriesRawGetList) | **GET** /raw/timeseries/{collId} | List time series in a collection
[**appApiTimeseriesRawObjectHistory**](RawTimeSeriesApi.md#appApiTimeseriesRawObjectHistory) | **GET** /raw/timeseries/{collId}/{tsid}/history | retrieve historical values
[**appApiTimeseriesRawPermanentDelete**](RawTimeSeriesApi.md#appApiTimeseriesRawPermanentDelete) | **DELETE** /raw/timeseries/{collId}/{tsid}/permanent | retrieve historical values
[**appApiTimeseriesRawPost**](RawTimeSeriesApi.md#appApiTimeseriesRawPost) | **POST** /raw/timeseries/{collId} | Create a new time series
[**appApiTimeseriesRawPut**](RawTimeSeriesApi.md#appApiTimeseriesRawPut) | **PUT** /raw/timeseries/{collId}/{tsid} | Update existing time series info
[**appApiTimeseriesRawUndelete**](RawTimeSeriesApi.md#appApiTimeseriesRawUndelete) | **PUT** /raw/timeseries/{collId}/{tsid}/undelete | retrieve historical values


# **appApiTimeseriesRawDelete**
> void appApiTimeseriesRawDelete()

delete time series

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawDeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
};

apiInstance.appApiTimeseriesRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawGet**
> TimeSeries appApiTimeseriesRawGet()

Retrieve time series info

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawGetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
};

apiInstance.appApiTimeseriesRawGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined


### Return type

**TimeSeries**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawGetList**
> Array<TimeSeriesSummary> appApiTimeseriesRawGetList()

List time series in a collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawGetListRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // Array<string> | array of time series id (optional)
  tsids: [
    "tsids_example",
  ],
};

apiInstance.appApiTimeseriesRawGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsids** | **Array&lt;string&gt;** | array of time series id | (optional) defaults to undefined


### Return type

**Array<TimeSeriesSummary>**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawObjectHistory**
> Array<string> appApiTimeseriesRawObjectHistory()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawObjectHistoryRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiTimeseriesRawObjectHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<string>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawPermanentDelete**
> void appApiTimeseriesRawPermanentDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawPermanentDeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
};

apiInstance.appApiTimeseriesRawPermanentDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawPost**
> TimeSeriesCore appApiTimeseriesRawPost(timeSeries)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawPostRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // TimeSeries | Time series parameters. dtype and freq are required
  timeSeries: null,
};

apiInstance.appApiTimeseriesRawPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | **TimeSeries**| Time series parameters. dtype and freq are required |
 **collId** | [**string**] | collection id | defaults to undefined


### Return type

**TimeSeriesCore**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawPut**
> TimeSeries appApiTimeseriesRawPut(timeSeriesUpdate)

Update existing time series info

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawPutRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
  // TimeSeriesUpdate | Time series updated info
  timeSeriesUpdate: {
    name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
    unit: {},
    title: "Unemployment Rate",
    description: "The unemployment rate represents the number of unemployed as a percentage of the labor force. Labor force data are restricted to people 16 years of age and older, who currently reside in 1 of the 50 states or the District of Columbia, who do not reside in institutions (e.g., penal and mental facilities, homes for the aged), and who are not on active duty in the Armed Forces.",
    discontinued: false,
    legend: {},
    attributes: {},
  },
};

apiInstance.appApiTimeseriesRawPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesUpdate** | **TimeSeriesUpdate**| Time series updated info |
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined


### Return type

**TimeSeries**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesRawUndelete**
> void appApiTimeseriesRawUndelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawTimeSeriesApi(configuration);

let body:.RawTimeSeriesApiAppApiTimeseriesRawUndeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id
  tsid: "tsid_example",
  // string | new name for the time series (optional)
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
};

apiInstance.appApiTimeseriesRawUndelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | defaults to undefined
 **name** | [**string**] | new name for the time series | (optional) defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


