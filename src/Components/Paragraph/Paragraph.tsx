import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import '../Paragraph/Paragraph.scss';
import strings from '../../themes/strings';

const Paragraph = (props: any) => {
  return (
    <div className="paragraphWrapper">
      <div className={props.paragraphClass}>
        <div className="col-md-6 col-12">
          <img
            src={props.imgOrientation}
            alt="people speaking with agent"
            className={props.imgStyle}
          />
        </div>

        <div className={props.descriptionStyle}>
          <HorizontalLine lineStyle={'horizontalLine'} />
          <Heading
            headingStyle={'headingTitle'}
            title={strings.headings.headingText1}
          />
          <p className="paragraphDescription">{strings.descriptions.text1}</p>
          <ArrowBtn
            btnName={strings.buttons.paragraphBtn}
            btnClass={'paragraphButton'}
            arrowClass={'orangeArrow'}
          />
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
