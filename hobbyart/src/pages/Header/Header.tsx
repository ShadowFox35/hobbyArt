import React from 'react';
import { Link } from 'react-router-dom';

// import About from '../Main/About/About';
// import Error from '../Main/Error/Error';
// import Main from '../Main/Main';

import Search from './Search';
import Log from './Log';
import Favorites from './Favorites';
import Basket from './Basket';

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
            <img src={phone} alt="hobby art logo" className="icon" />
            +7 (924) 765 28 20
          </div>
          <div className="info-item">
            <img src={location} alt="hobby art logo" className="icon" />
            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
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
          {headerNav.map((elem: navElemType, index:number) => (
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
          <Basket />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Header;
