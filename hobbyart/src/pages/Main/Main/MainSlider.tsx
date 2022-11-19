import React from 'react';
import './Main.scss';

import slidergood from '../../../assets/main_slider_good.svg';
import backimg from '../../../assets/main_back.svg';

// import basket_icon from '../../assets/basket_icon.svg';

const MainSlider: React.FC = () => {
  return (
    <div className="main-slider">
      <div className="main-slider_back">
        <img src={backimg} alt="hobby art macrametr" className="main-slider_img" />
        <div className="main-slider_wrapper">
          <img src={slidergood} alt="hobby art macrametr" className="slider-image" />
        </div>

        <div className="main-slider_info">
          <div className="title">Пряжа Macrametr</div>
          <div className="text">
            Повседневная практика показывает, что укрепление и развитие внутренней структуры
            обеспечивает широкому кругу (специалистов) участие в формировании форм воздействия.
          </div>
          <button className="buttons">В каталог</button>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
