# .SpaceApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiSpaceAddMember**](SpaceApi.md#appApiSpaceAddMember) | **POST** /space/{space_name}/members | Add a space member
[**appApiSpaceDelete**](SpaceApi.md#appApiSpaceDelete) | **DELETE** /space/{space_name} | Delete a space
[**appApiSpaceDeleteMember**](SpaceApi.md#appApiSpaceDeleteMember) | **DELETE** /space/{space_name}/members/{type}/{memberName} | Delete a space member
[**appApiSpaceGet**](SpaceApi.md#appApiSpaceGet) | **GET** /space/{space_name} | Get space details
[**appApiSpaceGetList**](SpaceApi.md#appApiSpaceGetList) | **GET** /space | list spaces
[**appApiSpaceNameHistory**](SpaceApi.md#appApiSpaceNameHistory) | **GET** /space/{space_name}/history | Get historical values for space details
[**appApiSpacePost**](SpaceApi.md#appApiSpacePost) | **POST** /space | Create a new space
[**appApiSpacePut**](SpaceApi.md#appApiSpacePut) | **PUT** /space/{space_name} | Update an existing space


# **appApiSpaceAddMember**
> Space appApiSpaceAddMember()

Add a space member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceAddMemberRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // SpaceMemberPost (optional)
  spaceMemberPost: {
    type: "g",
    id: "62ECB020842930cc01FFCCfe",
    role: "annotator",
  },
};

apiInstance.appApiSpaceAddMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceMemberPost** | **SpaceMemberPost**|  |
 **spaceName** | [**string**] | space name | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceDelete**
> void appApiSpaceDelete()

Delete a space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceDeleteRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiSpaceDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined


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
**200** | deleted |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceDeleteMember**
> Space appApiSpaceDeleteMember()

Delete a space member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceDeleteMemberRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // 'u' | 'g' | | format of output type * `u` user, * `g` group 
  type: "u",
  // string | username or groupname
  memberName: "memberName_example",
};

apiInstance.appApiSpaceDeleteMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **type** | [**&#39;u&#39; | &#39;g&#39;**]**Array<&#39;u&#39; &#124; &#39;g&#39;>** | | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group  | defaults to undefined
 **memberName** | [**string**] | username or groupname | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceGet**
> Space appApiSpaceGet()

Get space details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceGetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiSpaceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined


### Return type

**Space**

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
**409** | Space already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceGetList**
> Array<Space> appApiSpaceGetList()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceGetListRequest = {
  // string | Search query (optional)
  query: "query_example",
};

apiInstance.appApiSpaceGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search query | (optional) defaults to undefined


### Return type

**Array<Space>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of spaces |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpaceNameHistory**
> Array<string> appApiSpaceNameHistory()

Get historical values for space details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpaceNameHistoryRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiSpaceNameHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


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
**200** | List of space_id\&#39;s which were associated with a given space name |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | Space not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiSpacePost**
> Space appApiSpacePost(space)

Create a new space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpacePostRequest = {
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

apiInstance.appApiSpacePost(body).then((data:any) => {
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

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

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

# **appApiSpacePut**
> Space appApiSpacePut(space)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpaceApi(configuration);

let body:.SpaceApiAppApiSpacePutRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
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

apiInstance.appApiSpacePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **space** | **Space**| Optional description in *Markdown* |
 **spaceName** | [**string**] | space name | defaults to undefined


### Return type

**Space**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

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


