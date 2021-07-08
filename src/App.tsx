import React from 'react';

import './App.scss';
import Homepage from './screens/HomePage/Homepage';
import LoginPage from './screens/LoginPage';

const App = () => {
  return (
    <div className="App-layer">
      <LoginPage />
      <Homepage />
    </div>
  );
};

export default App;
