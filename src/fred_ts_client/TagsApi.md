# .TagsApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelatedTags**](TagsApi.md#getRelatedTags) | **GET** /fred/related_tags | 
[**getTags**](TagsApi.md#getTags) | **GET** /fred/tags | 
[**getTagsSeries**](TagsApi.md#getTagsSeries) | **GET** /fred/tags/series | 


# **getRelatedTags**
> Tags getRelatedTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiGetRelatedTagsRequest = {
  // string | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. (optional)
  tagNames: "tag_names_example",
  // string | A tag group id to filter tags by type. (optional)
  tagGroupId: "tag_group_id_example",
  // string | The words to find matching tags with. (optional)
  searchText: "search_text_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending order for attribute values specified by order_by. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getRelatedTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | (optional) defaults to undefined
 **tagGroupId** | [**string**] | A tag group id to filter tags by type. | (optional) defaults to undefined
 **searchText** | [**string**] | The words to find matching tags with. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending order for attribute values specified by order_by. | (optional) defaults to undefined


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

# **getTags**
> Tags getTags()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiGetTagsRequest = {
  // string | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | The start of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeStart: "realtime_start_example",
  // string | The end of the real-time period. For more information, see Real-Time Periods. (optional)
  realtimeEnd: "realtime_end_example",
  // string | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. (optional)
  tagNames: "tag_names_example",
  // string | A tag group id to filter tags by type. (optional)
  tagGroupId: "tag_group_id_example",
  // string | The words to find matching tags with. (optional)
  searchText: "search_text_example",
  // string | The maximum number of results to return. (optional)
  limit: "limit_example",
  // number | non-negative integer, optional, default: 0 (optional)
  offset: 1,
  // string | Order results by values of the specified attribute. (optional)
  orderBy: "order_by_example",
  // string | Sort results is ascending or descending order for attribute values specified by order_by. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | (optional) defaults to undefined
 **tagGroupId** | [**string**] | A tag group id to filter tags by type. | (optional) defaults to undefined
 **searchText** | [**string**] | The words to find matching tags with. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending order for attribute values specified by order_by. | (optional) defaults to undefined


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

# **getTagsSeries**
> Seriess getTagsSeries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiGetTagsSeriesRequest = {
  // string | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags (optional)
  description: "Description_example",
  // string | Read API Keys for more information. (optional)
  apiKey: "api_key_example",
  // string | A key or file extension that indicates the type of file to send. (optional)
  fileType: "file_type_example",
  // string | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. (optional)
  tagNames: "tag_names_example",
  // string | A semicolon delimited list of tag names that series match none of. (optional)
  excludeTagNames: "exclude_tag_names_example",
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
  // string | Sort results is ascending or descending order for attribute values specified by order_by. (optional)
  sortOrder: "sort_order_example",
};

apiInstance.getTagsSeries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**string**] | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | (optional) defaults to undefined
 **apiKey** | [**string**] | Read API Keys for more information. | (optional) defaults to undefined
 **fileType** | [**string**] | A key or file extension that indicates the type of file to send. | (optional) defaults to undefined
 **tagNames** | [**string**] | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | (optional) defaults to undefined
 **excludeTagNames** | [**string**] | A semicolon delimited list of tag names that series match none of. | (optional) defaults to undefined
 **realtimeStart** | [**string**] | The start of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **realtimeEnd** | [**string**] | The end of the real-time period. For more information, see Real-Time Periods. | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of results to return. | (optional) defaults to undefined
 **offset** | [**number**] | non-negative integer, optional, default: 0 | (optional) defaults to undefined
 **orderBy** | [**string**] | Order results by values of the specified attribute. | (optional) defaults to undefined
 **sortOrder** | [**string**] | Sort results is ascending or descending order for attribute values specified by order_by. | (optional) defaults to undefined


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


