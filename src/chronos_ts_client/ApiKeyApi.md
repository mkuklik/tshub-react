# .ApiKeyApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiApiKeyCreate**](ApiKeyApi.md#appApiApiKeyCreate) | **POST** /user/{username}/apikey | Create API Key
[**appApiApiKeyDelete**](ApiKeyApi.md#appApiApiKeyDelete) | **DELETE** /user/{username}/apikey/{name} | Delete API Key
[**appApiApiKeyGetList**](ApiKeyApi.md#appApiApiKeyGetList) | **GET** /user/{username}/apikey | List API Keys


# **appApiApiKeyCreate**
> APIKey appApiApiKeyCreate()

Create API Key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiKeyApi(configuration);

let body:.ApiKeyApiAppApiApiKeyCreateRequest = {
  // string | username
  username: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | friendly name to display
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
  // Array<string> | api key scopes (optional)
  scopes: [
    "scopes_example",
  ],
  // number | number of days to expiry (optional)
  expiresIn: 1,
};

apiInstance.appApiApiKeyCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | username | defaults to undefined
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

# **appApiApiKeyDelete**
> void appApiApiKeyDelete()

Delete API Key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiKeyApi(configuration);

let body:.ApiKeyApiAppApiApiKeyDeleteRequest = {
  // string | username
  username: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | api key name
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul9",
};

apiInstance.appApiApiKeyDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | username | defaults to undefined
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

# **appApiApiKeyGetList**
> Array<APIKey> appApiApiKeyGetList()

List API Keys

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiKeyApi(configuration);

let body:.ApiKeyApiAppApiApiKeyGetListRequest = {
  // string | username
  username: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiApiKeyGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | username | defaults to undefined


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


