import React from 'react';
import Search from './Search';
import Log from './Log';
import Favorites from './Favorites';
import Basket from './Basket';

import './Header.scss';

import logo from '../../assets/main_logo.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import clock from '../../assets/clock.svg';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_info">
        <div className="container">
          <div className="info-item">
            <img
              src={phone}
              alt="hobby art logo"
              className="icon"
            />
            +7 (924) 765 28 20
          </div>
          <div className="info-item">
            <img
              src={location}
              alt="hobby art logo"
              className="icon"
            />
            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ
            “Олонхо”
          </div>
          <div className="info-item">
            <img
              src={clock}
              alt="hobby art logo"
              className="icon"
            />
            Ежедневно с 10:00 до 19:00
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <nav className="navigation">
            <div>Каталог</div>
            <div>Оплата и доставка</div>
            <div>Бонусная программа</div>
            <div>О компании</div>
            <div>Контакты</div>
          </nav>
          <div className="logo">
            <a target="blank" href="https://">
              <img
                src={logo}
                alt="hobby art logo"
                className="logo-image"
              />
            </a>
          </div>
          <div className="options">
            <Search />
            <Log />
            <Favorites />
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
