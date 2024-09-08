
/* eslint-disable max-classes-per-file */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  path, isNil, has, findIndex, find, propEq,
} from 'ramda';
import types from 'prop-types';
import { Callout, Button } from '@blueprintjs/core';
import { Link } from '../../analytics/components/containers';
import { openTimeSeriesBrowserAction } from '../../action/workbookActions';
import { collectionSummarySelector } from '../../../viewer/selectors/collections';
import { timeseriesBrowserSelectedCollectionIDSelector, timeseriesBrowserSelectedTimeseriesSelector } from '../../../viewer/selectors/ui';
import { CollectionType } from '../../../viewer/types/Collections';
import { spaceSelector } from '../../../viewer/selectors/spaces';
import { SpaceType } from '../../../viewer/types/Spaces';
import {
  MainPanel, NoSelectionDiv, Header, SeriesSelectorDiv, BreadCrumbs,
} from './SeriesInfoTab.Containers';
import { initiateVintagesAction } from '../../../vintages/actions';
import VintageList from '../../../vintages/components/VintageList';
import { seriesInfoSaveActiveSeriesAction } from '../../action/uiActions';
import { seriesInfoActiveSeriesSelector } from '../../selectors/uiSelectors';
import { timeseriesSelector } from '../../../viewer/selectors/timeseries';
import { TimeseriesType } from '../../../viewer/types/Timeseries';
import { SeriesDetails } from './SeriesDetails';

class SeriesInfoTab extends React.PureComponent {
  componentDidMount() {
    const { activeSeries, selectedSeries, saveActiveSeries } = this.props;
    if (isNil(activeSeries) && !isNil(selectedSeries) && selectedSeries.length > 0) {
      saveActiveSeries({ activeSeries: path([0], selectedSeries) });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      collId, selectedSeries, activeSeries, initiateVintages, saveActiveSeries,
    } = this.props;
    if (collId !== prevProps.collId) saveActiveSeries({ activeSeries: undefined });
    if (collId !== prevProps.collId || selectedSeries !== prevProps.selectedSeries) {
      if (isNil(activeSeries) && !isNil(selectedSeries) && selectedSeries.length > 0) {
        saveActiveSeries({ activeSeries: path([0], selectedSeries) });
      } else if (!isNil(activeSeries) && isNil(find(propEq('tsid', activeSeries.tsid), selectedSeries))) {
        saveActiveSeries({ activeSeries: path([0], selectedSeries) });
      }
      // initiateVintages({ collId, tsid: path([0], activeSeries) });
    }
  }

  handleLeft = () => {
    const { activeSeries, selectedSeries, saveActiveSeries } = this.props;
    const i = findIndex((x) => x.tsid === activeSeries.tsid, selectedSeries);
    saveActiveSeries({ activeSeries: selectedSeries.slice(i - 1)[0] });
  }

  handleRight = () => {
    const { activeSeries, selectedSeries, saveActiveSeries } = this.props;
    const i = findIndex((x) => x.tsid === activeSeries.tsid, selectedSeries) + 1;
    saveActiveSeries({ activeSeries: selectedSeries.slice((i > selectedSeries.length - 1) ? 0 : i)[0] });
  }

  render() {
    const {
      collId, selectedSeries, activeSeries, openTimeSeriesBrowser, collection, space, hasPermission,
    } = this.props;
    return (
      <MainPanel>

        { (isNil(collId) || isNil(selectedSeries) || isNil(activeSeries)) && (
        <NoSelectionDiv>
          Select timeseries in
          {' '}
          <Link onClick={openTimeSeriesBrowser}>Timeseries Browser</Link>
        </NoSelectionDiv>
        )}

        { !isNil(collId) && !isNil(selectedSeries) && !isNil(activeSeries) && (
          <>
            <Header>
              <h3>
                Timeseries Info
              </h3>
              <BreadCrumbs>
                /
                {!isNil(space) && <span>{space.name}</span>}
                /
                {!isNil(collection) && <span>{collection.name}</span>}
              </BreadCrumbs>
              <p>
                To select different timeseries go to
                {' '}
                <Link onClick={openTimeSeriesBrowser}>Timeseries Browser</Link>
              </p>
            </Header>
            {!isNil(selectedSeries) && selectedSeries.length > 1 && (
            <SeriesSelectorDiv>

              <div style={{ textAlign: 'center' }}>
                {!isNil(selectedSeries) && selectedSeries.length > 1
                  && (
                    <Button
                      style={{ float: 'left' }}
                      minimal
                      icon="double-chevron-left"
                      onClick={this.handleLeft}
                    />
                  )}
                <span style={{ ali: 'center' }}>
                  {path(['name'], activeSeries)}
                </span>
                <Button
                  style={{ float: 'right' }}
                  minimal
                  icon="double-chevron-right"
                  onClick={this.handleRight}
                />
              </div>
            </SeriesSelectorDiv>
            )}
            { !isNil(activeSeries)
            && (
            <div>
              <SeriesDetails information={activeSeries} />
            </div>
            )}
            { hasPermission && !isNil(activeSeries)
              && <VintageList collId={collId} tsid={activeSeries.tsid} />}

            { !hasPermission
              && (
              <Callout intent="danger" style={{ marginTop: '10px' }}>
                You don't have permission to upload to this collection.
              </Callout>
              )}
          </>
        )}

      </MainPanel>
    );
  }
}

SeriesInfoTab.defaultProps = {
  collId: undefined,
  selectedSeries: undefined,
  activeSeries: undefined,
  tsDetails: undefined,
  collection: undefined,
  space: undefined,
  hasPermission: true,
};

SeriesInfoTab.propTypes = {
  collId: types.string,
  selectedSeries: types.arrayOf(TimeseriesType),
  activeSeries: TimeseriesType,
  tsDetails: TimeseriesType,
  hasPermission: types.bool,
  openTimeSeriesBrowser: types.func.isRequired,
  initiateVintages: types.func.isRequired,
  saveActiveSeries: types.func.isRequired,
  collection: CollectionType,
  space: SpaceType,
};

const mapStateToProps = (state) => {
  const collId = timeseriesBrowserSelectedCollectionIDSelector(state);
  const selectedSeries = timeseriesBrowserSelectedTimeseriesSelector(state);
  const activeSeries = seriesInfoActiveSeriesSelector(state);
  const tsDetails = has('tsid', activeSeries) ? timeseriesSelector(activeSeries.tsid)(state) : undefined;
  const collection = collectionSummarySelector(collId)(state);
  const space = (!isNil(path(['spaceId'], collection))) ? spaceSelector(collection.spaceId)(state) : undefined;
  // const hasPermission = uploadHasPermissionSelector(state);
  return ({
    collId,
    selectedSeries,
    activeSeries,
    tsDetails,
    collection,
    space,
    // hasPermission,
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  saveActiveSeries: seriesInfoSaveActiveSeriesAction,
  openTimeSeriesBrowser: openTimeSeriesBrowserAction,
  initiateVintages: initiateVintagesAction,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SeriesInfoTab);
