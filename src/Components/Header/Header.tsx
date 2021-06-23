import React from 'react';
import Navbar from '../Navbar/Navbar';
import strings from '../../themes/strings';
import * as classes from './Header.module.scss';

const Header = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className={classes.header}>
        <div className={classes.headerOverlay}>
          <div className={classes.row}>
            <div>
              <Navbar />
              <div className={classes.headerHeadingWrapper}>
                <h2 className={classes.headerHeading}>
                  {strings.headings.headerHeading}
                </h2>
                <p className={classes.headerHeadingDescription}>
                  {strings.descriptions.headerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
