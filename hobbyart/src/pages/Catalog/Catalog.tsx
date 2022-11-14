import React from 'react';

import './Catalog.scss';

import { categoriesElemType, goodsElemType } from '../../types/types';
import { categories } from '../../constants/categories';
import { arrayOfGoods } from '../../constants/arrayOfGoods';

import Good from './Goods/Good';

const Catalog: React.FC = () => {
  document.title = 'Каталог товаров';
  return (
    <div className="container catalog-container">
      <nav className="catalog_navigation">
        <div className="catalog_navigation_item">
          {categories.map((good: categoriesElemType, index: number) => (
            <div className="catalog_navigation_item_img" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/${good.url}`}
                alt={`${good.category}`}
                className="image"
              />
              <div className="title">{`${good.category}`}</div>
            </div>
          ))}
        </div>
      </nav>

      <div className="catalog_goods">
        <div className="title">Популярные товары</div>
        <div className="goods-box">
          {arrayOfGoods.map((good: goodsElemType, index: number) => (
            <Good key={index} goodElem={good} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
