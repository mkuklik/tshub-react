# .CollectionApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiCollectionDelete**](CollectionApi.md#appApiCollectionDelete) | **DELETE** /collection/{space_name}/{coll_name} | Delete a collection
[**appApiCollectionGet**](CollectionApi.md#appApiCollectionGet) | **GET** /collection/{space_name}/{coll_name} | Get collection details
[**appApiCollectionGetList**](CollectionApi.md#appApiCollectionGetList) | **GET** /collection/{space_name} | list collections
[**appApiCollectionNameHistory**](CollectionApi.md#appApiCollectionNameHistory) | **GET** /collection/{space_name}/{coll_name}/history | Retrieve historical values of collection details
[**appApiCollectionPost**](CollectionApi.md#appApiCollectionPost) | **POST** /collection/{space_name} | Create a new collection
[**appApiCollectionPut**](CollectionApi.md#appApiCollectionPut) | **PUT** /collection/{space_name}/{coll_name} | Update an existing collection


# **appApiCollectionDelete**
> void appApiCollectionDelete()

Delete a space

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionDeleteRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiCollectionDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


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
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionGet**
> Collection appApiCollectionGet()

Get collection details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionGetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiCollectionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**Collection**

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
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionGetList**
> Array<CollectionSummary> appApiCollectionGetList()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionGetListRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | Search query (optional)
  query: "query_example",
};

apiInstance.appApiCollectionGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **query** | [**string**] | Search query | (optional) defaults to undefined


### Return type

**Array<CollectionSummary>**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionNameHistory**
> Array<string> appApiCollectionNameHistory()

Retrieve historical values of collection details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionNameHistoryRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiCollectionNameHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
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
**200** | list of coll_id\&#39;s which at some point were associated with a given collection name |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionPost**
> Collection appApiCollectionPost(collection)

Create a new collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionPostRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
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

apiInstance.appApiCollectionPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection** | **Collection**| Definition of collection |
 **spaceName** | [**string**] | space name | defaults to undefined


### Return type

**Collection**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiCollectionPut**
> Collection appApiCollectionPut(collection)

Update an existing collection

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CollectionApi(configuration);

let body:.CollectionApiAppApiCollectionPutRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
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

apiInstance.appApiCollectionPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection** | **Collection**| ok |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**Collection**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

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


