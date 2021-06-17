import React from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import TestimonialCard from './TestimonialCard';

import './Testimonials.scss';

const Testimonials = () => {
  return (
    <div className="container testimonials">
      <div className="row"></div>

      <div className="row ">
        <div className="col-md-4">
          <TestimonialCard
            textStyle={'testimonial-card__text'}
            testimonialStyle={'col-8 testimonial-card__description'}
          />
        </div>

        <div className="col-md-4">
          <HorizontalLine lineStyle={'horizontal-line'} />
          <TestimonialCard
            textStyle={'testimonial-card__active'}
            testimonialStyle={'testimonial-card__black'}
          />
        </div>
        <div className="col-md-4">
          <TestimonialCard
            textStyle={'testimonial-card__text'}
            testimonialStyle={'col-8 testimonial-card__description'}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
