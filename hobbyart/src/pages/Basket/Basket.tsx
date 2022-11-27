import React from 'react';
import './Basket.scss';

const Basket: React.FC = () => {
  document.title = 'Корзина';
  return (
    <div className="wrapper">
      <div className="basket">
        <div className="basket_title">
          <div className="basket_title_text">Популярные товары</div>
          <div className="clear">Очистить корзину</div>
        </div>
        <div className="basket_list">
          <div className="basket_list_item">
            <div className="item-img">
              {/* <img src="../../assets/basket_icon.svg" alt="good img" /> потом добавить картинку */}
            </div>
            <div className="item-title">good name</div>
            <button className="item-edit">
              <div className="item-edit_btn">-</div>
              <div className="item-edit_amount">1</div>
              <div className="item-edit_btn">+</div>
            </button>
            <div className="item-priсe">good priсe</div>
            <div className="item-delete"></div>
          </div>
        </div>
      </div>

      <div className="order">
        <div className="order_details">
          <div className="title">Колличество товаров:</div>
          <div className="priсe">good priсe</div>
        </div>
        <button className="order_btn">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
