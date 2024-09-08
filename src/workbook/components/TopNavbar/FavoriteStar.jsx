import React from 'react';
import {
  Icon,
} from '@blueprintjs/core';


class FavoriteStar extends React.PureComponent {

  handleClick = (isFavorite) => (event) => {
    const { updateFavorite } = this.props;
    updateFavorite({ isFavorite });
  };

  render() {
    const { isFavorite } = this.props;
    return (
      <>
        {isFavorite && <Icon iconSize={16} className={this.props.className} icon="star" onClick={this.handleClick(false)} />}
        {!isFavorite && <Icon iconSize={16} className={this.props.className} icon="star-empty" onClick={this.handleClick(true)} />}
      </>
    );
  }
}

export default FavoriteStar;
