import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import logo from '../../assets/main_logo.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import clock from '../../assets/clock.svg';
import inst from '../../assets/inst.svg';

import SubscribeForm from './SubscribeForm';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contacts">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="hobby art logo" className="logo-image" />
            </Link>
          </div>

          <div className="footer_info">
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
            <div className="info-item">
              <img src={inst} alt="hobby art logo" className="icon" />
              @hobbyart_dv
            </div>
          </div>
        </div>

        <nav className="footer_nav">
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/catalog">
              Каталог
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/stock">
              Акции
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/loyalty">
              Бонусная программа
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/catalog">
              Новинки
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/catalog">
              Популярное
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/delivery">
              Оплата и доставка
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/delivery">
              Гарантия и возврат
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/about">
              О компании
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/about">
              Преимущества
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/contacts">
              Контакты
            </Link>
          </div>
          <div className="navigation_item">
            <Link className="navigation_item_link" to="/contacts">
              Личный кабинет
            </Link>
          </div>
        </nav>

        <div className="footer_subscribe">
          <p>Узнавайте первым о новинках и новостях</p>
          <SubscribeForm />
          <p>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          <p>
            © 2012-2021 ХОББИ АРТ — официальный интернет-магазин товаров для хобби. Все права
            защищены. Условия использования и политика конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
