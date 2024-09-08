/* eslint-disable camelcase */
import axios from 'axios';
import * as React from 'react';
import types from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  ApiClient,
  RawSpaceApi,
  RawCollectionApi,
  RawTimeSeriesApi,
  RawTimeSeriesDataApi,
  RawVintageApi,
  RawUploadApi,
} from '../../client';

import {
  fetchGraphAction,
  initiateGraphViewerAction,
} from '../actions/uploadActions';
import GraphViewer from './GraphViewer';


/*
store update as object uploadid -> upload object
front end is responisble for litering
*/

class GraphViewerMain extends React.Component {
  constructor(props) {
    super(props);
    const {
      chronos_address, jwt,
    } = this.props;

    let params = queryString.parse(props.location.search);
    console.log('key', params.key);
    console.log('wid', params.wid);
    console.log('gid', params.gid);

    this.client = new ApiClient();
    this.client.basePath = chronos_address.replace(/\/+$/, '');
    this.client.authentications.jwt.accessToken = jwt;

    if (process.env.NODE_ENV === 'production') {
      axios.defaults.baseURL = chronos_address.replace(/\/+$/, '').replace('/api', '');
    } else {
      axios.defaults.baseURL = 'http://localhost:5000';
    }
    axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;

    // eslint-disable-next-line no-underscore-dangle
    window._chronosdb = {
      rawSpaceApi: new RawSpaceApi(this.client),
      rawCollectionApi: new RawCollectionApi(this.client),
      rawTimeSeriesApi: new RawTimeSeriesApi(this.client),
      rawTimeSeriesDataApi: new RawTimeSeriesDataApi(this.client),
      rawVintageApi: new RawVintageApi(this.client),
      rawUploadApi: new RawUploadApi(this.client),
    };
  }

  componentDidMount() {
    const { fetchGraph, coll_id } = this.props;
    fetchGraph({ collId: coll_id, limit: 20, offset: 0 });
  }

  render() {
    const { coll_id } = this.props;

    return (
      <GraphViewer collId={coll_id} />
    );
  }
}

GraphViewerMain.propTypes = {
  chronos_address: types.string.isRequired,
  coll_id: types.string.isRequired,
  jwt: types.string.isRequired,

  fetchGraph: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchGraph: fetchGraphAction,
  initiateGraphViewer: initiateGraphViewerAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GraphViewerMain));
