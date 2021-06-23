import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';

import './Listings.scss';

const Listings = () => {
  return (
    <div className="listings">
      <ArrowBtn
        btnName={strings.buttons.listingsBtn}
        btnClass={'listingsButton'}
        arrowClass={'orangeArrow'}
      />
    </div>
  );
};

export default Listings;
