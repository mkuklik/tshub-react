# .VintageApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiVintagesGet**](VintageApi.md#appApiVintagesGet) | **GET** /vintage/{space_name}/{coll_name}/{name} | Retrieve a vintage tag with metadata
[**appApiVintagesGetList**](VintageApi.md#appApiVintagesGetList) | **GET** /vintage/{space_name}/{coll_name} | List vintage tags in a collection
[**appApiVintagesNameHistory**](VintageApi.md#appApiVintagesNameHistory) | **GET** /vintage/{space_name}/{coll_name}/{name}/history | Retrieve a vintage tag with metadata
[**appApiVintagesPut**](VintageApi.md#appApiVintagesPut) | **PUT** /vintage/{space_name}/{coll_name}/{name} | Update vintage tag


# **appApiVintagesGet**
> Vintage appApiVintagesGet()

Retrieve a vintage tag with metadata

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VintageApi(configuration);

let body:.VintageApiAppApiVintagesGetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | vintage tag
  name: "name_example",
  // boolean | should include vintage metadata (optional)
  meta: true,
};

apiInstance.appApiVintagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | vintage tag | defaults to undefined
 **meta** | [**boolean**] | should include vintage metadata | (optional) defaults to undefined


### Return type

**Vintage**

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
**404** | space or collection or tag not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesGetList**
> Array<VintageSummary> appApiVintagesGetList()

List vintage tags in a collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VintageApi(configuration);

let body:.VintageApiAppApiVintagesGetListRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiVintagesGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined


### Return type

**Array<VintageSummary>**

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
**404** | space or collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesNameHistory**
> Array<string> appApiVintagesNameHistory()

Retrieve a vintage tag with metadata

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VintageApi(configuration);

let body:.VintageApiAppApiVintagesNameHistoryRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | vintage tag
  name: "name_example",
};

apiInstance.appApiVintagesNameHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | vintage tag | defaults to undefined


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
**200** | List of vid\&#39;s which were associated with a given vintage name in a given collection |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space or collection or tag not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiVintagesPut**
> VintageSummary appApiVintagesPut(vintageUpdate)

Update a vintage tag for a revision of a time series. Vintage tag is a human-friendly label assigned to datetime when revision was recorded. Vintages are unique within the collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VintageApi(configuration);

let body:.VintageApiAppApiVintagesPutRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | vintage tag
  name: "name_example",
  // VintageUpdate | vintage tag
  vintageUpdate: {
    name: "name_example",
    description: "description_example",
    metadata: {},
  },
};

apiInstance.appApiVintagesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vintageUpdate** | **VintageUpdate**| vintage tag |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **name** | [**string**] | vintage tag | defaults to undefined


### Return type

**VintageSummary**

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
**404** | space or collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


