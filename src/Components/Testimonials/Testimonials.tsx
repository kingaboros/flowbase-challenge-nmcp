import React from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import TestimonialCard from './TestimonialCard';

import * as classes from './Testimonials.module.scss';
import * as testimonialCardStyle from './TestimonialCard.module.scss';
import * as lineClasses from '../HorizontalLine/HorizontalLine.module.scss';

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className={classes.row}></div>

      <div className={classes.row}>
        <div className={classes.testimonialsColumn}>
          <TestimonialCard
            textStyle={testimonialCardStyle.testimonialCardText}
            testimonialStyle={testimonialCardStyle.testimonialCardDescription}
          />
        </div>

        <div className={classes.testimonialsColumn}>
          <HorizontalLine lineStyle={lineClasses.horizontalLine} />
          <TestimonialCard
            textStyle={testimonialCardStyle.testimonialCardActive}
            testimonialStyle={testimonialCardStyle.testimonialCardBlack}
          />
        </div>
        <div className={classes.testimonialsColumn}>
          <TestimonialCard
            textStyle={testimonialCardStyle.testimonialCardText}
            testimonialStyle={testimonialCardStyle.testimonialCardDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
