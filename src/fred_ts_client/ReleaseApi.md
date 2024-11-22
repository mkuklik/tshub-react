# .ReleaseApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReleaseDates**](ReleaseApi.md#getReleaseDates) | **GET** /fred/release/dates | Retrieve release dates for a specific economic data release.
[**getReleaseInfo**](ReleaseApi.md#getReleaseInfo) | **GET** /fred/release | Get information for a specific economic data release.
[**getReleaseRelatedTags**](ReleaseApi.md#getReleaseRelatedTags) | **GET** /fred/release/related_tags | Retrieve related tags for a specific economic data release.
[**getReleaseSeries**](ReleaseApi.md#getReleaseSeries) | **GET** /fred/release/series | Get series for a specific economic data release.
[**getReleaseSources**](ReleaseApi.md#getReleaseSources) | **GET** /fred/release/sources | Get sources for a specific economic data release.
[**getReleaseTables**](ReleaseApi.md#getReleaseTables) | **GET** /fred/release/tables | Get data tables for a specific economic data release.
[**getReleaseTags**](ReleaseApi.md#getReleaseTags) | **GET** /fred/release/tags | Get tags for a specific economic data release.
[**getReleases**](ReleaseApi.md#getReleases) | **GET** /fred/releases | Get all releases of economic data.
[**getReleasesDates**](ReleaseApi.md#getReleasesDates) | **GET** /fred/releases/dates | Retrieve release dates for all economic data.


# **getReleaseDates**
> ReleaseDates getReleaseDates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseDatesRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getReleaseDates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined


### Return type

**ReleaseDates**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Release dates for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseInfo**
> Releases getReleaseInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseInfoRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getReleaseInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined


### Return type

**Releases**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about the specified release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseRelatedTags**
> Tags getReleaseRelatedTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseRelatedTagsRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // string
  tagNames: "tag_names_example",
  // 'xml' | 'json' (optional)
  fileType: "json",
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

apiInstance.getReleaseRelatedTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **tagNames** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
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
**200** | A list of related tags for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseSeries**
> Seriess getReleaseSeries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseSeriesRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
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

apiInstance.getReleaseSeries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
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
**200** | A list of related tags for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseSources**
> Sources getReleaseSources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseSourcesRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getReleaseSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined


### Return type

**Sources**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of sources for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseTables**
> Categories getReleaseTables()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseTablesRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
  // number (optional)
  elementId: 1,
  // boolean (optional)
  includeObservations: true,
  // string (optional)
  observationDate: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getReleaseTables(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **elementId** | [**number**] |  | (optional) defaults to undefined
 **includeObservations** | [**boolean**] |  | (optional) defaults to undefined
 **observationDate** | [**string**] |  | (optional) defaults to undefined


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
**200** | Data tables for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleaseTags**
> Tags getReleaseTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleaseTagsRequest = {
  // string
  apiKey: "api_key_example",
  // number
  releaseId: 1,
  // 'xml' | 'json' (optional)
  fileType: "json",
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
  // string (optional)
  searchText: "search_text_example",
};

apiInstance.getReleaseTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **releaseId** | [**number**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;name&#39; | &#39;group_id&#39;**]**Array<&#39;name&#39; &#124; &#39;group_id&#39;>** |  | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined
 **searchText** | [**string**] |  | (optional) defaults to undefined


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
**200** | A list of tags for the specified economic data release |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleases**
> Releases getReleases()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleasesRequest = {
  // string
  apiKey: "api_key_example",
  // 'xml' | 'json' (optional)
  fileType: "json",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
  // 'release_id' | 'name' | 'press_release' | 'realtime_start' | 'realtime_end' (optional)
  orderBy: "release_id",
  // 'asc' | 'desc' (optional)
  sortOrder: "asc",
  // string (optional)
  filterVariable: "filter_variable_example",
  // string (optional)
  filterValue: "filter_value_example",
};

apiInstance.getReleases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;release_id&#39; | &#39;name&#39; | &#39;press_release&#39; | &#39;realtime_start&#39; | &#39;realtime_end&#39;**]**Array<&#39;release_id&#39; &#124; &#39;name&#39; &#124; &#39;press_release&#39; &#124; &#39;realtime_start&#39; &#124; &#39;realtime_end&#39;>** |  | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to undefined
 **filterVariable** | [**string**] |  | (optional) defaults to undefined
 **filterValue** | [**string**] |  | (optional) defaults to undefined


### Return type

**Releases**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all economic data releases |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getReleasesDates**
> ReleaseDates getReleasesDates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReleaseApi(configuration);

let body:.ReleaseApiGetReleasesDatesRequest = {
  // string
  apiKey: "api_key_example",
  // 'xml' | 'json' (optional)
  fileType: "json",
  // string (optional)
  realtimeStart: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  realtimeEnd: new Date('1970-01-01').toISOString().split('T')[0];,
  // number (optional)
  limit: 1,
  // number (optional)
  offset: 1,
  // Date (optional)
  lastUpdated: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getReleasesDates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **fileType** | [**&#39;xml&#39; | &#39;json&#39;**]**Array<&#39;xml&#39; &#124; &#39;json&#39;>** |  | (optional) defaults to 'json'
 **realtimeStart** | [**string**] |  | (optional) defaults to undefined
 **realtimeEnd** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **lastUpdated** | [**Date**] |  | (optional) defaults to undefined


### Return type

**ReleaseDates**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of release dates for economic data |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


