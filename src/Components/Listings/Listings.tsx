import React from 'react';
import ArrowBtn from '../Global/ArrowBtn/ArrowBtn';

import './Listings.scss';

const Listings = () => {
  return (
    <div className="listings">
      <ArrowBtn
        btnName={'See all listings'}
        btnClass={
          'btn-link' +
          ' ' +
          'button-text' +
          ' ' +
          ' ' +
          'font-weight-bold' +
          ' ' +
          'text-dark' +
          ' ' +
          'listings_button'
        }
        arrowClass={'orange_arrow'}
      />
    </div>
  );
};

export default Listings;
