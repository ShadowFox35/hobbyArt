import React from 'react';
import './MainConnect.scss';

const EnterNameForm: React.FC = () => {
  return (
    <div className="name-form">
      <input
        className="form-input"
        placeholder="Ваше имя"
        autoComplete="off"
        autoFocus
        name="name"
        value={''}
        // onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default EnterNameForm;
