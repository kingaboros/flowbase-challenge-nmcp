import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, About } from './components';
import './App.scss';

import MyProfile from './components/Auth/MyProfile';

import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';

import NavBar from './Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App-layer">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
