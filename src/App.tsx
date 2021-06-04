import React from 'react';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
