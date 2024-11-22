# .CategoryApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategory**](CategoryApi.md#getCategory) | **GET** /fred/category | Get a category.
[**getCategoryChildren**](CategoryApi.md#getCategoryChildren) | **GET** /fred/category/children | Get the child categories for a specified parent category.
[**getCategoryRelated**](CategoryApi.md#getCategoryRelated) | **GET** /fred/category/related | Get related categories for a specified category.
[**getCategoryRelatedTags**](CategoryApi.md#getCategoryRelatedTags) | **GET** /fred/category/related_tags | Retrieve related tags for a specific category.
[**getCategorySeries**](CategoryApi.md#getCategorySeries) | **GET** /fred/category/series | Retrieve series within a specified category.
[**getCategoryTags**](CategoryApi.md#getCategoryTags) | **GET** /fred/category/tags | Retrieve tags for a specific category.


# **getCategory**
> Categories getCategory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryRequest = {
  // string | 88e6be3b42147d9eb6726f79a6671453
  apiKey: "api_key_example",
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // number (optional)
  categoryId: 0,
};

apiInstance.getCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] | 88e6be3b42147d9eb6726f79a6671453 | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **categoryId** | [**number**] |  | (optional) defaults to 0


### Return type

**Categories**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryChildren**
> Categories getCategoryChildren()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryChildrenRequest = {
  // string
  apiKey: "api_key_example",
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // number (optional)
  categoryId: 0,
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getCategoryChildren(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **categoryId** | [**number**] |  | (optional) defaults to 0
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined


### Return type

**Categories**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryRelated**
> Categories getCategoryRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryRelatedRequest = {
  // string
  apiKey: "api_key_example",
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // number (optional)
  categoryId: 0,
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getCategoryRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **categoryId** | [**number**] |  | (optional) defaults to 0
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined


### Return type

**Categories**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with related categories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryRelatedTags**
> Tags getCategoryRelatedTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryRelatedTagsRequest = {
  // string
  apiKey: "api_key_example",
  // number
  categoryId: 1,
  // string
  tagNames: "tag_names_example",
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
  // 'series_count' | 'popularity' (optional)
  orderBy: "series_count",
  // 'asc' | 'desc' (optional)
  sortOrder: "asc",
};

apiInstance.getCategoryRelatedTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **categoryId** | [**number**] |  | defaults to undefined
 **tagNames** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;series_count&#39; | &#39;popularity&#39;**]**Array<&#39;series_count&#39; &#124; &#39;popularity&#39;>** |  | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined


### Return type

**Tags**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with related tags |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategorySeries**
> Seriess getCategorySeries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategorySeriesRequest = {
  // string
  apiKey: "api_key_example",
  // number
  categoryId: 1,
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
  // 'series_id' | 'title' | 'units' | 'frequency' | 'seasonal_adjustment' | 'realtime_start' | 'realtime_end' | 'last_updated' | 'observation_start' | 'observation_end' | 'popularity' | 'group_popularity' (optional)
  orderBy: "series_id",
  // 'asc' | 'desc' (optional)
  sortOrder: "asc",
  // string (optional)
  filterVariable: "filter_variable_example",
  // string (optional)
  filterValue: "filter_value_example",
};

apiInstance.getCategorySeries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **categoryId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;series_id&#39; | &#39;title&#39; | &#39;units&#39; | &#39;frequency&#39; | &#39;seasonal_adjustment&#39; | &#39;realtime_start&#39; | &#39;realtime_end&#39; | &#39;last_updated&#39; | &#39;observation_start&#39; | &#39;observation_end&#39; | &#39;popularity&#39; | &#39;group_popularity&#39;**]**Array<&#39;series_id&#39; &#124; &#39;title&#39; &#124; &#39;units&#39; &#124; &#39;frequency&#39; &#124; &#39;seasonal_adjustment&#39; &#124; &#39;realtime_start&#39; &#124; &#39;realtime_end&#39; &#124; &#39;last_updated&#39; &#124; &#39;observation_start&#39; &#124; &#39;observation_end&#39; &#124; &#39;popularity&#39; &#124; &#39;group_popularity&#39;>** |  | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined
 **filterVariable** | [**string**] |  | (optional) defaults to undefined
 **filterValue** | [**string**] |  | (optional) defaults to undefined


### Return type

**Seriess**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with series data |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryTags**
> Tags getCategoryTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoryApi(configuration);

let body:.CategoryApiGetCategoryTagsRequest = {
  // string
  apiKey: "api_key_example",
  // number
  categoryId: 1,
  // 'xml' | 'json' (optional)
  fileType: "xml",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
  // 'name' | 'group_id' (optional)
  orderBy: "name",
  // 'asc' | 'desc' (optional)
  sortOrder: "asc",
};

apiInstance.getCategoryTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **categoryId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'xml'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;name&#39; | &#39;group_id&#39;**]**Array<&#39;name&#39; &#124; &#39;group_id&#39;>** |  | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined


### Return type

**Tags**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with category tags |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


