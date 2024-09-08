import React from 'react';
import styled from 'styled-components';
import {
  Tag,
  Icon,
} from '@blueprintjs/core';
import Moment from 'react-moment';


export const UploadItem = styled.div`
  padding: 5px;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  margin-top: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #0000004f;
  &:last-child {
    border-bottom: 0px;
  }
  // line-height: 50px;
  // color: white;
  // font-weight: bold;
  // font-size: 2em;
  // text-align: center;
`;
export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MutedDiv = styled.div`
  margin-bottom: 10px;
  color: #999999;
`;

export const StatusTag = styled(Tag)`
  margin-left: 20px
  // justify-content: left;
`;


export const ErrorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5px;
  padding-left: 20px;
  // border: 1px;
  // border-color: red;
`;

export const ErrorDivHeader = styled.div`
`;
export const ErrorDivHeaderIcon = styled(Icon)`
  width: 16px;
  margin-right:5px;
`;

export const ErrorDivHeaderRight = styled.div`
  justify-content: right;
`;

export const ErrorList = styled.ul`
  overflow: hidden
  // list-style-position:inside;
  // border-bottom: 1px solid black;
`;
export const ErrorListItem = styled.li`
  // list-style-type: none;
`;

