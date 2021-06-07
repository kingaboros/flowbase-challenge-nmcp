import React from 'react';

import Header from './Components/Header/Header';
import GoodHands from './Components/GoodHands/GoodHands';

import './App.scss';

const App = () => {
  return (
    <div className="App-layer">
      <Header />
      <GoodHands />
    </div>
  );
};

export default App;
