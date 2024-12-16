# .TimeSeriesApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiTimeseriesDelete**](TimeSeriesApi.md#appApiTimeseriesDelete) | **DELETE** /timeseries/{space_name}/{coll_name}/{name} | Delete a time series
[**appApiTimeseriesGet**](TimeSeriesApi.md#appApiTimeseriesGet) | **GET** /timeseries/{space_name}/{coll_name}/{name} | Retrieve time series info
[**appApiTimeseriesGetList**](TimeSeriesApi.md#appApiTimeseriesGetList) | **GET** /timeseries/{space_name}/{coll_name} | List time series in a collection
[**appApiTimeseriesNameHistory**](TimeSeriesApi.md#appApiTimeseriesNameHistory) | **GET** /timeseries/{space_name}/{coll_name}/{name}/history | retrive historical values
[**appApiTimeseriesPost**](TimeSeriesApi.md#appApiTimeseriesPost) | **POST** /timeseries/{space_name}/{coll_name} | Create a new time series
[**appApiTimeseriesPut**](TimeSeriesApi.md#appApiTimeseriesPut) | **PUT** /timeseries/{space_name}/{coll_name}/{name} | Update existing time series info


# **appApiTimeseriesDelete**
> void appApiTimeseriesDelete()

delete time series

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesDeleteRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | a single series name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
};

apiInstance.appApiTimeseriesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | a single series name | defaults to undefined


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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesGet**
> TimeSeries appApiTimeseriesGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesGetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | a single series name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
};

apiInstance.appApiTimeseriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | a single series name | defaults to undefined


### Return type

**TimeSeries**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesGetList**
> Array<TimeSeriesSummary> appApiTimeseriesGetList()

List time series in a collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesGetListRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiTimeseriesGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**Array<TimeSeriesSummary>**

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
**403** | You don’t have permission to access this resource |  -  |
**404** | Time Series Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesNameHistory**
> Array<string> appApiTimeseriesNameHistory()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesNameHistoryRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | a single series name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiTimeseriesNameHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | a single series name | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<string>**

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
**403** | You don’t have permission to access this resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiTimeseriesPost**
> TimeSeriesCore appApiTimeseriesPost(timeSeries)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesPostRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // TimeSeries | Time series parameters. dtype and freq are required
  timeSeries: null,
};

apiInstance.appApiTimeseriesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | **TimeSeries**| Time series parameters. dtype and freq are required |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**TimeSeriesCore**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

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

# **appApiTimeseriesPut**
> TimeSeries appApiTimeseriesPut(timeSeriesUpdate)

Update existing time series info

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiAppApiTimeseriesPutRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | a single series name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
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

apiInstance.appApiTimeseriesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesUpdate** | **TimeSeriesUpdate**| Time series updated info |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | a single series name | defaults to undefined


### Return type

**TimeSeries**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

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


