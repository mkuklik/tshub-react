# .AnnotationsApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiAnnotationAddTarget**](AnnotationsApi.md#appApiAnnotationAddTarget) | **POST** /annotation/{space_name}/{coll_name}/{symbol}/targets | Add observation target
[**appApiAnnotationCreate**](AnnotationsApi.md#appApiAnnotationCreate) | **POST** /annotation/{space_name}/{coll_name} | Create an annotation
[**appApiAnnotationDelete**](AnnotationsApi.md#appApiAnnotationDelete) | **DELETE** /annotation/{space_name}/{coll_name}/{symbol} | Delete annotation
[**appApiAnnotationGet**](AnnotationsApi.md#appApiAnnotationGet) | **GET** /annotation/{space_name}/{coll_name}/{symbol} | Get an annotation
[**appApiAnnotationGetList**](AnnotationsApi.md#appApiAnnotationGetList) | **GET** /annotation/{space_name}/{coll_name} | List annotations
[**appApiAnnotationRemoveTarget**](AnnotationsApi.md#appApiAnnotationRemoveTarget) | **DELETE** /annotation/{space_name}/{coll_name}/{symbol}/targets | delete observation targets
[**appApiAnnotationUpdate**](AnnotationsApi.md#appApiAnnotationUpdate) | **PUT** /annotation/{space_name}/{coll_name}/{symbol} | Update an annotation


# **appApiAnnotationAddTarget**
> void appApiAnnotationAddTarget()

Add observation target

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationAddTargetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | annotation symbol
  symbol: "C",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
  // number | time series index (optional)
  index: 1,
  // Frequency | frequency (optional)
  freq: "A",
  // string | vintage id (optional)
  vid: "vid_example",
};

apiInstance.appApiAnnotationAddTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **symbol** | [**string**] | annotation symbol | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined
 **index** | [**number**] | time series index | (optional) defaults to undefined
 **freq** | **Frequency** | frequency | (optional) defaults to undefined
 **vid** | [**string**] | vintage id | (optional) defaults to undefined


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
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationCreate**
> Annotation appApiAnnotationCreate(annotation)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationCreateRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // Annotation | Annotation
  annotation: {
    collId: "62ECB020842930cc01FFCCfe",
    aid: "62ECB020842930cc01FFCCfe",
    symbol: "C",
    text: "text_example",
    format: "txt",
    attributes: {},
    targets: [
      null,
    ],
  },
};

apiInstance.appApiAnnotationCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | **Annotation**| Annotation |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**Annotation**

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
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationDelete**
> void appApiAnnotationDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationDeleteRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | annotation symbol
  symbol: "C",
};

apiInstance.appApiAnnotationDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **symbol** | [**string**] | annotation symbol | defaults to undefined


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
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationGet**
> Annotation appApiAnnotationGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationGetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | annotation symbol
  symbol: "C",
};

apiInstance.appApiAnnotationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **symbol** | [**string**] | annotation symbol | defaults to undefined


### Return type

**Annotation**

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
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationGetList**
> Array<Annotation> appApiAnnotationGetList()

List annotations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationGetListRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
};

apiInstance.appApiAnnotationGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined


### Return type

**Array<Annotation>**

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

# **appApiAnnotationRemoveTarget**
> void appApiAnnotationRemoveTarget()

delete observation targets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationRemoveTargetRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | annotation symbol
  symbol: "C",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
  // number | time series index (optional)
  index: 1,
  // Frequency | frequency (optional)
  freq: "A",
  // string | vintage id (optional)
  vid: "vid_example",
};

apiInstance.appApiAnnotationRemoveTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **symbol** | [**string**] | annotation symbol | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined
 **index** | [**number**] | time series index | (optional) defaults to undefined
 **freq** | **Frequency** | frequency | (optional) defaults to undefined
 **vid** | [**string**] | vintage id | (optional) defaults to undefined


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
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationUpdate**
> void appApiAnnotationUpdate(annotationUpdate)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnotationsApi(configuration);

let body:.AnnotationsApiAppApiAnnotationUpdateRequest = {
  // string | space name
  spaceName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | collection name
  collName: "AqXzyCBw3_uufVPIPFhB9JcGRYnua_cdyyvLY8IzLpul91GcWjTkp6JIZ",
  // string | annotation symbol
  symbol: "C",
  // AnnotationUpdate | Annotation
  annotationUpdate: {
    symbol: "C",
    text: "text_example",
    format: "txt",
    attributes: {},
  },
};

apiInstance.appApiAnnotationUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotationUpdate** | **AnnotationUpdate**| Annotation |
 **spaceName** | [**string**] | space name | defaults to undefined
 **collName** | [**string**] | collection name | defaults to undefined
 **symbol** | [**string**] | annotation symbol | defaults to undefined


### Return type

**void**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt), [basic](README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


