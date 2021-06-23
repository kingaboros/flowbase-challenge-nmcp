import React from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import TestimonialCard from './TestimonialCard';

import './Testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="row"></div>

      <div className="row ">
        <div className="col-md-4">
          <TestimonialCard
            textStyle={'testimonialCardText'}
            testimonialStyle={'testimonialCardDescription'}
          />
        </div>

        <div className="col-md-4">
          <HorizontalLine lineStyle={'horizontalLine'} />
          <TestimonialCard
            textStyle={'testimonialCardActive'}
            testimonialStyle={'testimonialCardBlack'}
          />
        </div>
        <div className="col-md-4">
          <TestimonialCard
            textStyle={'testimonialCardText'}
            testimonialStyle={'testimonialCardDescription'}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
