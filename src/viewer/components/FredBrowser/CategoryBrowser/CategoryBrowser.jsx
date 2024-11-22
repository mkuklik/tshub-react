/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import {
  compose, path, isNil, prop, has,
} from 'ramda';
import {
  Tree, Popover, Position, Tooltip, Icon, AnchorButton,
} from '@blueprintjs/core';

import { Header } from '../Common/Header';
import { Loadable } from '../Common/Loadable';
import { ContentContainer } from '../FredBrowser.Components';
import {
  Container,
  CollectionNodeLabel,
  // InformationContent,
  // SpaceLoadingIndicator,
  // RetryFetchCollectionsButton,
} from './CategoryBrowser.Components';

const createNode = (
  categoryId,
  categories,
  selectedCategoryId,
  expandedCategories,
  depth,
) => {
  if (isNil(categories)) {
    return undefined;
  }

  if (categories.length === 0) {
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

  const category = prop(categoryId, categories);
  if (category) {
    const childNodes = prop('children', category)?.flatMap((childId) => createNode(childId, categories, selectedCategoryId,
      expandedCategories, depth + 1));
    return {
      id: categoryId,
      categoryId,
      label: category.name,
      // label: (
      //   <CollectionNodeLabel>{category.name}</CollectionNodeLabel>
      // ),
      // secondaryLabel: (
      //   <>
      //     {loadingSpaces[spaceId] && (
      //       <SpaceLoadingIndicator size={20} />
      //     )}
      //     {
      //     (overSpaceId === spaceId && expandedSpaces[spaceId]) && (
      //       <Tooltip content="Create a new collection" position={Position.RIGHT}>
      //         <Icon icon="plus" onClick={() => toggleCreateCollectionOverlay(spaceId)} />
      //       </Tooltip>
      //     )
      //     }
      //   </>),
      depth,
      icon: 'folder-close',
      hasCaret: true,
      isExpanded: has(categoryId, expandedCategories),
      isSelected: categoryId === selectedCategoryId,
      childNodes,
    };
  }
  return null;
};

const CategoryBrowserBase = ({
  className,
  categories,
  selectedCategoryId,
  onSelectCategory,
  onExpandCategory,
  onCollapseCategory,
  setOverNode,
  expandedCategories,
  toggleFredBrowserConfigOverlay,
}) => {
  const handleExpandCategory = React.useCallback(
    (node) => {
      onExpandCategory(node.categoryId);
    },
    [onExpandCategory],
  );

  const handleCollapseCategory = React.useCallback(
    (node) => {
      onCollapseCategory(node.categoryId);
    },
    [onCollapseCategory],
  );

  const handleNodeClick = React.useCallback((node) => {
    console.log("onSelectCategory(node.categoryId); = ", node.categoryId);
    onSelectCategory(node.categoryId);
    // setSelectedNode(node);
  }, [onSelectCategory]);

  const handleNodeDoubleClick = React.useCallback((node) => {
    if (node.type !== 'space') {
      return;
    }

    // eslint-disable-next-line no-unused-expressions
    expandedCategories[node.spaceId]
      ? onCollapseCategory(node)
      : onExpandCategory(node);
  }, [expandedCategories, onExpandCategory, onCollapseCategory]);

  // const handleInformationButtonClick = React.useCallback(() => {
  //   onShowInformation(selectedNode);
  // }, [selectedNode]);

  // const handleRetryFetchCollectionsButtonClick = React.useCallback((node) => () => {
  //   onRefetchSpaceCollections({
  //     ...node,
  //     childNodes: [],
  //   });
  // }, [onRefetchSpaceCollections]);

  // const handleCollectionUploadClick = React.useCallback(() => {
  //   openUpload();
  // }, [openUpload]);

  // const handleToggleCreateSpaceOverlay = React.useCallback(() => {
  //   toggleCreateSpaceOverlay();
  // }, [toggleFredBrowserConfigOverlay]);

  const handleToggleConfigOverlay = React.useCallback(() => {
    toggleFredBrowserConfigOverlay();
  }, [toggleFredBrowserConfigOverlay]);

  // const handleDeleteSpaceCollectionDialogConfirm = React.useCallback(() => {
  //   if (isNil(selectedNode)) {
  //     console.error('no selected node');
  //     return;
  //   }
  //   if (selectedNode.type === 'space') {
  //     deleteSpace(selectedNode.spaceId);
  //   } else if (selectedNode.type === 'collection') {
  //     deleteCollection(selectedNode.collId);
  //   } else {
  //     console.error('Unknown node.type in handleDeleteSpaceCollectionDialogConfirm, ', selectedNode.type);
  //   }
  //   toggleDeleteSpaceCollectionOverlay();
  // }, [deleteSpace, deleteCollection, selectedNode, toggleDeleteSpaceCollectionOverlay]);

  const tree = React.useMemo(() => { // ([])
    const topNodes = [];
    console.log('tree categories: ', categories);
    if (isNil(categories) || (categories.length === 0)) return [];
    path([0, 'children'], categories).forEach((id) => topNodes.push(createNode(id, categories,
      selectedCategoryId,
      expandedCategories,
      0)));
    return topNodes;

    // path([0, children], categories).children.forEach((x) => queue.push(x));
    // while (queue) {
    //   var id = queue.shift();

    // }
    // queue.push(2);         // queue is now [2]
    // queue.push(5);         // queue is now [2, 5]
    // var i = queue.shift(); // queue is now [5]
    // alert(i);              // displays 2
    // spaces.map(({ spaceId, name }) => {
    //   const spaceCollections = collections[spaceId];
    //   const spaceNode = {
    //     id: spaceId,
    //     spaceId,
    //     label: name,
    //     secondaryLabel: (
    //       <>
    //         {loadingSpaces[spaceId] && (
    //           <SpaceLoadingIndicator size={20} />
    //         )}
    //         {
    //         (overSpaceId === spaceId && expandedSpaces[spaceId]) && (
    //           <Tooltip content="Create a new collection" position={Position.RIGHT}>
    //             <Icon icon="plus" onClick={() => toggleCreateCollectionOverlay(spaceId)} />
    //           </Tooltip>
    //         )
    //         }
    //       </>),
    //     type: 'space',
    //     icon: 'folder-close',
    //     hasCaret: true,
    //     isExpanded: expandedSpaces[spaceId],
    //     isSelected: spaceId === selectedSpaceId,
    //   };

    //   const failedNodeList = [{
    //     id: 'failed-node',
    //     spaceId: 'failed-node',
    //     label: (
    //       <CollectionNodeLabel.Error>
    //         Error fetching collections

    //         <RetryFetchCollectionsButton
    //           onClick={handleRetryFetchCollectionsButtonClick(spaceNode)}
    //         >
    //           Retry
    //         </RetryFetchCollectionsButton>
    //       </CollectionNodeLabel.Error>
    //     ),
    //   }];

    //   const childNodes = failedCollections[spaceId]
    //     ? failedNodeList
    //     : createChildNodes(spaceCollections, selectedCollectionID);

    //   return {
    //     ...spaceNode,
    //     childNodes,
    //   };
    // })
  // )
  }, [
    categories,
    selectedCategoryId,
    expandedCategories,
    // spaces,
    // collections,
    // failedCollections,
    // loadingSpaces,
    // expandedSpaces,
    // selectedSpaceId,
    // selectedCollectionID,
    // overSpaceId,
  ]);
  return (
    <Container className={className}>
      <Header>
        <Header.Title>
          Fred Browser
        </Header.Title>

        <Header.ActionButtons>
          <Tooltip content="Config" position={Position.RIGHT}>
            <AnchorButton
              minimal
              icon="settings"
              onClick={handleToggleConfigOverlay}
            />
          </Tooltip>
          {/*
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

          <Tooltip content="Delete space/collection">
            <AnchorButton
              minimal
              icon="trash"
              disabled={isNil(selectedNode)}
              onClick={toggleDeleteSpaceCollectionOverlay}
            />
          </Tooltip> */}
        </Header.ActionButtons>
      </Header>

      <ContentContainer>
        <Tree
          contents={tree}
          onNodeExpand={handleExpandCategory}
          onNodeDoubleClick={handleNodeDoubleClick}
          onNodeCollapse={handleCollapseCategory}
          onNodeClick={handleNodeClick}
          onNodeMouseEnter={(data) => setOverNode(data)}
          onNodeMouseLeave={() => setOverNode(null)}
        />
      </ContentContainer>
    </Container>
  );
};

CategoryBrowserBase.propTypes = {
  className: types.string,
  categories: types.object, // TODO type
  selectedCategoryId: types.number,
  onSelectCategory: types.func.isRequired,
  onExpandCategory: types.func.isRequired,
  onCollapseCategory: types.func.isRequired,
  setOverNode: types.func.isRequired,
  expandedCategories: types.objectOf(types.object), // TODO type
  // config
  toggleFredBrowserConfigOverlay: types.func.isRequired,

  // spaces: SpaceListType,
  // spaceDetails: SpaceDetailsType,
  // collections: CollectionListMapType,
  // failedCollections: CollectionErrorMapType,
  // collectionDetails: CollectionDetailsType,
  // TODO: describe this type
  // loadingSpaces: types.objectOf(types.bool),
  // expandedSpaces: types.objectOf(types.object),
  // selectedSpaceId: types.string,
  // selectedCollectionID: types.string,
  // overSpaceId: types.string,
  // setOverNode: types.func.isRequired,
  // onExpandSpace: types.func.isRequired,
  // onCollapseSpace: types.func.isRequired,
  // onSelectSpace: types.func,
  // onSelectCollection: types.func,
  // onShowInformation: types.func,
  // onRefetchInformation: types.func,
  // onRefetchSpaceCollections: types.func,
  // className: types.string,
  // showUploadButton: types.bool,
  // openUpload: types.func,
  // toggleFredBrowserConfigOverlay: types.func.isRequired,
  // toggleCreateCollectionOverlay: types.func.isRequired,
  // isDeleteSpaceCollectionOverlayOpen: types.bool,
  // toggleDeleteSpaceCollectionOverlay: types.func.isRequired,
  // deleteSpace: types.func.isRequired,
  // deleteCollection: types.func.isRequired,
  //
};

CategoryBrowserBase.defaultProps = {
  className: '',
  categories: [],
  selectedCategoryId: undefined,
  // spaces: [],
  // spaceDetails: {},
  // collections: {},
  // failedCollections: {},
  // collectionDetails: {},
  // expandedSpaces: [],
  // showUploadButton: false,
  // openUpload: undefined,
};

const CategoryBrowser = compose(
  Loadable,
)(CategoryBrowserBase);

// eslint-disable-next-line import/prefer-default-export
export { CategoryBrowser };
