/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import VintageList from './VintageList';
import { Container } from './VintageMain.Containers';
import InputSeries from './InputSeries';


class VintageMain extends React.PureComponent {
  render() {
    const {
      collId, tsid,
    } = this.props;
    return (
      <Container>
        <InputSeries />
        <p>{`collId: ${collId}, tsid=${tsid}`}</p>
        <VintageList collId={collId} tsid={tsid}/>
      </Container>
    );
  }
}

VintageMain.propTypes = {
  collId: types.string.isRequired,
};

export default VintageMain;
