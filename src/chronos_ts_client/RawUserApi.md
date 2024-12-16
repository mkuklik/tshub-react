# .RawUserApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiUserRawChangePassword**](RawUserApi.md#appApiUserRawChangePassword) | **PUT** /raw/user/{uid}/change_password | Change password.
[**appApiUserRawCreate**](RawUserApi.md#appApiUserRawCreate) | **POST** /raw/user | Create user
[**appApiUserRawDelete**](RawUserApi.md#appApiUserRawDelete) | **DELETE** /raw/user/{uid} | Delete user
[**appApiUserRawGet**](RawUserApi.md#appApiUserRawGet) | **GET** /raw/user/{uid} | Get user by uid
[**appApiUserRawGetPermissions**](RawUserApi.md#appApiUserRawGetPermissions) | **GET** /raw/user/{uid}/permissions | get user permissions
[**appApiUserRawListUsers**](RawUserApi.md#appApiUserRawListUsers) | **GET** /raw/user | List users
[**appApiUserRawUpdate**](RawUserApi.md#appApiUserRawUpdate) | **PUT** /raw/user/{uid} | Updated user
[**appApiUserRawUpdatePermissions**](RawUserApi.md#appApiUserRawUpdatePermissions) | **PUT** /raw/user/{uid}/permissions | update user permissions


# **appApiUserRawChangePassword**
> void appApiUserRawChangePassword(newPassword)

Change password. Authentication via password only.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawChangePasswordRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
  // NewPassword | new password
  newPassword: {
    password: "password_example",
  },
};

apiInstance.appApiUserRawChangePassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPassword** | **NewPassword**| new password |
 **uid** | [**string**] | user id | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | Invalid password |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawCreate**
> User appApiUserRawCreate()

This can only be done by the logged in user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawCreateRequest = {
  // UserPost (optional)
  userPost: null,
};

apiInstance.appApiUserRawCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPost** | **UserPost**|  |


### Return type

**User**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawDelete**
> appApiUserRawDelete()

This can only be done by the logged in user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawDeleteRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUserRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined


### Return type

void (empty response body)

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid username supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawGet**
> User appApiUserRawGet()

Get user by uid

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawGetRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUserRawGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined


### Return type

**User**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawGetPermissions**
> UserPermissions appApiUserRawGetPermissions()

get user permissions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawGetPermissionsRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUserRawGetPermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined


### Return type

**UserPermissions**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | Invalid password |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawListUsers**
> Array<User> appApiUserRawListUsers()

list users

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawListUsersRequest = {
  // string | Search query (optional)
  query: "query_example",
  // number | the first number of item to skip (optional)
  offset: 3.14,
  // number | the number of items to return (optional)
  limit: 3.14,
};

apiInstance.appApiUserRawListUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search query | (optional) defaults to undefined
 **offset** | [**number**] | the first number of item to skip | (optional) defaults to undefined
 **limit** | [**number**] | the number of items to return | (optional) defaults to undefined


### Return type

**Array<User>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid username supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawUpdate**
> User appApiUserRawUpdate()

This can only be done by the logged in user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawUpdateRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
  // UserUpdate | Updated user object (optional)
  userUpdate: {
    username: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    firstName: "firstName_example",
    lastName: "lastName_example",
    email: "email_example",
  },
};

apiInstance.appApiUserRawUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdate** | **UserUpdate**| Updated user object |
 **uid** | [**string**] | user id | defaults to undefined


### Return type

**User**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid user supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUserRawUpdatePermissions**
> UserPermissions appApiUserRawUpdatePermissions()

update user permissions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUserApi(configuration);

let body:.RawUserApiAppApiUserRawUpdatePermissionsRequest = {
  // string | user id
  uid: "62ECB020842930cc01FFCCfe",
  // boolean | has user admin permissions (optional)
  isAdmin: true,
  // boolean | can user create group (optional)
  canCreateGroup: true,
  // boolean | can user create space (optional)
  canCreateSpace: true,
};

apiInstance.appApiUserRawUpdatePermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] | user id | defaults to undefined
 **isAdmin** | [**boolean**] | has user admin permissions | (optional) defaults to undefined
 **canCreateGroup** | [**boolean**] | can user create group | (optional) defaults to undefined
 **canCreateSpace** | [**boolean**] | can user create space | (optional) defaults to undefined


### Return type

**UserPermissions**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**400** | Invalid password |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


