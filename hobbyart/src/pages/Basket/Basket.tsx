import React, { useState } from 'react';
import { goodsElemType } from '../../types/types';
import './Basket.scss';

interface BasketProps {
  basketArray: goodsElemType[];
  setBasketArray: Function;
}

const Basket: React.FC<BasketProps> = ({ basketArray, setBasketArray }) => {
  document.title = 'Корзина';
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const amount: number = basketArray.length;
  // const result: number[] = [];
  // let total: number;

  // for (let elem of basketArray) {
  //   for (let key in elem) {
  //     if (key === 'price') {
  //       result.push(elem[key]);
  //     }
  //   }
  //   console.log(result);
  // }

  // if (result.length) {
  //   total = result.reduce(function (a, b) {
  //     return a + b;
  //   });
  //   console.log('total', total);

  // }

  // setTotalPrice(total);

  return (
    <div className="container">
      <div className="basket-wrapper">
        <div className="basket">
          <div className="basket_title">
            <div className="basket_title_text">Моя корзина</div>
            <div className="clear">Очистить корзину</div>
          </div>
          <div className="basket_list">
            {basketArray.map((good: goodsElemType, index: number) => (
              <div className="basket_list_item">
                <div className="item-img">
                  <img src={`${process.env.PUBLIC_URL}/${good.url}`} alt={`${good.name}`} />{' '}
                </div>
                <div className="item-title">{`${good.category}${good.name}`}</div>
                <button className="item-edit">
                  <div className="item-edit_btn">-</div>
                  <div className="item-edit_amount">1</div>
                  <div className="item-edit_btn">+</div>
                </button>
                <div className="item-priсe">{`${good.price} руб.`}</div>
                <div className="item-delete"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="order">
          <div className="order_details">
            <div className="title">Колличество товаров: {amount} шт.</div>
            <div className="priсe">{totalPrice} руб.</div>
          </div>
          <button className="order_btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
