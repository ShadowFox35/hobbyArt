import React from 'react';

import truck from '../../assets/main_truck_icon.svg';
import knit from '../../assets/main_knit_icon.svg';
import money from '../../assets/main_money_icon.svg';

import './Main.scss';

import MainCatalog from './MainCatalog';
import MainConnect from './MainConnect';
import MainSlider from './MainSlider';
import MainSwitcher from './MainSwitcher';
import GoodsSlider from './GoodsSlider';
import Instagram from './Instagram';

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-container">
        <MainSlider />
        <MainSwitcher />
        <GoodsSlider />
        <MainCatalog />
        <div className="advantages">
          <h2>Хобби арт: 9 лет на рынке</h2>
          <div className="advantages_list">
            <div className="advantages_item">
              <div className="advantages_item_img truck">
                <img
                  src={truck}
                  alt="hobby art truck"
                  className="adv-image"
                />
              </div>
              <div className="advantages_item_info">
                <div className="title">Поставщики</div>
                <div className="text">
                  Мы работаем только с надежными и
                  проверенными поставщиками товаров для
                  творчества
                </div>
              </div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_img knit">
                <img
                  src={knit}
                  alt="hobby art knit"
                  className="adv-image"
                />
              </div>
              <div className="advantages_item_info">
                <div className="title">Товары</div>
                <div className="text">
                  Мы привозим актуальные и новые товары,
                  инструменты для вашего творчества по
                  низким ценам
                </div>
              </div>
            </div>
            <div className="advantages_item">
              <div className="advantages_item_img money">
                <img
                  src={money}
                  alt="hobby art money"
                  className="adv-image"
                />
              </div>
              <div className="advantages_item_info">
                <div className="title">Бонусы</div>
                <div className="text">
                  У нас действует накопительная бонусная
                  система скидок. Дарим в день рождения 500
                  бонусных рублей
                </div>
              </div>
            </div>
          </div>
        </div>
        <Instagram />
        <MainConnect />
      </div>
    </div>
  );
};

export default Main;
