/* eslint-disable max-classes-per-file */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import styled from 'styled-components';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Classes,
  Alignment,
  Button,
} from '@blueprintjs/core';
import FavoriteStar from './FavoriteStar';
import EditableTitle from './EditableTitle';
import {
  workbookIsFavoriteSelector,
} from '../../selectors/workbookSelectors';
import {
  updateFavoriteAction, toggleTourOpenAction,
} from '../../action/workbookActions';


const StyledFavoriteStar = styled(FavoriteStar)`
  padding-left: 30px;
  padding-right: 10px;
`;

const StyledEditableTitle = styled(EditableTitle)`
  height: 26px;
  font-size: 20px;
  font-weight: bold;
  background-color: #FBD06A !important;
`;

const NavbarGroupBase = (props) => (
  <NavbarGroup
    align={props.align}
    className={props.className}
  >
    {props.children}
  </NavbarGroup>
);

const StyledNavbarGroup = styled(NavbarGroupBase)`
  height: 30px;
`;


class TopNavbarBase extends React.PureComponent {
  handleTSHUB = () => {
    window.location = '/workbooks/';
  }

  handleTour = () => this.props.toggleTourOpen({ isTourOpen: true });

  render() {
    const {
      className, isFavorite, updateFavorite,
    } = this.props;
    return (
      <Navbar fixedToTop className={className}>
        <StyledNavbarGroup>
          <NavbarHeading onClick={this.handleTSHUB}><b>TSHUB</b></NavbarHeading>
          <NavbarDivider />
          <StyledEditableTitle />
          <StyledFavoriteStar
            key={isFavorite}
            isFavorite={isFavorite}
            updateFavorite={updateFavorite}
          />
        </StyledNavbarGroup>
        <StyledNavbarGroup align={Alignment.RIGHT}>
          <Button icon="learning" className={Classes.MINIMAL} text="Tour" onClick={this.handleTour} />
          {/* <Button className={Classes.MINIMAL} icon="document" text="Files" /> */}
        </StyledNavbarGroup>
      </Navbar>
    );
  }
}


TopNavbarBase.defaultProps = {
  isFavorite: undefined,
};

TopNavbarBase.propTypes = {
  isFavorite: types.bool,
  updateFavorite: types.func.isRequired,
  toggleTourOpen: types.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFavorite: workbookIsFavoriteSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateFavorite: updateFavoriteAction,
  toggleTourOpen: toggleTourOpenAction,
}, dispatch);


const ConnectedTopNavbarBase = connect(mapStateToProps, mapDispatchToProps)(TopNavbarBase);

const TopNavbar = styled(ConnectedTopNavbarBase)`
  width: 100%;
  height: 30px;
  background-color: #fbd06a;
`;

export default TopNavbar;
