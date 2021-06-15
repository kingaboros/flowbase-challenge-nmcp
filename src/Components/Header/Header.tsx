import React from 'react';
import Navbar from '../Navbar/Navbar';
import Listings from '../Listings/Listings';

import './Header.scss';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="header__overlay">
          <div className="row">
            <div className="">
              <Navbar />
              <div className="col-md-7 col-sm-12 header__heading-wrapper">
                <h2 className="text-white header__heading">
                  Beautiful homes made for you
                </h2>
                <p className="text-white header__heading-description">
                  In oculis quidem se esse admonere interesse enim maxime
                  placeat, facere possimus, omnis. Et quidem faciunt, ut labore
                  et accurate disserendum et harum quidem exercitus quid.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Listings /> */}
      </div>
    </div>
  );
};

export default Header;
