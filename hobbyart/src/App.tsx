import React from 'react';
import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      {/* меняется середина */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
