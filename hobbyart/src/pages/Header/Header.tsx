import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import Log from './Log';
import Favorites from './Favorites';
import BasketBtn from '../Basket/BasketBtn';

import './Header.scss';

import logo from '../../assets/main_logo.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import clock from '../../assets/clock.svg';
import { navElemType } from '../../types/types';
import { headerNav } from '../../constants/headerNav';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_info">
        <div className="header_info_wrapper container ">
          <div className="info-item">
            <a className="info-item_text" target="blank" href="tel:+7 924 765 28 30">
              <img src={phone} alt="hobby art logo" className="icon" />
            </a>
            <a className="info-item_text" target="blank" href="tel:+7 924 765 28 30">
              +7 924 765 28 30
            </a>
          </div>

          <div className="info-item">
            <a
              className="info-item_text"
              target="blank"
              href="https://www.google.com/maps/place/%D0%A2%D0%A6+%D0%9E%D0%BB%D0%BE%D0%BD%D1%85%D0%BE/@62.036863,129.7353609,17z/data=!3m1!4b1!4m6!3m5!1s0x5bf64a44f3275dcb:0xdcde3af6120fac15!8m2!3d62.036863!4d129.7375549!16s%2Fg%2F11b6v9yy7f?hl=ru">
              <img src={location} alt="hobby art logo" className="icon" />
            </a>
            <a
              className="info-item_text"
              target="blank"
              href="https://www.google.com/maps/place/%D0%A2%D0%A6+%D0%9E%D0%BB%D0%BE%D0%BD%D1%85%D0%BE/@62.036863,129.7353609,17z/data=!3m1!4b1!4m6!3m5!1s0x5bf64a44f3275dcb:0xdcde3af6120fac15!8m2!3d62.036863!4d129.7375549!16s%2Fg%2F11b6v9yy7f?hl=ru">
              г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
            </a>
          </div>

          <div className="info-item">
            <img src={clock} alt="hobby art logo" className="icon" />
            Ежедневно с 10:00 до 19:00
          </div>
        </div>
      </div>
      <div className="menu container">
        {/* <div className="container"> */}

        <nav className="navigation">
          {headerNav.map((elem: navElemType, index: number) => (
            <div className="navigation_item" key={index}>
              <Link className="navigation_item_link" to={elem.link}>
                {elem.text}
              </Link>
            </div>
          ))}
        </nav>

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="hobby art logo" className="logo-image" />
          </Link>
        </div>
        <div className="options">
          <Search />
          <Log />
          <Favorites />
          <BasketBtn />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Header;
