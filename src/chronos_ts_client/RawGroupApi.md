# .RawGroupApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiGroupObjectHistory**](RawGroupApi.md#appApiGroupObjectHistory) | **GET** /raw/group/{gid}/history | retrieve history of group object by its id
[**appApiGroupRawAddMember**](RawGroupApi.md#appApiGroupRawAddMember) | **POST** /raw/group/{gid}/members | Add a new group member
[**appApiGroupRawCreateGroup**](RawGroupApi.md#appApiGroupRawCreateGroup) | **POST** /raw/group | Create a new group
[**appApiGroupRawDeleteGroup**](RawGroupApi.md#appApiGroupRawDeleteGroup) | **DELETE** /raw/group/{gid} | Delete a group
[**appApiGroupRawDeleteMember**](RawGroupApi.md#appApiGroupRawDeleteMember) | **DELETE** /raw/group/{gid}/members/{type}/{id} | Delete a group member
[**appApiGroupRawGetGroup**](RawGroupApi.md#appApiGroupRawGetGroup) | **GET** /raw/group/{gid} | Retrieve a group
[**appApiGroupRawListGroups**](RawGroupApi.md#appApiGroupRawListGroups) | **GET** /raw/group | Retrieve all groups for a member
[**appApiGroupRawUndelete**](RawGroupApi.md#appApiGroupRawUndelete) | **PUT** /raw/group/{gid}/undelete | Undelete group
[**appApiGroupRawUpdateGroup**](RawGroupApi.md#appApiGroupRawUpdateGroup) | **PUT** /raw/group/{gid} | Update a group


# **appApiGroupObjectHistory**
> Array<GroupHistorical> appApiGroupObjectHistory()

retrieve history of group object by its id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupObjectHistoryRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiGroupObjectHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<GroupHistorical>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of historical group objects |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawAddMember**
> Group appApiGroupRawAddMember()

Add a new group member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawAddMemberRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
  // GroupMemberPost | group member details (optional)
  groupMemberPost: {
    type: "g",
    id: "62ECB020842930cc01FFCCfe",
    role: "manager",
  },
};

apiInstance.appApiGroupRawAddMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupMemberPost** | **GroupMemberPost**| group member details |
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined


### Return type

**Group**

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
**404** | Group/member not found |  -  |
**409** | User/group is already a member |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawCreateGroup**
> Group appApiGroupRawCreateGroup()

Create a new group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawCreateGroupRequest = {
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

apiInstance.appApiGroupRawCreateGroup(body).then((data:any) => {
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

[api_key](README.md#api_key), [jwt](README.md#jwt)

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

# **appApiGroupRawDeleteGroup**
> void appApiGroupRawDeleteGroup()

Delete a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawDeleteGroupRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiGroupRawDeleteGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined


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
**200** | ok |  -  |
**400** | Bad Request |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawDeleteMember**
> Group appApiGroupRawDeleteMember()

Delete a group member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawDeleteMemberRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
  // 'u' | 'g' | | format of output type * `u` user, * `g` group 
  type: "u",
  // string | id
  id: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiGroupRawDeleteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined
 **type** | [**&#39;u&#39; | &#39;g&#39;**]**Array<&#39;u&#39; &#124; &#39;g&#39;>** | | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group  | defaults to undefined
 **id** | [**string**] | id | defaults to undefined


### Return type

**Group**

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
**404** | Group/member not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawGetGroup**
> Group appApiGroupRawGetGroup()

Retrieve a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawGetGroupRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiGroupRawGetGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined


### Return type

**Group**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawListGroups**
> Array<GroupSummary> appApiGroupRawListGroups()

Retrieve all groups for a member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawListGroupsRequest = {
  // string | Search query (optional)
  query: "query_example",
  // string | a member of group/space/collection/etc. (optional)
  member: "u:2ECB020842930cc01FFCCfeE",
  // boolean | ownOnly (optional)
  ownOnly: true,
};

apiInstance.appApiGroupRawListGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search query | (optional) defaults to undefined
 **member** | [**string**] | a member of group/space/collection/etc. | (optional) defaults to undefined
 **ownOnly** | [**boolean**] | ownOnly | (optional) defaults to undefined


### Return type

**Array<GroupSummary>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of member\&#39;s groups |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawUndelete**
> void appApiGroupRawUndelete()

Undelete group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawUndeleteRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
  // string | new name for group (optional)
  groupname: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiGroupRawUndelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined
 **groupname** | [**string**] | new name for group | (optional) defaults to undefined


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
**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiGroupRawUpdateGroup**
> Group appApiGroupRawUpdateGroup()

Update a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawGroupApi(configuration);

let body:.RawGroupApiAppApiGroupRawUpdateGroupRequest = {
  // string | The group\'s unique id.
  gid: "62ECB020842930cc01FFCCfe",
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

apiInstance.appApiGroupRawUpdateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **Group**| an updated group |
 **gid** | [**string**] | The group\&#39;s unique id. | defaults to undefined


### Return type

**Group**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

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


