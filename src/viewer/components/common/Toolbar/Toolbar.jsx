import styled from 'styled-components';
import { Navbar, Button } from '@blueprintjs/core';

const ToolbarGroup = styled(Navbar.Group)``;

const Toolbar = styled(Navbar)`
  && {
    height: 30px;
    padding-left: 0px; // 10px
    padding-right: 0px; // 10px

    ${ToolbarGroup} {
      height: 30px;
    }
  }
`;

Toolbar.Group = ToolbarGroup;

export { Toolbar, ToolbarGroup };
