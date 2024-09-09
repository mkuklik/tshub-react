# FredApi.TagsApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelatedTags**](TagsApi.md#getRelatedTags) | **GET** /fred/related_tags | 
[**getTags**](TagsApi.md#getTags) | **GET** /fred/tags | 
[**getTagsSeries**](TagsApi.md#getTagsSeries) | **GET** /fred/tags/series | 



## getRelatedTags

> Tags getRelatedTags(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.TagsApi();
let opts = {
  'description': "description_example", // String | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
  'tagGroupId': "tagGroupId_example", // String | A tag group id to filter tags by type.
  'searchText': "searchText_example", // String | The words to find matching tags with.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending order for attribute values specified by order_by.
};
apiInstance.getRelatedTags(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **String**| Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | [optional] 
 **tagGroupId** | **String**| A tag group id to filter tags by type. | [optional] 
 **searchText** | **String**| The words to find matching tags with. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending order for attribute values specified by order_by. | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTags

> Tags getTags(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.TagsApi();
let opts = {
  'description': "description_example", // String | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
  'tagGroupId': "tagGroupId_example", // String | A tag group id to filter tags by type.
  'searchText': "searchText_example", // String | The words to find matching tags with.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending order for attribute values specified by order_by.
};
apiInstance.getTags(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **String**| Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | [optional] 
 **tagGroupId** | **String**| A tag group id to filter tags by type. | [optional] 
 **searchText** | **String**| The words to find matching tags with. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending order for attribute values specified by order_by. | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTagsSeries

> Seriess getTagsSeries(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.TagsApi();
let opts = {
  'description': "description_example", // String | Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags.
  'excludeTagNames': "excludeTagNames_example", // String | A semicolon delimited list of tag names that series match none of.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending order for attribute values specified by order_by.
};
apiInstance.getTagsSeries(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **String**| Get FRED tags. Optionally, filter results by tag name, tag group, or search. FRED tags are attributes assigned to series. See the related request fred/related_tags | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names to only include in the response. See the related request fred/related_tags. | [optional] 
 **excludeTagNames** | **String**| A semicolon delimited list of tag names that series match none of. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending order for attribute values specified by order_by. | [optional] 

### Return type

[**Seriess**](Seriess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

