import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';
import images from '../../themes/images';
import * as classes from './Footer.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import FooterColumnHeading from './FooterColumnHeading';

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerRow}>
        <h2 className={classes.footerHeading}>
          {strings.headings.footerHeading}
          <span className={classes.footerOrangeText}>
            {strings.headings.footerHeadingOrange}
          </span>
        </h2>
        <div className={classes.footerButton}>
          <ArrowBtn
            btnName={strings.buttons.footerBtn}
            btnClass={buttonClasses.footerBtn}
            arrowClass={buttonClasses.whiteArrow}
          />
        </div>
      </div>
      <div className={classes.footerLine}> </div>
      <div className={classes.lowerFooter}>
        <div className={classes.row}>
          <div className={classes.footerLogoColumn}>
            <img className={classes.footerLogo} src={images.logo} alt="logo" />
            <div className={classes.row}>
              <div className={classes.socialLinks}>
                <FaFacebookF />
              </div>
              <div className={classes.socialLinks}>
                <AiOutlineTwitter />
              </div>
              <div className={classes.socialLinks}>
                <AiOutlineInstagram />
              </div>
            </div>
          </div>

          <div className={classes.footerColumn}>
            <FooterColumnHeading />
          </div>
          <div className={classes.footerColumn}>
            <FooterColumnHeading />
          </div>
          <div className={classes.footerColumn}>
            <FooterColumnHeading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
