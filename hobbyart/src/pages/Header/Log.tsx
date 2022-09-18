import React from 'react';
import './Header.scss';

import log_icon from '../../assets/log_icon.svg';

const Log: React.FC = () => {
  return (
    <button className="log-btn">
      <div className="wrapper">
        <img
          src={log_icon}
          alt="search icon"
          className="icon"
        />
        <div>Войти</div>
      </div>
    </button>
  );
};

export default Log;
