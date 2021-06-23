import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import strings from '../../themes/strings';

import * as classes from './Paragraph.module.scss';
import * as lineClasses from '../HorizontalLine/HorizontalLine.module.scss';
import * as headingClasses from '../Heading/Heading.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

const Paragraph = (props: any) => {
  return (
    <div className={classes.paragraphWrapper}>
      <div className={props.paragraphClass}>
        <div className={classes.imgCol}>
          <img
            src={props.imgOrientation}
            alt="people speaking with agent"
            className={props.imgStyle}
          />
        </div>

        <div className={props.descriptionStyle}>
          <HorizontalLine lineStyle={lineClasses.horizontalLine} />
          <Heading
            headingStyle={headingClasses.headingTitle}
            title={strings.headings.headingText1}
          />
          <p className={classes.paragraphDescription}>
            {strings.descriptions.text1}
          </p>
          <ArrowBtn
            btnName={strings.buttons.paragraphBtn}
            btnClass={buttonClasses.paragraphButton}
            arrowClass={buttonClasses.orangeArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
