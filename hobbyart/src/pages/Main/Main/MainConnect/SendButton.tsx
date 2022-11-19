import React from 'react';
import './MainConnect.scss';

const SendButton: React.FC = () => {
  return (
    <div className="btn-wrapper">
      <button className="form-btn">Отправить</button>
      <div className="form-btn_note">
        *нажимая на кнопку, вы соглашаетесь <br /> с политикой конфиденциальности
      </div>
    </div>
  );
};

export default SendButton;
