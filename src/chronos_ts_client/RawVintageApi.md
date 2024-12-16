# .RawVintageApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiVintagesGetListRaw**](RawVintageApi.md#appApiVintagesGetListRaw) | **GET** /raw/vintage/{collId} | List vintage tags in a collection 
[**appApiVintagesGetRaw**](RawVintageApi.md#appApiVintagesGetRaw) | **GET** /raw/vintage/{collId}/{vid} | Retrieve a vintage tag with metadata
[**appApiVintagesObjectHistoryRaw**](RawVintageApi.md#appApiVintagesObjectHistoryRaw) | **GET** /raw/vintage/{collId}/{vid}/history | History of vintage by tag id
[**appApiVintagesPutRaw**](RawVintageApi.md#appApiVintagesPutRaw) | **PUT** /raw/vintage/{collId}/{vid} | Update vintage tag


# **appApiVintagesGetListRaw**
> Array<VintageSummary> appApiVintagesGetListRaw()

List vintage tags in a collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawVintageApi(configuration);

let body:.RawVintageApiAppApiVintagesGetListRawRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
  // Date | realtime when values were valid (optional)
  realtime: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiVintagesGetListRaw(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined
 **realtime** | [**Date**] | realtime when values were valid | (optional) defaults to undefined


### Return type

**Array<VintageSummary>**

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
**404** | space or collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesGetRaw**
> Vintage appApiVintagesGetRaw()

Retrieve a vintage tag with metadata

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawVintageApi(configuration);

let body:.RawVintageApiAppApiVintagesGetRawRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | vintage id
  vid: "vid_example",
  // boolean | should include vintage metadata (optional)
  meta: true,
};

apiInstance.appApiVintagesGetRaw(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **vid** | [**string**] | vintage id | defaults to undefined
 **meta** | [**boolean**] | should include vintage metadata | (optional) defaults to undefined


### Return type

**Vintage**

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
**404** | space or collection or tag not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesObjectHistoryRaw**
> Array<VintageHistorical> appApiVintagesObjectHistoryRaw()

History of vintage by tag id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawVintageApi(configuration);

let body:.RawVintageApiAppApiVintagesObjectHistoryRawRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | vintage id
  vid: "vid_example",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiVintagesObjectHistoryRaw(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **vid** | [**string**] | vintage id | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<VintageHistorical>**

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
**404** | space or collection or tag not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesPutRaw**
> VintageSummary appApiVintagesPutRaw(vintageUpdate)

Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawVintageApi(configuration);

let body:.RawVintageApiAppApiVintagesPutRawRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | vintage id
  vid: "vid_example",
  // VintageUpdate | vintage tag
  vintageUpdate: {
    name: "name_example",
    description: "description_example",
    metadata: {},
  },
};

apiInstance.appApiVintagesPutRaw(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vintageUpdate** | **VintageUpdate**| vintage tag |
 **collId** | [**string**] | collection id | defaults to undefined
 **vid** | [**string**] | vintage id | defaults to undefined


### Return type

**VintageSummary**

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
**404** | space or collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


