import React from 'react';
import './MainSwitcher.scss';

const MainSwitcher: React.FC = () => {
  return (
    <div className="switcher-wrapper">
      <div className="title active">Новинки</div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <div className="title">Популярное</div>
    </div>
  );
};

export default MainSwitcher;
