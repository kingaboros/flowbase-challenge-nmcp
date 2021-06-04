import React from 'react';

import logo from '../../Images/logo.svg';
import './NavBar.scss';

const NavBar = () => {
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
          <a href="" className="navbar__list__link">
            {' '}
            Work with us{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
