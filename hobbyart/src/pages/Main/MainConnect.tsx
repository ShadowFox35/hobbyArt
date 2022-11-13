import React from 'react';
import './Main.scss';

import backimg from '../../assets/connect_back.svg';

const MainConnect: React.FC = () => {
  return (
    <div className="main-connect">
      <div className="main-connect_back">
        <img src={backimg} alt="hobby art macrametr" className="main-slider_img" />
        <div className="main-connect_wrapper">
          <div className="title">Есть вопрос? Мы перезвоним!</div>
          <div className="main-connect_form">
            {/* сделать формы компонентами */}
            <button></button>
            <button></button>
            <button>Отправить</button>
          </div>
          <div className="main-connect_note">
            *нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainConnect;
