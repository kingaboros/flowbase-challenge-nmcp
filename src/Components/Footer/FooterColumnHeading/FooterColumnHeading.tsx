import React from 'react';

import '../../Footer/FooterColumnHeading/FooterColumnHeading.scss';

const FooterColumnHeading = () => {
  return (
    <div className="footer__heading-columns ">
      <h4 className="footer__column-heading"> Column Heading </h4>
      <div className="row footer-heading-row ">
        <ul className="footer__column-list nav-link ">
          <li className="">
            <a href="#" className="footer__column-links nav-link">
              Link goes here
            </a>
          </li>
          <li>
            <a href="#" className="footer__column-links nav-link">
              Link goes here
            </a>
          </li>
          <li>
            <a href="#" className="footer__column-links nav-link">
              Link goes here
            </a>
          </li>
          <li>
            <a href="#" className="footer__column-links nav-link">
              Link goes here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterColumnHeading;
