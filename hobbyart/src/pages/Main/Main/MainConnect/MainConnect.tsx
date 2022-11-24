import React from 'react';
import './MainConnect.scss';

// import backimg from '../../../../assets/connect_back.svg';

import EnterNameForm from './EnterNameForm';
import EnterPhoneForm from './EnterPhoneForm';
import SendButton from './SendButton';

const MainConnect: React.FC = () => {
  return (
    <div className="main-connect">
      <div className="main-connect_wrapper">
        <div className="title">Есть вопрос? Мы перезвоним!</div>
        <div className="main-connect_form">
          <EnterNameForm />
          <EnterPhoneForm />
          <SendButton />
        </div>
      </div>
    </div>
  );
};

export default MainConnect;
