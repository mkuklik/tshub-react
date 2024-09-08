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
} from '../../client';

import {
  fetchVintageListAction,
} from '../actions/vintagesActions';
import VintageMain from './VintageMain';
import VintageList from './VintageList';


/*
store update as object uploadid -> upload object
front end is responisble for litering
*/

class VintageStandalone extends React.Component {
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
    };
  }

  componentDidMount() {
    const { fetchVintageList, coll_id, tsid } = this.props;
    fetchVintageList({
      collId: coll_id, tsid, limit: 20, offset: 0,
    });
  }

  render() {
    const { coll_id, tsid} = this.props;

    return (
      <div>
        <p>{`collId: ${coll_id}, tsid=${tsid}`}</p>
        <VintageList collId={coll_id} tsid={tsid}/>
      </div>
    );
  }
}

VintageStandalone.propTypes = {
  chronos_address: types.string.isRequired,
  coll_id: types.string.isRequired,
  jwt: types.string.isRequired,
  fetchVintageList: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchVintageList: fetchVintageListAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VintageStandalone);
