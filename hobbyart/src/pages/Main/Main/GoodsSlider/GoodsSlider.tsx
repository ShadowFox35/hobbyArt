import React from 'react';
import { GoodsSliderNew } from '../../../../constants/GoodsSliderArray';
import { GoodsSliderElemType } from '../../../../types/types';

import './GoodsSlider.scss';

// import basket_icon from '../../assets/basket_icon.svg';

const GoodsSlider: React.FC = () => {
  return (
    <div className="goods-slider">
      <div className="pagination-prev"></div>
      {GoodsSliderNew.map((elem: GoodsSliderElemType, index: number) => (
        <div className="goods-slider_wrapper">
          <div className="goods-slider_item">
            <img src={elem.url} alt="hobby art macrametr" className="goods-slider_item_img" />
            <div className="goods-slider_item_title">{elem.title}</div>
          </div>
        </div>
      ))}
      <div className="pagination-next"></div>
    </div>
  );
};

export default GoodsSlider;
