import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import logo from '../../Images/logo.svg';
import './Navbar.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-transparent ">
      <div className="container-fluid">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
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
                arrowClass={'white_arrow'}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
