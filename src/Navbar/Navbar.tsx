import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBtn from '../components/ArrowBtn/ArrowBtn';

import strings from '../themes/strings';
import images from '../themes/images';

import * as classes from './Navbar.module.scss';
import * as buttonClasses from '../components/ArrowBtn/ArrowBtn.module.scss';

const NavBar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          <img src={images.logo} className={classes.logo} alt="logo" />

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={classes.collapse} id="navbarNav">
            <ul className={classes.navMenuList}>
              <li className="navMenuListItem">
                <Link to="/" className={classes.navMenuLink}>
                  Home
                </Link>
              </li>
              <li className="navMenuListItem">
                <Link to="/signup" className={classes.navMenuLink}>
                  Sign Up
                </Link>
              </li>
              <li className="navMenuListItem">
                <Link to="/login" className={classes.navMenuLink}>
                  Login
                </Link>
              </li>
              <li className="navMenuListItem">
                <Link to="/myprofile" className={classes.navMenuLink}>
                  My Profile
                </Link>
              </li>
              <li className="navMenuListItem">
                <ArrowBtn
                  btnName={strings.buttons.navbarBtn}
                  btnClass={buttonClasses.navbarButton}
                  arrowClass={buttonClasses.whiteArrow}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
