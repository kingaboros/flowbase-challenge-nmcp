import React from 'react';
import './TestimonialCard.scss';
import img1 from '../../images/testimonial1.png';
import strings from '../../themes/strings';
const TestimonialCard = (props: any) => {
  return (
    <div className="container">
      <div className="testimonialCardText">
        <div className="row ">
          <div className="col-12 ">
            <p className={props.textStyle}>
              {strings.testimonials.testimonial1}
            </p>
          </div>
          <div className={props.testimonialStyle}>
            <div className="testimonialCardRow">
              <div className="col-4 ">
                <img
                  className="testimonialCardImg"
                  src={img1}
                  alt="properties"
                />
              </div>
              <div className="testimonialCardDescription">
                <h4 className="testimonialCardName">
                  {strings.testimonials.testimonialName1}
                </h4>
                <p className="testimonialCardRole">
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
