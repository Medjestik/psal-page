import React from 'react';
import './App.css';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Programs from '../Programs/Programs.js';

function App() {
  return (
    <div className="page">
      <PageOverlay />
      <Header />
      <Main />
      <Programs />
    </div>
  );
}

export default App; 
