import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import strings from '../../themes/strings';

import * as classes from './CenteredParagraph.module.scss';
import * as lineClasses from '../HorizontalLine/HorizontalLine.module.scss';
import * as headingClasses from '../Heading/Heading.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';

const CenteredParagraph = () => {
  return (
    <div className={classes.centeredParagraphDescriptionWrapper}>
      <div className={classes.row}>
        <div className="col-lg-3"></div>
        <div className={classes.horizontalLineRow}>
          <HorizontalLine lineStyle={lineClasses.horizontalLineCenter} />
          <Heading
            headingStyle={headingClasses.centeredParagraphHeading}
            title={strings.headings.headingText1}
          />

          <p className={classes.centeredParagraphDescription}>
            {strings.descriptions.text1}
          </p>
          <ArrowBtn
            btnName={strings.buttons.paragraphBtn}
            btnClass={buttonClasses.centeredParagraphButton}
            arrowClass={buttonClasses.whiteArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredParagraph;
