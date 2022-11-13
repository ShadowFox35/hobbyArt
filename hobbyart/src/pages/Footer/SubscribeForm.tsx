import React from 'react';

import './Footer.scss';

const SubscribeForm: React.FC = () => {
  return (
    <div className="footer_subscribe_form">
      <div className="form-wrapper">
      <input
        className="form-input"
        placeholder="Ваш Email"
        autoComplete="off"
        autoFocus
        name="subscribe"
        value={''}
        // onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="form-btn">подписаться</button>
      </div>
    </div>
  );
};

export default SubscribeForm;
