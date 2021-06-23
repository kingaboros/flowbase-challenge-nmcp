import React from 'react';
import strings from '../../themes/strings';
import * as classes from './FooterColumnHeading.module.scss';

const FooterColumnHeading = () => {
  return (
    <div className={classes.footerHeadingColumns}>
      <h4 className={classes.footerColumnHeading}>
        {strings.headings.footerColumnHeading}
      </h4>
      <div className={classes.footerHeadingRow}>
        <ul className={classes.footerColumnList}>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className={classes.footerColumnLinks}
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className={classes.footerColumnLinks}
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className={classes.footerColumnLinks}
            >
              Link goes here
            </a>
          </li>
          <li>
            <a
              href="http://www.nomorecoffeeplease.com/"
              className={classes.footerColumnLinks}
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
