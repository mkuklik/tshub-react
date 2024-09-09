# FredApi.SeriesApi

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



## getSeries

> Seriess getSeries(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example" // String | The end of the real-time period. For more information, see Real-Time Periods.
};
apiInstance.getSeries(opts, (error, data, response) => {
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
 **description** | **String**| Get an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 

### Return type

[**Seriess**](Seriess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesCategories

> Categories getSeriesCategories(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example" // String | The end of the real-time period. For more information, see Real-Time Periods.
};
apiInstance.getSeriesCategories(opts, (error, data, response) => {
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
 **description** | **String**| Get an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesObservations

> Observations getSeriesObservations(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'sortOrder': "sortOrder_example", // String | Sort results is ascending or descending observation_date order.
  'observationStart': "observationStart_example", // String | The start of the observation period.
  'observationEnd': "observationEnd_example", // String | The end of the observation period.
  'units': "units_example", // String | A key that indicates a data value transformation.
  'frequency': 56, // Number | An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter.
  'aggregationMethod': "aggregationMethod_example", // String | A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set.
  'outputType': 56, // Number | An integer that indicates an output type.
  'vintageDates': "vintageDates_example" // String | Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end.
};
apiInstance.getSeriesObservations(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending observation_date order. | [optional] 
 **observationStart** | **String**| The start of the observation period. | [optional] 
 **observationEnd** | **String**| The end of the observation period. | [optional] 
 **units** | **String**| A key that indicates a data value transformation. | [optional] 
 **frequency** | **Number**| An optional parameter that indicates a lower frequency to aggregate values to. The FRED frequency aggregation feature converts higher frequency data series into lower frequency data series (e.g. converts a monthly data series into an annual data series). In FRED, the highest frequency data is daily, and the lowest frequency data is annual. There are 3 aggregation methods available- average, sum, and end of period. See the aggregation_method parameter. | [optional] 
 **aggregationMethod** | **String**| A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set. | [optional] 
 **outputType** | **Number**| An integer that indicates an output type. | [optional] 
 **vintageDates** | **String**| Vintage dates are used to download data as it existed on these specified dates in history. Vintage dates can be specified instead of a real-time period using realtime_start and realtime_end. | [optional] 

### Return type

[**Observations**](Observations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesRelease

> Releases getSeriesRelease(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example" // String | The end of the real-time period. For more information, see Real-Time Periods.
};
apiInstance.getSeriesRelease(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 

### Return type

[**Releases**](Releases.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesSearch

> Seriess getSeriesSearch(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'searchText': "searchText_example", // String | The words to match against economic data series.
  'searchType': "searchType_example", // String | Determines the type of search to perform.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example", // String | Sort results is ascending or descending observation_date order.
  'filterVariable': "filterVariable_example", // String | The attribute to filter results by.
  'filterValue': "filterValue_example", // String | The value of the filter_variable attribute to filter results by.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names that series match all of.
  'excludeTagNames': "excludeTagNames_example" // String | A semicolon delimited list of tag names that series match none of.
};
apiInstance.getSeriesSearch(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **searchText** | **String**| The words to match against economic data series. | [optional] 
 **searchType** | **String**| Determines the type of search to perform. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending observation_date order. | [optional] 
 **filterVariable** | **String**| The attribute to filter results by. | [optional] 
 **filterValue** | **String**| The value of the filter_variable attribute to filter results by. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names that series match all of. | [optional] 
 **excludeTagNames** | **String**| A semicolon delimited list of tag names that series match none of. | [optional] 

### Return type

[**Seriess**](Seriess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesSearchRelatedTags

> Tags getSeriesSearchRelatedTags(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesSearchText': "seriesSearchText_example", // String | The words to match against economic data series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names that series match all of.
  'excludeTagNames': "excludeTagNames_example", // String | A semicolon delimited list of tag names that series match none of.
  'tagGroupId': "tagGroupId_example", // String | A tag group id to filter tags by type.
  'tagSearchText': "tagSearchText_example", // String | The words to find matching tags with.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending observation_date order.
};
apiInstance.getSeriesSearchRelatedTags(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesSearchText** | **String**| The words to match against economic data series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names that series match all of. | [optional] 
 **excludeTagNames** | **String**| A semicolon delimited list of tag names that series match none of. | [optional] 
 **tagGroupId** | **String**| A tag group id to filter tags by type. | [optional] 
 **tagSearchText** | **String**| The words to find matching tags with. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending observation_date order. | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesSearchTags

> Tags getSeriesSearchTags(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesSearchText': "seriesSearchText_example", // String | The words to match against economic data series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'tagNames': "tagNames_example", // String | A semicolon delimited list of tag names that series match all of.
  'tagGroupId': "tagGroupId_example", // String | A tag group id to filter tags by type.
  'tagSearchText': "tagSearchText_example", // String | The words to find matching tags with.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending observation_date order.
};
apiInstance.getSeriesSearchTags(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesSearchText** | **String**| The words to match against economic data series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **tagNames** | **String**| A semicolon delimited list of tag names that series match all of. | [optional] 
 **tagGroupId** | **String**| A tag group id to filter tags by type. | [optional] 
 **tagSearchText** | **String**| The words to find matching tags with. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending observation_date order. | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesTags

> Tags getSeriesTags(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'orderBy': "orderBy_example", // String | Order results by values of the specified attribute.
  'sortOrder': "sortOrder_example" // String | Sort results is ascending or descending observation_date order.
};
apiInstance.getSeriesTags(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **orderBy** | **String**| Order results by values of the specified attribute. | [optional] 
 **sortOrder** | **String**| Sort results is ascending or descending observation_date order. | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesUpdates

> Seriess getSeriesUpdates(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56, // Number | non-negative integer, optional, default: 0
  'filterValue': "filterValue_example", // String | The value of the filter_variable attribute to filter results by.
  'startTime': "startTime_example", // String | Start time for limiting results for a time range, can filter down to minutes
  'endTime': "endTime_example" // String | End time for limiting results for a time range, can filter down to minutes
};
apiInstance.getSeriesUpdates(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 
 **filterValue** | **String**| The value of the filter_variable attribute to filter results by. | [optional] 
 **startTime** | **String**| Start time for limiting results for a time range, can filter down to minutes | [optional] 
 **endTime** | **String**| End time for limiting results for a time range, can filter down to minutes | [optional] 

### Return type

[**Seriess**](Seriess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSeriesVintagedates

> VintageDates getSeriesVintagedates(opts)



### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.SeriesApi();
let opts = {
  'description': "description_example", // String | Get the observations or data values for an economic data series.
  'apiKey': "apiKey_example", // String | Read API Keys for more information.
  'fileType': "fileType_example", // String | A key or file extension that indicates the type of file to send.
  'seriesId': "seriesId_example", // String | The id for a series.
  'realtimeStart': "realtimeStart_example", // String | The start of the real-time period. For more information, see Real-Time Periods.
  'realtimeEnd': "realtimeEnd_example", // String | The end of the real-time period. For more information, see Real-Time Periods.
  'limit': "limit_example", // String | The maximum number of results to return.
  'offset': 56 // Number | non-negative integer, optional, default: 0
};
apiInstance.getSeriesVintagedates(opts, (error, data, response) => {
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
 **description** | **String**| Get the observations or data values for an economic data series. | [optional] 
 **apiKey** | **String**| Read API Keys for more information. | [optional] 
 **fileType** | **String**| A key or file extension that indicates the type of file to send. | [optional] 
 **seriesId** | **String**| The id for a series. | [optional] 
 **realtimeStart** | **String**| The start of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **realtimeEnd** | **String**| The end of the real-time period. For more information, see Real-Time Periods. | [optional] 
 **limit** | **String**| The maximum number of results to return. | [optional] 
 **offset** | **Number**| non-negative integer, optional, default: 0 | [optional] 

### Return type

[**VintageDates**](VintageDates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

