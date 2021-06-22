import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';
import logo from '../../images/logo.svg';
import './Navbar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} className="logo navbar-brand" alt="logo" />
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="http://www.nomorecoffeeplease.com/">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.nomorecoffeeplease.com/">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.nomorecoffeeplease.com/">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://www.nomorecoffeeplease.com/">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <ArrowBtn
                btnName={strings.buttons.navbarBtn}
                btnClass={'navbarButton'}
                arrowClass={'whiteArrow'}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
