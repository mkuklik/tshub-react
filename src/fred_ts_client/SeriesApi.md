# .SeriesApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSeries**](SeriesApi.md#getSeries) | **GET** /fred/series | 
[**getSeriesCategories**](SeriesApi.md#getSeriesCategories) | **GET** /fred/series/categories | 
[**getSeriesObservations**](SeriesApi.md#getSeriesObservations) | **GET** /fred/series/observations | 
[**getSeriesRelease**](SeriesApi.md#getSeriesRelease) | **GET** /fred/series/release | 
[**getSeriesSearch**](SeriesApi.md#getSeriesSearch) | **GET** /fred/series/search | 
[**getSeriesSearchRelatedTags**](SeriesApi.md#getSeriesSearchRelatedTags) | **GET** /fred/series/search/related_tags | 
[**getSeriesSearchTags**](SeriesApi.md#getSeriesSearchTags) | **GET** /fred/series/search/tags | 
[**getSeriesTags**](SeriesApi.md#getSeriesTags) | **GET** /fred/series/tags | 
[**getSeriesUpdates**](SeriesApi.md#getSeriesUpdates) | **GET** /fred/series/updates | 
[**getSeriesVintagedates**](SeriesApi.md#getSeriesVintagedates) | **GET** /fred/series/vintagedates | 


# **getSeries**
> Seriess getSeries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesRequest = {
  // string | Get an economic data series. (optional)
  description: "Description:_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
};

apiInstance.getSeries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesCategories**
> Categories getSeriesCategories()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesCategoriesRequest = {
  // string | Get an economic data series. (optional)
  description: "Description:_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
};

apiInstance.getSeriesCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined


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

# **getSeriesObservations**
> Observations getSeriesObservations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesObservationsRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Sort results is ascending or descending observation_date order. (optional)
  sortOrder: "sort_order_example",
  // string | The start of the observation period. (optional)
  observationStart: "observation_start_example",
  // string | The end of the observation period. (optional)
  observationEnd: "observation_end_example",
  // string | A key that indicates a data value transformation. (optional)
  units: "units_example",
  // number | An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter. (optional)
  frequency: 1,
  // string | A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set. (optional)
  aggregationMethod: "aggregation_method_example",
  // number | An integer that indicates an output type. (optional)
  outputType: 1,
  // string | Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end. (optional)
  vintageDates: "vintage_dates_example",
};

apiInstance.getSeriesObservations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending observation_date order. | (optional) defaults to undefined
 **observationStart** | [**string**] | The start of the observation period. | (optional) defaults to undefined
 **observationEnd** | [**string**] | The end of the observation period. | (optional) defaults to undefined
 **units** | [**string**] | A key that indicates a data value transformation. | (optional) defaults to undefined
 **frequency** | [**number**] | An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter. | (optional) defaults to undefined
 **aggregationMethod** | [**string**] | A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set. | (optional) defaults to undefined
 **outputType** | [**number**] | An integer that indicates an output type. | (optional) defaults to undefined
 **vintageDates** | [**string**] | Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end. | (optional) defaults to undefined


### Return type

**Observations**

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

# **getSeriesRelease**
> Releases getSeriesRelease()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesReleaseRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
};

apiInstance.getSeriesRelease(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesSearch**
> Seriess getSeriesSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesSearchRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The words to match against economic data series. (optional)
  searchText: "search_text_example",
  // string | Determines the type of search to perform. (optional)
  searchType: "search_type_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending observation_date order. (optional)
  sortOrder: "sort_order_example",
  // string | The attribute to filter results by. (optional)
  filterVariable: "filter_variable_example",
  // string | The value of the filter_variable attribute to filter results by. (optional)
  filterValue: "filter_value_example",
  // string | A semicolon delimited list of tag names that series match all of. (optional)
  tagNames: "tag_names_example",
  // string | A semicolon delimited list of tag names that series match none of. (optional)
  excludeTagNames: "exclude_tag_names_example",
};

apiInstance.getSeriesSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **searchText** | [**string**] | The words to match against economic data series. | (optional) defaults to undefined
 **searchType** | [**string**] | Determines the type of search to perform. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending observation_date order. | (optional) defaults to undefined
 **filterVariable** | [**string**] | The attribute to filter results by. | (optional) defaults to undefined
 **filterValue** | [**string**] | The value of the filter_variable attribute to filter results by. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names that series match all of. | (optional) defaults to undefined
 **excludeTagNames** | [**string**] | A semicolon delimited list of tag names that series match none of. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesSearchRelatedTags**
> Tags getSeriesSearchRelatedTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesSearchRelatedTagsRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The words to match against economic data series. (optional)
  seriesSearchText: "series_search_text_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | A semicolon delimited list of tag names that series match all of. (optional)
  tagNames: "tag_names_example",
  // string | A semicolon delimited list of tag names that series match none of. (optional)
  excludeTagNames: "exclude_tag_names_example",
  // string | A tag group id to filter tags by type. (optional)
  tagGroupId: "tag_group_id_example",
  // string | The words to find matching tags with. (optional)
  tagSearchText: "tag_search_text_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending observation_date order. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getSeriesSearchRelatedTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesSearchText** | [**string**] | The words to match against economic data series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names that series match all of. | (optional) defaults to undefined
 **excludeTagNames** | [**string**] | A semicolon delimited list of tag names that series match none of. | (optional) defaults to undefined
 **tagGroupId** | [**string**] | A tag group id to filter tags by type. | (optional) defaults to undefined
 **tagSearchText** | [**string**] | The words to find matching tags with. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending observation_date order. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesSearchTags**
> Tags getSeriesSearchTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesSearchTagsRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The words to match against economic data series. (optional)
  seriesSearchText: "series_search_text_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | A semicolon delimited list of tag names that series match all of. (optional)
  tagNames: "tag_names_example",
  // string | A tag group id to filter tags by type. (optional)
  tagGroupId: "tag_group_id_example",
  // string | The words to find matching tags with. (optional)
  tagSearchText: "tag_search_text_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending observation_date order. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getSeriesSearchTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesSearchText** | [**string**] | The words to match against economic data series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names that series match all of. | (optional) defaults to undefined
 **tagGroupId** | [**string**] | A tag group id to filter tags by type. | (optional) defaults to undefined
 **tagSearchText** | [**string**] | The words to find matching tags with. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending observation_date order. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesTags**
> Tags getSeriesTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesTagsRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending observation_date order. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getSeriesTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending observation_date order. | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesUpdates**
> Seriess getSeriesUpdates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesUpdatesRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | The value of the filter_variable attribute to filter results by. (optional)
  filterValue: "filter_value_example",
  // string | Start time for limiting results for a time range, can filter down to minutes (optional)
  startTime: "start_time_example",
  // string | End time for limiting results for a time range, can filter down to minutes (optional)
  endTime: "end_time_example",
};

apiInstance.getSeriesUpdates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **filterValue** | [**string**] | The value of the filter_variable attribute to filter results by. | (optional) defaults to undefined
 **startTime** | [**string**] | Start time for limiting results for a time range, can filter down to minutes | (optional) defaults to undefined
 **endTime** | [**string**] | End time for limiting results for a time range, can filter down to minutes | (optional) defaults to undefined


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
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeriesVintagedates**
> VintageDates getSeriesVintagedates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeriesApi(configuration);

let body:.SeriesApiGetSeriesVintagedatesRequest = {
  // string | Get the observations or data values for an economic data series. (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The id for a series. (optional)
  seriesId: "series_id_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
};

apiInstance.getSeriesVintagedates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get the observations or data values for an economic data series. | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **seriesId** | [**string**] | The id for a series. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined


### Return type

**VintageDates**

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


