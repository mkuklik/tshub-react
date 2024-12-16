# .RawApiKeyApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiApiKeyRawCreate**](RawApiKeyApi.md#appApiApiKeyRawCreate) | **POST** /raw/user/{uid}/apikey | Create API Key
[**appApiApiKeyRawDelete**](RawApiKeyApi.md#appApiApiKeyRawDelete) | **DELETE** /raw/user/{uid}/apikey/{name} | Delete API Key
[**appApiApiKeyRawGetList**](RawApiKeyApi.md#appApiApiKeyRawGetList) | **GET** /raw/user/{uid}/apikey | List API Keys


# **appApiApiKeyRawCreate**
> APIKey appApiApiKeyRawCreate()

Create API Key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawApiKeyApi(configuration);

let body:.RawApiKeyApiAppApiApiKeyRawCreateRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
  // string | friendly name to display
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
  // Array<string> | api key scopes (optional)
  scopes: [
    "scopes_example",
  ],
  // number | number of days to expiry (optional)
  expiresIn: 1,
};

apiInstance.appApiApiKeyRawCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined
 **name** | [**string**] | friendly name to display | defaults to undefined
 **scopes** | **Array&lt;string&gt;** | api key scopes | (optional) defaults to undefined
 **expiresIn** | [**number**] | number of days to expiry | (optional) defaults to undefined


### Return type

**APIKey**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A new API key |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiApiKeyRawDelete**
> void appApiApiKeyRawDelete()

Delete API Key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawApiKeyApi(configuration);

let body:.RawApiKeyApiAppApiApiKeyRawDeleteRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
  // string | api key name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
};

apiInstance.appApiApiKeyRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined
 **name** | [**string**] | api key name | defaults to undefined


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
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiApiKeyRawGetList**
> Array<APIKey> appApiApiKeyRawGetList()

List API Keys

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawApiKeyApi(configuration);

let body:.RawApiKeyApiAppApiApiKeyRawGetListRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiApiKeyRawGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined


### Return type

**Array<APIKey>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


