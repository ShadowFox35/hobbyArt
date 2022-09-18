import React from 'react';
import './Header.scss';

import faves_icon from '../../assets/faves_icon.svg';

const Favorites: React.FC = () => {
  return (
    <button className="faves-btn">
      <div className="wrapper">
        <img
          src={faves_icon}
          alt="favorites icon"
          className="icon"
        />
        <div>Избранное</div>
      </div>
    </button>
  );
};

export default Favorites;
