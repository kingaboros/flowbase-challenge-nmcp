import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, About, Contact } from './components';
import './App.scss';

import { LoginPage } from './components';
import NavBar from './Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App-layer">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
