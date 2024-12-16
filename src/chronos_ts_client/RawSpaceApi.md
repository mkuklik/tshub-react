# .RawSpaceApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiSpaceObjectHistory**](RawSpaceApi.md#appApiSpaceObjectHistory) | **GET** /raw/space/{spaceId}/history | retrieve history of space object by its id, space_id
[**appApiSpaceRawAddMember**](RawSpaceApi.md#appApiSpaceRawAddMember) | **POST** /raw/space/{spaceId}/members | Add a new space member
[**appApiSpaceRawDelete**](RawSpaceApi.md#appApiSpaceRawDelete) | **DELETE** /raw/space/{spaceId} | Delete a space
[**appApiSpaceRawDeleteMember**](RawSpaceApi.md#appApiSpaceRawDeleteMember) | **DELETE** /raw/space/{spaceId}/members/{type}/{id} | Delete a space member
[**appApiSpaceRawGet**](RawSpaceApi.md#appApiSpaceRawGet) | **GET** /raw/space/{spaceId} | Get space details
[**appApiSpaceRawGetList**](RawSpaceApi.md#appApiSpaceRawGetList) | **GET** /raw/space | list spaces
[**appApiSpaceRawPost**](RawSpaceApi.md#appApiSpaceRawPost) | **POST** /raw/space | Create a new space
[**appApiSpaceRawPut**](RawSpaceApi.md#appApiSpaceRawPut) | **PUT** /raw/space/{spaceId} | Update an existing space
[**appApiSpaceRawUndelete**](RawSpaceApi.md#appApiSpaceRawUndelete) | **PUT** /raw/space/{spaceId}/undelete | Undelete space


# **appApiSpaceObjectHistory**
> Array<SpaceHistorical> appApiSpaceObjectHistory()

retrieve history of space object by its id, space_id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceObjectHistoryRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiSpaceObjectHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<SpaceHistorical>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of spaces |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawAddMember**
> Space appApiSpaceRawAddMember()

Add a new space member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawAddMemberRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // SpaceMemberPost | space member details (optional)
  spaceMemberPost: {
    type: "g",
    id: "62ECB020842930cc01FFCCfe",
    role: "annotator",
  },
};

apiInstance.appApiSpaceRawAddMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceMemberPost** | **SpaceMemberPost**| space member details |
 **spaceId** | [**string**] | space id | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawDelete**
> void appApiSpaceRawDelete()

Delete a space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawDeleteRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiSpaceRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined


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
**200** | deleted |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawDeleteMember**
> Space appApiSpaceRawDeleteMember()

Delete a space member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawDeleteMemberRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // 'u' | 'g' | | format of output type * `u` user, * `g` group 
  type: "u",
  // string | id
  id: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiSpaceRawDeleteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined
 **type** | [**&#39;u&#39; | &#39;g&#39;**]**Array<&#39;u&#39; &#124; &#39;g&#39;>** | | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group  | defaults to undefined
 **id** | [**string**] | id | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawGet**
> Space appApiSpaceRawGet()

Get space details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawGetRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiSpaceRawGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined


### Return type

**Space**

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
**409** | Space already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawGetList**
> Array<Space> appApiSpaceRawGetList()

list spaces

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawGetListRequest = {
  // string | a member of group/space/collection/etc. (optional)
  member: "u:2ECB020842930cc01FFCCfeE",
  // boolean | ownOnly (optional)
  ownOnly: true,
  // Visibility | visibility (optional)
  visibility: "public",
  // string | Search query (optional)
  query: "query_example",
};

apiInstance.appApiSpaceRawGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **member** | [**string**] | a member of group/space/collection/etc. | (optional) defaults to undefined
 **ownOnly** | [**boolean**] | ownOnly | (optional) defaults to undefined
 **visibility** | **Visibility** | visibility | (optional) defaults to undefined
 **query** | [**string**] | Search query | (optional) defaults to undefined


### Return type

**Array<Space>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of spaces |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawPost**
> Space appApiSpaceRawPost(space)

Create a new space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawPostRequest = {
  // Space | Space definition
  space: {
    spaceId: "62ECB020842930cc01FFCCfe",
    name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    title: "title_example",
    description: "description_example",
    tags: [
      "tags_example",
    ],
    visibility: "public",
  },
};

apiInstance.appApiSpaceRawPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **Space**| Space definition |


### Return type

**Space**

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
**405** | Invalid input |  -  |
**409** | Space already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawPut**
> Space appApiSpaceRawPut(space)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawPutRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // Space | Optional description in *Markdown*
  space: {
    spaceId: "62ECB020842930cc01FFCCfe",
    name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    title: "title_example",
    description: "description_example",
    tags: [
      "tags_example",
    ],
    visibility: "public",
  },
};

apiInstance.appApiSpaceRawPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **Space**| Optional description in *Markdown* |
 **spaceId** | [**string**] | space id | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid space name supplied |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Space not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceRawUndelete**
> void appApiSpaceRawUndelete()

Undelete space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawSpaceApi(configuration);

let body:.RawSpaceApiAppApiSpaceRawUndeleteRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // string | new name for space (optional)
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiSpaceRawUndelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined
 **name** | [**string**] | new name for space | (optional) defaults to undefined


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
**404** | space not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


