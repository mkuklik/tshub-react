# .PermissionsApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiPermissionGet**](PermissionsApi.md#appApiPermissionGet) | **GET** /raw/permissions/object | List permissions for object
[**appApiPermissionRemovePermission**](PermissionsApi.md#appApiPermissionRemovePermission) | **DELETE** /raw/permissions | delete permission
[**appApiPermissionSetPermission**](PermissionsApi.md#appApiPermissionSetPermission) | **POST** /raw/permissions | Set permissions


# **appApiPermissionGet**
> Array<Policy> appApiPermissionGet()

List explicit permissions for object

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionsApi(configuration);

let body:.PermissionsApiAppApiPermissionGetRequest = {
  // string | space id (optional)
  spaceId: "62ECB020842930cc01FFCCfe",
  // string | collection id (optional)
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiPermissionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | (optional) defaults to undefined
 **collId** | [**string**] | collection id | (optional) defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined


### Return type

**Array<Policy>**

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
**404** | object not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiPermissionRemovePermission**
> void appApiPermissionRemovePermission()

delete permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionsApi(configuration);

let body:.PermissionsApiAppApiPermissionRemovePermissionRequest = {
  // ObjectType | object
  objType: "s",
  // boolean | subobject mark
  subobject: true,
  // string | action can be Verb or Role
  action: "action_example",
  // 'allow' | 'deny' | permission effect
  effect: "allow",
  // string | user id (optional)
  uid: "62ECB020842930cc01FFCCfe",
  // string | group id (optional)
  gid: "62ECB020842930cc01FFCCfe",
  // string | space id (optional)
  spaceId: "62ECB020842930cc01FFCCfe",
  // string | collection id (optional)
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiPermissionRemovePermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objType** | **ObjectType** | object | defaults to undefined
 **subobject** | [**boolean**] | subobject mark | defaults to undefined
 **action** | [**string**] | action can be Verb or Role | defaults to undefined
 **effect** | [**&#39;allow&#39; | &#39;deny&#39;**]**Array<&#39;allow&#39; &#124; &#39;deny&#39;>** | permission effect | defaults to undefined
 **uid** | [**string**] | user id | (optional) defaults to undefined
 **gid** | [**string**] | group id | (optional) defaults to undefined
 **spaceId** | [**string**] | space id | (optional) defaults to undefined
 **collId** | [**string**] | collection id | (optional) defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined


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
**404** | permission not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiPermissionSetPermission**
> void appApiPermissionSetPermission(policyUpdate)

Set permissions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermissionsApi(configuration);

let body:.PermissionsApiAppApiPermissionSetPermissionRequest = {
  // PolicyUpdate | Policy definition
  policyUpdate: {
    subject: {
      type: "u",
      gid: "62ECB020842930cc01FFCCfe",
      uid: "62ECB020842930cc01FFCCfe",
    },
    object: {
      type: "s",
      spaceId: "62ECB020842930cc01FFCCfe",
      collId: "62ECB020842930cc01FFCCfe",
      tsid: "62ECB020842930cc01FFCCfe",
      subobject: true,
    },
    action: {
      type: "v",
      value: "value_example",
    },
    effect: "allow",
  },
};

apiInstance.appApiPermissionSetPermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyUpdate** | **PolicyUpdate**| Policy definition |


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | wrong parameter |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | object not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


