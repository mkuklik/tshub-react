import * as React from 'react';
import styled from 'styled-components';
import { Spinner as SpinnerBase } from '@blueprintjs/core';

const Container = styled.div`
  position: relative;
`;

const Spinner = styled(SpinnerBase)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(191, 204, 214, 0.2);
`;


const Container = styled.div`
  /* TODO: customize this in parent component */
  display: flex;
  flex-direction: column;
  height: 100%;
`;


const Loadable = (Component) => (
  ({ isLoading, className, ...props }) => (
    <Container className={className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {!isLoading
      && <Component {...props} />}

      {isLoading && (
      // <>
      //   <Overlay />
      //   <Spinner size={32} />
      // </>
      <Container>
        <Spinner />
      </Container>
      )}
    </Container>
  )
);

// eslint-disable-next-line import/prefer-default-export
export { Loadable };
