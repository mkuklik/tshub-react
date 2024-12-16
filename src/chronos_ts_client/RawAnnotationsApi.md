# .RawAnnotationsApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiAnnotationRawAddTarget**](RawAnnotationsApi.md#appApiAnnotationRawAddTarget) | **POST** /raw/annotation/{collId}/{aid}/targets | Add a target
[**appApiAnnotationRawCreate**](RawAnnotationsApi.md#appApiAnnotationRawCreate) | **POST** /raw/annotation/{collId} | Create an annotation
[**appApiAnnotationRawDelete**](RawAnnotationsApi.md#appApiAnnotationRawDelete) | **DELETE** /raw/annotation/{collId}/{aid} | Delete annotation
[**appApiAnnotationRawGet**](RawAnnotationsApi.md#appApiAnnotationRawGet) | **GET** /raw/annotation/{collId}/{aid} | Get an annotation
[**appApiAnnotationRawGetList**](RawAnnotationsApi.md#appApiAnnotationRawGetList) | **GET** /raw/annotation/{collId} | List annotations
[**appApiAnnotationRawHistory**](RawAnnotationsApi.md#appApiAnnotationRawHistory) | **GET** /raw/annotation/{collId}/{aid}/history | History of annotation changes
[**appApiAnnotationRawRemoveTarget**](RawAnnotationsApi.md#appApiAnnotationRawRemoveTarget) | **DELETE** /raw/annotation/{collId}/{aid}/targets | delete a target
[**appApiAnnotationRawUpdate**](RawAnnotationsApi.md#appApiAnnotationRawUpdate) | **PUT** /raw/annotation/{collId}/{aid} | Update an annotation


# **appApiAnnotationRawAddTarget**
> void appApiAnnotationRawAddTarget()

Add observation target

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawAddTargetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
  // number | time series index (optional)
  index: 1,
  // Frequency | frequency (optional)
  freq: "A",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiAnnotationRawAddTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined
 **index** | [**number**] | time series index | (optional) defaults to undefined
 **freq** | **Frequency** | frequency | (optional) defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined


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
**404** | Annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawCreate**
> Annotation appApiAnnotationRawCreate(annotation)

Create an annotation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawCreateRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
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

apiInstance.appApiAnnotationRawCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotation** | **Annotation**| Annotation |
 **collId** | [**string**] | collection id | defaults to undefined


### Return type

**Annotation**

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
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawDelete**
> void appApiAnnotationRawDelete()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawDeleteRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
};

apiInstance.appApiAnnotationRawDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined


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
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawGet**
> Annotation appApiAnnotationRawGet()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawGetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
};

apiInstance.appApiAnnotationRawGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined


### Return type

**Annotation**

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
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawGetList**
> Array<AnnotationSummary> appApiAnnotationRawGetList()

List annotations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawGetListRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | time series id (optional)
  tsid: "tsid_example",
};

apiInstance.appApiAnnotationRawGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined


### Return type

**Array<AnnotationSummary>**

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

# **appApiAnnotationRawHistory**
> Array<Annotation> appApiAnnotationRawHistory()

History of annotation changes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawHistoryRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date | end time until when values were valid (optional)
  realEnd: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiAnnotationRawHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined
 **realEnd** | [**Date**] | end time until when values were valid | (optional) defaults to undefined


### Return type

**Array<Annotation>**

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
**404** | Annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawRemoveTarget**
> void appApiAnnotationRawRemoveTarget()

delete observation targets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawRemoveTargetRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
  // string | time series id (optional)
  tsid: "62ECB020842930cc01FFCCfe",
  // number | time series index (optional)
  index: 1,
  // Frequency | frequency (optional)
  freq: "A",
  // Date | start time from when values were valid (optional)
  realStart: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.appApiAnnotationRawRemoveTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined
 **tsid** | [**string**] | time series id | (optional) defaults to undefined
 **index** | [**number**] | time series index | (optional) defaults to undefined
 **freq** | **Frequency** | frequency | (optional) defaults to undefined
 **realStart** | [**Date**] | start time from when values were valid | (optional) defaults to undefined


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
**404** | annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiAnnotationRawUpdate**
> void appApiAnnotationRawUpdate(annotationUpdate)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawAnnotationsApi(configuration);

let body:.RawAnnotationsApiAppApiAnnotationRawUpdateRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string | annotation id
  aid: "aid_example",
  // AnnotationUpdate | Annotation
  annotationUpdate: {
    symbol: "C",
    text: "text_example",
    format: "txt",
    attributes: {},
  },
};

apiInstance.appApiAnnotationRawUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **annotationUpdate** | **AnnotationUpdate**| Annotation |
 **collId** | [**string**] | collection id | defaults to undefined
 **aid** | [**string**] | annotation id | defaults to undefined


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
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**404** | space/collection/annotation not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


