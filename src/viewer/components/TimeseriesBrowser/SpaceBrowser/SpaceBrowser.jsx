/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import { compose, path, isNil } from 'ramda';
import {
  Tree, Popover, Position, Tooltip, Icon, AnchorButton,
} from '@blueprintjs/core';

import {
  SpaceListType,
  SpaceDetailsType,
} from '../../../types/Spaces';

import {
  CollectionListMapType,
  CollectionErrorMapType,
  CollectionDetailsType,
} from '../../../types/Collections';

import { Header } from '../Common/Header';
import { Loadable } from '../Common/Loadable';
import { ContentContainer } from '../TimeseriesBrowser.Components';
import { SpaceDetails } from './SpaceDetails/SpaceDetails';
import { CollectionDetails } from './CollectionDetails/CollectionDetails';
import SpaceBrowserConfirmDelete from './SpaceBrowserConfirmDelete';
import {
  Container,
  CollectionNodeLabel,
  InformationContent,
  SpaceLoadingIndicator,
  RetryFetchCollectionsButton,
} from './SpaceBrowser.Components';

const createChildNodes = (
  collections,
  selectedCollectionID,
) => {
  if (isNil(collections)) {
    return undefined;
  }

  if (collections.length === 0) {
    return [{
      id: 'empty-node',
      spaceId: 'empty-node',
      label: (
        <CollectionNodeLabel.Empty>
          There is no collections yet
        </CollectionNodeLabel.Empty>
      ),
    }];
  }

  if (collections.length > 0) {
    return collections.map(({ collId, name }) => ({
      id: collId,
      collId,
      icon: 'properties',
      type: 'collection',
      isSelected: collId === selectedCollectionID,
      label: (
        <CollectionNodeLabel>{name}</CollectionNodeLabel>
      ),
    }));
  }

  return null;
};

const SpaceBrowserBase = ({
  spaces,
  spaceDetails,
  collections,
  failedCollections,
  collectionDetails,
  loadingSpaces,
  expandedSpaces,
  selectedSpaceId,
  selectedCollectionID,
  overSpaceId,
  setOverNode,
  onExpandSpace,
  onCollapseSpace,
  onSelectSpace,
  onSelectCollection,
  onShowInformation,
  onRefetchInformation,
  onRefetchSpaceCollections,
  className,
  showUploadButton,
  openUpload,
  toggleCreateSpaceOverlay,
  toggleCreateCollectionOverlay,
  deleteSpace,
  deleteCollection,
  isDeleteSpaceCollectionOverlayOpen,
  toggleDeleteSpaceCollectionOverlay,
}) => {
  const [selectedNode, setSelectedNode] = React.useState(null);
  const selectedNodeType = path(['type'], selectedNode);

  const handleNodeClick = React.useCallback((node) => {
    if (node.type === 'space') {
      onSelectSpace(node.spaceId);
    }

    if (node.type === 'collection') {
      onSelectCollection(node.collId);
    }

    setSelectedNode(node);
  }, [onSelectSpace, onSelectCollection]);

  const handleNodeDoubleClick = React.useCallback((node) => {
    if (node.type !== 'space') {
      return;
    }

    // eslint-disable-next-line no-unused-expressions
    expandedSpaces[node.spaceId]
      ? onCollapseSpace(node)
      : onExpandSpace(node);
  }, [expandedSpaces, onExpandSpace, onCollapseSpace]);

  const handleInformationButtonClick = React.useCallback(() => {
    onShowInformation(selectedNode);
  }, [selectedNode]);

  const handleRetryFetchCollectionsButtonClick = React.useCallback((node) => () => {
    onRefetchSpaceCollections({
      ...node,
      childNodes: [],
    });
  }, [onRefetchSpaceCollections]);

  const handleCollectionUploadClick = React.useCallback(() => {
    openUpload();
  }, [openUpload]);

  const handleToggleCreateSpaceOverlay = React.useCallback(() => {
    toggleCreateSpaceOverlay();
  }, [toggleCreateSpaceOverlay]);

  const handleDeleteSpaceCollectionDialogConfirm = React.useCallback(() => {
    if (isNil(selectedNode)) {
      console.error('no selected node');
      return;
    }
    if (selectedNode.type === 'space') {
      deleteSpace(selectedNode.spaceId);
    } else if (selectedNode.type === 'collection') {
      deleteCollection(selectedNode.collId);
    } else {
      console.error('Unknown node.type in handleDeleteSpaceCollectionDialogConfirm, ', selectedNode.type);
    }
    toggleDeleteSpaceCollectionOverlay();
  }, [deleteSpace, deleteCollection, selectedNode, toggleDeleteSpaceCollectionOverlay]);

  const tree = React.useMemo(() => (
    spaces.map(({ spaceId, name }) => {
      const spaceCollections = collections[spaceId];
      const spaceNode = {
        id: spaceId,
        spaceId,
        label: name,
        secondaryLabel: (
          <>
            {loadingSpaces[spaceId] && (
              <SpaceLoadingIndicator size={20} />
            )}
            {
            (overSpaceId === spaceId && expandedSpaces[spaceId]) && (
              <Tooltip content="Create a new collection" position={Position.RIGHT}>
                <Icon icon="plus" onClick={() => toggleCreateCollectionOverlay(spaceId)} />
              </Tooltip>
            )
            }
          </>),
        type: 'space',
        icon: 'folder-close',
        hasCaret: true,
        isExpanded: expandedSpaces[spaceId],
        isSelected: spaceId === selectedSpaceId,
      };

      const failedNodeList = [{
        id: 'failed-node',
        spaceId: 'failed-node',
        label: (
          <CollectionNodeLabel.Error>
            Error fetching collections

            <RetryFetchCollectionsButton
              onClick={handleRetryFetchCollectionsButtonClick(spaceNode)}
            >
              Retry
            </RetryFetchCollectionsButton>
          </CollectionNodeLabel.Error>
        ),
      }];

      const childNodes = failedCollections[spaceId]
        ? failedNodeList
        : createChildNodes(spaceCollections, selectedCollectionID);

      return {
        ...spaceNode,
        childNodes,
      };
    })
  ), [
    spaces,
    collections,
    failedCollections,
    loadingSpaces,
    expandedSpaces,
    selectedSpaceId,
    selectedCollectionID,
    overSpaceId,
  ]);

  return (
    <Container className={className}>
      <Header>
        <Header.Title>
          Browser
        </Header.Title>

        <Header.ActionButtons>
          <Tooltip content="Create new space" position={Position.RIGHT}>
            <AnchorButton
              minimal
              icon="folder-new"
              onClick={handleToggleCreateSpaceOverlay}
            />
          </Tooltip>
          { showUploadButton
          && (
          <AnchorButton
            minimal
            icon="upload"
            disabled={isNil(selectedCollectionID)}
            onClick={handleCollectionUploadClick}
          />
          )}
          {onShowInformation && (
            <Popover position={Position.BOTTOM}>
              <AnchorButton
                minimal
                icon="info-sign"
                disabled={isNil(selectedNode)}
                onClick={handleInformationButtonClick}
              />

              <InformationContent>
                {selectedNodeType === 'space' && spaceDetails && (
                  <SpaceDetails information={spaceDetails} />
                )}

                {selectedNodeType === 'collection' && collectionDetails && (
                  <CollectionDetails information={collectionDetails} />
                )}
              </InformationContent>
            </Popover>
          )}

          {onRefetchInformation && (
            <AnchorButton minimal icon="refresh" onClick={onRefetchInformation} />
          )}

          <SpaceBrowserConfirmDelete
            selectedNode={selectedNode}
            handleConfirm={handleDeleteSpaceCollectionDialogConfirm}
            handleClose={toggleDeleteSpaceCollectionOverlay}
            visible={isDeleteSpaceCollectionOverlayOpen}
          />

          <Tooltip content="Delete space/collection">
            <AnchorButton
              minimal
              icon="trash"
              disabled={isNil(selectedNode)}
              onClick={toggleDeleteSpaceCollectionOverlay}
            />
          </Tooltip>
        </Header.ActionButtons>
      </Header>

      <ContentContainer>
        <Tree
          contents={tree}
          onNodeExpand={onExpandSpace}
          onNodeDoubleClick={handleNodeDoubleClick}
          onNodeCollapse={onCollapseSpace}
          onNodeClick={handleNodeClick}
          onNodeMouseEnter={(data) => setOverNode(data)}
          onNodeMouseLeave={() => setOverNode(null)}
        />
      </ContentContainer>
    </Container>
  );
};

SpaceBrowserBase.propTypes = {
  spaces: SpaceListType,
  spaceDetails: SpaceDetailsType,
  collections: CollectionListMapType,
  failedCollections: CollectionErrorMapType,
  collectionDetails: CollectionDetailsType,
  // TODO: describe this type
  loadingSpaces: types.objectOf(types.bool),
  expandedSpaces: types.objectOf(types.object),
  selectedSpaceId: types.string,
  selectedCollectionID: types.string,
  overSpaceId: types.string,
  setOverNode: types.func.isRequired,
  onExpandSpace: types.func.isRequired,
  onCollapseSpace: types.func.isRequired,
  onSelectSpace: types.func,
  onSelectCollection: types.func,
  onShowInformation: types.func,
  onRefetchInformation: types.func,
  onRefetchSpaceCollections: types.func,
  className: types.string,
  showUploadButton: types.bool,
  openUpload: types.func,
  toggleCreateSpaceOverlay: types.func.isRequired,
  toggleCreateCollectionOverlay: types.func.isRequired,
  isDeleteSpaceCollectionOverlayOpen: types.bool,
  toggleDeleteSpaceCollectionOverlay: types.func.isRequired,
  deleteSpace: types.func.isRequired,
  deleteCollection: types.func.isRequired,
};

SpaceBrowserBase.defaultProps = {
  spaces: [],
  spaceDetails: {},
  collections: {},
  failedCollections: {},
  collectionDetails: {},
  expandedSpaces: [],
  className: '',
  showUploadButton: false,
  openUpload: undefined,
};

const SpaceBrowser = compose(
  Loadable,
)(SpaceBrowserBase);

// eslint-disable-next-line import/prefer-default-export
export { SpaceBrowser };
