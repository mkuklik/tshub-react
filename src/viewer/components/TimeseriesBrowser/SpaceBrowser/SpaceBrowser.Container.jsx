/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { isNil, compose, path } from 'ramda';

import {
  fetchSpacesAction,
  fetchSpaceDetailsAction,
  deleteSpaceAction,
} from '../../../actions/spacesActions';

import {
  selectCollectionAction,
  fetchCollectionsAction,
  refetchCollectionsAction,
  fetchCollectionDetailsAction,
  deleteCollectionAction,
} from '../../../actions/collectionsActions';

import { fetchTimeseriesListAction } from '../../../actions/timeseriesActions';

import {
  timeseriesBrowserSelectSpace,
  timeseriesBrowserSelectCollection,
  timeseriesBrowserExpandSpace,
  timeseriesBrowserCollapseSpace,
  toggleCreateSpaceOverlayAction,
  timeseriesBrowserSetOverNodeIDAction,
  toggleCreateCollectionOverlayAction,
  toggleDeleteSpaceCollectionOverlayAction,
} from '../../../actions/uiActions';

import { SpaceListType, SpaceDetailsType } from '../../../types/Spaces';

import {
  CollectionListMapType,
  CollectionErrorMapType,
  CollectionDetailsType,
} from '../../../types/Collections';

import { TimeseriesListMapType } from '../../../types/Timeseries';

import { SpaceBrowser } from './SpaceBrowser';
import {
  timeseriesBrowserOverSpaceIdSelector,
  isDeleteSpaceCollectionOverlayOpenSelector,
} from '../../../selectors/ui';

const SpaceBrowserContainerBase = ({
  spaces,
  spaceDetails,
  isSpaceListLoading,
  loadingSpaces,
  expandedSpaces,
  fetchSpaces,
  fetchSpaceDetails,
  collections,
  failedCollections,
  collectionDetails,
  fetchCollections,
  fetchCollectionDetails,
  refetchCollections,
  selectCollection,
  timeseriesListByColl,
  fetchTimeseriesList,
  selectedSpaceId,
  selectedCollectionID,

  uiSelectSpace,
  uiExpandSpace,
  uiCollapseSpace,
  uiSelectCollection,
  showUploadButton,
  openUpload,
  toggleCreateSpaceOverlay,
  setOverNode,
  overSpaceId,
  toggleCreateCollectionOverlay,
  isDeleteSpaceCollectionOverlayOpen,
  toggleDeleteSpaceCollectionOverlay,
  deleteCollection,
  deleteSpace,
  ...props
}) => {
  React.useEffect(() => {
    fetchSpaces();
  }, [fetchSpaces]);

  const handleExpandSpace = React.useCallback(
    (node) => {
      if (isNil(collections[node.spaceId])) {
        fetchCollections({
          spaceId: node.spaceId,
          spaceNode: node,
        });
      } else {
        uiExpandSpace(node);
      }
    },
    [collections, uiExpandSpace, fetchCollections],
  );

  const handleSelectCollection = React.useCallback(
    (collId) => {
      selectCollection(collId);
      uiSelectCollection(collId);

      if (isNil(timeseriesListByColl[collId])) {
        fetchTimeseriesList(collId);
      }
    },
    [
      timeseriesListByColl,
      selectCollection,
      uiSelectCollection,
      fetchTimeseriesList,
    ],
  );

  const handleRefetchInformation = React.useCallback(() => {
    fetchSpaces();
    refetchCollections();
  }, [fetchSpaces, refetchCollections]);

  const handleShowInformation = React.useCallback(
    (selectedNode) => {
      const { type } = selectedNode;

      if (type === 'space') {
        fetchSpaceDetails(selectedNode);
        return;
      }

      if (type === 'collection') {
        fetchCollectionDetails(path(['collectionNode', 'collId'], selectedNode));
      }
    },
    [fetchSpaceDetails, fetchCollectionDetails],
  );

  const handleRefetchSpaceCollections = React.useCallback(
    (node) => {
      fetchCollections({
        spaceId: node.spaceId,
        spaceNode: node,
      });
    },
    [fetchCollections],
  );

  return (
    <SpaceBrowser
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isLoading={isSpaceListLoading}
      spaces={spaces}
      spaceDetails={spaceDetails}
      loadingSpaces={loadingSpaces}
      expandedSpaces={expandedSpaces}
      collections={collections}
      failedCollections={failedCollections}
      collectionDetails={collectionDetails}
      selectedSpaceId={selectedSpaceId}
      selectedCollectionID={selectedCollectionID}
      onExpandSpace={handleExpandSpace}
      onSelectSpace={uiSelectSpace}
      onCollapseSpace={uiCollapseSpace}
      onSelectCollection={handleSelectCollection}
      onShowInformation={handleShowInformation}
      onRefetchInformation={handleRefetchInformation}
      onRefetchSpaceCollections={handleRefetchSpaceCollections}
      showUploadButton={showUploadButton}
      openUpload={openUpload}
      toggleCreateSpaceOverlay={toggleCreateSpaceOverlay}
      setOverNode={setOverNode}
      overSpaceId={overSpaceId}
      toggleCreateCollectionOverlay={toggleCreateCollectionOverlay}
      isDeleteSpaceCollectionOverlayOpen={isDeleteSpaceCollectionOverlayOpen}
      toggleDeleteSpaceCollectionOverlay={toggleDeleteSpaceCollectionOverlay}
      deleteSpace={deleteSpace}
      deleteCollection={deleteCollection}
    />
  );
};

SpaceBrowserContainerBase.propTypes = {
  spaces: SpaceListType,
  spaceDetails: SpaceDetailsType,
  isSpaceListLoading: types.bool,
  loadingSpaces: types.objectOf(types.bool),
  expandedSpaces: types.objectOf(types.object),
  fetchSpaces: types.func.isRequired,
  fetchSpaceDetails: types.func.isRequired,
  collections: CollectionListMapType,
  failedCollections: CollectionErrorMapType,
  collectionDetails: CollectionDetailsType,
  fetchCollections: types.func.isRequired,
  fetchCollectionDetails: types.func.isRequired,
  refetchCollections: types.func.isRequired,
  selectCollection: types.func.isRequired,
  timeseriesListByColl: TimeseriesListMapType,
  fetchTimeseriesList: types.func.isRequired,
  selectedSpaceId: types.string,
  selectedCollectionID: types.string,
  overCollectionID: types.string,

  uiSelectSpace: types.func.isRequired,
  uiExpandSpace: types.func.isRequired,
  uiCollapseSpace: types.func.isRequired,
  uiSelectCollection: types.func.isRequired,
  showUploadButton: types.bool,
  openUpload: types.func,
  toggleCreateSpaceOverlay: types.func.isRequired,
  setOverNode: types.func.isRequired,
  overSpaceId: types.string,
  toggleCreateCollectionOverlay: types.func.isRequired,
  isDeleteSpaceCollectionOverlayOpen: types.bool,
  toggleDeleteSpaceCollectionOverlay: types.func.isRequired,
  deleteCollection: types.func.isRequired,
  deleteSpace: types.func.isRequired,
};

SpaceBrowserContainerBase.defaultProps = {
  isSpaceListLoading: false,
  showUploadButton: false,
  openUpload: undefined,
  overSpaceId: null,
  isDeleteSpaceCollectionOverlayOpen: false,
};

const mapStateToProps = (state) => {
  const {
    ui, spaces, collections, timeseries,
  } = state;
  return ({
    spaces: spaces.spaces,
    spaceDetails: spaces.spaceDetails,
    collections: collections.collections,
    failedCollections: collections.failedCollections,
    collectionDetails: collections.collectionDetails,
    timeseriesListByColl: timeseries.timeseriesListByColl,
    isSpaceListLoading: ui.timeseriesBrowser.isSpaceListLoading,
    loadingSpaces: ui.timeseriesBrowser.loadingSpaces,
    expandedSpaces: ui.timeseriesBrowser.expandedSpaces,
    selectedSpaceId: ui.timeseriesBrowser.selectedSpaceId,
    selectedCollectionID: ui.timeseriesBrowser.selectedCollectionID,
    overSpaceId: timeseriesBrowserOverSpaceIdSelector(state),
    isDeleteSpaceCollectionOverlayOpen: isDeleteSpaceCollectionOverlayOpenSelector(state),
  });
};

const mapDispatchToProps = {
  fetchSpaces: fetchSpacesAction,
  fetchSpaceDetails: fetchSpaceDetailsAction,
  fetchCollections: fetchCollectionsAction,
  fetchCollectionDetails: fetchCollectionDetailsAction,
  refetchCollections: refetchCollectionsAction,
  fetchTimeseriesList: fetchTimeseriesListAction,
  selectCollection: selectCollectionAction,
  uiSelectSpace: timeseriesBrowserSelectSpace,
  uiSelectCollection: timeseriesBrowserSelectCollection,
  uiExpandSpace: timeseriesBrowserExpandSpace,
  uiCollapseSpace: timeseriesBrowserCollapseSpace,
  toggleCreateSpaceOverlay: toggleCreateSpaceOverlayAction,
  setOverNode: timeseriesBrowserSetOverNodeIDAction,
  toggleCreateCollectionOverlay: toggleCreateCollectionOverlayAction,
  toggleDeleteSpaceCollectionOverlay: toggleDeleteSpaceCollectionOverlayAction,
  deleteCollection: deleteCollectionAction,
  deleteSpace: deleteSpaceAction,
};

const SpaceBrowserContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SpaceBrowserContainerBase);

// eslint-disable-next-line import/prefer-default-export
export { SpaceBrowserContainer as SpaceBrowser };
