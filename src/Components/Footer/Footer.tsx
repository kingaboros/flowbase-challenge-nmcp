import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import strings from '../../themes/strings';
import '../Footer/Footer.scss';
import logo from '../../images/logo.svg';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import FooterColumnHeading from './FooterColumnHeading';

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerRow">
        <h2 className="footerHeading">
          {strings.headings.footerHeading}
          <span className="footerOrangeText">
            {strings.headings.footerHeadingOrange}
          </span>
        </h2>
        <div className="footerButton">
          <ArrowBtn
            btnName={strings.buttons.footerBtn}
            btnClass={`${'btn-warning'} ${'navbarButton'} ${'centeredParagraphButton'}`}
            arrowClass={'whiteArrow'}
          />
        </div>
      </div>
      <div className="footerLine"> </div>
      <div className="lowerFooter">
        <div className="row">
          <div className="col-md-4">
            <img className="footerLogo" src={logo} alt="logo" />
            <div className="row">
              <div className="socialLinks">
                <FaFacebookF />
              </div>
              <div className="socialLinks">
                <AiOutlineTwitter />
              </div>
              <div className="socialLinks">
                <AiOutlineInstagram />
              </div>
            </div>
          </div>

          <div className="col-md-2 ">
            <FooterColumnHeading />
          </div>
          <div className="col-md-2">
            <FooterColumnHeading />
          </div>
          <div className="col-md-2">
            <FooterColumnHeading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
