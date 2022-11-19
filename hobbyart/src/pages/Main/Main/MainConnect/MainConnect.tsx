import React from 'react';
import './MainConnect.scss';

import backimg from '../../../../assets/connect_back.svg';

import EnterNameForm from './EnterNameForm';
import EnterPhoneForm from './EnterPhoneForm';
import SendButton from './SendButton';

const MainConnect: React.FC = () => {
  return (
    <div className="main-connect">
      <div className="main-connect_back">
        <img src={backimg} alt="hobby art macrametr" className="main-slider_img" />
        <div className="main-connect_wrapper">
          <div className="title">Есть вопрос? Мы перезвоним!</div>
          <div className="main-connect_form">
            {/* сделать формы компонентами */}
            <EnterNameForm />
            <EnterPhoneForm />
            <SendButton />
          </div>
          {/* <div className="main-connect_note">
            *нажимая на кнопку, вы соглашаетесь <br /> с политикой конфиденциальности
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainConnect;
