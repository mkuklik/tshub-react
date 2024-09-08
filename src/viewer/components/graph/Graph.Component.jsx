import styled from 'styled-components';
import DrapDropToGraphWrapper from '../../../workbook/components/DrapDropToGraphWrapper';


const GraphContainer = styled(DrapDropToGraphWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const GraphBox = styled.div`
  // text-align: center;
  // margin: 0;
  // position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
`;

export {
  GraphContainer, GraphBox,
};
