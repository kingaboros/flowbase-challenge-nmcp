import React from 'react';
import strings from '../../themes/strings';
import './FooterColumnHeading.scss';

const FooterColumnHeading = () => {
  return (
    <div className="footerHeadingColumns">
      <h4 className="footerColumnHeading">
        {strings.headings.footerColumnHeading}
      </h4>
      <div className="row footerHeadingRow ">
        <ul className="footerColumnList">
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className="footerColumnLinks"
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className="footerColumnLinks"
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className="footerColumnLinks"
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className="footerColumnLinks"
            >
              Link goes here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterColumnHeading;
