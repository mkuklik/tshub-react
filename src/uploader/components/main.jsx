/* eslint-disable camelcase */
import axios from 'axios';
import * as React from 'react';
import types from 'prop-types';
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
  fetchUploadListAction,
  initiateUploadAction,
} from '../actions/uploadActions';
import Upload from './Upload';

// NOT USED IN WORKBOOK

/*
store update as object uploadid -> upload object
front end is responisble for litering
*/

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    const {
      chronos_address, jwt,
    } = this.props;

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
    const { fetchUploadList, coll_id } = this.props;
    fetchUploadList({ collId: coll_id, limit: 20, offset: 0 });
  }

  render() {
    const { coll_id } = this.props;

    return (
      <Upload collId={coll_id} />
    );
  }
}

Uploader.propTypes = {
  chronos_address: types.string.isRequired,
  coll_id: types.string.isRequired,
  jwt: types.string.isRequired,

  fetchUploadList: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUploadList: fetchUploadListAction,
  initiateUpload: initiateUploadAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
