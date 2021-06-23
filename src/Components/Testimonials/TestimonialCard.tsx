import React from 'react';
import images from '../../themes/images';
import strings from '../../themes/strings';

import * as classes from './TestimonialCard.module.scss';

const TestimonialCard = (props: any) => {
  return (
    <div className={classes.container}>
      <div className={classes.testimonialCardText}>
        <div className={classes.row}>
          <div className={classes.testimonialColumn}>
            <p className={props.textStyle}>
              {strings.testimonials.testimonial1}
            </p>
          </div>
          <div className={props.testimonialStyle}>
            <div className={classes.testimonialCardRow}>
              <div className={classes.testimonialCardImgColumn}>
                <img
                  className={classes.testimonialCardImg}
                  src={images.testimonialImg}
                  alt="properties"
                />
              </div>
              <div className={classes.testimonialCardDescription}>
                <h4 className={classes.testimonialCardName}>
                  {strings.testimonials.testimonialName1}
                </h4>
                <p className={classes.testimonialCardRole}>
                  {strings.testimonials.testimonialRole1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
