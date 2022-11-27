import React, { useState } from 'react';
import { GoodsSliderNew, GoodsSliderPopular } from '../../../../constants/GoodsSliderArray';
import { GoodsSliderElemType } from '../../../../types/types';

import './GoodsSlider.scss';

interface GoodsSliderProps {
  switchStatus: boolean;
  goodsArray: GoodsSliderElemType[];
}

const GoodsSlider: React.FC<GoodsSliderProps> = ({ switchStatus, goodsArray }) => {
  return (
    <div className="goods-slider">
      <div className="pagination-prev"></div>
      {goodsArray.map((elem: GoodsSliderElemType, index: number) => (
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
