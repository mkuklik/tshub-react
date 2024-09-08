import React from 'react';
import styled from 'styled-components';
import WorkbookFlexLayout from './WorkbookFlexLayout';
// import TourMain from '../../tour';

// const WorkbookContainerWrapper = styled.div`
//   width: 100%;
//   height: 100%;
// `;

const FlexLayoutContainer = styled.div`
  position: absolute;
  top: 60px;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;

// <WorkbookContainerWrapper>
// </WorkbookContainerWrapper>

const WorkbookContainer = () => (
  <FlexLayoutContainer>
    <WorkbookFlexLayout />
  </FlexLayoutContainer>
);

export default WorkbookContainer;
