import React from 'react';
import logo from './logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
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
          <button> Work with us </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
