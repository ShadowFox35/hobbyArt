import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/Main/About/About';

import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import Error from './pages/Error/Error';

function App() {
  return (
    <>
      <Header />
      {/* меняется середина */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
