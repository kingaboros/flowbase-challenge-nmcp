import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './Listings.scss';

const Listings = () => {
  return (
    <div className="listings">
      <a className="listings__link" href="#">
        See all listings{' '}
        <FaLongArrowAltRight className="listings__link__arrow" />
      </a>
    </div>
  );
};

export default Listings;
