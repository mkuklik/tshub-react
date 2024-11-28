
/* eslint-disable max-classes-per-file */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil } from 'ramda';
import types from 'prop-types';
import styled from 'styled-components';
import { Callout } from '@blueprintjs/core';
import Upload from '../../../uploader/components/Upload';
import { Link } from '../../analytics/components/containers';
import { openTimeSeriesBrowserAction } from '../../action/workbookActions';
import { collectionSummarySelector } from '../../../viewer/selectors/collections';
import { timeseriesBrowserSelectedCollectionIDSelector } from '../../../viewer/selectors/ui';
import { CollectionType } from '../../../viewer/types/Collections';
import { spaceSelector } from '../../../viewer/selectors/spaces';
import { SpaceType } from '../../../viewer/types/Spaces';
import { uploadHasPermissionSelector } from '../../../uploader/selectors/uploadSelectors';
import { initiateUploadAction } from '../../../uploader/actions/uploadActions';

const UploadPanel = styled.div`
  padding: 10px
`;


const Header = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const BreadCrumbs = styled.div`
  margin-bottom: 10px;
  color: #999999;
`;

class UploadTab extends React.PureComponent {

  componentDidUpdate(prevProps) {
    const { collId, initiateUpload } = this.props;
    if (collId !== prevProps.collId) {
      initiateUpload({ collId });
    }
  }

  render() {
    const {
      collId, openTimeSeriesBrowser, collection, space, hasPermission,
    } = this.props;
    return (
      <UploadPanel>

        {isNil(collId) && (
        <div style={{}}>
          Select collection from
          {' '}
          <Link onClick={openTimeSeriesBrowser}>Timeseries Browser</Link>
        </div>
        )}

        { !isNil(collId) && (
          <>
            <Header>
              <h3>
                Collection
                {' '}
                {!isNil(collection) && <span><i>{collection.name}</i></span>}
                {' '}
                Upload
              </h3>
              <BreadCrumbs>
                /
                {!isNil(space) && <span>{space.name}</span>}
                /
                {!isNil(collection) && <span>{collection.name}</span>}
              </BreadCrumbs>
              <p>
                To select different collection go to
                {' '}
                <Link onClick={openTimeSeriesBrowser}>Timeseries Browser</Link>
              </p>
            </Header>

            { hasPermission
              && <Upload collId={collId} />}

            { !hasPermission
              && (
              <Callout intent="danger" style={{ marginTop: '10px' }}>
                You don't have permission to upload to this collection.
              </Callout>
              )}
          </>
        )}

      </UploadPanel>
    );
  }
}

UploadTab.defaultProps = {
  collId: undefined,
  collection: undefined,
  space: undefined,
  hasPermission: true,
};

UploadTab.propTypes = {
  collId: types.string,
  hasPermission: types.bool,
  openTimeSeriesBrowser: types.func.isRequired,
  initiateUpload: types.func.isRequired,
  collection: CollectionType,
  space: SpaceType,
};

const mapStateToProps = (state) => {
  const collId = timeseriesBrowserSelectedCollectionIDSelector(state);
  const collection = collectionSummarySelector(collId)(state);
  const space = (!isNil(path(['spaceId'], collection))) ? spaceSelector(collection.spaceId)(state) : undefined;
  const hasPermission = uploadHasPermissionSelector(state);
  return ({
    collId,
    collection,
    space,
    hasPermission,
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openTimeSeriesBrowser: openTimeSeriesBrowserAction,
  initiateUpload: initiateUploadAction,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(UploadTab);
