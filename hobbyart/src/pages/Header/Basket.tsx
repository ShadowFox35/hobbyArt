import React from 'react';
import './Header.scss';

import basket_icon from '../../assets/basket_icon.svg';

const Basket: React.FC = () => {
  return (
    <button className="basket-btn">
      <div className="wrapper">
        <img
          src={basket_icon}
          alt="basket icon"
          className="icon"
        />
        <div>Корзина</div>
      </div>
    </button>
  );
};

export default Basket;
