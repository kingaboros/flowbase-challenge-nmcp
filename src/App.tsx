import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, About } from './components';
import './App.scss';

import MyProfilePage from './screens/MyProfilePage/MyProfilePage';
import LoginPage from './screens/LoginPage/LoginPage';
import SignupPage from './screens/SignupPage/SignupPage';
import NavBar from './Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App-layer">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/myprofile" component={MyProfilePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
