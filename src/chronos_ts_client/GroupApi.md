# .GroupApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiGroupAddMember**](GroupApi.md#appApiGroupAddMember) | **POST** /group/{groupname}/members | Add a group member
[**appApiGroupCreateGroup**](GroupApi.md#appApiGroupCreateGroup) | **POST** /group | Create a new group
[**appApiGroupDeleteGroup**](GroupApi.md#appApiGroupDeleteGroup) | **DELETE** /group/{groupname} | Delete a group
[**appApiGroupDeleteMember**](GroupApi.md#appApiGroupDeleteMember) | **DELETE** /group/{groupname}/members/{type}/{memberName} | Delete a group member
[**appApiGroupGetGroup**](GroupApi.md#appApiGroupGetGroup) | **GET** /group/{groupname} | Retrieve a group
[**appApiGroupListGroups**](GroupApi.md#appApiGroupListGroups) | **GET** /group | List groups
[**appApiGroupNameHistory**](GroupApi.md#appApiGroupNameHistory) | **GET** /group/{groupname}/history | Retrieve historical values of group details
[**appApiGroupUpdateGroup**](GroupApi.md#appApiGroupUpdateGroup) | **PUT** /group/{groupname} | Update a group


# **appApiGroupAddMember**
> Group appApiGroupAddMember()

Add a group member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupAddMemberRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // GroupMemberPost (optional)
  groupMemberPost: {
    type: "g",
    id: "62ECB020842930cc01FFCCfe",
    role: "manager",
  },
};

apiInstance.appApiGroupAddMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupMemberPost** | **GroupMemberPost**|  |
 **groupname** | [**string**] | groupname | defaults to undefined


### Return type

**Group**

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
**404** | Group/member not found |  -  |
**409** | User/group is already a member |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupCreateGroup**
> Group appApiGroupCreateGroup()

Create a new group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupCreateGroupRequest = {
  // Group (optional)
  group: {
    gid: "62ECB020842930cc01FFCCfe",
    groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    email: "email_example",
    description: "description_example",
    organization: "organization_example",
    location: "location_example",
    website: "website_example",
    visibility: "public",
  },
};

apiInstance.appApiGroupCreateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **Group**|  |


### Return type

**Group**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | a group |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**409** | Group already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupDeleteGroup**
> void appApiGroupDeleteGroup()

Delete a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupDeleteGroupRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiGroupDeleteGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | [**string**] | groupname | defaults to undefined


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
**200** | ok |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupDeleteMember**
> Group appApiGroupDeleteMember()

Delete a group member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupDeleteMemberRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // 'u' | 'g' | | format of output type * `u` user, * `g` group 
  type: "u",
  // string | username or groupname
  memberName: "memberName_example",
};

apiInstance.appApiGroupDeleteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | [**string**] | groupname | defaults to undefined
 **type** | [**&#39;u&#39; | &#39;g&#39;**]**Array<&#39;u&#39; &#124; &#39;g&#39;>** | | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group  | defaults to undefined
 **memberName** | [**string**] | username or groupname | defaults to undefined


### Return type

**Group**

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
**404** | Group/member not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupGetGroup**
> Group appApiGroupGetGroup()

Retrieve a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupGetGroupRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiGroupGetGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | [**string**] | groupname | defaults to undefined


### Return type

**Group**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a group |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupListGroups**
> Array<GroupSummary> appApiGroupListGroups()

List groups

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupListGroupsRequest = {
  // string | Search query (optional)
  query: "query_example",
};

apiInstance.appApiGroupListGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search query | (optional) defaults to undefined


### Return type

**Array<GroupSummary>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of member\&#39;s groups |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupNameHistory**
> Array<GroupHistorical> appApiGroupNameHistory()

Retrieve historical values of group details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupNameHistoryRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiGroupNameHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupname** | [**string**] | groupname | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<GroupHistorical>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of historical values of group details |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupUpdateGroup**
> Group appApiGroupUpdateGroup()

Update a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupApi(configuration);

let body:.GroupApiAppApiGroupUpdateGroupRequest = {
  // string | groupname
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Group | an updated group (optional)
  group: {
    gid: "62ECB020842930cc01FFCCfe",
    groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    email: "email_example",
    description: "description_example",
    organization: "organization_example",
    location: "location_example",
    website: "website_example",
    visibility: "public",
  },
};

apiInstance.appApiGroupUpdateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **Group**| an updated group |
 **groupname** | [**string**] | groupname | defaults to undefined


### Return type

**Group**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a group |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | group not found |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


