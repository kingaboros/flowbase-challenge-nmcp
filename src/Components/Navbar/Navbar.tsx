import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import logo from '../../Images/logo.svg';

import logo from '../../Images/logo.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
<<<<<<< HEAD
    <div className="navbar">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <a href="" className="navbar__list__link">
            {' '}
            Nav Link{' '}
          </a>
        </li>
        <li>
          <a href="" className="navbar__list__link">
            {' '}
            Nav Link{' '}
          </a>
        </li>
        <li>
          <a href="" className="navbar__list__link">
            {' '}
            Nav Link{' '}
          </a>
        </li>
        <li>
          <a href="" className="navbar__list__link">
            {' '}
            Nav Link{' '}
          </a>
        </li>
        <li>
          <a href="" className="navbar__list__link">
            {' '}
            Work with us{' '}
          </a>
        </li>
      </ul>
=======
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent d-flex justify-content-between">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link navbar-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar_button button-text" href="#">
                Working with us <FaLongArrowAltRight className="button-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
>>>>>>> header-component
    </div>
  );
};

export default NavBar;
