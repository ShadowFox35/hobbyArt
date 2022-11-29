import React, { useState } from 'react';
import { goodsElemType } from '../../../types/types';

import Basket from '../../../assets/basket_icon.svg';

import './Good.scss';

interface propGood {
  goodElem: goodsElemType;
  basketArray: goodsElemType[];
  setBasketArray: Function;
}

const Good: React.FC<propGood> = ({ goodElem, basketArray, setBasketArray }) => {
  
  const addToBasket = () => {
    setBasketArray([...basketArray, goodElem]);
    console.log(goodElem);
    console.log(basketArray);
  };

  return (
    <div className="good">
      <div className="good_wrapper">
        <img
          className="good_img"
          src={`${process.env.PUBLIC_URL}/${goodElem.url}`}
          alt={`${goodElem.name}`}
        />
        <div>
          {' '}
          <strong>{goodElem.category}</strong>
        </div>
        <strong>{goodElem.name}</strong>
        <div>{goodElem.structure}</div>
        <div> вес: {goodElem.weight}</div>
        <div> длина нити: {goodElem.length}</div>
        <div> цена: {goodElem.price} бел.руб.</div>
        <button type="button" className="good_btn-inactiv" onClick={() => addToBasket()}>
          <img className="icon" src={Basket} alt="" />В корзину
        </button>
      </div>
    </div>
  );
};

export default Good;
