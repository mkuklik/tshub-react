# FredApi.SourcesApi

All URIs are relative to *https://api.stlouisfed.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSource**](SourcesApi.md#getSource) | **GET** /fred/source | 
[**getSourceReleases**](SourcesApi.md#getSourceReleases) | **GET** /fred/source/releases | 
[**getSources**](SourcesApi.md#getSources) | **GET** /fred/sources | 



## getSource

> Sources getSource(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SourcesApi();
let opts = {
  'description': "description_example", // String | Get all sources of economic data.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'sourceId': "sourceId_example", // String | The id for a source.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example" // String | The end of the real-time period. For more information, see Real-Time Periods.
};
apiInstance.getSource(opts, (error, data, response) => {
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
 **description** | **String**| Get all sources of economic data. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **sourceId** | **String**| The id for a source. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 

### Return type

[**Sources**](Sources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceReleases

> Releases getSourceReleases(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SourcesApi();
let opts = {
  'the': "the_example", // String | #Description
  'description': "description_example", // String | Get all sources of economic data.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'sourceId': "sourceId_example", // String | The id for a source.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending order for attribute values specified by order_by.
};
apiInstance.getSourceReleases(opts, (error, data, response) => {
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
 **the** | **String**| #Description | [optional] 
 **description** | **String**| Get all sources of economic data. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **sourceId** | **String**| The id for a source. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending order for attribute values specified by order_by. | [optional] 

### Return type

[**Releases**](Releases.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSources

> Sources getSources(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SourcesApi();
let opts = {
  'description': "description_example", // String | Get all sources of economic data.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending order for attribute values specified by order_by.
};
apiInstance.getSources(opts, (error, data, response) => {
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
 **description** | **String**| Get all sources of economic data. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending order for attribute values specified by order_by. | [optional] 

### Return type

[**Sources**](Sources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

