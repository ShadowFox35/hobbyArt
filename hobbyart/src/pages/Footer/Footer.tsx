import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import logo from '../../assets/main_logo.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import clock from '../../assets/clock.svg';
import inst from '../../assets/inst.svg';

import SubscribeForm from './SubscribeForm';
import { footerNav } from '../../constants/footerNav';
import { navElemType } from '../../types/types';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className=" footer_wrapper container">
        <div className="footer_contacts">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="hobby art logo" className="logo-image" />
            </Link>
          </div>

          <div className="footer_contacts_info">
            <div className="info-item">
              <a className="info-item_text" target="blank" href="tel:+7 924 765 28 30">
                <img src={phone} alt="hobby art phone" className="info-item_icon" />
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
                <img src={location} alt="hobby art logo" className="info-item_icon" />
              </a>
              <a
                className="info-item_text"
                target="blank"
                href="https://www.google.com/maps/place/%D0%A2%D0%A6+%D0%9E%D0%BB%D0%BE%D0%BD%D1%85%D0%BE/@62.036863,129.7353609,17z/data=!3m1!4b1!4m6!3m5!1s0x5bf64a44f3275dcb:0xdcde3af6120fac15!8m2!3d62.036863!4d129.7375549!16s%2Fg%2F11b6v9yy7f?hl=ru">
                г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
              </a>
            </div>

            <div className="info-item">
              <img src={clock} alt="hobby art logo" className="info-item_icon" />
              Ежедневно с 10:00 до 19:00
            </div>

            <div className="info-item">
              <a
                className="info-item_text"
                target="blank"
                href="https://www.instagram.com/hobbyart/">
                <img src={inst} alt="hobby art logo" className="info-item_icon" />
              </a>
              <a
                className="info-item_text"
                target="blank"
                href="https://www.instagram.com/hobbyart/">
                @hobbyart
              </a>
            </div>
          </div>
        </div>

        <nav className="footer_nav">
          {footerNav.map((elem: navElemType, index: number) => (
            <div className="navigation_item" key={index}>
              <Link className="navigation_item_link" to={elem.link}>
                {elem.text}
              </Link>
            </div>
          ))}
        </nav>

        <div className="footer_subscribe">
          <p className="footer_subscribe_title">Узнавайте первым о новинках и новостях</p>
          <SubscribeForm />
          <p className="footer_subscribe_notes">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
          <p className="footer_subscribe_rights">
            © 2012-2021 ХОББИ АРТ — официальный интернет-магазин товаров для хобби. Все права
            защищены. Условия использования и политика конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
