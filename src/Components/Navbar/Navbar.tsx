import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';
import images from '../../themes/images';

import * as classes from './Navbar.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

const NavBar = () => {
  return (
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
              <a
                className={classes.navMenuLink}
                href="http://www.nomorecoffeeplease.com/"
              >
                Nav Link
              </a>
            </li>
            <li className="navMenuListItem">
              <a
                className={classes.navMenuLink}
                href="http://www.nomorecoffeeplease.com/"
              >
                Nav Link
              </a>
            </li>
            <li className="navMenuListItem">
              <a
                className={classes.navMenuLink}
                href="http://www.nomorecoffeeplease.com/"
              >
                Nav Link
              </a>
            </li>
            <li className="navMenuListItem">
              <a
                className={classes.navMenuLink}
                href="http://www.nomorecoffeeplease.com/"
              >
                Nav Link
              </a>
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
  );
};

export default NavBar;
