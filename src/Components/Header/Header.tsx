import React from 'react';
import Navbar from '../Navbar/Navbar';
import Listings from '../Listings/Listings';

import './Header.scss';

const Header = () => {
  return (
    <div className="container-fluid col-12">
      <div className="header">
        <div className="header__overlay">
          <Navbar />

          <div className="header__heading-wrapper container-fluid">
            <div className="row">
              <div className="col-xl-7 col-12">
                <h2 className="header__heading">
                  Beautiful homes made for you
                </h2>
                <p className="header__heading-description">
                  In oculis quidem se esse admonere interesse enim maxime
                  placeat, facere possimus, omnis. Et quidem faciunt, ut labore
                  et accurate disserendum et harum quidem exercitus quid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Listings />
      </div>
    </div>
  );
};

export default Header;
