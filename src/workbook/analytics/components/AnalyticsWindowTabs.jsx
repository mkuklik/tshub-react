import * as React from 'react';
import types from 'prop-types';
import { isNil, path } from 'ramda';
import styled from 'styled-components';
import {
  Tabs, Tab, Spinner,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import FlexView from 'react-flexview';
import { AnalyticsStatus } from '../definitions/AnalyticsStatus';


const WindowContainer = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%
`;


class AnalyticsWindowTabs extends React.Component {
  handleNavbarTabChange = (newTabId) => {
    const { ayid, updateAnalyticsUI } = this.props;
    updateAnalyticsUI(ayid, {
      tabs: {
        navbarTabId: newTabId,
      },
    });
  }

  render() {
    const {
      ayid,
      status,
      ui,
      header,
      parameters,
      results,
      diagnostics,
    } = this.props;
    if (ayid === undefined) return null;

    const navbarTabId = path(['tabs', 'navbarTabId'], ui); // || 'parameters';

    return (
      <WindowContainer>
        {status === AnalyticsStatus.running ? (
          <FlexView
            hAlignContent="center"
            vAlignContent="center"
            height="100%"
            width="100%"
            style={{ zIndex: 100, position: 'absolute' }}
          >
            <Spinner />
          </FlexView>
        ) : null}
        { header }
        <Tabs
          animate
          vertical
          onChange={this.handleNavbarTabChange}
          selectedTabId={navbarTabId}
          renderActiveTabPanelOnly
        >
          { !isNil(parameters)
          && (
          <Tab
            id="parameters"
            title="Parameters"
            panel={parameters}
          />
          )}
          { !isNil(results)
          && (
          <Tab
            id="results"
            title="Results"
            panel={results}
            disabled={status !== AnalyticsStatus.completed}
          />
          )}
          { !isNil(diagnostics)
            && (
            <Tab
              id="diagnostics"
              title="Diagnostics"
              panel={diagnostics}
              disabled={status !== AnalyticsStatus.completed}
            />
            )}
        </Tabs>
      </WindowContainer>
    );
  }
}

AnalyticsWindowTabs.defaultProps = {
  status: AnalyticsStatus.initiated,
  header: null,
  parameters: null,
  results: null,
  diagnostics: null,
};

AnalyticsWindowTabs.propTypes = {
  ayid: types.string.isRequired,
  updateAnalyticsUI: types.func.isRequired,
  ui: types.object.isRequired,
  status: types.string,
  header: types.node,
  parameters: types.node,
  results: types.node,
  diagnostics: types.node,
};

export default AnalyticsWindowTabs;
