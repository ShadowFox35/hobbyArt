import React, { FC, useEffect, useState } from 'react';
import './MainSlider.scss';
import 'react-alice-carousel/lib/alice-carousel.css';

import backing from '../../../../assets/main_back.svg';
import { mainSlides } from '../../../../constants/mainSlides';
import { mainSlidesElemType } from '../../../../types/types';

const MainSlider: React.FC = () => {
  const [sledeNum, setSledeNum] = useState<number>(1);

  const onKeydown = (key: string) => {
    let count: number = key === 'prev' ? sledeNum - 1 : sledeNum + 1;
    if (count < 1) {
      count = 5;
    }
    if (count > 5) {
      count = 1;
    }
    setSledeNum(count);
  };

  return (
    <div className="main-slider">
      <div className="main-slider_back">
        <img src={backing} alt="hobby art macrametr" className="main-slider_img" />

        <div className="main-slider_wrapper" style={{ left: -1 * (sledeNum - 1) + '00%' }}>
          {mainSlides.map((elem: mainSlidesElemType, index: number) => (
            <div className="main-slider_wrapper_item">
              <div className="main-slider_good-image">
                <img src={elem.url} alt="hobby art macrametr" className={`image ${elem.class}`} />
              </div>
              <div className="main-slider_info">
                <div className="title">{elem.title}</div>
                <div className="text">{elem.text}</div>
                <button className="buttons">В каталог</button>
              </div>
            </div>
          ))}
        </div>

        <div className="main-slider_pagination">
          <div className="pagination-prev" onClick={() => onKeydown('prev')}></div>
          <div className="slide-number">{sledeNum}/5</div>
          <div className="pagination-next" onClick={() => onKeydown('next')}></div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
