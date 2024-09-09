# FredApi.CategoryApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategory**](CategoryApi.md#getCategory) | **GET** /fred/category | Get a category.
[**getCategoryChildren**](CategoryApi.md#getCategoryChildren) | **GET** /fred/category/children | Get the child categories for a specified parent category.
[**getCategoryRelated**](CategoryApi.md#getCategoryRelated) | **GET** /fred/category/related | Get related categories for a specified category.
[**getCategoryRelatedTags**](CategoryApi.md#getCategoryRelatedTags) | **GET** /fred/category/related_tags | Retrieve related tags for a specific category.
[**getCategorySeries**](CategoryApi.md#getCategorySeries) | **GET** /fred/category/series | Retrieve series within a specified category.
[**getCategoryTags**](CategoryApi.md#getCategoryTags) | **GET** /fred/category/tags | Retrieve tags for a specific category.



## getCategory

> Categories getCategory(apiKey, opts)

Get a category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 88e6be3b42147d9eb6726f79a6671453
let opts = {
  'fileType': "'xml'", // String | 
  'categoryId': 0 // Number | 
};
apiInstance.getCategory(apiKey, opts, (error, data, response) => {
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
 **apiKey** | **String**| 88e6be3b42147d9eb6726f79a6671453 | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **categoryId** | **Number**|  | [optional] [default to 0]

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryChildren

> Categories getCategoryChildren(apiKey, opts)

Get the child categories for a specified parent category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 
let opts = {
  'fileType': "'xml'", // String | 
  'categoryId': 0, // Number | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20") // Date | 
};
apiInstance.getCategoryChildren(apiKey, opts, (error, data, response) => {
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
 **apiKey** | **String**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **categoryId** | **Number**|  | [optional] [default to 0]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryRelated

> Categories getCategoryRelated(apiKey, opts)

Get related categories for a specified category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 
let opts = {
  'fileType': "'xml'", // String | 
  'categoryId': 0, // Number | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20") // Date | 
};
apiInstance.getCategoryRelated(apiKey, opts, (error, data, response) => {
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
 **apiKey** | **String**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **categoryId** | **Number**|  | [optional] [default to 0]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryRelatedTags

> Tags getCategoryRelatedTags(apiKey, categoryId, tagNames, opts)

Retrieve related tags for a specific category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 
let categoryId = 56; // Number | 
let tagNames = "tagNames_example"; // String | 
let opts = {
  'fileType': "'xml'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example" // String | 
};
apiInstance.getCategoryRelatedTags(apiKey, categoryId, tagNames, opts, (error, data, response) => {
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
 **apiKey** | **String**|  | 
 **categoryId** | **Number**|  | 
 **tagNames** | **String**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategorySeries

> Seriess getCategorySeries(apiKey, categoryId, opts)

Retrieve series within a specified category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 
let categoryId = 56; // Number | 
let opts = {
  'fileType': "'xml'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'filterVariable': "filterVariable_example", // String | 
  'filterValue': "filterValue_example" // String | 
};
apiInstance.getCategorySeries(apiKey, categoryId, opts, (error, data, response) => {
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
 **apiKey** | **String**|  | 
 **categoryId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **filterVariable** | **String**|  | [optional] 
 **filterValue** | **String**|  | [optional] 

### Return type

[**Seriess**](Seriess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryTags

> Tags getCategoryTags(apiKey, categoryId, opts)

Retrieve tags for a specific category.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.CategoryApi();
let apiKey = "apiKey_example"; // String | 
let categoryId = 56; // Number | 
let opts = {
  'fileType': "'xml'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example" // String | 
};
apiInstance.getCategoryTags(apiKey, categoryId, opts, (error, data, response) => {
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
 **apiKey** | **String**|  | 
 **categoryId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;xml&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

