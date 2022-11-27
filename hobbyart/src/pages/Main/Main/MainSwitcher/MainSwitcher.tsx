import React, { useState } from 'react';
import { GoodsSliderNew, GoodsSliderPopular } from '../../../../constants/GoodsSliderArray';
import { GoodsSliderElemType } from '../../../../types/types';
import './MainSwitcher.scss';

interface MainSwitcherProps {
  switchStatus: boolean;
  setSwitchStatus: Function;
  goodsArray: GoodsSliderElemType[];
  setGoodsArray: Function;
}

const MainSwitcher: React.FC<MainSwitcherProps> = ({
  switchStatus,
  setSwitchStatus,
  goodsArray,
  setGoodsArray,
}) => {
  const [newGoodsClass, setNewGoodsClass] = useState<string>('title active');
  const [popGoodsClass, setPopGoodsClass] = useState<string>('title');

  const switchSlider = () => {
    if (switchStatus) {
      setSwitchStatus(false);
      setGoodsArray(GoodsSliderPopular);
      setPopGoodsClass('title active');
      setNewGoodsClass('title');
    } else {
      setSwitchStatus(true);
      setGoodsArray(GoodsSliderNew);
      setPopGoodsClass('title');
      setNewGoodsClass('title active');
    }
  };

  return (
    <div className="switcher-wrapper">
      <div className={newGoodsClass}>Новинки</div>
      <label className="switch">
        <input type="checkbox" onClick={() => switchSlider()} />
        <span className="slider round"></span>
      </label>
      <div className={popGoodsClass}>Популярное</div>
    </div>
  );
};

export default MainSwitcher;
