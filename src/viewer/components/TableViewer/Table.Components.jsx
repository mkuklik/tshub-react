import styled from 'styled-components';

const AnnotationListContainer = styled.div`
  // max-height: 400px;
  margin-top: 20px;
  // overflow-x: auto;
`;

const GridContainer = styled.div`
  // width: 100%;
  // height: 100%;
  // min-height: 600px;

  .ag-cell {
    display: flex;
    align-items: center;
  }
`;

export {
  GridContainer,
  AnnotationListContainer,
};
