import React from 'react';
import Navbar from '../Navbar/Navbar';
import strings from '../../themes/strings';
import './Header.scss';

const Header = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className="header">
        <div className="header__overlay">
          <div className="row">
            <div className="">
              <Navbar />
              <div className="col-md-7 col-12 header__heading-wrapper">
                <h2 className="text-white header__heading">
                  {strings.headings.headerHeading}
                </h2>
                <p className="text-white header__heading-description">
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
