# FredApi.ReleaseApi

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



## getReleaseDates

> ReleaseDates getReleaseDates(apiKey, releaseId, opts)

Retrieve release dates for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20") // Date | 
};
apiInstance.getReleaseDates(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 

### Return type

[**ReleaseDates**](ReleaseDates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseInfo

> Releases getReleaseInfo(apiKey, releaseId, opts)

Get information for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20") // Date | 
};
apiInstance.getReleaseInfo(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 

### Return type

[**Releases**](Releases.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseRelatedTags

> Tags getReleaseRelatedTags(apiKey, releaseId, tagNames, opts)

Retrieve related tags for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let tagNames = "tagNames_example"; // String | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example" // String | 
};
apiInstance.getReleaseRelatedTags(apiKey, releaseId, tagNames, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **tagNames** | **String**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
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


## getReleaseSeries

> Seriess getReleaseSeries(apiKey, releaseId, opts)

Get series for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'filterVariable': "filterVariable_example", // String | 
  'filterValue': "filterValue_example" // String | 
};
apiInstance.getReleaseSeries(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
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


## getReleaseSources

> Sources getReleaseSources(apiKey, releaseId, opts)

Get sources for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20") // Date | 
};
apiInstance.getReleaseSources(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 

### Return type

[**Sources**](Sources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseTables

> Categories getReleaseTables(apiKey, releaseId, opts)

Get data tables for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'elementId': 56, // Number | 
  'includeObservations': true, // Boolean | 
  'observationDate': new Date("2013-10-20") // Date | 
};
apiInstance.getReleaseTables(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **elementId** | **Number**|  | [optional] 
 **includeObservations** | **Boolean**|  | [optional] 
 **observationDate** | **Date**|  | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseTags

> Tags getReleaseTags(apiKey, releaseId, opts)

Get tags for a specific economic data release.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let releaseId = 56; // Number | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'searchText': "searchText_example" // String | 
};
apiInstance.getReleaseTags(apiKey, releaseId, opts, (error, data, response) => {
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
 **releaseId** | **Number**|  | 
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **searchText** | **String**|  | [optional] 

### Return type

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleases

> Releases getReleases(apiKey, opts)

Get all releases of economic data.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderBy': "orderBy_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'filterVariable': "filterVariable_example", // String | 
  'filterValue': "filterValue_example" // String | 
};
apiInstance.getReleases(apiKey, opts, (error, data, response) => {
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
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **filterVariable** | **String**|  | [optional] 
 **filterValue** | **String**|  | [optional] 

### Return type

[**Releases**](Releases.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleasesDates

> ReleaseDates getReleasesDates(apiKey, opts)

Retrieve release dates for all economic data.

### Example

```javascript
import FredApi from 'fred_api';

let apiInstance = new FredApi.ReleaseApi();
let apiKey = "apiKey_example"; // String | 
let opts = {
  'fileType': "'json'", // String | 
  'realtimeStart': new Date("2013-10-20"), // Date | 
  'realtimeEnd': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'lastUpdated': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.getReleasesDates(apiKey, opts, (error, data, response) => {
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
 **fileType** | **String**|  | [optional] [default to &#39;json&#39;]
 **realtimeStart** | **Date**|  | [optional] 
 **realtimeEnd** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **lastUpdated** | **Date**|  | [optional] 

### Return type

[**ReleaseDates**](ReleaseDates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

