import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil, has } from 'ramda';
import styled from 'styled-components';

import {
  addRefSeriesToGraphAction,
  addSeriesToGraphAction,
} from '../../viewer/actions/graphActions';


const Container = styled.div`
`;

class DrapDropToGraphWrapper extends React.PureComponent {
  onDragOver = (event) => {
    const dragSupported = event.dataTransfer.length;
    if (dragSupported) {
      event.dataTransfer.dropEffect = 'move';
    }
    event.preventDefault();
  };

  onDrop = (event) => {
    const { addSeriesToGraph, addRefSeriesToGraph } = this.props;

    const { userAgent } = window.navigator;
    const isIE = userAgent.indexOf('Trident/') >= 0;
    const jsonData = event.dataTransfer.getData(
      isIE ? 'text' : 'application/json',
    );
    const data = JSON.parse(jsonData);


    if (has('wsid', data)) {
      addSeriesToGraph({ gid: undefined, wsid: data.wsid });
    } else if (!(isNil(data.collId) || isNil(data.tsid))) {
      addRefSeriesToGraph({
        gid: undefined,
        tsid: data.tsid,
        collId: data.collId,
        name: data.name,
      });
    }

    event.preventDefault();
  };

  render() {
    return (
      <Container
        className={this.props.className}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {this.props.children}
      </Container>
    );
  }
}

DrapDropToGraphWrapper.defaultProps = {};

DrapDropToGraphWrapper.propTypes = {
  addRefSeriesToGraph: types.func.isRequired,
  addSeriesToGraph: types.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addRefSeriesToGraph: addRefSeriesToGraphAction,
    addSeriesToGraph: addSeriesToGraphAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrapDropToGraphWrapper);
