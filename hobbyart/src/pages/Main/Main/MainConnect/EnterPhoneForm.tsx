import React from 'react';
import './MainConnect.scss';

const EnterPhoneForm: React.FC = () => {
  return (
    <div className="phone-form">
      <input
        className="form-input"
        placeholder="Телефон"
        autoComplete="off"
        autoFocus
        name="phone"
        value={''}
        // onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default EnterPhoneForm;
