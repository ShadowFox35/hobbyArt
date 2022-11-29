import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/Main/About/About';

import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import Error from './pages/Error/Error';
import Basket from './pages/Basket/Basket';

import { goodsElemType } from './types/types';

function App() {
  const [basketArray, setBasketArray] = useState<goodsElemType[]>([]);

  return (
    <>
      <Header />
      {/* меняется середина */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog basketArray={basketArray} setBasketArray={setBasketArray}/>} />
        <Route path="/basket" element={<Basket basketArray={basketArray} setBasketArray={setBasketArray}/>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
