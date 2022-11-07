import React from 'react';

import './Footer.scss';

const SubscribeForm: React.FC = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_wrapper">
        <input
          className="subscribe_input"
          placeholder="Ваш Email"
          autoComplete="off"
          autoFocus
          name="subscribe"
          value={''}
          // onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="buttons">подписаться</button>
      </div>
    </div>
  );
};

export default SubscribeForm;
