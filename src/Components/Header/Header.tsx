import React from 'react';
import Navbar from '../Navbar/Navbar';
import strings from '../../themes/strings';
import './Header.scss';

const Header = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className="header">
        <div className="headerOverlay">
          <div className="row">
            <div>
              <Navbar />
              <div className="headerHeadingWrapper">
                <h2 className="headerHeading">
                  {strings.headings.headerHeading}
                </h2>
                <p className="headerHeadingDescription">
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
