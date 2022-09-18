import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_info">
        <div className="container">
          <div>+7 (924) 765 28 20</div>
          <div>
            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ
            “Олонхо”
          </div>
          <div>Ежедневно с 10:00 до 19:00</div>
        </div>
      </div>
      <div className="menu">
        <nav className="navigation">
          <div>Каталог</div>
          <div>Оплата и доставка</div>
          <div>Бонусная программа</div>
          <div>О компании</div>
          <div>Контакты</div>
        </nav>
        <div className="logo"></div>
        <div className="options"></div>
      </div>
    </div>
  );
};

export default Header;
