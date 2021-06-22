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
    <div className="footer__wrapper containter-fluid">
      <div className="row ">
        <div className="col-8">
          <h2 className="footer__heading heading__title-white">
            {strings.headings.footerHeading}
            <span className="footer__orange-text">
              {strings.headings.footerHeadingOrange}
            </span>{' '}
          </h2>
        </div>
        <div className="col-4 footer__button">
          <ArrowBtn
            btnName={strings.buttons.footerBtn}
            btnClass={`${'btn-warning'} ${'navbar_button'} ${'centered-paragraph__button'}`}
            arrowClass={'white_arrow'}
          />
        </div>
      </div>
      <div className="footer-line"> </div>
      <div className="lower-footer">
        <div className="row">
          <div className="col-md-4">
            <img className="footer__logo" src={logo} alt="logo" />
            <div className="row ">
              <div className="col-4 social-links">
                <FaFacebookF />
              </div>
              <div className="col-4 social-links">
                <AiOutlineTwitter />
              </div>
              <div className="col-4 social-links">
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
