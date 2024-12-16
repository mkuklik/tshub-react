# .RawUploadApi

All URIs are relative to *http://localhost:9090/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiUploadCommit**](RawUploadApi.md#appApiUploadCommit) | **POST** /raw/upload/{upload_id}/commit | commit staging
[**appApiUploadConfirmUpload**](RawUploadApi.md#appApiUploadConfirmUpload) | **POST** /raw/upload/{upload_id}/confirm | regenerate upload url
[**appApiUploadCreate**](RawUploadApi.md#appApiUploadCreate) | **POST** /raw/upload | create a new upload
[**appApiUploadGet**](RawUploadApi.md#appApiUploadGet) | **GET** /raw/upload/{upload_id} | retrieve upload object
[**appApiUploadGetList**](RawUploadApi.md#appApiUploadGetList) | **GET** /raw/upload | list upload objects
[**appApiUploadGetProcessed**](RawUploadApi.md#appApiUploadGetProcessed) | **GET** /raw/upload/{upload_id}/processing | retrieve processed data
[**appApiUploadGetStaging**](RawUploadApi.md#appApiUploadGetStaging) | **GET** /raw/upload/{upload_id}/staging | retrieve staging data
[**appApiUploadPostProcessed**](RawUploadApi.md#appApiUploadPostProcessed) | **POST** /raw/upload/{upload_id}/processing | save processing results
[**appApiUploadPutStaging**](RawUploadApi.md#appApiUploadPutStaging) | **PUT** /raw/upload/{upload_id}/staging | save staging results
[**appApiUploadRegenerateUrl**](RawUploadApi.md#appApiUploadRegenerateUrl) | **POST** /raw/upload/{upload_id}/url | regenerate upload url


# **appApiUploadCommit**
> void appApiUploadCommit()

commit staging

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadCommitRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUploadCommit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined


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
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadConfirmUpload**
> Upload appApiUploadConfirmUpload()

retrieve history of group object by its id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadConfirmUploadRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUploadConfirmUpload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined


### Return type

**Upload**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | upload |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadCreate**
> Upload appApiUploadCreate()

create a new upload

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadCreateRequest = {
  // string | collection id
  collId: "62ECB020842930cc01FFCCfe",
  // string (optional)
  filename: "filename_example",
  // string (optional)
  fileType: "fileType_example",
};

apiInstance.appApiUploadCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | defaults to undefined
 **filename** | [**string**] |  | (optional) defaults to undefined
 **fileType** | [**string**] |  | (optional) defaults to undefined


### Return type

**Upload**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a new upload |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadGet**
> Upload appApiUploadGet()

retrieve history of group object by its id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadGetRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUploadGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined


### Return type

**Upload**

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
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadGetList**
> Upload appApiUploadGetList()

list upload objects

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadGetListRequest = {
  // string | collection id (optional)
  collId: "62ECB020842930cc01FFCCfe",
  // number | the first number of item to skip (optional)
  offset: 3.14,
  // number | the number of items to return (optional)
  limit: 3.14,
};

apiInstance.appApiUploadGetList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collId** | [**string**] | collection id | (optional) defaults to undefined
 **offset** | [**number**] | the first number of item to skip | (optional) defaults to undefined
 **limit** | [**number**] | the number of items to return | (optional) defaults to undefined


### Return type

**Upload**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of upload objects |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadGetProcessed**
> { [key: string]: any; } appApiUploadGetProcessed()

retrieve processed data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadGetProcessedRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUploadGetProcessed(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed file |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadGetStaging**
> { [key: string]: any; } appApiUploadGetStaging()

retrieve staging data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadGetStagingRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
};

apiInstance.appApiUploadGetStaging(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | staged data |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadPostProcessed**
> void appApiUploadPostProcessed(requestBody)

save processing results

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadPostProcessedRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
  // { [key: string]: any; } | Time series updated info
  requestBody: {},
};

apiInstance.appApiUploadPostProcessed(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| Time series updated info |
 **uploadId** | [**string**] | upload_id | defaults to undefined


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
**200** | ok |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadPutStaging**
> void appApiUploadPutStaging(requestBody)

save staging results

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadPutStagingRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
  // { [key: string]: any; } | Time series updated info
  requestBody: {},
};

apiInstance.appApiUploadPutStaging(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **{ [key: string]: any; }**| Time series updated info |
 **uploadId** | [**string**] | upload_id | defaults to undefined


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
**200** | ok |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appApiUploadRegenerateUrl**
> Upload appApiUploadRegenerateUrl()

retrieve history of group object by its id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RawUploadApi(configuration);

let body:.RawUploadApiAppApiUploadRegenerateUrlRequest = {
  // string | upload_id
  uploadId: "62ECB020842930cc01FFCCfe",
  // string (optional)
  filename: "filename_example",
  // string (optional)
  fileType: "fileType_example",
};

apiInstance.appApiUploadRegenerateUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | [**string**] | upload_id | defaults to undefined
 **filename** | [**string**] |  | (optional) defaults to undefined
 **fileType** | [**string**] |  | (optional) defaults to undefined


### Return type

**Upload**

### Authorization

[api_key](README.md#api_key), [jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | upload |  -  |
**401** | Invalid username/password, API key, or token |  * WWW_Authenticate -  <br>  |
**403** | You don’t have permission to access this resource |  -  |
**404** | Upload not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


