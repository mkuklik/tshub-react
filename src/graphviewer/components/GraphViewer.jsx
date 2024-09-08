/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;


class GraphViewer extends React.PureComponent {
  render() {
    const {
      collId,
    } = this.props;
    return (
      <Container>
      </Container>
    );
  }
}

GraphViewer.propTypes = {
  collId: types.string.isRequired,
};

export default GraphViewer;
