/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  map, sort, isNil, has, path,
} from 'ramda';
import moment from 'moment';
import { Icon } from '@blueprintjs/core';
import {
  loadMoreVintagesAction,
  fetchVintageListAction,
  refreshVintageListAction,
} from '../actions/vintagesActions';
import { vintagesListSelector } from '../selectors/vintagesSelectors';
import { VintageType } from '../types/VintageTypes';
import VintageListItem from './VintageListItem';
import { Container, RefreshDiv, HeaderContainer } from './VintageList.Containers';
import { addRefSeriesToGraphAction } from '../../viewer/actions/graphActions';
import { timeseriesSelector, timeseriesNameSelector } from '../../viewer/selectors/timeseries';


const ReloadButton = (props) => {
  const { collId, tsid, handle } = props;
  return (
    <RefreshDiv>
      <Icon icon="refresh" onClick={() => handle({ collId, tsid })} />
    </RefreshDiv>
  );
};

ReloadButton.propTypes = {
  collId: types.string.isRequired,
  tsid: types.string.isRequired,
  handle: types.func.isRequired,
};


class VintageList extends React.Component {
  componentDidMount() {
    const { collId, tsid, fetchVintageList } = this.props;
    fetchVintageList({
      collId, tsid,
    });
  }

  componentDidUpdate(prevProps) {
    const { collId, tsid, fetchVintageList, vintageObjects } = this.props;
    console.log("vintageObjects", vintageObjects);
    if (tsid !== prevProps.tsid && !isNil(tsid)) {
      fetchVintageList({
        collId, tsid, limit: 20, offset: 0,
      });
    }
  }

  handleLoadMore = (event) => {
    event.preventDefault();
    this.props.loadMoreUploads();
  }

  handleAddToGraph = (realtime, vintageName) => () => {
    const {
      tsid, collId, addRefSeriesToGraph, tsName
    } = this.props;
    addRefSeriesToGraph({
      collId,
      tsid,
      realtime,
      name: !isNil(tsName) ? `${tsName} (${vintageName})` : undefined,
    });
  };

  handleAddToNewGraph = (realtime, vintageName) => () => {
    const {
      tsid, collId, gid, tsName,
    } = this.props;
    const name = !isNil(tsName) ? `${tsName} (${vintageName})` : undefined;
    this.props.addNewSeriesToClearGraph({
      gid,
      collId,
      tsid,
      realtime,
      name,
    });
  };


  render() {
    const {
      collId,
      tsid,
      vintageObjects,
      refreshVintageList,
    } = this.props;

    const sortedItems = vintageObjects;
    // sort(
    //   (x, y) => ((moment(y.updatedOn).isAfter(moment(x.updatedOn))) ? 1 : -1),
    //   vintageObjects,
    // );

    const rendered_vintages = map((item) => (
      <VintageListItem
        key={item.vid}
        item={item}
        handleAddToGraph={this.handleAddToGraph}
      />
    ), sortedItems);

    if (isNil(rendered_vintages) || (has('length', rendered_vintages) && rendered_vintages.length === 0)) {
      return (
        <Container>
          <HeaderContainer>
            <h3>Vintages</h3>
            <ReloadButton collId={collId} tsid={tsid} handle={refreshVintageList} />
          </HeaderContainer>

          <p>There is no vintages for this series</p>
        </Container>
      );
    }
    return (
      <Container>
        <HeaderContainer>
          <h3>Vintages</h3>
          <ReloadButton collId={collId} tsid={tsid} handle={refreshVintageList} />
        </HeaderContainer>
        {rendered_vintages}
        {/* <div><a href="#" onClick={this.handleLoadMore}>load more</a></div> */}
      </Container>
    );
  }
}

VintageList.defaultProps = {
  vintageObjects: [],
  tsName: undefined,
};

VintageList.propTypes = {
  collId: types.string.isRequired,
  tsid: types.string.isRequired,
  tsName: types.string,
  vintageObjects: types.arrayOf(VintageType),
  refreshVintageList: types.func.isRequired,
  fetchVintageList: types.func.isRequired,
  loadMoreUploads: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  vintageObjects: vintagesListSelector(ownProps.tsid)(state),
  tsName: timeseriesNameSelector(ownProps.collId, ownProps.tsid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadMoreUploads: loadMoreVintagesAction,
  refreshVintageList: refreshVintageListAction,
  fetchVintageList: fetchVintageListAction,
  addRefSeriesToGraph: addRefSeriesToGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VintageList);
