import React from 'react';
import './Error.scss';

// import basket_icon from '../../assets/basket_icon.svg';

const Error: React.FC = () => {
  document.title = "error"
  return (
    <div className="main">
      <div className="main-container">
        <h1>Извините, данная страница не найдена</h1>
      </div>
    </div>
  );
};

export default Error;
