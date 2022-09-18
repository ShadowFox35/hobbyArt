import React from 'react';

import './Header.scss';

import search_icon from '../../assets/search_icon.svg';

const Search: React.FC = () => {
  return (
    <div className="search">
      <div className="wrapper">
        <input
          className="search_input"
          placeholder="Поиск товара"
          autoComplete="off"
          autoFocus
          name="search"
          value={''}
          // onChange={(e) => setInputValue(e.target.value)}
        />
        <div
          className="search_icon"
          // onClick={() => setInputValue('')}
        >
          <img
            src={search_icon}
            alt="search icon"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
