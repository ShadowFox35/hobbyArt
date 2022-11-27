import React, { useState } from 'react';
import { GoodsSliderElemType } from '../../../../types/types';

import './GoodsSlider.scss';

interface GoodsSliderProps {
  switchStatus: boolean;
  goodsArray: GoodsSliderElemType[];
  sledeNum: number;
  setSledeNum: Function;
}

const GoodsSlider: React.FC<GoodsSliderProps> = ({ goodsArray, sledeNum, setSledeNum }) => {
  const prevSlide = (key: string) => {
    if (sledeNum > 1) {
      setSledeNum(sledeNum - 1);
    }
    console.log(sledeNum);
  };

  const nextSlide = (key: string) => {
    if (sledeNum < 6) {
      setSledeNum(sledeNum + 1);
    }
    console.log(sledeNum);
  };

  return (
    <div className="goods-slider">
      <div className="pagination-prev" onClick={() => prevSlide('prev')}></div>
      <div className="goods-slider_wrapper">
        <div className="slides" style={{ left: -299 * (sledeNum - 1) + 'px' }}>
          {goodsArray.map((elem: GoodsSliderElemType, index: number) => (
            <div className="slides_item">
              <img src={elem.url} alt="hobby art macrametr" className="slides_item_img" />
              <div className="  slides_item_title">{elem.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination-next" onClick={() => nextSlide('next')}></div>
    </div>
  );
};

export default GoodsSlider;
