import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import strings from '../../themes/strings';
import '../Paragraph/CenteredParagraph.scss';

const CenteredParagraph = () => {
  return (
    <div className="container-fluid centered-paragraph__description_wrapper ">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-md-5">
          <HorizontalLine
            lineStyle={'horizontal-line' + ' ' + 'horizontal-line-center'}
          />
          <Heading
            headingStyle={'heading__title' + ' ' + 'heading__title-white'}
            title={strings.headings.headingText1}
          />

          <p className="centered-paragraph__description text-center">
            {strings.descriptions.text1}
          </p>
          <ArrowBtn
            btnName={strings.buttons.paragraphBtn}
            btnClass={
              'btn-warning' +
              ' ' +
              'navbar_button' +
              ' ' +
              'centered-paragraph__button'
            }
            arrowClass={'white_arrow'}
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredParagraph;
