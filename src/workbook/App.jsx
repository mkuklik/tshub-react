import * as React from "react";
import types from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { FocusStyleManager } from "@blueprintjs/core";
import { WebR } from "@r-wasm/webr";
// eslint-disable-next-line no-unused-vars, import/no-named-as-default
import AppToaster from "../viewer/components/errors/AppToaster";
import GlobalFonts from "../fonts/fonts";
import "@blueprintjs/core/lib/css/blueprint.css";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import { initializeAction } from "../viewer/actions";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import WorkbookContainer from "./components/Workbook/WorkbookContainer";
import TopMenu from "./components/TopMenu/TopMenu";
import CreateSpaceOverlay from "../viewer/components/TimeseriesBrowser/SpaceBrowser/CreateSpaceOverlay";
import CreateCollectionOverlay from "../viewer/components/TimeseriesBrowser/SpaceBrowser/CreateCollectionOverlay";
import CreateTimeseriesOverlay from "../viewer/components/TimeseriesBrowser/TimeseriesTable/CreateTimeseriesOverlay";
import FredBrowserConfigOverlay from "../viewer/components/FredBrowser/CategoryBrowser/FredBrowserConfigOverlay";
import TourMain from "./tour";
import LoginPortal from "./components/User/LoginPortal";
// import registerWebRServiceWorker from "../registerWebRServiceWorker";

// import { createAnalyticsAction } from './analytics/actions';
// import { AnalyticsKind } from './analytics/definitions/AnalyticsKind';
// import {
//   ApiClient as AnalyticsApiClient,
//   DefaultApi as AnalyticsApi,
//   FilterApi,
//   ModelApi,
//   TestApi,
// } from '../analytics_client';
// import {
//   ApiClient,
//   RawSpaceApi,
//   RawCollectionApi,
//   RawAnnotationsApi,
//   RawTimeSeriesApi,
//   RawTimeSeriesDataApi,
//   RawVintageApi,
//   TimeSeriesApi,
// } from '../client';

FocusStyleManager.onlyShowFocusOnTabs();

const Container = styled.div`
  // padding-top: 30px;
  magin: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledTopMenu = styled(TopMenu)`
  margin-top: 30px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    const {
      wid,
      chronos_address,
      analytics_address,
      jwt,
      title,
      isFavorite,
      initialize,
    } = this.props;

    // this.client = new ApiClient();
    // this.client.basePath = chronos_address.replace(/\/+$/, '');
    // this.client.authentications.jwt.accessToken = jwt;

    // this.apiClient = new AnalyticsApiClient();
    // this.apiClient.authentications.jwt.accessToken = jwt;
    // if (process.env.NODE_ENV === 'production') {
    //   this.apiClient.basePath = chronos_address
    //     .replace(/\/+$/, '');
    // } else {
    //   this.apiClient.basePath = chronos_address
    //     .replace(/\/+$/, '')
    //     .replace(/:(\d){1,}\//gm, ':9091/');
    // }

    // if (process.env.NODE_ENV === 'production') {
    //   axios.defaults.baseURL = chronos_address.replace(/\/+$/, '').replace('/api', '');
    // } else {
    //   axios.defaults.baseURL = 'http://localhost:5000';
    // }
    // axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    // // axios.defaults.withCredentials = true;
    // // axios.defaults.crossDomain = true;

    // // eslint - disable - next - line no - underscore - dangle
    // window._chronosdb = {
    //   wid,
    //   rawSpaceApi: new RawSpaceApi(this.client),
    //   rawCollectionApi: new RawCollectionApi(this.client),
    //   rawAnnotationApi: new RawAnnotationsApi(this.client),
    //   rawTimeSeriesApi: new RawTimeSeriesApi(this.client),
    //   rawTimeSeriesDataApi: new RawTimeSeriesDataApi(this.client),
    //   rawVintageApi: new RawVintageApi(this.client),
    //   timeSeriesApi: new TimeSeriesApi(this.client),
    //   analyticsApi: new AnalyticsApi(this.apiClient),
    //   modelsApi: new ModelApi(this.apiClient),
    //   filtersApi: new FilterApi(this.apiClient),
    //   testsApi: new TestApi(this.apiClient),
    // };

    initialize({
      wid,
      jwt,
      title,
      isFavorite,
      chronos_address,
      analytics_address,
    });

    // debugging
    // TODO REMOVE
    // this.props.createAnalytics({
    //   kind: AnalyticsKind.LM,
    //   ayid: '5e787f62320c9439b6eafb2c',
    // });
    this.webR = null; // Add webR instance variable
  }

  // async initWebR() {
  //   const { WebR } = await import("@r-wasm/webr");
  //   window._webR = new WebR();
  //   await window._webR.init();
  //   console.log("webR is ready!");
  // }

  // async componentDidMount() {
  //   // Initialize webR after the component mounts
  //   await this.initWebR();
  // }

  async componentDidMount() {
    // Initialize webR after the component mounts
    // registerWebRServiceWorker(); // Call the registration function here
    // const webR = new WebR({
    //   serviceWorkerUrl: "webr/",
    // });
    // await webR.init();
    this.webR = new WebR({
      createLazyFilesystem: false,
      baseUrl: "https://webr.r-wasm.org/v0.1.1/",
      repoUrl: "https://repo.r-wasm.org/",
      serviceWorkerUrl: "webr/",
    });
    await this.webR.init();
    console.log("webR is ready!");
  }

  render() {
    return (
      <Container>
        <GlobalFonts />
        <TopNavbar />
        <StyledTopMenu />
        <WorkbookContainer />
        {/* Overlays */}
        <LoginPortal />
        <CreateSpaceOverlay />
        <CreateCollectionOverlay />
        <CreateTimeseriesOverlay />
        <FredBrowserConfigOverlay />
        <TourMain />
      </Container>
    );
  }
}

App.propTypes = {
  wid: types.string.isRequired,
  chronos_address: types.string.isRequired,
  analytics_address: types.string.isRequired,
  jwt: types.string.isRequired,
  title: types.string.isRequired,
  isFavorite: types.bool.isRequired,
  initialize: types.func.isRequired,
  // createAnalytics: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      initialize: initializeAction,
      // createAnalytics: createAnalyticsAction,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
