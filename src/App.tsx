import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <Header />
      </header>
    </div>
  );
}

export default App;
