import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; 
  flex-direction: column; 
`;

export const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const RefreshDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0 
`;
