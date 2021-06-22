import React from 'react';
import './TestimonialCard.scss';
import img1 from '../../images/testimonial1.png';
import strings from '../../themes/strings';
const TestimonialCard = (props: any) => {
  return (
    <div className="container">
      <div className="testimonial-card__text">
        <div className="row ">
          <div className="col-12 ">
            <p className={props.textStyle}>
              {strings.testimonials.testimonial1}
            </p>
          </div>
          <div className={props.testimonialStyle}>
            <div className="row testimonial-card_row">
              <div className="col-4 ">
                <img className="testimonial-card__img" src={img1} />
              </div>
              <div className="col-8 testimonial-card__description">
                <h4 className="testimonial-card__name">
                  {strings.testimonials.testimonialName1}
                </h4>
                <p className="testimonial-card__role">
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
