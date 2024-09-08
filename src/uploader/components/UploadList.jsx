/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  map, sort, isNil, has,
} from 'ramda';
import moment from 'moment';
import { Icon, Spinner } from '@blueprintjs/core';
import {
  loadMoreUploadsAction,
  fetchUploadListAction,
  refreshUploadListAction,
} from '../actions/uploadActions';
import { uploadObjectSelector, uploadFetchPendingSelector } from '../selectors/uploadSelectors';
import { UploadType } from '../types/uploadTypes';
import UploadListItem from './UploadListItem';
import { Container, RefreshDiv, HeaderContainer } from './UploadList.Containers';


const ReloadButton = (props) => {
  const { collId, refreshUploadList } = props;
  return (
    <RefreshDiv>
      <Icon icon="refresh" onClick={() => refreshUploadList({ collId })} />
    </RefreshDiv>
  );
};

ReloadButton.propTypes = {
  collId: types.string.isRequired,
  refreshUploadList: types.func.isRequired,
};


class UploadList extends React.Component {
  componentDidMount() {
    const { collId, fetchUploadList } = this.props;
    fetchUploadList({ collId, limit: 20, offset: 0 });
  }

  handleLoadMore = (event) => {
    event.preventDefault();
    this.props.loadMoreUploads();
  }

  render() {
    const {
      collId,
      uploadObjects,
      refreshUploadList,
      fetchPending,
    } = this.props;

    const sortedItems = sort(
      (x, y) => ((moment(y.updatedOn).isAfter(moment(x.updatedOn))) ? 1 : -1),
      Object.values(uploadObjects),
    );

    const uploads = map((item) => <UploadListItem key={item.uploadId} item={item} />, sortedItems);

    if (isNil(uploads) || (has('length', uploads) && uploads.length === 0)) {
      return (
        <Container>
          <HeaderContainer>
            <h3>Past Uploads</h3>
            <ReloadButton collId={collId} refreshUploadList={refreshUploadList} />
          </HeaderContainer>

          <p>There is no historical uploads</p>
        </Container>
      );
    }
    return (
      <Container>
        <HeaderContainer>
          <h3>Past Uploads</h3>
          { !fetchPending && <ReloadButton collId={collId} refreshUploadList={refreshUploadList} />}
          { fetchPending && <RefreshDiv><Spinner size={Spinner.SIZE_SMALL} /></RefreshDiv> }
        </HeaderContainer>
        {uploads}
        {/* <div><a href="#" onClick={this.handleLoadMore}>load more</a></div> */}
      </Container>
    );
  }
}

UploadList.defaultProps = {
  uploadObjects: {},
  fetchPending: false,
};

UploadList.propTypes = {
  uploadObjects: types.objectOf(UploadType),
  refreshUploadList: types.func.isRequired,
  fetchPending: types.bool,
  fetchUploadList: types.func.isRequired,
  loadMoreUploads: types.func.isRequired,
  collId: types.string.isRequired,
};

const mapStateToProps = (state) => ({
  api: state.api,
  uploadObjects: uploadObjectSelector(state),
  fetchPending: uploadFetchPendingSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadMoreUploads: loadMoreUploadsAction,
  refreshUploadList: refreshUploadListAction,
  fetchUploadList: fetchUploadListAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UploadList);
