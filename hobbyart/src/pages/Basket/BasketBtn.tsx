import React from 'react';
import { Link } from 'react-router-dom';

import './Basket.scss';

import basket_icon from '../../assets/basket_icon.svg';

const BasketBtn: React.FC = () => {
  return (
    <Link to="/basket" className="basket-link">
      <button className="basket-btn">
        <div className="wrapper">
          <img src={basket_icon} alt="basket icon" className="icon" />
          <div className="basket-btn_title">Корзина</div>
        </div>
      </button>
    </Link>
  );
};

export default BasketBtn;
