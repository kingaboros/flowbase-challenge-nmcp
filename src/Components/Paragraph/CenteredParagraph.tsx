import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import strings from '../../themes/strings';
import '../Paragraph/CenteredParagraph.scss';

const CenteredParagraph = () => {
  return (
    <div className="centeredParagraphDescriptionWrapper">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-md-5">
          <HorizontalLine
            lineStyle={`${'horizontalLine'} ${'horizontalLineCenter'}`}
          />
          <Heading
            headingStyle={'centeredParagraphHeading'}
            title={strings.headings.headingText1}
          />

          <p className="centeredParagraphDescription">
            {strings.descriptions.text1}
          </p>
          <ArrowBtn
            btnName={strings.buttons.paragraphBtn}
            btnClass={'centeredParagraphButton'}
            arrowClass={'whiteArrow'}
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredParagraph;
