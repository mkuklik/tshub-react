import * as React from 'react';
import axios from 'axios';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Drawer, FocusStyleManager, Position, Navbar,
} from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';

import {
  ApiClient,
  RawSpaceApi,
  RawCollectionApi,
  RawTimeSeriesApi,
  RawTimeSeriesDataApi,
  RawVintageApi,
} from '../../../client';

import { setApiParametersAction } from '../../actions';

import {
  createGraph as createGraphAction,
  focusOnGraph as focusOnGraphAction,
  addRefSeriesToGraphAction,
} from '../../actions/graphActions';

import { selectTimeseriesAction } from '../../actions/uiActions';

import GraphViewer from '../../components/graph/GraphViewer';
import GraphSeriesSelector from '../../components/graph/GraphSeriesSelector';
import { TimeseriesBrowser } from '../../components/TimeseriesBrowser/TimeseriesBrowser';

import {
  Container,
  ContentContainer,
  TimeseriesBrowserContainer,
  GraphSeriesSelectorContainer,
} from './TimeseriesBrowserPage.Components';

FocusStyleManager.onlyShowFocusOnTabs();

// TODO: create container component
const TimeseriesBrowserPage = ({
  createGraph,
  focusOnGraph,
  addSeriesToGraph,
  selectTimeseries,
  ...restProps
}) => {
  const [graphID, setGraphID] = React.useState(null);
  const [timeseriesBrowserShown, setTimeseriesBrowserShown] = React.useState(false);
  const [timeseriesSelectorShown, setTimeseriesSelectorShown] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line camelcase
    const { chronos_address, jwt, setApiParameters } = restProps;

    const client = new ApiClient();
    client.basePath = chronos_address.replace(/\/+$/, '');
    client.authentications.jwt.accessToken = jwt;

    // eslint-disable-next-line no-underscore-dangle
    window._chronosdb = {
      rawSpaceApi: new RawSpaceApi(client),
      rawCollectionApi: new RawCollectionApi(client),
      rawTimeSeriesApi: new RawTimeSeriesApi(client),
      rawTimeSeriesDataApi: new RawTimeSeriesDataApi(client),
      rawVintageApi: new RawVintageApi(client),
    };

    setApiParameters(null, null, null, jwt);
    axios.defaults.baseURL = 'https://www.tshub.io';
    axios.defaults.headers.common.Authorization = jwt;
  }, []);

  React.useEffect(() => {
    const { freq } = restProps;
    const gid = createGraph(freq);

    setGraphID(gid);
    focusOnGraph(gid);
  }, [setGraphID, focusOnGraph]);

  const handleToggleTimeseriesBrowserButtonClick = React.useCallback(() => {
    setTimeseriesBrowserShown((shown) => !shown);
  }, [setTimeseriesBrowserShown]);

  const handleToggleTimeseriesSelectorButtonClick = React.useCallback(() => {
    setTimeseriesSelectorShown((shown) => !shown);
  });

  const handleTimeseriesBrowserDrawerClose = React.useCallback(() => {
    selectTimeseries([]);
    setTimeseriesBrowserShown(false);
  }, [selectTimeseries, setTimeseriesBrowserShown]);

  return (
    <Container>
      <Drawer
        size="500px"
        hasBackdrop={false}
        position={Position.LEFT}
        isOpen={timeseriesBrowserShown}
        onClose={handleTimeseriesBrowserDrawerClose}
      >
        <TimeseriesBrowserContainer>
          <TimeseriesBrowser />
        </TimeseriesBrowserContainer>
      </Drawer>

      <ContentContainer>
        <Navbar>
          <Navbar.Group>
            <Button
              minimal
              icon="series-add"
              onClick={handleToggleTimeseriesBrowserButtonClick}
            />

            {/* TODO: disable if no series is added to the graph */}
            <Button
              minimal
              icon="series-configuration"
              onClick={handleToggleTimeseriesSelectorButtonClick}
            />
          </Navbar.Group>
        </Navbar>

        {timeseriesSelectorShown && (
          <GraphSeriesSelectorContainer>
            <GraphSeriesSelector />
          </GraphSeriesSelectorContainer>
        )}

        <GraphViewer gid={graphID} />
      </ContentContainer>
    </Container>
  );
};

TimeseriesBrowserPage.propTypes = {
  createGraph: types.func.isRequired,
  focusOnGraph: types.func.isRequired,
  addSeriesToGraph: types.func.isRequired,
  selectTimeseries: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createGraph: createGraphAction,
  focusOnGraph: focusOnGraphAction,
  addSeriesToGraph: addRefSeriesToGraphAction,
  selectTimeseries: selectTimeseriesAction,
  setApiParameters: setApiParametersAction,
}, dispatch);

const ConnectedTimeseriesBrowserPage = connect(
  null, mapDispatchToProps,
)(TimeseriesBrowserPage);

export default ConnectedTimeseriesBrowserPage;
