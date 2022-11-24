import React from 'react';

import './Main.scss';

import MainCatalog from './MainCatalog';
import MainConnect from './MainConnect/MainConnect';
import MainSlider from './MainSlider/MainSlider';
import MainSwitcher from './MainSlider/MainSwitcher/MainSwitcher';
import GoodsSlider from './GoodsSlider/GoodsSlider';
import Instagram from './Instagram';

import { advantages } from '../../../constants/advantages';
import { advantagesElemType } from '../../../types/types';

const Main: React.FC = () => {
  document.title = 'Главная';
  return (
    <div className="main">
      <div className="main-container">
        <MainSlider />
        <MainSwitcher />
        <GoodsSlider />
        <MainCatalog />

        <div className="advantages">
          <h2 className="advantages_title">Хобби арт: 9 лет на рынке</h2>
          <div className="advantages_list">
            {advantages.map((elem: advantagesElemType, index: number) => (
              <div className="advantages_item" key={index}>
                <div className={` advantages_item_img ${elem.class}`}>
                  <img src={elem.url} alt={`hobby art ${elem.class}`} className="adv-image" />
                </div>
                <div className="advantages_item_info">
                  <div className="title">{elem.title}</div>
                  <div className="text"> {elem.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Instagram />
        <MainConnect />
      </div>
    </div>
  );
};

export default Main;
