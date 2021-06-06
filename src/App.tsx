import React from 'react';

import Header from './Components/Header/Header';
import GoodHands from './Components/GoodHands/GoodHands';

import './App.scss';

function App() {
  return (
    <div className="App-layer">
      <div className="container-fluid">
        <Header />
        <GoodHands />
      </div>
    </div>
  );
}

export default App;
