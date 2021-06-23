import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';

import * as classes from './Listings.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

const Listings = () => {
  return (
    <div className={classes.listings}>
      <ArrowBtn
        btnName={strings.buttons.listingsBtn}
        btnClass={buttonClasses.listingsButton}
        arrowClass={buttonClasses.orangeArrow}
      />
    </div>
  );
};

export default Listings;
