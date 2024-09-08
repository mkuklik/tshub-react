import React from 'react';
import styled from 'styled-components';
import { TabHeader } from '../CommonContainers';
import LegendOptions from './LegendOptions';
import TitleOptions from './TitleOptions';
import GraphMethods from './GraphMethods';
import CollapsableProperties from './CollapsableProperties';
import YAxisOptions from './YAxisOptions';

const Container = styled.div`

`;

export class GraphOptions extends React.PureComponent {
  render() {
    return (
      <Container>
        <TabHeader>Graph Option</TabHeader>
        <div>

          <CollapsableProperties title="Title">
            <TitleOptions section="title" />
          </CollapsableProperties>

          <CollapsableProperties title="Subtitle">
            <TitleOptions section="subtitle" />
          </CollapsableProperties>
          <CollapsableProperties title="Y-Axis">
            <YAxisOptions />
          </CollapsableProperties>
          <CollapsableProperties title="Legend">
            <LegendOptions />
          </CollapsableProperties>
          <CollapsableProperties title="Methods">
            <GraphMethods />
          </CollapsableProperties>

        </div>
      </Container>
    );
  }
}


GraphOptions.defaultProps = {
};

GraphOptions.propTypes = {
};

export default GraphOptions;
