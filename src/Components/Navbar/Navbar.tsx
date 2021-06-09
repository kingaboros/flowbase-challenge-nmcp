import React from 'react';
import logo from '../../Images/logo.svg';
import ArrowBtn from '../Global/ArrowBtn/ArrowBtn';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent d-flex justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link navbar-link text-white" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-link text-white" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-link text-white" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-link text-white" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <ArrowBtn
                btnName={'Work with us'}
                btnClass={
                  'btn-warning' +
                  ' ' +
                  'nav-link' +
                  ' ' +
                  ' ' +
                  'button-text' +
                  ' ' +
                  ' ' +
                  'font-weight-bolder' +
                  ' ' +
                  'text-dark' +
                  ' ' +
                  'navbar_button'
                }
                arrowClass={'button-arrow'}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
