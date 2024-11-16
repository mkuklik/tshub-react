/* eslint-disable react/require-default-props */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import {
  compose,
} from 'ramda';

import {
  fredBrowserToggleConfigOverlayAction,
  fredBrowserSelectCategoryAction,
  fredBrowserExpandCategoryAction,
  fredBrowserCollapseCategoryAction,
  fredBrowserSetCategoryLoadingAction,
} from '../../../actions/uiActions';

import {
  saveFredBrowserConfigAction,
  fetchFredCategoryAction,
  fetchFredCategoryTimeseriesAction,
} from '../../../actions/fredActions';

import { CategoryBrowser } from './CategoryBrowser';
import {
  isFredBrowserConfigOverlayOpenSelector,
} from '../../../selectors/ui';

const CategoryBrowserContainerBase = ({
  categories,
  series,
  selectedCategoryId,
  expandedCategories,
  fetchFredCategory,
  fetchFredCategoryTimeseries,

  isCategoryListLoading,
  uiSelectCategory,
  uiExpandCategory,
  uiCollapseCategory,
  uiToggleConfigOverlay,
  setOverNode,
  // spaces,
  // spaceDetails,
  // isSpaceListLoading,
  // loadingSpaces,
  // expandedSpaces,
  // fetchSpaces,
  // fetchSpaceDetails,
  // collections,
  // failedCollections,
  // collectionDetails,
  // fetchCollections,
  // fetchCollectionDetails,
  // refetchCollections,
  // selectCollection,
  // timeseriesListByColl,
  // fetchTimeseriesList,
  // selectedSpaceId,
  // selectedCollectionID,

  // uiSelectSpace,
  // uiExpandSpace,
  // uiCollapseSpace,
  // uiSelectCollection,
  // showUploadButton,
  // openUpload,
  // toggleCreateSpaceOverlay,
  // setOverNode,
  // overSpaceId,
  // toggleCreateCollectionOverlay,
  // isDeleteSpaceCollectionOverlayOpen,
  // toggleDeleteSpaceCollectionOverlay,
  // deleteCollection,
  // deleteSpace,
  ...props
}) => {
  React.useEffect(() => {
    fetchFredCategory(0);
  }, [fetchFredCategory]);

  // const handleRefetchInformation = React.useCallback(() => {
  //   fetchSpaces();
  //   refetchCollections();
  // }, [fetchSpaces, refetchCollections]);

  // const handleShowInformation = React.useCallback(
  //   (selectedNode) => {
  //     const { type } = selectedNode;

  //     if (type === 'space') {
  //       fetchSpaceDetails(selectedNode);
  //       return;
  //     }

  //     if (type === 'collection') {
  //       fetchCollectionDetails(path(['collectionNode', 'collId'], selectedNode));
  //     }
  //   },
  //   [fetchSpaceDetails, fetchCollectionDetails],
  // );

  // const handleRefetchSpaceCollections = React.useCallback(
  //   (node) => {
  //     fetchCollections({
  //       spaceId: node.spaceId,
  //       spaceNode: node,
  //     });
  //   },
  //   [fetchCollections],
  // );

  return (
    <CategoryBrowser
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      isLoading={isCategoryListLoading}
      onExpandCategory={uiExpandCategory}
      onSelectCategory={uiSelectCategory}
      onCollapseCategory={uiCollapseCategory}
      setOverNode={setOverNode}
      toggleFredBrowserConfigOverlay={uiToggleConfigOverlay}
      selectedCategoryId={selectedCategoryId}
      expandedCategories={expandedCategories}
      categories={categories}
      // spaces={spaces}
      // spaceDetails={spaceDetails}
      // loadingSpaces={loadingSpaces}
      // expandedSpaces={expandedSpaces}
      // collections={collections}
      // failedCollections={failedCollections}
      // collectionDetails={collectionDetails}
      // selectedSpaceId={selectedSpaceId}
      // selectedCollectionID={selectedCollectionID}
      // onExpandSpace={handleExpandSpace}
      // onSelectSpace={uiSelectSpace}
      // onCollapseSpace={uiCollapseSpace}
      // onSelectCollection={handleSelectCollection}
      // onShowInformation={handleShowInformation}
      // onRefetchInformation={handleRefetchInformation}
      // onRefetchSpaceCollections={handleRefetchSpaceCollections}
      // showUploadButton={showUploadButton}
      // openUpload={openUpload}
      // toggleCreateSpaceOverlay={toggleCreateSpaceOverlay}
      // setOverNode={setOverNode}
      // overSpaceId={overSpaceId}
      // toggleCreateCollectionOverlay={toggleCreateCollectionOverlay}
      // isDeleteSpaceCollectionOverlayOpen={isDeleteSpaceCollectionOverlayOpen}
      // toggleDeleteSpaceCollectionOverlay={toggleDeleteSpaceCollectionOverlay}
      // deleteSpace={deleteSpace}
      // deleteCollection={deleteCollection}

    />
  );
};

CategoryBrowserContainerBase.propTypes = {
  // spaces: SpaceListType,
  // spaceDetails: SpaceDetailsType,
  // isSpaceListLoading: types.bool,
  // loadingSpaces: types.objectOf(types.bool),
  // expandedSpaces: types.objectOf(types.object),
  // fetchSpaces: types.func.isRequired,
  // fetchSpaceDetails: types.func.isRequired,
  // collections: CollectionListMapType,
  // failedCollections: CollectionErrorMapType,
  // collectionDetails: CollectionDetailsType,
  // fetchCollections: types.func.isRequired,
  // fetchCollectionDetails: types.func.isRequired,
  // refetchCollections: types.func.isRequired,
  // selectCollection: types.func.isRequired,
  // timeseriesListByColl: TimeseriesListMapType,
  // fetchTimeseriesList: types.func.isRequired,
  // selectedSpaceId: types.string,
  // selectedCollectionID: types.string,
  // overCollectionID: types.string,

  // uiSelectSpace: types.func.isRequired,
  // uiExpandSpace: types.func.isRequired,
  // uiCollapseSpace: types.func.isRequired,
  // uiSelectCollection: types.func.isRequired,
  // showUploadButton: types.bool,
  // openUpload: types.func,
  // toggleCreateSpaceOverlay: types.func.isRequired,
  // setOverNode: types.func.isRequired,
  // overSpaceId: types.string,
  // toggleCreateCollectionOverlay: types.func.isRequired,
  // isDeleteSpaceCollectionOverlayOpen: types.bool,
  // toggleDeleteSpaceCollectionOverlay: types.func.isRequired,
  // deleteCollection: types.func.isRequired,
  // deleteSpace: types.func.isRequired,
  //
  // loadingCategories: types.bool,
  //
  categories: types.object, // TODO
  series: types.object, // TODO
  selectedCategoryId: types.string,
  expandedCategories: types.objectOf(types.object),
  isFredBrowserConfigOverlayOpen: types.bool,
  isCategoryListLoading: types.bool,
  fredBrowserSetCategoryListLoading: types.func.isRequired,
  fetchFredCategory: types.func.isRequired,
  fetchFredCategoryTimeseries: types.func.isRequired,

  uiSelectCategory: types.func.isRequired,
  uiExpandCategory: types.func.isRequired,
  uiCollapseCategory: types.func.isRequired,
  uiToggleConfigOverlay: types.func.isRequired,
  uiSetLoadingCategory: types.func.isRequired,
  setOverNode: types.func,
};

CategoryBrowserContainerBase.defaultProps = {
  // isSpaceListLoading: false,
  // showUploadButton: false,
  // openUpload: undefined,
  // overSpaceId: null,
  // isDeleteSpaceCollectionOverlayOpen: false,
  isCategoryListLoading: false,
  isFredBrowserConfigOverlayOpen: false,
  setOverNode: () => {},
};

const mapStateToProps = (state) => {
  const {
    ui,
  } = state;
  return ({
    // spaces: spaces.spaces,
    // spaceDetails: spaces.spaceDetails,
    // collections: collections.collections,
    // failedCollections: collections.failedCollections,
    // collectionDetails: collections.collectionDetails,
    // timeseriesListByColl: timeseries.timeseriesListByColl,
    // isSpaceListLoading: ui.timeseriesBrowser.isSpaceListLoading,
    // loadingSpaces: ui.timeseriesBrowser.loadingSpaces,
    // expandedSpaces: ui.timeseriesBrowser.expandedSpaces,
    // selectedSpaceId: ui.timeseriesBrowser.selectedSpaceId,
    // selectedCollectionID: ui.timeseriesBrowser.selectedCollectionID,
    // overSpaceId: timeseriesBrowserOverSpaceIdSelector(state),
    // isDeleteSpaceCollectionOverlayOpen: isDeleteSpaceCollectionOverlayOpenSelector(state),
    //
    categories: state.fred.categories,
    series: state.fred.series,
    selectedCategoryId: ui.fredBrowser.selectedCategoryId,
    // fredTimesries: fredBrowser.timeseries,
    isCategoryListLoading: ui.fredBrowser.isCategoryListLoading,
    isFredBrowserConfigOverlayOpen: isFredBrowserConfigOverlayOpenSelector(state),
    expandedCategories: ui.fredBrowser.expandedCategories,
  });
};

const mapDispatchToProps = {
  // fetchSpaces: fetchSpacesAction,
  // fetchSpaceDetails: fetchSpaceDetailsAction,
  // fetchCollections: fetchCollectionsAction,
  // fetchCollectionDetails: fetchCollectionDetailsAction,
  // refetchCollections: refetchCollectionsAction,
  // fetchTimeseriesList: fetchTimeseriesListAction,
  // selectCollection: selectCollectionAction,
  // uiSelectSpace: timeseriesBrowserSelectSpace,
  // uiSelectCollection: timeseriesBrowserSelectCollection,
  // uiExpandSpace: timeseriesBrowserExpandSpace,
  // uiCollapseSpace: timeseriesBrowserCollapseSpace,
  // toggleCreateSpaceOverlay: toggleCreateSpaceOverlayAction,
  // setOverNode: timeseriesBrowserSetOverNodeIDAction,
  // toggleCreateCollectionOverlay: toggleCreateCollectionOverlayAction,
  // toggleDeleteSpaceCollectionOverlay: toggleDeleteSpaceCollectionOverlayAction,
  // deleteCollection: deleteCollectionAction,
  // deleteSpace: deleteSpaceAction,
  //
  fetchFredCategory: fetchFredCategoryAction,
  fetchFredCategoryTimeseries: fetchFredCategoryTimeseriesAction,
  saveConfig: saveFredBrowserConfigAction,
  // UI
  uiSelectCategory: fredBrowserSelectCategoryAction,
  uiExpandCategory: fredBrowserExpandCategoryAction,
  uiCollapseCategory: fredBrowserCollapseCategoryAction,
  uiToggleConfigOverlay: fredBrowserToggleConfigOverlayAction,
  uiSetLoadingCategory: fredBrowserSetCategoryLoadingAction,
  // setOverNode: TODO
};

const CategoryBrowserContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CategoryBrowserContainerBase);

// eslint-disable-next-line import/prefer-default-export
export { CategoryBrowserContainer as CategoryBrowser };
