/* eslint-disable camelcase */
import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import FileUpload from './FileUpload';

import UploadList from './UploadList';

const Container = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;


class Upload extends React.PureComponent {
  render() {
    const {
      collId,
    } = this.props;
    return (
      <Container>
        <FileUpload collId={collId} />

        <UploadList collId={collId} />
      </Container>
    );
  }
}

Upload.propTypes = {
  collId: types.string.isRequired,
};

export default Upload;
