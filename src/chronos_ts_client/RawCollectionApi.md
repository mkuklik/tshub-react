# .RawCollectionApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiCollectionObjectHistory**](RawCollectionApi.md#appApiCollectionObjectHistory) | **GET** /raw/collection/{collId}/history | Retrieve historical values of collection details
[**appApiCollectionRawAddPermission**](RawCollectionApi.md#appApiCollectionRawAddPermission) | **POST** /raw/collection/{collId}/permissions | Add a new collection member
[**appApiCollectionRawDelete**](RawCollectionApi.md#appApiCollectionRawDelete) | **DELETE** /raw/collection/{collId} | Delete a collection
[**appApiCollectionRawDeletePermission**](RawCollectionApi.md#appApiCollectionRawDeletePermission) | **DELETE** /raw/collection/{collId}/permissions/{type}/{id} | Delete a collection permission
[**appApiCollectionRawGet**](RawCollectionApi.md#appApiCollectionRawGet) | **GET** /raw/collection/{collId} | Get collection details
[**appApiCollectionRawGetList**](RawCollectionApi.md#appApiCollectionRawGetList) | **GET** /raw/space/{spaceId}/collection | list collections
[**appApiCollectionRawPost**](RawCollectionApi.md#appApiCollectionRawPost) | **POST** /raw/space/{spaceId}/collection | Create a new collection
[**appApiCollectionRawPut**](RawCollectionApi.md#appApiCollectionRawPut) | **PUT** /raw/collection/{collId} | Update an existing collection
[**appApiCollectionRawUndelete**](RawCollectionApi.md#appApiCollectionRawUndelete) | **PUT** /raw/collection/{collId}/undelete | Undelete collection


# **appApiCollectionObjectHistory**
> Array<CollectionHistorical> appApiCollectionObjectHistory()

Retrieve historical values of collection details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionObjectHistoryRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiCollectionObjectHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<CollectionHistorical>**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of historical values of collection details |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawAddPermission**
> Collection appApiCollectionRawAddPermission()

Add a new collection member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawAddPermissionRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // CollectionPermissionPost | Collection member details (optional)
  collectionPermissionPost: {
    type: "g",
    id: "62ECB020842930cc01FFCCfe",
    role: "annotator",
    effect: "allow",
  },
};

apiInstance.appApiCollectionRawAddPermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPermissionPost** | **CollectionPermissionPost**| Collection member details |
 **collId** | [**string**] | collection id | defaults to undefined


### Return type

**Collection**

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

# **appApiCollectionRawDelete**
> void appApiCollectionRawDelete()

Delete a space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawDeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiCollectionRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined


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
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawDeletePermission**
> Collection appApiCollectionRawDeletePermission()

Delete a collection permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawDeletePermissionRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // 'u' | 'g' | | format of output type * `u` user, * `g` group 
  type: "u",
  // string | id
  id: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiCollectionRawDeletePermission(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **type** | [**&#39;u&#39; | &#39;g&#39;**]**Array<&#39;u&#39; &#124; &#39;g&#39;>** | | format of output type * &#x60;u&#x60; user, * &#x60;g&#x60; group  | defaults to undefined
 **id** | [**string**] | id | defaults to undefined


### Return type

**Collection**

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

# **appApiCollectionRawGet**
> Collection appApiCollectionRawGet()

Get collection details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawGetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiCollectionRawGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined


### Return type

**Collection**

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
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawGetList**
> Array<CollectionSummary> appApiCollectionRawGetList()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawGetListRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // string | Search query (optional)
  query: "query_example",
};

apiInstance.appApiCollectionRawGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceId** | [**string**] | space id | defaults to undefined
 **query** | [**string**] | Search query | (optional) defaults to undefined


### Return type

**Array<CollectionSummary>**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawPost**
> Collection appApiCollectionRawPost(collection)

Create a new collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawPostRequest = {
  // string | space id
  spaceId: "62ECB020842930cc01FFCCfe",
  // Collection | Definition of collection
  collection: {
    collId: "62ECB020842930cc01FFCCfe",
    name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    title: "title_example",
    description: "description_example",
    tags: [
      "tags_example",
    ],
    visibility: "public",
    permissions: [
      {
        type: "g",
        id: "62ECB020842930cc01FFCCfe",
        name: "name_example",
        email: "email_example",
        role: "annotator",
        effect: "allow",
      },
    ],
  },
};

apiInstance.appApiCollectionRawPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection** | **Collection**| Definition of collection |
 **spaceId** | [**string**] | space id | defaults to undefined


### Return type

**Collection**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawPut**
> Collection appApiCollectionRawPut(collection)

Update an existing collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawPutRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // Collection | ok
  collection: {
    collId: "62ECB020842930cc01FFCCfe",
    name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
    title: "title_example",
    description: "description_example",
    tags: [
      "tags_example",
    ],
    visibility: "public",
    permissions: [
      {
        type: "g",
        id: "62ECB020842930cc01FFCCfe",
        name: "name_example",
        email: "email_example",
        role: "annotator",
        effect: "allow",
      },
    ],
  },
};

apiInstance.appApiCollectionRawPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection** | **Collection**| ok |
 **collId** | [**string**] | collection id | defaults to undefined


### Return type

**Collection**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid collection name supplied |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionRawUndelete**
> void appApiCollectionRawUndelete()

Undelete collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawCollectionApi(configuration);

let body:.RawCollectionApiAppApiCollectionRawUndeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | new name for the time series (optional)
  name: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiCollectionRawUndelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **name** | [**string**] | new name for the time series | (optional) defaults to undefined


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
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


