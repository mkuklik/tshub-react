# .SourcesApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSource**](SourcesApi.md#getSource) | **GET** /fred/source | 
[**getSourceReleases**](SourcesApi.md#getSourceReleases) | **GET** /fred/source/releases | 
[**getSources**](SourcesApi.md#getSources) | **GET** /fred/sources | 


# **getSource**
> Sources getSource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetSourceRequest = {
  // string | Get all sources of economic data. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a source. (optional)
  sourceId: "source_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
};

apiInstance.getSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get all sources of economic data. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **sourceId** | [**string**] | The id for a source. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined


### Return type

**Sources**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSourceReleases**
> Releases getSourceReleases()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetSourceReleasesRequest = {
  // string | #Description (optional)
  the: "The_example",
  // string | Get all sources of economic data. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a source. (optional)
  sourceId: "source_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending order for attribute values specified by order_by. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getSourceReleases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **the** | [**string**] | #Description | (optional) defaults to undefined
 **description** | [**string**] | Get all sources of economic data. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **sourceId** | [**string**] | The id for a source. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending order for attribute values specified by order_by. | (optional) defaults to undefined


### Return type

**Releases**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSources**
> Sources getSources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SourcesApi(configuration);

let body:.SourcesApiGetSourcesRequest = {
  // string | Get all sources of economic data. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending order for attribute values specified by order_by. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get all sources of economic data. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending order for attribute values specified by order_by. | (optional) defaults to undefined


### Return type

**Sources**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


