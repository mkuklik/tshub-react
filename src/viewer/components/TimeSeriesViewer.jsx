/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Segment, Menu } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import {
  Button, Drawer, Position, FocusStyleManager, Divider,
} from '@blueprintjs/core';
import { Toolbar } from './common';
import TimeSeriesModel from '../../client/model/TimeSeries';

import '@blueprintjs/core/lib/css/blueprint.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import { initializeAction } from '../actions';
import { selectTimeseriesAction } from '../actions/uiActions';
import { timeseriesSelector } from '../selectors/timeseries';
import GraphViewer from './graph/GraphViewer';
import VintagesViewer from './VintagesViewer';
import TableViewer from './TableViewer/TableViewer';
import TimeSeriesSettings from './TimeSeriesSettingsTab';
import TimeseriesOverviewTab from './TimeseriesOverviewTab';
import DownloadTab from './DownloadTab';
// import GraphSeriesSelector from './graph/GraphSeriesSelector';
import GraphAddTimeseriesEditor from './graph/GraphAddTimeseriesEditor';
import { TimeseriesBrowser } from './TimeseriesBrowser/TimeseriesBrowser';

import {
  ApiClient,
  RawSpaceApi,
  RawCollectionApi,
  RawAnnotationsApi,
  RawTimeSeriesApi,
  RawTimeSeriesDataApi,
  RawVintageApi,
  TimeSeriesApi,
} from '../../client';
import LoginErrorScreen from './LoginErrorScreen';
import GraphRealtimeInput from './graph/GraphRealtimeInput';
import GraphApplyFunctionsButton from './graph/GraphApplyFunctionsButton';
import GraphCloneSeriesButton from './graph/GraphCloneSeriesButton';
import GraphApplyBinaryFunctionsButton from './graph/GraphApplyBinaryFunctionsButton';
import GraphRangeSelectorContainer from './graph/GraphRangeSelectorContainer';
import GraphSeriesSelector from './graph/GraphSeriesSelector';

FocusStyleManager.onlyShowFocusOnTabs();

const Container = styled.div`
  padding-top: 20px;
`;

const TimeseriesBrowserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px 10px 10px;
`;

const GraphSeriesSelectorContainer = styled.div`
  padding: 10px 0;
`;

const GraphViewerContainer = styled.div`
  display: block;
  position: relative;
  min-height: 400px;
  max-height: 300px;
  padding: 14px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

class TimeSeriesViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'overview',
      gid: undefined,
      timeseriesBrowserShown: false,
      timeseriesSelectorShown: false,
      addTimeseriesEditorShown: false,
    };

    const {
      chronos_address,
      space_id,
      coll_id,
      tsid,
      jwt,
      space_name,
      coll_name,
      ts_name,
      initialize,
    } = this.props;

    // this.client = new ApiClient();
    // this.client.basePath = chronos_address.replace(/\/+$/, '');
    // this.client.authentications.jwt.accessToken = jwt;

    // // eslint-disable-next-line no-underscore-dangle
    // window._chronosdb = {
    //   rawSpaceApi: new RawSpaceApi(this.client),
    //   rawCollectionApi: new RawCollectionApi(this.client),
    //   rawAnnotationApi: new RawAnnotationsApi(this.client),
    //   rawTimeSeriesApi: new RawTimeSeriesApi(this.client),
    //   rawTimeSeriesDataApi: new RawTimeSeriesDataApi(this.client),
    //   rawVintageApi: new RawVintageApi(this.client),
    //   timeSeriesApi: new TimeSeriesApi(this.client),
    // };

    // axios.defaults.baseURL = 'https://www.tshub.io';
    // axios.defaults.headers.common.Authorization = jwt;

    initialize({
      spaceName: space_name,
      collName: coll_name,
      tsName: ts_name,
      spaceId: space_id,
      collId: coll_id,
      tsid,
      jwt,
      chronos_address,
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleTimeseriesBrowserDrawerClose = () => {
    const { selectTimeseries } = this.props;
    selectTimeseries([]);

    this.setState({
      timeseriesBrowserShown: false,
    });
  };

  handleToggleTimeseriesSelectorButtonClick = () => {
    this.setState(({ timeseriesSelectorShown }) => ({
      timeseriesSelectorShown: !timeseriesSelectorShown,
    }));
  };

  handleToggleTimeseriesBrowserButtonClick = () => {
    this.setState(({ timeseriesBrowserShown }) => ({
      timeseriesBrowserShown: !timeseriesBrowserShown,
    }));
  };

  handleToggleAddTimeseriesEditorButtonClick = () => {
    this.setState(({ addTimeseriesEditorShown }) => ({
      addTimeseriesEditorShown: !addTimeseriesEditorShown,
    }));
  };

  onSize = (size) => {
    console.log('MyComponent has a width of', size.width);
  }

  render() {
    const {
      jwt, coll_id, ts, tsid, freq,
    } = this.props;

    const {
      gid,
      timeseriesBrowserShown,
      timeseriesSelectorShown,
      addTimeseriesEditorShown,
      activeItem,
    } = this.state;

    let dev_info = null;
    if (process.env.NODE_ENV !== 'production') {
      dev_info = (
        <Segment basic>
          <h5 className="ui header dividing">Internals</h5>
          <p>
            jwt:
            {jwt}
            <br />
            space_id:
            <br />
            coll_id:
            {coll_id}
            <br />
            tsid:
            {tsid}
            <br />
          </p>
        </Segment>
      );
    }

    const toolBar = (
      <Toolbar>
        <Toolbar.Group>
          <Button
            minimal
            icon="folder-new"
            active={timeseriesBrowserShown}
            onClick={this.handleToggleTimeseriesBrowserButtonClick}
          />
          {/* TODO: disable if no series is added to the graph */}
          <Button
            minimal
            icon="series-configuration"
            active={timeseriesSelectorShown}
            onClick={this.handleToggleTimeseriesSelectorButtonClick}
          />
          <Button
            minimal
            icon="series-add"
            active={addTimeseriesEditorShown}
            onClick={this.handleToggleAddTimeseriesEditorButtonClick}
          />
          {(process.env.NODE_ENV !== 'production')
            && (
            <>
              <Toolbar.Divider />
              <GraphRealtimeInput />
              <GraphApplyFunctionsButton />
              <GraphCloneSeriesButton />
              <GraphApplyBinaryFunctionsButton />
              <GraphRangeSelectorContainer />
            </>
            )}
        </Toolbar.Group>
      </Toolbar>
    );

    return (
      <Container>
        <Drawer
          size="500px"
          hasBackdrop={false}
          position={Position.LEFT}
          isOpen={timeseriesBrowserShown}
          onClose={this.handleTimeseriesBrowserDrawerClose}
        >
          <TimeseriesBrowserContainer>
            <TimeseriesBrowser />
          </TimeseriesBrowserContainer>
        </Drawer>

        <LoginErrorScreen />

        <SemanticToastContainer />

        {toolBar}

        {addTimeseriesEditorShown && <GraphAddTimeseriesEditor />}

        {timeseriesSelectorShown && (
          <GraphSeriesSelectorContainer>
            <GraphSeriesSelector />
          </GraphSeriesSelectorContainer>
        )}
        {/* <GraphViewerContainer> */}
        <Segment
          basic
          style={{
            // position: 'absolute',
            minHeight: '400px',
            maxHeight: '500px',
            padding: '0px',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          {/* <ConnectedGraphViewer2 onSize={this.onSize} /> */}
          {/* <div style={{ minHeight: '400px', display: ''}}> */}
          <GraphViewer gid={gid} />
          {/* <ConnectedGraphViewer gid={gid} /> */}
          {/* </div> */}
        </Segment>
        {/* </GraphViewerContainer> */}

        <Menu attached="top" tabular>
          <Menu.Item
            icon="eye"
            name="overview"
            active={activeItem === 'overview'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            icon="table"
            name="table"
            active={activeItem === 'table'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            icon="history"
            name="vintages"
            active={activeItem === 'vintages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="settings"
            icon="cog"
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="download"
            icon="download"
            active={activeItem === 'download'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'overview' && <TimeseriesOverviewTab ts={ts} />}

        {activeItem === 'table' && (
          <TableViewer />
        )}

        {activeItem === 'vintages' && (
          <VintagesViewer collId={coll_id} tsid={tsid} />
        )}

        {activeItem === 'settings' && (
          <TimeSeriesSettings collId={coll_id} tsid={tsid} />
        )}

        {activeItem === 'download' && (
          <DownloadTab collId={coll_id} tsid={tsid} />
        )}

        {dev_info}
      </Container>
    );
  }
}

TimeSeriesViewer.defaultProps = {
  ts: undefined,
};

TimeSeriesViewer.propTypes = {
  chronos_address: types.string.isRequired,
  space_id: types.string.isRequired,
  coll_id: types.string.isRequired,
  space_name: types.string.isRequired,
  coll_name: types.string.isRequired,
  ts_name: types.string.isRequired,
  ts: types.instanceOf(TimeSeriesModel),
  tsid: types.string.isRequired,
  jwt: types.string.isRequired,

  selectTimeseries: types.func.isRequired,
  initialize: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  api: state.api,
  ts: timeseriesSelector(ownProps.tsid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    selectTimeseries: selectTimeseriesAction,
    initialize: initializeAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TimeSeriesViewer);
