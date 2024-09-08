import React from 'react';
import styled from 'styled-components';
import {
  Navbar, NavbarGroup,
} from '@blueprintjs/core';


export const NavbarGroupBase = (props) => (
  <NavbarGroup
    align={props.align}
    className={props.className}
  >
    {props.children}
  </NavbarGroup>
);

export const StyledNavbarGroup = styled(NavbarGroupBase)`
  height: 30px;
`;

export const NavbarBase = (props) => (
  <Navbar {...props} className={props.className}>{props.children}</Navbar>
);

export const StyledNavbar = styled(NavbarBase)`
  height: 30px;
`;
