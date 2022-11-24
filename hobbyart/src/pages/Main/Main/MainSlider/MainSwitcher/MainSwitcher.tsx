import React from 'react';
import './MainSwitcher.scss';

const MainSwitcher: React.FC = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default MainSwitcher;
